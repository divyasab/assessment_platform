import Timer from "./Timer";
import Pagination_desktop from "./Pagination_desktop";
import "./header_desktop.css";

const Header_desktop = function() {
    return (
        <div className="main-container">
            <div className="main-header">
                <div className="header-logo">
                    <img src="Logo.png" alt="Logo" />
                </div>
                <Timer />
                <Pagination_desktop />
                <a href="submit_buttonbar">
                    <button className="submit-button ">Submit</button>
                </a>
            </div>
        </div>
    );
};

export default Header_desktop;