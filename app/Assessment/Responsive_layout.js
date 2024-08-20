import Header from "../Component/Header";
import Assessment_header from "./Assessment_header";

function Responsive_layout() {
    return (
        <>
            <div className="mobile-only">
                <Header />
            </div>
            <div className="desktop-only">
                <Assessment_header />
            </div>
        </>
    );
}

export default Responsive_layout;
