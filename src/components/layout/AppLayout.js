import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";

const AppLayout = ({children}) => {
    return (
        <>{children}</>
    );
};

export default AppLayout;