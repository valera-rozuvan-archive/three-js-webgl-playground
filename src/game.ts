import { Application } from './application.ts';

import * as THREE from 'three';

class Game {
  public scene: THREE.Scene;
  public camera: THREE.PerspectiveCamera;
  public renderer: THREE.WebGLRenderer;

  private cube: THREE.Mesh = null;

  constructor(app: Application) {
    this.scene = app.scene;
    this.camera = app.camera;
    this.renderer = app.renderer;

    this.init();
    this.animate();
  }

  private init(): void {
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });

    this.cube = new THREE.Mesh(geometry, material);

    this.scene.add(this.cube);

    this.cube.position.z = -5;
    this.cube.rotation.x = 10;
    this.cube.rotation.y = 5;

    this.renderer.render(this.scene, this.camera);
  }

  private animate(): void {
    this.cube.rotation.x += 0.01;

    this.renderer.render(this.scene, this.camera);

    requestAnimationFrame((): void => {
      this.animate();
    });
  }
}

export {
  Game
};
