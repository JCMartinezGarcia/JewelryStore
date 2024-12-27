import { Input, Button, Card, CardBody, Alert } from "@nextui-org/react";
import { FaCircleInfo } from "react-icons/fa6";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";
import axios from "axios";

const EditForm = ({ user, userId }) => {

    const { register, handleSubmit, setValue, getValues, formState: { errors } } = useForm({
        defaultValues: {
            email: user || ""
        }
    });
    const navigate = useNavigate();
    const [inputValue, setInputValue] = React.useState(getValues("email"));
    const [emailAvailable, setEmailAvailable] = useState(false);
    const [emailError, setEmailError] = useState('');
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        setValue("email", user);
    }, [user]);

    const validateEmail = (inputValue) => inputValue.match(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i);

    const isInvalid = React.useMemo(() => {
        if (inputValue === "") return false;
        return validateEmail(inputValue) ? false : true;
    }, [inputValue]);

    const handleError = (message, error) => {
        console.error(`${message}:`, error?.message || error);
    };

    const verifyEmail = async (email) => {

        try {
            const { data } = await axios.post('users/validate-email', { email });
            const { isAvailable } = data;
            setEmailAvailable(isAvailable);
            setEmailError(isAvailable ? '' : 'Este email ya fue registrado anteriormente.');
            return isAvailable;
        } catch (error) {
            handleError('Error validating email', error);
        }
    }

    const handleEdit = async (email, userId) => {
        if (isEditing) return;
        setIsEditing(true);
        try {
            const { data, status } = await axios.put(`users/edit/${userId}`, { email }, { timeout: 5000 });
            if (status === 202) {
                Swal.fire({
                    title: 'Actualización Exitosa!',
                    html: `Usuario actualizado con éxito.`,
                    icon: 'success',
                    allowOutsideClick: false
                }).then((result) => {
                    if (result.isConfirmed) navigate('/usuarios');
                });
            }
        } catch (error) {
            handleError('Error editing user', error);
        } finally {
            setIsEditing(false);
        }
    }

    return (
        <div className="flex justify-center">
            <Card className="w-1/2">
                <CardBody>
                    {!emailAvailable && emailError && (
                        <div className="w-full flex justify-center bg-red-600 mb-3 rounded">
                            <span className="self-center text-lg mx-2 text-red-200"><FaCircleInfo /></span><label className="text-red-200 my-3">{emailError}</label>
                        </div>
                    )}
                    <form onSubmit={handleSubmit(async (data) => {
                        const { email } = data;
                        const isEmailAvailable = await verifyEmail(email);
                        if (isEmailAvailable) {
                            handleEdit(email, userId);
                        }
                    })}>
                        <Input
                            {...register("email", { required: "Este campo es requerido." })}
                            className="w-full"
                            color={isInvalid ? "danger" : ""}
                            errorMessage="Please enter a valid email"
                            isInvalid={isInvalid}
                            isRequired
                            label="Email"
                            type="email"
                            value={inputValue}
                            variant={isInvalid ? "bordered" : ""}
                            onValueChange={setInputValue}
                        />
                        <p className="mb-2"><small>{errors.email?.message}</small></p>
                        <div className="flex flex-row gap-2">
                            <Button className="w-full" color="primary" type="submit">Editar</Button>
                            <Button className="w-full" type="reset" variant="bordered" onClick={() => navigate('/usuarios')}>Cancelar</Button>
                        </div>
                    </form>
                </CardBody>
            </Card>
        </div >
    );
}

export default EditForm;