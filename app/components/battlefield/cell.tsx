import { Container } from "react-pixi-fiber";

type CellProps = {
  coords: number[];
  x: number;
  y: number;
  children: React.ReactNode;
};

const Cell: React.FC<CellProps> = ({ coords, x, y, children }) => {
  return (
    <Container x={coords[x]} y={coords[y]}>
      {children}
    </Container>
  );
};

export default Cell;
