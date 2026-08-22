"use strict";

const proxyGameFrame = document.getElementById("game-frame");
const configuredGameUrl = proxyGameFrame?.dataset.gameUrl;
const alternateGameHost = "https://xn--68ja2bjb6b6c1ea6n6586bf9xa0k0e3pze.xyz";
const gameUrl = (sessionStorage.getItem("gameURL") || configuredGameUrl || "")
    .replace(/^https:\/\/frogiesarcade\.win/, alternateGameHost);

function showGameError(error) {
    const message = document.createElement("p");
    message.textContent = "This game could not be loaded through the proxy.";
    message.title = error instanceof Error ? error.message : String(error);
    message.style.cssText = "color:#fff;text-align:center;padding:2rem;font-family:sans-serif";
    proxyGameFrame?.replaceWith(message);
}

async function loadGameThroughProxy() {
    if (!proxyGameFrame || !gameUrl) return;

    try {
        await registerSW();
        const connection = new BareMux.BareMuxConnection("/baremux/worker.js");
        const transport = "/epoxy/index.mjs";
        if ((await connection.getTransport()) !== transport) {
            const wispUrl = (location.protocol === "https:" ? "wss" : "ws") +
                "://" + location.host + "/wisp/";
            await connection.setTransport(transport, [{ wisp: wispUrl }]);
        }
        proxyGameFrame.src = __uv$config.prefix + __uv$config.encodeUrl(gameUrl);
    } catch (error) {
        showGameError(error);
    }
}

loadGameThroughProxy();
