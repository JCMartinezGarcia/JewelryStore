import BreadCum from "../../components/BreadCum";
import { Input, Button } from "@nextui-org/react";
import { FaSearch } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";
import UsersTable from "../../components/Users/UsersTable";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

const Users = () => {

    useEffect(() => {
        listUsers();
    }, []);

    const navigate = useNavigate();

    const [users, setUsers] = useState([]);

    const handleError = (message, error) => {
        console.error(`${message}:`, error.message);
    };

    async function listUsers() {
        try {
            const { data } = await axios.get('users/list');
            setUsers(data);
        } catch (error) {
            handleError('Error listing users', error);
        }
    }
    function handleRegisterUser() {
        navigate('/usuarios/registrar');
    }
    return (
        <div>
            <BreadCum />
            <br />
            <h1 className="text-lg"><strong>Lista de Usuarios</strong></h1>
            <br />
            <div className="flex justify-end gap-2">
                <Input
                    className="w-1/4"
                    size="sm"
                    placeholder="Buscar usuarios.."
                    description="Introduce un nombre de usuario para realizar la busqueda"
                    startContent={
                        <FaSearch />

                    }
                    type="email"
                />
                <Button color="success" endContent={<FaUser />} onClick={handleRegisterUser}>
                    Agregar
                </Button >
            </div>
            <br />
            <UsersTable users={users} />
        </div>
    );
}

export default Users;