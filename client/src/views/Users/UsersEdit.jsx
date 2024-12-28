import { useEffect, useState } from "react";
import BreadCum from "../../components/BreadCum";
import EditForm from "../../components/Users/EditForm";
import { useParams } from "react-router-dom";
import axios from "axios";
const UsersEdit = () => {
    const params = useParams();
    const [user, setUser] = useState();
    const [userId, setUserId] = useState();

    useEffect(() => {
        getUser(params.id);
        setUserId(params.id);
    }, []);


    const handleError = (message, error) => {
        console.error(`${message}:`, error?.message || error);
    };

    const getUser = async (id) => {
        try {
            const user = await axios.get(`users/find-user/${id}`);
            const { email } = user.data;
            setUser(email);
        } catch (error) {
            handleError('Error finding user for edition', error);
        }
    }
    return (
        <div>
            <BreadCum />
            <EditForm user={user} userId={userId} />
        </div>
    );
}

export default UsersEdit;