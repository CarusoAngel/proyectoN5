import React, { useEffect, useState } from "react";

function DataPage () {

    const [launches, setLaunches] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect (() => {
        fetch('https://api.spacexdata.com/v4/launches/upcoming')
        .then((response) => {
            if (!response.ok) {
                throw new Error(`Error HTTP:${response.status}`);
            }
            return response.json();
        })
        .then((data) => {
            setLaunches(data.slice(0, 8));
            setLoading(false);
        })
        .catch((error) => {
            console.error('Error al obtener los datos:', error);
            setError("No se pudo cargar la información de los lanzamientos.");
            setLoading(false);
        });
    }, []);

    const localImages = [
        "/assets/1.png",
        "/assets/2.png",
        "/assets/3.png",
        "/assets/4.png",
        "/assets/5.png",
        "/assets/6.png",
        "/assets/7.png",
        "/assets/8.png",
    ];

    return (
        <div className="container mt-5">
            <h1 className="text-center text-primary">Próximos lanzamientos de SpaceX</h1>

            {error && <div className="alert alert-danger text-center">{error}</div>}

            {loading ? (
                <p className="text-center">Cargando lanzamientos...</p>
            ) : (
                <div className="row">
                    {launches.map((launch, index) => (
                        <div key={launch.id} className="col-md-6 mb-4">
                            <div className="card p-3 shadow launch-card d-flex flex-column justify-content-between h-100 overflow-hidden">
                                <h5 className="fw-bold">{launch.name}</h5>

                                <p>
                                    <strong>Fecha:</strong> {new Date(launch.date_utc).toLocaleDateString()}
                                </p>

                                <p>
                                    <strong>Detalles:</strong> {launch.details ? launch.details : "Información próximamente..."}
                                </p>

                                <div className="text-center mt-auto">

                                    <img 
                                        src={launch.links.patch.small || (index < localImages.length ? localImages[index] : "/assets/default-mission.png")}
                                        alt={`Misión ${launch.name}`}
                                        className="img-fluid launch-img"
                                    />
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