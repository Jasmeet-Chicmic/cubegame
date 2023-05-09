import * as THREE from "three";
import Experience from "./Experience";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
export default class Camera {
  constructor() {
    this.experience = new Experience();
    this.sizes = this.experience.sizes;
    this.scene = this.experience.scene;
    this.canvas = this.experience.canvas;
    this.sizes.on("resize", () => {
      this.resize();
    });
    this.setInstance();
    this.setOrbitControl();
  }

  setInstance() {
    this.cameraInstance = new THREE.PerspectiveCamera(
      45,
      this.sizes.width / this.sizes.height
    );
    this.cameraInstance.position.z = 10;
    this.scene.add(this.cameraInstance);
  }

  setOrbitControl() {
    this.orbitControl = new OrbitControls(this.cameraInstance, this.canvas);
    this.orbitControl.enableDamping = true;
    this.orbitControl.update();
  }

  resize() {
    this.cameraInstance.aspect = this.sizes.width / this.sizes.height;
    this.cameraInstance.updateProjectionMatrix();
  }
  update() {
    this.orbitControl.update();
  }
}
