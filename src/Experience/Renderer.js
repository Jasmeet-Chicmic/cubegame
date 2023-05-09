import Experience from "./Experience";
import * as THREE from "three";
export default class Renderer {
  constructor() {
    this.experience = new Experience();
    this.canvas = this.experience.canvas;
    this.scene = this.experience.scene;
    this.camera = this.experience.camera;
    this.sizes = this.experience.sizes;
    this.sizes.on("resize", () => {
      this.resize();
    });
    this.setInstance();
  }
  setInstance() {
    this.rendererInstance = new THREE.WebGLRenderer({
      canvas: this.canvas,
    });
    // this.rendererInstance.setClearColor("#ffffff", 0.5);
    this.rendererInstance.setSize(this.sizes.width, this.sizes.height);
    this.rendererInstance.setPixelRatio(this.sizes.pixelRatio);
  }

  update() {
    this.rendererInstance.render(this.scene, this.camera.cameraInstance);
  }

  resize() {
    this.rendererInstance.setSize(this.sizes.width, this.sizes.height);
    this.rendererInstance.setPixelRatio(this.sizes.pixelRatio);
  }
}
