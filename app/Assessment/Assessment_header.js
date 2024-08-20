import Timer from "./Timer";
import Desktop_pagination from "./Desktop_pagination";
import "./assessment_header.css"
const Assessment_header = () => {
    return (
        <div className="main-container">
            <div className="main-header">
                <div className="header-logo">
                    <img src="Logo.png" alt="Logo" />
                </div>
                <Timer />
                <Desktop_pagination />
                <a href="submit_buttonbar">
                    <button className="submit-button">Submit</button>
                </a>
            </div>
        </div>
    );
};

export default Assessment_header;