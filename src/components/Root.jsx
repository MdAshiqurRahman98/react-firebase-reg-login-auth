import { Outlet } from "react-router-dom";
import Nav_Bar from "./Nav_Bar";

const Root = () => {
    return (
        <div className="max-w-screen-xl mx-auto min-h-screen px-3 md:px-3 lg:px-5 py-3 mb-7">
            <Nav_Bar></Nav_Bar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;