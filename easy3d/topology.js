class Node {
    constructor(data) {
        this.data = data;
        this.parent = null;
        this.children = [];
    }
    //广度优先，获取第num次出现的节点
    getNodeByData(data,num=1) {
        var scope = this;
        var curNum = 1;
        var bfsList = [];
        bfsList.push(scope);

        if (scope.data == data) {
            if(curNum >= num){
                return scope;
            }
            else {
                curNum++;
            }
        }

        while(bfsList.length>0){
            var node = bfsList.shift();
            for(let i=0;i<node.children.length;i++){
                if (node.children[i].data == data) {
                    if(curNum >= num){
                        return node.children[i];
                    }
                    else {
                        curNum++;
                    }
                }
                bfsList.push(node.children[i]);
            }
        }
    }
    getUpRoadByNode(node) {
        var roadList = [];
        while (node) {
            roadList.unshift(node.data);
            node = node.parent;
        }
        return roadList;
    }
    isInParents(node,data){
        while(node){
            if(node.parent && node.parent.data == data){
                return true;
            }
            else {
                node = node.parent;
            }
        }
        return false;
    }
}

class Topology {
    constructor(scene, dotWith = 2) {
        this.vectors = []; //顶点集合
        this.weightMap = [
            []
        ]; //边集合，二维数组，值代表权值

        this.scene = scene;
        this.dotWith = dotWith;
        this.topology = new THREE.Group();
        this.topology.name = "topology";
        this.topologyDot = new THREE.Group();
        this.topologyDot.name = "topologyDot";
        this.debug = true;
    }
    create(vectors, lineMap) {
        this.vectors = vectors;
        this.weightMap = _line2Weight.call(this, vectors, lineMap);
    }
    show(showPoint = true) {
        var scope = this;
        for (let i = 0; i < scope.weightMap.length; i++) {
            var row = scope.weightMap[i];
            for (let j = i; j < row.length; j++) {
                if (row[j] > 0) {
                    var startP = scope.vectors[i];
                    var endP = scope.vectors[j];
                    scope.showByVectors([startP, endP], showPoint, i, j);
                }
            }
        }
    }
    showByVectors(vectors, showPoint = true, startI = 0, startJ = -1) {
        var scope = this;
        if (vectors.length < 2) {
            return;
        }
        scope.topology = new THREE.Group();
        scope.topology.name = "topology";
        scope.topologyDot = new THREE.Group();
        scope.topologyDot.name = "topologyDot";

        var geometry = new THREE.Geometry();
        geometry.vertices = vectors;
        var material = new THREE.LineBasicMaterial({
            color: 0x00ff00,
        });
        var line = new THREE.Line(geometry, material);
        scope.topology.add(line);
        scope.scene.add(scope.topology);

        if (showPoint) {
            for (let i = 0; i < vectors.length; i++) {
                var dot = null;
                if (scope.debug) {
                    var txt = (startJ > -1 && i > 0) ? startJ : startI + i;
                    dot = _createSpriteText.call(scope, txt);
                } else {
                    dot = _createSpriteShape.call(scope, scope.dotWith);
                }
                dot.position.copy(vectors[i]);
                scope.topologyDot.add(dot);
            }
            scope.scene.add(scope.topologyDot);
        }
    }
    findShortPath(p1, p2, delY1 = 0, delY2 = 0) {
        var scope = this;
        var startP = p1;
        var endP = p2;
        startP.y = startP.y + delY1;
        endP.y = endP.y + delY2;
        //映射到路径上
        var startI = 0;
        var endI = 0;
        for (let i = 0; i < scope.vectors.length; i++) {
            var startMin = scope.vectors[startI];
            var endMin = scope.vectors[endI];
            var startDisMin = _distance3d(startP, startMin);
            var endDisMin = _distance3d(endP, endMin);
            if (_distance3d(startP, scope.vectors[i]) < startDisMin) {
                startI = i;
            }
            if (_distance3d(endP, scope.vectors[i]) < endDisMin) {
                endI = i;
            }
        }
        if (startI == endI) {
            return;
        }

        //构造路径树
        var tree = new Node(startI);
        _createTree.call(scope, startI, endI, tree);
        //查找最短路径
        var shortRoadList = _getShortRoadByEndI.call(scope, tree, endI);

        return shortRoadList;
    }
}

function _line2Weight(vectors, lineMap) {
    var weightMap = [];
    for (let i = 0; i < lineMap.length; i++) {
        var row = lineMap[i];
        var weightRow = [];
        for (let j = 0; j < row.length; j++) {
            if (row[j] > 0) {
                var p1 = vectors[i];
                var p2 = vectors[j];
                var distance = _distance3d.call(this, p1, p2);
                weightRow.push(distance);
            } else {
                weightRow.push(0);
            }
        }
        weightMap.push(weightRow);
    }
    return weightMap;
}

function _distance3d(p1, p2) {
    return Math.sqrt(Math.pow((p2.x - p1.x), 2) + Math.pow((p2.y - p1.y), 2) + Math.pow((p2.z - p1.z), 2));
}

function _distance2d(p1, p2) {
    return Math.sqrt(Math.pow((p2.x - p1.x), 2) + Math.pow((p2.z - p1.z), 2));
}

function _createSpriteShape(w) {
    let scope = this;
    let canvas = document.createElement("canvas");
    canvas.width = w;
    canvas.height = w;
    let ctx = canvas.getContext("2d");
    ctx.rect(0, 0, w, w);
    ctx.fillStyle = "#0000ff";
    ctx.fill();
    let texture = new THREE.Texture(canvas);
    texture.needsUpdate = true;
    let material = new THREE.SpriteMaterial({
        map: texture
    });
    let mesh = new THREE.Sprite(material);
    mesh.scale.set(0.25, 0.25, 1);
    return mesh;
}

function _createSpriteText(text, s = 1) {
    let scope = this;
    let canvas = document.createElement("canvas");
    canvas.width = 64;
    canvas.height = 64;
    let ctx = canvas.getContext("2d");
    ctx.fillStyle = "#ff0000";
    ctx.font = "Bold 18px Arial";
    ctx.fillText(text, 10, 20);
    let texture = new THREE.Texture(canvas);
    texture.needsUpdate = true;
    let material = new THREE.SpriteMaterial({
        map: texture
    });
    let mesh = new THREE.Sprite(material);
    mesh.scale.set(3 * s, 3 * s, 1);
    return mesh;
}

function _createTree(startI, endI, tree) {
    var scope = this;
    var searchNumList = new Array(scope.weightMap.length);
    searchNumList.fill(1);
    var nodeList = [];
    nodeList.push(startI);

    while (nodeList.length > 0) {
        var curNode = nodeList.shift();
        if (curNode == endI) {
            continue;
        }
        var node = tree.getNodeByData(curNode,searchNumList[curNode]);
        searchNumList[curNode]++;
        for (let j = 0; j < scope.weightMap[curNode].length; j++) {
            if (scope.weightMap[curNode][j] > 0 && !node.isInParents(node,j)) {
                nodeList.push(j);
                var child = new Node(j);
                child.parent = node;
                node.children.push(child);
            }
        }

    }
}

function _getShortRoadByEndI(tree,endI) {
    var scope = this;
    var roadList = [];
    var num = 1;
    var node = tree.getNodeByData(endI,num);
    while (node) {
        roadList.push(tree.getUpRoadByNode(node));
        num++;
        node = tree.getNodeByData(endI,num);
    }
    console.log(roadList);

    var minIndex = 0;
    var minLen = 0;
    for (let i = 0; i < roadList.length; i++) {
        var row = roadList[i];
        var totalLen = 0;
        for (let j = 0; j < row.length - 1; j++) {
            var len = scope.weightMap[row[j]][row[j + 1]];
            totalLen += len;
        }
        if (i == 0 || totalLen < minLen) {
            minLen = totalLen;
            minIndex = i;
        }
    }

    return roadList[minIndex];
}

export default Topology;