import Easy3d from "../easy3d/easy3d.js";

class Test {
  constructor({
    scene
  }) {
    this.scene = scene;
  }

  copyclone() {
    var scope = this;

    var box = new THREE.BoxGeometry(10, 10, 10);
    var material = new THREE.MeshLambertMaterial({
      color: 0x0000ff
    }); 

    var geometry = new THREE.Geometry();

    var mesh = new THREE.Mesh(box,material);
    for(let i=0;i<8000;i++){
        var mesh2 = mesh.clone();
        mesh2.translateX(10*i);
        mesh2.updateMatrix();
        geometry.merge(mesh2.geometry, mesh2.matrix);
    }

    var newMesh = new THREE.Mesh(geometry,material);
    scope.scene.add(newMesh);
    
    
    // box.scale(1.5,1.5,1.5);
    // material.color.set(0xff0000);
    
  }
}

function run(app) {
  var tt = new Test(app);
  tt.copyclone();
}

export default {
  run
}
