import { toast } from "react-hot-toast";


export const ColorBox = (props) => {
    
    const {color} = props;
    
    const onPressed = () => {
        if(window !== undefined) {
            window.navigator.clipboard.writeText(color);
            toast.success("Color Copied...");
        }
    }

    return(
        <button onClick={onPressed}>
            <div style={{backgroundColor:color}}></div>
            <p>{color}</p>
        </button>
    )
}


// export default ColorBox;