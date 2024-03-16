const container = document.querySelector('.container');
const layers = document.querySelectorAll('.layer');

container.addEventListener('mousemove', (event) => {
  const centerX = container.offsetWidth / 2;
  const centerY = container.offsetHeight / 2;
  const mouseX = event.clientX;
  const mouseY = event.clientY;

  const offsetX = mouseX - centerX;
  const offsetY = mouseY - centerY;

  layers.forEach(layer => {
    const speed = layer.classList.contains('layer1') ? 0.1 : 0.2; // Adjust speed for different layers
    layer.style.transform = `translateX(${offsetX * speed}px) translateY(${offsetY * speed}px)`;
  });
});
