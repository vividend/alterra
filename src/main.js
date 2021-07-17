//https://vividend.github.io/alterra/

const stats = new Stats();

document.body.appendChild(stats.domElement);

const scene = new THREE.Scene();

scene.background = new THREE.Color( 0x000000 );

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer(); renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

function animate()
{
  requestAnimationFrame(animate);
  
  loop();
  
  renderer.render(scene, camera);
}

animate();

function loop()
{
  stats.update();
}