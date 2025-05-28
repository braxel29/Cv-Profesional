// Modo oscuro simple
document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.createElement('button');
  toggleButton.innerText = 'Modo Oscuro';
  toggleButton.style.position = 'fixed';
  toggleButton.style.top = '10px';
  toggleButton.style.right = '10px';
  document.body.appendChild(toggleButton);

  toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
  });
});
