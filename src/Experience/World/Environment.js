import * as THREE from "three";
import Experience from "../Experience";
export default class Environment {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.setAmibientLight();
    this.setDirectionalLight();
  }

  setAmibientLight() {
    this.amibientLight = new THREE.AmbientLight("red", 0.5);
    this.scene.add(this.amibientLight);
  }

  setDirectionalLight() {
    this.directionalLight = new THREE.DirectionalLight("red", 0.5);
    this.directionalLight.position.set(3, 2, 1);

    console.log(this.directionalLight);
    this.scene.add(this.directionalLight);
  }
}
