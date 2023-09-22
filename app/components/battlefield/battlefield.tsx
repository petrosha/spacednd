import Background from "../pixitools/stage";
import TextCell from "./cellWithText";
import Mesh from "./mesh";

type BattlefieldProps = { 
    mapScale:number; 
}

const Battlefield:React.FC<BattlefieldProps> = ({mapScale})=>{
    const size = 861;
    const cellNumber = 21;
    const cellSize = Math.round(size / cellNumber);
    const coords = Array.from(
      { length: cellNumber },
      (el, idx) => idx * cellSize
    );
    return (
        <Background size={size} mapScale={mapScale}>
            <Mesh coords={coords} size={size} />
            <TextCell coords={coords} size={Math.round(size / cellNumber)} x={5} y={3} />
        </Background>
    );
}

export default Battlefield;

