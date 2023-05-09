import * as THREE from "three";
import Experience from "../Experience";
export default class ExplosionAnimation {
  constructor() {
    this.clock = new THREE.Clock();
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.particles = [];
  }

  addExplosion(point) {
    var timeNow = this.clock.getElapsedTime();

    for (var i = 0; i < 4; i++) {
      var geometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
      var material = new THREE.MeshBasicMaterial({ color: 0x999999 });
      var part = new THREE.Mesh(geometry, material);
      part.position.x = point.x;
      part.position.y = point.y;
      part.position.z = point.z;
      part.name = "part" + i;
      part.birthDay = timeNow;
      this.scene.add(part);
      this.particles.push(part);
    }
  }

  playAnimation() {
    if (this.particles.length > 0) {
      this.particles.forEach((elem, index, array) => {
        switch (elem.name) {
          case "part0":
            elem.position.x += 1;
            break;
          case "part1":
            elem.position.x -= 1;
            break;
          case "part2":
            elem.position.y += 1;
            break;
          case "part3":
            elem.position.y -= 1;
            break;
          default:
            break;
        }

        if (elem.birthDay - this.clock.getElapsedTime() < -1) {
          this.scene.remove(elem);
          this.particles.splice(index, 1);
        }
      });
    }
  }

  update() {
    this.playAnimation();
  }
}
