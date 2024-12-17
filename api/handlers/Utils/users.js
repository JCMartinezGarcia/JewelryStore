const randomPassword = (length) => {
    if (length <= 0) return 0; // No tiene sentido longitud 0 o negativa
    const min = Math.pow(10, length - 1); // Mínimo número de "length" dígitos
    const max = Math.pow(10, length) - 1; // Máximo número de "length" dígitos
    return Math.floor(Math.random() * (max - min + 1)) + min.toString();
}

module.exports = {
    randomPassword
}
