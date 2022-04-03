import { DirectionalLight } from "https://cdn.skypack.dev/three@0.132.2";

function createLights() {
  const light = new DirectionalLight("white", 8);
  
  light.position.set(10, 10, 10);

  return light;
}

export { createLights };
