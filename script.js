document.getElementById("searchInput").addEventListener("input", function () {
    const query = this.value.toLowerCase();
    const items = document.querySelectorAll("#itemList .item");

    items.forEach(item => {
        const text = item.textContent.toLowerCase();
        item.style.display = text.includes(query) ? "list-item" : "none";
    });
});
