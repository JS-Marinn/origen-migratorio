export interface ServiceRequirement {
  title: string
  text: string
  highlight?: boolean
}

export interface Service {
  slug: string
  name: string
  short: string
  intro: string
  type: 'paralegal'
  category: string
  formNumber?: string
  bullets?: string[]
}

export const categories = [
  { slug: 'residencia', label: 'Residencia' },
  { slug: 'familiar', label: 'Familiar' },
  { slug: 'asilo', label: 'Asilo' },
  { slug: 'proteccion', label: 'Protección' },
  { slug: 'ciudadania', label: 'Ciudadanía' },
  { slug: 'renovaciones', label: 'Renovaciones' },
  { slug: 'documentos', label: 'Documentos' },
] as const

// === ALL SERVICES (both Hablamos Español and Servicios Paralegales use the same paralegal services) ===
const paralegalServices: Service[] = [
  {
    slug: 'renovacion-residencia',
    name: 'Renovación de Residencia Permanente',
    category: 'residencia',
    formNumber: 'I-90',
    short: 'Preparación completa del formulario I-90.',
    intro: 'Servicio de preparación documental para la renovación o reemplazo de la tarjeta de residencia permanente.',
    type: 'paralegal',
    bullets: ['Formulario I-90 diligenciado', 'Revisión documental completa', 'Organización del expediente', 'Verificación de elegibilidad', 'Paquete listo para revisión'],
  },
  {
    slug: 'peticion-familiar',
    name: 'Petición Familiar',
    category: 'familiar',
    formNumber: 'I-130',
    short: 'Preparación del formulario I-130.',
    intro: 'Apoyo en la preparación de la petición familiar mediante el formulario I-130.',
    type: 'paralegal',
    bullets: ['Formulario I-130 diligenciado', 'Formulario I-130A (cuando corresponda)', 'Organización de evidencia familiar', 'Documentos civiles clasificados', 'Paquete listo para presentación'],
  },
  {
    slug: 'ajuste-estatus',
    name: 'Ajuste de Estatus',
    category: 'residencia',
    formNumber: 'I-485',
    short: 'Preparación del formulario I-485.',
    intro: 'Servicio de preparación del formulario I-485 para la solicitud de ajuste de estatus.',
    type: 'paralegal',
    bullets: ['Formulario I-485 diligenciado', 'Organización de evidencia de elegibilidad', 'Clasificación documental completa', 'Expediente completo estructurado', 'Revisión previa a presentación'],
  },
  {
    slug: 'asilo-afirmativo',
    name: 'Asilo Afirmativo',
    category: 'asilo',
    formNumber: 'I-589',
    short: 'Preparación del formulario I-589.',
    intro: 'Apoyo en la preparación de la solicitud de asilo afirmativo mediante el formulario I-589.',
    type: 'paralegal',
    bullets: ['Formulario I-589 diligenciado', 'Organización de evidencia', 'Clasificación cronológica de documentos', 'Integración de declaraciones de la firma', 'Paquete listo para presentación'],
  },
  {
    slug: 'asilo-en-corte',
    name: 'Asilo en Corte',
    category: 'asilo',
    formNumber: 'EOIR',
    short: 'Preparación de expediente para EOIR.',
    intro: 'Preparación de expediente documental para procesos de asilo ante la Corte de Inmigración.',
    type: 'paralegal',
    bullets: ['Expediente organizado para EOIR', 'Clasificación documental completa', 'Organización de evidencia', 'Paquete listo para presentación', 'Organización de declaraciones'],
  },
  {
    slug: 'vawa-i-360',
    name: 'VAWA',
    category: 'proteccion',
    formNumber: 'I-360',
    short: 'Preparación del formulario I-360.',
    intro: 'Servicio de preparación del formulario I-360 bajo la Ley de Violencia contra la Mujer.',
    type: 'paralegal',
    bullets: ['Formulario I-360 diligenciado', 'Organización de evidencia de abuso', 'Clasificación de declaraciones', 'Estructuración cronológica', 'Paquete listo para presentación'],
  },
  {
    slug: 'ajuste-vawa',
    name: 'Ajuste bajo VAWA',
    category: 'proteccion',
    formNumber: 'I-485',
    short: 'Ajuste de estatus vinculado a VAWA.',
    intro: 'Preparación del formulario I-485 para ajuste de estatus derivado de una solicitud VAWA.',
    type: 'paralegal',
    bullets: ['Formulario I-485 diligenciado', 'Organización documental completa', 'Evidencia complementaria integrada', 'Expediente completo estructurado', 'Revisión previa a presentación'],
  },
  {
    slug: 'visa-u-i-918',
    name: 'Visa U',
    category: 'proteccion',
    formNumber: 'I-918',
    short: 'Preparación del formulario I-918.',
    intro: 'Apoyo en la preparación de la solicitud de Visa U mediante el formulario I-918.',
    type: 'paralegal',
    bullets: ['Formulario I-918 diligenciado', 'Integración de derivados (cuando aplique)', 'Suplemento B preparado', 'Clasificación de evidencia', 'Expediente listo para presentación'],
  },
  {
    slug: 'visa-prometido',
    name: 'Visa de Prometido',
    category: 'familiar',
    formNumber: 'I-129F',
    short: 'Preparación del formulario I-129F.',
    intro: 'Servicio de preparación del formulario I-129F para la solicitud de visa de prometido(a).',
    type: 'paralegal',
    bullets: ['Formulario I-129F diligenciado', 'Organización de evidencia de la relación', 'Clasificación documental completa', 'Paquete listo para presentación'],
  },
  {
    slug: 'exencion-provisional',
    name: 'Exención Provisional',
    category: 'documentos',
    formNumber: 'I-601A',
    short: 'Preparación del formulario I-601A.',
    intro: 'Apoyo en la preparación de la solicitud de exención provisional mediante el formulario I-601A.',
    type: 'paralegal',
    bullets: ['Formulario I-601A diligenciado', 'Organización de evidencia', 'Clasificación documental', 'Expediente completo estructurado', 'Preparación para presentación'],
  },
  {
    slug: 'ciudadania-n-400',
    name: 'Ciudadanía',
    category: 'ciudadania',
    formNumber: 'N-400',
    short: 'Preparación del formulario N-400.',
    intro: 'Preparación del formulario N-400 para el proceso de naturalización.',
    type: 'paralegal',
    bullets: ['Formulario N-400 diligenciado', 'Revisión documental completa', 'Organización del expediente', 'Clasificación de documentos de soporte', 'Paquete listo para presentación'],
  },
  {
    slug: 'eliminacion-condiciones',
    name: 'Eliminación de Condiciones',
    category: 'residencia',
    formNumber: 'I-751',
    short: 'Preparación del formulario I-751.',
    intro: 'Servicio de preparación del formulario I-751 para la eliminación de condiciones de la residencia.',
    type: 'paralegal',
    bullets: ['Formulario I-751 diligenciado', 'Organización de evidencia matrimonial', 'Clasificación documental', 'Preparación del expediente completo'],
  },
  {
    slug: 'renovacion-permiso-trabajo',
    name: 'Renovación de Permiso de Trabajo',
    category: 'renovaciones',
    formNumber: 'I-765',
    short: 'Preparación del formulario I-765.',
    intro: 'Apoyo en la preparación de la solicitud de renovación del permiso de trabajo.',
    type: 'paralegal',
    bullets: ['Formulario I-765 diligenciado', 'Organización documental', 'Revisión de elegibilidad', 'Preparación del expediente'],
  },
  {
    slug: 'renovacion-tps',
    name: 'Renovación de TPS',
    category: 'renovaciones',
    formNumber: 'I-821',
    short: 'Preparación de renovación de TPS.',
    intro: 'Servicio de preparación para la renovación del Estatus de Protección Temporal.',
    type: 'paralegal',
    bullets: ['Formulario I-821 diligenciado', 'Formulario I-765 (cuando corresponda)', 'Organización documental', 'Preparación para presentación'],
  },
  {
    slug: 'renovacion-daca',
    name: 'Renovación de DACA',
    category: 'renovaciones',
    formNumber: 'DACA',
    short: 'Preparación de renovación de DACA.',
    intro: 'Apoyo en la preparación de la renovación de DACA.',
    type: 'paralegal',
    bullets: ['Formularios aplicables diligenciados', 'Organización documental', 'Clasificación de evidencia', 'Paquete listo para presentación'],
  },
  {
    slug: 'solicitud-foia',
    name: 'Solicitud FOIA',
    category: 'documentos',
    formNumber: 'FOIA',
    short: 'Solicitud de registros migratorios.',
    intro: 'Preparación de solicitud FOIA para la obtención de registros migratorios.',
    type: 'paralegal',
    bullets: ['Solicitud FOIA diligenciada', 'Revisión de información requerida', 'Organización documental', 'Preparación para presentación'],
  },
  {
    slug: 'procesamiento-consular',
    name: 'Procesamiento Consular',
    category: 'familiar',
    formNumber: 'DS-260',
    short: 'Preparación de procesamiento consular.',
    intro: 'Apoyo en la preparación del procesamiento consular mediante el formulario DS-260.',
    type: 'paralegal',
    bullets: ['Formulario DS-260 diligenciado', 'Organización de documentos civiles', 'Formulario I-864 (cuando corresponda)', 'Organización para sistema CEAC', 'Preparación para presentación'],
  },
]

export const services: Service[] = paralegalServices

export const generalInclusions = [
  { text: 'Preparación completa del expediente' },
  { text: 'Diligenciamiento de formularios' },
  { text: 'Organización de evidencia' },
  { text: 'Estructuración del paquete migratorio' },
  { text: 'Comunicación y seguimiento' },
  { text: 'Control interno de calidad' },
  { text: 'Ajustes y revisiones (hasta dos rondas)' },
  { text: 'Entrega lista para revisión' },
]

export const homeCategories = [
  { name: 'Procesos familiares', text: 'Peticiones familiares y reunificación a través del formulario I-130.', icon: 'users', slug: 'peticion-familiar' },
  { name: 'Asilo', text: 'Solicitud de asilo afirmativo con preparación del formulario I-589.', icon: 'shield', slug: 'asilo-afirmativo' },
  { name: 'VAWA', text: 'Protección para víctimas de violencia doméstica mediante el formulario I-360.', icon: 'heart-handshake', slug: 'vawa-i-360' },
  { name: 'Visa U', text: 'Protección para víctimas de delitos con el formulario I-918.', icon: 'file-warning', slug: 'visa-u-i-918' },
  { name: 'Ciudadanía', text: 'Naturalización a través del formulario N-400.', icon: 'flag', slug: 'ciudadania-n-400' },
  { name: 'FOIA', text: 'Solicitud de registros migratorios ante las autoridades.', icon: 'file-search', slug: 'solicitud-foia' },
]
