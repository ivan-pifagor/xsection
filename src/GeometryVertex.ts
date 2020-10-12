import { Mesh, MeshBasicMaterial, SphereGeometry, Vector3 } from "three";
import { IColoredObjectPart } from "./IColoredObjectPart";

export class GeometryVertex extends Mesh implements IColoredObjectPart {
    private hoverColor: number;
    private originalColor: number;

    constructor(location: Vector3) {
        const geometry = new SphereGeometry(1, 32, 32);
        const material = new MeshBasicMaterial({ color: 0xffff00 });
        super(geometry, material);

        this.position.x = location.x;
	    this.position.y = location.y;
        this.position.z = location.z;
        
        this.originalColor = 0xffff00;
        this.hoverColor = 0xff0000;
    }
    
    changeColorToHover(): void {
        this.material = new MeshBasicMaterial( {color: this.hoverColor });
    }
    changeColorToOriginal(): void {
        this.material = new MeshBasicMaterial({ color: this.originalColor });
    }
    updateColorsAfterClick(): void {
        this.hoverColor = 0x00ff00;
        this.originalColor = 0x0000ff;
    }
}