export type LineProps = {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  color?: string;
  width?: number;
  alpha?: number;
}

export type RectProps = { 
  x: number; 
  y: number; 
  width: number;
  height: number; 
  lineColor?: string;
  fillColor?: string;
  lineWidth?: number; 
  lineAlpha?: number;
  fillAlpha?: number; }