import { Form, Button, Input } from "@heroui/react";
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";
import axios from "axios";

const UpdateMetalForm = ({ metal }) => {

    const navigate = useNavigate();
    const handleError = (message, error) => {
        console.error(`${message}`, error.message);
    }

    const updateMetal = async (id, metalName) => {
        try {
            const { data } = await axios.put(`metals/edit/${id}`, { metal: metalName });
            if (data.success) {
                Swal.fire({
                    title: '¡Actualización Exitosa!',
                    html: `El nombre del metal se actualizó con éxito`,
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

    const handleMetalUpdate = (e) => {
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

        updateMetal(metal?.id, metalName);
    }


    return (
        <div>
            <Form onSubmit={handleMetalUpdate}>
                <Input
                    isRequired
                    errorMessage="Esta campo es requerido."
                    label="Metal"
                    labelPlacement="outside"
                    name="metal"
                    type="text"
                    defaultValue={metal?.name || ""}
                />
                <Button color="primary" type="submit" disabled={!metal?.id}>
                    Actualizar
                </Button>
            </Form>
        </div>
    );
}

export default UpdateMetalForm;