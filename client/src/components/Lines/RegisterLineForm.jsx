import { Form, Button, Input } from "@heroui/react";
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";
import axios from "axios";

const RegisterLineForm = () => {

    const navigate = useNavigate();
    const handleError = (message, error) => {
        console.error(`${message}`, error.message);
    }

    const registerLine = async (LineName) => {
        try {
            const { data } = await axios.post(`products/lines/register`, { line: LineName });
            if (data.success) {
                Swal.fire({
                    title: '¡Registro Exitoso!',
                    html: ``,
                    icon: 'success',
                    allowOutsideClick: false
                }).then((result) => {
                    if (result.isConfirmed) navigate('/lineas');
                });
            }
        } catch (error) {
            handleError('Error registrando linea de producto', error);
        }
    }

    const handleLineRegister = (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const lineName = formData.get('line');

        if (!lineName.trim()) {
            Swal.fire({
                title: "Error",
                text: "El campo 'Linea de Producto' no puede estar vacío.",
                icon: "warning",
                confirmButtonText: "Cerrar",
            });
            return;
        }

        registerLine(lineName);
    }


    return (
        <div>
            <Form onSubmit={handleLineRegister}>
                <Input
                    isRequired
                    errorMessage="Esta campo es requerido."
                    label="Metal"
                    labelPlacement="outside"
                    name="line"
                    type="text"
                    defaultValue={""}
                />
                <Button color="primary" type="submit">
                    Registrar
                </Button>
            </Form>
        </div>
    );
}

export default RegisterLineForm;