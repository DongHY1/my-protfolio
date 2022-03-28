import "./style.css";

import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  PlaneGeometry,
  BoxGeometry,
  MeshBasicMaterial,
  Mesh,
  DoubleSide,
} from "three";

const scene = new Scene();
const camera = new PerspectiveCamera(75, innerWidth / innerHeight, 0.1, 1000);
const renderer = new WebGLRenderer();
const planeGeometry = new PlaneGeometry(5, 5, 10, 10);
// 双层平面
const planeMaterial = new MeshBasicMaterial({ color: 0xff0000,side:DoubleSide });
const planeMesh = new Mesh(planeGeometry, planeMaterial);
renderer.setSize(innerWidth, innerHeight);
// 减少锯齿
renderer.setPixelRatio(devicePixelRatio);
scene.add(planeMesh);
camera.position.z = 5;
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
  planeMesh.rotation.x += 0.01;
}
animate();

document.body.appendChild(renderer.domElement);
