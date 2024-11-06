const {
    listProducts,
    registerProduct,
    editProduct,
    deleteProduct,
    searchProducts,
    findProductByPk
} = require('../controllers');

/**
 * Helper function to handle errors.
 * @param {Object} res - Response object.
 * @param {string} message - Error message.
 * @param {Error} error - Error object.
 */
const handleError = (res, message, error) => {
    console.error(`${message}:`, error.message);
    res.status(500).json({ error: message, message: error.message });
};

/**
 * Handles logic to register a new product.
 * @param {Object} req - Request object.
 * @param {Object} res - Response object.
 * @returns {Promise<void>} - Sends the registered product instance in JSON format.
 */
const registerProductHandler = async (req, res) => {
    try {
        const registered = await registerProduct(req.body);
        res.status(201).json(registered);
    } catch (error) {
        handleError(res, 'Error registering product', error);
    }
};

/**
 * Handles logic to obtain a list of all products in the database.
 * @param {Object} req - Request object.
 * @param {Object} res - Response object.
 * @returns {Promise<void>} - Sends the list of products in JSON format.
 */
const listProductsHandler = async (req, res) => {
    try {
        const products = await listProducts();
        res.status(200).json(products);
    } catch (error) {
        handleError(res, 'Error listing products', error);
    }
};

/**
 * Handles logic to edit a product entry in the database.
 * @param {Object} req - Request object.
 * @param {Object} res - Response object.
 * @returns {Promise<void>} - Sends the result of the update operation.
 */
const editProductHandler = async (req, res) => {
    try {
        const { id } = req.params;
        const updated = await editProduct(id, req.body);
        res.status(202).json({ success: updated === 1 });
    } catch (error) {
        handleError(res, 'Error editing product', error);
    }
};

/**
 * Handles logic to delete a product entry from the database.
 * @param {Object} req - Request object.
 * @param {Object} res - Response object.
 * @returns {Promise<void>} - Sends the result of the delete operation.
 */
const deleteProductHandler = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await deleteProduct(id);
        res.status(200).json({ success: deleted === 1 });
    } catch (error) {
        handleError(res, 'Error deleting product', error);
    }
};

/**
 * Handles logic to search for products in the database.
 * @param {Object} req - Request object.
 * @param {Object} res - Response object.
 * @returns {Promise<void>} - Sends a list of products matching the search criteria.
 */
const searchProductsHandler = async (req, res) => {
    try {
        const { searchString } = req.body;
        const products = await searchProducts(searchString);
        res.status(200).json(products);
    } catch (error) {
        handleError(res, 'Error searching products', error);
    }
};

/**
 * Handles logic to find a product by its primary key (PK).
 * @param {Object} req - Request object.
 * @param {Object} res - Response object.
 * @returns {Promise<void>} - Sends the found product in JSON format.
 */
const findProductHandler = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await findProductByPk(id);
        res.status(200).json(product);
    } catch (error) {
        handleError(res, 'Error finding product', error);
    }
};

module.exports = {
    listProductsHandler,
    registerProductHandler,
    editProductHandler,
    deleteProductHandler,
    findProductHandler,
    searchProductsHandler
};
