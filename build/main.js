import { BoxGeometry, EdgesGeometry, Geometry, LineDashedMaterial, LineSegments, PerspectiveCamera, Points, PointsMaterial, Scene, Vector3, WebGLRenderer } from 'three';
import { OrbitControls } from 'three-orbitcontrols-ts';
const init = () => {
    const renderer = getRenderer();
    const scene = new Scene();
    const camera = new PerspectiveCamera(35, window.innerWidth / window.innerHeight, 1, 1000);
    camera.position.set(200, 40, 10);
    const render = () => renderer.render(scene, camera);
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.addEventListener('change', render);
    controls.minDistance = 20;
    controls.maxDistance = 500;
    controls.enablePan = false;
    const geometry = new BoxGeometry(50, 50, 50, 10, 10, 10);
    const edgeGeometry = new EdgesGeometry(geometry);
    const material = new LineDashedMaterial({
        color: 0xffffff,
        linewidth: 1,
        scale: 1,
        dashSize: 3,
        gapSize: 1,
    });
    const lines = new LineSegments(edgeGeometry, material);
    const dotMaterial = new PointsMaterial({
        color: 0xff0000,
        size: 1,
        sizeAttenuation: false
    });
    const dot = new Points(edgeGeometry, dotMaterial);
    scene.add(lines);
    scene.add(dot);
    render();
    window.addEventListener('resize', () => onResize(renderer, camera), false);
};
const getRenderer = () => {
    const renderer = new WebGLRenderer();
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    window.document.body.appendChild(renderer.domElement);
    return renderer;
};
const onResize = (renderer, camera) => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
};
const getCuboidGeometry = (topBackRightCorner, bottomFrontLeftCorner) => {
    const directionOfChange = topBackRightCorner.sub(bottomFrontLeftCorner);
    const X = new Vector3(directionOfChange.x, 0, 0);
    const Y = new Vector3(0, directionOfChange.y, 0);
    const Z = new Vector3(0, 0, directionOfChange.z);
    const topBackLeftCorner = topBackRightCorner.sub(X);
    const topFrontRightCorner = topBackRightCorner.sub(Y);
    const bottomBackRightCorner = topBackRightCorner.sub(Z);
    const bottomFrontRightCorner = bottomFrontLeftCorner.sub(X);
    const bottomBackLeftCorner = bottomFrontLeftCorner.sub(Y);
    const topFrontLeftCorner = bottomFrontLeftCorner.sub(Z);
    const geometry = new Geometry();
    geometry.vertices.push(topFrontLeftCorner, topFrontRightCorner, topBackLeftCorner, topBackRightCorner, bottomFrontLeftCorner, bottomFrontRightCorner, bottomBackLeftCorner, bottomBackRightCorner);
    return geometry;
};
init();
