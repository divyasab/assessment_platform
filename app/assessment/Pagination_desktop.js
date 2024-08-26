import "./pagination_desktop.css";

const Pagination_desktop = function() {
    return(
        <div class="pagination">
            <a className="active"href="#">&lt;</a>
            <a  className="active1" href="#">1</a>
            <a href="#">2</a>
            <a href="#">3</a>
            <a href="#">4</a>
            <a href="#">5</a>
            <a href="#">6</a>
            <a href="#">7</a>
            <a href="#">8</a>
            <a className="active2"href="#">&gt;</a> 
        </div> 
    );
};

export default Pagination_desktop;