import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";


function Version2Layout() {
    return (
        <div className="version-2">
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
}

export default Version2Layout;