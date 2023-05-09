import { randInt } from "three/src/math/MathUtils";
import Experience from "../Experience";
import Time from "./Time";

export default class SpinAnimation {
  constructor() {
    this.experience = new Experience();
    this.cubes = this.experience.cubes;
    this.speed = 0.0009;
    this.time = new Time();
  }

  playCubesAnimation() {
    // let angle = Math.random() * Math.PI * 2;
    // this.cubes[0].cube.position.x = Math.sin(angle);
    // this.cubes[0].cube.position.x = Math.cos(angle);
    let b = ["x", "y", "z"];
    for (let i = 0; i < this.cubes.length; i++) {
      //   this.cubes[i].cube.position.x = i * angle * 0.1;
      //   this.cubes[i].cube.position.z = i * angle * 0.1;
      this.cubes[i].cube.rotation.x = this.time.elapsed * this.speed;
      switch (b[i % b.length]) {
        case "x":
          this.cubes[i].cubeHolder.rotation.x = this.time.elapsed * this.speed;
          break;
        case "y":
          this.cubes[i].cubeHolder.rotation.y = this.time.elapsed * this.speed;
          break;
        case "z":
          this.cubes[i].cubeHolder.rotation.z = this.time.elapsed * this.speed;
          break;
      }
    }
  }

  update() {
    this.playCubesAnimation();
  }
}
