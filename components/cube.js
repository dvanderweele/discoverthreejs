import { BoxBufferGeometry, MathUtils, Mesh, MeshStandardMaterial, TextureLoader } from "https://cdn.skypack.dev/three@0.132.2";

function createMaterial() {
  const textureLoader = new TextureLoader();
  const texture = textureLoader.load("")
  const material = new MeshStandardMaterial({ color: "purple" });
  return material;
}

function createCube() {
  const geometry = new BoxBufferGeometry(2, 2, 2);

  const material = createMaterial();

  const cube = new Mesh(geometry, material);

  cube.rotation.set(-.5, -.1, .8);

  const radiansPerSecond = MathUtils.degToRad(30);

  cube.tick = (delta) => {
    cube.rotation.z += radiansPerSecond * delta;
    cube.rotation.x += radiansPerSecond * delta;
    cube.rotation.y += radiansPerSecond * delta;
  }

  return cube;
}

export { createCube };
