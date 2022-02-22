import { useEffect } from "react";
import initThreeJsScene from "../scene";

const useThreeJsScene = () => {
    useEffect(()=>{
        initThreeJsScene();
    },[]);

    
}

export default useThreeJsScene;