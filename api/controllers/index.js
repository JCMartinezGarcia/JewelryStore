const {
    listUsers,
    registerUser,
    updateUser,
    deleteUser,
    verifyEmail,
    findUser,
    searchUsers
} = require('./userController');

const {
    getUserProfile,
    registerUserProfile,
    editUserProfile,
    deleteUserProfile
} = require('./userProfileController');

const {
    listClients,
    getClientById,
    registerClient,
    editClient,
    deleteClient,
    searchClients
} = require('./clientsController');

const {
    listMetals,
    registerMetal,
    editMetal,
    getMetalByPk,
    deleteMetal,
    searchMetals
} = require('./metalsController');

const {
    listProductLines,
    registerProductLine,
    editProductLine,
    findProductLineByPk,
    deleteProductLine,
    searchProductLines
} = require('./productLineController');

const {
    listCarats,
    registerCarat,
    editCarat,
    deleteCarat,
    findCaratByPk,
    searchCarats
} = require('./caratsController');

const {
    listProducts,
    registerProduct,
    editProduct,
    deleteProduct,
    searchProducts,
    findProductByPk
} = require('./productsController');

const {
    listSales,
    registerSale,
    editSale,
    findSaleByPk,
    listSalesByYear,
    searchSales,
    cancelSale
} = require('./salesController');

const {
    listSaleDetail,
    registerSaleDetails,
    editSaleDetail
} = require('./saleDetailsController');

const {
    listDebts,
    registerDebt,
    editDebt,
    findDebtDetails,
    deleteDebt,
    searchDebts
} = require('./debtsController');

const {
    listPayments,
    registerPayment,
    editPayment,
    cancelPayment,
    searchPayments,
    getPaymentByPk
} = require('./paymentsController');

module.exports = {
    listUsers,
    registerUser,
    updateUser,
    deleteUser,
    getUserProfile,
    registerUserProfile,
    editUserProfile,
    deleteUserProfile,
    listClients,
    getClientById,
    registerClient,
    editClient,
    deleteClient,
    searchClients,
    listMetals,
    registerMetal,
    editMetal,
    getMetalByPk,
    deleteMetal,
    searchMetals,
    registerCarat,
    listCarats,
    editCarat,
    deleteCarat,
    findCaratByPk,
    searchCarats,
    listProductLines,
    registerProductLine,
    editProductLine,
    findProductLineByPk,
    deleteProductLine,
    searchProductLines,
    listProducts,
    registerProduct,
    editProduct,
    deleteProduct,
    searchProducts,
    findProductByPk,
    listSales,
    listSalesByYear,
    registerSale,
    editSale,
    findSaleByPk,
    searchSales,
    cancelSale,
    listSaleDetail,
    registerSaleDetails,
    editSaleDetail,
    listDebts,
    registerDebt,
    editDebt,
    findDebtDetails,
    deleteDebt,
    searchDebts,
    listPayments,
    registerPayment,
    editPayment,
    cancelPayment,
    searchPayments,
    getPaymentByPk,
    verifyEmail,
    findUser,
    searchUsers
}