"use strict";

const newTabUrl = "nexite://newtab";
const form = document.getElementById("uv-form");
const address = document.getElementById("uv-address");
const searchEngine = document.getElementById("uv-search-engine");
const newTabPage = document.getElementById("new-tab-page");
const newTabSearch = document.getElementById("new-tab-search");
const frameContainer = document.getElementById("frame-container");
const tabList = document.getElementById("tab-list");
const error = document.getElementById("uv-error");
const errorCode = document.getElementById("uv-error-code");
const connection = new BareMux.BareMuxConnection("/baremux/worker.js");

const tabs = [];
let activeTabId = null;
let tabCounter = 0;

function createTab() {
	const tab = {
		id: `tab-${++tabCounter}`,
		title: "New Tab",
		url: newTabUrl,
		frame: document.createElement("iframe"),
	};

	tab.frame.className = "web-frame";
	tab.frame.title = "Private web session";
	tab.frame.hidden = true;
	tab.frame.addEventListener("load", () => updateTabFromFrame(tab));
	frameContainer.appendChild(tab.frame);
	tabs.push(tab);
	return tab;
}

function getActiveTab() {
	return tabs.find((tab) => tab.id === activeTabId);
}

function renderTabs() {
	tabList.replaceChildren();
	for (const tab of tabs) {
		const tabButton = document.createElement("button");
		tabButton.className = `browser-tab${tab.id === activeTabId ? " is-active" : ""}`;
		tabButton.type = "button";
		tabButton.setAttribute("role", "tab");
		tabButton.setAttribute("aria-selected", tab.id === activeTabId ? "true" : "false");
		tabButton.title = tab.url;
		tabButton.innerHTML = `<span class="tab-favicon">${tab.url === newTabUrl ? "N" : "•"}</span><span class="tab-title"></span><span class="tab-close" aria-label="Close tab">&times;</span>`;
		tabButton.querySelector(".tab-title").textContent = tab.title;
		tabButton.addEventListener("click", (event) => {
			if (event.target.closest(".tab-close")) {
				closeTab(tab.id);
				return;
			}
			activateTab(tab.id);
		});
		tabList.appendChild(tabButton);
	}
}

function activateTab(tabId) {
	const tab = tabs.find((item) => item.id === tabId);
	if (!tab) return;
	activeTabId = tabId;
	for (const item of tabs) item.frame.hidden = item.id !== tabId;
	newTabPage.hidden = tab.url !== newTabUrl;
	address.value = tab.url;
	renderTabs();
	updateNavigationButtons();
}

function closeTab(tabId) {
	const tabIndex = tabs.findIndex((item) => item.id === tabId);
	if (tabIndex < 0) return;
	const wasActive = tabs[tabIndex].id === activeTabId;
	tabs[tabIndex].frame.remove();
	tabs.splice(tabIndex, 1);
	if (!tabs.length) {
		const replacement = createTab();
		activeTabId = replacement.id;
	} else if (wasActive) {
		activateTab(tabs[Math.max(0, tabIndex - 1)].id);
	}
	renderTabs();
}

function showError(err) {
	error.textContent = "Unable to open this page.";
	errorCode.textContent = err.toString();
}

function clearError() {
	error.textContent = "";
	errorCode.textContent = "";
}

function updateNavigationButtons() {
	const tab = getActiveTab();
	const isNewTab = !tab || tab.url === newTabUrl;
	document.getElementById("back-button").disabled = isNewTab;
	document.getElementById("forward-button").disabled = isNewTab;
	document.getElementById("reload-button").disabled = isNewTab;
}

function updateTabFromFrame(tab) {
	if (!tab.frame.contentWindow || tab.frame.hidden) return;
	try {
		const frameUrl = tab.frame.contentWindow.location.href;
		if (frameUrl && frameUrl !== "about:blank") {
			const encodedUrl = frameUrl.split(__uv$config.prefix)[1];
			tab.url = encodedUrl ? __uv$config.decodeUrl(encodedUrl) : frameUrl;
		}
		tab.title = tab.frame.contentDocument?.title || new URL(tab.url).hostname || "Private tab";
		address.value = tab.url;
		renderTabs();
		updateNavigationButtons();
	} catch (err) {
		tab.title = "Private tab";
		renderTabs();
	}
}

async function navigate(input) {
	const tab = getActiveTab();
	if (!tab) return;
	const trimmedInput = input.trim();
	if (!trimmedInput) return;
	clearError();
	if (trimmedInput.toLowerCase() === newTabUrl) {
		tab.url = newTabUrl;
		tab.title = "New Tab";
		tab.frame.src = "about:blank";
		activateTab(tab.id);
		return;
	}
	const url = search(trimmedInput, searchEngine.value);
	tab.url = url;
	tab.title = "Loading...";
	address.value = url;
	newTabPage.hidden = true;
	tab.frame.hidden = false;
	renderTabs();
	updateNavigationButtons();
	try {
		await registerSW();
		const wispUrl = "wss://www.cherri-education.online/socket/";
		const transportReady = (async () => {
			if ((await connection.getTransport()) !== "/epoxy/index.mjs") {
				await connection.setTransport("/epoxy/index.mjs", [{ wisp: wispUrl }]);
			}
		})();
		await Promise.race([
			transportReady,
			new Promise((_, reject) => setTimeout(() => reject(new Error("Proxy transport timed out.")), 5000)),
		]);
		tab.frame.src = __uv$config.prefix + __uv$config.encodeUrl(url);
	} catch (err) {
		showError(err);
	}
}

form.addEventListener("submit", (event) => {
	event.preventDefault();
	navigate(address.value);
});

newTabSearch.addEventListener("keydown", (event) => {
	if (event.key === "Enter") {
		event.preventDefault();
		address.value = newTabSearch.value;
		navigate(newTabSearch.value);
	}
});

document.getElementById("new-tab-enter").addEventListener("click", () => {
	address.value = newTabSearch.value;
	navigate(newTabSearch.value);
});

document.getElementById("new-tab-button").addEventListener("click", () => {
	const tab = createTab();
	activateTab(tab.id);
	newTabSearch.focus();
});
document.getElementById("home-button").addEventListener("click", () => navigate(newTabUrl));
document.getElementById("reload-button").addEventListener("click", () => getActiveTab()?.frame.contentWindow.location.reload());
document.getElementById("back-button").addEventListener("click", () => getActiveTab()?.frame.contentWindow.history.back());
document.getElementById("forward-button").addEventListener("click", () => getActiveTab()?.frame.contentWindow.history.forward());
document.getElementById("menu-button").addEventListener("click", () => address.focus());

const initialTab = createTab();
activateTab(initialTab.id);
