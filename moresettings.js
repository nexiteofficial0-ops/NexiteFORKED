(function () {
    "use strict";

    const settingsKey = "nexite-settings";
    const legacyKey = "tab";
    const themeFiles = {
        default: "/stuff/themes/default/theme.css",
        baka: "/stuff/themes/baka/theme.css",
        miku: "/stuff/themes/miku/theme.css",
        meximath: "/stuff/themes/meximath/theme.css",
        truffled: "/stuff/themes/truffled/theme.css",
        purple: "/stuff/themes/purple/theme.css",
        sakura: "/stuff/themes/sakura/theme.css",
        firey: "/stuff/themes/firey/theme.css",
        evil: "/stuff/themes/evil/theme.css"
    };

    const themeVariables = {
        default: ["#270f0f", "#180909", "#120707", "#ff4545", "#83261f", "#be3b32", "#251515"],
        baka: ["#19130a", "#251c0c", "#100c05", "#f5c542", "#9b7621", "#f5c542", "#4b3a16"],
        miku: ["#071b1c", "#08272a", "#041415", "#54e3c2", "#187a70", "#39bca3", "#164c4c"],
        meximath: ["#211307", "#2d1a08", "#170d04", "#f5a524", "#965c0d", "#d98712", "#56340c"],
        truffled: ["#1d1f22", "#292c31", "#141619", "#aeb4bc", "#626a74", "#8f98a3", "#454b53"],
        purple: ["#150d2b", "#211344", "#0d071c", "#b084ff", "#6037a4", "#8e66d8", "#39236c"],
        sakura: ["#260e1c", "#351225", "#180910", "#ff9fc7", "#9a4770", "#d777a3", "#5a2940"],
        firey: ["#260b05", "#351008", "#170603", "#ff6b21", "#a13c10", "#db5318", "#5d210d"],
        evil: ["#0b1205", "#17220a", "#070c03", "#b8ff3d", "#587a1c", "#8f2f2f", "#293b12"]
    };

    const defaults = {
        theme: "default",
        particles: true,
        mobileSizing: false,
        sortedGames: false,
        antiDeledao: false,
        cursorUrl: "",
        pointerUrl: ""
    };

    const cornerImageFiles = {
        default: "/stuff/teto/cornerimage.png",
        baka: "/stuff/themes/baka/cornerimage.png",
        miku: "/stuff/themes/miku/miku.png",
        meximath: "/stuff/teto/cornerimage.png",
        truffled: "/stuff/teto/cornerimage.png",
        purple: "/stuff/teto/cornerimage.png",
        sakura: "/stuff/teto/cornerimage.png",
        firey: "/stuff/teto/cornerimage.png",
        evil: "/stuff/teto/cornerimage.png"
    };

    function readJson(key) {
        try {
            return JSON.parse(localStorage.getItem(key) || "{}");
        } catch {
            return {};
        }
    }

    function getSettings() {
        const saved = { ...defaults, ...readJson(settingsKey) };
        const legacy = readJson(legacyKey);
        if (!localStorage.getItem(settingsKey) && legacy.theme) saved.theme = legacy.theme;
        if (legacy.mobilescreen !== undefined) saved.mobileSizing = legacy.mobilescreen === "true";
        if (legacy.noparticles !== undefined) saved.particles = legacy.noparticles !== "true";
        if (legacy.deledao !== undefined) saved.antiDeledao = legacy.deledao === "true";
        return saved;
    }

    function saveSettings(settings) {
        localStorage.setItem(settingsKey, JSON.stringify(settings));
        const legacy = readJson(legacyKey);
        legacy.theme = settings.theme;
        legacy.mobilescreen = String(Boolean(settings.mobileSizing));
        legacy.noparticles = String(!settings.particles);
        legacy.deledao = String(Boolean(settings.antiDeledao));
        localStorage.setItem(legacyKey, JSON.stringify(legacy));
    }

    function applyCornerImage(theme) {
        const image = document.getElementById("cornerimage");
        if (!image) return;

        const nextSrc = cornerImageFiles[theme] || cornerImageFiles.default;
        if (image.src !== location.origin + nextSrc && image.getAttribute("src") !== nextSrc) {
            image.src = nextSrc;
        }
    }

    function loadTheme(theme, settingsOverride) {
        const stylesheetId = "nexite-theme-stylesheet";
        let stylesheet = document.getElementById(stylesheetId);
        if (!stylesheet) {
            stylesheet = document.createElement("link");
            stylesheet.id = stylesheetId;
            stylesheet.rel = "stylesheet";
            document.head.append(stylesheet);
        }
        stylesheet.addEventListener("load", () => {
            applyCornerImage(theme);
            applyCursors(settingsOverride || getSettings());
        }, { once: true });
        document.body.dataset.theme = themeFiles[theme] ? theme : "default";
        const variables = themeVariables[theme] || themeVariables.default;
        ["--background", "--dark", "--dark-2", "--red", "--red-dark", "--red-border", "--border"].forEach((name, index) => document.documentElement.style.setProperty(name, variables[index]));
        stylesheet.href = themeFiles[theme] || themeFiles.default;
        applyCornerImage(theme);
        return stylesheet;
    }

    function setFavicon(url) {
        const favicon = document.querySelector("link[rel='icon']");
        if (favicon && url) favicon.href = url;
    }

    function applyCloak(settings) {
        const tab = readJson(legacyKey);
        if (settings.cloak === "custom" && settings.customTitle) {
            document.title = settings.customTitle;
            setFavicon(settings.customFavicon);
            return;
        }
        if (tab.title) document.title = tab.title;
        if (tab.icon) setFavicon(tab.icon);
    }

    function applyDisplay(settings) {
        const particles = document.getElementById("particles-js");
        if (particles) particles.hidden = !settings.particles;
        document.body.classList.toggle("mobile-sizing", Boolean(settings.mobileSizing));
        document.body.classList.toggle("anti-deledao-enabled", Boolean(settings.antiDeledao));
    }

    function ensureSidebar() {
        if (document.getElementById("index-sidebar")) {
            document.body.classList.add("sidebar-layout");
            return;
        }

        const sidebar = document.createElement("aside");
        sidebar.id = "index-sidebar";
        sidebar.setAttribute("aria-label", "site navigation");
        sidebar.innerHTML = `
            <button class="sidebar-logo" type="button" onclick="location.href='/'" title="home" aria-label="home">
                <img src="/stuff/logo.png" alt="home">
            </button>
            <nav class="sidebar-navigation" aria-label="main navigation">
                <button type="button" onclick="location.href='/cherri-cloudflare-main/cherri-cloudflare-main/index.html'" title="games" aria-label="games"><img src="/stuff/icons/calc.svg" alt="games"></button>
                <button type="button" onclick="location.href='/Ultraviolet-App-main/index.html'" title="web" aria-label="web"><img src="/stuff/icons/web.png" alt="web"></button>
                <button type="button" onclick="location.href='partners.html'" title="partners" aria-label="partners"><img src="/stuff/icons/handshake-solid.svg" alt="partners"></button>
                <button type="button" onclick="location.href='extras.html'" title="extras" aria-label="extras"><img src="/stuff/icons/plus-solid.svg" alt="extras"></button>
            </nav>
            <div class="sidebar-footer">
                <button type="button" onclick="location.href='user.html'" title="profile" aria-label="profile"><img src="/stuff/icons/user.png" alt="profile"></button>
                <button type="button" onclick="location.href='settings.html'" title="settings" aria-label="settings"><img src="/stuff/icons/settings.png" alt="settings"></button>
            </div>
        `;
        document.body.append(sidebar);
        document.body.classList.add("sidebar-layout");
    }

    function validCursorUrl(value) {
        if (!value) return "";
        try {
            const url = new URL(value, location.href);
            return ["http:", "https:", "data:"].includes(url.protocol) ? url.href : "";
        } catch {
            return "";
        }
    }

    function applyCursors(settings) {
        const styleId = "nexite-custom-cursors";
        let style = document.getElementById(styleId);
        if (!style) {
            style = document.createElement("style");
            style.id = styleId;
            document.head.append(style);
        }

        let dot = document.getElementById("nexite-cursor-dot");
        if (!dot) {
            dot = document.createElement("span");
            dot.id = "nexite-cursor-dot";
            dot.setAttribute("aria-hidden", "true");
            document.body.append(dot);
            window.addEventListener("mousemove", event => {
                dot.style.left = `${event.clientX}px`;
                dot.style.top = `${event.clientY}px`;
            });
        }

        style.textContent = `
            *, *::before, *::after { cursor: none !important; }
            #nexite-cursor-dot {
                position: fixed;
                top: -100px;
                left: -100px;
                z-index: 2147483647;
                width: 8px;
                height: 8px;
                pointer-events: none;
                border-radius: 50%;
                background: #fff;
                box-shadow: 0 0 8px rgba(255, 255, 255, 0.75);
                transform: translate(-50%, -50%);
            }
        `;
    }

    function apply() {
        const settings = getSettings();
        ensureSidebar();
        loadTheme(settings.theme);
        applyCloak(settings);
        applyDisplay(settings);
        applyCursors(settings);
        saveSettings(settings);
        window.nexiteSettings = settings;
    }

    window.nexiteApplySettings = apply;
    window.nexiteSaveSettings = saveSettings;
    window.nexiteApplyCursors = applyCursors;
    window.nexiteLoadTheme = loadTheme;
    document.addEventListener("DOMContentLoaded", apply, { once: true });
})();
