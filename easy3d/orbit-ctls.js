class OrbitCtls{
    constructor(camera,renderer){
        this.camera = camera;
        this.renderer = renderer;

        this.aniId = null;
        this.controls = new THREE.OrbitControls(this.camera, this.renderer.domElement);
        this.controls.minZoom = .15,
        this.controls.maxZoom = 8,
        this.controls.autoRotate = !1,
        this.controls.enableDamping = !0,
        this.controls.minPolarAngle = 0,
        this.controls.maxPolarAngle = Math.PI,
        this.controls.panSpeed = .1,
        this.controls.rotateSpeed = .07,
        this.controls.minDistance = 1.5,
        this.controls.dampingFactor = .12,
        this.controls.screenSpacePanning = !0,
        this.controls.enabled = !0,
        this.controls.pushed = !1;

        _animate.call(this);
    }
    
    stopUpdate(){
        cancelAnimationFrame(this.aniId);
    }

    resumeUpdate(){
        _animate.call(this);
    }
}

function _animate() {
    var scope = this;
    scope.aniId = requestAnimationFrame(_animate.bind(scope));

    scope.controls.update();
}

export default OrbitCtls;