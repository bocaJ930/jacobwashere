async function loadLinks() {
    try {
        const response = await fetch('links.json');
        const linkData = await response.json();

        const elements = document.querySelectorAll('[data-link]');

        elements.forEach(el => {
            const key = el.getAttribute('data-link');
            if (linkData[key]) {
                el.href = linkData[key];
            }
        });
    }
    catch (error) {
        console.error("Could not load links:", error);
    }
}

window.addEventListener('DOMContentLoaded', loadLinks);