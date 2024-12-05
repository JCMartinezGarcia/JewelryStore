const net = require('net');

function findFreePort(startPort, endPort) {
    return new Promise((resolve, reject) => {
        const port = startPort;
        const server = net.createServer();

        server.listen(port, () => {
            server.close(() => resolve(port));
        });

        server.on('error', (err) => {
            if (port < endPort) {
                findFreePort(port + 1, endPort).then(resolve).catch(reject);
            } else {
                reject(new Error('No hay puertos libres en el rango.'));
            }
        });
    });
}

findFreePort(4000, 5000).then(port => {
    console.log(`Puerto libre encontrado: ${port}`);
}).catch(err => {
    console.error(err);
});
