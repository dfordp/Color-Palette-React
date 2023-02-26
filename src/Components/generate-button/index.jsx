import {colorAtom} from "../../Atom";
import {useSetRecoilState} from "recoil";
import {generatePalette} from "../../Helpers/";

export const GenerateButton = () => {
   const setColorPalette = useSetRecoilState(colorAtom);

   const onGenerateBtnPress=()=>{
      const generatedPalette=generatePalette();
      setColorPalette(generatedPalette)
   }

    return ( 
        <button onClick={onGenerateBtnPress} className="py-2 px-3 bg-primary-dark-yellow hover:bg-primary-light-yellow 
        text-primary-dark border-2 border-primary-dark rounded-md flex justify-center 
         items-center font-quicksand mt-5 text-xl font-bold tracking-wider
         hover:shadow-[0_1px_12px_2px_rgba(246,186,61,0.7)]"  
         aria-label="Generate New Palette">
         Generate New Color
        </button>
       )
}

