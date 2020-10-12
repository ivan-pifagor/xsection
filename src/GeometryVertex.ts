import { Color, Mesh, MeshBasicMaterial, SphereGeometry, Vector3 } from "three";
import { ColorConstants } from "./ColorConstants";
import { IMaterialObjectPart } from "./IMaterialObjectPart";

export class GeometryVertex extends Mesh implements IMaterialObjectPart {
    private hoverColor: Color;
    private unhoverColor: Color;

    constructor(location: Vector3) {
        const geometry = new SphereGeometry(1, 32, 32);
        const material = new MeshBasicMaterial();
        material.color = ColorConstants.DEFAULT_UNHOVER_COLOR;
        super(geometry, material);

        this.position.x = location.x;
        this.position.y = location.y;
        this.position.z = location.z;

        this.hoverColor = ColorConstants.DEFAULT_HOVER_COLOR;
        this.unhoverColor = ColorConstants.DEFAULT_UNHOVER_COLOR;
    }

    hover(): void {
        const material = this.material as MeshBasicMaterial;
        material.color = this.hoverColor;
    }

    unhover(): void {
        const material = this.material as MeshBasicMaterial;
        material.color = this.unhoverColor;
    }

    updateMaterials(): void {
        this.hoverColor = ColorConstants.SELECTED_HOVER_COLOR;
        this.unhoverColor = ColorConstants.SELECTED_UNHOVER_COLOR;
    }
}