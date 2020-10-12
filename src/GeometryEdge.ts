import { BufferGeometry, Color, Line, LineBasicMaterial, Vector3 } from "three";
import { ColorConstants } from "./ColorConstants";
import { IMaterialObjectPart } from "./IMaterialObjectPart";

export class GeometryEdge extends Line implements IMaterialObjectPart {
    private hoverColor: Color;
    private unhoverColor: Color;
    
    constructor(points: Vector3[]) {
        const geometry = new BufferGeometry().setFromPoints(points);
        const material = new LineBasicMaterial();
        material.color = ColorConstants.DEFAULT_UNHOVER_COLOR;
        super(geometry, material);
        
        this.hoverColor = ColorConstants.DEFAULT_HOVER_COLOR;
        this.unhoverColor = ColorConstants.DEFAULT_UNHOVER_COLOR;
    }

    hover(): void {
        const material = this.material as LineBasicMaterial;
        material.color = this.hoverColor;
    }
    unhover(): void {
        const material = this.material as LineBasicMaterial;
        material.color = this.unhoverColor;
    }
    updateMaterials(): void {
        this.hoverColor = ColorConstants.SELECTED_HOVER_COLOR;
        this.unhoverColor = ColorConstants.SELECTED_UNHOVER_COLOR;
    }
}