import { useEffect, useState } from "react";
import BreadCum from "../../components/BreadCum";
import { Button } from "@heroui/react";
import MetalsTable from "../../components/Metals/MetalsTable";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const MetalsList = () => {

    useEffect(() => {
        getMetalsList();
    }, []);

    const [metales, setMetales] = useState([]);
    const navigate = useNavigate();

    const handleError = (message, error) => {
        console.error(`${message}:`, error.message);
    }

    const getMetalsList = async () => {
        try {
            const metales = await axios.get('metals/list');
            setMetales(metales.data);
        } catch (error) {
            handleError('Error listing users', error);
        }
    }


    return (
        <div>
            <BreadCum />
            <br />
            <div className="flex justify-between">
                <h1><strong>Listado de Metales</strong></h1>
                <Button className="" color="success" endContent={''} onPress={() => { navigate('/metales/registrar') }}>
                    Registrar
                </Button >
            </div>
            <br />
            <MetalsTable metales={metales} />
        </div>
    );

}

export default MetalsList;