import * as THREE from "three";
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";

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


  const geometry = new THREE.BoxGeometry();
  const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  const cube = new THREE.Mesh(geometry, material);
  // scene.add(cube);

  scene.background = new THREE.Color("black");

  camera.position.z = 5;

  //cat
  const catWrapperObj = new THREE.Object3D();
  scene.add(catWrapperObj);

  const loader = new OBJLoader();

  loader.load(
    // resource URL
    './assets/cat.obj',
    // called when resource is loaded
    function ( catObj: any ) {
      const cat = catObj.children[1];
      catWrapperObj.add(cat);

      cat.scale.set(2,2,2);
      cat.position.set(0, -5, -5);

      cat.material = new THREE.MeshStandardMaterial({color: "white", metalness: 0.8, roughness: 0.5});


      console.log(cat,"!!!");
    },
    // called when loading is in progresses
    function ( xhr: any ) {
      console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
    },
    // called when loading has errors
    function ( error: any ) {
      console.log( 'An error happened', error );
    }
  );

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

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    catWrapperObj.rotation.y += 0.005;
    // catWrapperObj.rotation.z += 0.01;

    renderer.render(scene, camera);
  }

  animate();
};

export default initThreeJsScene;