// Select input field and item list
const searchInput = document.getElementById("search");
const itemList = document.getElementById("itemList");
const items = itemList.getElementsByTagName("li");

// Add an event listener to the input field
searchInput.addEventListener("input", function () {
    const filter = searchInput.value.toLowerCase();

    // Loop through all list items
    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        const text = item.textContent || item.innerText;

        // Show or hide item based on filter
        if (text.toLowerCase().indexOf(filter) > -1) {
            item.style.display = "";
        } else {
            item.style.display = "none";
        }
    }
});
