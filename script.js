const openPopup = document.getElementById("open");
const closePopup = document.getElementById("close");
const popup = document.getElementById("popup");

openPopup.addEventListener("click", function(e) {
    e.preventDefault();
    popup.classList.add("active");
});

closePopup.addEventListener("click", () => {
    popup.classList.remove("active");
})