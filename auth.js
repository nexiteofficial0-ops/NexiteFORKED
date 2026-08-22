(() => {
    const usersKey = "nexite-users";
    const sessionKey = "nexite-session";

    function read(key, fallback) {
        try { return JSON.parse(localStorage.getItem(key) || JSON.stringify(fallback)); }
        catch { return fallback; }
    }

    function write(key, value) { localStorage.setItem(key, JSON.stringify(value)); }

    function users() { return read(usersKey, {}); }
    function currentUser() { return read(sessionKey, ""); }
    function setSession(username) { write(sessionKey, username); }
    function getUser(username) { return users()[username.toLowerCase()] || null; }

    function captcha() {
        const first = Math.floor(Math.random() * 8) + 2;
        const second = Math.floor(Math.random() * 8) + 2;
        const answer = first + second;
        document.querySelectorAll("[data-captcha-question]").forEach(item => item.textContent = `${first} + ${second} = ?`);
        return answer;
    }

    function fileToDataUrl(file, callback) {
        const reader = new FileReader();
        reader.addEventListener("load", () => callback(reader.result));
        reader.readAsDataURL(file);
    }

    window.NexiteAuth = { users, currentUser, setSession, getUser, write, captcha, fileToDataUrl };

    document.addEventListener("DOMContentLoaded", () => {
        const profileLink = document.getElementById("profile-link");
        const username = new URLSearchParams(location.search).get("user") || currentUser();
        if (!profileLink || !username || !getUser(username)) return;
        const profileUrl = new URL("dashboard.html", location.href);
        profileUrl.searchParams.set("user", getUser(username).username);
        profileLink.innerHTML = `<a class="auth-link" href="${profileUrl.href}">share this profile</a>`;
    });
})();
