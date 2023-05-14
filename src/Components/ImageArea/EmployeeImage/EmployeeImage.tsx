import "../../../Styles/AvatarImageStyle/EmployeeImageStyle.css";
import female1 from "../../../Utils/EmployeeImages/female-1.jpg"
import female2 from "../../../Utils/EmployeeImages/female-2.jpg"
import female3 from "../../../Utils/EmployeeImages/female-3.jpg"
import female4 from "../../../Utils/EmployeeImages/female-4.jpg"
import female5 from "../../../Utils/EmployeeImages/female-5.jpg"
import female6 from "../../../Utils/EmployeeImages/female-6.jpg"
import female7 from "../../../Utils/EmployeeImages/female-7.jpg"
import female8 from "../../../Utils/EmployeeImages/female-8.jpg"
import male1 from "../../../Utils/EmployeeImages/male-1.jpg"
import male2 from "../../../Utils/EmployeeImages/male-2.jpg"
import male3 from "../../../Utils/EmployeeImages/male-3.jpg"
import male4 from "../../../Utils/EmployeeImages/male-4.jpg"
import male5 from "../../../Utils/EmployeeImages/male-5.jpg"
import male6 from "../../../Utils/EmployeeImages/male-6.jpg"

interface EmployeeImageProps {
    imgName: string;
  }

function EmployeeImage({ imgName }: EmployeeImageProps): JSX.Element {
   

    return (
        <div className="EmployeeImage">
            {imgName === "female-1" && <>
			<img src={female1} alt="" />
            </>}
            {imgName === "female-2" && <>
			<img src={female2} alt="" />
            </>}
            {imgName === "female-3" && <>
			<img src={female3} alt="" />
            </>}
            {imgName === "female-4" && <>
			<img src={female4} alt="" />
            </>}
            {imgName === "female-5" && <>
			<img src={female5} alt="" />
            </>}
            {imgName === "female-6" && <>
			<img src={female6} alt="" />
            </>}
            {imgName === "female-7" && <>
			<img src={female7} alt="" />
            </>}
            {imgName === "female-8" && <>
			<img src={female8} alt="" />
            </>}
            {imgName === "male-1" && <>
			<img src={male1} alt="" />
            </>}
            {imgName === "male-2" && <>
			<img src={male2} alt="" />
            </>}
            {imgName === "male-3" && <>
			<img src={male3} alt="" />
            </>}
            {imgName === "male-4" && <>
			<img src={male4} alt="" />
            </>}
            {imgName === "male-5" && <>
			<img src={male5} alt="" />
            </>}
            {imgName === "male-6" && <>
			<img src={male6} alt="" />
            </>}
          

        </div>
    );
}

export default EmployeeImage;
