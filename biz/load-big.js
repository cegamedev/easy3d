import Easy3d from "../easy3d/easy3d.js";

class LoadBig{
    constructor({scene}){
        this.scene = scene;
    }

    loadScene(callBack) {
        var scope = this;
    
        var loader = new THREE.GLTFLoader();
        loader.load('/static/sceneAssets/model/mobile/park/Unity2GLTF.gltf', function (gltf) {
          console.log(gltf);
          scope.scene.add(gltf.scene);
          if (callBack instanceof Function) {
            callBack();
          }
        }, function (xhr) {
          console.log(`load1 is loaded:${xhr.loaded} total:${xhr.total}`);
        }, function (e) {
          console.error(e);
        });
      }
    
      loadBuild() {
        var scope = this;
    
        var loader = new THREE.GLTFLoader();
        loader.load('/static/sceneAssets/model/mobile/build/f0/Unity2GLTF.gltf', function (gltf) {
          var obj = gltf.scene;
          for (let i = 0; i <= 21; i++) {
            // if (i == 14) {
            //   continue;
            // }
            var temp = new THREE.Object3D();
            temp.copy(obj);
            // var temp = obj.clone();
            temp.position.set(-10,4.3*i,0);

            scope.scene.add(temp);
          }
        }, undefined, function (e) {
          console.error(e);
        });
        // loader.load('/static/sceneAssets/model/build/f2/Unity2GLTF.gltf', function (gltf) {
        //   var obj = gltf.scene;
        //   obj.position.y = 4.3 * 14;
        //   scope.scene.add(obj);
        //   var roof = scope.scene.getObjectByName("node_CombineRoof_-661674");
        //   roof.visible = false;
        // }, undefined, function (e) {
        //   console.error(e);
        // });
        loader.load('/static/sceneAssets/model/mobile/build/f3/Unity2GLTF.gltf', function (gltf) {
          var obj = gltf.scene;
          obj.position.y = 4.3 * 22;
          scope.scene.add(obj);
        }, undefined, function (e) {
          console.error(e);
        });
      }
    
      loadOutPark() {
        var scope = this;
    
        var loader = new THREE.GLTFLoader();
        loader.load('/static/sceneAssets/model/outPark/road/Unity2GLTF.gltf', function (gltf) {
          console.log('road>', gltf);
          var obj = gltf.scene;
          var group = new THREE.Group();
          for(let i=0;i<40;i++){
            var temp = new THREE.Object3D();
            temp.copy(obj);
            temp.position.x += 15*(i+1);
            group.add(temp);
          }
          group.position.x -= 315; 
          scope.scene.add(group);
          var road1 = new THREE.Group();
          road1.copy(group);
          road1.position.x += 600;
          scope.scene.add(road1);
          var cr1 = new THREE.Group();
          cr1.copy(group);
          cr1.position.x -= 600;
          scope.scene.add(cr1);
    
    
          var road2 = new THREE.Group();
          road2.copy(group);
          road2.rotation.set(0,Math.PI/2,0);
          road2.position.x += 374.58;
          road2.position.z -= 265;
          scope.scene.add(road2);
          var road3 = new THREE.Group();
          road3.copy(road2);
          road3.position.z += 600;
          scope.scene.add(road3);
          var road4 = new THREE.Group();
          road4.copy(road2);
          road4.position.x += 300;
          road4.position.z += 5;
          scope.scene.add(road4);
          var cr2 = new THREE.Group();
          cr2.copy(road2);
          cr2.position.z += 900;
          scope.scene.add(cr2);
    
        }, undefined, function (e) {
          console.error(e);
        });
        loader.load('/static/sceneAssets/model/outPark/building/Unity2GLTF.gltf', function (gltf) {
          console.log('building>', gltf);
          var obj = gltf.scene;
          var group = new THREE.Group();
          var temp = new THREE.Object3D();
          temp.copy(obj);
          temp.scale.set(1.5, 0.5, 2);
          group.add(temp);
          var temp = new THREE.Object3D();
          temp.copy(obj);
          temp.position.z += 90;
          temp.position.x += 100;
          temp.scale.set(1.5, 2, 1);
          group.add(temp);
          var temp = new THREE.Object3D();
          temp.copy(obj);
          temp.position.z += 200;
          temp.scale.set(2, 1.5, 1);
          group.add(temp);
          var temp = new THREE.Object3D();
          temp.copy(obj);
          temp.position.z += 200;
          temp.position.x += 100;
          temp.scale.set(1, 1.3, 1);
          group.add(temp);
          group.position.z += 200;
          group.name = "g0";
          scope.scene.add(group);
          
    
          var outPark1 = new THREE.Group();
          outPark1.copy(group);
          outPark1.rotation.set(0,Math.PI/2,0);
          outPark1.position.x += 300;
          outPark1.position.z -= 100;
          outPark1.name = "g1";
          scope.scene.add(outPark1);
          var c2 = new THREE.Group();
          c2.copy(outPark1);
          c2.position.z -= 500;
          c2.name = "c2";
          scope.scene.add(c2); 
    
          var outPark2 = new THREE.Group();
          outPark2.copy(group);
          outPark2.rotation.set(0,Math.PI,0);
          outPark2.position.x += 100;
          outPark2.position.z -= 500;
          outPark2.name = "g2";
          scope.scene.add(outPark2);
          var c3 = new THREE.Group();
          c3.copy(outPark2);
          c3.position.x -= 300;
          c3.position.z -= 200;
          c3.name = "c3";
          scope.scene.add(c3);
          var c1 = new THREE.Group();
          c1.copy(c3);
          c1.position.z += 400;
          c1.position.x -= 300;
          c1.name = "c1";
          scope.scene.add(c1);
          var c4 = new THREE.Group();
          c4.copy(c1);
          c4.position.x += 300;
          c4.name = "c4";
          scope.scene.add(c4);
    
          var outPark3 = new THREE.Group();
          outPark3.copy(group);
          outPark3.rotation.set(0,-Math.PI/2,0);
          outPark3.position.x -= 200;
          outPark3.name = "g3";
          scope.scene.add(outPark3);
          
    
        }, undefined, function (e) {
          console.error(e);
        });
      }
}

function load(app){
    var loadBig = new LoadBig(app);
    loadBig.loadBuild();
    loadBig.loadScene();
    // loadBig.loadOutPark();
}

export default {
    load
};