class Fog {
  constructor(scene) {
    this.scene = scene;

    const color = 0xBBDDFD;
    const near = 400;
    const far = 1000;
    this.scene.fog = new THREE.Fog(color, near, far);
    // this.scene.background = color;
  }
}

export default Fog;
