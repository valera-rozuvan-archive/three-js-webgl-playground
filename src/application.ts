import { PerspectiveCamera, Scene, WebGLRenderer } from 'three';

const windowInnerHeightCorrection = 4;

class Application {
  public scene: Scene = null;
  public camera: PerspectiveCamera = null;
  public renderer: WebGLRenderer = null;

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
    this.scene = new Scene();
    this.camera = new PerspectiveCamera(
      25, window.innerWidth / (window.innerHeight - windowInnerHeightCorrection)
    );
    this.renderer = new WebGLRenderer({ antialias: true });

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
