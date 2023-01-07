declare global {
  interface Math {
    clamped: (num: number, min: number, max: number) => number
    decimals: (number: number, places: number) => number
    toDegrees: (angle: number) => number
    normalizeDegrees: (degrees: number) => number
    toRadians: (degree: number) => number
    normalizeRadians: (rad: number) => number
  }
}

export {};
