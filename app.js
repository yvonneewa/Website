function toggleMenu() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";  // Hide the menu
    } else {
        x.style.display = "block";  // Show the menu
    }
    document.querySelector(".topnav").classList.toggle("responsive");  // Toggle the responsive class
}
