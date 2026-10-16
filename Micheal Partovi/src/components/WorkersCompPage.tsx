import React, { useState } from "react";
import { 
  ArrowLeft, 
  ArrowRight, 
  Phone, 
  Scale, 
  Shield, 
  ChevronDown, 
  Clock, 
  FileText, 
  CheckCircle,
  HelpCircle,
  Send,
  Lock,
  Mail,
  MapPin,
  HeartPulse,
  Activity,
  Briefcase,
  Award,
  Star,
  UserCheck
} from "lucide-react";

// @ts-expect-error - local image asset import
import imgWorkersComp from "../assets/images/practice_workers_comp_1792165884217.jpg";
// @ts-expect-error - local image asset import
import imgDeniedClaims from "../assets/images/practice_denied_claims_1792165884826.jpg";
// @ts-expect-error - local image asset import
import imgMedicalTreatment from "../assets/images/practice_medical_treatment_1792165885053.jpg";
// @ts-expect-error - local image asset import
import attorneyPortrait from "../assets/images/attorney_michael_partovi_1792165884814.jpg";

interface WorkersCompPageProps {
  lang: "EN" | "ES";
  setLang: (lang: "EN" | "ES") => void;
  onBack: () => void;
  scrollToContact: () => void;
}

export default function WorkersCompPage({ lang, onBack, scrollToContact }: WorkersCompPageProps) {
  const [activeTab, setActiveTab] = useState<"claims" | "denied" | "disability" | "medical" | "settlements" | "trials">("claims");
  const [activeFaqIndex, setActiveFaqIndex] = useState<number | null>(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    injuryType: "Workers' Compensation Claim",
    employerReported: "Yes",
    details: ""
  });

  // Localized Strings
  const content = {
    EN: {
      phoneNum: "(818) 518-6288",
      emailAddr: "mike_parto@yahoo.com",
      locationText: "Serving Injured Workers Throughout California",
      backLink: "Back to Home",
      
      heroTitle1: "WORKERS'",
      heroTitle2: "COMPENSATION",
      tagline1: "Dedicated. Experienced.",
      tagline2: "Fighting for Injured Workers.",
      col1Text: "Injured on the job in California? You don't have to face aggressive insurance adjusters and complex labor codes alone. Attorney Michael Partovi provides relentless, compassionate advocacy.",
      col2Text: "From filing your initial claim and securing top-tier medical care to appealing denied claims and negotiating maximum C&R settlements, our mission is your full physical and financial recovery.",
      
      typesTitle: "Our Practice Areas",
      typesDesc: "We provide comprehensive, high-stakes advocacy across every stage of the California Workers' Compensation system.",
      
      processTitle: "California Workers' Comp Lifecycle",
      processDesc: "Navigating the Workers' Compensation Appeals Board (WCAB) requires strategic execution from day one.",

      faqTitle: "Frequently Asked Questions",
      faqDesc: "Essential legal guidance to help you understand your rights under California Workers' Compensation laws.",
      
      formTitle: "Free & Confidential Consultation",
      formSubtitle: "No Fee Unless We Win",
      formDesc: "All submissions are protected under attorney-client privilege. Call (818) 518-6288 or submit your case details below.",
      formName: "Full Name",
      formPhone: "Direct Phone Number",
      formInjury: "Injury / Issue Category",
      formReported: "Was the injury reported to your employer?",
      formDetails: "Brief description of the work injury or current claim status",
      formSubmitBtn: "Request Free Consultation",
      formSuccess: "Information securely received. Attorney Michael Partovi, Esq. will review your case file and contact you directly."
    },
    ES: {
      phoneNum: "(818) 518-6288",
      emailAddr: "mike_parto@yahoo.com",
      locationText: "Sirviendo a Trabajadores Lesionados en Todo California",
      backLink: "Volver al Inicio",
      
      heroTitle1: "COMPENSACIÓN",
      heroTitle2: "DE TRABAJADORES",
      tagline1: "Dedicado. Experimentado.",
      tagline2: "Luchando por Trabajadores Lesionados.",
      col1Text: "¿Se lesionó en el trabajo en California? No tiene que enfrentar solo a las compañías de seguros. El abogado Michael Partovi le brinda una defensa decidida y compasiva.",
      col2Text: "Desde la presentación del reclamo inicial y la obtención de atención médica de primer nivel hasta la apelación de reclamos denegados y la negociación de acuerdos máximos, su recuperación es nuestra misión.",
      
      typesTitle: "Nuestras Áreas de Práctica",
      typesDesc: "Brindamos representación integral y estratégica en cada etapa del sistema de compensación laboral de California.",
      
      processTitle: "Ciclo de Compensación en California",
      processDesc: "Navegar por la Junta de Apelaciones de Compensación de Trabajadores (WCAB) requiere una ejecución táctica desde el primer día.",

      faqTitle: "Preguntas Frecuentes",
      faqDesc: "Orientación legal fundamental para comprender sus derechos laborales y médicos en California.",
      
      formTitle: "Consulta Gratuita y Confidencial",
      formSubtitle: "No Cobramos Honorarios a Menos Que Ganemos",
      formDesc: "Toda la información está protegida bajo el secreto profesional de abogado-cliente. Llame al (818) 518-6288 o envíe sus datos.",
      formName: "Nombre Completo",
      formPhone: "Número Telefónico Directo",
      formInjury: "Categoría de Lesión o Asunto",
      formReported: "¿Se notificó la lesión al empleador?",
      formDetails: "Breve descripción de la lesión laboral o estado actual del reclamo",
      formSubmitBtn: "Solicitar Consulta Gratuita",
      formSuccess: "Información recibida de forma segura. El abogado Michael Partovi, Esq. revisará su caso y se comunicará de inmediato."
    }
  };

  const t = content[lang];

  const practiceCategories = {
    claims: {
      title: lang === "EN" ? "Workers' Compensation Claims" : "Reclamos de Compensación Laboral",
      badge: lang === "EN" ? "Initial Filing & Wage Benefits" : "Presentación Inicial y Salarios",
      desc: lang === "EN" 
        ? "We guide injured California employees through the complete claims process—from timely filing of the DWC-1 claim form and securing Temporary Total Disability (TTD) wage replacement to holding employers and their insurance carriers strictly accountable."
        : "Guiamos a los empleados lesionados en California a través de todo el proceso de reclamación: desde el formulario DWC-1 y la obtención de beneficios salariales por incapacidad temporal (TTD) hasta exigir cumplimiento legal.",
      items: lang === "EN" 
        ? [
            "Filing Form DWC-1 & Application for Adjudication",
            "Securing Temporary Total Disability (TTD) Wage Checks",
            "Specific Trauma & Cumulative Repetitive Stress Injuries",
            "Construction, Warehouse & Industrial Accident Claims",
            "Emergency Medical Access During the 90-Day Liability Period"
          ]
        : [
            "Presentación del Formulario DWC-1 y Solicitud de Adjudicación",
            "Cobro de Cheques de Incapacidad Temporal (TTD)",
            "Lesiones por Trauma Específico y Estrés Acumulativo",
            "Accidentes en Construcción, Bodegas e Industria",
            "Acceso Médico de Urgencia durante el Período de 90 Días"
          ],
      image: imgWorkersComp
    },
    denied: {
      title: lang === "EN" ? "Denied Claims" : "Reclamos Denegados",
      badge: lang === "EN" ? "Appeals & Rapid Counter-Action" : "Apelaciones y Respuesta Rápida",
      desc: lang === "EN"
        ? "Insurance carriers routinely deny valid workers' comp claims citing pre-existing conditions, late reporting, or lack of medical evidence. Attorney Michael Partovi aggressively appeals wrongful denials, files for expedited hearings, and forces insurers to provide the benefits you deserve."
        : "Las aseguradoras suelen denegar reclamos legítimos alegando condiciones preexistentes o falta de pruebas. El abogado Michael Partovi apela agresivamente denegaciones arbitrarias y solicita audiencias urgentes ante la WCAB.",
      items: lang === "EN"
        ? [
            "Challenging Denial Letters Before the WCAB",
            "Overcoming Pre-Existing Condition Defense Tactics",
            "Mandatory Settlement Conferences (MSC) & Expedited Hearings",
            "Investigating Employer Retaliation (Labor Code 132a)",
            "Recovering Past-Due Medical Bills & Unpaid Disability Benefits"
          ]
        : [
            "Impugnación de Cartas de Rechazo ante la WCAB",
            "Superación de Tácticas sobre Condiciones Preexistentes",
            "Conferencias Obligatorias de Conciliación (MSC)",
            "Investigación de Represalias Laborales (Código Laboral 132a)",
            "Cobro de Facturas Médicas Vencidas y Beneficios Atrasados"
          ],
      image: imgDeniedClaims
    },
    disability: {
      title: lang === "EN" ? "Permanent Disability" : "Incapacidad Permanente",
      badge: lang === "EN" ? "Ratings & Life Pension Rights" : "Calificaciones y Pensión Vitalicia",
      desc: lang === "EN"
        ? "If a work injury results in permanent impairment that never completely resolves, you are entitled to Permanent Disability (PD) compensation. We ensure your medical reports accurately reflect the true AMA Guides Whole Person Impairment (WPI) rating to maximize your financial award."
        : "Si su lesión deja secuelas permanentes, tiene derecho a indemnización por Incapacidad Permanente (PD). Nos aseguramos de que sus reportes médicos reflejen con precisión las pautas AMA para maximizar su compensación.",
      items: lang === "EN"
        ? [
            "Accurate AMA Guides Impairment Rating Reviews",
            "Qualified Medical Evaluator (QME) & AME Selection Strategy",
            "Total Permanent Disability (100% Awards & Lifetime Pension)",
            "Supplemental Job Displacement Benefit Vouchers (SJDB)",
            "Apportionment Defense Against Prior Non-Industrial Factors"
          ]
        : [
            "Revisión Rigurosa de Calificaciones según Guías AMA",
            "Estrategia en la Selección de Médicos Evaluadores (QME / AME)",
            "Incapacidad Permanente Total (Premios del 100% y Pensión de por Vida)",
            "Vales de Capacitación Laboral Suplementaria (SJDB)",
            "Defensa de Imputación contra Factores No Laborales Previos"
          ],
      image: imgDeniedClaims
    },
    medical: {
      title: lang === "EN" ? "Medical Treatment & Referrals" : "Tratamiento Médico y Referencias",
      badge: lang === "EN" ? "Top Doctors & Surgery Authorization" : "Médicos de Primer Nivel y Cirugías",
      desc: lang === "EN"
        ? "You have the right to reasonable and necessary medical care to cure or relieve your workplace injury. We help you navigate the employer's Medical Provider Network (MPN), overcome Utilization Review (UR) denials, and connect with reputable specialists, surgeons, and physical therapists."
        : "Tiene derecho a la atención médica necesaria para curar su lesión de trabajo. Le ayudamos a navegar la Red de Proveedores Médicos (MPN), apelar negativas de Revisión de Utilización (UR) y consultar con destacados cirujanos y especialistas.",
      items: lang === "EN"
        ? [
            "Access to Quality Orthopedic Surgeons, Neurologists & Pain Specialists",
            "Overcoming Utilization Review (UR) & Independent Medical Review (IMR)",
            "Authorization for Essential Surgeries, MRI Scans & Physical Therapy",
            "Changing Primary Treating Physicians (PTP) Within the MPN",
            "Reimbursement for Travel Mileage and Out-of-Pocket Prescriptions"
          ]
        : [
            "Acceso a Cirujanos Ortopédicos, Neurólogos y Especialistas",
            "Apelación de Decisiones de Revisión de Utilización (UR) e IMR",
            "Autorización de Cirugías Esenciales, Resonancias y Terapias",
            "Cambio de Médico Tratante Primario (PTP) en la Red MPN",
            "Reembolso de Millaje de Transporte y Medicamentos Recetados"
          ],
      image: imgMedicalTreatment
    },
    settlements: {
      title: lang === "EN" ? "Settlements (C&R and Stipulations)" : "Acuerdos (C&R y Estipulaciones)",
      badge: lang === "EN" ? "Compromise & Release vs. Stips" : "Liquidación Global vs. Estipulaciones",
      desc: lang === "EN"
        ? "When your condition reaches Maximum Medical Improvement (MMI), you face a crucial decision: settle through a Compromise and Release (C&R) lump-sum payout or through Stipulations with Request for Award that leave future medical treatment open. We fight for every dollar."
        : "Cuando su condición médica se estabiliza, debe elegir entre una Liquidación Global (C&R) o Estipulaciones con Solicitud de Adjudicación manteniendo abierta la atención médica. Luchamos por cada dólar.",
      items: lang === "EN"
        ? [
            "High-Value Compromise & Release (C&R) Cash Lump Sums",
            "Stipulations with Request for Award (Lifetime Open Medical)",
            "Medicare Set-Aside (MSA) Allocation & Future Care Protection",
            "Negotiating Direct Buyouts with Insurance Defense Counsel",
            "WCAB Judge Settlement Approval & Enforceability"
          ]
        : [
            "Liquidaciones de Alto Valor en Pago Único (C&R)",
            "Estipulaciones con Cobertura Médica Abierta de por Vida",
            "Protección de Fondos Medicare (MSA) y Cuidado Futuro",
            "Negociación Firme con los Abogados de las Aseguradoras",
            "Aprobación Judicial y Cumplimiento Obligatorio en la WCAB"
          ],
      image: imgWorkersComp
    },
    trials: {
      title: lang === "EN" ? "Trials & Appeals" : "Juicios y Apelaciones (WCAB)",
      badge: lang === "EN" ? "Courtroom Advocacy Across California" : "Litigio en Tribunales de California",
      desc: lang === "EN"
        ? "When insurance carriers refuse to offer fair compensation, Attorney Michael Partovi takes them to trial before the Workers' Compensation Appeals Board (WCAB). We present medical depositions, cross-examine defense experts, and advocate aggressively before WCAB judges."
        : "Cuando las aseguradoras se niegan a ofrecer un acuerdo justo, el abogado Michael Partovi lleva el caso a juicio formal ante la Junta de Apelaciones (WCAB). Litigamos con rigor ante los jueces para asegurar un fallo favorable.",
      items: lang === "EN"
        ? [
            "Fierce Trial Litigation in All California WCAB District Offices",
            "Cross-Examination of Insurance Defense Doctors & Investigators",
            "Petitions for Reconsideration to the Full WCAB Appeals Panel",
            "California Court of Appeal Writs of Review",
            "Enforcement of Penalties for Unreasonable Delay in Payments"
          ]
        : [
            "Litigio de Juicio en Todas las Oficinas de Distrito de la WCAB",
            "Contrainterrogatorio de Peritos Médicos de las Compañías de Seguro",
            "Peticiones de Reconsideración ante el Panel Superior de la WCAB",
            "Recursos de Revisión ante el Tribunal de Apelaciones de California",
            "Imposición de Sanciones por Pagos Retrasados Injustificados"
          ],
      image: imgDeniedClaims
    }
  };

  const processPhases = [
    {
      phase: "01",
      title: lang === "EN" ? "Injury Reporting & 90-Day Defense Window" : "Notificación de Lesión y Ventana de 90 Días",
      duration: lang === "EN" ? "Days 1 - 90" : "Días 1 - 90",
      desc: lang === "EN"
        ? "Under California Labor Code, employers must provide up to $10,000 in medical care while investigating your claim. We ensure your DWC-1 claim is filed immediately and lock down critical accident witnesses and records."
        : "Bajo la ley de California, el empleador debe proveer hasta $10,000 en atención médica mientras investiga el reclamo. Presentamos su DWC-1 de inmediato y aseguramos evidencias clave."
    },
    {
      phase: "02",
      title: lang === "EN" ? "Authorized Medical Care & QME Evaluation" : "Atención Médica y Evaluación Médica Neutral (QME)",
      duration: lang === "EN" ? "Months 2 - 6" : "Meses 2 - 6",
      desc: lang === "EN"
        ? "We guide you through the Qualified Medical Evaluator (QME) panel process. Choosing the right medical evaluator often makes the difference between an undervalued claim and a high-dollar award."
        : "Lo asesoramos en la selección del panel de Médicos Evaluadores Neutrales (QME). Elegir al médico adecuado es determinante para obtener la máxima compensación legal."
    },
    {
      phase: "03",
      title: lang === "EN" ? "Maximum Settlement or WCAB Courtroom Trial" : "Acuerdo Máximo o Juicio Formal en la WCAB",
      duration: lang === "EN" ? "Resolution" : "Resolución",
      desc: lang === "EN"
        ? "Once you reach Maximum Medical Improvement, we negotiate maximum cash Compromise & Release (C&R) settlements or take your case to trial before a California WCAB judge."
        : "Una vez estabilizada su salud, negociamos acuerdos de suma global sustanciales o llevamos el caso a juicio oral ante un juez de la WCAB para ganar su indemnización."
    }
  ];

  const faqItems = [
    {
      id: "01",
      question: {
        EN: "Do I have to pay anything upfront for legal representation?",
        ES: "¿Tengo que pagar algo por adelantado por sus servicios?"
      },
      answer: {
        EN: "No. Michael Partovi, Esq. operates on a 100% contingency fee basis: NO FEE UNLESS WE WIN. Our attorney fees are strictly regulated by California law and approved by a WCAB judge, taken only as a small percentage of the financial recovery we win for you.",
        ES: "No. El abogado Michael Partovi trabaja con base en honorarios de contingencia: NO COBRAMOS HONORARIOS A MENOS QUE GANEMOS. Nuestros honorarios están regulados por la ley de California y son aprobados por un juez de la WCAB únicamente de lo que ganemos para usted."
      }
    },
    {
      id: "02",
      question: {
        EN: "What if my employer or insurance company denied my claim?",
        ES: "¿Qué sucede si mi empleador o el seguro denegó mi reclamo?"
      },
      answer: {
        EN: "A denial is not the end of your case—in fact, many denied claims result in substantial financial settlements once an attorney steps in. We file an Application for Adjudication of Claim with the California WCAB, demand medical evidence, and request an expedited hearing to overturn the denial.",
        ES: "Una denegación no es el final de su caso. De hecho, muchos reclamos rechazados culminan en acuerdos económicos sustanciales cuando interviene un abogado. Presentamos formalmente la demanda ante la WCAB y forzamos a la aseguradora a responder."
      }
    },
    {
      id: "03",
      question: {
        EN: "Can my employer fire or retaliate against me for filing a workers' comp claim?",
        ES: "¿Puede mi empleador despedirme o tomar represalias por presentar un reclamo?"
      },
      answer: {
        EN: "No. California Labor Code Section 132a makes it strictly illegal for an employer to fire, demote, threaten, or discriminate against an employee for reporting a workplace injury or consulting an attorney. If retaliation occurs, you may be entitled to increased financial penalties and reinstatement.",
        ES: "No. El Artículo 132a del Código Laboral de California prohíbe terminantemente despedir, degradar o discriminar a un trabajador por reportar un accidente o contratar a un abogado. Quien incumpla se expone a sanciones y compensaciones adicionales."
      }
    },
    {
      id: "04",
      question: {
        EN: "What is the difference between a Compromise & Release (C&R) and a Stipulation?",
        ES: "¿Cuál es la diferencia entre un Compromiso y Liberación (C&R) y una Estipulación?"
      },
      answer: {
        EN: "A Compromise and Release (C&R) closes your case with a lump-sum cash payout that includes the value of your future medical care. A Stipulation provides bi-weekly permanent disability payments while leaving your right to employer-paid future medical treatment open for life. We evaluate both options to secure the outcome best suited to your needs.",
        ES: "Un Compromiso y Liberación (C&R) cierra el caso con un pago único en efectivo que incluye el valor del tratamiento médico futuro. Las Estipulaciones pagan beneficios quincenales pero mantienen abierta la cobertura médica de por vida. Le orientamos sobre la mejor opción."
      }
    },
    {
      id: "05",
      question: {
        EN: "Do you represent injured workers across all of California?",
        ES: "¿Representa a trabajadores lesionados en todo el estado de California?"
      },
      answer: {
        EN: "Yes. Michael Partovi, Esq. proudly represents injured workers throughout California—from Los Angeles, the San Fernando Valley, Orange County, and the Inland Empire to the Central Valley, Bay Area, and Northern California, appearing before all local WCAB district offices.",
        ES: "Sí. Michael Partovi, Esq. representa a trabajadores lesionados en todo California: desde Los Ángeles, el Valle de San Fernando, Orange County y el Inland Empire hasta el Valle Central y el Área de la Bahía, litigando en todas las sedes de la WCAB."
      }
    }
  ];

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="w-full">
      
      {/* Top Banner Highlight (Matching the user's screen) */}
      <div className="bg-[#050811] border-b border-[#D4AF37]/30 py-3 px-6 lg:px-12">
        <div className="max-w-[1440px] mx-auto flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse"></span>
            <span className="text-white/80 tracking-widest uppercase">
              {lang === "EN" ? "NO FEE UNLESS WE WIN" : "NO COBRAMOS A MENOS QUE GANEMOS"}
            </span>
            <span className="text-white/20">|</span>
            <span className="text-[#D4AF37] tracking-wider uppercase font-sans font-semibold">
              {t.locationText}
            </span>
          </div>
          <div className="flex items-center gap-6">
            <a href={`tel:8185186288`} className="inline-flex items-center gap-2 text-[#D4AF37] hover:text-white transition-colors font-semibold">
              <Phone className="w-3.5 h-3.5" />
              <span>{t.phoneNum}</span>
            </a>
            <span className="text-white/40 hidden sm:inline">{t.emailAddr}</span>
          </div>
        </div>
      </div>

      {/* Back button flotation floating action */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 pt-8 pb-4 flex items-center justify-between">
        <button 
          onClick={onBack}
          className="group inline-flex items-center gap-2 text-[11px] tracking-[0.25em] font-mono text-white/60 hover:text-[#D4AF37] transition-colors uppercase cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>{t.backLink}</span>
        </button>

        <a 
          href="tel:8185186288"
          className="inline-flex items-center gap-2.5 px-4 py-2 border border-[#D4AF37]/40 bg-[#D4AF37]/10 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all text-xs font-mono uppercase tracking-wider font-semibold"
        >
          <Phone className="w-3.5 h-3.5" />
          <span>{lang === "EN" ? "Free Consultation: (818) 518-6288" : "Consulta Gratis: (818) 518-6288"}</span>
        </a>
      </div>

      {/* =======================================
          2. WORKERS' COMP HERO SECTION
          ======================================= */}
      <section className="relative px-6 lg:px-12 pb-20 border-b border-white/[0.04] scroll-mt-24">
        <div className="max-w-[1440px] mx-auto grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center pt-8">
          
          {/* Left: Headline & Core Pitch */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-full border border-[#D4AF37]/50 flex items-center justify-center bg-[#D4AF37]/10 text-[#D4AF37]">
                <Scale className="w-4 h-4" />
              </div>
              <span className="text-[#D4AF37] font-mono text-xs uppercase tracking-[0.25em]">
                {lang === "EN" ? "MICHAEL PARTOVI, ESQ. — WORKERS' COMPENSATION ATTORNEY" : "MICHAEL PARTOVI, ESQ. — ABOGADO DE COMPENSACIÓN LABORAL"}
              </span>
            </div>

            <h1 className="font-display font-light text-[3.2rem] sm:text-[4.2rem] md:text-[5rem] tracking-tight leading-[0.98] uppercase mb-8">
              <span className="block text-[#F5F5F5] font-light">{t.heroTitle1}</span>
              <span className="block text-[#D4AF37] font-semibold">{t.heroTitle2}</span>
            </h1>

            <div className="border-l-2 border-[#D4AF37] pl-6 py-2 mb-8">
              <h2 className="text-xl md:text-2xl font-sans font-light text-white mb-2">
                {t.tagline1} <span className="text-[#D4AF37]">{t.tagline2}</span>
              </h2>
              <p className="text-[#8B8B95] text-sm md:text-base leading-relaxed">
                {t.col1Text}
              </p>
            </div>

            {/* Feature Banner Pills directly from screen */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <div className="p-4 bg-[#0A0E17] border border-white/[0.06] rounded">
                <div className="flex items-center gap-2.5 text-[#D4AF37] mb-1 font-mono text-xs uppercase font-semibold">
                  <Award className="w-4 h-4" />
                  <span>{lang === "EN" ? "No Fee Unless We Win" : "Sin Ganancia No Hay Cobro"}</span>
                </div>
                <p className="text-xs text-white/60">
                  {lang === "EN" ? "Zero upfront costs. We only get paid when we recover money for you." : "Cero costos por adelantado. Cobramos sólo si ganamos su compensación."}
                </p>
              </div>

              <div className="p-4 bg-[#0A0E17] border border-white/[0.06] rounded">
                <div className="flex items-center gap-2.5 text-[#D4AF37] mb-1 font-mono text-xs uppercase font-semibold">
                  <MapPin className="w-4 h-4" />
                  <span>{lang === "EN" ? "Throughout California" : "En Todo California"}</span>
                </div>
                <p className="text-xs text-white/60">
                  {lang === "EN" ? "Representing injured workers before all California WCAB district offices." : "Representando a trabajadores en todos los tribunales WCAB de California."}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <button 
                onClick={scrollToContact}
                className="px-8 py-4 bg-[#D4AF37] hover:bg-white text-black font-semibold font-mono text-xs uppercase tracking-widest transition-all duration-300 cursor-pointer shadow-lg shadow-[#D4AF37]/20"
              >
                {lang === "EN" ? "Get Free Consultation" : "Consulta Gratuita"}
              </button>
              <a 
                href="tel:8185186288"
                className="inline-flex items-center gap-3 px-6 py-4 border border-white/20 hover:border-[#D4AF37] text-white hover:text-[#D4AF37] transition-all font-mono text-xs uppercase tracking-widest"
              >
                <Phone className="w-4 h-4" />
                <span>(818) 518-6288</span>
              </a>
            </div>
          </div>

          {/* Right: Attorney Card with screen banner styling */}
          <div className="relative">
            <div className="relative border border-[#D4AF37]/40 bg-[#0A0E17] p-6 lg:p-8 rounded-lg shadow-2xl overflow-hidden">
              {/* Subtle gold corner accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#D4AF37]/20 via-transparent to-transparent pointer-events-none"></div>

              <div className="aspect-[3/4] w-full rounded overflow-hidden mb-6 border border-white/10 relative">
                <img 
                  src={attorneyPortrait} 
                  alt="Michael Partovi, Esq. - California Workers' Compensation Attorney"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#0A0E17] via-[#0A0E17]/60 to-transparent p-4">
                  <div className="text-lg font-serif font-bold text-white tracking-wide">
                    MICHAEL PARTOVI, ESQ.
                  </div>
                  <div className="text-xs font-mono text-[#D4AF37] uppercase tracking-wider">
                    WORKERS' COMPENSATION ATTORNEY
                  </div>
                </div>
              </div>

              {/* Badges Box from uploaded banner */}
              <div className="space-y-3 font-mono text-xs">
                <div className="flex items-center gap-3 text-white/80 py-2 border-b border-white/[0.06]">
                  <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <a href="tel:8185186288" className="hover:text-[#D4AF37] transition-colors font-semibold">
                    (818) 518-6288
                  </a>
                </div>
                <div className="flex items-center gap-3 text-white/80 py-2 border-b border-white/[0.06]">
                  <Mail className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <span className="truncate">mike_parto@yahoo.com</span>
                </div>
                <div className="flex items-center gap-3 text-white/80 py-2 border-b border-white/[0.06]">
                  <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <span>Serving Injured Workers Throughout California</span>
                </div>
                <div className="flex items-center justify-between text-xs pt-2">
                  <span className="text-[#D4AF37] font-semibold">YOUR RECOVERY. OUR MISSION.</span>
                  <span className="text-white/40 uppercase">Free Consultation</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* =======================================
          3. 6 PRACTICE AREAS FROM SCREEN
          ======================================= */}
      <section id="workers-comp-practice-areas" className="px-6 lg:px-12 py-24 border-b border-white/[0.04] bg-[#07090C]">
        <div className="max-w-[1440px] mx-auto">
          
          <div className="max-w-[750px] mb-16">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-1.5 h-1.5 bg-[#D4AF37]"></span>
              <span className="text-[#D4AF37] font-mono text-[11px] uppercase tracking-[0.25em] block">
                {t.typesTitle}
              </span>
            </div>
            <h2 className="text-[2.2rem] md:text-[3rem] font-light leading-[1.1] tracking-tight text-[#F5F5F5] font-sans">
              {lang === "EN" ? "Representing Injured Workers Across California" : "Representando a Trabajadores Lesionados en California"}
            </h2>
            <p className="text-[#8B8B95] text-[15.5px] font-sans font-light leading-relaxed mt-4">
              {t.typesDesc}
            </p>
          </div>

          <div className="grid lg:grid-cols-[1fr_2fr] gap-12 items-start">
            
            {/* Left Column: Interactive Selection Tabs for the 6 Practice Areas */}
            <div className="flex flex-col divide-y divide-white/[0.05] border-t border-b border-white/[0.05]">
              {(Object.keys(practiceCategories) as Array<keyof typeof practiceCategories>).map((key, idx) => {
                const isActive = activeTab === key;
                return (
                  <button
                    key={key}
                    onClick={() => setActiveTab(key)}
                    className={`group py-5 px-3 flex items-center justify-between text-left transition-all duration-300 cursor-pointer ${
                      isActive ? "bg-[#D4AF37]/10 border-l-2 border-[#D4AF37]" : "hover:bg-white/[0.02]"
                    }`}
                  >
                    <div className="pr-4">
                      <span className={`block text-base tracking-wide font-sans font-medium transition-colors ${
                        isActive ? "text-[#D4AF37]" : "text-white/80 group-hover:text-white"
                      }`}>
                        {practiceCategories[key].title}
                      </span>
                      <span className="text-[11px] font-mono text-white/40 block mt-0.5">
                        {practiceCategories[key].badge}
                      </span>
                    </div>
                    <span className={`text-xs font-mono font-bold transition-all duration-300 ${
                      isActive ? "text-[#D4AF37] translate-x-1" : "text-white/20 group-hover:text-white/40"
                    }`}>
                      0{idx + 1}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Right Column: Detailed Breakdown Card */}
            <div className="bg-[#0A0C10] border border-white/[0.08] p-8 md:p-12 rounded-lg">
              <div className="flex items-center justify-between border-b border-white/[0.06] pb-6 mb-6">
                <div>
                  <span className="font-mono text-[10px] tracking-[0.2em] text-[#D4AF37] uppercase block mb-1">
                    {practiceCategories[activeTab].badge}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-light text-white font-sans tracking-wide">
                    {practiceCategories[activeTab].title}
                  </h3>
                </div>
                <div className="hidden sm:flex items-center justify-center w-12 h-12 rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/10 text-[#D4AF37]">
                  <Scale className="w-5 h-5" />
                </div>
              </div>

              <p className="text-[#8B8B95] text-[15px] font-sans font-light leading-[1.8] mb-8">
                {practiceCategories[activeTab].desc}
              </p>

              <div className="mb-8">
                <h4 className="text-xs font-mono uppercase tracking-widest text-white/80 mb-4">
                  {lang === "EN" ? "Strategic Focus & Key Protections:" : "Enfoque Estratégico y Protecciones Clave:"}
                </h4>
                <ul className="grid sm:grid-cols-1 gap-3">
                  {practiceCategories[activeTab].items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-white/70">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] mt-2 shrink-0"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-4">
                <a 
                  href="tel:8185186288"
                  className="inline-flex items-center gap-2 text-xs font-mono text-[#D4AF37] hover:text-white transition-colors uppercase tracking-wider font-semibold"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>{lang === "EN" ? "Discuss This Case: (818) 518-6288" : "Consulte Este Caso: (818) 518-6288"}</span>
                </a>

                <button 
                  onClick={scrollToContact}
                  className="inline-flex items-center gap-2 text-xs font-mono text-white/60 hover:text-[#D4AF37] uppercase tracking-wider cursor-pointer"
                >
                  <span>{lang === "EN" ? "Free Case Assessment" : "Evaluación Gratuita"}</span>
                  <span>→</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =======================================
          4. 3-STAGE CALIFORNIA PROCESS
          ======================================= */}
      <section className="px-6 lg:px-12 py-24 border-b border-white/[0.04]">
        <div className="max-w-[1440px] mx-auto">
          
          <div className="max-w-[700px] mb-16">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-1.5 h-1.5 bg-[#D4AF37]"></span>
              <span className="text-[#D4AF37] font-mono text-[11px] uppercase tracking-[0.25em] block">
                {t.processTitle}
              </span>
            </div>
            <h2 className="text-[2.2rem] md:text-[3rem] font-light leading-[1.1] tracking-tight text-[#F5F5F5] font-sans">
              {lang === "EN" ? "Proven Steps to Secure Your Future" : "Pasos Comprobados para Proteger su Futuro"}
            </h2>
            <p className="text-[#8B8B95] text-[15.5px] font-sans font-light leading-relaxed mt-4">
              {t.processDesc}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {processPhases.map((phase) => (
              <div 
                key={phase.phase}
                className="border border-white/[0.06] bg-[#0A0C10] p-8 rounded-lg hover:border-[#D4AF37]/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-4xl font-light font-mono text-[#D4AF37]">{phase.phase}</span>
                    <span className="font-mono text-xs uppercase px-2.5 py-1 bg-white/5 border border-white/10 text-white/60">
                      {phase.duration}
                    </span>
                  </div>
                  <h3 className="text-lg font-sans font-medium text-white mb-3">
                    {phase.title}
                  </h3>
                  <p className="text-sm font-sans font-light text-[#8B8B95] leading-relaxed">
                    {phase.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =======================================
          5. FAQS SPECIFIC TO CALIFORNIA WORKERS' COMP
          ======================================= */}
      <section className="px-6 lg:px-12 py-24 border-b border-white/[0.04] bg-[#07090C]">
        <div className="max-w-[1440px] mx-auto">
          
          <div className="max-w-[700px] mb-16">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-1.5 h-1.5 bg-[#D4AF37]"></span>
              <span className="text-[#D4AF37] font-mono text-[11px] uppercase tracking-[0.25em] block">
                {t.faqTitle}
              </span>
            </div>
            <h2 className="text-[2.2rem] md:text-[3rem] font-light leading-[1.1] tracking-tight text-[#F5F5F5] font-sans">
              {lang === "EN" ? "Clear Answers When It Matters Most" : "Respuestas Claras Cuando Más Importa"}
            </h2>
            <p className="text-[#8B8B95] text-[15.5px] font-sans font-light leading-relaxed mt-4">
              {t.faqDesc}
            </p>
          </div>

          <div className="max-w-4xl divide-y divide-white/[0.06]">
            {faqItems.map((item, idx) => {
              const isOpen = activeFaqIndex === idx;
              return (
                <div key={item.id} className="py-6">
                  <button
                    onClick={() => setActiveFaqIndex(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between text-left gap-4 cursor-pointer group"
                  >
                    <span className={`text-lg md:text-xl font-light font-sans transition-colors ${
                      isOpen ? "text-[#D4AF37]" : "text-white group-hover:text-[#E5C365]"
                    }`}>
                      {item.question[lang]}
                    </span>
                    <ArrowRight className={`w-5 h-5 shrink-0 transition-all duration-300 ${
                      isOpen ? "rotate-90 text-[#D4AF37]" : "text-white/40 group-hover:text-white"
                    }`} />
                  </button>
                  {isOpen && (
                    <div className="pt-4 pr-12 text-[#8B8B95] text-sm md:text-base leading-relaxed font-light">
                      {item.answer[lang]}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* =======================================
          6. FREE CONSULTATION FORM
          ======================================= */}
      <section id="consultation-form-section" className="px-6 lg:px-12 py-24 bg-[#0A0E17]">
        <div className="max-w-[1000px] mx-auto border border-[#D4AF37]/30 bg-[#050811] p-8 md:p-14 rounded-xl shadow-2xl">
          
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="font-mono text-xs text-[#D4AF37] uppercase tracking-[0.25em] block mb-2">
              {t.formSubtitle}
            </span>
            <h2 className="text-3xl md:text-4xl font-light font-sans text-white mb-3">
              {t.formTitle}
            </h2>
            <p className="text-sm text-white/60">
              {t.formDesc}
            </p>
          </div>

          {formSubmitted ? (
            <div className="p-8 border border-[#D4AF37]/40 bg-[#D4AF37]/10 rounded text-center">
              <CheckCircle className="w-12 h-12 text-[#D4AF37] mx-auto mb-4" />
              <h3 className="text-xl font-medium text-white mb-2 font-sans">
                {lang === "EN" ? "Consultation Request Received" : "Solicitud de Consulta Recibida"}
              </h3>
              <p className="text-sm text-white/80 max-w-lg mx-auto">
                {t.formSuccess}
              </p>
              <div className="mt-6">
                <a href="tel:8185186288" className="inline-flex items-center gap-2 text-xs font-mono text-[#D4AF37] uppercase font-bold tracking-widest">
                  <Phone className="w-4 h-4" />
                  <span>{lang === "EN" ? "Or Call Directly: (818) 518-6288" : "O Llame Directamente: (818) 518-6288"}</span>
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-mono text-white/70 uppercase mb-2">
                    {t.formName} *
                  </label>
                  <input 
                    type="text" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                    className="w-full bg-[#0A0C10] border border-white/10 px-4 py-3 text-sm text-white placeholder-white/20 focus:border-[#D4AF37] focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-white/70 uppercase mb-2">
                    {t.formPhone} *
                  </label>
                  <input 
                    type="tel" 
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="(818) 000-0000"
                    className="w-full bg-[#0A0C10] border border-white/10 px-4 py-3 text-sm text-white placeholder-white/20 focus:border-[#D4AF37] focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-mono text-white/70 uppercase mb-2">
                    {t.formInjury}
                  </label>
                  <select 
                    value={formData.injuryType}
                    onChange={(e) => setFormData({ ...formData, injuryType: e.target.value })}
                    className="w-full bg-[#0A0C10] border border-white/10 px-4 py-3 text-sm text-white focus:border-[#D4AF37] focus:outline-none transition-colors"
                  >
                    <option value="Workers' Compensation Claims">Workers' Compensation Claims</option>
                    <option value="Denied Claims">Denied Claims</option>
                    <option value="Permanent Disability">Permanent Disability</option>
                    <option value="Medical Treatment & Referrals">Medical Treatment & Referrals</option>
                    <option value="Settlements (C&R / Stips)">Settlements (C&R / Stips)</option>
                    <option value="Trials & Appeals">Trials & Appeals (WCAB)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono text-white/70 uppercase mb-2">
                    {t.formReported}
                  </label>
                  <select 
                    value={formData.employerReported}
                    onChange={(e) => setFormData({ ...formData, employerReported: e.target.value })}
                    className="w-full bg-[#0A0C10] border border-white/10 px-4 py-3 text-sm text-white focus:border-[#D4AF37] focus:outline-none transition-colors"
                  >
                    <option value="Yes">Yes, reported to employer</option>
                    <option value="No">No, not yet reported</option>
                    <option value="Employer Refused">Employer refused to report</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-white/70 uppercase mb-2">
                  {t.formDetails}
                </label>
                <textarea 
                  rows={4}
                  value={formData.details}
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  placeholder="Please describe how your work injury occurred, body parts affected, or current issues with the insurance company..."
                  className="w-full bg-[#0A0C10] border border-white/10 px-4 py-3 text-sm text-white placeholder-white/20 focus:border-[#D4AF37] focus:outline-none transition-colors"
                ></textarea>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                <div className="flex items-center gap-2 text-xs text-white/40">
                  <Lock className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>100% Confidential & Protected Under Privilege</span>
                </div>

                <button 
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3.5 bg-[#D4AF37] hover:bg-white text-black font-semibold font-mono text-xs uppercase tracking-widest transition-all cursor-pointer shadow-lg shadow-[#D4AF37]/20"
                >
                  {t.formSubmitBtn}
                </button>
              </div>
            </form>
          )}

        </div>
      </section>

    </div>
  );
}
