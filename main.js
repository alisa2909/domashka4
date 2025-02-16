document.addEventListener("mousemove", function(event) {
    let coord = document.getElementById("coordin");
    coord.textContent = `Координаты: X: ${event.clientX}, Y: ${event.clientY}`;
});
