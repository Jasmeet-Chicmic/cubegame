import Camera from "./Camera";
import Renderer from "./Renderer";
import Sizes from "./Utils/Sizes";
import Time from "./Utils/Time";
import * as THREE from "three";
import World from "./World/World";
import SpinAnimation from "./Utils/SpinAnimation";
import Raycaster from "./World/Raycaster";
let instance = null;
export default class Experience {
  constructor(canvas) {
    this.cubes = [];
    if (instance) {
      return instance;
    }
    instance = this;

    //sizes
    this.sizes = new Sizes();

    //Canvas
    this.canvas = canvas;

    //Scene
    this.scene = new THREE.Scene();

    //camera
    this.camera = new Camera();

    //Time
    this.time = new Time();
    this.time.on("tick", () => {
      this.update();
    });

    //World
    this.world = new World();
    this.cubeAnimation = new SpinAnimation();
    this.raycaster = new Raycaster();
    //Renderer
    this.renderer = new Renderer();
  }

  update() {
    this.camera.update();
    this.cubeAnimation.update();
    this.raycaster.update();
    this.renderer.update();
  }
}
