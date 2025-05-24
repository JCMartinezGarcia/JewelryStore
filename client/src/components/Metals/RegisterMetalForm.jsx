import { Form, Button, Input } from "@heroui/react";
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";
import axios from "axios";

const RegisterMetalForm = () => {

    const navigate = useNavigate();
    const handleError = (message, error) => {
        console.error(`${message}`, error.message);
    }

    const registerMetal = async (metalName) => {
        try {
            const response = await axios.post(`metals/register`, { metal: metalName });
            const { data } = response;
            if (data.success) {
                Swal.fire({
                    title: data.message,
                    html: ``,
                    icon: 'success',
                    allowOutsideClick: false
                }).then((result) => {
                    if (result.isConfirmed) navigate('/metales');
                });
            }
        } catch (error) {
            handleError('Error registering new metal', error);
        }
    }

    const handleMetalRegister = (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const metalName = formData.get('metal');

        if (!metalName.trim()) {
            Swal.fire({
                title: "Error",
                text: "El campo 'Metal' no puede estar vacío.",
                icon: "warning",
                confirmButtonText: "Cerrar",
            });
            return;
        }

        registerMetal(metalName);
    }


    return (
        <div>
            <Form onSubmit={handleMetalRegister}>
                <Input
                    isRequired
                    errorMessage="Esta campo es requerido."
                    label="Metal"
                    labelPlacement="outside"
                    name="metal"
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

export default RegisterMetalForm;