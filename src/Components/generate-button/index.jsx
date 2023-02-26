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
        <button onClick={OnGenerateButtonClicked} className="py-2 px-3 bg-primary-dark-yellow hover:bg-primary-light-yellow text-primary-dark border-2 border-primary-dark rounded-md flex justify-center items-center font-quicksand mt-5 text-xl font-bold tracking-wider hover:shadow-[0_1px_12px_2px_rgba(246,186,61,0.7)]">
         Generate New Color
        </button>
       )
}

