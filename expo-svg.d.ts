declare module 'expo' {
    import { Component } from 'react'

    interface SvgCommonProps {
      fill?: string
      fillOpacity?: number | string
      origin?: number | string
      originX?: number | string
      originY?: number | string
      rotate?: number | string
      scale?: number | string
      stroke?: string
      strokeDasharray?: Array<any>
      strokeDashoffset?: number | null
      strokeLinecap?: 'butt' | 'square' | 'round'
      strokeLineJoin?: 'miter' | 'bevel' | 'round'
      strokeOpacity?: number | string
      strokeWidth?: number | string
      x?: number | string
      y?: number | string
    }

    interface CircleProps extends SvgCommonProps {
      cx: number | string
      cy: number | string
      r: number | string
    }

    interface ClipPath {
      id: string
    }

    interface EllipseProps extends CircleProps {
      cx: number | string
      cy: number | string
      rx: number | string
      ry: number | string
    }

    interface LinearGradientProps extends SvgCommonProps {
      id: string
      x1: number | string
      x2: number | string
      y1: number | string
      y2: number | string
    }

    interface LineProps extends SvgCommonProps {
      x1: number | string
      x2: number | string
      y1: number | string
      y2: number | string
    }

    interface PathProps extends SvgCommonProps {
      d: string
    }

    interface PolyProps extends SvgCommonProps {
      points: string
    }

    interface PathLine extends SvgCommonProps {
      d: string;
    }

    interface RectProps extends SvgCommonProps {
      clipPath?: string
      height: number | string
      width: number | string
    }

    interface RadialGradientProps extends SvgCommonProps {
      cx: number | string
      cy: number | string
      fx: number | string
      fy: number | string
      gradientUnits: string
      id: string
      rx: number | string
      ry: number | string
    }

    interface SvgProps {
      height?: number | string
      opacity?: number | string
      preserveAspectRatio?: string
      viewBox?: string
      width?: number | string
    }

    interface SymbolProps {
      height: number | string
      viewbox: string
      width: number | string
    }

    interface StopProps {
      offset?: number | string
      stopColor?: string
      stopOpacity?: number | string
    }

    interface TextProps extends SvgCommonProps {
      fontFamily?: string
      fontSize?: number | string
      fontWeight?: string
      letterSpacing?: number | string
      style?: string
      textAnchor?: string
      transform?: object
      wordSpacing?: number | string
    }

    interface TextPathProps extends SvgCommonProps {
      href: string
      startOffset: string
    }

    interface TSpanProps extends TextProps {
      dx?: string
      dy?: string
    }

    interface UseProps {
      href: string
      x: number | string
      y: number | string
    }

    export class Svg extends Component<SvgProps, {}> { }

    export namespace Svg {
      export class Circle extends Component<CircleProps, {}> { }
      export class ClipPath extends Component<ClipPath, {}> { }
      export class Defs extends Component<{}, {}> { }
      export class Ellipse extends Component<SvgCommonProps, {}> { }
      export class G extends Component<SvgCommonProps, {}> { }
      export class Line extends Component<LineProps, {}> { }
      export class LinearGradient extends Component<LinearGradientProps, {}> { }
      export class Path extends Component<PathProps, {}> { }
      export class Polygon extends Component<PolyProps, {}> { }
      export class Polyline extends Component<PolyProps, {}> { }
      export class RadialGradient extends Component<RadialGradientProps, {}> { }
      export class Rect extends Component<RectProps, {}> { }
      export class Stop extends Component<StopProps, {}> { }
      export class Symbol extends Component<SymbolProps, {}> { }
      export class Text extends Component<TextProps, {}> { }
      export class TSpan extends Component<TSpanProps, {}> { }
      export class Use extends Component<UseProps, {}> { }
    }
  }