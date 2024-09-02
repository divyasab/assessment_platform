import Timer from "./Timer";
import Pagination_desktop from "./Pagination_desktop";
import "./header_desktop.css";

const Header_desktop = function() {
    return (
        <div className="main-container">
                <div className="main-header">
                    <div className="main">
                        <div className="header-logo">
                            <img src="Logo.png" alt="Logo" />
                        </div>
                        <Timer />
                    </div>    
                <Pagination_desktop />
                <div className="button-main">
                    <a href="submit_buttonbar">
                        <button className="submit-button">Submit</button>
                    </a>
                </div>    
            </div>
        </div>
    );
};

export default Header_desktop;