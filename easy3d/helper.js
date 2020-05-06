class Helper {
    constructor(scene) {
        this.scene = scene;

        this.axesHelperer = null;
        this.cameraHelperer = null;
    }
    axesHelper() {
        this.axesHelperer = new THREE.AxesHelper(1000);
        this.scene.add(this.axesHelperer)
    }
    cameraHelper(camera){
        this.cameraHelperer = new THREE.CameraHelper(camera);
        this.scene.add(this.cameraHelperer);
    }
}

export default Helper;