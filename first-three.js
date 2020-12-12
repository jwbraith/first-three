// CREATES THE SCENE IN WHICH OBJECTS SIT
// CREATES THE CAMERA WITH ARGUMENTS(FOV, ASPECT RATIO, NEAR CLIPPING PANE, FAR CLIPPING PANE)
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// SET KIND OF RENDERING, SIZE OF CANVAS, ATTACH RENDERING TO THE DOCUMENT
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// GEOMETRY CONTAINS ALL THE VERTICES AND FACES OF THE CUBE
// MATERIAL WRAPS THE POINTS IN A SKIN
// MESH IS AN OBJECT THAT TAKES A GEOMETRY AND APPLIES A MATERIAL TO THAT GEOMETRY, THE RESULT OF WHICH CAN BE AND IS ADDED TO OUR SCENE
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// MOVE CAMERA DEPTH-WISE BECAUSE OTHERWISE CUBE AND CAMERA WOULD BE INSIDE EACH OTHER
camera.position.z = 2;

// CREATING AN ANIMATION LOOP
function animate() {
  requestAnimationFrame(animate);
  // BEFORE RENDERING WE PUT ANIMATION INSTRUCTIONS
  cube.rotation.x += 0.02;
  cube.rotation.y += 0.01;

  renderer.render(scene, camera);
}
animate();