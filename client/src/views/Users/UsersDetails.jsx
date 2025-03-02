import { useEffect, useState } from "react";
import BreadCum from "../../components/BreadCum";
import { useNavigate, useParams } from "react-router-dom";
import UserDetails from "../../components/Users/UserDetails";
import { Button, Tooltip } from "@heroui/react";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import axios from "axios";

const UsersDetails = () => {

    const params = useParams();
    const navigate = useNavigate();
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
            <div className="flex flex-row justify-between">
                <h1 className="text-lg"><b>Detalles de Usuario</b></h1>
                <Tooltip content="Regresar">
                    <Button isIconOnly
                        className=""
                        aria-label="Take a photo"
                        color=""
                        variant="faded"
                        onClick={() => navigate('/usuarios')}
                    >
                        <FaArrowRightFromBracket />
                    </Button>
                </Tooltip>
            </div>
            <br />
            <UserDetails details={details} />
        </div>
    );
}

export default UsersDetails;