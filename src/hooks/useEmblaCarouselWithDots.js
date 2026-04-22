import useEmblaCarousel from "embla-carousel-react";
import { useState, useEffect, useRef } from "react";

export default function useEmblaWithDots(options = {}, autoplayDelay = 0, enabled = true) {
    const [emblaRef, emblaApi] = useEmblaCarousel(options);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState([]);
    const autoplayRef = useRef(null);


    useEffect(() => {
        if (!emblaApi) return;

        const onSelect = () => {
            setSelectedIndex(emblaApi.selectedScrollSnap());
        };

        const onInit = () => {
            const snaps = emblaApi.scrollSnapList();
            setScrollSnaps(Array.isArray(snaps) ? snaps : []);
        };

        emblaApi.on("select", onSelect);
        emblaApi.on("reInit", onInit);

        onInit();
        onSelect();

        return () => {
            emblaApi.off("select", onSelect);
            emblaApi.off("reInit", onInit);
        };

    }, [emblaApi]);


    useEffect(() => {

        if (!emblaApi || !autoplayDelay) return; 

        autoplayRef.current = setInterval(() => {
            emblaApi.scrollNext();
        }, autoplayDelay); 

        return () => clearInterval(autoplayRef.current);

    }, [emblaApi, autoplayDelay]);


    useEffect(() => {
        
        if (!emblaApi || !autoplayDelay) return;

        const handleInteraction = () => { resetAutoplay(); };
        
        emblaApi.on("pointerDown", handleInteraction);
        emblaApi.on("select", handleInteraction);

        return () => {
            emblaApi.off("pointerDown", handleInteraction);
            emblaApi.off("select", handleInteraction);
        };

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
        scrollSnaps,
        scrollTo,
        resetAutoplay,
        scrollNext,
        scrollPrev,
    };

}