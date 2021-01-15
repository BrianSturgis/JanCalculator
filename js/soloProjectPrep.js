
$(document).ready(function() {
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight, 0.1, 5000);
var renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

var geometry = new THREE.BoxGeometry( 1, 1, 1);
var material = new THREE.MeshBasicMaterial( { color: 0x3FA3FD } );
var cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 3;

function animate() {
  requestAnimationFrame( animate );
  cube.rotation.x += 0.005;
  cube.rotation.y += 0.005;
  renderer.render( scene, camera );
}
animate();



});