import Experience from "../Experience";
import Cube from "./Cube";
import CubesGroup from "./CubesGroup";
import Environment from "./Environment";
import Raycaster from "./Raycaster";

let numberOfCubes = 8;
export default class World {
  constructor() {
    this.experience = new Experience();
    for (let i = 0; i < numberOfCubes; i++) {
      this.experience.cubes.push(new Cube());
    }

    this.cubeGroup = new CubesGroup(this.experience.cubes);

    this.environment = new Environment();
  }
}
