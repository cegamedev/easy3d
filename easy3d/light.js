class Light {
    constructor(scene) {
        this.scene = scene;

        var hlight = new THREE.HemisphereLight(0xffffff, 0xffffff, 1);
        hlight.position.set(0, 500, 0);
        this.scene.add(hlight);

        var directionalLight = new THREE.DirectionalLight(0xffffff);
        directionalLight.position.set(500, 0, 500);
        directionalLight.distance = 0;
        directionalLight.intensity = 0.8;
        this.scene.add(directionalLight);
    }
}

export default Light;