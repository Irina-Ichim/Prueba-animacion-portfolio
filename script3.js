// Crear el escenario
const scene = new THREE.Scene();

// Crear una cámara y agregarla al escenario
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;
scene.add(camera);

// Crear una esfera y agregarla al escenario
const sphereGeometry = new THREE.SphereGeometry(1, 32, 32);
const sphereTexture = new THREE.TextureLoader().load('img/globe.jpg');
const sphereMaterial = new THREE.MeshBasicMaterial({ map: sphereTexture });
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
scene.add(sphere);

// Agregar un listener para detectar el movimiento del mouse
window.addEventListener('mousemove', event => {
  // Calcular la posición de la esfera en función del movimiento del mouse
  const x = event.clientX / window.innerWidth * 2 - 1;
  const y = -event.clientY / window.innerHeight * 2 + 1;
  sphere.position.set(x, y, 0);
});

// crea el renderizador
const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#bg'),
});

// establece el tamaño
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

// cambia el color de fondo del canvas
renderer.setClearColor(0xffffff, 1);


// Renderizar el escenario
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();
