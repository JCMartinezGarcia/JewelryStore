import { useEffect, useState } from "react";
import BreadCum from "../../components/BreadCum";
import { Card, CardBody } from "@heroui/react";
import { useParams } from "react-router-dom";
import axios from "axios";
import UpdateClientForm from "../../components/Clients/UpdateClientForm";

const ClientsUpdate = () => {

    const { id } = useParams();
    const [client, setClient] = useState(null);



    const handleError = (message, error) => {
        console.error(`${message}:`, error.message);
    }

    useEffect(() => {
        fetchClientById(id);
    }, [id]);

    const fetchClientById = async (clientId) => {
        try {
            const response = await axios.get(`/clients/fetchbyid/${clientId}`);
            setClient(response.data[0]);
            console.log(response.data[0]);
        } catch (error) {
            handleError('Error fetching client by ID', error);
        }
    }

    return (
        <div>
            <BreadCum />
            <div className="my-4">
                <h1 className="font-bold text-xl">Formulario de Actualización de Cliente</h1>
            </div>
            <Card>
                <CardBody>
                    {client && <UpdateClientForm client={client} />}
                </CardBody>
            </Card>
        </div>
    );
}

export default ClientsUpdate;