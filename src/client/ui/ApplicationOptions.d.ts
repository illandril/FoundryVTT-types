declare global {
  type ApplicationOptions = {
    baseApplication: string | null
    width: number | null
    height: string | number | null
    top: number | null
    left: number | null
    scale: number | null
    popOut: boolean
    minimizable: boolean
    resizable: boolean
    id: string
    classes: string[]
    dragDrop: unknown[]
    tabs: unknown[]
    filters: unknown[]
    title: string
    template: string | null
    scrollY: unknown[]
  };
}

export {};
