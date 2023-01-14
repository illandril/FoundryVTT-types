declare global {
  type ApplicationOptions = {
    baseApplication?: string
    width?: number
    height?: string | number
    top?: number
    left?: number
    scale?: number
    popOut?: boolean
    minimizable?: boolean
    resizable?: boolean
    id?: string
    classes?: string[]
    title?: string
    template?: string
  };
}

export {};
