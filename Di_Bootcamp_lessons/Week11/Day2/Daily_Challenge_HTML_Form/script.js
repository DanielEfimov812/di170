let form = document.getElementById("form");
let area = document.getElementById("print");

const formData = new FormData(form);
const data = Object.fromEntries(formData.entries());

  area.innerText = JSON.stringify(data);

