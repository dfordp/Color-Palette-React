import {colorAtom} from '../../Atom';
import { toast } from 'react-hot-toast';    
import { useRecoilValue } from 'recoil';

export const PaletteCopyButton = () => {
    const colorPalette=useRecoilValue(colorAtom);

    const onCopyBtnPress=()=>{
        if(window !== undefined && colorPalette.length === 5) {
            window.navigator.clipboard.writeText('${colorPalette[0]} ${colorPalette[1]} ${colorPalette[2]} ${colorPalette[3]} ${colorPalette[4]}');
            toast.success("Palette copied to clipboard");
        }
    }
    return (
        <button onClick={onCopyBtnPress}>Copy Palette</button>
    )

}
