type GridDimensions = {
  distance: number
  size: number
  height: number
  width: number
  sceneX: number
  sceneY: number
  sceneWidth: number
  sceneHeight: number
};

type BaseGridOptions = {
  dimensions: GridDimensions
};

declare global {
  class BaseGrid extends PIXI.Container {
    get options(): BaseGridOptions;
  }
}

export {};
