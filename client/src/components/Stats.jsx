import { Card, CardBody } from "@heroui/react";
import { FaMoneyBillTrendUp } from "react-icons/fa6";

const Stats = () => {
    const statsData = [
        { id: 1, name: 'ventas', value: 13000.00 },
        { id: 2, name: 'adeudos', value: 10000.00 },
        { id: 3, name: 'pedidos', value: 13 },
        { id: 4, name: 'clientes', value: 60 },
    ];
    return (
        <div className="container">
            <div className="grid grid-flow-col auto-cols-* gap-4">
                {statsData.map((stat) => (
                    <Card key={stat.id}>
                        <CardBody className="flex flex-row gap-4 items-center	">
                            <span className="p-8 bg-yellow-200 rounded-md">
                                <FaMoneyBillTrendUp className="size-5" />
                            </span>
                            <div>
                                <label className="text-xl"><strong>{stat.value}</strong></label>
                                <p className="text-gray-500	text-base">{stat.name}</p>
                            </div>
                        </CardBody>
                    </Card>
                ))}

            </div>
        </div>
    );
}

export default Stats;