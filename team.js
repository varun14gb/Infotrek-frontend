var nav = document.querySelector("nav");
var toggle = document.querySelector("nav .menu");
toggle.addEventListener("click", () => {
    nav.classList.toggle("active");
});

var select = document.querySelector("#year");
var b2022 = document.querySelectorAll("#b2022");
var b2023 = document.querySelectorAll("#b2023");
var b2024 = document.querySelectorAll("#b2024");
select.addEventListener("change", (e) => {
    b2022.forEach(node => node.classList.add("hidden"));
    b2023.forEach(node => node.classList.add("hidden"));
    b2023.forEach(node => node.classList.add("hidden"));
    if (e.target.value === "2022") {
        b2022.forEach(node => node.classList.remove("hidden"));
    }
    if (e.target.value === "2023") {
        b2023.forEach(node => node.classList.remove("hidden"));
    }
    if (e.target.value === "2024") {
        b2024.forEach(node => node.classList.remove("hidden"));
    }
})

$('.ucard').tilt({
    scale: 1.02
});