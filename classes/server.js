

const serverRun = ( server ) => {
    const puerto = process.env.PORT || 25025;
    server.listen( puerto, ( err ) => {

        if ( err ) throw new Error(err);
    
        console.log(`Servidor corriendo en el puerto ${ puerto }`);
    });
}

module.exports = {
    serverRun
}