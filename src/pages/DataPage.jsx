import React, { useEffect, useState } from "react";

function DataPage () {

    console.log("DataPage se está renderizando..");

    const [launches, setLaunches] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect (() => {
        fetch('https://api.spacexdata.com/v4/launches/upcoming')
        .then((response) => response.json())
        .then((data) => {
            setLaunches(data.slice(0, 10));
            setLoading(false);
        })
        .catch((error) => console.error('Error al obtener los datos:', error));
    }, []);

    return (
        <div className="container mt-5">
            <h1 className="text-center text-primary">Próximos lanzamientos de SpaceX</h1>

            {loading ? (
                <p className="text-center">Cargando lanzamientos...</p>
            ) : (
                <div className="row">
                    {launches.map((launch) => (
                        <div key={launch.id} className="col-md-6 mb-4">
                            <div className="card p-3 shadow">
                                <h5 className="fw-bold">{launch.name}</h5>

                                <p>
                                    <strong>Fecha:</strong> {new Date(launch.date_utc).toLocaleDateString()}
                                </p>

                                <p>
                                    <strong>Detalles:</strong> {launch.details ? launch.details : "Sin información"}
                                </p>

                                {launch.links.patch.small && (
                                    <img src={launch.links.patch.small} alt="Misión" className="img-fluid" />
                                )}
                            </div>
                        </div>
                    ))}
                </div>
             )}
         </div>    
    );
}

export default DataPage;