class Ground {
  constructor(scene,imgPath) {
    this.scene = scene;

    let geometry = new THREE.PlaneGeometry(10,10);
    // let geometry = new THREE.CircleGeometry(10);
        let material = new THREE.MeshBasicMaterial({color:0x8c8c8c});
        let rect = new THREE.Mesh(geometry,material);
        rect.rotateX(-Math.PI/2);
        rect.position.y -= 1;
        rect.scale.set(400,400,1);

        this.scene.add(rect);
  }
}

export default Ground;
