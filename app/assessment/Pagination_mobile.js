import "./pagination_mobile.css";

const Pagination_mobile = function() {
    return(
        <div className="mobile-pagination">
            <a className="active"href="#">&lt;</a>
            <a href="#">1</a>
            <a href="#" className="pagination1">...</a>
            <a href="#" className="active1">5</a>
            <a href="#" className="pagination1">...</a>
            <a href="#">8</a>
            <a className="active2"href="#">&gt;</a>  
        </div>
    );
    
};

export default Pagination_mobile;