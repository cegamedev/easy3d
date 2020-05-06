class Poi {
    constructor() {
    }
    createByDiv(divDoc, is3d = false) {
        var obj = null;
        if (is3d) {
            obj = new THREE.CSS3DObject(divDoc.cloneNode(true));
        } else {
            obj = new THREE.CSS2DObject(divDoc.cloneNode(true));
        }
        return obj;
    }
    createByCanvas(canvas) {
        let texture = new THREE.Texture(canvas);
        texture.needsUpdate = true;
        let material = new THREE.SpriteMaterial({
            map: texture
        });
        let sprite = new THREE.Sprite(material);
        sprite.center = new THREE.Vector2(0.5, 0);
        return sprite;
    }
    createSprite(imgUrl, title, color, callBack, depth=false, sizeAttenuation=true) {
        var scope = this;
        var wh = 64;
        var offsetW = 2;
        var offsetH = 15;
        var fontSize = 12;
        var canvas = document.createElement("canvas");
        canvas.width = wh;
        canvas.height = wh;
        var ctx = canvas.getContext("2d");

        ctx.fillStyle = color;
        ctx.font = `Bold ${fontSize}px Arial`;
        ctx.textAlign = "left";
        ctx.fillText(title, offsetW, offsetH);

        var img = new Image();
        img.onload = function () {
            ctx.drawImage(img, (offsetH+fontSize)/2, offsetH+fontSize, wh-(offsetH+fontSize), wh-(offsetH+fontSize));

            var texture = new THREE.Texture(canvas);
            texture.needsUpdate = true;
            var material = new THREE.SpriteMaterial({
                map: texture,
                transparent: true,
                depthTest:depth,
                sizeAttenuation:sizeAttenuation
            });
            var sprite = new THREE.Sprite(material);
            sprite.center = new THREE.Vector2(0.5, 0);
            sprite.userData.title = title;
            if(callBack instanceof Function){
                callBack(sprite);
            }
        };
        img.src = imgUrl;
    }
}

export default Poi;