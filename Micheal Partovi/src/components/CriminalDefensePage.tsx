import React, { useState } from "react";
import { 
  ArrowLeft, 
  ArrowRight, 
  ChevronDown
} from "lucide-react";

// @ts-expect-error - local image asset import
import imgWorkersComp from "../assets/images/practice_workers_comp.jpg";
// @ts-expect-error - local image asset import
import imgDeniedClaims from "../assets/images/practice_denied_claims.jpg";
// @ts-expect-error - local image asset import
import imgMedicalTreatment from "../assets/images/practice_medical_treatment.jpg";

interface CriminalDefensePageProps {
  lang: "EN" | "ES";
  setLang: (lang: "EN" | "ES") => void;
  onBack: () => void;
  scrollToContact: () => void;
}

export default function CriminalDefensePage({ lang, onBack, scrollToContact }: CriminalDefensePageProps) {
  const [activeTab, setActiveTab] = useState<"claims" | "denied" | "disability" | "medical" | "settlements">("claims");
  const [activeFaqIndex, setActiveFaqIndex] = useState<number | null>(0);

  // Localized Strings
  const content = {
    EN: {
      aboutUs: "About Us",
      practiceAreas: "Practice Areas",
      caseResults: "Top Case Results",
      insights: "News & Insights",
      contact: "Contact",
      phoneNum: "(818) 518-6288",
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
      aboutUs: "Sobre Nosotros",
      practiceAreas: "Áreas de Práctica",
      caseResults: "Resultados de Casos",
      insights: "Noticias e Ideas",
      contact: "Contacto",
      phoneNum: "(818) 518-6288",
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

  const defenseCategories = {
    claims: {
      title: lang === "EN" ? "Workers' Compensation Claims" : "Reclamos de Compensación",
      desc: lang === "EN" 
        ? "We guide injured California employees through the complete claims process—from timely filing of the DWC-1 claim form and securing Temporary Total Disability (TTD) wage replacement to holding employers and their insurance carriers strictly accountable."
        : "Guiamos a los empleados lesionados en California a través de todo el proceso de reclamación: desde el formulario DWC-1 y la obtención de beneficios salariales por incapacidad temporal (TTD) hasta exigir cumplimiento legal.",
      items: lang === "EN" 
        ? ["Filing Form DWC-1 & Application for Adjudication", "Securing Temporary Total Disability (TTD) Wage Checks", "Specific Trauma & Cumulative Repetitive Stress Injuries", "Construction, Warehouse & Industrial Accident Claims", "Emergency Medical Access During the 90-Day Liability Period"]
        : ["Presentación del Formulario DWC-1 y Solicitud de Adjudicación", "Cobro de Cheques de Incapacidad Temporal (TTD)", "Lesiones por Trauma Específico y Estrés Acumulativo", "Accidentes en Construcción, Bodegas e Industria", "Acceso Médico de Urgencia durante el Período de 90 Días"],
      image: imgWorkersComp
    },
    denied: {
      title: lang === "EN" ? "Denied Claims" : "Reclamos Denegados",
      desc: lang === "EN"
        ? "Insurance carriers routinely deny valid workers' comp claims citing pre-existing conditions, late reporting, or lack of medical evidence. Attorney Michael Partovi aggressively appeals wrongful denials, files for expedited hearings, and forces insurers to provide the benefits you deserve."
        : "Las aseguradoras suelen denegar reclamos legítimos alegando condiciones preexistentes o falta de pruebas. El abogado Michael Partovi apela agresivamente denegaciones arbitrarias y solicita audiencias urgentes ante la WCAB.",
      items: lang === "EN"
        ? ["Challenging Denial Letters Before the WCAB", "Overcoming Pre-Existing Condition Defense Tactics", "Mandatory Settlement Conferences (MSC) & Expedited Hearings", "Investigating Employer Retaliation (Labor Code 132a)", "Recovering Past-Due Medical Bills & Unpaid Disability Benefits"]
        : ["Impugnación de Cartas de Rechazo ante la WCAB", "Superación de Tácticas sobre Condiciones Preexistentes", "Conferencias Obligatorias de Conciliación (MSC)", "Investigación de Represalias Laborales (Código Laboral 132a)", "Cobro de Facturas Médicas Vencidas y Beneficios Atrasados"],
      image: imgDeniedClaims
    },
    disability: {
      title: lang === "EN" ? "Permanent Disability" : "Incapacidad Permanente",
      desc: lang === "EN"
        ? "If a work injury results in permanent impairment that never completely resolves, you are entitled to Permanent Disability (PD) compensation. We ensure your medical reports accurately reflect the true AMA Guides Whole Person Impairment (WPI) rating to maximize your financial award."
        : "Si su lesión deja secuelas permanentes, tiene derecho a indemnización por Incapacidad Permanente (PD). Nos aseguramos de que sus reportes médicos reflejen con precisión las pautas AMA para maximizar su compensación.",
      items: lang === "EN"
        ? ["Accurate AMA Guides Impairment Rating Reviews", "Qualified Medical Evaluator (QME) & AME Selection Strategy", "Total Permanent Disability (100% Awards & Lifetime Pension)", "Supplemental Job Displacement Benefit Vouchers (SJDB)", "Apportionment Defense Against Prior Non-Industrial Factors"]
        : ["Revisión Rigurosa de Calificaciones según Guías AMA", "Estrategia en la Selección de Médicos Evaluadores (QME / AME)", "Incapacidad Permanente Total (Premios del 100% y Pensión de por Vida)", "Vales de Capacitación Laboral Suplementaria (SJDB)", "Defensa de Imputación contra Factores No Laborales Previos"],
      image: imgDeniedClaims
    },
    medical: {
      title: lang === "EN" ? "Medical Treatment & Referrals" : "Tratamiento Médico y Referencias",
      desc: lang === "EN"
        ? "You have the right to reasonable and necessary medical care to cure or relieve your workplace injury. We help you navigate the employer's Medical Provider Network (MPN), overcome Utilization Review (UR) denials, and connect with reputable specialists, surgeons, and physical therapists."
        : "Tiene derecho a la atención médica necesaria para curar su lesión de trabajo. Le ayudamos a navegar la Red de Proveedores Médicos (MPN), apelar negativas de Revisión de Utilización (UR) y consultar con destacados cirujanos y especialistas.",
      items: lang === "EN"
        ? ["Access to Quality Orthopedic Surgeons, Neurologists & Pain Specialists", "Overcoming Utilization Review (UR) & Independent Medical Review (IMR)", "Authorization for Essential Surgeries, MRI Scans & Physical Therapy", "Changing Primary Treating Physicians (PTP) Within the MPN", "Reimbursement for Travel Mileage and Out-of-Pocket Prescriptions"]
        : ["Acceso a Cirujanos Ortopédicos, Neurólogos y Especialistas", "Apelación de Decisiones de Revisión de Utilización (UR) e IMR", "Autorización de Cirugías Esenciales, Resonancias y Terapias", "Cambio de Médico Tratante Primario (PTP) en la Red MPN", "Reembolso de Millaje de Transporte y Medicamentos Recetados"],
      image: imgMedicalTreatment
    },
    settlements: {
      title: lang === "EN" ? "Settlements (C&R and Stips)" : "Acuerdos (C&R y Estipulaciones)",
      desc: lang === "EN"
        ? "When your condition reaches Maximum Medical Improvement (MMI), you face a crucial decision: settle through a Compromise and Release (C&R) lump-sum payout or through Stipulations with Request for Award that leave future medical treatment open. We fight for every dollar."
        : "Cuando su condición médica se estabiliza, debe elegir entre una Liquidación Global (C&R) o Estipulaciones con Solicitud de Adjudicación manteniendo abierta la atención médica. Luchamos por cada dólar.",
      items: lang === "EN"
        ? ["High-Value Compromise & Release (C&R) Lump-Sum Buyouts", "Stipulations with Request for Award with Lifetime Medical", "Negotiating Full Value for Future Surgery & Care Reserves", "Settlement Approval Hearings Before California WCAB Judges", "Structured Settlement Consultation for Lifetime Financial Security"]
        : ["Liquidación Global en Suma Única (C&R) de Alto Valor", "Estipulaciones con Cobertura Médica Abierta de por Vida", "Negociación del Valor Real de Futuras Cirugías y Cuidados", "Audiencias de Aprobación de Acuerdos ante Jueces de la WCAB", "Estructuración de Pagos para Seguridad Financiera Continua"],
      image: imgWorkersComp
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
        EN: "A denial is not the end of your case—in fact, many denied claims result in substantial financial settlements. We file an immediate Application for Adjudication with the WCAB, obtain favorable medical opinions, and aggressively take insurance companies to court.",
        ES: "Una denegación no es el final de su caso; muchos reclamos denegados terminan en indemnizaciones sustanciales. Radicamos una Solicitud de Adjudicación ante la WCAB y forzamos a la aseguradora a responder."
      }
    },
    {
      id: "03",
      question: {
        EN: "Can my employer fire or retaliate against me for filing a workers' comp claim?",
        ES: "¿Puede mi empleador despedirme o tomar represalias por presentar un reclamo?"
      },
      answer: {
        EN: "No. California Labor Code Section 132a makes it strictly illegal for an employer to discharge, threaten to discharge, or in any way discriminate against an employee for filing a workers' compensation claim. We aggressively prosecute retaliation claims.",
        ES: "No. La Sección 132a del Código Laboral de California prohíbe terminantemente despedir, amenazar o discriminar a cualquier empleado por presentar un reclamo laboral. Dicha conducta expone al empleador a severas sanciones."
      }
    },
    {
      id: "04",
      question: {
        EN: "What is the difference between a Compromise & Release (C&R) and a Stipulation?",
        ES: "¿Cuál es la diferencia entre un Compromiso y Liberación (C&R) y una Estipulación?"
      },
      answer: {
        EN: "A Compromise and Release (C&R) closes your case with a lump-sum cash settlement that includes the buyout value of your future medical care. Stipulations provide bi-weekly payments while keeping your medical care open for life. We counsel you on the strongest option for your situation.",
        ES: "Un Compromiso y Liberación (C&R) cierra su caso con un pago único en efectivo que incluye el valor de su atención médica futura. Las Estipulaciones pagan su incapacidad de forma periódica y dejan abierta la cobertura médica de por vida. Le orientamos sobre la mejor opción."
      }
    },
    {
      id: "05",
      question: {
        EN: "Do you represent injured workers across all of California?",
        ES: "¿Representa a trabajadores lesionados en todo el estado de California?"
      },
      answer: {
        EN: "Yes. Michael Partovi, Esq. proudly represents injured workers throughout California—from Los Angeles, the San Fernando Valley, and Orange County to the Inland Empire, Central Valley, and Northern California, appearing before all local WCAB district offices.",
        ES: "Sí. Michael Partovi, Esq. representa a trabajadores lesionados en todo California: desde Los Ángeles, el Valle de San Fernando y el Condado de Orange hasta el Inland Empire y el norte del estado, litigando en todas las cortes de la WCAB."
      }
    }
  ];

  const tabKeys: Array<keyof typeof defenseCategories> = ["claims", "denied", "disability", "medical", "settlements"];

  return (
    <div className="w-full">
      
      {/* Back button flotation floating action */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 pt-32 pb-4 flex items-center">
        <button 
          onClick={onBack}
          className="group inline-flex items-center gap-2 text-[10px] tracking-[0.25em] font-mono text-white/40 hover:text-[#D4AF37] transition-colors uppercase cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
          <span>{t.backLink}</span>
        </button>
      </div>

      {/* =======================================
          2. WORKERS' COMP HERO SECTION (Smaller, Right-aligned layout)
          ======================================= */}
      <section className="relative px-6 lg:px-12 pb-24 border-b border-white/[0.04] scroll-mt-24">
        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-end justify-between gap-8 pt-12 md:pt-16">
          
          {/* Scroll / Anchor Down Circle Button */}
          <div className="hidden md:flex flex-col items-center justify-end h-full pb-2">
            <button 
              onClick={() => {
                const el = document.getElementById("defense-intro-details");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="w-12 h-12 rounded-full border border-[#D4AF37]/40 hover:border-[#D4AF37] flex items-center justify-center hover:bg-[#D4AF37]/10 transition-all duration-300 group cursor-pointer"
              aria-label="Scroll down to details"
            >
              <ChevronDown className="w-4 h-4 text-[#D4AF37] group-hover:translate-y-0.5 transition-transform stroke-[2]" />
            </button>
          </div>

          {/* Large Editorial Typographical Headline (Smaller, Right Aligned) */}
          <div className="flex flex-col items-end text-right w-full md:w-auto">
            <h1 className="font-display font-light text-[3.6rem] sm:text-[4.8rem] md:text-[5.8rem] lg:text-[6.8rem] xl:text-[7.8rem] tracking-tighter leading-[0.9] uppercase select-none">
              <span className="block text-[#F5F5F5] font-light">{t.heroTitle1}</span>
              <span className="block text-[#D4AF37] font-semibold">{t.heroTitle2}</span>
            </h1>
          </div>
        </div>
      </section>

      {/* =======================================
          3. INTERIOR THREE COLUMN OVERVIEW BARS
          ======================================= */}
      <section id="defense-intro-details" className="px-6 lg:px-12 py-16 md:py-24 border-b border-white/[0.04]">
        <div className="max-w-[1440px] mx-auto grid md:grid-cols-[1.3fr_1fr_1fr] gap-10 lg:gap-16 items-start">
          
          {/* Left Column Callout */}
          <div className="relative border-l border-[#D4AF37] pl-6 md:pl-8 py-2">
            <h2 className="text-2xl sm:text-3xl md:text-[2.2rem] lg:text-[2.6rem] leading-[1.15] font-sans font-light tracking-tight text-[#F5F5F5] pr-4">
              {t.tagline1} <br />
              <span className="text-[#D4AF37] font-light">{t.tagline2}</span>
            </h2>
          </div>

          {/* Middle Column Block */}
          <div className="text-[#8B8B95] text-[15.5px] leading-[1.8] font-sans font-light pr-4 pt-1">
            <p>{t.col1Text}</p>
          </div>

          {/* Right Column Block */}
          <div className="text-[#8B8B95] text-[15.5px] leading-[1.8] font-sans font-light pr-4 pt-1">
            <p>{t.col2Text}</p>
          </div>

        </div>
      </section>

      {/* =======================================
          4. INTENSIVE FULL FRAME IMAGE SECTION
          ======================================= */}
      <section className="relative w-full h-[500px] md:h-[650px] overflow-hidden bg-[#0A0C10]">
        <div className="absolute inset-0 w-full h-full z-0">
          <img 
            src={imgWorkersComp} 
            alt="California Workers' Compensation legal representation" 
            className="w-full h-full object-cover object-center grayscale contrast-125 opacity-70"
            style={{ filter: "brightness(0.65) contrast(1.15)" }}
          />
          <div className="absolute inset-x-0 top-0 bg-gradient-to-b from-[#050608] via-transparent to-transparent h-36 z-10" />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#050608] via-transparent to-transparent h-36 z-10" />
          <div className="absolute inset-0 bg-[#050608]/20 z-10" />
        </div>
      </section>

      {/* =======================================
          5. SPECIFIC ACCUSATIONS DRILLDOWN INTERACTIVE TABS
          ======================================= */}
      <section className="px-6 lg:px-12 py-24 lg:py-32 border-b border-white/[0.04] bg-[#07090C]">
        <div className="max-w-[1440px] mx-auto">
          
          <div className="max-w-[700px] mb-16 md:mb-20">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-1.5 h-1.5 bg-[#D4AF37]"></span>
              <span className="text-[#D4AF37] font-mono text-[11px] uppercase tracking-[0.25em] block">
                {t.typesTitle}
              </span>
            </div>
            <h2 className="text-[2.2rem] md:text-[3rem] font-light leading-[1.1] tracking-tight text-[#F5F5F5] font-sans">
              {lang === "EN" ? "Holding insurance companies accountable." : "Haciendo que las aseguradoras rindan cuentas."}
            </h2>
            <p className="text-[#8B8B95] text-[15.5px] font-sans font-light leading-relaxed mt-6">
              {t.typesDesc}
            </p>
          </div>

          <div className="grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20 items-stretch">
            
            {/* Left Column: Interactive Selection Tabs */}
            <div className="flex flex-col divide-y divide-white/[0.05] border-t border-b border-white/[0.05]">
              {tabKeys.map((key, idx) => {
                const isActive = activeTab === key;
                const num = String(idx + 1).padStart(2, "0");
                return (
                  <button
                    key={key}
                    onClick={() => setActiveTab(key)}
                    className="group py-6 flex items-center justify-between text-left transition-all duration-300 hover:pl-2 cursor-pointer"
                  >
                    <span className={`text-base md:text-lg tracking-wide uppercase transition-colors font-sans font-light ${isActive ? "text-[#D4AF37]" : "text-white/60 group-hover:text-white"}`}>
                      {defenseCategories[key].title}
                    </span>
                    <span className={`text-xs font-mono font-bold transition-all duration-300 ${isActive ? "text-[#D4AF37] translate-x-1" : "text-white/20 group-hover:text-white/40"}`}>
                      [ {num} ]
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Right Column: Complete Descriptions List Panel */}
            <div className="bg-[#0A0C10] border border-white/[0.05] p-8 md:p-12 lg:p-16 flex flex-col justify-between rounded-lg">
              <div>
                <span className="font-mono text-[10px] tracking-[0.2em] text-[#D4AF37] uppercase block mb-3">
                  {lang === "EN" ? "Practice Area Details" : "Detalle de Área de Práctica"}
                </span>
                <h3 className="text-xl md:text-2xl font-light text-white font-sans tracking-wide mb-6">
                  {defenseCategories[activeTab].title}
                </h3>
                <p className="text-[#8B8B95] text-[15px] font-sans font-light leading-[1.8] mb-8">
                  {defenseCategories[activeTab].desc}
                </p>
                
                <hr className="border-white/[0.05] mb-8" />
                
                <h4 className="text-xs font-mono tracking-widest text-[#F5F5F5] uppercase mb-4">
                  {lang === "EN" ? "Key Issues We Handle:" : "Casos Clave que Representamos:"}
                </h4>
                <ul className="grid sm:grid-cols-2 gap-4">
                  {defenseCategories[activeTab].items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-[#8B8B95] font-sans font-light">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] mt-2 shrink-0"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-12 pt-8 border-t border-white/[0.04]">
                <button
                  onClick={scrollToContact}
                  className="group inline-flex items-center gap-3 text-xs tracking-wider font-mono text-white/50 hover:text-white transition-all cursor-pointer uppercase"
                >
                  <span>{lang === "EN" ? "Request Case Strategy Review" : "Solicitar Revisión de Caso"}</span>
                  <span className="text-[#D4AF37] group-hover:translate-x-1.5 transition-transform duration-300">→</span>
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =======================================
          6. THE PROCESS TIMELINE
          ======================================= */}
      <section className="px-6 lg:px-12 py-24 lg:py-32 border-b border-white/[0.04]">
        <div className="max-w-[1440px] mx-auto">
          
          <div className="max-w-[700px] mb-20">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-1.5 h-1.5 bg-[#D4AF37]"></span>
              <span className="text-[#D4AF37] font-mono text-[11px] uppercase tracking-[0.25em] block">
                {t.processTitle}
              </span>
            </div>
            <h2 className="text-[2.2rem] md:text-[3rem] font-light leading-[1.1] tracking-tight text-[#F5F5F5] font-sans">
              {lang === "EN" ? "A proven blueprint for maximum recovery." : "Un proceso estructurado para su máxima compensación."}
            </h2>
            <p className="text-[#8B8B95] text-[15.5px] font-sans font-light leading-relaxed mt-6">
              {t.processDesc}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {processPhases.map((phase, idx) => (
              <div 
                key={idx} 
                className="group relative border border-white/[0.06] bg-[#0A0C10] p-8 md:p-10 hover:border-[#D4AF37]/30 hover:bg-[#D4AF37]/5 transition-all duration-300 rounded-md"
              >
                <div className="flex items-end justify-between mb-8 pb-4 border-b border-white/[0.04]">
                  <span className="text-4xl lg:text-5xl font-light font-mono text-[#D4AF37]/30 group-hover:text-[#D4AF37] transition-colors">{phase.phase}</span>
                  <span className="text-[10px] font-mono tracking-widest text-[#8B8B95] uppercase px-2 py-1 border border-white/[0.06]">{phase.duration}</span>
                </div>
                <h3 className="text-lg lg:text-xl font-light text-white font-sans leading-snug mb-4 group-hover:text-white transition-colors">
                  {phase.title}
                </h3>
                <p className="text-[#8B8B95] text-sm font-sans font-light leading-[1.7] group-hover:text-white/80 transition-colors">
                  {phase.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =======================================
          7. FAQ SECTION
          ======================================= */}
      <section 
        id="faq-section" 
        className="border-t border-white/[0.06] py-24 lg:py-32 scroll-mt-24 md:scroll-mt-28"
      >
        <div className="max-w-[1440px] mx-auto grid lg:grid-cols-[1.1fr_1.9fr] gap-12 lg:gap-24 items-start">
          
          {/* Left Column matching design exactly */}
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

          {/* Right Column with matching layout & colors */}
          <div className="border-t border-white/[0.06] divide-y divide-white/[0.06] border-b">
            {faqItems.map((item, index) => {
              const isOpen = activeFaqIndex === index;
              return (
                <div key={item.id} className="group py-8 lg:py-10 first:pt-4 last:pb-4">
                  <div 
                    onClick={() => setActiveFaqIndex(isOpen ? null : index)}
                    className="grid grid-cols-[auto_1fr_auto] gap-6 md:gap-8 items-start cursor-pointer select-none"
                  >
                    {/* Index Number */}
                    <span className={`text-2xl md:text-3xl font-light font-mono tracking-tight transition-colors duration-300 mt-0.5 select-none ${isOpen ? 'text-[#D4AF37]' : 'text-white/20 group-hover:text-white/50'}`}>
                      {item.id}
                    </span>

                    {/* Content with elegant vertical divider */}
                    <div className="border-l border-white/[0.08] lg:border-white/[0.06] pl-6 md:pl-10 ml-2 md:ml-4 flex-1">
                      <h3 className={`text-lg md:text-[1.32rem] font-sans font-light tracking-wide leading-snug transition-colors duration-300 ${isOpen ? 'text-[#D4AF37]' : 'text-white group-hover:text-[#E5C365]'}`}>
                        {lang === "EN" ? item.question.EN : item.question.ES}
                      </h3>

                      {/* Slider answer block with pure CSS grid height animation */}
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

                    {/* Sleek arrow matching design */}
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

    </div>
  );
}
