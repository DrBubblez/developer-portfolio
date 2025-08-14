document.querySelectorAll('#nav-link').forEach(link => {
    if (link.href === window.location.href) {
        link.classList.add("underline", "underline-offset-7")
    }
}); // Underlines the current local page on the navbar