import { useEffect, useState } from "react";
import BreadCum from "../../components/BreadCum";
import { useParams } from "react-router-dom";
import UserDetails from "../../components/Users/UserDetails";
import axios from "axios";

const UsersDetails = () => {

    const params = useParams();
    const [details, setDetails] = useState({});

    useEffect(() => {
        getDetails(params.id);
    }, []);

    const handleError = (message, error) => {
        console.error(`${message}:`, error?.message || error);
    }

    const getDetails = async (id) => {
        try {
            const result = await axios.get(`users/details/${id}`);
            setDetails(result.data);
        } catch (error) {
            handleError('Error getting user details', error)
        }
    }
    return (
        <div>
            <BreadCum />
            <br />
            <h1 className="text-lg"><b>Detalles de Usuario</b></h1>
            <br />
            <UserDetails details={details} />
        </div>
    );
}

export default UsersDetails;