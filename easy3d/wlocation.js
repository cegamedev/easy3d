class WLocation {
    constructor(camera) {
        this.camera = camera;
    }
    screen2World(clientX,clientY) {
        var mv = new THREE.Vector3(
            (clientX / window.innerWidth) * 2 - 1,
            -(clientY / window.innerHeight) * 2 + 1,
            0.5);//第三个参数可以改变
        mv.unproject(this.camera); //这句将一个向量转成threejs坐标
        return mv;
    }
    world2Screen(worldVector) {
        var vector = worldVector.project(this.camera);
        var halfWidth = window.innerWidth / 2;
        var halfHeight = window.innerHeight / 2;

        return {
            x: Math.round(vector.x * halfWidth + halfWidth),
            y: Math.round(-vector.y * halfHeight + halfHeight)
        };
    }
    location2World(localObj,locationVector){
        return localObj.localToWorld(locationVector);
    }
    world2Location(targetObj,worldVector){
        return targetObj.worldToLocal(worldVector);
    }
}

export default WLocation;