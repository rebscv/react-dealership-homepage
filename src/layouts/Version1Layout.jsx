import { Outlet } from "react-router-dom";
import { useEffect } from "react";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

import "./Version1Layout.css";


function Version1Layout() {

    useEffect(() => {
        document.body.classList.add("version-1-body");

        return () => {
            document.body.classList.remove("version-1-body");
        };
        
    }, []);

    return (
        <div className="version-1">
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
}

export default Version1Layout;