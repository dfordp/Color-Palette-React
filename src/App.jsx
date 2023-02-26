import {Palette} from './Components/palette'
import {GenerateButton} from './Components/generate-button'
import {PaletteCopyButton} from './Components/palette-copy-button'
import {colorAtom} from './Atom'
import { useRecoilState } from 'recoil'
import {toast} from 'react-hot-toast'
import { KeyboardEvent } from 'react'
import {generatePalette} from './Helpers'


function App() {

  const [colorPalette, setColorPalette] = useRecoilState(colorAtom);


  const onSpacePressed = () => {
        const generatedPalette = generatePalette();
        setColorPalette(generatedPalette);
  }


  const onCPressed = () => {
      if(window !== undefined && colorPalette.length === 5) {
          window.navigator.clipboard.writeText('${colorPalette[0]} ${colorPalette[1]} ${colorPalette[2]} ${colorPalette[3]} ${colorPalette[4]}');
          toast.success("Palette copied to clipboard");
      }
    };
  
  const keyDownEvent = (e) => {
    console.log(e.key);

    if(e.key === ' '  || e.code==32){
      onSpacePressed();
      return;
    }

    if(e.key === "c" || e.key === "C") {
      onCPressed();
      return;
    }
  }

  // You're welcome...😁😁😁


  return (
    <main className="bg-yellow-400 min-h-screen w-full flex flex-col" onKeyDown={keyDownEvent} tabIndex={0}>
      <h1>Color Palette Generator</h1>

      <Palette />

      <GenerateButton />

      <p>
        Or Just press the Spacebar to generate a new palette
      </p>

      <PaletteCopyButton />


    </main>
  )
}

export default App
