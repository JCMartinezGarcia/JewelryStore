import BreadCum from "../../components/BreadCum";
import UpdateMetalForm from "../../components/Metals/UpdateMetalForm";
import { Form, Card, CardBody, Button, Input } from "@heroui/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const MetalsUpdate = () => {
    const { id } = useParams();
    const [metal, setMetal] = useState(null);
    
    useEffect(() => {
        fetchMetalById(id);
    }, [id]);

    const handleError = (message, error) => {
        console.error(`${message}:`, error.message);
    }

    const fetchMetalById = async (metalId) => {
        try {
            const response = await axios.get(`metals/get/${metalId}`);
            const { id, metal } = response.data;
            setMetal({ id, name: metal });
        } catch (error) {
            handleError('Error fetching metal by ID', error);
        }
    }

    return (
        <div>
            <BreadCum />
            <br />
            <div className="flex justify-between my-4">
                <h1><strong>Actualizar Metal</strong></h1>
            </div>
            <br />
            <Card>
                <CardBody>
                    {metal && <UpdateMetalForm metal={metal} />}
                </CardBody>
            </Card>
        </div>
    );
}

export default MetalsUpdate;