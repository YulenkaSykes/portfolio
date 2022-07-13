import * as THREE from "three";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";
import gsap from "gsap";

const initThreeJsScene = () => {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );

  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.domElement.classList.add("three-render-zone");
  document.body.appendChild(renderer.domElement);

  scene.background = new THREE.Color("black");

  camera.position.z = 10;

  //cat
  const catWrapperObj = new THREE.Object3D();
  scene.add(catWrapperObj);

  const loader = new OBJLoader();

  const imgLoader = new THREE.TextureLoader();
  const height = imgLoader.load("./assets/height.png");

  loader.load(
    // resource URL
    "./assets/cat.obj",
    // called when resource is loaded
    function (catObj: any) {
      const cat = catObj.children[1];
      cat.name = "cat";
      catWrapperObj.add(cat);

      cat.scale.set(2, 2, 2);
      cat.position.set(0, -5, -5);

      cat.material = new THREE.MeshStandardMaterial({
        color: "white",
        metalness: 0.8,
        roughness: 0.5,
        displacementMap: height,
        displacementScale: 0,
      });
    },
    // called when loading is in progresses
    function (xhr: any) {
      console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
    },
    // called when loading has errors
    function (error: any) {
      console.log("An error happened", error);
    }
  );

  window.addEventListener("click", (e) => {
    const cat: any = catWrapperObj.getObjectByName("cat");
    gsap.fromTo(
      cat.material,
      { displacementScale: 0 },
      { displacementScale: 2 }
    );
    gsap.fromTo(
      cat.material,
      { displacementScale: 2 },
      { displacementScale: 0, delay: 3 }
    );
    console.log("cat", cat);
    cat.material.displacementScale = (e.pageX - window.innerWidth / 2) * 0.0075;
  });

  // window.addEventListener("mousemove", (e) => {
  //   const cat: any = catWrapperObj.getObjectByName("cat");
  //   console.log("cat", cat);
  //   cat.material.displacementScale = (e.pageX - window.innerWidth / 2) * 0.0075;
  // });

  const light = new THREE.PointLight("orange", 15, 10);
  light.position.set(0, -5, 0);
  catWrapperObj.add(light);

  const light2 = new THREE.PointLight("aqua", 5, 5);
  light2.position.set(0, 5, 0);
  catWrapperObj.add(light2);

  const light3 = new THREE.PointLight("lightskyblue", 6, 6);
  light3.position.set(0, 10, 0);
  catWrapperObj.add(light3);

  function animate() {
    requestAnimationFrame(animate);

    catWrapperObj.rotation.y += 0.005;

    renderer.render(scene, camera);
  }

  animate();
};

export default initThreeJsScene;
