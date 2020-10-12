import { CubeGeometry } from "./GeometryCube";
import { PerspectiveCamera, Raycaster, Vector2, WebGLRenderer, Scene } from 'three';
import { OrbitControls } from 'three-orbitcontrols-ts';
const scene = new Scene();
const renderer = new WebGLRenderer({
    canvas: document.getElementById("canvas-id")
});
renderer.setSize(window.innerWidth, window.innerHeight);
const cube = new CubeGeometry(20);
scene.add(cube);
const camera = new PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 2000);
const orbitControls = new OrbitControls(camera, renderer.domElement);
const raycaster = new Raycaster();
const mouse = new Vector2();
camera.position.set(0, 0, 100);
orbitControls.update();
//orbitControls.saveState();
render();
function render() {
    requestAnimationFrame(render);
    orbitControls.update();
    raycaster.setFromCamera(mouse, camera);
    cube.makeSpheresOriginalColor();
    cube.makeEdgesOriginalColor();
    const intersects = raycaster.intersectObjects(scene.children, true);
    if (intersects.length > 0) {
        const hoverObject = intersects[0].object;
        hoverObject.changeColorToHover();
    }
    renderer.render(scene, camera);
}
window.addEventListener('mousemove', (event) => {
    event.preventDefault();
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
}, false);
document.getElementById("canvas-id")?.addEventListener("click", (event) => {
    /*scene.getObjectById(hoveredObjectId).originalColor = new THREE.MeshBasicMaterial({ color: 0x0000ff });
    scene.getObjectById(hoveredObjectId).hoverColor = new THREE.MeshBasicMaterial({ color: 0x00ff00 });*/
});
