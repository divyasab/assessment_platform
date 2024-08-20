import Header from "../Component/Header";
import Assessment_header from "./Assessment_header";
import MobilePegination from "./Mobile_pagination";

function Responsive_layout() {
    return (
        <>
            <div className="mobile-only">
                <Header />
                <MobilePegination />
            </div>
            <div className="desktop-only">
                <Assessment_header />
            </div>
        </>
    );
}

export default Responsive_layout;
