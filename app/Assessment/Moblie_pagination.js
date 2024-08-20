import "./moblie_pagination.css"
const Moblie_pegination=()=>{
    return(
        <>
            <div className="moblie-pagination">
                    <a className="active"href="#">&lt;</a>
                    <a href="#">1</a>
                    <a href="#" className="pagination1">...</a>
                    <a href="#" className="active1">5</a>
                    <a href="#" className="pagination1">...</a>
                    <a href="#">8</a>
                    <a className="active2"href="#">&gt;</a>  
            </div>
           
        </>
    )
    
}
export default Moblie_pegination;