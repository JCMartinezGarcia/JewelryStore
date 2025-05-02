import { useEffect, useState } from "react";
import BreadCum from "../../components/BreadCum";
import { Card, CardBody } from "@heroui/react";
import UpdateLineForm from "../../components/Lines/UpdateLineForm";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductLinesUpdate = () => {

    const { id } = useParams();
    const [line, setLine] = useState(null);

    useEffect(() => {
        fetchLineById(id);
    }, [id]);

    const handleError = (message, error) => {
        console.error(`${message}:`, error.message);
    }

    const fetchLineById = async (LineId) => {
        try {
            const response = await axios.get(`products/lines/fetchbyid/${LineId}`);
            const { id, line } = response.data;
            setLine({ id, lineName: line });
        } catch (error) {
            handleError('Error fetching line by ID', error);
        }
    }

    return (
        <div>
            <BreadCum />
            <div className="my-4">
                <h1 className="font-bold text-xl">Formulario de Actualización de Lineas de Producto</h1>
            </div>
            <Card>
                <CardBody>
                    {line && <UpdateLineForm line={line} />}
                </CardBody>
            </Card>
        </div>
    );
}

export default ProductLinesUpdate;