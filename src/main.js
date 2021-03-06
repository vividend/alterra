// https://vividend.github.io/alterra/
// AIzaSyDEi14UIk060Gc0rL2AcwQfsft54Hsa3i8

const stats = new Stats();

document.body.appendChild(stats.domElement);

const scene = new THREE.Scene();

scene.background = new THREE.Color( 0x000000 );

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer(); renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

var config = {
  method: 'get',
  url: 'https://maps.googleapis.com/maps/api/elevation/json?locations=39.7391536,-104.9847034&key=AIzaSyDEi14UIk060Gc0rL2AcwQfsft54Hsa3i8',
  headers: {}
};

axios(config)
  .then(function(response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function(error) {
    console.log(error);
  });

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