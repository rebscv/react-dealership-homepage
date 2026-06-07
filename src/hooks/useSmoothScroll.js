import { useEffect } from "react";

export default function useSmoothScroll(){

    useEffect(() => {
        const handleClick = (e) => {
            const link = e.target.closest("a.smooth-scroll");
            if (!link) return;

            const href = link.getAttribute("href");
            if (!href?.startsWith("#")) return;

            e.preventDefault();

            const target = document.querySelector(href);
            target?.scrollIntoView({ behavior: "smooth", block: "start" });
        };


        document.addEventListener("click", handleClick);
        return () => {
            document.removeEventListener("click", handleClick);
        };

    }, []);

}


