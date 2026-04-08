import useEmblaCarousel from "embla-carousel-react";
import { useState, useEffect, useRef } from "react";

export default function useEmblaWithDots(options = {}, autoplayDelay = 0) {
    const [emblaRef, emblaApi] = useEmblaCarousel(options);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const autoplayRef = useRef(null);


    useEffect(() => {
        if (!emblaApi) return;

        const onSelect = () => {
            setSelectedIndex(emblaApi.selectedScrollSnap());
        };

        emblaApi.on("select", onSelect);
        onSelect();

        return () => emblaApi.off("select", onSelect);
    }, [emblaApi]);


    useEffect(() => {

        if (!emblaApi || !autoplayDelay) return; 

        autoplayRef.current = setInterval(() => {
            emblaApi.scrollNext();
        }, autoplayDelay); 

        return () => clearInterval(autoplayRef.current);

    }, [emblaApi, autoplayDelay]);
        
    
    const scrollTo = (index) => {
        if (emblaApi) emblaApi.scrollTo(index);
    };


    const resetAutoplay = () => {
        if (!emblaApi || !autoplayDelay) return;

        clearInterval(autoplayRef.current);

        autoplayRef.current = setInterval(() => {emblaApi.scrollNext();}, autoplayDelay);
    };


    const scrollNext = () => {
        if (emblaApi) emblaApi.scrollNext();
    }


    const scrollPrev = () => {
        if (emblaApi) emblaApi.scrollPrev();
    }


    return {
        emblaRef,
        emblaApi,
        selectedIndex,
        scrollTo,
        resetAutoplay,
        scrollNext,
        scrollPrev,
    };

}