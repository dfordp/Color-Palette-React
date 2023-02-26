import {colorAtom} from "../../Atom";
import {useRecoilState} from "recoil";
import {generatePalette} from "../../Helpers/";

export const GenerateButton = () => {
   const setColorPalette = useRecoilState(colorAtom);

   const OnGenerateButtonClicked = () => {
        const generatedPalette = generatePalette();
        setColorPalette(generatedPalette);
     }

    return ( 
        <button onClick={OnGenerateButtonClicked}>Generate</button>
       )
}


// export default GenerateButton;