import Header from "../Component/Header";
import Assessment_header from "./Assessment_header";
import MobliePegination from "./Moblie_pagination";

function Responsive_layout() {
    return (
        <>
            <div className="mobile-only">
                <Header />
                <MobliePegination />
            </div>
            <div className="desktop-only">
                <Assessment_header />
            </div>
        </>
    );
}

export default Responsive_layout;
