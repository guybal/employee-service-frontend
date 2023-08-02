import axios from "axios";
import EmployeeModel from "../Models/EmployeeModel";

class GeneralService {

    private url = "http://search-api.apps.svc.cluster.local/api/";
//     private url = "http://search.guy-tkg-tap1-cls.terasky.demo:8080/api/";

    public async getAllEmployees () : Promise<EmployeeModel[]>{
        const response = await axios.get<EmployeeModel[]>( this.url + "getAllEmployee");
        const employeeList = response.data;
        return employeeList;
    }
   
    public async search (input : string) : Promise<EmployeeModel[]>{
        const response = await axios.get<EmployeeModel[]>( this.url + "search?input=" + input);
        const employeeList = response.data;
        return employeeList;
    }

}



const generalService = new GeneralService();

export default generalService;