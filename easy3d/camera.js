class Camera {
    constructor() {
        this.perCameras = [];
        this.ortCameras = [];

        _onResize.call(this);
    }
    createPerCamera() {
        var perCamera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 16000);
        this.perCameras.push(perCamera);
        return perCamera;
    }
    createOrtCamera() {
        var ortCamera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10000);
        this.ortCameras.push(ortCamera);
        return ortCamera;
    }
    per2Ort(ortCamera, perCamera, ctlsTarget) {
        ortCamera.position.copy(perCamera.position);
        ortCamera.rotation.copy(perCamera.rotation);
        ortCamera.lookAt(ctlsTarget);

        const DEG2RAD = Math.PI / 180.0;
        var distance = perCamera.position.distanceTo(ctlsTarget);
        var h = Math.tan(perCamera.fov / 2 * DEG2RAD) * distance;
        var w = h * perCamera.aspect;

        ortCamera.top = h;
        ortCamera.bottom = -h;
        ortCamera.left = -w;
        ortCamera.right = w;
        ortCamera.updateProjectionMatrix();
    }
    flyTo(camera,
        controls, {
            rot,
            pos,
            lookPos
        }, s = 1, callBack = null) {
        let tween = new TimelineMax();
        tween.to(controls.target, s, lookPos, 0);
        tween.to(camera.rotation, s, rot, 0);
        tween.to(camera.position, s, { ...pos,
            onComplete: function () {
                if (callBack instanceof Function) {
                    callBack();
                }
            }
        }, 0);
    }
}

function _onResize() {
    var scope = this;

    window.addEventListener('resize', () => {
        for (let i = 0; i < scope.perCameras.length; i++) {
            var per = scope.perCameras[i];
            per.aspect = window.innerWidth / window.innerHeight;
            per.updateProjectionMatrix();
        }
        for(let i=0;i<scope.ortCameras.length;i++){
            var ort = scope.ortCameras[i];
            var w = ort.top * window.innerWidth / window.innerHeight;
            ort.left = -w;
            ort.right = w;
            ort.updateProjectionMatrix();
        }

    }, false);
}

export default Camera;