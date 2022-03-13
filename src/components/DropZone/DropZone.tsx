import css from "./DropZone.css";
import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { useImageDataURL } from "../../hooks";
import logoHeader from "../../assets/logo-pata.png";
import { GreenButton } from "../../UI/buttons/GreenButton";

export function MyDropZone(props) {

    const [img, setImg] = useImageDataURL();
    const onDrop = useCallback((acceptedFiles) => {
        acceptedFiles.forEach((file) => {
            
            const reader = new FileReader();
            reader.onload = (e) => {
                // Do whatever you want with the file contents
                const result = e.target.result;
                // console.log(result);
                setImg(result);
            }
            reader.readAsDataURL(file);
        });
        
    }, [img]);
    const {getRootProps, getInputProps} = useDropzone({onDrop})
    
    return (
        <div className={css["contaiener"]} {...getRootProps()}>
            <input {...getInputProps()} />
            <div className={css["drag-and-drop"]}> 
                Drop your files here...
                {   img   ?   <img className={css.img} src={img} />   :
                    <img className={css.logo} src={logoHeader} />
                }
            </div>
            <div className={css.button} onClick={(e) => e.preventDefault()}> Agregar foto </div>
        </div>
    );
}
