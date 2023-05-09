import * as THREE from "three";
import Experience from "../Experience";
import ExplosionAnimation from "./explosionAnimation";
export default class Raycaster {
  constructor() {
    this.experience = new Experience();
    this.raycaster = new THREE.Raycaster();
    this.sizes = this.experience.sizes;
    this.scene = this.experience.scene;
    this.mouse = new THREE.Vector2(this.sizes.width + 1, this.sizes.height + 1);
    this.camera = this.experience.camera;
    window.addEventListener("click", (event) => {
      this.mouse.x = (event.clientX / this.sizes.width) * 2 - 1;
      this.mouse.y = -1 * ((event.clientY / this.sizes.height) * 2 - 1);
      //   console.log(this.mouse);
    });
    this.cubesObjects = this.experience.cubes;
    this.cubes = [];
    this.group = this.experience.world.cubeGroup;
    // fetchCubes from cubes objects array
    this.fetchCubes();
    this.explosion = new ExplosionAnimation();
  }

  fetchCubes() {
    this.cubesObjects.map((e) => {
      console.log(this.camera);
      this.cubes.push(e.cube);
    });
  }
  intersect = [];
  update() {
    this.raycaster.setFromCamera(this.mouse, this.camera.cameraInstance);

    this.intersect = this.raycaster.intersectObjects(this.cubes);
    // console.log(intersect);
    // this.cubes.map((e) => {
    //   e.scale.set(1, 1, 1);
    // });
    if (this.intersect.length > 0) {
      this.intersect.map((e, index) => {
        this.explosion.addExplosion(e.point);
        if (e.object.parent != null) e.object.parent.remove(e.object);
      });
      this.mouse.x = 1000;
      this.mouse.y = 1000;
    }
    this.explosion.update();
  }
}
