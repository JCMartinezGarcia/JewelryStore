import { Form, Button, Input } from "@heroui/react";
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";
import axios from "axios";

const UpdateLineForm = ({ line }) => {
    const navigate = useNavigate();
    const handleError = (message, error) => {
        console.error(`${message}`, error.message);
    }

    const updateLine = async (id, line) => {
        try {
            const { data } = await axios.put(`products/lines/update/${id}`, { line });
            if (data.success) {
                Swal.fire({
                    title: '¡Actualización Exitosa!',
                    html: `El nombre de la linea del producto se actualizó con éxito`,
                    icon: 'success',
                    allowOutsideClick: false
                }).then((result) => {
                    if (result.isConfirmed) navigate('/lineas');
                });
            }
        } catch (error) {
            handleError('Error actualizando linea del producto', error);
        }
    }

    const handleLineUpdate = (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const lineName = formData.get('linea');

        if (!lineName.trim()) {
            Swal.fire({
                title: "Error",
                text: "El campo 'Linea de Producto' no puede estar vacío.",
                icon: "warning",
                confirmButtonText: "Cerrar",
            });
            return;
        }

        updateLine(line?.id, lineName);
    }


    return (
        <div>
            <Form onSubmit={handleLineUpdate}>
                <Input
                    isRequired
                    errorMessage="Esta campo es requerido."
                    label="Linea de Producto"
                    labelPlacement="outside"
                    name="linea"
                    type="text"
                    defaultValue={line?.lineName || ""}
                />
                <Button color="primary" type="submit" disabled={!line?.id}>
                    Actualizar
                </Button>
            </Form>
        </div>
    );
}

export default UpdateLineForm;