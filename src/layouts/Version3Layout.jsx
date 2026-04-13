import { Outlet } from "react-router-dom";
import { useEffect } from "react";

import HeaderV3 from "../components/Header/Headerv3";
import Footer from "../components/Footer/Footer";

import "./Version3Layout.css";


function Version3Layout() {

    useEffect(() => {
        document.body.classList.add("version-3-body");

        return () => {
            document.body.classList.remove("version-3-body");
        };
        
    }, []);

    return (
        <div className="version-3">
            <HeaderV3 />
            <Outlet />
            <Footer version={3} />
        </div>
    );
}

export default Version3Layout;