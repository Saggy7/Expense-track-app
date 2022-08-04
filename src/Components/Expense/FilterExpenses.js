 //import App from "../../App";
import './FilterExpenses.css'
const FilterExpenses = (props) => {
    const yearHandler =(event) => {
        props.onChangeYear(event.target.value);        
    };

  return (
    <div className="years">
      <label>Choose a Year</label>
      <br></br>
      <select  value={props.selected} onChange={yearHandler}>
        <option value="2019">2019</option>
        <option value="2020">2020</option>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
      </select>
    </div>
  );
};

export default FilterExpenses;
