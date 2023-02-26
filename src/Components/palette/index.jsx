import {colorAtom} from "../../Atom"
import {ColorBox} from "../elements/color-box"
import {useRecoilValue} from "recoil"



export const Palette=()=>{
    const colorPalette = useRecoilValue(colorAtom);
    return(                                             
        <div>
            {colorPalette.map((color, index) => {           
                return <ColorBox key={index} color={color} />   
            })} 
        </div>
    )
}

