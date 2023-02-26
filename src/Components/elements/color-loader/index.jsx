import { colorAtom } from "../../../Atom";  
import { generatePalette } from "../../../Helpers";
import { useSetRecoilState } from "recoil";
import { useEffect,useRef } from "react";

// This component is for intializing the color palette when the app is loaded for the first time.
export const ColorLoader = () => {
    const SetColorPalette=useSetRecoilState(colorAtom);
    const IsMounted=useRef(false);

    const loadColor=()=>{
        const colorPalette=generatePalette();
        SetColorPalette(colorPalette);
    }

    useEffect(()=>{
        if(IsMounted.current){
            return;
        }
        IsMounted.current=true;
        loadColor();
    },[]);

    return <></>

}