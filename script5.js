/*const trail = document.querySelector('.mouse-trail');

document.addEventListener('mousemove', (e) => {
  trail.style.left = e.pageX + 'px';
  trail.style.top = e.pageY + 'px';
  trail.classList.add('visible');
});
console.log('irina')*/
const scene = new THREE.Scene();

// Crear cámara
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// Crear renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Crear geometría de puntos para las estrellas
const starGeometry = new THREE.BufferGeometry();
const starCount = 1000;

// Generar las coordenadas de forma aleatoria
const positions = new Float32Array(starCount * 3);
for (let i = 0; i < starCount; i++) {
  const x = (Math.random() - 0.5) * 2000; // Rango de -1000 a 1000
  const y = (Math.random() - 0.5) * 2000;
  const z = (Math.random() - 0.5) * 2000;
  positions[i * 3] = x;
  positions[i * 3 + 1] = y;
  positions[i * 3 + 2] = z;
}
starGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

// Crear material para las estrellas
const starMaterial = new THREE.PointsMaterial({
  size: 10,
  color: 0xffffff,
});

// Crear objeto de puntos para las estrellas
const starPoints = new THREE.Points(starGeometry, starMaterial);

// Agregar estrellas a la escena
scene.add(starPoints);

// Escuchar evento de movimiento del ratón
document.addEventListener('mousemove', onDocumentMouseMove);

let mouseX = 0, mouseY = 0;

// Actualizar posición de las estrellas en el render loop
function render() {
  requestAnimationFrame(render);

  // Actualizar posición de las estrellas según la posición del ratón
  starPoints.position.x = (mouseX - window.innerWidth / 2) * 0.01;
  starPoints.position.y = -(mouseY - window.innerHeight / 2) * 0.01;

  renderer.render(scene, camera);
}
render();

// Función para actualizar la posición del ratón
function onDocumentMouseMove(event) {
  mouseX = event.clientX;
  mouseY = event.clientY;
}

renderer.render(scene, camera);
