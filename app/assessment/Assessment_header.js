import Header from "../components/Header";
import Header_desktop from "./Header_desktop";
import Pagination_desktop from "./Pagination_desktop";

const Assessment_header = function() {
    return (
        <>
            <div className="mobile-only">
                <Header />
                <Pagination_desktop />
            </div>
            <div className="desktop-only">
                <Header_desktop/>
            </div>
        </>
    );
};

export default Assessment_header;
