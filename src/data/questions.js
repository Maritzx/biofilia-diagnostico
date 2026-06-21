// Scoring: each option scores 0, 1, 2, or 3 (index = score)
// Total max: 11 questions × 3 = 33 points

export const questions = [
  {
    id: 1,
    category: 'ORGANIZACIÓN',
    question: '¿Qué tipo de organización representas?',
    options: [
      'Pyme o startup (menos de 50 empleados)',
      'Mediana empresa (50–250 empleados)',
      'Gran empresa (más de 250 empleados)',
      'Evento, proyecto o entidad sin fines de lucro',
    ],
  },
  {
    id: 2,
    category: 'HUELLA AMBIENTAL',
    question: '¿Han medido la huella de carbono de su organización?',
    options: [
      'No, nunca lo hemos hecho',
      'Lo estamos considerando',
      'Sí, una vez de forma puntual',
      'Sí, la medimos y reportamos anualmente',
    ],
  },
  {
    id: 3,
    category: 'OBJETIVOS SOSTENIBLES',
    question: '¿Tienen objetivos de sostenibilidad definidos y medibles?',
    options: [
      'No tenemos objetivos formales',
      'Tenemos buenas intenciones, pero sin métricas',
      'Sí, con KPIs internos',
      'Sí, alineados con los ODS o SBTi',
    ],
  },
  {
    id: 4,
    category: 'CADENA DE SUMINISTRO',
    question: '¿Cómo gestionan la sostenibilidad de sus proveedores?',
    options: [
      'No es un criterio que evaluemos',
      'Lo consideramos informalmente',
      'Tenemos un código de conducta para proveedores',
      'Auditamos y certificamos a nuestros proveedores clave',
    ],
  },
  {
    id: 5,
    category: 'PRODUCCIÓN Y OPERACIONES',
    question: '¿Aplican principios de economía circular o producción responsable?',
    options: [
      'Aún no',
      'Reciclamos y reducimos residuos básicos',
      'Tenemos procesos rediseñados para reducir impacto',
      'Operamos bajo modelos circulares e indicadores de impacto',
    ],
  },
  {
    id: 6,
    category: 'POLÍTICAS SOCIALES',
    question: '¿Cuentan con políticas sociales internas (DEI, bienestar, equidad)?',
    options: [
      'No formalizadas',
      'Algunas iniciativas puntuales',
      'Políticas claras y comunicadas',
      'Programa integral con métricas y reportes',
    ],
  },
  {
    id: 7,
    category: 'CULTURA ORGANIZACIONAL',
    question: '¿Qué tan integrada está la sostenibilidad en la cultura de tu empresa?',
    options: [
      'Es un tema secundario',
      'Hay interés creciente del equipo',
      'Forma parte de la estrategia',
      'Es un pilar central de identidad y decisiones',
    ],
  },
  {
    id: 8,
    category: 'CERTIFICACIONES',
    question: '¿Cuentan con certificaciones de sostenibilidad?',
    options: [
      'Ninguna',
      'Estamos explorando opciones',
      'Tenemos al menos una (ISO 14001, B Corp, etc.)',
      'Múltiples certificaciones internacionales vigentes',
    ],
  },
  {
    id: 9,
    category: 'GESTIÓN DE RESIDUOS',
    question: '¿Cómo gestionan los residuos generados por su organización?',
    options: [
      'No tenemos un sistema de gestión de residuos',
      'Separamos residuos básicos (papel, plástico)',
      'Programa de reducción, reutilización y reciclaje con métricas',
      'Estrategia Zero Waste con valorización y trazabilidad total',
    ],
  },
  {
    id: 10,
    category: 'COMUNICACIÓN',
    question: '¿Cómo comunican sus acciones de sostenibilidad?',
    options: [
      'No las comunicamos',
      'De forma esporádica en redes sociales o web',
      'Tenemos una estrategia de comunicación con mensajes claros',
      'Comunicación integral y verificada, alineada a estándares anti-greenwashing',
    ],
  },
  {
    id: 11,
    category: 'REPORTE DE IMPACTO',
    question: '¿Publican reportes de sostenibilidad o impacto?',
    options: [
      'No publicamos información',
      'Comunicación informal en redes o web',
      'Reporte anual interno',
      'Reporte público bajo estándares (GRI, SASB, ESRS)',
    ],
  },
]

// Score ranges out of 33 max points
export const levels = [
  {
    name: 'Inicial',
    tagline: '"Cada gran cambio comienza con el primer paso"',
    min: 0,
    max: 8,
    color: '#C96B3A',
    description:
      'Tu organización está en las primeras etapas del camino hacia la sostenibilidad. Es el momento ideal para establecer bases sólidas y comenzar a medir tu impacto.',
    recommendations: [
      'Realizá un diagnóstico de huella de carbono inicial.',
      'Definí al menos 3 objetivos de sostenibilidad para el próximo año.',
      'Designá un responsable interno de sostenibilidad.',
      'Comenzá a comunicar internamente el compromiso con la sostenibilidad.',
    ],
  },
  {
    name: 'En transición',
    tagline: '"Construyendo cimientos sólidos"',
    min: 9,
    max: 16,
    color: '#B85A2A',
    description:
      'Tu empresa tiene iniciativas valiosas, pero falta integración estratégica y métricas. Es el momento ideal para profesionalizar tu gestión sostenible.',
    recommendations: [
      'Medir formalmente tu huella de carbono y definir un plan de reducción.',
      'Estructurar objetivos alineados a los ODS con KPIs claros.',
      'Implementar un código de conducta para proveedores.',
      'Comenzar a elaborar tu primer reporte de sostenibilidad.',
    ],
  },
  {
    name: 'Estratégico',
    tagline: '"La sostenibilidad ya es parte de tu ADN"',
    min: 17,
    max: 24,
    color: '#1B7A63',
    description:
      'Tu organización tiene una gestión sostenible estructurada. El siguiente paso es profundizar la integración y liderar con el ejemplo en tu sector.',
    recommendations: [
      'Avanzar hacia certificaciones internacionales (B Corp, ISO 14001).',
      'Publicar un reporte de sostenibilidad bajo estándares GRI o ESRS.',
      'Incorporar métricas de triple impacto en las decisiones estratégicas.',
      'Desarrollar programas de impacto comunitario con indicadores.',
    ],
  },
  {
    name: 'Líder Regenerativo',
    tagline: '"Sos referente de sostenibilidad en tu sector"',
    min: 25,
    max: 33,
    color: '#0D5C4A',
    description:
      'Tu organización es un referente en sostenibilidad. Operás con altos estándares de triple impacto y tenés la capacidad de inspirar a otros en el ecosistema.',
    recommendations: [
      'Compartir tu metodología y aprendizajes con otras organizaciones.',
      'Explorar modelos de negocio regenerativos más allá de la neutralidad.',
      'Sumarte a iniciativas de política pública y estándares sectoriales.',
      'Convertirte en caso de estudio y referente del sector.',
    ],
  },
]

export function getLevel(score) {
  return levels.find((l) => score >= l.min && score <= l.max) ?? levels[0]
}

export function getPercentage(score) {
  return Math.round((score / 33) * 100)
}
