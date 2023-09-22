import { ReactNode } from "react";
import { Stage, Sprite } from "react-pixi-fiber";

const mapScaleColors: { [key: string]: number } = {
  "1": 0x111122,
  "10": 0x111133,
  "100": 0x111144,
  "1000": 0x111155,
  "10000": 0x111166,
};

type BackgroundProps = { mapScale: number; size: number; children: ReactNode };

const Background: React.FC<BackgroundProps> = ({
  mapScale,
  size,
  children,
}) => {
    console.log(mapScale, mapScaleColors[String(mapScale)]);
  return (
    <Stage
      options={{
        backgroundColor: mapScaleColors[mapScale],
        height: size,
        width: size,
      }}
    >
      {children}
    </Stage>
  );
};

export default Background;
