import SearchBar from "../../SearchBarArea/SearchBar/SearchBar";

import "../../../Styles/LayoutStyle/layoutStyle.css";
import EmployeeImage from "../../ImageArea/EmployeeImage/EmployeeImage";

function Layout(): JSX.Element {
    return (
        <div className="Layout">
			<div className="text-area">
            <span className="text-header">LOOKING FOR AN EMPLOYEE?</span>
            <p className="text-ordinary">Click on the search bar to learn our suggestions :</p>
            </div>
            <div className="search-bar"><SearchBar /></div>
            <EmployeeImage imgName="male1"/>
        </div>
    );
}

export default Layout;
