import BreadCum from "../../components/BreadCum";
import { Card, CardBody, Tooltip, Button } from "@heroui/react";
import { useNavigate, useParams } from "react-router-dom";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import { useEffect, useState } from "react";
import ClientDetails from "../../components/Clients/ClientDetails";
import axios from "axios";

const ClientsDetails = () => {

    const params = useParams();
    const navigate = useNavigate();
    const [client, setClient] = useState(null);


    const handleError = (message, error) => {
        console.error(`${message}:`, error?.message || error);
    }

    const fetchClientById = async (clientId) => {
        try {
            const response = await axios.get(`clients/fetchbyid/${clientId}`);
            setClient(response.data[0]);
        } catch (error) {
            handleError('Error fetching client by id', error);
        }
    }

    useEffect(() => {
        fetchClientById(params.id);
    }, []);

    return (
        <div>
            <BreadCum />
            <h1 className="font-bold text-xl my-4">Detalles del Cliente</h1>
            <Tooltip content="Regresar">
                <Button isIconOnly
                    className=""
                    color=""
                    variant="faded"
                    onPress={() => navigate('/clientes')}
                >
                    <FaArrowRightFromBracket />
                </Button>
            </Tooltip>
            <Card>
                <CardBody>
                    <ClientDetails details={client} />
                </CardBody>
            </Card>
        </div>
    );
}

export default ClientsDetails;