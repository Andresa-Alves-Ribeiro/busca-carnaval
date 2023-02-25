import { MapPin } from 'phosphor-react'
import './styles.css'
import Card01 from '../../assets/card01.jpg';
import Card02 from '../../assets/card02.jpg';
import Card03 from '../../assets/card03.jpg'
import Card04 from '../../assets/card04.jpg'
import Card05 from '../../assets/card05.jpg'
import Card06 from '../../assets/card06.jpg'
import Card07 from '../../assets/card07.jpg'
import Card08 from '../../assets/card08.jpg'
import Card09 from '../../assets/card09.jpg'

export default function Cards() {
    return (
        <main>
            <div className="body">
                <section className="top-body">
                    <h2>Blocos recomendados</h2>
                    <div className="view">
                        <button className="btn primary">Lista</button>
                        <button className="btn primary">Mapa</button>
                    </div>
                </section>

                <section className="cards">
                    <div className='card'>
                        <img src={Card01} alt="" />
                        <div className='body'>
                            <h3>O Python do vovô não sobe mais</h3>
                            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>

                            <div className="location">
                                <MapPin className='icon' size={28} weight="light" />
                                São Paulo - SP
                            </div>
                        </div>
                    </div>

                    <div className='card'>
                        <img src={Card02} alt="" />
                        <div className='body'>
                            <h3>Todo mundo null</h3>
                            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>

                            <div className="location">
                                <MapPin className='icon' size={28} weight="light" />
                                Florianópolis - SC
                            </div>
                        </div>
                    </div>

                    <div className='card'>
                        <img src={Card03} alt="" />
                        <div className='body'>
                            <h3>Hoje dou exception</h3>
                            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>

                            <div className="location">
                                <MapPin className='icon' size={28} weight="light" />
                                Curitiba - PR
                            </div>
                        </div>
                    </div>

                    <div className='card'>
                        <img src={Card04} alt="" />
                        <div className='body'>
                            <h3>Manda Node</h3>
                            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>

                            <div className="location">
                                <MapPin className='icon' size={28} weight="light" />
                                Salvador - BA
                            </div>
                        </div>
                    </div>

                    <div className='card'>
                        <img src={Card05} alt="" />
                        <div className='body'>
                            <h3>Só no back-end</h3>
                            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>

                            <div className="location">
                                <MapPin className='icon' size={28} weight="light" />
                                São Paulo - SP
                            </div>
                        </div>
                    </div>

                    <div className='card'>
                        <img src={Card06} alt="" />
                        <div className='body'>
                            <h3>Esse anel não é de Ruby</h3>
                            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>

                            <div className="location">
                                <MapPin className='icon' size={28} weight="light" />
                                São Paulo - SP
                            </div>
                        </div>
                    </div>

                    <div className='card'>
                        <img src={Card07} alt="" />
                        <div className='body'>
                            <h3>Pimenta no C# dos outros é refresco</h3>
                            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>

                            <div className="location">
                                <MapPin className='icon' size={28} weight="light" />
                                Rio de Janeiro - RJ
                            </div>
                        </div>
                    </div>

                    <div className='card'>
                        <img src={Card08} alt="" />
                        <div className='body'>
                            <h3>EnCACHE aqui</h3>
                            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>

                            <div className="location">
                                <MapPin className='icon' size={28} weight="light" />
                                Porto Alegre - RS
                            </div>
                        </div>
                    </div>

                    <div className='card'>
                        <img src={Card09} alt="" />
                        <div className='body'>
                            <h3>Não valho nada mas JAVA li</h3>
                            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>

                            <div className="location">
                                <MapPin className='icon' size={28} weight="light" />
                                São Paulo - SP
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}