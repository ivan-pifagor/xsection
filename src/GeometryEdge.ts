import { BufferGeometry, Line, LineBasicMaterial, Vector3 } from "three";
import { IColoredObjectPart } from "./IColoredObjectPart";

export class GeometryEdge extends Line implements IColoredObjectPart {
    private hoverColor: number;
    private originalColor: number;
    
    constructor(points: Vector3[]) {
        const geometry = new BufferGeometry().setFromPoints(points);
        const material = new LineBasicMaterial({ color: 0xffff00 });
        super(geometry, material);
        
        this.originalColor = 0xffff00;
        this.hoverColor = 0xff0000;
    }

    changeColorToHover(): void {
        this.material = new LineBasicMaterial( {color: this.hoverColor });
    }
    changeColorToOriginal(): void {
        this.material = new LineBasicMaterial({ color: this.originalColor });
    }
    updateColorsAfterClick(): void {
        this.hoverColor = 0x00ff00;
        this.originalColor = 0x0000ff;
    }
}