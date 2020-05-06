class Renderer {
    constructor(scene, camera, selector) {
        this.scene = scene;
        this.camera = camera;
        this.container = document.querySelector(selector);

        this.viewWidth = window.innerWidth;
        this.viewHeight = window.innerHeight;
        this.commonRenderer = null;

        _onResize.call(this);
    }
    commonRender() {
        var glRenderer = null;
        var css2Renderer = null;
        var css3Renderer = null;
        if (this.commonRenderer) {
            return;
        }

        glRenderer = new THREE.WebGLRenderer({
            antialias: true,
            alpha: true
        });
        glRenderer.autoClear = false;
        glRenderer.setPixelRatio(window.devicePixelRatio);
        glRenderer.setSize(this.viewWidth, this.viewHeight);
        glRenderer.setViewport(0, 0, this.viewWidth, this.viewHeight);
        glRenderer.gammaOutput = true;
        glRenderer.setClearColor(0x000000, 0);
        glRenderer.domElement.style.position = 'absolute';
        glRenderer.domElement.style.top = 0;
        glRenderer.domElement.style.left = 0;
        glRenderer.domElement.style.zIndex = 1;
        this.container.appendChild(glRenderer.domElement);

        css3Renderer = new THREE.CSS3DRenderer();
        css3Renderer.setSize(this.viewWidth, this.viewHeight);
        css3Renderer.domElement.style.position = 'absolute';
        css3Renderer.domElement.style.top = 0;
        css3Renderer.domElement.style.left = 0;
        this.container.appendChild(css3Renderer.domElement);

        css2Renderer = new THREE.CSS2DRenderer();
        css2Renderer.setSize(this.viewWidth, this.viewHeight);
        css2Renderer.domElement.style.position = 'absolute';
        css2Renderer.domElement.style.top = 0;
        css2Renderer.domElement.style.left = 0;
        this.container.appendChild(css2Renderer.domElement);

        this.commonRenderer = {
            aniId: null,
            glRenderer: glRenderer,
            css2Renderer: css2Renderer,
            css3Renderer: css3Renderer
        };

        _commonAnimate.call(this);
    }
    stopCommonRender() {
        if (this.commonRenderer) {
            cancelAnimationFrame(this.commonRenderer.aniId);
            this.commonRenderer = null;
        }
    }
}

function _onResize() {
    var scope = this;
    window.addEventListener('resize', () => {
        scope.viewWidth = window.innerWidth;
        scope.viewHeight = window.innerHeight;

        if (scope.commonRenderer) {
            scope.commonRenderer.glRenderer.setSize(scope.viewWidth, scope.viewHeight);
            scope.commonRenderer.glRenderer.setViewport(0, 0, scope.viewWidth, scope.viewHeight);
            scope.commonRenderer.css3Renderer.setSize(scope.viewWidth, scope.viewHeight);
            scope.commonRenderer.css2Renderer.setSize(scope.viewWidth, scope.viewHeight);
        }


    }, false);
}

function _commonAnimate() {
    var scope = this;
    scope.commonRenderer.aniId = requestAnimationFrame(_commonAnimate.bind(scope));

    scope.commonRenderer.glRenderer.clear();
    scope.commonRenderer.glRenderer.render(scope.scene, scope.camera);
    scope.commonRenderer.css3Renderer.render(scope.scene, scope.camera);
    scope.commonRenderer.css2Renderer.render(scope.scene, scope.camera);

}

export default Renderer;