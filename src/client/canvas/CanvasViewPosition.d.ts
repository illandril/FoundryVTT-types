declare global {
  type CanvasViewPosition = {
    /** The x-coordinate which becomes stage.pivot.x */
    x: number | null
    /** The y-coordinate which becomes stage.pivot.y */
    y: number | null
    /** The zoom level up to CONFIG.Canvas.maxZoom which becomes stage.scale.x and y */
    scale: number | null
  };
}

export {};
