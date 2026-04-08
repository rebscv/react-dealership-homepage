import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";


function Version1Layout() {
    return (
        <div className="version-1">
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
}

export default Version1Layout;