document.addEventListener('DOMContentLoaded', () => {
  const grid = document.querySelector('.main_field');
  const size = 15;

  let color = null;
  let mousedown = false;

  function createGrid() {
    const cols = Math.floor(grid.clientWidth / size);
    const rows = Math.floor(grid.clientHeight / size);
    const total = cols * rows;

    grid.innerHTML = '';

    for (let i = 0; i < total; i++) {
      const cell = document.createElement('div');
      cell.classList.add('field');
      grid.appendChild(cell);
    }
  }

  window.addEventListener('resize', createGrid);
  createGrid();

  document.querySelector('.colors_menu').addEventListener('click', (e) => {
    if (e.target.classList.contains('color')) {
      color = e.target.style.backgroundColor;
    }
  });

  grid.addEventListener('mousedown', (e) => {
    if (e.target.classList.contains('field') && color) {
      e.target.style.backgroundColor = color;
    }
  });

  grid.addEventListener('mouseover', (e) => {
    if (mousedown && e.target.classList.contains('field') && color) {
      e.target.style.backgroundColor = color;
    }
  });

  document.body.addEventListener('mousedown', () => mousedown = true);
  document.body.addEventListener('mouseup', () => mousedown = false);

  document.querySelector('.clear_button').addEventListener('click', () => {
    grid.querySelectorAll('.field').forEach(cell => {
      cell.style.backgroundColor = 'white';
    });
  });
});