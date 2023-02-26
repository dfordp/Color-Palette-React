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
        <button className="flex flex-col sm:w-60 w-25 bg-white rounded-md border-2 border-primary-dark items-center justify-center py-3 px-2 m-2 hover:cursor-pointer hover:shadow-2xl" onClick={onPressed}>
            <div className="w-full h-40 rounded-md border-2 border-primary-dark" style={{backgroundColor:color}}></div>
            <p className="font-quicksand text-xl mt-2 tracking-wider">{color}</p>
        </button>
    )
}


// export default ColorBox;