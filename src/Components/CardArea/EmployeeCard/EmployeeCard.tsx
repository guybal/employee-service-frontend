import { useEffect, useState } from "react";
import EmployeeModel from "../../../Models/EmployeeModel";
import "../../../Styles/EmployeeCardStyle/EmployeeCardStyle.css";
import EmployeeImage from "../../ImageArea/EmployeeImage/EmployeeImage";

interface EmployeeModelProps{
    employee : EmployeeModel;
    input : string;
}

function EmployeeCard( props : EmployeeModelProps): JSX.Element {
    
    const [highlightedPart , setHighlightedPart] = useState<string>("");
    const [firstHalfJob , setFirstHalfJob] = useState<string>("");
    const [secondHalfJob , setSecondHalfJob] = useState<string>("");
    const [firstHalfName , setFirstHalfName] = useState<string>("");
    const [secondHalfName , setSecondHalfName] = useState<string>("");

    const [jobContains , setJobContains] = useState<boolean>(false);
    const [nameContains , setNameContains] = useState<boolean>(false);
    const [spaceJob , setSpaceJob] = useState<boolean>(false);
    const [spaceName , setSpaceName] = useState<boolean>(false);
    const [spaceJobBefore , setSpaceJobBefore] = useState<boolean>(false);
    const [spaceNameBefore , setSpaceNameBefore] = useState<boolean>(false);

    

    function isJobContains (input : string) :boolean {
        if(input.length > 1) {
            let lowerCaseJob = props.employee.job.toLowerCase();
            let lowerCaseInput = input.toLowerCase();
            if (lowerCaseJob.includes(lowerCaseInput) && lowerCaseInput !== "") {
                let markIndex = lowerCaseJob.indexOf(lowerCaseInput);
                console.log(markIndex);
                if (lowerCaseJob.charAt(markIndex +input.length) === " ") {
                    setSpaceJob(true);
                }
                else {
                    setSpaceJob(false);
                }
                if (markIndex > 1 && lowerCaseJob.charAt(markIndex -1) === " " ) {
                    setSpaceJobBefore(true);
                }
                else {
                    setSpaceJobBefore(false);
                }
                setFirstHalfJob(props.employee.job.substring(0 , markIndex));
                setHighlightedPart(props.employee.job.substring(markIndex , markIndex + input.length));
                console.log(props.employee.job.substring(markIndex , markIndex + input.length));
                setSecondHalfJob(props.employee.job.substring(markIndex + input.length, props.employee.job.length));
                
                
                
                return (true);
            }
            
           
                 return (false);
        }
        else return (false);
        
    }
    function isNameContains (input : string) :boolean {
            if(input.length > 1) {
                let lowerCaseName = props.employee.name.toLowerCase();
                let lowerCaseInput = input.toLowerCase();
                if (lowerCaseName.includes(lowerCaseInput) && lowerCaseInput !== "") {
                    let markIndex = lowerCaseName.indexOf(lowerCaseInput);
                    if (lowerCaseName.charAt(markIndex +input.length) === " ") {
                        setSpaceName(true);
                    }
                    else {
                        setSpaceName(false);
                    }
                    if (markIndex > 0 && lowerCaseName.charAt(markIndex -1) === " " ) {
                        setSpaceNameBefore(true);
                    }
                    else {
                        setSpaceNameBefore(false);
                    }
                    setFirstHalfName(props.employee.name.substring(0 , markIndex));
                    setHighlightedPart(props.employee.name.substring(markIndex , markIndex + input.length));
                    setSecondHalfName(props.employee.name.substring(markIndex + input.length , props.employee.name.length));
                    
                    return (true);
                    
                }    
               
                    return (false);

            }
                else return (false);
            }

            
            useEffect(() => {
           
                    setNameContains(isNameContains(props.input));
                   setJobContains(isJobContains(props.input)); 
            } , [props.input])

            

    return (
        <div>
            
            {!highlightedPart &&
            <div className="EmployeeCard" id="card">
            <aside><EmployeeImage imgName={props.employee.imgName}/></aside>
            <h1 id="name">
            {props.employee.name}
            </h1>
			<h3 id="job">
            {props.employee.job}
            </h3>
                </div>}
          
            {nameContains && jobContains && 
            <div className="EmployeeCard" id="card">
            <aside><EmployeeImage imgName={props.employee.imgName}/></aside>
            <h1 id="name">
            {firstHalfName}{spaceNameBefore && <span>&nbsp;</span>}<mark>{highlightedPart}</mark>{spaceName && <span>&nbsp;</span>}{secondHalfName}
            </h1>
			<h3 id="job">
            {firstHalfJob}{spaceJobBefore && <span>&nbsp;</span>}<mark>{highlightedPart}</mark>{spaceJob && <span>&nbsp;</span>}{secondHalfJob}
            </h3>
                </div>}
            
            {nameContains && !jobContains && 
            <div className="EmployeeCard" id="card">
            <aside><EmployeeImage imgName={props.employee.imgName}/></aside>
            <h1 id="name">
            {firstHalfName}{spaceNameBefore && <span>&nbsp;</span>}<mark>{highlightedPart}</mark>{spaceName && <span>&nbsp;</span>}{secondHalfName}
            </h1>
			<h3 id="job">
            {props.employee.job}
            </h3>
                </div>}
            
          

            {!nameContains && jobContains && 
            <div className="EmployeeCard" id="card">
            <aside><EmployeeImage imgName={props.employee.imgName}/></aside>
            <h1 id="name">
            {props.employee.name}
            </h1>
			<h3 id="job">
            {firstHalfJob}{spaceJobBefore && <span>&nbsp;</span>}<mark>{highlightedPart}</mark>{spaceJob && <span>&nbsp;</span>}{secondHalfJob}
            </h3>
                </div>}


         
      
        </div>
    );
}
    

export default EmployeeCard;






