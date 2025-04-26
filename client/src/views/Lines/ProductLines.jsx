import { Card, CardBody, Button } from "@heroui/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import BreadCum from "../../components/BreadCum";
import LinesTable from "../../components/Lines/LinesTable";

const ProductLines = () => {
    const navigate = useNavigate();
    const [lines, setLines] = useState([]);

    useEffect(() => {
        fetchLines();
    }, []);

    const handleError = (message, error) => {
        console.error(`${message}:`, error.message);
    }

    const fetchLines = async () => {
        try {
            const response = await axios.get('products/lines/list');
            setLines(response.data);
        } catch (error) {
            handleError('Error obteniendo lineas de productos', error);
        }
    };

    return (
        <div>
            <BreadCum />
            <div className=" flex justify-between my-4">
                <h1 className="font-bold text-xl">Listado de Lineas de Producto</h1>
                <Button
                    color="success"
                    onPress={() => { navigate('/lineas/registrar') }}>
                    Registrar
                </Button >
            </div>
            <Card>
                <CardBody>
                    <LinesTable lines={lines} fetchLines={fetchLines} />
                </CardBody>
            </Card>
        </div>
    );

}

export default ProductLines;