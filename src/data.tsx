import boyacaPrincipal from "./assets/imgs/BOYACA_1.png";
import boyacaSecondary from "./assets/imgs/BOYACA_2.png";
import nacionalPrincipal from "./assets/imgs/NACIONAL_1.png";
import nacionalSecondary from "./assets/imgs/NACIONAL_2.png";
import territorial1 from "./assets/imgs/CHOCO_1.png";
import territorial2 from "./assets/imgs/CHOCO_2.png";
import territorial3 from "./assets/imgs/CAUCA_1.png";
import territorial4 from "./assets/imgs/CAUCA_2.png";
import territorial5 from "./assets/imgs/CALDAS_1.png";
import territorial6 from "./assets/imgs/CALDAS_2.png";
import territorial7 from "./assets/imgs/META_1.png";
import territorial8 from "./assets/imgs/META_2.png";
import { PrincipalAvatarShape } from "./components/principalAvatar/principalAvatar";
import { ElectoralCardItem } from "./components/electoralCard/electoralCard";


export const dataPrincipals1: PrincipalAvatarShape[] = [
    {
        title: "Fórmula Titular",
        name: "César Tavorda",
        study: "VIII Semestre ATP",
        scope: "T. Quindío – Risaralda",
        city: "Cetap – Dosquebradas",
        src: boyacaPrincipal
    },
    {
        title: "Fórmula Suplente",
        name: "Daniela Figueredo",
        study: "V Semestre ATP",
        scope: "T. Boyacá – Casanare",
        city: "Cetap - Tunja",
        src: boyacaSecondary,
        color: "secondary" 
    }
]
export const dataPrincipals2: PrincipalAvatarShape[] = [
    
    {
        title: "Fórmula Titular",
        name: "Jaiver Sarmiento",
        study: "",
        scope: "Meta - Guaviare - Guainía",
        city: "Vaupéz - Amazonas",
        src: nacionalPrincipal
    },
    {
        title: "Fórmula Suplente",
        name: "Viviana Valdéz",
        study: "",
        scope: "",
        city: "T. Tolima",
        src: nacionalSecondary,
        color: "secondary" 
    }
]

export const proposalPrincipal1 = [
    <>
        <h4>Fortalecimiento de las Políticas y el Desarrollo de las Áreas Académicas y Administrativas:</h4> 
        <p className="pl-1 pt-1">Proponemos implementar un sistema integral de retroalimentación continua en la ESAP, que incluya evaluaciones docentes, encuestas de satisfacción y espacios de participación multicanal. Además, se crearán comités periódicos inclusivos para mejorar políticas académicas y comportamentales a nivel local y nacional.</p>
        <p className="pl-1 pt-1">Promoveremos enfoques innovadores en la educación superior, incluyendo tecnologías emergentes y métodos participativos de enseñanza. Esto se logrará mediante capacitación en tecnología educativa y laboral, fomento de la enseñanza participativa y la creación de laboratorios de innovación, respaldados por un convenio de capacitación continua con la CNSC. </p>
        <p className="pl-1 pt-1">Procuraremos la implementación de un modelo organizativo colaborativo con base en un estudio de cargas laborales, que permita mejorar la agilidad y eficiencia de nuestra estructura. Esto nos permitirá dar respuestas más efectivas a las necesidades cambiantes de la comunidad estudiantil y del entorno social</p>
        <p className="pl-1 pt-1">Promover la adopción de una política integral de salud mental y convivencia esencial para promover el bienestar en la comunidad educativa. Con los objetivos sensibilizar, educar y facilitar el acceso a servicios de salud mental, mientras fortalece el entorno educativo, destacando la importancia de la salud mental y el respeto mutuo para impulsar el desarrollo personal y profesional de todos sus integrantes. </p>
    </>,
    <>
        <h4>Transparencia y Reformas Normativas</h4>
        <p className="pl-1">Trabajaremos por facilitar el acceso a la información y promover la participación estudiantil en el proceso de reforma de los estatutos internos, asegurando una representación equitativa de todas las voces y perspectivas en la comunidad estudiantil a nivel nacional. Esto incluirá la reforma del Reglamento Único Estudiantil y del Estatuto Electoral.</p>
    </>,
    <>
        <h4>Calidad Académica a tráves de Incentivos y Convenios</h4>
        <p className="pl-1 pt-1">Vigilar el cumplimiento de las disposiciones legales y los acuerdos establecidos con los estudiantes y los representantes estudiantiles, asegurando que se adapten a las normativas vigentes y promueva la excelencia en la educación superior, en especial aquellos que buscan ampliar los incentivos académicos, la oferta del área de bienestar y la movilidad academica</p>
        <p className="pl-1 pt-1">Impulsar la creación responsable y de calidad de nuevos programas académicos que respondan a las demandas del mercado laboral y contribuyan al desarrollo sostenible. Esto incluye solicitar la actualización de condiciones para cohortes existentes y la apertura de nuevos centros, junto con la propuesta de un estudio diagnóstico y plataforma de seguimiento para mejorar los entornos académicos. </p>
        <p className="pl-1 pt-1">Gestionar estímulos para la investigación estudiantil, acompañando y fomentando la generación y publicación de conocimiento aplicado y relevante para el desarrollo del país. Además, de proporcionar incentivos académicos a estudiantes que publiquen como autor o coautor, generando condiciones para que representen a la escuela en espacios reconocidos a nivel nacional e internacional</p>
    .</>,
    <>
        <h4>Fortalecimiento de la Infraestructura Física y Tecnológica</h4>
        <p className="pl-1 pt-1">Impulsar el mejoramiento de la infraestructura física propia, alquilada o en comodato, adaptada a las necesidades estudiantiles a nivel nacional, dentro de un marco de responsabilidad fiscal. Esto implica solicitar un informe detallado sobre las condiciones de la infraestructura física y el progreso del Plan Institucional de Infraestructura y Mantenimiento, así como promover su actualización con una proyección ampliada de 4 a 10 años. Asimismo, instar al cumplimiento y mejora de las condiciones de infraestructura en contratos de arrendamiento o convenios suscritos o que se suscriban a futuro. </p>
        <p className="pl-1 pt-1">Velar por una gestión responsable de las donaciones recibidas y artículos dados de baja por la ESAP, asegurando su beneficio directo para la comunidad estudiantil y académica. Además, colaborar en la redistribución de elementos tecnológicos en desuso para que estudiantes sin acceso a herramientas tecnológicas puedan beneficiarse de ellos</p>
    </>,
    <>
        <h4>Fortalecimiento de la Infraestructura Física y Tecnológica</h4>
        <p className="pl-1 pt-1">Abogar por la establecimiento de derechos pecuniarios justos y equitativos, que no obstaculicen el acceso a la educación superior. Además, fomentar la firma de convenios con entidades públicas y privadas para promover la equidad en el acceso a la educación superior. Asimismo, promover la implementación de incentivos que permitan la exención del pago de matrícula. </p>
    </>,
]

export const proposalPrincipal2 = [
    <ul>
        <li >Establecer mecanismos de articulación con los representantes estudiantiles a nivel nacional y territorial en torno a los procesos de investigación, extensión, currículo, bienestar universitario y situaciones académicas</li>
        <li className="pt-1">Promover el acceso equitativo a la educación, creando un entorno inclusivo y de calidad que valore la diversidad cultural, étnica, de género y socioeconómica, de todos los estudiantes a través de mesas de trabajo que generen espacios participativos y representativos.</li>
        <li className="pt-1">Fortalecer los procesos de innovación contribuyendo con iniciativas en todo el territorio nacional, con el fin de que la comunidad estudiantil exprese el potencial de sus conocimientos a través de la creatividad para solucionar situaciones académico- administrativa</li>
        <li className="pt-1">Proponer estrategias para fortalecer la relación de la ESAP con la comunidad territorial, asegurando que los programas académicos estén alineados con las necesidades, centros de desarrollo y demandas de los territorios.</li>
        <li className="pt-1">Diseñar estrategias que permitan la participación estudiantil en las distintas situaciones académicas con el fin de velar por los derechos e intereses de la comunidad Esapista.</li>
        <li className="pt-1">Realizar seguimiento a los compromisos institucionales con respecto a la infraestructura física y tecnológica que permita el bienestar de la comunidad Esapista.</li>
    </ul>
]

export const territorialList: ElectoralCardItem[] = [
    {
        srcPrincipal: territorial1,
        srcSecondary: territorial2,
        namePrincipal: "Claudia Yineth Minota",
        nameSecondary: "Aquilino Álvarez Palomeque",
        title: "CHOCÓ"
    },
    {
        srcPrincipal: territorial3,
        srcSecondary: territorial4,
        namePrincipal: "José Danilo Gómez",
        nameSecondary: "Valentina Gutiérrez",
        title: "CAUCA"
    },
    {
        srcPrincipal: territorial5,
        srcSecondary: territorial6,
        namePrincipal: "María Karina Muñoz",
        nameSecondary: "Gabriel Felipe Giraldo",
        title: "CALDAS"
    },
    {
        srcPrincipal: territorial7,
        srcSecondary: territorial8,
        namePrincipal: "Alonso León Cavanzo",
        nameSecondary: "Yainy Cristal Ramirez",
        title: "META - GUAVIARE - GUANIA - VAUPÉS - VICHADA - AMAZONAS"
    },
]
