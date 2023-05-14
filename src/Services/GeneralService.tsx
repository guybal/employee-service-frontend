import axios from "axios";
import EmployeeModel from "../Models/EmployeeModel";

class GeneralService {

    private url = "http://localhost:8080/api/";

    public async getAllEmployees () : Promise<EmployeeModel[]>{
        const response = await axios.get<EmployeeModel[]>( this.url + "getAllEmployee");
        const employeeList = response.data;
        return employeeList;
    }
    public async getEmployeesByString (input : string) : Promise<EmployeeModel[]>{
        const response = await axios.get<EmployeeModel[]>( this.url + "getEmployeesByString?input=" + input);
        const employeeList = response.data;
        return employeeList;
    }
    public async passiveSearch (input : string) : Promise<EmployeeModel[]>{
        const response = await axios.get<EmployeeModel[]>( this.url + "passiveSearch?input=" + input);
        const employeeList = response.data;
        return employeeList;
    }

}



const generalService = new GeneralService();

export default generalService;