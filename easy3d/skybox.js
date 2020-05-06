class SkyBox {
    constructor(scene,imgPath) {
        this.scene = scene;

        var path = imgPath?imgPath:"/static/sceneAssets/images/bluesky/"; //设置路径
        var format = '.jpg'; //设定格式
        var urls = [
            `${path}px${format}`,
            `${path}nx${format}`,
            `${path}py${format}`,
            `${path}ny${format}`,
            `${path}pz${format}`,
            `${path}nz${format}`,
        ];
        // var textureCube = new THREE.CubeTextureLoader().load(urls);
        // this.scene.background = textureCube; //作为背景贴图
        

        var skyGeometry = new THREE.BoxGeometry( 8000, 8000, 8000 );
        //设置盒子材质
        var materialArray = [];
        for (var i = 0; i < 6; i++){
            materialArray.push( new THREE.MeshBasicMaterial({
                map: THREE.ImageUtils.loadTexture( urls[i] ),//将图片纹理贴上
                side: THREE.BackSide/*镜像翻转，如果设置镜像翻转，那么只会看到黑漆漆的一片，因为你身处在盒子的内部，所以一定要设置镜像翻转。*/
            }));
            materialArray[i].fog = false;
        }
            
        var skyMaterial = new THREE.MeshFaceMaterial( materialArray );
        var skyBox = new THREE.Mesh( skyGeometry, skyMaterial );//创建一个完整的天空盒，填入几何模型和材质的参数
        this.scene.add( skyBox );//在场景中加入天空盒
    }
}

export default SkyBox;