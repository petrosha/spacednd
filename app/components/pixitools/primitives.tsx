"use client";

import { CustomPIXIComponent, CustomPIXIComponentBehavior } from "react-pixi-fiber";
import * as PIXI from "pixi.js";
import {LineProps, RectProps} from "./primitivesTypes";

const lineBehavior: CustomPIXIComponentBehavior<PIXI.Graphics, LineProps>= {
  customDisplayObject: (props) => new PIXI.Graphics(),
  customApplyProps: function (
    instance, 
    oldProps, 
    newProps, 
  ) {
    const { x1, y1, x2, y2, color = "0xffffff", width = 1, alpha = 1 }: LineProps = newProps;
    instance.clear();
    instance.lineStyle(width, color, alpha);
    instance.moveTo(x1, y1);
    instance.lineTo(x2, y2);
  },
};

const Line = CustomPIXIComponent(lineBehavior, "Line");

const rectBehavior: CustomPIXIComponentBehavior<PIXI.Graphics, RectProps>= {
  customDisplayObject: (props) => new PIXI.Graphics(),
  customApplyProps: function (
    instance, 
    oldProps, 
    newProps, 
  ) {
    const { x, y, width, height, lineColor = "0xffffff", fillColor = "0x0", lineWidth = 1, lineAlpha = 1, fillAlpha=1 }: RectProps = newProps;
    instance.clear();
    instance.lineStyle(lineWidth, lineColor, lineAlpha);
    instance.beginFill(fillColor, fillAlpha);
    instance.drawRect(x, y, width, height);
    instance.endFill();
  },
};

const Rect = CustomPIXIComponent(rectBehavior, "Rectangle");

export { Line, Rect };
