import { Group } from "three";
import { GeometryEdge } from "./GeometryEdge";
import { GeometryVertex } from "./GeometryVertex";

export abstract class GeometryObject extends Group {
    protected vertices: GeometryVertex[];
    protected edges: GeometryEdge[];

    constructor() {
        super();

        this.vertices = [];
        this.edges = [];
    }

    public get Vertices() : GeometryVertex[] {
        return this.vertices;
    }

    public get Edges() : GeometryEdge[] {
        return this.edges;
    }
}