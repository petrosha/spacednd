import { Line } from "@/app/components/pixitools/primitives";

const Mesh = ({ coords, size }: { coords: number[]; size: number }) => {
  return (
    <>
      {coords.map((el, idx) => (
        <Line key={idx} x1={el} y1={0} x2={el} y2={size} alpha={0.5} />
      ))}
      {coords.map((el, idx) => (
        <Line key={idx} x1={0} y1={el} x2={size} y2={el} alpha={0.5} />
      ))}
    </>
  );
};

export default Mesh; 