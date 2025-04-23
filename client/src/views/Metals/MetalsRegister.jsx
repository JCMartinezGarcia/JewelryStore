import BreadCum from "../../components/BreadCum";
import RegisterMetalForm from "../../components/Metals/RegisterMetalForm";
import { Card, CardBody } from "@heroui/react";

const MetalsRegister = () => {
    return (
        <div>
            <BreadCum />
            <div className="my-4">
                <h1><strong>Formulario de Registro de Metales</strong></h1>
            </div>
            <Card>
                <CardBody>
                    <RegisterMetalForm />
                </CardBody>
            </Card>
        </div>
    );
}

export default MetalsRegister;