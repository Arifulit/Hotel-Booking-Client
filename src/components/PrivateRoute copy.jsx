
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate } from "react-router-dom";
import Loading from "./Loading";


// eslint-disable-next-line react/prop-types
const PrivateRoute = ({children}) => {

    // eslint-disable-next-line no-unused-vars
    const {user,loading} = useContext(AuthContext)
    // console.log("private route user",user)
    if(loading){
        return <Loading></Loading>
    }
    if(!user){
        return <Navigate to="/login"></Navigate>
    }
    return children
};

export default PrivateRoute;
