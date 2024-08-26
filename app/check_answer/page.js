
import Header from "../components/Header";
import Questions_score from "./Questions_score.js";
import Questions_list from "./Questions_list.js";

function Check_answer () {
    return(
        <>
            <Header/>  
            <div className="questions-siderbar">
                <Questions_score/>
                <Questions_list/>
                
            </div>                
        </>
    )
}
export default Check_answer;