document.addEventListener("DOMContentLoaded", () => {
    // Handle the restricted message textarea
    const restrictedTextarea = document.getElementById("restricted-message");
    const restrictedCharCount = document.getElementById("restricted-charCount");
    const maxChars = 500;

    restrictedTextarea.addEventListener("input", () => {
        const currentLength = restrictedTextarea.value.length;
        restrictedCharCount.textContent = `${currentLength} / ${maxChars}`;

        if (currentLength >= maxChars) {
            restrictedTextarea.classList.add("limit-reached");
            restrictedCharCount.classList.add("limit-reached");
        } else {
            restrictedTextarea.classList.remove("limit-reached");
            restrictedCharCount.classList.remove("limit-reached");
        }
    });

    // Handle the contact form message textarea
    const contactTextarea = document.getElementById("contact-message");
    const contactCharCount = document.getElementById("contact-charCount");

    contactTextarea.addEventListener("input", () => {
        const currentLength = contactTextarea.value.length;
        contactCharCount.textContent = `${currentLength} / ${maxChars}`;

        if (currentLength >= maxChars) {
            contactTextarea.classList.add("limit-reached");
            contactCharCount.classList.add("limit-reached");
        } else {
            contactTextarea.classList.remove("limit-reached");
            contactCharCount.classList.remove("limit-reached");
        }
    });
});
