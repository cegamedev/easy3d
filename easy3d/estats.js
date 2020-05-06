class EStats {
    constructor(selector){
        this.stats = new Stats();
        document.querySelector(selector).appendChild(this.stats.domElement);
        _animate.call(this);
    }
}

function _animate() {
    var scope = this;
    requestAnimationFrame(_animate.bind(scope));
    
    scope.stats.update();
}

export default EStats;