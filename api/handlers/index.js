const {
    listUserHandler,
    registerUserHandler,
    editUserHandler,
    deleteUserHandler
} = require('./userHandler');

const {
    getUserProfileHandler,
    registerUserProfileHandler,
    editUserProfileHandler,
    deleteUserProfileHandler
} = require('./userProfileHandler');

const {
    listClientsHandler,
    getClientHandler,
    registerClientHandler,
    editClientHandler,
    deleteClientHandler,
    searchClientsHandler
} = require('./clientsHandler');

const {
    listMetalsHandler,
    registerMetalHandler,
    editMetalHandler,
    getMetalHandler,
    deleteMetalHandler,
    searchMetalHandler
} = require('./metalsHandler');

const {
    listProductLinesHandler,
    registerProductLineHandler,
    editProductLineHandler,
    findProductLineHandler,
    deleteProductLineHandler,
    searchProductLineHandler
} = require('./productLinesHandler');

const {
    listCaratsHandler,
    registerCaratHandler,
    editCaratHandler,
    deleteCaratHandler,
    findCaratHandler,
    searchCaratsHandler,
} = require('./caratsHandler');

const {
    listProductsHandler,
    registerProductHandler,
    editProductHandler,
    deleteProductHandler,
    findProductHandler,
    searchProductsHandler
} = require('./productsHandler');

const {
    listSalesHandler,
    registerSaleHandler,
    editSaleHandler,
    findSaleHandler,
    listSalesByYearHandler,
    searchSalesHandler,
    cancelSaleHandler
} = require('./salesHandler');

const {
    listSaleDetailsHandler,
    registerSaleDetailsHandler,
    editSaleDetailsHandler
} = require('./salesDetailsHandler');

const {
    listDebtsHandler,
    registerDebtHandler,
    editDebtHandler,
    detailsDebtHandler,
    deleteDebtHandler,
    searchDebtsHandler
} = require('./debtsHandler');

const {
    listPaymentsHandler,
    registerPaymentHandler,
    editPaymentHandler,
    detailsPaymentHandler,
    cancelPaymentHandler,
    searchPaymentHandler
} = require('./paymentsHandler');


module.exports = {
    listUserHandler,
    registerUserHandler,
    editUserHandler,
    deleteUserHandler,
    getUserProfileHandler,
    registerUserProfileHandler,
    editUserProfileHandler,
    deleteUserProfileHandler,
    listClientsHandler,
    getClientHandler,
    registerClientHandler,
    editClientHandler,
    deleteClientHandler,
    searchClientsHandler,
    listMetalsHandler,
    registerMetalHandler,
    editMetalHandler,
    getMetalHandler,
    deleteMetalHandler,
    searchMetalHandler,
    listCaratsHandler,
    registerCaratHandler,
    editCaratHandler,
    deleteCaratHandler,
    findCaratHandler,
    searchCaratsHandler,
    listProductLinesHandler,
    registerProductLineHandler,
    editProductLineHandler,
    findProductLineHandler,
    deleteProductLineHandler,
    searchProductLineHandler,
    listProductsHandler,
    registerProductHandler,
    editProductHandler,
    deleteProductHandler,
    findProductHandler,
    searchProductsHandler,
    listSalesHandler,
    registerSaleHandler,
    editSaleHandler,
    findSaleHandler,
    listSalesByYearHandler,
    searchSalesHandler,
    cancelSaleHandler,
    registerSaleDetailsHandler,
    listSaleDetailsHandler,
    editSaleDetailsHandler,
    listDebtsHandler,
    registerDebtHandler,
    editDebtHandler,
    detailsDebtHandler,
    deleteDebtHandler,
    searchDebtsHandler,
    listPaymentsHandler,
    registerPaymentHandler,
    editPaymentHandler,
    cancelPaymentHandler,
    searchPaymentHandler,
    detailsPaymentHandler
}

