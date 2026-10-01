
const infographicImages = document.querySelectorAll(".portfolio-grid img");

infographicImages.forEach((image) => {
    image.addEventListener("click", () => {
        const overlay = document.createElement("div");
        const enlargedImage = document.createElement("img");
        const closeButton = document.createElement("button");

        overlay.classList.add("image-overlay");
        enlargedImage.src = image.src;
        enlargedImage.alt = image.alt;
        closeButton.textContent = "×";
        closeButton.classList.add("close-image");

        overlay.appendChild(enlargedImage);
        overlay.appendChild(closeButton);
        document.body.appendChild(overlay);

        closeButton.addEventListener("click", () => {
            overlay.remove();
        });

        overlay.addEventListener("click", (event) => {
            if (event.target === overlay) {
                overlay.remove();
            }
        });

        document.addEventListener("keydown", function closeOnEscape(event) {
            if (event.key === "Escape") {
                overlay.remove();
                document.removeEventListener("keydown", closeOnEscape);
            }
        });
    });
});