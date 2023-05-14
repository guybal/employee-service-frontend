import { ChangeEvent, useState } from "react";
import "../../../Styles/SearchBarStyle/searchBarStyle.css";

import EmployeeModel from "../../../Models/EmployeeModel";
import EmployeeCard from "../../CardArea/EmployeeCard/EmployeeCard";
import generalService from "../../../Services/GeneralService";


function SearchBar(): JSX.Element {

    const [searchWord, setSearchWord] = useState<string>("");
    const [employeeList, setEmployeeList] = useState<EmployeeModel[]>();


    
    
    async function getEmployeeBySearch(input : string) {
        try {
            const employee = await generalService.getEmployeesByString(input);
            console.log("employees " + employee.toString() );
            setEmployeeList(employee);
        } catch (error) {
            console.log("Failed to retrive employee from database");
            
        } 
    }
  
        async function passiveSearch (input : string){
    
          const employeeBySearch = await generalService.passiveSearch(input);
          setEmployeeList(employeeBySearch);
        }
     

   
        async function getAllEmployee() {
            try {
                const allEmployee = await generalService.getAllEmployees();
                setEmployeeList(allEmployee);
    
            } catch (error) {
                console.log("Failed to retrive employees from database");
            }
            
    }
   
    function handleInput (e: ChangeEvent<HTMLInputElement>)  {
        const newSearchWord = String(e.target.value);
        setSearchWord(String(e.target.value));
        if(newSearchWord === "" || newSearchWord.length === 1) {
            getAllEmployee();
        }
        else {
            passiveSearch(newSearchWord);
        }
    }
    function handleSearch () {
        getEmployeeBySearch(searchWord)
    }
  
    return (
        <div className="SearchBar">
			
            <input className="input" id="input" type="text" placeholder="Search..." value={searchWord}
            onChange={(e) => {
                handleInput(e);
            }}/>
             <button  onClick={() => {passiveSearch(searchWord)}}>🔍</button>
            

            <ul id="employeeList">
             {
             employeeList?.map((e) => (
                 <li key={e.id}>
                 <EmployeeCard employee={e} input={searchWord}/>
                 </li>
                 
                 ))
                
                }

                </ul>
           
        </div>
    );
}

export default SearchBar;
