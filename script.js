function encrypt() {
    const text = document.getElementById("message").value;
    const password = document.getElementById("password").value;

    let result = [];

    for (let i = 0; i < text.length; i++) {
        const code = text.charCodeAt(i) ^ password.charCodeAt(i % password.length);
        result.push("🔐" + code);
    }

    document.getElementById("encryptedOutput").innerText = result.join("");
}

function decrypt() {
    const encryptedText = document.getElementById("emojiInput").value;
    const password = document.getElementById("decryptPassword").value;

    const parts = encryptedText.split("🔐").filter(Boolean);
    const decrypted = parts.map((code, i) => {
        return String.fromCharCode(code ^ password.charCodeAt(i % password.length));
    });

    document.getElementById("decryptedOutput").innerText = decrypted.join("");
}

function showTab(tabId) {
    document.querySelectorAll(".tab").forEach(tab => {
        tab.classList.remove("active");
    });
    document.getElementById(tabId).classList.add("active");
}
