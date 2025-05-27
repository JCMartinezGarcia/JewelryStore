import BreadCum from "../../components/BreadCum";
import RegisterClientForm from "../../components/Clients/RegisterClientForm";
import { Card, CardBody } from "@heroui/react";

const ClientsRegister = () => {
    return (
        <div>
            <BreadCum />
            <div className="my-4">
                <h1 className="font-bold text-xl">Formulario de Registro de Clientes</h1>
            </div>
            <Card>
                <CardBody>
                    <RegisterClientForm />
                </CardBody>
            </Card>
        </div>
    );
}

export default ClientsRegister;