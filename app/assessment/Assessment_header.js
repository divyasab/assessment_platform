import Header from "../components/Header";
import Header_desktop from "./Header_desktop";
import Pagination_mobile from "./Pagination_mobile";

const Assessment_header = function() {
    return (
        <>
            <div className="mobile-only">
                <Header />
                <Pagination_mobile />
            </div>
            <div className="desktop-only">
                <Header_desktop/>
            </div>
        </>
    );
};

export default Assessment_header;
