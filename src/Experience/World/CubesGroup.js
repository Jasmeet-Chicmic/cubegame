import Experience from "../Experience";
import * as THREE from "three";
import Cube from "./Cube";
export default class CubesGroup {
  constructor(cube) {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.cubes = cube;
    this.setCubeGroup();
  }

  setCubeGroup() {
    this.group = new THREE.Group();

    for (const cubes of this.cubes) {
      this.group.add(cubes.cubeHolder);
    }
    // this.axesHelper = new THREE.AxesHelper();
    this.scene.add(this.group);
  }
}
