import { Card, CardBody, Image } from "@nextui-org/react";
const UserDetails = ({ details }) => {
    console.log(details);
    const nullField = '-----------';
    const profileImage = (details.UserProfiles?.image) ? details.UserProfiles?.image : "https://nextui.org/images/album-cover.png";
    return (
        <div>
            <Card>
                <CardBody>
                    <div className="grid grid-cols-2">
                        <div className="flex justify-start">
                            <Image
                                isBlurred
                                alt="NextUI Album Cover"
                                className="m-5"
                                src={profileImage}
                                width={240}
                            />
                        </div>
                        <div className="flex justify-start">
                            <div className="m-4">
                                <span className="flex flex-row mb-2">
                                    <label><b>Usuario:</b></label>
                                    <p className="ml-2">{(details.UserProfiles?.userName) ? details.userProfiles?.userName : nullField}</p>
                                </span>
                                <span className="flex flex-row mb-2">
                                    <label><b>Rol:</b></label>
                                    <p className="ml-2">{(details.isAdmin) ? "Administrador" : "Vendedor"}</p>
                                </span>
                                <span className="flex flex-row mb-2">
                                    <label><b>Email:</b></label>
                                    <p className="ml-2">{details.email}</p>
                                </span>
                                <span className="flex flex-row mb-2">
                                    <label><b>Nombre:</b></label>
                                    <p className="ml-2">{(details.UserProfiles?.name) ? details.UserProfiles?.name : nullField}</p>
                                </span>
                                <span className="flex flex-row mb-2">
                                    <label><b>Apellido Paterno:</b></label>
                                    <p className="ml-2">{(details.UserProfiles?.firstLastName) ? details.UserProfiles?.firstLastName : nullField}</p>
                                </span>
                                <span className="flex flex-row mb-2">
                                    <label><b>Apellido Materno:</b></label>
                                    <p className="ml-2">{(details.UserProfiles?.secondLastName) ? details.UserProfiles?.secondLastName : nullField}</p>
                                </span>
                                <span className="flex flex-row mb-2">
                                    <label><b>Dirección:</b></label>
                                    <p className="ml-2">{(details.UserProfiles?.address) ? details.UserProfiles?.address : nullField}</p>
                                </span>
                                <span className="flex flex-row mb-2">
                                    <label><b>Fecha de registro:</b></label>
                                    <p className="ml-2">{details.createdAt}</p>
                                </span>
                            </div>
                        </div>
                    </div>

                </CardBody>
            </Card>
        </div>
    );

}

export default UserDetails;