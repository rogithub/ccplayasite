import Nav from '../components/nav'
import Contacto from '../components/contacto'
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/Home.module.css'

export default function Home() {
    return (

        <div className={styles.container}>

            <div className="container">
                <Nav />
            </div>

            <div className="container">
                <Contacto />
            </div>

            <main className={styles.main}>

                <div className="container pb-3">
                    <div className="row row-cols-1 row-cols-md-2 g-8">
                        <div className="col pt-3">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Decoración</h5>
                                    <p className="card-text">
                                        Contamos con especialistas en decoración de interiores, cuando lo requiera
                                        trabajamos bajo proyecto con diseño de acuerdo a sus necesidades.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col pt-3">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Tapicería</h5>
                                    <p className="card-text">
                                        Trabajamos sólo las mejores marcas, calidad garantizada en telas especializadas
                                        para sol, antifluídos, antihongos, etcétera
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col pt-3">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Cojinería</h5>
                                    <p className="card-text">
                                        Cojines de todas las medidas y tamaños, de interior o exterior
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col pt-3">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Hotelería</h5>
                                    <p className="card-text">
                                        Cojines para muebles de piscina
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col pt-3">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Bares & Restaurantes</h5>
                                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col pt-3">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Colchonetas</h5>
                                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col pt-3">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Buceo</h5>
                                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col pt-3">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Fundas</h5>
                                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <footer className={styles.footer}>

            </footer>
        </div>
    )
}
