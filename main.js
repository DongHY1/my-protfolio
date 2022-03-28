import "./style.css";

import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  PlaneGeometry,
  MeshPhongMaterial,
  Mesh,
  DoubleSide,
  DirectionalLight,
  FlatShading
} from "three";

const scene = new Scene();
const camera = new PerspectiveCamera(75, innerWidth / innerHeight, 0.1, 1000);
const renderer = new WebGLRenderer();
const planeGeometry = new PlaneGeometry(5, 5, 10, 10);
// 双层平面
const planeMaterial = new MeshPhongMaterial({ color: 0xff0000,side:DoubleSide,flatShading:FlatShading});
const planeMesh = new Mesh(planeGeometry, planeMaterial);
renderer.setSize(innerWidth, innerHeight);
// 减少锯齿
renderer.setPixelRatio(devicePixelRatio);
scene.add(planeMesh);
camera.position.z = 5;

const light = new DirectionalLight(0xffffff,1)
light.position.set(0,-1,1)
scene.add(light)
const {array} = planeMesh.geometry.attributes.position
for(let i=0;i<array.length;i+=3){
   const x = array[i]
   const y = array[i+1]
   const z = array[i+2]
   array[i+2] = z+Math.random()
}

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
  // planeMesh.rotation.x += 0.01;
}
animate();

document.body.appendChild(renderer.domElement);
