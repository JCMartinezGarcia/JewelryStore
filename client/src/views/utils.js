
export function createSellsDataSets(data) {
    let months = [];
    let totals = [];
    let dataSets = {};
    data.forEach(element => {
        const { month, total } = element;
        switch (month) {
            case 1:
                months.push('Enero');
                totals.push(total);
                break;
            case 2:
                months.push('Febrero');
                totals.push(total);
                break;
            case 3:
                months.push('Marzo');
                totals.push(total);
                break;
            case 4:
                months.push('Abril');
                totals.push(total);
                break;
            case 5:
                months.push('Mayo');
                totals.push(total);
                break;
            case 6:
                months.push('Junio');
                totals.push(total);
                break;
            case 7:
                months.push('Julio');
                totals.push(total);
                break;
            case 8:
                months.push('Agosto');
                totals.push(total);
                break;
            case 9:
                months.push('Septiembre');
                totals.push(total);
                break;
            case 10:
                months.push('Octubre');
                totals.push(total);
                break;
            case 11:
                months.push('Noviembre');
                totals.push(total);
                break;
            case 12:
                months.push('Diciembre');
                totals.push(total);
                break;

            default:
                break;
        }
    });
    dataSets.months = months;
    dataSets.totals = totals;
    return dataSets;

}
