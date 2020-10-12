import { CubeGeometry } from "./GeometryCube";
import { PerspectiveCamera, Raycaster, Vector2, WebGLRenderer, Scene } from 'three';
import { OrbitControls } from 'three-orbitcontrols-ts';

const scene = new Scene();

const renderer = new WebGLRenderer();
document.body.appendChild(renderer.domElement);

renderer.setSize(window.innerWidth, window.innerHeight);

const cube = new CubeGeometry(20);
scene.add(cube);

const camera = new PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 2000);
const orbitControls = new OrbitControls(camera, renderer.domElement);

const raycaster = new Raycaster();
const mouse = new Vector2();

camera.position.set(0, 0, 100);
orbitControls.update();

render();

function render() {
    requestAnimationFrame(render);
    orbitControls.update();

    raycaster.setFromCamera(mouse, camera);

    cube.unhoverVertices();
    cube.unhoverEdges();

    const intersects = raycaster.intersectObjects(scene.children, true);
    cube.updateOnMouseMove(intersects);

    renderer.render(scene, camera);
}

window.addEventListener('mousemove', (event) => {
    event.preventDefault();

    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;
}, false);

renderer.domElement.addEventListener("click", (event) => {
    cube.updateOnMouseClick();
})