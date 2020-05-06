class TransformCtls {
    constructor(scene, camera, renderer, orbit=null) {
        var scope = this;
        this.scene = scene;
        this.camera = camera;
        this.renderer = renderer;
        this.orbit = orbit;

        this.controls = new THREE.TransformControls(this.camera, this.renderer.domElement);
        this.scene.add(this.controls);

        this.controls.addEventListener('dragging-changed', function (event) {
            if(scope.orbit)
            scope.orbit.enabled = !event.value;
        });

        window.addEventListener('keydown', function (event) {
            switch (event.keyCode) {
                case 87: // W
                    scope.controls.setMode("translate");
                    break;
                case 69: // E
                    scope.controls.setMode("rotate");
                    break;
                case 82: // R
                    scope.controls.setMode("scale");
                    break;
                case 88: // X
                    scope.controls.showX = !scope.controls.showX;
                    break;
                case 89: // Y
                    scope.controls.showY = !scope.controls.showY;
                    break;
                case 90: // Z
                    scope.controls.showZ = !scope.controls.showZ;
                    break;
                case 32: // Spacebar
                    scope.controls.enabled = !scope.controls.enabled;
                    break;
                case 187:
                case 107: // +, =, num+
                scope.controls.setSize(scope.controls.size + 0.1);
                    break;
                case 189:
                case 109: // -, _, num-
                scope.controls.setSize(Math.max(scope.controls.size - 0.1, 0.1));
                    break;

            }

        });
    }

}

export default TransformCtls;