document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menuToggle");
    const menu = document.getElementById("menu");
    const hamburgerIcon = document.getElementById("hamburgerIcon");
    const closeMenuIcon = document.getElementById("closeMenuIcon");

    // Toggle the mobile menu on hamburger/close icon click
    menuToggle.addEventListener("click", function () {
        menu.classList.toggle("active");

        // Toggle visibility of icons
        hamburgerIcon.classList.toggle("hidden");
        closeMenuIcon.classList.toggle("hidden");
    });

    // If clicking outside the menu or toggle, close the menu
    document.addEventListener("click", function (event) {
        if (!menu.contains(event.target) && !menuToggle.contains(event.target)) {
            menu.classList.remove("active");
            hamburgerIcon.classList.remove("hidden");
            closeMenuIcon.classList.add("hidden");
        }
    });
    
    const searchIcon = document.getElementById("searchIcon");
    const searchCloseIcon = document.getElementById("searchCloseIcon");
    const searchBar = document.getElementById("searchBar");
    const searchBtn = document.getElementById("searchBtn");

    // Open search bar
    searchIcon.addEventListener("click", function () {
        searchBar.classList.add("active");
        searchIcon.classList.add("hidden");
        searchCloseIcon.classList.remove("hidden");
    });

    // Close search bar
    searchCloseIcon.addEventListener("click", function () {
        searchBar.classList.remove("active");
        searchIcon.classList.remove("hidden");
        searchCloseIcon.classList.add("hidden");
    });

    // Close search bar when clicking outside
    document.addEventListener("click", function (event) {
        if (!searchBar.contains(event.target) && !searchIcon.contains(event.target)) {
            searchBar.classList.remove("active");
            searchIcon.classList.remove("hidden");
            searchCloseIcon.classList.add("hidden");
        }
    });

    // Close search bar on click of search button
    searchBtn.addEventListener("click", function () {
        searchBar.classList.remove("active");
        searchIcon.classList.remove("hidden");
        searchCloseIcon.classList.add("hidden");
    });
});
