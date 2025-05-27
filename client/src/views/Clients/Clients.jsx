import { Button } from "@heroui/react";
import BreadCum from "../../components/BreadCum";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import ClientsTable from "../../components/Clients/ClientsTable";
import axios from "axios";

const Clients = () => {
    const navigate = useNavigate();
    const [clients, setClients] = useState([]);

    useEffect(() => {
        fetchClients();
    }, []);

    const handleError = (message, error) => {
        console.error(`${message}:`, error.message);
    }

    const fetchClients = async () => {
        try {
            const response = await axios.get('/clients/fetch');
            const { success, clients } = response.data;
            if (success) {
                setClients(clients);
            }
        } catch (error) {
            handleError('Error fetching clients', error);
        }
    }

    return (
        <div>
            <BreadCum />
            <div className="flex justify-between my-4">
                <h1 className="font-bold text-xl">Listado de Clientes</h1>
                <Button
                    color="success"
                    onPress={() => { navigate('/clientes/registrar') }}>
                    Registrar
                </Button>
            </div>
            <ClientsTable clients={clients} fetchClients={fetchClients} />
        </div>
    );
}

export default Clients;