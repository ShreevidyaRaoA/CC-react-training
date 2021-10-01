//import styles from './SearchList.module.css';
import SearchList from './searching/SearchList';
const SearchList = () => {
    let serachNumber ="";
}
const handlePhonenumberChange = (event) => {
    searchNumber = event.target.value;
};
        
        return (
            <div>  
            <div className={styles.form3}>
            
                <label >Pnonenumber</label> 
                <input id  =  "telephone" type = "tel" required  className = "form-input" maxlength="10" pattern="\d{10}" title="Please enter exactly 10 digits" pattern="[1-9]{1}[0-9]{9}" value = {this.state.phonenumber}
                onChange = {handlePhonenumberChange}
                />
                <p> Searching for <strong>{searchNumber}</strong></p>
           </div>
       
         <button type="submit">Submit</button>
         </div>  
        );
    
    
}
export default SearchList;

