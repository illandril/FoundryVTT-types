import {
  Application,
  BatchRenderer,
  BatchShaderGenerator,
  Bounds,
  Container,
  DisplayObject,
  FederatedEvent,
  Filter,
  Geometry,
  Graphics,
  GraphicsGeometry,
  IPointData,
  Matrix,
  Mesh,
  Circle as PixiCircle,
  Polygon as PixiPolygon,
  Rectangle as PixiRectangle,
  Point,
  Program,
  RenderTexture,
  Renderer,
  Sprite,
  Text,
  TextStyle,
  Texture,
  Transform,
} from 'pixi.js';

declare global {
  namespace PIXI {
    export class Polygon extends PixiPolygon {
      getBounds(): Rectangle;
    }

    export class Rectangle extends PixiRectangle {
      toPolygon(): Polygon;
    }

    export class Circle extends PixiCircle {
      toPolygon(options?: { density?: number; includeEndpoints?: boolean }): Polygon;
    }

    export {
      Application,
      BatchRenderer,
      BatchShaderGenerator,
      Bounds,
      Container,
      DisplayObject,
      FederatedEvent,
      Filter,
      Geometry,
      Graphics,
      GraphicsGeometry,
      IPointData,
      Matrix,
      Mesh,
      Point,
      Program,
      Renderer,
      RenderTexture,
      Sprite,
      Text,
      TextStyle,
      Texture,
      Transform,
    };
  }
}
