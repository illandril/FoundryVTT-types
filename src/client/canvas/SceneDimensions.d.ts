declare global {
  type SceneDimensions = {
    /** The width of the canvas. */
    width: number;
    /** The height of the canvas. */
    height: number;
    /** The grid size. */
    size: number;
    /** The canvas rectangle. */
    rect: PIXI.Rectangle;
    /** The X coordinate of the scene rectangle within the larger canvas. */
    sceneX: number;
    /** The Y coordinate of the scene rectangle within the larger canvas. */
    sceneY: number;
    /** The width of the scene. */
    sceneWidth: number;
    /** The height of the scene. */
    sceneHeight: number;
    /** The scene rectangle. */
    sceneRect: PIXI.Rectangle;
    /** The number of distance units in a single grid space. */
    distance: number;
    /** The aspect ratio of the scene rectangle. */
    ratio: number;
    /** The length of the longest line that can be drawn on the canvas. */
    maxR: number;

    columns: number;
    rows: number;
  };
}

export type {};
