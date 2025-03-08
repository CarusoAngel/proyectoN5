import React, { useEffect, useState } from "react";

function DataPage () {

    console.log("DataPage se está renderizando..");

    const [launches, setLaunches] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect (() => {
        fetch('https://api.spacexdata.com/v4/launches/upcoming')
        .then((response) => {
            if (!response.ok) {
                throw new Error(`Error HTTP:${response.status}`);
            }
            return response.json()
        })
        .then((data) => {
            setLaunches(data.slice(0, 10));
            setLoading(false);
        })
        .catch((error) => {
            console.error('Error al obtener los datos:', error);
            setError(error.message);
            setLoading(false);
        })
    }, []);

    return (
        <div className="container mt-5">
            <h1 className="text-center text-primary">Próximos lanzamientos de SpaceX</h1>

            {error && <div className="alert alert-danger text-center">{error}</div>}

            {loading ? (
                <p className="text-center">Cargando lanzamientos...</p>
            ) : (
                <div className="row">
                    {launches.map((launch) => (
                        <div key={launch.id} className="col-md-6 mb-4">
                            <div className="card p-3 shadow launch-card">
                                <h5 className="fw-bold">{launch.name}</h5>

                                <p>
                                    <strong>Fecha:</strong> {new Date(launch.date_utc).toLocaleDateString()}
                                </p>

                                <p>
                                    <strong>Detalles:</strong> {launch.details ? launch.details : "Sin información"}
                                </p>

                                <div className="text-center">
                                    {launch.links.patch.small ? (
                                        <img src={launch.links.patch.small} alt={`Misión ${launch.name}`} className="img-fluid launch-img" />
                                ) : (
                                    <img src="/assets/default-mission.png" alt="Misión no disponible" className="img-fluid launch-img" />
                                )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
             )}
         </div>    
    );
}

export default DataPage;