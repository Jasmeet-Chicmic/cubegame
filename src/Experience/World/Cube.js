import Experience from "../Experience";
import * as THREE from "three";
export default class Cube {
  constructor() {
    this.experience = new Experience();

    this.scene = this.experience.scene;
    this.setGeometry();
    // this.setTextures();
    this.setMaterial();
    this.setMesh();
  }

  setGeometry() {
    this.cubeGeometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
  }

  setMaterial() {
    this.cubeMaterial = new THREE.MeshStandardMaterial();
  }

  setMesh() {
    this.cubeHolder = new THREE.Object3D();
    this.cube = new THREE.Mesh(this.cubeGeometry, this.cubeMaterial);
    // console.log(this.scene);
    // this.scene.add(new THREE.AmbientLight(0xffffff, 1));

    // this.scene.add(this.cube);
    // console.log(this.scene);
    const angle = Math.random() * Math.PI * 2;

    const x = Math.sin(angle) * Math.random() * 4 + (1 + Math.random() * 1);
    const y = 0; //Math.cos(angle) * Math.random() * 4;
    const z = Math.cos(angle) * Math.random() * 4 + (1 + Math.random() * 1);
    this.cube.position.set(x, y, z);
    this.cubeHolder.add(this.cube);
    
  }
}
