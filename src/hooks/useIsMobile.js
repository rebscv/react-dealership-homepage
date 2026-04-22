import { useState, useEffect } from "react";

export default function useIsMobile(breakpoint = 1024){

    const query = `(max-width: ${breakpoint - 1}px)`;
    

    const getMatches = () =>
        typeof window !== "undefined" ? window.matchMedia(query).matches : false;

    const [isMobile, setIsMobile] = useState(getMatches);

    useEffect(() => {
        const media = window.matchMedia(query);
        const listener = () => setIsMobile(media.matches);
        media.addEventListener("change", listener);
        return () => media.removeEventListener("change", listener);
    }, [query]);
   
    return isMobile;

}

