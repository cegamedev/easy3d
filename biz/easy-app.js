import Easy3d from "../easy3d/easy3d.js";
import LoadBig from "./load-big.js";
import LoadSmall from "./load-small.js";
import Test from "./test.js";

class App {
  constructor() {
    this.scene = new THREE.Scene();
    var camera = new Easy3d.Camera();
    this.perCamera = camera.createPerCamera();
    // this.perCamera.position.set(-277.6107142833496,275.86975031069085,390.87722806584935);
    // this.perCamera.rotation.set(-0.7575801823290648,-0.5881363191893081,-0.4832681485193053);
    this.perCamera.position.set(-51.39417862240321,37.94201177399688,-64.32891846705833);
    this.perCamera.rotation.set(-2.309450118620586,-0.5258539060662257,-2.637815304243481);
    this.ortCamera = camera.createOrtCamera();
    this.renderer = new Easy3d.Renderer(this.scene, this.perCamera, ".container");
    this.renderer.commonRender();
    var light = new Easy3d.Light(this.scene);
    var skyBox = new Easy3d.Skybox(this.scene);
    var fog = new Easy3d.Fog(this.scene);
    var ground = new Easy3d.Ground(this.scene);
    this.orbitCtls = new Easy3d.OrbitCtls(this.perCamera, this.renderer.commonRenderer.glRenderer);
    this.helper = new Easy3d.Helper(this.scene);
    this.helper.axesHelper();
    this.wEvent = new Easy3d.WEvent(this.scene, this.perCamera);
    this.transformCtls = new Easy3d.TransformCtls(this.scene,this.perCamera,this.renderer.commonRenderer.glRenderer,this.orbitCtls.controls);
    var estats = new Easy3d.EStats(".container");

  }

  static getApp(){
    if(!App.app){
      App.app = new App();
    }
    return App.app;
  }

  

}

App.app = null;


function create(){
  var app = App.getApp();
  LoadBig.load(app);
  // LoadSmall.load(app);
  app.wEvent.debug((data) => {
    console.log("click debug->", data);
    console.log("camera->",app.perCamera);
  });
  // Test.run(app);
  return app;
}


export default {
  create,
  LoadSmall
};
