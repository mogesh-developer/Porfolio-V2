document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.createElement("button");
    toggleButton.innerText = "Toggle Dark Mode";
    toggleButton.classList.add("dark-mode-toggle");
    document.body.appendChild(toggleButton);

    const darkModeStyles = {
        backgroundColor: "#121212",
        color: "#ffffff"
    };

    const lightModeStyles = {
        backgroundColor: "#ffffff",
        color: "#000000"
    };

    let isDarkMode = false;

    toggleButton.addEventListener("click", () => {
        isDarkMode = !isDarkMode;
        if (isDarkMode) {
            Object.entries(darkModeStyles).forEach(([key, value]) => {
                document.body.style[key] = value;
            });
        } else {
            Object.entries(lightModeStyles).forEach(([key, value]) => {
                document.body.style[key] = value;
            });
        }
    });
});