const form = document.getElementById("MyForm")

form.addEventListener("submit", function (event) {
    event.preventDefault();

    let radius = parseFloat(document.getElementById("radius").value)
    let volume = document.getElementById("volume")

    if (isNaN(radius) || radius <= 0) {
        alert("Please enter a valid radius");
        return;
    }

    let volumeMath = (4/3) * Math.PI * (radius**3);

    volume.value = volumeMath.toFixed(2);
});
