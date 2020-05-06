class LoadSmall{
    constructor({scene,transformCtls}){
        this.scene = scene;
        this.debugTransform = transformCtls;
        this.boxObj = new THREE.Object3D();
        this.boxBigObj = new THREE.Object3D();
        this.chairObj = new THREE.Object3D();
        this.chairgroupObj = new THREE.Object3D();
        this.deskchair01 = new THREE.Object3D();
        this.deskchair02 = new THREE.Object3D();
        this.deskchair03 = new THREE.Object3D();
        this.deskchairbig = new THREE.Object3D();
        this.deskchairsmall = new THREE.Object3D();
        this.elevator = new THREE.Object3D();
        this.flower = new THREE.Object3D();
        this.sofagroup01 = new THREE.Object3D();
        this.sofagroup02 = new THREE.Object3D();
    }

    static getLoadSmall(app){
        if(!LoadSmall.loadSmall){
            LoadSmall.loadSmall = new LoadSmall(app);
        }
        return LoadSmall.app;
    }

    loadAll() {
        var scope = this;
    
        var loader = new THREE.GLTFLoader();
        loader.load('/static/sceneAssets/model/room/all/Unity2GLTF.gltf', function (gltf) {
          console.log(gltf);
          scope.scene.add(gltf.scene);
        }, function (xhr) {
          console.log(`load1 is loaded:${xhr.loaded} total:${xhr.total}`);
        }, function (e) {
          console.error(e);
        });
      }

    loadBase(){
        var scope = this;
        var loader = new THREE.GLTFLoader();
        loader.load('/static/sceneAssets/model/room/base/Unity2GLTF.gltf', function (gltf) {
          console.log(gltf);
          scope.scene.add(gltf.scene);
        }, function (xhr) {
          console.log(`load1 is loaded:${xhr.loaded} total:${xhr.total}`);
        }, function (e) {
          console.error(e);
        });
    }

    loadDeskchairsmall(){
        var scope = this;
        var loader = new THREE.GLTFLoader();
        loader.load('/static/sceneAssets/model/room/deskchairsmall/Unity2GLTF.gltf', function (gltf) {
          console.log(gltf);
          gltf.scene.position.set(18.257742874870456,0,37.869074932220144);
          scope.deskchairsmall.add(gltf.scene);
        //   scope.scene.add(scope.deskchairsmall);
          var obj = new THREE.Object3D();
          obj.copy(scope.deskchairsmall);
          obj.position.set(-18.257742874870456,0,-37.869074932220144);
          scope.scene.add(obj);
          var obj = new THREE.Object3D();
          obj.copy(scope.deskchairsmall);
          obj.position.set(-21.788294083223104,0,-37.869074932220144);
          scope.scene.add(obj);
          var obj = new THREE.Object3D();
          obj.copy(scope.deskchairsmall);
          obj.position.set(-24.9294284399904424,0,-37.869074932220144);
          scope.scene.add(obj);
          var obj = new THREE.Object3D();
          obj.copy(scope.deskchairsmall);
          obj.position.set(-26.333576909589414, 0, -0.34972685075509613);
          obj.rotation.set(0,-Math.PI/2,0);
          scope.scene.add(obj);
          var obj = new THREE.Object3D();
          obj.copy(scope.deskchairsmall);
          obj.position.set(-14.347515693082652, 0, -8.358443180609173);
          obj.rotation.set(0,Math.PI/2,0);
          scope.scene.add(obj);
        }, function (xhr) {
          console.log(`load1 is loaded:${xhr.loaded} total:${xhr.total}`);
        }, function (e) {
          console.error(e);
        });
    }

    loadDeskchairbig(){
        var scope = this;
        var loader = new THREE.GLTFLoader();
        loader.load('/static/sceneAssets/model/room/deskchairbig/Unity2GLTF.gltf', function (gltf) {
          console.log(gltf);
          gltf.scene.position.set(24.089780180618185, 0, 44.005338525683854);
          scope.deskchairbig.add(gltf.scene);
        //   scope.scene.add(scope.deskchairbig);
          var obj = new THREE.Object3D();
          obj.copy(scope.deskchairbig);
          obj.position.set(-24.089780180618185, 0, -44.005338525683854);
          scope.scene.add(obj);
          var obj = new THREE.Object3D();
          obj.copy(scope.deskchairbig);
          obj.position.set(-10.175684078388137, 0, -37.107106287642594);
          obj.scale.set(0.8488715859833142, 1, 0.8588261257685338);
          scope.scene.add(obj);
        }, function (xhr) {
          console.log(`load1 is loaded:${xhr.loaded} total:${xhr.total}`);
        }, function (e) {
          console.error(e);
        });
    }

    loadDeskchair01(){
        var scope = this;
        var loader = new THREE.GLTFLoader();
        var count = 0;
        loader.load('/static/sceneAssets/model/room/flower/Unity2GLTF.gltf', function (gltf) {
          console.log(gltf);
          gltf.scene.position.set(30.450384800866154, 0, 36.28739626358693);
          scope.flower.add(gltf.scene);
        //   scope.scene.add(scope.flower);
          count++;
          _buildDeskchair01.call(scope,count);
          
        }, function (xhr) {
          console.log(`load1 is loaded:${xhr.loaded} total:${xhr.total}`);
        }, function (e) {
          console.error(e);
        });
        loader.load('/static/sceneAssets/model/room/box/Unity2GLTF.gltf', function (gltf) {
            console.log(gltf);
            gltf.scene.position.set(30.450384800866154, 0, 36.32739626358693);
            scope.boxObj.add(gltf.scene);
            // scope.scene.add(scope.boxObj);
            count++;
            _buildDeskchair01.call(scope,count);
            
          }, function (xhr) {
            console.log(`load1 is loaded:${xhr.loaded} total:${xhr.total}`);
          }, function (e) {
            console.error(e);
          });
          loader.load('/static/sceneAssets/model/room/deskchair01/Unity2GLTF.gltf', function (gltf) {
            console.log(gltf);
            gltf.scene.position.set(31.320384800866154, 0, 36.32739626358693);
            scope.deskchair01.add(gltf.scene);
            // scope.scene.add(scope.deskchair01);
            count++;
            _buildDeskchair01.call(scope,count);
            
          }, function (xhr) {
            console.log(`load1 is loaded:${xhr.loaded} total:${xhr.total}`);
          }, function (e) {
            console.error(e);
          });
    }

    loadDeskchair02(){
      var scope = this;
      var loader = new THREE.GLTFLoader();
      loader.load('/static/sceneAssets/model/room/deskchair02/Unity2GLTF.gltf', function (gltf) {
        console.log(gltf);
        gltf.scene.position.set(4.799803041570719,0,29.900670048725217);
        scope.deskchair02.add(gltf.scene);
        // scope.scene.add(scope.deskchair02);
        _buildDeskchair02.call(scope);
        
      }, function (xhr) {
        console.log(`load1 is loaded:${xhr.loaded} total:${xhr.total}`);
      }, function (e) {
        console.error(e);
      });
    }

      loadDeskchair03(){
        var scope = this;
        var loader = new THREE.GLTFLoader();
        loader.load('/static/sceneAssets/model/room/deskchair03/Unity2GLTF.gltf', function (gltf) {
          console.log(gltf);
          gltf.scene.position.set(4.871267797193397,0,33.60036364404901);
          scope.deskchair03.add(gltf.scene);
          // scope.scene.add(scope.deskchair03);
          _buildDeskchair03.call(scope);
          
        }, function (xhr) {
          console.log(`load1 is loaded:${xhr.loaded} total:${xhr.total}`);
        }, function (e) {
          console.error(e);
        });
      }

      loadElevator(){
        var scope = this;
        var loader = new THREE.GLTFLoader();
        loader.load('/static/sceneAssets/model/room/elevator/Unity2GLTF.gltf', function (gltf) {
          console.log(gltf);
          gltf.scene.position.set(19.26172124006726,0,24.241481677947604);
          scope.elevator.add(gltf.scene);
          // scope.scene.add(scope.elevator);
          _buildElevator.call(scope);
          
        }, function (xhr) {
          console.log(`load1 is loaded:${xhr.loaded} total:${xhr.total}`);
        }, function (e) {
          console.error(e);
        });
      }

      loadBoxBig(){
        var scope = this;
        var loader = new THREE.GLTFLoader();
        loader.load('/static/sceneAssets/model/room/boxbig/Unity2GLTF.gltf', function (gltf) {
          console.log(gltf);
          gltf.scene.position.set(28.605558340213797,0,36.33067866361285);
          scope.boxBigObj.add(gltf.scene);
          // scope.scene.add(scope.boxBigObj);
          _buildBoxBig.call(scope);
        }, function (xhr) {
          console.log(`load1 is loaded:${xhr.loaded} total:${xhr.total}`);
        }, function (e) {
          console.error(e);
        });
      }

      loadSofa(){
        var scope = this;
        var loader = new THREE.GLTFLoader();
        var count = 0;
        loader.load('/static/sceneAssets/model/room/sofagroup01/Unity2GLTF.gltf', function (gltf) {
          console.log(gltf);
          gltf.scene.position.set(9.252976627163104,0,43.37583629187382);
          scope.sofagroup01.add(gltf.scene);
          // scope.scene.add(scope.sofagroup01);
          count++;
          _buildSofa.call(scope,count);
        }, function (xhr) {
          console.log(`load1 is loaded:${xhr.loaded} total:${xhr.total}`);
        }, function (e) {
          console.error(e);
        });
        loader.load('/static/sceneAssets/model/room/sofagroup02/Unity2GLTF.gltf', function (gltf) {
          console.log(gltf);
          gltf.scene.position.set(1.3466197667479864,0,13.768173974709411);
          scope.sofagroup02.add(gltf.scene);
          // scope.scene.add(scope.sofagroup02);
          count++;
          _buildSofa.call(scope,count);
        }, function (xhr) {
          console.log(`load1 is loaded:${xhr.loaded} total:${xhr.total}`);
        }, function (e) {
          console.error(e);
        });
      }

      loadChairGroup(){
        var scope = this;
        var loader = new THREE.GLTFLoader();
        loader.load('/static/sceneAssets/model/room/chairgroup/Unity2GLTF.gltf', function (gltf) {
          console.log(gltf);
          gltf.scene.position.set(14.21870574574665,0,2.3763646366202273);
          scope.chairgroupObj.add(gltf.scene);
          // scope.scene.add(scope.chairgroupObj);
          _chairGroup.call(scope);
        }, function (xhr) {
          console.log(`load1 is loaded:${xhr.loaded} total:${xhr.total}`);
        }, function (e) {
          console.error(e);
        });
      }
}

LoadSmall.loadSmall = null;

function _deskchair01g1(){
    var scope = this;
    
    var group = new THREE.Group();
    var tempG = new THREE.Group();
    var tempG2 = new THREE.Group();
    var flowerobj = new THREE.Object3D();
    flowerobj.copy(scope.flower);
    var boxobj = new THREE.Object3D();
    boxobj.copy(scope.boxObj);
    tempG.add(boxobj);
    tempG.add(flowerobj);
    tempG.position.set(0,0,0.28);
    tempG2.copy(tempG);
    tempG2.scale.set(1,1,-1);
    tempG2.position.set(0,0,-0.28);
    group.add(tempG);
    group.add(tempG2);

    return group;

}

function _deskchair01g2(){
    var scope = this;
    
    var group = new THREE.Group();
    var chobj1 = new THREE.Object3D();
    var chobj2 = new THREE.Object3D();
    chobj1.copy(scope.deskchair01);
    chobj2.copy(scope.deskchair01);
    chobj1.position.set(0,0,0.28);
    chobj2.position.set(-0.084,0,-0.28);
    chobj2.scale.set(-1,1,-1);
    group.add(chobj1);
    group.add(chobj2);
    group.position.set(-0.87,0,0);

    return group;
}

function _buildSig(){
    var scope = this;
    var group = new THREE.Group();

    var bfG = new THREE.Group();
    var flowerobj = new THREE.Object3D();
    flowerobj.copy(scope.flower);
    var boxobj = new THREE.Object3D();
    boxobj.copy(scope.boxObj);
    bfG.add(boxobj);
    bfG.add(flowerobj);

    group.add(bfG);
    for(let i=0;i<5;i++){
        var deskObj = new THREE.Object3D();
        deskObj.copy(scope.deskchair01);
        deskObj.position.set(-(i*1.4)-0.87,0,0);
        group.add(deskObj);
    }
    
    return group;

}

function _buildG(direction,row,col,det=1){
    var scope = this;
    var group = new THREE.Group();
    for(let i=0;i<row;i++){
        var tempG = new THREE.Group();
        var boxG = _deskchair01g1.call(scope);
        var deskG = _deskchair01g2.call(scope);
        tempG.add(boxG);
        tempG.add(deskG);
        var colj = (i+1)%det==0?col-1:col;
        for(let j=0;j<colj;j++){
            var tempDesk = _deskchair01g2.call(scope);
            tempDesk.position.set(-((j+1)*1.4)-0.87,0,0);
            tempG.add(tempDesk);
        }
        tempG.position.set(0,0,3*(i+1));
        group.add(tempG);
    }
    if(direction=="right"){
        group.scale.set(-1,1,1);
    }
    return group;
}

function _buildDeskchair01(count){
    var scope = this;
    if(count!=3){
        return;
    }

    var leftG1 = _buildG.call(scope,"left",10,5,3);
    leftG1.name = "leftG1";
    leftG1.position.set(-30.453080210644245, 0, -36.29498718457464);

    var leftG2 = _buildG.call(scope,"left",1,5);
    leftG2.name = "leftG2";
    leftG2.position.set(-31.82449643194469, 0, -6.1343380546502075);

    var leftG3 = _buildG.call(scope,"left",1,1);
    leftG3.name = "leftG3";
    leftG3.position.set(-18.39633039879952, 0, -11.26149841855854);

    var leftG4 = _buildG.call(scope,"left",1,1);
    leftG4.name = "leftG4";
    leftG4.position.set(-15.385955529503276, 0, -47.8016713127247);

    var leftG5 = _buildG.call(scope,"left",1,1);
    leftG5.name = "leftG5";
    leftG5.position.set(-18.055724038510363, 0, -47.835361239324904);

    var rightG1 = _buildG.call(scope,"right",5,5);
    rightG1.name = "rightG1";
    rightG1.position.set(-9.71576383241312, 0, -18.50903836417739);

    var rightG2 = _buildG.call(scope,"right",2,5);
    rightG2.name = "rightG2";
    rightG2.position.set(-27.52988010430315, 0, -11.577586131796624);

    var singleG = _buildSig.call(scope);
    singleG.name = "singleG";
    singleG.position.set(-30.453080210644245, 0, -36.32595794667453);

    scope.scene.add(leftG1);
    scope.scene.add(leftG2);
    scope.scene.add(leftG3);
    scope.scene.add(leftG4);
    scope.scene.add(leftG5);
    scope.scene.add(rightG1);
    scope.scene.add(rightG2);
    scope.scene.add(singleG);
}

function _buildDeskchair02(){
  var scope = this;

  var group1 = new THREE.Group();
  var group2 = new THREE.Group();
  var box = new THREE.Group();
  var obj1 = new THREE.Object3D();
  var obj2 = new THREE.Object3D();
  obj1.copy(scope.deskchair02);
  obj2.copy(scope.deskchair02);
  obj2.scale.set(-1,1,-1);
  box.add(obj1);
  box.add(obj2);
  for(let i=0;i<4;i++){
    var temp = new THREE.Group();
    temp.copy(box);
    temp.position.set(i*1.2,0,0);
    group1.add(temp);
  }
  for(let i=0;i<3;i++){
    var temp = new THREE.Group();
    temp.copy(box);
    temp.position.set(i*1.2,0,0);
    group2.add(temp);
  }

  group2.name = "group2";
  group2.position.set(-4.803037005845951,0,-29.88265243235767);
  var fgroup1 = new THREE.Group();
  fgroup1.copy(group1);
  fgroup1.name = "fgroup1";
  fgroup1.position.set(-37.85210063953392,0,-37.60892528562366);
  fgroup1.rotation.set(0,Math.PI/2,0);
  var fgroup2 = new THREE.Group();
  fgroup2.copy(group1);
  fgroup2.name = "fgroup2";
  fgroup2.position.set(-34.405003179760755,0,-37.60892528562366);
  fgroup2.rotation.set(0,Math.PI/2,0);
  var fgroup3 = new THREE.Group();
  fgroup3.copy(group1);
  fgroup3.name = "fgroup3";
  fgroup3.position.set(-31.096121231553873,0,-37.60892528562366);
  fgroup3.rotation.set(0,Math.PI/2,0);
  var fgroup4 = new THREE.Group();
  fgroup4.copy(group1);
  fgroup4.name = "fgroup4";
  fgroup4.position.set(-4.803037005845951,0,-20.867156586633104);
  var fgroup5 = new THREE.Group();
  fgroup5.copy(group1);
  fgroup5.name = "fgroup5";
  fgroup5.position.set(-4.803037005845951,0,-24.43927190492329);

  scope.scene.add(fgroup1);
  scope.scene.add(fgroup2);
  scope.scene.add(fgroup3);
  scope.scene.add(fgroup4);
  scope.scene.add(fgroup5);
  scope.scene.add(group2);
}

function _buildDeskchair03(){
  var scope = this;

  var group1 = new THREE.Group();
  var box = new THREE.Group();
  var obj1 = new THREE.Object3D();
  var obj2 = new THREE.Object3D();
  obj1.copy(scope.deskchair03);
  obj2.copy(scope.deskchair03);
  obj2.scale.set(1,1,-1);
  box.add(obj1);
  box.add(obj2);
  for(let i=0;i<3;i++){
    var temp = new THREE.Group();
    temp.copy(box);
    temp.position.set(i*1.6,0,0);
    group1.add(temp);
  }
  
  group1.name="b3group1";
  group1.position.set(-4.885117697294989,0,-33.51615975583223);
  scope.scene.add(group1);
}

function _buildElevator(){
  var scope = this;

  var group1 = new THREE.Group();
  var group2 = new THREE.Group();
  var group3 = new THREE.Group();
  var obj1 = new THREE.Object3D();
  var obj2 = new THREE.Object3D();
  obj1.copy(scope.elevator);
  obj2.copy(scope.elevator);
  group1.add(obj1);
  obj2.position.set(2.8,0,0);
  group1.add(obj2);
  group1.name="egroup1";
  group1.position.set(-24.91908138355326,0,-30.35895121119824);

  for(let i=0;i<4;i++){
    var temp = new THREE.Group();
    temp.copy(scope.elevator);
    temp.position.set(i*2.8,0,0);
    group2.add(temp);
  }

  group2.name = "egroup2";
  group2.position.set(-24.91908138355326,0,-24.261712789327316);

  group3.copy(group2);
  group3.name = "egroup3";
  group3.scale.set(1,1,-1);
  group3.position.set(-24.91908138355326,0,-18.65884085668325);
  
  
  scope.scene.add(group1);
  scope.scene.add(group2);
  scope.scene.add(group3);
  // scope.debugTransform.controls.attach(group2);
}

function _getBoxG(total){
  var scope = this;

  var group = new THREE.Group();
  for(let i=0;i<total;i++){
    var temp = new THREE.Object3D();
    temp.copy(scope.boxBigObj);
    temp.position.set(0,0,0.4*i);
    group.add(temp);
  }

  return group;

}

function _buildBoxBig(){
  var scope = this;

  var group1 = _getBoxG.call(scope,9);
  group1.name = "bggroup1";
  group1.position.set(-28.541125552244768,0,-36.34207007478168);
  var group2 = _getBoxG.call(scope,8);
  group2.name = "bggroup2";
  group2.position.set(-28.541125552244768,0,-30.33198621108956);
  var group3 = _getBoxG.call(scope,16);
  group3.name = "bggroup3";
  group3.position.set(-28.541125552244768,0,-25.515899813052453);
  var group4 = _getBoxG.call(scope,7);
  group4.name = "bggroup4";
  group4.position.set(-28.541125552244768,0,-17.50267132451001);
  var group5 = _getBoxG.call(scope,5);
  group5.name = "bggroup5";
  group5.position.set(-28.541125552244768,0,-12.25225453198875);

  scope.scene.add(group1);
  scope.scene.add(group2);
  scope.scene.add(group3);
  scope.scene.add(group4);
  scope.scene.add(group5);
  // scope.debugTransform.controls.attach(group1);
}

function _buildSofa(count){
  var scope = this;

  if(count<2){
    return;
  }

  var sf1obj1 = new THREE.Object3D();
  sf1obj1.copy(scope.sofagroup01);
  sf1obj1.name = "sf1obj1";
  sf1obj1.position.set(-13.219145236963934,0,-43.28660642079292);
  var sf1obj2 = new THREE.Object3D();
  sf1obj2.copy(scope.sofagroup01);
  sf1obj2.name = "sf1obj2";
  sf1obj2.position.set(-9.240825238065053,0,-43.33331989295102);
  var sf1obj3 = new THREE.Object3D();
  sf1obj3.copy(scope.sofagroup01);
  sf1obj3.name = "sf1obj3";
  sf1obj3.position.set(-1.5360756913753755,0,-42.19837690389659);
  sf1obj3.rotation.set(0,Math.PI/2,0);
  var sf1obj4 = new THREE.Object3D();
  sf1obj4.copy(scope.sofagroup01);
  sf1obj4.name = "sf1obj4";
  sf1obj4.position.set(-3.4800967260700175,0,-36.77761390955652);
  var sf2obj1 = new THREE.Object3D();
  sf2obj1.copy(scope.sofagroup02);
  sf2obj1.name = "sf2obj1";
  sf2obj1.position.set(-1.3978787213279729,0,-13.80989043345205);
  var sf2obj2 = new THREE.Object3D();
  sf2obj2.copy(scope.sofagroup02);
  sf2obj2.name = "sf2obj2";
  sf2obj2.position.set(-1.3978787213279729,0,-4.287168900797049);

  scope.scene.add(sf1obj1);
  scope.scene.add(sf1obj2);
  scope.scene.add(sf1obj3);
  scope.scene.add(sf1obj4);
  scope.scene.add(sf2obj1);
  scope.scene.add(sf2obj2);

  // scope.debugTransform.controls.attach(sf2obj1);

}

function _chairGroup(){
  var scope = this;
  var group = new THREE.Group();
  for(let i=0;i<5;i++){
    var temp = new THREE.Object3D();
    temp.copy(scope.chairgroupObj);
    temp.position.set(0,0,0.9*i);
    group.add(temp);
  }
  group.name = "cggroup";
  group.position.set(-14.225492694687485,0,-2.370541151674816);
  scope.scene.add(group);
  // scope.debugTransform.controls.attach(group);
}

function load(app){
    LoadSmall.getLoadSmall(app);
    // LoadSmall.loadSmall.loadAll();
    LoadSmall.loadSmall.loadBase();
    LoadSmall.loadSmall.loadDeskchairsmall();
    LoadSmall.loadSmall.loadDeskchairbig();
    LoadSmall.loadSmall.loadDeskchair01();
    LoadSmall.loadSmall.loadDeskchair02();
    LoadSmall.loadSmall.loadDeskchair03();
    LoadSmall.loadSmall.loadElevator();
    LoadSmall.loadSmall.loadBoxBig();
    LoadSmall.loadSmall.loadSofa();
    LoadSmall.loadSmall.loadChairGroup();
}

function consoleObj(){
    console.log("object:",LoadSmall.loadSmall.scene.getObjectByName("cggroup"));
}

export default {
    load,
    consoleObj
}