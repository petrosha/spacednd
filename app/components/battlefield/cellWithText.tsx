import { Rect } from "../pixitools/primitives";
import { Text } from "react-pixi-fiber";
import Cell from "./cell";

type TextCellProps = {
  coords: number[];
  x: number;
  y: number;
  size: number;
};

const TextCell:React.FC<TextCellProps> = ({coords, x, y, size}) => {
  return (
    <Cell x={x} y={y} coords={coords}>
      <Rect
        x={0}
        y={0}
        width={size}
        height={size}
        lineColor={"0x0000ff"}
        fillColor={"0x555555"}
      />
      <Text
        text={"12345"}
        x={size/2}
        y={size/2}
        anchor={[0.5, 0.5]}
        style={{ fontSize: 10, fill: 0xffffff, _align: "right" }}
      ></Text>
    </Cell>

  );
};

export default TextCell;
