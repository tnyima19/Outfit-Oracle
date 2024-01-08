function QuestionCard({id, question, options}){
    return (

    <div className="input-group mb-3">
        <label>{question}</label>
        <div className="input-group mb-3">
        <div className="input-group-prepend">
            <label className="input-group-text" for="inputGroupSelect01">Options</label>
        </div>
        <select className="custom-select" id="inputGroupSelect02">
            <option selected>Choose...</option>
            <option value="1">{options[0]}</option>
            <option value="2">{options[1]}</option>
            <option value="3">{options[2]}</option>
            <option value="4">{options[3]}</option>
            <option value="5">{options[4]}</option>
            <option value="6">{options[5]}</option>
            <option value="7">{options[6]}</option>
            <option value="8">{options[7]}</option>
            <option value="9">{options[8]}</option>
            <option value="10">{options[9]}</option>
            <option value="11">{options[10]}</option>
            <option value="12">{options[11]}</option>
        </select>
        </div>
      
    </div>
 
    );

}
export default QuestionCard;