type BaseGridOptions = {
  dimensions: SceneDimensions
};

declare global {
  class BaseGrid extends PIXI.Container {
    get options(): BaseGridOptions;
  }
}

export {};
