// Open Chat Box
function openChat() {
    document.getElementById("chat-box").style.display = "flex";
    document.getElementById("overlay").style.display = "block";
    setTimeout(() => {
        document.getElementById("chat-box").style.transform = "translateY(0)";
        document.getElementById("overlay").style.opacity = "1";
    }, 10); // Small delay for smooth effect
}

// Close Chat Box
function closeChat() {
    document.getElementById("chat-box").style.transform = "translateY(100%)";
    document.getElementById("overlay").style.opacity = "0";
    setTimeout(() => {
        document.getElementById("chat-box").style.display = "none";
        document.getElementById("overlay").style.display = "none";
    }, 300); // Wait for transition to complete
}
