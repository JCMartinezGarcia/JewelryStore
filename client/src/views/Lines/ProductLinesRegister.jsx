import BreadCum from "../../components/BreadCum";
import RegisterLineForm from "../../components/Lines/RegisterLineForm";
import { Card, CardBody } from "@heroui/react";

const ProductLinesRegister = () => {
    return (
        <div>
            <BreadCum />
            <div className="my-4">
                <h1><strong>Formulario de Registro de Linas de Producto</strong></h1>
            </div>
            <Card>
                <CardBody>
                    <RegisterLineForm />
                </CardBody>
            </Card>
        </div>
    );
}

export default ProductLinesRegister;