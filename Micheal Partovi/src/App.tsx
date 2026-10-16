import React, { useState } from "react";
// @ts-expect-error - local image asset import
import attorneyPortrait from "./assets/images/attorney_michael_partovi.jpg";
// @ts-expect-error - local image asset import
import heroVideo from "./assets/images/hero-video.mp4";
// @ts-expect-error - local image asset import
import heroBg from "./assets/images/hero-bg.png";
// @ts-expect-error - local image asset import
import contactBg from "./assets/images/773.jpg";
// @ts-expect-error - local image asset import
import imgWorkersComp from "./assets/images/practice_workers_comp.jpg";
// @ts-expect-error - local image asset import
import imgDeniedClaims from "./assets/images/practice_denied_claims.jpg";
// @ts-expect-error - local image asset import
import imgMedicalTreatment from "./assets/images/practice_medical_treatment.jpg";
// @ts-expect-error - local image asset import
import imgQme from "./assets/images/qme_medical_evaluator.jpg";
import CriminalDefensePage from "./components/CriminalDefensePage";
import { 
  ArrowRight, 
  Users, 
  Scale, 
  Mail, 
  MapPin, 
  Globe, 
  ChevronRight, 
  ChevronLeft, 
  Menu, 
  X, 
  Phone, 
  Facebook, 
  Instagram, 
  Linkedin, 
  Twitter, 
  MessageCircle, 
  Search, 
  ClipboardList, 
  Shield, 
  Award, 
  Quote 
} from "lucide-react";

// Premium Practice Areas Interface
interface PracticeArea {
  id: string;
  title: string;
  description: string;
  longDesc: string;
  icon: React.ComponentType<{ className?: string }>;
  img?: string;
}

// Premium Process Step Interface
interface ProcessStep {
  number: string;
  title: string;
  duration: string;
  description: string;
  details: string;
}

// Premium Insights Article Interface
interface Article {
  id: string;
  date: string;
  readTime: string;
  title: string;
  category: string;
  imageUrl: string;
}

// BrandLogo component modeled after the high-contrast shield logo in gold
const BrandLogo = ({ className = "w-9 h-9" }: { className?: string }) => (
  <svg 
    className={`${className} text-[#D4AF37] group-hover:scale-[1.03] transition-all duration-300`} 
    viewBox="0 0 100 100" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Outer Pentagon Shield */}
    <path 
      d="M10 20 L50 8 L90 20 L90 62 C90 78, 50 92, 50 92 C50 92, 10 78, 10 62 Z" 
      stroke="currentColor" 
      strokeWidth="3" 
      strokeLinejoin="round"
      fill="rgba(0, 0, 0, 0.2)"
    />
    {/* Inner Pentagon Shield Line (Double Boundary) */}
    <path 
      d="M16 24 L50 14 L84 24 L84 59 C84 73, 50 85, 50 85 C50 85, 16 73, 16 59 Z" 
      stroke="currentColor" 
      strokeWidth="1.5" 
      strokeOpacity="0.6"
      strokeLinejoin="round"
    />
    {/* Stylized Column Pillars inside Shield */}
    <path 
      d="M28 32 C38 30, 62 30, 72 32 C70 34, 30 34, 28 32 Z" 
      fill="currentColor" 
    />
    <path 
      d="M32 37 C40 35, 60 35, 68 37 C66 39, 34 39, 32 37 Z" 
      fill="currentColor" 
    />
    <path 
      d="M35 42 L65 42 L65 45 L35 45 Z" 
      fill="currentColor" 
    />
    
    {/* 3 Pillars */}
    <path 
      d="M38 48 L41 48 L41 68 L38 68 Z" 
      fill="currentColor" 
    />
    <path 
      d="M48 48 L51 48 L51 72 L48 72 Z" 
      fill="currentColor" 
    />
    <path 
      d="M58 48 L61 48 L61 68 L58 68 Z" 
      fill="currentColor" 
    />
    
    {/* Pedestal / Base */}
    <path 
      d="M35 71 L65 71 L63 74 L37 74 Z" 
      fill="currentColor" 
    />
    <path 
      d="M32 76 L68 76 L68 79 L32 79 Z" 
      fill="currentColor" 
    />
  </svg>
);

// Premium Translations Dictionary for English and Spanish
const translations = {
  EN: {
    brandName: "MICHAEL PARTOVI, ESQ.",
    brandSubtitle: "Workers' Compensation Law Firm",
    taglineHeader: "DEDICATED. EXPERIENCED. FIGHTING FOR INJURED WORKERS.",
    phoneNum: "(818) 518-6288",
    emailAddr: "mike_parto@yahoo.com",
    jurisdiction: "Serving Injured Workers Throughout California",
    freeConsultation: "Free Consultation",
    noFeeUnlessWeWin: "NO FEE UNLESS WE WIN",
    yourRecoveryOurMission: "YOUR RECOVERY. OUR MISSION.",
    compassionateAdvocacy: "COMPASSIONATE ADVOCACY. PROVEN RESULTS.",
    representingInjuredWorkers: "REPRESENTING INJURED WORKERS",
    aboutUs: "About Michael",
    practiceAreas: "Practice Areas",
    results: "Results",
    insights: "Legal News",
    contact: "Contact",
    ctaHeadline1: "Fighting for",
    ctaHeadline2: "injured workers",
    ctaHeadline3: " across California.",
    ctaAction: "FREE CONSULTATION",
    howWeWork: "OUR ADVOCACY PROCESS",
    howWeWorkTitle: "Clarity in process.",
    howWeWorkSubtitle: "Confidence in recovery.",
    howWeWorkDesc: "We take on the insurance carriers and fight for your complete medical care,\nfull wage replacement, and maximum settlement.",
    how1Number: "01",
    how1Title: "Free Case Review",
    how1Desc: "We evaluate your workplace injury\nand protect your rights\nunder California labor law.",
    how2Number: "02",
    how2Title: "Claim & Medical Action",
    how2Desc: "We file all DWC-1 paperwork\nand connect you with top\nmedical specialists in the MPN.",
    how3Number: "03",
    how3Title: "Overturn Denials",
    how3Desc: "We contest insurer bad faith\nand demand expedited\nWCAB hearings.",
    how4Number: "04",
    how4Title: "QME & Rating Strategy",
    how4Desc: "We maximize your Whole Person\nImpairment rating and protect\nlifetime medical rights.",
    how5Number: "05",
    how5Title: "Maximum Settlement",
    how5Desc: "We secure high-value C&R payouts\nor litigate before WCAB judges\nto win your award.",
    howWeWorkCTA: "Learn More About Our Process",
    testimonialsLabel: "INJURED WORKERS SPEAK",
    testiTitle1: "Trusted by workers.",
    testiTitle2: "Proven by results.",
    testiDesc: "We take immense pride in defending hard-working Californians\nwhen catastrophic injuries turn life upside down.",
    testiViewAll: "View Client Outcomes",
    testimonials: "TESTIMONIALS",
    testiTitle: "What our clients say about us",
    secureBriefing: "(818) 518-6288",
    ourApproach: "Explore Practice Areas",
    scrollingPractice: "Scroll to practice areas overview",
    knowledgeAndDefense: "EXPERIENCED ADVOCACY",
    experienceHeading: "Fighting for Injured Workers\nThroughout California.",
    experienceSubtitle: "No fee unless we win. We handle every step of your workers' compensation claim with compassion and relentless focus.",
    requestCaseEval: "Request Free Consultation",
    provenResults: "MEASURABLE RECOVERY",
    resultsHeadline: "Real results.\nReal recovery.",
    viewCaseResults: "Explore Case Outcomes",
    recoveredClients: "Recovered for\ninjured workers",
    successfulDismissals: "Successful claims\nand settlements",
    hoursTrial: "Contingency fee:\nNo fee unless we win",
    satisfiedServed: "Injured workers served\nthroughout California",
    foundingAttorney: "WORKERS' COMPENSATION ATTORNEY",
    foundingTitle: "Michael Partovi, Esq.",
    requestConsultation: "Schedule Free Consultation",
    scholarlyInfluence: "CALIFORNIA LABOR CODE ADVOCACY",
    readGlobally: "SERVING ALL WCAB DISTRICT OFFICES STATEWIDE",
    premiumInsights: "WORKERS' COMP INSIGHTS",
    readyToBuild: "INJURED ON THE JOB IN CALIFORNIA?",
    letsWork: "LET'S FIGHT",
    together: "FOR YOUR RECOVERY.",
    getInTouchCTA: "CALL NOW: (818) 518-6288",
    legalCounselRights: "Dedicated legal counsel for injured California workers.",
    getIntouch: "COMPASSIONATE ADVOCACY. PROVEN RESULTS.",
    secureCounsel1: "Your recovery.",
    secureCounsel2: "Our ",
    secureCounsel3: "mission.",
    getInTouchDesc: "Contact Attorney Michael Partovi today for an immediate, confidential evaluation of your workers' compensation rights.",
    scheduleConsultation: "Request Free Consultation",
    confidentialProtocol: "100% Confidential Attorney-Client Privilege",
    sendMessage: "Send Message",
    sending: "Sending...",
    officeIntel: "LOCATION & SERVICE",
    activeCourts: "CALIFORNIA WCAB OFFICES",
    mapStructure: "NAVIGATION",
    officeAddress: "Michael Partovi, Esq.\nServing Injured Workers\nThroughout California\nPhone: (818) 518-6288",
    okRegistry: "STATE BAR OF CALIFORNIA",
    hqActive: "Statewide Coverage Active",
    allRightsReserved: "© 2026 MICHAEL PARTOVI, ESQ. WORKERS' COMPENSATION LAW FIRM. ALL RIGHTS RESERVED.",
    attorneyDesignation: "CALIFORNIA WORKERS' COMP ATTORNEY",
    tulsaEquality: "NO FEE UNLESS WE WIN",
    legalTerms: "DISCLAIMER & PRIVACY",
    courtroomsHandle: "How to Overturn a Denied Workers' Compensation Claim in California",
    understandingExpungement: "Choosing Between Compromise & Release (C&R) vs. Stipulations with Request for Award",
    citizensGuide: "The QME Process in California: Why Panel Evaluator Selection Decides Your Case",
    bailReductions: "Emergency Medical Access During the 90-Day Employer Liability Period",
    heroTitle: "Dedicated.\nExperienced.\nFighting for\nInjured Workers.",
    heroDesc: "Michael Partovi, Esq. is a dedicated workers' compensation attorney representing injured workers throughout California. Zero upfront costs — No Fee Unless We Win.",
    languages: "Language:",
    formRequiredInputs: "Please complete all fields before submitting.",
    formProvisioned: "Your case information has been securely received. Attorney Michael Partovi will contact you directly within 1 hour.",
    bioPara1: "Michael Partovi, Esq. has built his practice on a single foundational mandate: fighting for hard-working individuals who have suffered serious injuries on the job. Dealing with workplace trauma is stressful enough without having to navigate insurance delays, denied treatments, and confusing legal proceedings.",
    bioPara2: "Attorney Partovi aggressively takes on employers and insurance defense firms across California. Whether handling complex orthopedic injuries, repetitive stress claims, toxic exposures, or fighting an outright claim denial, Michael ensures that injured workers receive premier medical treatment, full temporary disability payments, and the highest possible settlement.",
    quote: "YOUR RECOVERY. OUR MISSION. We stand beside injured workers every step of the way with compassionate advocacy and proven results.",
    fullName: "Your Full Name",
    phone: "Your Phone Number",
    email: "Email Address",
    categoryLabel: "Workplace Injury Category",
    descrLabel: "Please describe how the injury occurred and your current claim status...",
    issueMisd: "Workers' Compensation Claim",
    issueFel: "Denied Claim Appeal",
    issueBrief: "Permanent Disability Rating Dispute",
    issueProt: "Medical Treatment & Surgery Denial",
    issueCDL: "Settlement (Compromise & Release / Stips)",
    issueExp: "WCAB Courtroom Trial / Hearing",
    readArticle: "Read Article",
    aboutMary: "About Michael Partovi",
    scrollingAbout: "About Attorney Michael Partovi, Esq."
  },
  ES: {
    brandName: "MICHAEL PARTOVI, ESQ.",
    brandSubtitle: "Firma de Compensación Laboral",
    taglineHeader: "DEDICADO. EXPERIMENTADO. LUCHANDO POR TRABAJADORES LESIONADOS.",
    phoneNum: "(818) 518-6288",
    emailAddr: "mike_parto@yahoo.com",
    jurisdiction: "Sirviendo a Trabajadores Lesionados en Todo California",
    freeConsultation: "Consulta Gratuita",
    noFeeUnlessWeWin: "NO COBRAMOS A MENOS QUE GANEMOS",
    yourRecoveryOurMission: "SU RECUPERACIÓN. NUESTRA MISIÓN.",
    compassionateAdvocacy: "DEFENSA COMPASIVA. RESULTADOS COMPROBADOS.",
    representingInjuredWorkers: "REPRESENTANDO A TRABAJADORES LESIONADOS",
    aboutUs: "Sobre Michael",
    practiceAreas: "Áreas de Práctica",
    results: "Resultados",
    insights: "Noticias Legales",
    contact: "Contacto",
    ctaHeadline1: "Luchando por",
    ctaHeadline2: "los trabajadores",
    ctaHeadline3: " en todo California.",
    ctaAction: "CONSULTA GRATIS",
    howWeWork: "NUESTRO PROCESO LEGAL",
    howWeWorkTitle: "Claridad en el proceso.",
    howWeWorkSubtitle: "Confianza en su recuperación.",
    howWeWorkDesc: "Enfrentamos a las aseguradoras y luchamos por su atención médica completa,\npago de salarios perdidos y máxima indemnización.",
    how1Number: "01",
    how1Title: "Consulta Gratis",
    how1Desc: "Evaluamos su accidente de trabajo\ny protegemos sus derechos\nbajo la ley de California.",
    how2Number: "02",
    how2Title: "Reclamo y Atención Médica",
    how2Desc: "Presentamos el DWC-1\ny lo remitimos con los mejores\nespecialistas de la red MPN.",
    how3Number: "03",
    how3Title: "Apelación de Denegaciones",
    how3Desc: "Combatimos los rechazos injustos\ny exigimos audiencias urgentes\nante la WCAB.",
    how4Number: "04",
    how4Title: "Evaluación QME y Calificación",
    how4Desc: "Optimizamos su porcentaje de\nincapacidad y protegemos\nsus derechos médicos de por vida.",
    how5Number: "05",
    how5Title: "Acuerdo Máximo",
    how5Desc: "Negociamos pagos en efectivo C&R\no litigamos ante los jueces\nde la WCAB para ganar su indemnización.",
    howWeWorkCTA: "Conozca Más Sobre el Proceso",
    testimonialsLabel: "LOS TRABAJADORES HABLAN",
    testiTitle1: "Confiado por trabajadores.",
    testiTitle2: "Probado por resultados.",
    testiDesc: "Nos enorgullece defender a los trabajadores en California\ncuando las lesiones laborales cambian su vida.",
    testiViewAll: "Ver Testimonios de Clientes",
    testimonials: "TESTIMONIOS",
    testiTitle: "Lo que dicen nuestros clientes",
    secureBriefing: "(818) 518-6288",
    ourApproach: "Ver Áreas de Práctica",
    scrollingPractice: "Desplazarse a áreas de práctica",
    knowledgeAndDefense: "EXPERIENCIA Y DEFENSA",
    experienceHeading: "Luchando por Trabajadores Lesionados\nen Todo California.",
    experienceSubtitle: "No cobramos a menos que ganemos. Manejamos cada etapa de su caso con dedicación y enfoque incansable.",
    requestCaseEval: "Solicitar Consulta Gratuita",
    provenResults: "RECUPERACIÓN COMPROBADA",
    resultsHeadline: "Resultados reales.\nRecuperación real.",
    viewCaseResults: "Ver Resultados de Casos",
    recoveredClients: "Recuperado para\ntrabajadores lesionados",
    successfulDismissals: "Reclamos y acuerdos\nexitosos",
    hoursTrial: "Honorarios de contingencia:\nNo cobramos si no ganamos",
    satisfiedServed: "Trabajadores atendidos\nen todo California",
    foundingAttorney: "ABOGADO DE COMPENSACIÓN LABORAL",
    foundingTitle: "Michael Partovi, Esq.",
    requestConsultation: "Programar Consulta Gratuita",
    scholarlyInfluence: "DEFENSA LABORAL EN CALIFORNIA",
    readGlobally: "LITIGAMOS EN TODAS LAS OFICINAS DE LA WCAB EN CALIFORNIA",
    premiumInsights: "NOTICIAS Y ARTÍCULOS",
    readyToBuild: "¿SE LESIONÓ EN EL TRABAJO EN CALIFORNIA?",
    letsWork: "LUCHEMOS POR",
    together: "SU RECUPERACIÓN.",
    getInTouchCTA: "LLAME AHORA: (818) 518-6288",
    legalCounselRights: "Asesoría legal dedicada para trabajadores lesionados en California.",
    getIntouch: "DEFENSA COMPASIVA. RESULTADOS COMPROBADOS.",
    secureCounsel1: "Su recuperación.",
    secureCounsel2: "Nuestra ",
    secureCounsel3: "misión.",
    getInTouchDesc: "Comuníquese hoy mismo con el abogado Michael Partovi para una evaluación confidencial de su reclamo de compensación.",
    scheduleConsultation: "Solicitar Consulta Gratuita",
    confidentialProtocol: "100% Confidencial bajo Secreto Profesional",
    sendMessage: "Enviar Mensaje",
    sending: "Enviando...",
    officeIntel: "UBICACIÓN Y SERVICIO",
    activeCourts: "TRIBUNALES DE LA WCAB",
    mapStructure: "NAVEGACIÓN",
    officeAddress: "Michael Partovi, Esq.\nSirviendo a Trabajadores Lesionados\nen Todo California\nTel: (818) 518-6288",
    okRegistry: "COLEGIO DE ABOGADOS DE CALIFORNIA",
    hqActive: "Cobertura Estatal Activa",
    allRightsReserved: "© 2026 MICHAEL PARTOVI, ESQ. FIRMA DE COMPENSACIÓN LABORAL. TODOS LOS DERECHOS RESERVADOS.",
    attorneyDesignation: "ABOGADO DE COMPENSACIÓN LABORAL",
    tulsaEquality: "SIN GANANCIA NO HAY COBRO",
    legalTerms: "AVISO LEGAL Y PRIVACIDAD",
    courtroomsHandle: "Cómo apelar y revocar un reclamo de compensación denegado en California",
    understandingExpungement: "Diferencias clave entre Liquidación en Suma Global (C&R) y Estipulaciones",
    citizensGuide: "El proceso del Médico Evaluador Neutral (QME): por qué su elección determina el resultado",
    bailReductions: "Acceso médico de urgencia durante el período de responsabilidad de 90 días",
    heroTitle: "Dedicado.\nExperimentado.\nLuchando por\nTrabajadores Lesionados.",
    heroDesc: "Michael Partovi, Esq. es un abogado dedicado a la compensación de trabajadores en todo California. Cero costos iniciales: No Cobramos a Menos Que Ganemos.",
    languages: "Idioma:",
    formRequiredInputs: "Por favor complete todos los campos requeridos.",
    formProvisioned: "Información recibida de forma segura. El abogado Michael Partovi se pondrá en contacto con usted en 1 hora.",
    bioPara1: "Michael Partovi, Esq. fundó su práctica sobre un principio inquebrantable: defender a las personas trabajadoras que sufren lesiones graves en su empleo. Enfrentar una lesión laboral ya es bastante difícil sin tener que lidiar con tácticas de aseguradoras que buscan recortar beneficios.",
    bioPara2: "El abogado Partovi confronta con determinación a empleadores y compañías de seguros en todo California. Ya sea que enfrente lesiones ortopédicas complejas, trauma acumulativo o la denegación total de su caso, Michael garantiza el mejor tratamiento médico y la máxima compensación financiera.",
    quote: "SU RECUPERACIÓN. NUESTRA MISIÓN. Acompañamos a los trabajadores lesionados en cada paso del camino con empatía y resultados comprobados.",
    fullName: "Nombre Completo",
    phone: "Número Telefónico",
    email: "Correo Electrónico",
    categoryLabel: "Tipo de Lesión Laboral",
    descrLabel: "Describa cómo ocurrió el accidente y el estado de su reclamo...",
    issueMisd: "Reclamo de Compensación Laboral",
    issueFel: "Apelación de Reclamo Denegado",
    issueBrief: "Disputa de Incapacidad Permanente",
    issueProt: "Negativa de Cirugía o Tratamiento Médico",
    issueCDL: "Liquidación (C&R / Estipulaciones)",
    issueExp: "Juicio Oral / Audiencia ante la WCAB",
    readArticle: "Ver Artículo",
    aboutMary: "Sobre Michael Partovi",
    scrollingAbout: "Sobre el abogado Michael Partovi, Esq."
  }
};

interface FAQItem {
  id: string;
  question: {
    EN: string;
    ES: string;
  };
  answer: {
    EN: string;
    ES: string;
  };
}

const faqItems: FAQItem[] = [
  {
    id: "01",
    question: {
      EN: "What should I do immediately after getting injured at work in California?",
      ES: "¿Qué debo hacer inmediatamente después de lesionarme en el trabajo en California?"
    },
    answer: {
      EN: "1) Report the injury to your supervisor immediately in writing. 2) Request and fill out Form DWC-1 (Workers' Compensation Claim Form). 3) Seek immediate medical attention. 4) Contact Attorney Michael Partovi at (818) 518-6288 before speaking with insurance adjusters or signing releases.",
      ES: "1) Reporte la lesión a su supervisor de inmediato por escrito. 2) Solicite y llene el Formulario DWC-1. 3) Busque atención médica urgente. 4) Llame al abogado Michael Partovi al (818) 518-6288 antes de hablar con los ajustadores de seguro o firmar documentos."
    }
  },
  {
    id: "02",
    question: {
      EN: "What does 'NO FEE UNLESS WE WIN' mean?",
      ES: "¿Qué significa 'NO COBRAMOS A MENOS QUE GANEMOS'?"
    },
    answer: {
      EN: "You pay zero dollars out of pocket. We advance all litigation costs and only receive a fee if we successfully recover financial compensation for your claim. In California workers' comp, attorney fees are set and approved by a WCAB judge (typically 15%), ensuring you receive the vast majority of your award.",
      ES: "No paga nada de su bolsillo. Nosotros cubrimos los gastos del caso y solo cobramos si recuperamos una compensación para usted. Los honorarios de abogado en California son aprobados por un juez de la WCAB (típicamente el 15%)."
    }
  },
  {
    id: "03",
    question: {
      EN: "Can I receive workers' comp if I have a pre-existing medical condition?",
      ES: "¿Puedo recibir compensación laboral si tengo una condición médica preexistente?"
    },
    answer: {
      EN: "Yes! California law protects workers when their job duties aggravate, accelerate, or worsen a pre-existing condition. Insurance companies frequently use pre-existing conditions to unlawfully deny claims, which is why having an experienced attorney cross-examine medical evaluators is vital.",
      ES: "¡Sí! La ley de California protege al trabajador cuando el trabajo agrava o acelera una condición previa. Las aseguradoras usan esto como pretexto para denegar reclamos, por lo que contar con un abogado experimentado es fundamental."
    }
  },
  {
    id: "04",
    question: {
      EN: "What is the difference between a Compromise & Release (C&R) and Stipulations?",
      ES: "¿Cuál es la diferencia entre un Compromiso y Liberación (C&R) y una Estipulación?"
    },
    answer: {
      EN: "A Compromise & Release (C&R) closes your case with a lump-sum cash settlement that includes the buyout value of future medical care. Stipulations with Request for Award pay your permanent disability rating in bi-weekly payments while keeping your medical care open for the rest of your life. We help you choose the best option for your health and financial future.",
      ES: "Un Compromiso y Liberación (C&R) cierra su caso con un pago único en efectivo que incluye el valor estimado del tratamiento médico futuro. Las Estipulaciones pagan su incapacidad de forma quincenal y dejan abierta la cobertura médica de por vida. Le ayudamos a elegir la mejor opción."
    }
  },
  {
    id: "05",
    question: {
      EN: "Do you represent injured workers across all of California?",
      ES: "¿Representa a trabajadores en todo California?"
    },
    answer: {
      EN: "Yes! Michael Partovi, Esq. proudly represents injured workers statewide—including Los Angeles, San Fernando Valley, Orange County, the Inland Empire, Central Valley, and Northern California, appearing before all local WCAB district offices.",
      ES: "¡Sí! Michael Partovi, Esq. representa con orgullo a trabajadores en todo el estado de California, litigando en todas las oficinas distritales de la WCAB desde Los Ángeles y el Valle de San Fernando hasta el norte del estado."
    }
  }
];

export default function App() {
  // Language State: 'EN' or 'ES'
  const [lang, setLang] = useState<"EN" | "ES">("EN");
  const t = translations[lang];

  // Navigation Toggle
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // FAQ Active State
  const [activeFaqIndex, setActiveFaqIndex] = useState<number | null>(0);

  // Dynamic Localized Practice Areas Data for California Workers' Comp
  const practiceAreas: PracticeArea[] = [
    {
      id: "01",
      title: lang === "EN" ? "Workers' Compensation\nClaims" : "Reclamos de\nCompensación",
      description: lang === "EN" 
        ? "Full-scope legal guidance for work-related injuries, DWC-1 filing, wage replacement, and employer liability." 
        : "Asesoría integral para accidentes laborales, radicación DWC-1, reposición salarial y responsabilidad patronal.",
      longDesc: "",
      icon: Scale,
      img: imgWorkersComp
    },
    {
      id: "02",
      title: lang === "EN" ? "Denied\nClaims" : "Reclamos\nDenegados",
      description: lang === "EN"
        ? "Aggressively challenging insurance denial letters, bad faith defense tactics, and filing for expedited hearings."
        : "Impugnación firme de cartas de rechazo, tácticas de aseguradoras y solicitud de audiencias de emergencia.",
      longDesc: "",
      icon: Shield,
      img: imgDeniedClaims
    },
    {
      id: "03",
      title: lang === "EN" ? "Permanent\nDisability" : "Incapacidad\nPermanente",
      description: lang === "EN"
        ? "Maximizing Whole Person Impairment (WPI) ratings, securing lifetime pensions, and job training vouchers."
        : "Maximizamos las calificaciones de incapacidad (WPI), pensiones vitalicias y vales de capacitación laboral.",
      longDesc: "",
      icon: Award,
      img: imgDeniedClaims
    },
    {
      id: "04",
      title: lang === "EN" ? "Medical Treatment\n& Referrals" : "Tratamiento Médico\ny Referencias",
      description: lang === "EN"
        ? "Connecting you with premier orthopedic specialists within the MPN and overturning UR treatment denials."
        : "Conexión con cirujanos de primer nivel dentro del MPN y apelación de rechazos de tratamiento por UR.",
      longDesc: "",
      icon: Users,
      img: imgMedicalTreatment
    },
    {
      id: "05",
      title: lang === "EN" ? "Settlements\n(C&R and Stips)" : "Acuerdos\n(C&R y Estipulaciones)",
      description: lang === "EN"
        ? "Negotiating top-dollar Compromise & Release lump-sum cash payouts and lifetime medical care agreements."
        : "Negociación de pagos máximos en efectivo (C&R) o convenios con cobertura médica abierta de por vida.",
      longDesc: "",
      icon: ClipboardList,
      img: imgWorkersComp
    }
  ];

  // Core navigation state between home and detailed pages
  const [currentView, setCurrentView] = useState<"home" | "criminal-defense">("home");

  // Auto-playing testimonials
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Dynamic Localized Process Timeline Steps
  const steps: ProcessStep[] = [
    {
      number: "01",
      title: lang === "EN" ? "Free Case Review" : "Consulta Gratis",
      duration: lang === "EN" ? "Hour 0 - 24" : "Hora 0 - 24",
      description: lang === "EN"
        ? "Immediate evaluation under strict attorney-client privilege."
        : "Evaluación inmediata bajo confidencialidad y secreto profesional.",
      details: lang === "EN"
        ? "We review the workplace accident, assess employer liability, examine the 90-day denial window, and advise you before adjusters take recorded statements."
        : "Revisamos el accidente laboral, evaluamos la responsabilidad del empleador y le asesoramos antes de que las aseguradoras tomen declaraciones grabadas."
    },
    {
      number: "02",
      title: lang === "EN" ? "Claim & Medical Action" : "Reclamo y Atención Médica",
      duration: lang === "EN" ? "Week 1 - 2" : "Semana 1 - 2",
      description: lang === "EN"
        ? "Formal DWC-1 filing and top MPN medical network assignment."
        : "Presentación del Formulario DWC-1 y derivación a la red médica MPN.",
      details: lang === "EN"
        ? "We file the Application for Adjudication with the local WCAB district office and secure prompt access to qualified orthopedic and occupational physicians."
        : "Radicamos la Solicitud de Adjudicación ante la oficina de la WCAB y aseguramos citas con cirujanos y médicos acreditados."
    },
    {
      number: "03",
      title: lang === "EN" ? "Overturn Denials" : "Apelación de Denegaciones",
      duration: lang === "EN" ? "Month 2 - 3" : "Mes 2 - 3",
      description: lang === "EN"
        ? "Challenging delay tactics and demanding expedited WCAB hearings."
        : "Impugnación de dilaciones y solicitud de audiencias urgentes.",
      details: lang === "EN"
        ? "If the insurance company denies your claim or refuses authorization for surgery, we immediately file a Declaration of Readiness to Proceed for an expedited hearing."
        : "Si la aseguradora deniega su tratamiento o pagos temporales, solicitamos de inmediato una audiencia de emergencia ante el juez de la WCAB."
    },
    {
      number: "04",
      title: lang === "EN" ? "QME & Rating Strategy" : "Evaluación QME y Calificación",
      duration: lang === "EN" ? "Month 4 - 6" : "Mes 4 - 6",
      description: lang === "EN"
        ? "Panel QME selection to establish true Whole Person Impairment."
        : "Selección estratégica de médicos evaluadores neutrales (QME).",
      details: lang === "EN"
        ? "We strike biased doctors from the state panel list and cross-examine evaluators with comprehensive medical records to maximize your disability percentage."
        : "Depuramos la lista estatal de médicos para seleccionar especialistas imparciales y maximizar el porcentaje de indemnización por secuelas."
    },
    {
      number: "05",
      title: lang === "EN" ? "Maximum Settlement" : "Acuerdo Máximo o Juicio",
      duration: lang === "EN" ? "Resolution" : "Resolución",
      description: lang === "EN"
        ? "Aggressive negotiation of lump-sum Compromise & Release awards."
        : "Negociación de acuerdos en suma global (C&R) o juicio formal.",
      details: lang === "EN"
        ? "We fight for top-dollar payouts covering past wages, permanent disability, and future medical buyouts, or take your case to trial before the WCAB judge."
        : "Luchamos por acuerdos de máximo valor que cubran salarios perdidos, incapacidad permanente y fondos médicos futuros, o vamos a juicio ante la WCAB."
    }
  ];

  // Dynamic Localized Insights Articles
  const insights: Article[] = [
    {
      id: "insight-1",
      date: "JUN 2026",
      readTime: lang === "EN" ? "5 MIN READ" : "5 MIN DE LECTURA",
      title: lang === "EN"
        ? "How to Overturn a Denied Workers' Compensation Claim in California"
        : "Cómo apelar y revocar un reclamo de compensación denegado en California",
      category: lang === "EN" ? "DENIED CLAIMS" : "RECLAMOS DENEGADOS",
      imageUrl: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "insight-2",
      date: "MAY 2026",
      readTime: lang === "EN" ? "7 MIN READ" : "7 MIN DE LECTURA",
      title: lang === "EN"
        ? "Choosing Between Compromise & Release (C&R) vs. Stipulations with Request for Award"
        : "Diferencias clave entre Liquidación en Suma Global (C&R) y Estipulaciones con Solicitud de Premio",
      category: lang === "EN" ? "SETTLEMENT STRATEGY" : "ESTRATEGIA DE ACUERDO",
      imageUrl: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "insight-3",
      date: "APR 2026",
      readTime: lang === "EN" ? "6 MIN READ" : "6 MIN DE LECTURA",
      title: lang === "EN"
        ? "The QME Process in California: Why Panel Evaluator Selection Decides Your Case"
        : "El proceso del Médico Evaluador Neutral (QME): por qué su elección determina el resultado",
      category: lang === "EN" ? "MEDICAL RATINGS" : "CALIFICACIONES MÉDICAS",
      imageUrl: imgQme
    }
  ];

  const scrollToAnchor = (elementId: string) => {
    if (currentView !== "home") {
      setCurrentView("home");
      setTimeout(() => {
        const el = document.getElementById(elementId);
        if (el) {
          const offset = elementId === "hero-section" ? 0 : 112;
          const bodyRect = document.body.getBoundingClientRect().top;
          const elementRect = el.getBoundingClientRect().top;
          const elementPosition = elementRect - bodyRect;
          const offsetPosition = elementPosition - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      }, 50);
    } else {
      const el = document.getElementById(elementId);
      if (el) {
        const offset = elementId === "hero-section" ? 0 : 112;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = el.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="bg-[#050608] text-[#F5F5F5] font-sans min-h-screen overflow-x-hidden selection:bg-[#D4AF37]/30 selection:text-white">
      
      {/* 1. FIXED GLASS HEADER (Minimalist Editorial Overlay) */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#050608]/75 backdrop-blur-md border-b border-white/[0.04] transition-all duration-300">
        <div id="navigation-bar" className="max-w-[1440px] mx-auto px-6 lg:px-12 h-24 flex items-center justify-between">
          
          {/* Logo Brand Block representing MICHAEL PARTOVI, ESQ. */}
          <div 
            onClick={() => scrollToAnchor("hero-section")} 
            className="flex items-center gap-3.5 select-none cursor-pointer group"
          >
            <BrandLogo className="w-10 h-10 shrink-0" />
            <div className="flex flex-col">
              <span className="font-display text-base md:text-[1.12rem] tracking-[0.2em] font-medium text-[#F5F5F5] uppercase leading-none transition-colors group-hover:text-[#D4AF37]">
                {t.brandName}
              </span>
              <span className="block text-[8.5px] tracking-[0.25em] text-[#8B8B95] uppercase leading-none mt-1.5 font-sans">
                {t.brandSubtitle}
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10 text-xs tracking-[0.16em] text-white/80 font-sans uppercase">
            <button 
              onClick={() => scrollToAnchor("practice-section")} 
              className="hover:text-white transition-colors duration-300 relative py-1 cursor-pointer"
            >
              {t.practiceAreas}
            </button>
            <button 
              onClick={() => scrollToAnchor("philosophy-section")} 
              className="hover:text-white transition-colors duration-300 relative py-1 cursor-pointer"
            >
              {t.aboutUs}
            </button>
            <button 
              onClick={() => scrollToAnchor("insights-section")} 
              className="hover:text-white transition-colors duration-300 relative py-1 cursor-pointer"
            >
              {t.insights}
            </button>
            <button 
              onClick={() => scrollToAnchor("contact-section")}
              className="hover:text-white transition-colors duration-300 relative py-1 cursor-pointer"
            >
              {t.contact}
            </button>
          </nav>

          {/* Consultation Fast Way */}
          <div className="hidden md:flex items-center gap-5">
            {/* Elegant language switcher select button */}
            <button
              onClick={() => setLang(lang === "EN" ? "ES" : "EN")}
              className="px-3 py-1.5 border border-white/[0.08] hover:border-[#D4AF37]/45 hover:bg-white/5 font-mono text-[10px] tracking-widest text-white/60 hover:text-[#D4AF37] transition-all duration-300 cursor-pointer uppercase"
              aria-label="Toggle language between English and Spanish"
            >
              {lang === "EN" ? "HABLAMOS ESPAÑOL" : "ENGLISH"}
            </button>

            <a 
              href="tel:8185186288" 
              className="group inline-flex items-center gap-2 text-xs tracking-widest uppercase font-mono border border-white/[0.08] hover:border-[#D4AF37]/30 px-5 py-2.5 bg-white/5 hover:bg-[#D4AF37]/10 text-[#F5F5F5] transition-all duration-300 cursor-pointer"
            >
              <span>{t.secureBriefing}</span>
              <Phone className="w-3.5 h-3.5 text-[#D4AF37] group-hover:text-white transition-colors animate-pulse" />
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-white hover:text-[#D4AF37] transition-colors focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Overlay */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-24 left-0 right-0 bg-[#050608]/98 border-b border-white/[0.06] backdrop-blur-xl transition-[max-height] duration-300 ease-in-out">
            <div className="flex flex-col p-8 gap-6 text-sm tracking-[0.2em] uppercase font-mono text-[#8B8B95]">
              <button 
                onClick={() => {
                  scrollToAnchor("practice-section");
                  setIsMobileMenuOpen(false);
                }} 
                className="text-left py-2 border-b border-white/[0.02] hover:text-[#D4AF37] uppercase"
              >
                {t.practiceAreas}
              </button>
              <button 
                onClick={() => {
                  scrollToAnchor("philosophy-section");
                  setIsMobileMenuOpen(false);
                }} 
                className="text-left py-2 border-b border-white/[0.02] text-[#F5F5F5] hover:text-[#D4AF37] uppercase"
              >
                {t.aboutUs}
              </button>
              <button 
                onClick={() => {
                  scrollToAnchor("insights-section");
                  setIsMobileMenuOpen(false);
                }} 
                className="text-left py-2 border-b border-white/[0.02] hover:text-[#D4AF37] uppercase"
              >
                {t.insights}
              </button>
              <button 
                onClick={() => {
                  scrollToAnchor("contact-section");
                  setIsMobileMenuOpen(false);
                }} 
                className="text-left py-2 border-b border-white/[0.02] hover:text-[#D4AF37] uppercase"
              >
                {t.contact}
              </button>
              
              <div className="flex items-center gap-3 py-2 border-b border-white/[0.02]">
                <span className="text-xs">{t.languages}</span>
                <button
                  onClick={() => setLang("EN")}
                  className={`text-xs px-2 py-0.5 ${lang === "EN" ? "text-[#D4AF37]" : "text-white/40"}`}
                >
                  EN
                </button>
                <span className="text-white/20">/</span>
                <button
                  onClick={() => setLang("ES")}
                  className={`text-xs px-2 py-0.5 ${lang === "ES" ? "text-[#D4AF37]" : "text-white/40"}`}
                >
                  ES
                </button>
              </div>

              <a 
                href="tel:8185186288" 
                className="inline-flex items-center justify-between py-3 px-4 border border-[#D4AF37]/30 bg-[#D4AF37]/10 text-white rounded-none"
              >
                <span>{t.secureBriefing}</span>
                <Phone className="w-4 h-4 text-[#D4AF37] animate-pulse" />
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Main Core Space Wrapper */}
      {currentView === "home" ? (
        <>
          <main className="max-w-[1440px] mx-auto px-6 lg:px-12 pt-24">

        {/* =======================================
            SECTION 1 — HERO SECTION
            ======================================= */}
        <section 
          id="hero-section" 
          className="relative min-h-[70vh] lg:min-h-[80vh] flex items-center py-20 lg:py-28 opacity-0 translate-y-8 animate-fade-up overflow-hidden"
        >
          {/* Absolute Background Layer for Hero Video */}
          <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden select-none z-0">
            <video 
              src={heroVideo}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover grayscale-[10%] brightness-[0.9] contrast-[1.05] pointer-events-none"
              style={{
                maskImage: "linear-gradient(to right, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.5) 30%, rgba(0,0,0,0.85) 60%, rgba(0,0,0,1) 100%)",
                WebkitMaskImage: "linear-gradient(to right, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.5) 30%, rgba(0,0,0,0.85) 60%, rgba(0,0,0,1) 100%)"
              }}
            />
            <div className="absolute inset-0 bg-transparent pointer-events-none" />
          </div>

          {/* Hero Content Overlay */}
          <div className="relative z-10 w-full max-w-[800px] flex flex-col pt-8 lg:pt-0">

            <h1 className="font-extralight text-[2.6rem] md:text-[3.5rem] lg:text-[4.2rem] xl:text-[4.6rem] leading-[1.05] tracking-[-0.03em] mb-10 text-[#F5F5F5] font-sans whitespace-pre-line">
              {t.heroTitle}
            </h1>

            <p className="text-[#8B8B95] text-[15.5px] md:text-[17px] leading-[1.8] max-w-[500px] mb-12">
              {t.heroDesc}
            </p>

            {/* Exact CTA bar with arrow positioned AFTER "Our Approach" button */}
            <div className="flex items-center gap-12 mt-4">
              <button 
                onClick={() => scrollToAnchor("practice-section")}
                className="group inline-flex items-center gap-3 text-[15px] tracking-widest font-light text-white relative py-2 cursor-pointer uppercase font-sans shrink-0"
              >
                <span className="relative pb-1">
                  {t.ourApproach}
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#D4AF37] group-hover:bg-white transition-colors duration-300"></span>
                </span>
                <svg className="w-4 h-4 text-white group-hover:translate-x-1.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </button>

              {/* Circled Down Arrow on the right */}
              <button 
                onClick={() => scrollToAnchor("practice-section")}
                className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:border-white transition-all duration-300 group/down cursor-pointer shrink-0"
                aria-label={t.scrollingPractice}
              >
                <svg className="w-5 h-5 text-white/50 group-hover/down:text-white group-hover/down:translate-y-0.5 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </button>
            </div>
          </div>
        </section>

        {/* =======================================
            SECTION 3 — RESULTS NUMBERS
            ======================================= */}
        <section 
          id="results-section" 
          className="border-t border-white/[0.06] py-0 opacity-0 translate-y-8 animate-fade-up overflow-hidden mr-[-24px] lg:mr-[-48px] scroll-mt-24 md:scroll-mt-28"
        >
          <div className="grid lg:grid-cols-[1fr_2fr] items-stretch gap-0">
            
            {/* First Main Heading Column (Left Column) */}
            <div className="py-12 lg:py-16 pr-8 flex flex-col items-start justify-center">
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <span className="w-1.5 h-1.5 bg-[#D4AF37]"></span>
                  <span className="text-[#D4AF37] font-mono text-[11px] uppercase tracking-[0.25em] block">
                    {t.provenResults}
                  </span>
                </div>
                <h2 className="text-[2.2rem] md:text-[3rem] font-light leading-[1.15] tracking-tight text-[#F5F5F5] font-sans whitespace-pre-line mb-10">
                  {t.resultsHeadline}
                </h2>
              </div>
              
              <button 
                onClick={() => scrollToAnchor("contact-section")}
                className="group inline-flex items-center gap-3 text-[14px] text-white/50 hover:text-white transition-colors duration-300 font-sans tracking-wide cursor-pointer mt-6"
              >
                <span className="relative pb-1">
                  {t.viewCaseResults}
                  <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-white/20 group-hover:bg-[#D4AF37] transition-colors duration-300"></span>
                </span>
                <span className="text-white group-hover:translate-x-1.5 transition-transform duration-300">→</span>
              </button>
            </div>

            {/* Middle Stats Columns */}
            <div className="grid grid-cols-2 md:grid-cols-4 border-l border-white/[0.06] md:divide-x md:divide-white/[0.06] h-full items-center">
              
              {/* Stat 1 */}
              <div className="px-5 lg:px-8 py-10 md:py-16 flex flex-col justify-center h-full">
                <div className="text-2xl sm:text-3xl md:text-2xl lg:text-[1.8rem] xl:text-[2.2rem] font-light tracking-[-0.03em] text-white whitespace-nowrap">
                  $150M+
                </div>
                <p className="text-white/50 text-[13px] md:text-[14px] leading-relaxed font-sans font-light mt-3 whitespace-pre-line">
                  {t.recoveredClients}
                </p>
              </div>

              {/* Stat 2 */}
              <div className="px-5 lg:px-8 py-10 md:py-16 flex flex-col justify-center h-full">
                <div className="text-2xl sm:text-3xl md:text-2xl lg:text-[1.8rem] xl:text-[2.2rem] font-light tracking-[-0.03em] text-white whitespace-nowrap">
                  2,500+
                </div>
                <p className="text-white/50 text-[13px] md:text-[14px] leading-relaxed font-sans font-light mt-3 whitespace-pre-line">
                  {t.successfulDismissals}
                </p>
              </div>

              {/* Stat 3 */}
              <div className="px-5 lg:px-8 py-10 md:py-16 flex flex-col justify-center h-full">
                <div className="text-2xl sm:text-3xl md:text-2xl lg:text-[1.8rem] xl:text-[2.2rem] font-light tracking-[-0.03em] text-white whitespace-nowrap">
                  100%
                </div>
                <p className="text-white/50 text-[13px] md:text-[14px] leading-relaxed font-sans font-light mt-3 whitespace-pre-line">
                  {t.hoursTrial}
                </p>
              </div>

              {/* Stat 4 */}
              <div className="px-5 lg:px-8 py-10 md:py-16 flex flex-col justify-center h-full">
                <div className="text-2xl sm:text-3xl md:text-2xl lg:text-[1.8rem] xl:text-[2.2rem] font-light tracking-[-0.03em] text-white whitespace-nowrap">
                  Statewide
                </div>
                <p className="text-white/50 text-[13px] md:text-[14px] leading-relaxed font-sans font-light mt-3 whitespace-pre-line">
                  {t.satisfiedServed}
                </p>
              </div>

            </div>

          </div>
        </section>

        {/* =======================================
            SECTION 4 — ATTORNEY PROFILE (MICHAEL PARTOVI, ESQ.)
            ======================================= */}
        <section 
          id="philosophy-section" 
          className="border-t border-white/[0.06] py-24 lg:py-32 opacity-0 translate-y-8 animate-fade-up scroll-mt-24 md:scroll-mt-28"
        >
          <div className="grid lg:grid-cols-[1.2fr_1.6fr_1fr] md:grid-cols-2 lg:gap-16 md:gap-12 gap-8 items-stretch">
            
            {/* Left Column: Portrait of Attorney Michael Partovi */}
            <div className="relative group overflow-hidden border border-white/[0.06] h-full min-h-[380px] lg:min-h-[480px]">
              <div className="absolute inset-0 bg-[#050608]/20 z-10 pointer-events-none" />
              <img 
                src={attorneyPortrait} 
                alt="Attorney Michael Partovi, Esq., California Workers' Compensation Attorney" 
                className="w-full h-full object-cover object-top brightness-95 transition-all duration-[1200ms] group-hover:scale-[1.02]"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Middle Column: Attorney Bio Narrative */}
            <div className="flex flex-col justify-between h-full py-2">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-1.5 h-1.5 bg-[#D4AF37]"></span>
                  <p className="uppercase tracking-[0.25em] text-[11px] text-[#D4AF37] font-mono font-medium">
                    {t.foundingAttorney}
                  </p>
                </div>
                <h3 className="text-[2.6rem] sm:text-[3rem] lg:text-[3.2rem] leading-[1.1] font-light text-[#F5F5F5] tracking-tight font-sans">
                  {t.foundingTitle}
                </h3>
                <span className="text-white/45 text-xs font-mono tracking-widest uppercase block mt-1.5 mb-6">
                  {lang === "EN" ? "Licensed California Workers' Compensation Attorney" : "Abogado Licenciado en Compensación de Trabajadores de California"}
                </span>
                
                <div className="mt-8 space-y-6 text-[#8B8B95] text-[15px] leading-[1.75] max-w-[480px]">
                  <p>
                    {t.bioPara1}
                  </p>
                  <p>
                    {t.bioPara2}
                  </p>
                  <p>
                    {lang === "EN"
                      ? "Based in California, Attorney Partovi represents injured workers across the state—appearing regularly before all local Workers' Compensation Appeals Board (WCAB) district offices with zero upfront costs."
                      : "Con sede en California, el abogado Partovi representa a trabajadores lesionados en todo el estado, litigando regularmente ante todas las oficinas distritales de la Junta de Apelaciones de Compensación (WCAB) sin costos iniciales."}
                  </p>
                </div>
              </div>

              <div className="mt-10">
                <button 
                  onClick={() => scrollToAnchor("contact-section")}
                  className="group inline-flex items-center gap-3 text-xs tracking-wider font-mono text-white/50 hover:text-white transition-all cursor-pointer uppercase"
                >
                  <span>{t.requestConsultation}</span>
                  <span className="text-[#D4AF37] group-hover:translate-x-1.5 transition-transform duration-300">→</span>
                </button>
              </div>
            </div>

            {/* Right Column: Quotes & Stance */}
            <div className="border-t md:border-t-0 md:border-l border-white/[0.08] lg:pl-12 md:pl-8 pt-8 md:pt-0 flex flex-col justify-center h-full min-h-[250px] lg:col-span-1 md:col-span-2">
              <span className="text-[5.5rem] text-[#D4AF37] font-serif leading-none block select-none pointer-events-none -mt-4 opacity-75">
                “
              </span>
              <p className="text-[1.35rem] lg:text-[1.45rem] leading-[1.5] font-extralight text-[#F5F5F5] -mt-4 italic">
                {t.quote}
              </p>
              
              <div className="mt-8 pt-6 border-t border-white/[0.04] text-[11px] font-mono tracking-widest text-[#8B8B95] uppercase">
                {lang === "EN" ? "— CALIFORNIA WORKERS' COMP ADVOCACY" : "— DEFENSA LABORAL EN CALIFORNIA"}
              </div>
            </div>

          </div>
        </section>

        {/* =======================================
            SECTION 5 — PRACTICE AREAS BENTO GRID
            ======================================= */}
        <section 
          id="practice-section" 
          className="border-t border-white/[0.06] py-24 lg:py-32 opacity-0 translate-y-8 animate-fade-up scroll-mt-24 md:scroll-mt-28"
        >
          <div>
            <div className="max-w-[700px] mb-16 md:mb-20">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-1.5 h-1.5 bg-[#D4AF37]"></span>
                <span className="text-[#D4AF37] font-mono text-[11px] uppercase tracking-[0.25em] block">
                  {t.practiceAreas}
                </span>
              </div>
              <h2 className="text-[2.2rem] md:text-[3rem] lg:text-[4rem] font-light leading-[1.1] tracking-tight text-[#F5F5F5] font-sans mb-8">
                {lang === "EN" ? "Focused on injured workers across California." : "Dedicados a los trabajadores en California."}
              </h2>
              <p className="text-[#8B8B95] text-sm md:text-[15px] font-sans font-light leading-relaxed max-w-[600px]">
                {lang === "EN" 
                  ? "We represent injured employees against insurance companies and employer defense firms with deep legal experience and relentless advocacy."
                  : "Representamos a empleados lesionados frente a las compañías de seguros con profunda experiencia y defensa implacable."}
              </p>
            </div>

            {/* Custom 5 column grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-6">
              {practiceAreas.map((area) => {
                const IconComponent = area.icon;
                return (
                  <div 
                    key={area.id} 
                    onClick={() => {
                      setCurrentView("criminal-defense");
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className="group relative flex flex-col h-[460px] border border-white/[0.06] overflow-hidden bg-[#0A0C10] cursor-pointer rounded-md transition-all duration-300 hover:border-[#D4AF37]/30 hover:shadow-lg hover:shadow-[#D4AF37]/5"
                  >
                    {/* Top Image */}
                    <div className="absolute top-0 left-0 w-full h-[45%] overflow-hidden z-0">
                      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0C10]/10 via-[#0A0C10]/50 to-[#0A0C10] z-10" />
                      <img 
                        src={area.img} 
                        alt={area.id}
                        className="w-full h-full object-cover grayscale brightness-[0.6] group-hover:scale-105 group-hover:opacity-60 transition-all duration-700" 
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    
                    {/* Content */}
                    <div className="relative z-20 flex flex-col flex-grow p-6 pt-auto mt-[40%]">
                      <div className="flex items-center gap-3 mb-6">
                        <span className="text-[#D4AF37] font-mono text-[13px]">{area.id}</span>
                        <div className="w-6 h-[1.5px] bg-[#1a1a2e]"></div>
                      </div>
                      
                      <div className="mb-4">
                        <IconComponent className="w-8 h-8 text-white/90 stroke-[1.2] group-hover:text-[#D4AF37] transition-colors" />
                      </div>
                      
                      <h3 className="text-[1.15rem] font-light text-white mb-4 leading-snug whitespace-pre-line font-sans">
                        {area.title}
                      </h3>
                      
                      <p className="text-[#8B8B95] text-[13px] font-sans font-light leading-[1.6] mb-auto pr-2">
                        {area.description}
                      </p>
                      
                      <div className="flex items-center gap-2 mt-8 text-white/80 group-hover:text-white transition-colors pb-2">
                        <span className="text-[13.5px] border-b border-white/20 pb-[1px] font-light font-sans tracking-wide">
                          {lang === "EN" ? "Learn More" : "Más Información"}
                        </span>
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-16 flex justify-center">
              <button 
                onClick={() => {
                  setCurrentView("criminal-defense");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="group inline-flex items-center gap-3 text-[14px] text-white/50 hover:text-white transition-colors duration-300 font-sans tracking-wide cursor-pointer"
              >
                <span className="relative pb-1">
                  {lang === "EN" ? "View all practice areas" : "Ver todas las áreas de práctica"}
                  <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-white/20 group-hover:bg-[#D4AF37] transition-colors duration-300"></span>
                </span>
                <span className="text-white group-hover:translate-x-1.5 transition-transform duration-300">→</span>
              </button>
            </div>
          </div>
        </section>

      </main>

      {/* =======================================
          SECTION 5 — COLORFUL CTA
          ======================================= */}
      <section 
        className="relative w-full h-[650px] lg:h-[800px] overflow-hidden opacity-0 translate-y-8 animate-fade-up bg-[#050608]"
      >
        <div className="absolute inset-0 w-full h-full z-0">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80" 
            alt="Abstract modern architecture"
            className="w-full h-full object-cover object-center grayscale opacity-[0.95]"
            style={{ filter: 'brightness(1.2) contrast(1.05)' }}
          />
          <div className="absolute inset-x-0 top-0 bg-gradient-to-b from-[#050608] via-[#050608]/80 to-transparent h-48 z-10" />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#050608] via-[#050608]/80 to-transparent h-48 z-10" />
          <div className="absolute inset-0 bg-[#050608]/50 z-10" />
        </div>

        <div className="relative z-20 max-w-[1440px] mx-auto px-6 lg:px-12 h-full flex flex-col justify-center">
          <div className="max-w-[850px]">
            <h2 className="text-[3.2rem] md:text-[4.5rem] lg:text-[5.4rem] xl:text-[6.2rem] font-light leading-[1.05] tracking-[-0.03em] font-sans text-[#F5F5F5]">
              {t.ctaHeadline1}<br />
              <span className="text-[#D4AF37]">{t.ctaHeadline2}{t.ctaHeadline3}</span>
            </h2>
          </div>
        </div>
      </section>

      <main className="max-w-[1440px] mx-auto px-6 lg:px-12">

        {/* =======================================
            SECTION 6 — HOW WE WORK
            ======================================= */}
        <section 
          id="how-we-work-section" 
          className="relative py-28 lg:py-36 opacity-0 translate-y-8 animate-fade-up scroll-mt-24 md:scroll-mt-28 bg-[#050608] overflow-hidden border-t border-white/[0.06]"
        >
          <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center z-0">
            <div className="w-[1000px] h-[600px] bg-[#D4AF37]/5 blur-[120px] rounded-full mix-blend-screen"></div>
            
            <svg className="absolute bottom-0 left-0 w-full opacity-20" viewBox="0 0 1440 320" preserveAspectRatio="none">
              <path fill="none" stroke="#D4AF37" strokeWidth="0.5" strokeOpacity="0.3" d="M0,160L80,170.7C160,181,320,203,480,213.3C640,224,800,224,960,208C1120,192,1280,160,1360,144L1440,128" />
              <path fill="none" stroke="#D4AF37" strokeWidth="0.5" strokeOpacity="0.2" d="M0,224L80,218.7C160,213,320,203,480,202.7C640,203,800,213,960,229.3C1120,245,1280,267,1360,277.3L1440,288" />
              <path fill="none" stroke="#D4AF37" strokeWidth="0.5" strokeOpacity="0.1" d="M0,288L80,282.7C160,277,320,267,480,240C640,213,800,171,960,154.7C1120,139,1280,149,1360,154.7L1440,160" />
            </svg>
          </div>
          
          <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-12 flex flex-col items-center">
            
            <div className="flex items-center gap-3 mb-6">
              <span className="w-1.5 h-1.5 bg-[#D4AF37]"></span>
              <span className="text-[#D4AF37] font-mono text-[11px] uppercase tracking-[0.25em] block">
                {t.howWeWork}
              </span>
            </div>

            <h2 className="text-[2.2rem] md:text-[3rem] lg:text-[4rem] font-light leading-[1.1] tracking-tight text-[#F5F5F5] font-sans text-center mb-6">
              {t.howWeWorkTitle}
              <br />
              {t.howWeWorkSubtitle.split(" ")[0]} {t.howWeWorkSubtitle.split(" ")[1]} <span className="text-white italic">{t.howWeWorkSubtitle.split(" ").slice(2).join(" ")}</span>
            </h2>

            <p className="text-[#8B8B95] text-[15px] md:text-[16px] font-sans font-light leading-relaxed text-center max-w-[600px] mb-20 whitespace-pre-line">
              {t.howWeWorkDesc}
            </p>

            {/* Timeline UI */}
            <div className="w-full relative flex flex-col pt-10">
              
              <div className="hidden lg:block absolute top-[82px] left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent z-0"></div>

              <div className="hidden lg:flex absolute top-[80.5px] w-full justify-around px-8 z-0">
                 <div className="w-1 h-1 bg-[#D4AF37]/50 rounded-full"></div>
                 <div className="w-1 h-1 bg-[#D4AF37]/50 rounded-full"></div>
                 <div className="w-1 h-1 bg-[#D4AF37]/50 rounded-full"></div>
                 <div className="w-1 h-1 bg-[#D4AF37]/50 rounded-full"></div>
              </div>

              {/* 5 Steps Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12 lg:gap-6 relative z-10">
                
                {[
                  { num: t.how1Number, title: t.how1Title, desc: t.how1Desc, icon: MessageCircle },
                  { num: t.how2Number, title: t.how2Title, desc: t.how2Desc, icon: Search },
                  { num: t.how3Number, title: t.how3Title, desc: t.how3Desc, icon: ClipboardList },
                  { num: t.how4Number, title: t.how4Title, desc: t.how4Desc, icon: Shield },
                  { num: t.how5Number, title: t.how5Title, desc: t.how5Desc, icon: Award }
                ].map((step, idx) => {
                  const Icon = step.icon;
                  return (
                    <div key={idx} className="flex flex-col items-center text-center group cursor-pointer relative">
                      <div className="w-[84px] h-[84px] rounded-full border border-[#D4AF37]/30 bg-[#0A0C10] flex items-center justify-center mb-8 relative
                        group-hover:border-[#D4AF37]/50 group-hover:-translate-y-2 transition-all duration-500
                        shadow-[0_0_20px_rgba(212,175,55,0.1)] group-hover:shadow-[0_0_30px_rgba(212,175,55,0.25)]
                      ">
                        <div className="absolute inset-2 border border-[#D4AF37]/40 rounded-full group-hover:rotate-45 transition-all duration-700"></div>
                        <Icon strokeWidth={1.5} className="w-7 h-7 text-[#D4AF37] group-hover:scale-110 group-hover:text-white transition-all duration-500 relative z-10" />
                      </div>

                      <div className="text-[#D4AF37] font-mono text-[14px] tracking-widest mb-4">
                        {step.num}
                        <div className="w-6 h-[1px] bg-[#D4AF37] mx-auto mt-2"></div>
                      </div>

                      <h3 className="text-xl md:text-2xl font-light text-[#F5F5F5] mb-4 font-sans">
                        {step.title}
                      </h3>

                      <p className="text-[#8B8B95] text-[13.5px] lg:text-[14px] font-sans font-light leading-[1.65] whitespace-pre-line max-w-[200px]">
                        {step.desc}
                      </p>
                    </div>
                  );
                })}

              </div>
            </div>

            <div className="mt-28 flex justify-center">
              <button 
                onClick={() => scrollToAnchor("philosophy-section")}
                className="group inline-flex items-center gap-3 text-[14px] text-white/50 hover:text-white transition-colors duration-300 font-sans tracking-wide cursor-pointer"
              >
                <span className="relative pb-1">
                  {t.howWeWorkCTA}
                  <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-white/20 group-hover:bg-[#D4AF37] transition-colors duration-300"></span>
                </span>
                <span className="text-white group-hover:translate-x-1.5 transition-transform duration-300">→</span>
              </button>
            </div>

          </div>
        </section>

        {/* =======================================
            SECTION 6.5 — TESTIMONIALS
            ======================================= */}
        <section 
          id="testimonials-section" 
          className="border-t border-white/[0.06] py-24 lg:py-32 opacity-0 translate-y-8 animate-fade-up scroll-mt-24 md:scroll-mt-28 bg-[#050608]"
        >
          <div className="max-w-[1400px] mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
              
              {/* Left Side */}
              <div className="flex flex-col lg:w-[40%] shrink-0">
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-1.5 h-1.5 bg-[#D4AF37]"></span>
                  <span className="text-[#D4AF37] font-mono text-[11px] uppercase tracking-[0.25em] block">
                    {t.testimonialsLabel}
                  </span>
                </div>
                
                <h2 className="text-[2.2rem] md:text-[3rem] lg:text-[4rem] font-light leading-[1.1] tracking-tight text-[#F5F5F5] font-sans mb-8">
                  {t.testiTitle1}
                  <br />
                  {t.testiTitle2.split(" ")[0]} {t.testiTitle2.split(" ")[1]} <span className="text-white italic">{t.testiTitle2.split(" ").slice(2).join(" ")}</span>
                </h2>
                
                <div className="w-12 h-[1px] bg-[#1a1a2e] mb-8"></div>
                
                <p className="text-[#8B8B95] text-[15px] md:text-[16px] font-sans font-light leading-relaxed whitespace-pre-line mb-12">
                  {t.testiDesc}
                </p>

                <button 
                  onClick={() => scrollToAnchor("contact-section")}
                  className="group inline-flex items-center gap-3 text-[14px] text-white/50 hover:text-white transition-colors duration-300 font-sans tracking-wide cursor-pointer"
                >
                  <span className="relative pb-1">
                    {t.testiViewAll}
                    <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-white/20 group-hover:bg-[#D4AF37] transition-colors duration-300"></span>
                  </span>
                  <span className="text-white group-hover:translate-x-1.5 transition-transform duration-300">→</span>
                </button>
              </div>

              {/* Right Side / Testimonial Box */}
              <div className="w-full lg:w-[60%]">
                <div className="relative border border-[#D4AF37]/20 bg-gradient-to-b from-[#11141A] to-[#0A0C10] shadow-[0_0_50px_rgba(212,175,55,0.05)] rounded-2xl p-8 md:p-12 lg:p-16 overflow-hidden">
                  
                  <div className="absolute top-0 right-0 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/60 to-transparent shadow-[0_0_30px_rgba(212,175,55,0.3)]"></div>
                  <div className="absolute top-0 right-[20%] w-[40%] h-[400px] bg-[#D4AF37]/5 blur-[100px] rounded-full pointer-events-none"></div>

                  <Quote className="w-10 h-10 text-[#D4AF37] mb-8" strokeWidth={1.5} />
                  
                  {[
                    {
                      quote: lang === "EN" 
                        ? "When my warehouse forklift accident happened, the insurance company denied my shoulder surgery and cut off my checks. Attorney Michael Partovi took over, appealed the denial at the WCAB, got me authorized with a top orthopedic surgeon, and won a life-changing settlement." 
                        : "Cuando ocurrió mi accidente con el montacargas en el almacén, el seguro me negó la cirugía de hombro. El abogado Michael Partovi tomó mi caso, apeló ante la WCAB, me autorizó con un cirujano destacado y ganó un acuerdo que cambió mi vida.",
                      author: "Carlos Gutierrez",
                      title: lang === "EN" ? "INJURED WAREHOUSE SPECIALIST" : "ESPECIALISTA DE ALMACÉN",
                      company: "Los Angeles / Inland Empire, CA",
                      img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80"
                    },
                    {
                      quote: lang === "EN" 
                        ? "Michael Partovi is an exceptional workers' compensation attorney. He answered every phone call, explained the complicated QME doctor evaluations, and fought fiercely against the defense lawyers. Compassionate advocacy and real results." 
                        : "Michael Partovi es un abogado excepcional. Respondió cada llamada, me explicó las evaluaciones médicas del QME y luchó sin descanso. Defensa compasiva y resultados reales.",
                      author: "Sandra Morales",
                      title: lang === "EN" ? "REGISTERED NURSE" : "ENFERMERA REGISTRADA",
                      company: "Glendale / San Fernando Valley, CA",
                      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80"
                    }
                  ].map((testi, idx) => (
                    <div 
                      key={idx} 
                      className={`transition-all duration-700 w-full ${activeTestimonial === idx ? 'opacity-100 translate-x-0 static' : 'opacity-0 translate-x-8 absolute inset-0 hidden'}`}
                    >
                      <p className="text-[#F5F5F5] text-lg md:text-xl lg:text-2xl font-light font-sans leading-[1.6] whitespace-pre-line mb-16">
                        {testi.quote}
                      </p>
                      
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-t border-white/[0.06] pt-10 gap-8">
                        <div className="flex items-center gap-5">
                          <img 
                            src={testi.img} 
                            alt={testi.author} 
                            className="w-16 h-16 rounded-full object-cover grayscale border border-white/[0.08]"
                            referrerPolicy="no-referrer"
                          />
                          <div>
                            <div className="text-[#F5F5F5] font-sans font-medium text-lg mb-1">{testi.author}</div>
                            <div className="text-[#D4AF37] font-mono text-[11px] uppercase tracking-widest leading-relaxed mb-1">
                              {testi.title}
                            </div>
                            <div className="text-[#8B8B95] font-sans text-[14px]">
                              {testi.company}
                            </div>
                          </div>
                        </div>

                        {/* Navigation */}
                        <div className="flex items-center gap-6">
                          <div className="flex gap-2 mr-2">
                            <button 
                              onClick={() => setActiveTestimonial(0)} 
                              className={`w-1.5 h-1.5 rounded-full transition-colors ${activeTestimonial === 0 ? 'bg-[#D4AF37]' : 'bg-white/20 hover:bg-white/40'}`}
                            />
                            <button 
                              onClick={() => setActiveTestimonial(1)} 
                              className={`w-1.5 h-1.5 rounded-full transition-colors ${activeTestimonial === 1 ? 'bg-[#D4AF37]' : 'bg-white/20 hover:bg-white/40'}`}
                            />
                          </div>

                          <div className="flex gap-3">
                            <button 
                              onClick={() => setActiveTestimonial(prev => prev === 0 ? 1 : 0)}
                              className="w-[42px] h-[42px] rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:text-white hover:border-white hover:bg-white/5 transition-all"
                            >
                              <ChevronLeft className="w-4 h-4" />
                            </button>
                            <button 
                              onClick={() => setActiveTestimonial(prev => prev === 1 ? 0 : 1)}
                              className="w-[42px] h-[42px] rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:text-white hover:border-white hover:bg-white/5 transition-all"
                            >
                              <ChevronRight className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Logo Strip (Bottom) */}
            <div className="mt-32 pt-16 border-t border-white/[0.06] flex flex-col items-center">
              <div className="w-full flex-wrap flex justify-center lg:justify-between items-center gap-8 md:gap-12 opacity-40 grayscale">
                
                <div className="flex items-center gap-3">
                  <div className="flex gap-[2px]">
                    <div className="w-[4px] h-[24px] bg-white"></div>
                    <div className="w-[4px] h-[16px] bg-white mt-auto"></div>
                    <div className="w-[4px] h-[20px] bg-white mt-auto"></div>
                  </div>
                  <span className="font-sans font-bold tracking-widest text-lg">STATE BAR</span>
                </div>
                
                <div className="w-[1px] h-8 bg-white/20 hidden lg:block"></div>

                <div className="flex items-center gap-3">
                  <div className="flex text-2xl font-bold italic tracking-tighter">WC•</div>
                  <span className="font-sans font-bold tracking-widest text-sm uppercase leading-tight">WCAB<br/>California</span>
                </div>

                <div className="w-[1px] h-8 bg-white/20 hidden lg:block"></div>

                <div className="flex items-center gap-3">
                  <div className="w-0 h-0 border-l-[12px] border-l-transparent border-b-[20px] border-b-white border-r-[12px] border-r-transparent"></div>
                  <span className="font-sans font-bold tracking-widest text-sm uppercase leading-tight">Labor<br/>Code</span>
                </div>

                <div className="w-[1px] h-8 bg-white/20 hidden lg:block"></div>

                <div className="flex items-center gap-3">
                  <span className="font-serif italic text-3xl">CA</span>
                  <span className="font-sans font-bold tracking-widest text-sm uppercase leading-tight">Workers<br/>Comp</span>
                </div>

                <div className="w-[1px] h-8 bg-white/20 hidden lg:block"></div>

                <div className="flex items-center gap-3">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L2 22H22L12 2Z" stroke="white" strokeWidth="2"/>
                    <path d="M12 8L6 20H18L12 8Z" fill="white"/>
                  </svg>
                  <span className="font-sans font-bold tracking-widest text-sm uppercase leading-tight">Appeals<br/>Board</span>
                </div>

              </div>

              <p className="text-[#8B8B95] text-sm font-sans mt-12 text-center">
                {lang === "EN" ? "Trusted representation for injured workers across all of California." : "Representación confiable para trabajadores lesionados en todo California."}
              </p>
            </div>
            
          </div>
        </section>

        {/* =======================================
            SECTION 7 — INSIGHTS (Articles)
            ======================================= */}
        <section 
          id="insights-section" 
          className="border-t border-white/[0.06] py-24 lg:py-32 opacity-0 translate-y-8 animate-fade-up scroll-mt-24 md:scroll-mt-28"
        >
          <div className="grid lg:grid-cols-[350px_1fr] gap-20 lg:gap-24">
            
            {/* Left Header Box */}
            <div className="flex flex-col pt-2 justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-1.5 h-1.5 bg-[#D4AF37]"></span>
                  <p className="uppercase tracking-[0.2em] text-[11px] text-[#D4AF37] font-mono font-medium">
                    {t.scholarlyInfluence}
                  </p>
                </div>
                <h3 className="text-[3rem] lg:text-[3.5rem] font-light leading-none tracking-tight text-[#F5F5F5]">
                  {lang === "EN" ? (
                    <>Stay informed.<br />Protect your rights.</>
                  ) : (
                    <>Manténgase informado.<br />Proteja sus derechos.</>
                  )}
                </h3>
                <p className="text-[#8B8B95] text-[15px] leading-relaxed mt-8 max-w-[280px]">
                  {lang === "EN" 
                    ? "In-depth guides, legal breakdowns, and vital context concerning California Workers' Compensation law and WCAB litigation."
                    : "Guías detalladas, análisis jurídicos y contexto vital sobre el derecho de compensación laboral en California y litigios ante la WCAB."}
                </p>
              </div>

              <div className="hidden lg:flex items-center gap-3 p-4 border border-white/[0.04] mt-6">
                <Globe className="w-5 h-5 text-[#D4AF37]" />
                <span className="text-[10px] font-mono tracking-widest text-[#8B8B95] uppercase">{t.readGlobally}</span>
              </div>
            </div>

            {/* Right: article cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
              {insights.map((art) => (
                <article 
                  key={art.id}
                  className="group overflow-hidden cursor-pointer pointer-events-auto border border-white/[0.04] p-4 bg-white/[0.005] hover:border-white/[0.1] hover:bg-white/[0.02] transition-all duration-500"
                >
                  <div className="overflow-hidden aspect-[16/10] relative max-w-full border-b border-white/[0.04]">
                    <div className="absolute inset-0 bg-[#050608]/40 z-10 group-hover:bg-transparent transition-all duration-500" />
                    
                    <div className="absolute top-4 left-4 z-20 bg-[#050608]/90 py-1.5 px-3 border border-white/[0.08] font-mono text-[9px] tracking-widest text-[#D4AF37] uppercase">
                      {art.category}
                    </div>

                    <img 
                      src={art.imageUrl} 
                      alt={art.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  <div className="pt-6 pb-2">
                    <div className="flex items-center justify-between text-white/30 uppercase tracking-widest text-[9.5px] font-mono mb-3">
                      <span>{art.date}</span>
                      <span className="w-1 h-1 bg-white/25 rounded-full inline-block"></span>
                      <span>{art.readTime}</span>
                    </div>

                    <h4 className="text-lg lg:text-xl font-light text-[#F5F5F5] group-hover:text-[#D4AF37] transition-colors duration-300 leading-snug line-clamp-2">
                      {art.title}
                    </h4>

                    <div className="mt-6 flex items-center justify-between text-xs font-mono tracking-wider uppercase text-white/30 pt-4 border-t border-white/[0.04] group-hover:text-white transition-colors duration-300">
                      <span>{t.readArticle}</span>
                      <ChevronRight className="w-4 h-4 translate-x-0 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </article>
              ))}
            </div>

          </div>
        </section>

        {/* =======================================
            SECTION 7.5 — FAQ SECTION
            ======================================= */}
        <section 
          id="faq-section" 
          className="border-t border-white/[0.06] py-24 lg:py-32 opacity-0 translate-y-8 animate-fade-up scroll-mt-24 md:scroll-mt-28"
        >
          <div className="grid lg:grid-cols-[1.1fr_1.9fr] gap-12 lg:gap-24 items-start">
            
            <div className="flex flex-col pr-0 lg:pr-8">
              <div className="flex items-center gap-3 mb-5">
                <span className="w-1.5 h-1.5 bg-[#D4AF37]"></span>
                <span className="text-[#D4AF37] font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.25em] block">
                  {lang === "EN" ? "FAQ" : "PREGUNTAS FRECUENTES"}
                </span>
              </div>
              <h2 className="text-4xl md:text-[2.8rem] lg:text-[3.2rem] font-light leading-[1.1] tracking-tight text-white mb-6 font-sans">
                {lang === "EN" ? (
                  <>Frequently<br />asked<br />questions.</>
                ) : (
                  <>Preguntas<br />frecuentes<br />laborales.</>
                )}
              </h2>
              <p className="text-[#8B8B95] text-sm md:text-[15px] font-sans font-light leading-relaxed max-w-[280px]">
                {lang === "EN" 
                  ? "Clarity is the first step. Here are answers to help you move forward with confidence."
                  : "La claridad es el primer paso. Aquí tiene respuestas para avanzar con confianza."}
              </p>
            </div>

            <div className="border-t border-white/[0.06] divide-y divide-white/[0.06] border-b">
              {faqItems.map((item, index) => {
                const isOpen = activeFaqIndex === index;
                return (
                  <div key={item.id} className="group py-8 lg:py-10 first:pt-4 last:pb-4">
                    <div 
                      onClick={() => setActiveFaqIndex(isOpen ? null : index)}
                      className="grid grid-cols-[auto_1fr_auto] gap-6 md:gap-8 items-start cursor-pointer select-none"
                    >
                      <span className={`text-2xl md:text-3xl font-light font-mono tracking-tight transition-colors duration-300 mt-0.5 select-none ${isOpen ? 'text-[#D4AF37]' : 'text-white/20 group-hover:text-white/50'}`}>
                        {item.id}
                      </span>

                      <div className="border-l border-white/[0.08] lg:border-white/[0.06] pl-6 md:pl-10 ml-2 md:ml-4 flex-1">
                        <h3 className={`text-lg md:text-[1.32rem] font-sans font-light tracking-wide leading-snug transition-colors duration-300 ${isOpen ? 'text-[#D4AF37]' : 'text-white group-hover:text-[#E5C365]'}`}>
                          {lang === "EN" ? item.question.EN : item.question.ES}
                        </h3>

                        <div 
                          className={`grid transition-all duration-300 ease-in-out overflow-hidden ${
                            isOpen ? "grid-rows-[1fr] opacity-100 mt-4 h-auto" : "grid-rows-[0fr] opacity-0 h-0"
                          }`}
                        >
                          <div className="overflow-hidden">
                            <p className="text-[#8B8B95] text-sm md:text-[15px] font-sans font-light leading-relaxed max-w-2xl">
                              {lang === "EN" ? item.answer.EN : item.answer.ES}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-center mt-1">
                        <ArrowRight className={`w-5 h-5 transition-all duration-300 ${isOpen ? 'rotate-90 text-[#D4AF37]' : 'text-white/30 group-hover:text-white/60 group-hover:translate-x-1'}`} />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </section>

      </main>
        </>
      ) : (
        <CriminalDefensePage 
          lang={lang} 
          setLang={setLang} 
          onBack={() => {
            setCurrentView("home");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          scrollToContact={() => {
            const el = document.getElementById("contact-section");
            if (el) {
              el.scrollIntoView({ behavior: "smooth" });
            }
          }}
        />
      )}

      {/* =======================================
          SECTION 8 — GET IN TOUCH
          ======================================= */}
      <section 
        id="contact-section" 
        className="relative py-32 lg:py-48 opacity-0 translate-y-8 animate-fade-up scroll-mt-24 md:scroll-mt-28 overflow-hidden w-full bg-[#060503]"
      >
        <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
           <img 
             src={contactBg}
             alt="Contact section background"
             className="absolute inset-0 w-full h-full object-cover object-center opacity-95"
           />
           <div className="absolute inset-0 bg-black/35"></div>
           <div className="absolute inset-x-0 top-0 bg-gradient-to-b from-[#050608] via-[#050608]/70 to-transparent h-56 z-10"></div>
           <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#020304] via-[#020304]/70 to-transparent h-56 z-10"></div>
        </div>

        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
           <div className="flex-1 flex flex-col items-start justify-center text-left max-w-[800px]">
              
              <h2 className="text-[2.6rem] md:text-[3.5rem] lg:text-[4.2rem] xl:text-[4.6rem] font-light leading-[1.05] tracking-[-0.03em] font-sans text-[#F5F5F5] mb-14 drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
                {t.letsWork} <span className="text-white">{t.together}</span>
              </h2>
              
              <button 
                onClick={() => { window.location.href = "tel:8185186288"; }}
                className="group inline-flex items-center gap-4 text-xs md:text-sm tracking-[0.2em] font-mono px-8 py-4 bg-[#D4AF37] hover:bg-white text-[#050608] hover:text-black font-semibold transition-all duration-300 cursor-pointer uppercase shadow-lg shadow-[#D4AF37]/15"
              >
                <span>{t.getInTouchCTA}</span>
                <ArrowRight className="w-4 h-4 text-[#050608] group-hover:translate-x-1.5 transition-transform duration-300 stroke-[2.5]" />
              </button>

           </div>
        </div>
      </section>

      {/* =======================================
          FOOTER SECTION
          ======================================= */}
      <footer className="border-t border-white/[0.06] bg-[#020304] text-white py-24 mt-0">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-24 mb-16">
            
            {/* Block 1: BrandLogo & Mission Statement */}
            <div className="space-y-6">
              <div 
                className="flex items-center gap-3.5 group cursor-pointer select-none" 
                onClick={() => scrollToAnchor("hero-section")}
              >
                <BrandLogo className="w-9 h-9 shrink-0" />
                <span className="font-display text-sm tracking-[0.2em] font-semibold text-[#F5F5F5] uppercase transition-colors group-hover:text-[#D4AF37]">
                  Michael Partovi, Esq.
                </span>
              </div>
              <p className="text-white/45 text-xs leading-relaxed max-w-[280px]">
                {lang === "EN" 
                  ? "Dedicated legal counsel representing injured workers across California before all local WCAB district offices. 100% contingency fee — No fee unless we win."
                  : "Asesoría legal dedicada a la representación de trabajadores lesionados en todo California ante todas las oficinas de la WCAB. Sin ganancia no hay cobro."}
              </p>
              <div className="flex items-center gap-4 pt-3 text-white/30">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#D4AF37] transition-colors duration-300" aria-label="Facebook Page">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#D4AF37] transition-colors duration-300" aria-label="Instagram Page">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#D4AF37] transition-colors duration-300" aria-label="LinkedIn Profile">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#D4AF37] transition-colors duration-300" aria-label="Twitter Profile">
                  <Twitter className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Block 2: Navigation Links */}
            <div>
              <span className="text-xs font-mono tracking-[0.2em] text-[#D4AF37] block mb-6 uppercase">
                // {t.mapStructure}
              </span>
              <ul className="space-y-3.5 text-xs font-mono tracking-wider text-white/45 uppercase">
                <li>
                  <button onClick={() => scrollToAnchor("hero-section")} className="hover:text-white transition-colors cursor-pointer">
                    01 Home Row
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToAnchor("practice-section")} className="hover:text-white transition-colors cursor-pointer">
                    02 Practice Areas
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToAnchor("results-section")} className="hover:text-white transition-colors cursor-pointer">
                    03 Results Log
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToAnchor("philosophy-section")} className="hover:text-white transition-colors cursor-pointer">
                    04 Attorney Info
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToAnchor("insights-section")} className="hover:text-white transition-colors cursor-pointer">
                    05 Publications
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToAnchor("faq-section")} className="hover:text-white transition-colors cursor-pointer">
                    06 Workers' Comp FAQ
                  </button>
                </li>
              </ul>
            </div>

            {/* Block 3: California WCAB Venues */}
            <div>
              <span className="text-xs font-mono tracking-[0.2em] text-[#D4AF37] block mb-6 uppercase">
                // {t.activeCourts}
              </span>
              <ul className="space-y-3.5 text-xs text-white/45 font-mono tracking-wider uppercase">
                <li>
                  <span className="text-white/30 mr-2">01</span> Los Angeles & Van Nuys WCAB
                </li>
                <li>
                  <span className="text-white/30 mr-2">02</span> Long Beach & Marina del Rey WCAB
                </li>
                <li>
                  <span className="text-white/30 mr-2">03</span> Anaheim & Santa Ana WCAB
                </li>
                <li>
                  <span className="text-white/30 mr-2">04</span> Riverside & San Bernardino WCAB
                </li>
                <li>
                  <span className="text-white/30 mr-2">05</span> Oakland, SF & San Jose WCAB
                </li>
              </ul>
            </div>

            {/* Block 4: Physical Contact details */}
            <div>
              <span className="text-xs font-mono tracking-[0.2em] text-[#D4AF37] block mb-6 uppercase">
                // {t.officeIntel}
              </span>
              <address className="not-italic space-y-4 text-xs font-mono tracking-wider text-white/45 uppercase">
                <p className="flex items-start gap-2.5">
                  <MapPin className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                  <span>
                    Michael Partovi, Esq.<br />
                    Serving Injured Workers<br />
                    Throughout California
                  </span>
                </p>
                <a href="tel:8185186288" className="flex items-center gap-2.5 hover:text-white transition-colors cursor-pointer block">
                  <Phone className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                  <span>(818) 518-6288</span>
                </a>
                <a href="mailto:mike_parto@yahoo.com" className="flex items-center gap-2.5 hover:text-white transition-colors cursor-pointer block">
                  <Mail className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                  <span>mike_parto@yahoo.com</span>
                </a>
                <div className="p-3.5 border border-white/[0.04] bg-white/[0.01] mt-4 max-w-[240px]">
                  <span className="text-[10px] text-white/30 block mb-1">{t.okRegistry}</span>
                  <div className="flex items-center gap-2 text-[10px] text-white">
                    <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
                    <span>{t.hqActive}</span>
                  </div>
                </div>
              </address>
            </div>

          </div>

          {/* Bottom Copyright Row */}
          <div className="border-t border-white/[0.06] pt-12 flex flex-col md:flex-row justify-between items-center gap-6 text-white/30 text-xs font-mono uppercase tracking-widest">
            <div>
              <span>{t.allRightsReserved}</span>
            </div>
            <div className="flex items-center gap-8">
              <span className="hover:text-[#D4AF37] cursor-pointer transition-colors">{t.attorneyDesignation}</span>
              <span className="hover:text-[#D4AF37] cursor-pointer transition-colors">{t.tulsaEquality}</span>
              <span className="hover:text-[#D4AF37] cursor-pointer transition-colors">{t.legalTerms}</span>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}
