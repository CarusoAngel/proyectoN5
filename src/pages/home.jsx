import React from "react";

function Home () {
    return (
        <div>
            <h1 className="text-center text-primary">¡Bienvenido a la aplicación!</h1>
            <p className="text-center">Verificando que Bootstrap está funcionando</p>
            <div className="d-flex justify-content-center">
                <button className="btn btn-success">Bootstrap test</button>
            </div>
        </div>
    );
}

export default Home;