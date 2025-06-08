import { Form, Button, Input } from "@heroui/react";
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";
import axios from "axios";

const UpdateClientForm = ({ client }) => {

    const navigate = useNavigate();
    const handleError = (message, error) => {
        console.error(`${message}`, error.message);
    }

    const updateClient = async (id, clientData) => {
        try {
            const { data } = await axios.put(`clients/update/${id}`, clientData);
            if (data.success) {
                Swal.fire({
                    title: '¡Actualización Exitosa!',
                    html: `La información del cliente se actualizó con éxito`,
                    icon: 'success',
                    allowOutsideClick: false
                }).then((result) => {
                    if (result.isConfirmed) navigate('/metales');
                });
            }
        } catch (error) {
            handleError('Error updating metal name', error);
        }
    }

    const handleClientUpdate = (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const names = formData.get('names').trim();
        const firstLastName = formData.get('firstLastName').trim();
        const secondLastName = formData.get('secondLastName').trim();
        const email = formData.get('email').trim();
        const mobileNumber = formData.get('mobileNumber').trim();
        const address = formData.get('address').trim();

        if (!names) {
            Swal.fire({
                title: "Error",
                text: "El campo 'Nombres' no puede estar vacío.",
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
                text: "El campo 'Celular' no puede estar vacío.",
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
            address
        }

        updateClient(client?.id, clientData);
    }


    return (
        <div>
            <Form onSubmit={handleClientUpdate}>
                <Input
                    isRequired
                    errorMessage="Esta campo es requerido."
                    label="Nombres"
                    labelPlacement="outside"
                    name="names"
                    type="text"
                    defaultValue={client?.names || ""}
                />
                <Input
                    isRequired
                    errorMessage="Esta campo es requerido."
                    label="Apellido Parterno"
                    labelPlacement="outside"
                    name="firstLastName"
                    type="text"
                    defaultValue={client?.firstLastName || ""}
                />
                <Input
                    isRequired
                    errorMessage="Esta campo es requerido."
                    label="Apellido Materno"
                    labelPlacement="outside"
                    name="secondLastName"
                    type="text"
                    defaultValue={client?.secondLastName || ""}
                />
                <Input
                    isRequired
                    errorMessage="Esta campo es requerido."
                    label="Correo Electrónico"
                    labelPlacement="outside"
                    name="email"
                    type="email"
                    defaultValue={client?.email || ""}
                />
                <Input
                    isRequired
                    errorMessage="Esta campo es requerido."
                    label="Celular"
                    labelPlacement="outside"
                    name="mobileNumber"
                    type="text"
                    defaultValue={client?.mobileNumber || ""}
                />
                <Input
                    isRequired
                    errorMessage="Esta campo es requerido."
                    label="Dirección"
                    labelPlacement="outside"
                    name="address"
                    type="text"
                    defaultValue={client?.address || ""}
                />
                <div className="flex">
                    <Button color="default" onPress={() => navigate('/clientes')}>
                        Cancelar
                    </Button>
                    <Button color="primary" type="submit" disabled={!client?.id}>
                        Actualizar
                    </Button>
                </div>
            </Form>
        </div>
    );
}

export default UpdateClientForm;