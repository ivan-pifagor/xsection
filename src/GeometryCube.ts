import { Vector3 } from "three";
import { GeometryEdge } from "./GeometryEdge";
import { GeometryObject } from "./GeometryObject";
import { GeometryVertex } from "./GeometryVertex";

export class CubeGeometry extends GeometryObject {
    constructor(edgeLength: number) {
        super();

        const vertex1 = new Vector3(-edgeLength, -edgeLength, -edgeLength);
        const vertex2 = new Vector3(-edgeLength, edgeLength, -edgeLength);
        const vertex3 = new Vector3(-edgeLength, -edgeLength, edgeLength);
        const vertex4 = new Vector3(edgeLength, -edgeLength, -edgeLength);
        const vertex5 = new Vector3(edgeLength, edgeLength, -edgeLength);
        const vertex6 = new Vector3(-edgeLength, edgeLength, edgeLength);
        const vertex7 = new Vector3(edgeLength, -edgeLength, edgeLength);
        const vertex8 = new Vector3(edgeLength, edgeLength, edgeLength);

        const edges = [
            new GeometryEdge([vertex1, vertex2]),
            new GeometryEdge([vertex1, vertex3]),
            new GeometryEdge([vertex1, vertex4]),
            new GeometryEdge([vertex2, vertex5]),
            new GeometryEdge([vertex2, vertex6]),
            new GeometryEdge([vertex3, vertex6]),
            new GeometryEdge([vertex3, vertex7]),
            new GeometryEdge([vertex4, vertex5]),
            new GeometryEdge([vertex4, vertex7]),
            new GeometryEdge([vertex5, vertex8]),
            new GeometryEdge([vertex6, vertex8]),
            new GeometryEdge([vertex7, vertex8])
        ]

        const vertices = [
            new GeometryVertex(vertex1),
            new GeometryVertex(vertex2),
            new GeometryVertex(vertex3),
            new GeometryVertex(vertex4),
            new GeometryVertex(vertex5),
            new GeometryVertex(vertex6),
            new GeometryVertex(vertex7),
            new GeometryVertex(vertex8)
        ]

        this.vertices = vertices;
        this.edges = edges;

        this.edges.forEach(edge => this.add(edge));
        this.vertices.forEach(vertex => this.add(vertex));
    }
}