
class EmployeeModel {
    public id : number;
    public name : string;
    public job : string;
    public imgName: string;
    
    
    public constructor (id : number ,name :string , job : string, imgName : string){
        this.id = id;
        this.name = name;
        this.job = job;
        this.imgName = imgName;        
    }
}


export default EmployeeModel;