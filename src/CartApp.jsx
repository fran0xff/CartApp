

export const CartApp = () => {
    return (
        <>

            <div className="container">

                <h3>Cart App</h3>
                <div className="row">
                    <div className="col-4 my-2">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Teclado Mecanico RGB</h5>
                                <p className="card-text">Teclado Mecanico con luces RGB switches cherry red</p>
                                <p className="card-text">100 €</p>
                                <button className="btn btn-primary">Añadir al carro</button>
                            </div>

                        </div>
                    </div>
                    <div className="col-4 my-2">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Samsung Smart TV</h5>
                                <p className="card-text">Teclado Mecanico con luces RGB switches cherry red</p>
                                <p className="card-text">1000 €</p>
                                <button className="btn btn-primary">Añadir al carro</button>
                            </div>

                        </div>
                    </div>
                    <div className="col-4 my-2">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Auriculares Bluethooth Sony</h5>
                                <p className="card-text">Teclado Mecanico con luces RGB switches cherry red</p>
                                <p className="card-text">180 €</p>
                                <button className="btn btn-primary">Añadir al carro</button>
                            </div>

                        </div>
                    </div>
                    <div className="col-4 my-2">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Memoria Corsair 32GB DDR5</h5>
                                <p className="card-text">Teclado Mecanico con luces RGB switches cherry red</p>
                                <p className="card-text">125 €</p>
                                <button className="btn btn-primary">Añadir al carro</button>
                            </div>

                        </div>
                    </div>
                    <div className="col-4 my-2">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">CPU Intel Core i7 12600K</h5>
                                <p className="card-text">Teclado Mecanico con luces RGB switches cherry red</p>
                                <p className="card-text">300 €</p>
                                <button className="btn btn-primary">Añadir al carro</button>
                            </div>

                        </div>
                    </div>
                    <div className="col-4 my-2">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Asus Nvidia RTX 4070</h5>
                                <p className="card-text">Teclado Mecanico con luces RGB switches cherry red</p>
                                <p className="card-text">450 €</p>
                                <button className="btn btn-primary">Añadir al carro</button>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="my-4 w-50">
                    <h3>Carro de compras</h3>
                    <table className="table table-hover table-striped">
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Precio</th>
                                <th>Cantidad</th>
                                <th>Total</th>
                                <th>Eliminar</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>nombre</td>
                                <td>Precio</td>
                                <td>Cantidad</td>
                                <td>Total</td>
                                <td>eliminar</td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colSpan="3" className="text-end fw-bold">Total</td>
                                <td colSpan="2" className="text-start fw-bold">12345</td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </>
    )
}