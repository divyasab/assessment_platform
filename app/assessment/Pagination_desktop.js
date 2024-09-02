import "./pagination_desktop.css";

const Pagination_desktop = function() {
    return(
            <div class="pagination">
                <a className="active"href="#">&lt;</a>
                <a  className="active1" href="#">1</a>
                <div className="desktop-only">
                    <a href="#">2</a>
                    <a href="#">3</a>
                    <a href="#">4</a>
                </div>
                <div className="mobile-only">
                    <a href="#" className="pagination1  ">...</a>
                </div>    
                <a className="active3"href="#">5</a>
                <div className="desktop-only">
                    <a href="#">6</a>
                    <a href="#">7</a>
                </div>
                <div className="mobile-only">
                    <a href="#" className="pagination1  ">...</a>
                </div> 
               
                <a href="#">8</a>
                <a className="active2"href="#">&gt;</a> 
            </div> 
    );
};

export default Pagination_desktop;