import { Group, Intersection, Mesh, Object3D } from "three";
import { GeometryEdge } from "./GeometryEdge";
import { GeometryVertex } from "./GeometryVertex";
import { IMaterialObjectPart } from "./IMaterialObjectPart";

export abstract class GeometryObject extends Group {
    protected vertices: GeometryVertex[];
    protected edges: GeometryEdge[];

    protected selectedElement: IMaterialObjectPart | null;

    constructor() {
        super();

        this.vertices = [];
        this.edges = [];
        this.selectedElement = null;
    }

    unhoverVertices(): void {
        this.vertices.forEach(ch => ch.unhover());
    }

    unhoverEdges(): void {
        this.edges.forEach(ch => ch.unhover());
    }

    updateOnMouseMove(intersections: Intersection[]): void {
        if (intersections.length === 0) {
            this.selectedElement = null;
            return;
        }

        this.selectedElement = intersections[0].object as unknown as IMaterialObjectPart;
        this.selectedElement.hover();
    }

    updateOnMouseClick(): void {
        if (this.selectedElement) {
            (this.selectedElement as IMaterialObjectPart).updateMaterials();
        }
    }
}