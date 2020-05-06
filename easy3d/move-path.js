class MovePath {
    constructor(
        scene,
        controls,
        target,
        points,
        offsetY = 10,
        speed = 3,
        tension = 0.05,
        lookModel = 0,
        changeCall,
        endCall
    ) {
        this.scene = scene;
        this.controls = controls;
        this.target = target;
        this.points = points;
        this.offsetY = offsetY;
        this.speed = speed;
        this.tension = tension;
        this.lookModel = lookModel;
        this.endCall = endCall;
        this.changeCall = changeCall;

        this.path = [];
        this.pathIndex = 0;
        this.aniId = null;
        this.targetInfo = {
            pos: { ...target.position
            },
            rot: { ...target.rotation
            },
            lookPos: { ...controls.target
            }
        };
        var curve = new THREE.CatmullRomCurve3(this.points, false, "catmullrom", this.tension);
        this.path = curve.getPoints(this.speed);

        this.line = null;
        this.lineVisible = false;
        _addLine.call(this);

    }
    addPoints(points) {
        this.points = this.points.concat(points);
        var curve = new THREE.CatmullRomCurve3(points, false, "catmullrom", this.tension);
        var path = curve.getPoints(this.speed);
        this.path = this.path.concat(path);

        _removeLine.call(this);
        _addLine.call(this);
    }
    start() {
        this.pathIndex = 0;
        _animate.call(this);
    }
    stop() {
        cancelAnimationFrame(this.aniId);
        _removeLine.call(this);
        this.lineVisible = false;
        this.path = [];
        this.pathIndex = 0;
        this.aniId = null;
        this.target.position.copy(this.targetInfo.pos);
        this.target.rotation.copy(this.targetInfo.rot);
        this.controls.target.copy(this.targetInfo.lookPos);
        if (this.endCall instanceof Function) {
            this.endCall();
        }
    }
    show() {
        if (this.line)
            this.line.visible = true;
    }
    hide() {
        if (this.line)
            this.line.visible = false;
    }
}

function _animate() {
    var scope = this;
    scope.aniId = requestAnimationFrame(_animate.bind(scope));

    if (scope.pathIndex < scope.path.length) {
        _change.call(scope);
    } else {
        scope.stop();
    }

}

function _change() {
    var scope = this;
    scope.target.position.copy(scope.path[scope.pathIndex]);
    scope.target.position.y += scope.offsetY;
    if (scope.target.type == "PerspectiveCamera") {
        var lookObj = new THREE.Vector3();
        switch (scope.lookModel) {
            case 0:
                if (scope.pathIndex + 1 < scope.path.length) {
                    lookObj.x = scope.path[scope.pathIndex + 1].x;
                    lookObj.y = scope.path[scope.pathIndex].y;
                    lookObj.z = scope.path[scope.pathIndex + 1].z;
                }
                scope.controls.target.copy(lookObj);
                break;
            case 1:
                if (scope.pathIndex + 1 < scope.path.length) {
                    lookObj.copy(scope.path[scope.pathIndex + 1]);
                }
                scope.controls.target.copy(lookObj);
                break;
        }
    }

    scope.pathIndex++;
    if (scope.changeCall instanceof Function) {
        scope.changeCall(scope.target);
    }
}

function _addLine() {
    var scope = this;
    if (scope.path.length > 1) {
        var geometry = new THREE.Geometry();
        geometry.vertices = scope.path;
        var material = new THREE.LineBasicMaterial({
            color: 0x00ff00,
        });
        scope.line = new THREE.Line(geometry, material);
        scope.line.visible = scope.lineVisible;
        scope.scene.add(scope.line);
    }
}

function _removeLine() {
    var scope = this;
    if (scope.line) {
        scope.lineVisible = scope.line.visible;
        scope.scene.remove(scope.line);
        scope.line.traverse(function (item) {
            if (item instanceof THREE.Mesh) {
                item.geometry.dispose(); //删除几何体
                item.material.dispose(); //删除材质
                item.material.map.dispose();
            }
        });
        scope.line = null;
    }
}

export default MovePath;