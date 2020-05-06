class Measure{
    constructor(scene){
        this.scene = scene;

        // 0 距离 1 角度 2 面积
        this.type = 0;

        _initEvent.call(this);
    }

    start(type){
        this.type = type;
    }

    end(){

    }

}

function _initEvent(){
    var scope = this;
    window.addEventListener('mousedown', _onMouseDown.bind(scope), false);
    window.addEventListener('mousemove', _onMouseMove.bind(scope), false);
}

function _onMouseDown(event){
    var scope = this;

    //左键
    if(event.button === 0){

    }

    //右键
    if(event.button === 2){
        
    }
}

function _onMouseMove(){
    var scope = this;
}

function _rayCastPicker(wEventType) {
    var scope = this;
    var raycaster = new scope.THREE.Raycaster();
    raycaster.setFromCamera(scope.mouse, scope.camera);

    var objects = [];
    var curTargets = scope.eventTargets[wEventType];
    // 事件非遮挡情况
    // for (let i = 0; i < curTargets.length; i++) {
    //     objects.push(curTargets[i].target);
    // }
    // 事件遮挡情况
    objects = scope.scene.children;
    var intersects = raycaster.intersectObjects(objects, true); //遍历所有对象本身以及孩子节点
    if (intersects.length > 0) {
        var tg = intersects[0].object;
        for (let j = 0; j < curTargets.length; j++) {
            if (curTargets[j].target == tg) {
                curTargets[j].callBack(new CallBackEvent(wEventType, tg));
                break;
            } else {
                tg.traverseAncestors((parent) => {
                    if (curTargets[j].target == parent) {
                        curTargets[j].callBack(new CallBackEvent(wEventType, parent));
                        return;
                    }
                });
            }
        }
    }
}