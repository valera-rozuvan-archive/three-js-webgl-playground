import * as THREE from 'three';

const windowInnerHeightCorrection = 4;

class Application {
  public scene: THREE.Scene = null;
  public camera: THREE.PerspectiveCamera = null;
  public renderer: THREE.WebGLRenderer = null;

  private onReadyCallback: () => void = null;

  constructor() {
    this.domReady((): void => {
      this.init();
      this.handleWindowResize();

      if (this.onReadyCallback !== null) {
        this.onReadyCallback();
      }
    });
  }

  public onRendererReady(f: () => void): void {
    this.onReadyCallback = f;
  }

  private domReady(f: () => void): void {
    (/in/.test(document.readyState)) ?
      setTimeout((): void => { this.domReady(f); }, 9) :
      f();
  }

  private init(): void {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(
      25, window.innerWidth / (window.innerHeight - windowInnerHeightCorrection)
    );
    this.renderer = new THREE.WebGLRenderer({ antialias: true });

    this.renderer.setSize(window.innerWidth, window.innerHeight - windowInnerHeightCorrection);
    this.renderer.domElement.id = 'three-js-renderer';
    document.body.appendChild(this.renderer.domElement);
  }

  private handleWindowResize(): void {
    window.addEventListener('resize', (): void => {
      this.camera.aspect = window.innerWidth / (window.innerHeight - windowInnerHeightCorrection);
      this.camera.updateProjectionMatrix();

      this.renderer.setSize(window.innerWidth, window.innerHeight - windowInnerHeightCorrection);
    }, false );
  }
}

export {
  Application
};
