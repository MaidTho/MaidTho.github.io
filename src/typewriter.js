// dark mode toggle
document.addEventListener("DOMContentLoaded", () => {
    const themeToggleBtn = document.getElementById("theme-toggle-btn");
    const sunIcon = document.getElementById("theme-icon-sun");
    const moonIcon = document.getElementById("theme-icon-moon");

    const applyTheme = (theme) => {
        const isDarkMode = theme === "dark-mode";
        document.body.classList.toggle("dark-mode", isDarkMode);
        sunIcon.style.display = isDarkMode ? "none" : "inline-block";
        moonIcon.style.display = isDarkMode ? "inline-block" : "none";
        localStorage.setItem("theme", theme);
    };

    const savedTheme = localStorage.getItem("theme") || "light-mode";
    applyTheme(savedTheme);

    themeToggleBtn.addEventListener("click", () => {
        const newTheme = document.body.classList.contains("dark-mode")
            ? "light-mode"
            : "dark-mode";
        applyTheme(newTheme);
    });
});

// typewriter effect
document.addEventListener("DOMContentLoaded", () => {
    const text =
        "Hi, I'm Christopher, a Software Developer and Tableau Data Specialist with 2 years experience in (web dev, data analysis / visualization, devops, AWS, documentation, etc). Free software enthusiast, and avid video game player.";
    const typedText = document.getElementById("typed-text");
    const cursor = document.getElementById("cursor");
    const typingSpeed = 20; // Speed in ms per character
    const cursorYOffset = 13;
    let index = 0;

    const updateCursorPosition = () => {
        const range = document.createRange();
        const wrapperRect = typedText.getBoundingClientRect();
        if (typedText.textContent.length > 0) {
            range.selectNodeContents(typedText);
            range.setStart(typedText.firstChild, index);
            const rect = range.getBoundingClientRect();
            cursor.style.left = `${rect.left - wrapperRect.left}px`;
            cursor.style.top = `${
                rect.top - wrapperRect.top + cursorYOffset
            }px`;
        } else {
            cursor.style.left = "0px"; // Fallback for empty content
        }
    };

    const typeWriter = () => {
        if (index < text.length) {
            typedText.textContent += text.charAt(index);
            index++;
            updateCursorPosition();
            setTimeout(typeWriter, typingSpeed);
        }
    };

    window.addEventListener("resize", updateCursorPosition);
    typeWriter();
});

// search posts
document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("search-input");
    const postList = document.getElementById("post-list");
    const posts = postList.querySelectorAll("li");

    const filterPosts = () => {
        const filter = searchInput.value.toLowerCase();
        posts.forEach((post) => {
            const postTitle = post.querySelector("a").textContent.toLowerCase();
            post.style.display = postTitle.includes(filter) ? "" : "none";
        });
    };

    searchInput.addEventListener("input", filterPosts);
});