import './style.css'
import calendarIcon from "../../assets/principal/calendar.png";
import alarmIcon from "../../assets/principal/alarm.png";
import professorImg from "../../assets/principal/Professor.png";


export function SectionPrincipal() {
    return (
        <section className="secaoPrincioal">
            <div className="mainElements">
                <div className="left">
                    <div className="titulo">
                        <h1>Jornada <span>Front-end</span></h1>
                    </div>

                    <div className="descricao">
                        <p>DOMINE FRONT-END E TRANSFORME SUA CARREIRA EM MESES!
                            Nosso curso COMPLETO te leva do ABSOLUT ZERO a um desenvolvedor web ALTAMENTE QUALIFICADO.</p>
                    </div>

                    <div className="dataEhora">
                        <p>23, 24 e 25 </p>
                        <img src= {calendarIcon} alt="" />
                        <p>20 horas</p>
                        <img src= {alarmIcon} alt="" />
                    </div>

                    <div className="botao">
                        <a href="#">Garantir minha vaga!</a>
                    </div>
                </div>
                <div className="rigth">
                    <img src= {professorImg} alt="" />
                </div>
            </div>
        </section>
    )
}

export default SectionPrincipal;