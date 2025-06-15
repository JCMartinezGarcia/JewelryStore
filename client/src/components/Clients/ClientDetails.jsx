import { Image } from "@heroui/react";

const clientDetails = ({ details }) => {
    const profileImage = (details?.image) ? details?.image : "https://nextui.org/images/album-cover.png";
    return (
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
                        <label><b>Nombres:</b></label>
                        <p className="ml-2">{(details?.names)}</p>
                    </span>
                    <span className="flex flex-row mb-2">
                        <label><b>Apellido Materno:</b></label>
                        <p className="ml-2">{(details?.firstLastName)}</p>
                    </span>
                    <span className="flex flex-row mb-2">
                        <label><b>Apellido Paterno:</b></label>
                        <p className="ml-2">{details?.secondLastName}</p>
                    </span>
                    <span className="flex flex-row mb-2">
                        <label><b>Correo Electrónico:</b></label>
                        <p className="ml-2">{details?.email}</p>
                    </span>
                    <span className="flex flex-row mb-2">
                        <label><b>Telefono Móvil:</b></label>
                        <p className="ml-2">{details?.mobileNumber}</p>
                    </span>
                    <span className="flex flex-row mb-2">
                        <label><b>Dirección:</b></label>
                        <p className="ml-2">{details?.address}</p>
                    </span>

                </div>
            </div>
        </div>
    );
}

export default clientDetails;