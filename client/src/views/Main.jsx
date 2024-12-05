import Stats from "../components/Stats";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from 'chart.js/auto'; // Necesario para evitar errores con versiones modernas.
import axios from "axios";
import { useEffect, useState } from "react";
import { createSellsDataSets } from "./utils";

const Main = () => {

    useEffect(() => {
        getSells();
    }, []);

    const [sellLabels, setSellLabels] = useState([]);
    const [sellTotals, setSellTotals] = useState([]);

    const handleError = (message, error) => {
        console.error(`${message}:`, error.message);
    };


    async function getSells() {
        try {
            const sells = await axios.get('sales/listbyyear/2024');
            const sets = createSellsDataSets(sells.data);
            const { months, totals } = sets;
            setSellLabels(months);
            setSellTotals(totals);
        } catch (error) {
            handleError('Error listing sales', error);
        }
    }

    const dataSells = {
        labels: sellLabels,
        datasets: [
            {
                label: 'Ventas',
                data: sellTotals,
                backgroundColor: ['rgba(75, 192, 192, 0.2)'],
                borderColor: ['rgba(75, 192, 192, 1)'],
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            tooltip: {
                enabled: true,
            },
        },
    };

    return (
        <div>
            <Stats />
            {/*charts section*/}
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <Bar data={dataSells} options={options} />
                </div>
                <div>
                    <Bar data={dataSells} options={options} />
                </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <Bar data={dataSells} options={options} />
                </div>
                <div>
                    <Bar data={dataSells} options={options} />
                </div>
            </div>
        </div>
    );
}

export default Main;