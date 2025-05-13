import { useEffect, useState } from "react";
import BreadCum from "../../components/BreadCum";
import { Button } from "@heroui/react";
import MetalsTable from "../../components/Metals/MetalsTable";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const MetalsList = () => {

    const [metals, setMetales] = useState([]);
    const navigate = useNavigate();

    const handleError = (message, error) => {
        console.error(`${message}:`, error.message);
    }

    const fetchMetals = async () => {
        try {
            const response = await axios.get('metals/fetch');
            setMetales(response.data);
        } catch (error) {
            handleError('Error fectching metals', error);
        }
    }

    useEffect(() => {
        fetchMetals();
    }, []);


    return (
        <div>
            <BreadCum />
            <div className="flex justify-between my-4">
                <h1 className="font-bold text-xl">Listado de Metales</h1>
                <Button
                    color="success"
                    onPress={() => navigate("/metales/registrar")}
                >
                    Registrar
                </Button>
            </div>
            <MetalsTable metals={metals} fetchMetals={fetchMetals} />
        </div>
    );

}

export default MetalsList;