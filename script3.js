const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;
scene.add(camera);

// Crea la geometría y el material de la esfera
const sphereGeometry = new THREE.SphereGeometry(1, 32, 32);
const sphereTexture = new THREE.TextureLoader().load('img/globe.jpg');
const sphereMaterial = new THREE.MeshBasicMaterial({ map: sphereTexture });

// Crea la esfera y agrégala a la escena
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
scene.add(sphere);

// Agrega un listener para detectar el movimiento del mouse
window.addEventListener('mousemove', event => {
  const x = (event.clientX / window.innerWidth) * 2 - 1;
  const y = -(event.clientY / window.innerHeight) * 2 + 1;
  sphere.position.set(x, y, 0);
});

// Crea el renderizador y establece el tamaño
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Renderiza la escena
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();

