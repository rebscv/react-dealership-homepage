import { Outlet } from "react-router-dom";
import { useEffect } from "react";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

import "./Version2Layout.css";


function Version2Layout() {

    useEffect(() => {
        document.body.classList.add("version-2-body");

        return () => {
            document.body.classList.remove("version-2-body");
        };
        
    }, []);

    return (
        <div className="version-2">
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
}

export default Version2Layout;