import { Form, Button, Input, Checkbox } from "@heroui/react";
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";
import axios from "axios";

const RegisterClientForm = () => {

    const navigate = useNavigate();
    const handleError = (message, error) => {
        console.error(`${message}`, error.message);
    }

    const registerClient = async (clientData) => {
        try {
            const response = await axios.post(`clients/register`, clientData);
            const { data } = response;
            if (response.status === 201) {
                Swal.fire({
                    title: 'Cliente registrado con éxito',
                    html: ``,
                    icon: 'success',
                    allowOutsideClick: false
                }).then((result) => {
                    if (result.isConfirmed) navigate('/clientes');
                });
            }
        } catch (error) {
            handleError('Error registering new client', error);
        }
    }

    const handleClientRegister = (e) => {

        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const names = formData.get('nombres').trim();
        const firstLastName = formData.get('apellido-materno').trim();
        const secondLastName = formData.get('apellido-paterno').trim();
        const email = formData.get('correo').trim();
        const mobileNumber = formData.get('movil').trim();
        const address = formData.get('direccion').trim();
        const isWholeSale = (formData.get('mayorista') == null) ? false : true;

        if (!names) {
            Swal.fire({
                title: "Error",
                text: "El campo 'Nombre' no puede estar vacío.",
                icon: "warning",
                confirmButtonText: "Cerrar",
            });
            return;
        }
        if (!firstLastName) {
            Swal.fire({
                title: "Error",
                text: "El campo 'Apellido Materno' no puede estar vacío.",
                icon: "warning",
                confirmButtonText: "Cerrar",
            });
            return;
        }
        if (!secondLastName) {
            Swal.fire({
                title: "Error",
                text: "El campo 'Apellido Paterno' no puede estar vacío.",
                icon: "warning",
                confirmButtonText: "Cerrar",
            });
            return;
        }
        if (!email) {
            Swal.fire({
                title: "Error",
                text: "El campo 'Correo Electrónico' no puede estar vacío.",
                icon: "warning",
                confirmButtonText: "Cerrar",
            });
            return;
        }
        if (!mobileNumber) {
            Swal.fire({
                title: "Error",
                text: "El campo 'Teléfono Móvil' no puede estar vacío.",
                icon: "warning",
                confirmButtonText: "Cerrar",
            });
            return;
        }
        if (!address) {
            Swal.fire({
                title: "Error",
                text: "El campo 'Dirección' no puede estar vacío.",
                icon: "warning",
                confirmButtonText: "Cerrar",
            });
            return;
        }

        const clientData = {
            names,
            firstLastName,
            secondLastName,
            email,
            mobileNumber,
            address,
            isWholeSale
        };

        registerClient(clientData);
    }


    return (
        <div>
            <Form onSubmit={handleClientRegister}>
                <Input
                    isRequired
                    errorMessage="Esta campo es requerido."
                    label="Nombre(s)"
                    labelPlacement="outside"
                    name="nombres"
                    type="text"
                    defaultValue={""}
                />
                <Input
                    isRequired
                    errorMessage="Esta campo es requerido."
                    label="Apellido Materno"
                    labelPlacement="outside"
                    name="apellido-materno"
                    type="text"
                    defaultValue={""}
                />
                <Input
                    isRequired
                    errorMessage="Esta campo es requerido."
                    label="Apellido Paterno"
                    labelPlacement="outside"
                    name="apellido-paterno"
                    type="text"
                    defaultValue={""}
                />
                <Input
                    isRequired
                    errorMessage="Esta campo es requerido."
                    label="Correo Electrónico"
                    labelPlacement="outside"
                    name="correo"
                    type="email"
                    defaultValue={""}
                />
                <Input
                    isRequired
                    errorMessage="Esta campo es requerido."
                    label="Teléfono Móvil"
                    labelPlacement="outside"
                    name="movil"
                    type="text"
                    defaultValue={""}
                />
                <Input
                    isRequired
                    errorMessage="Esta campo es requerido."
                    label="Dirección"
                    labelPlacement="outside"
                    name="direccion"
                    type="text"
                    defaultValue={""}
                />
                <Checkbox className="my-4" name="mayorista">Mayorista</Checkbox>
                <Button color="primary" type="submit">
                    Registrar
                </Button>
            </Form>
        </div>
    );
}

export default RegisterClientForm;