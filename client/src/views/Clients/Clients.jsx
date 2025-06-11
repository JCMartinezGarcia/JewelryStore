import { Button, Input } from "@heroui/react";
import BreadCum from "../../components/BreadCum";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import ClientsTable from "../../components/Clients/ClientsTable";
import { FaSearch } from "react-icons/fa";
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

    const handleSearchClient = (e) => {
        searchClients(e.target.value);
    }
    const searchClients = async (searchParameter) => {
        try {
            const response = await axios.post('clients/search', { searchParameter });
            setClients(response.data);
        } catch (error) {
            handleError('Error searching clients', error);
        }
    }

    return (
        <div>
            <BreadCum />
            <h1 className="font-bold text-xl my-4">Listado de Clientes</h1>
            <div className="flex justify-end gap-2">
                <Input
                    onChange={handleSearchClient}
                    className="w-1/4"
                    size="sm"
                    placeholder="Buscar cliente.."
                    description="Introduce un nombre de cliente para realizar la busqueda"
                    startContent={
                        <FaSearch />
                    }
                />
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