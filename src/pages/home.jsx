import React from "react";
import { Link } from "react-router-dom";

function Home () {
    return (
        <div className="container mt-5 text-center">
            <h1 className="text-primary">¡Bienvenido a la Aplicación de Lanzamientos Espaciales!</h1>
            <p>Descubre los Próximos lanzamientos de SpaceX con información actualizada</p>

            <Link to="/data" className="btn btn-primary mt-3">
                Explorar Próximos Lanzamientos
            </Link>
        </div>
    );
}

export default Home;