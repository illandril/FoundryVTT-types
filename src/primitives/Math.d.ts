declare global {
  interface Math {
    clamp: (num: number, min: number, max: number) => number;
    toDegrees: (angle: number) => number;
    normalizeDegrees: (degrees: number) => number;
    toRadians: (degree: number) => number;
    normalizeRadians: (rad: number) => number;
  }
}

export type {};
