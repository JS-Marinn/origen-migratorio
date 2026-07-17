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
  category: 'Familiar' | 'Humanitario' | 'Tribunal' | 'Residencia' | 'Trabajo' | 'Registros'
  requirements?: ServiceRequirement[]
}

export const services: Service[] = [
  {
    slug: 'procesos-familiares',
    name: 'Procesos familiares',
    short: 'Reunificación familiar, peticiones y ajustes migratorios.',
    intro:
      'Los procesos familiares permiten que ciudadanos y residentes permanentes de Estados Unidos puedan realizar peticiones migratorias a favor de ciertos familiares. En Origen Migratorio LLC te apoyamos con la preparación documental organizada de tu caso, para que cada formulario y cada evidencia queden correctamente estructurados desde el inicio.',
    category: 'Familiar',
    requirements: [
      {
        title: 'Relación familiar calificada',
        text: 'La ley reconoce categorías específicas de familiares que pueden ser peticionados, como cónyuges, hijos, padres y hermanos, según el estatus del peticionario.',
      },
      {
        title: 'Estatus del peticionario',
        text: 'Las opciones disponibles varían si la persona que peticiona es ciudadana estadounidense o residente permanente.',
        highlight: true,
      },
      {
        title: 'Documentación de soporte',
        text: 'Actas, certificados y evidencias que demuestren la relación familiar deben organizarse de forma completa y coherente.',
      },
      {
        title: 'Análisis del caso',
        text: 'Cada situación es distinta. Una evaluación individual permite identificar la vía más adecuada para tu familia.',
      },
    ],
  },
  {
    slug: 'asilo',
    name: 'Asilo',
    short: 'Protección para quienes temen regresar a su país de origen.',
    intro:
      'El asilo es una forma de protección migratoria para personas que se encuentran en Estados Unidos o en un puerto de entrada y que no pueden regresar a su país de origen porque temen ser perseguidas o han sufrido persecución por motivos específicos establecidos por la ley. Para iniciar este proceso, es importante cumplir con ciertos requisitos generales. Cada caso debe analizarse de manera individual para determinar si reúne las condiciones necesarias para presentar una solicitud de asilo.',
    category: 'Humanitario',
    requirements: [
      {
        title: 'Fundamento del temor',
        text: 'El solicitante debe demostrar que existe un temor real y razonable de regresar a su país debido a situaciones de persecución o riesgo para su seguridad.',
      },
      {
        title: 'Motivos protegidos por la ley',
        text: 'La persecución debe estar relacionada con al menos uno de los motivos reconocidos por la legislación migratoria: raza, religión, nacionalidad, opinión política o pertenencia a un grupo social determinado.',
        highlight: true,
      },
      {
        title: 'Presencia en Estados Unidos',
        text: 'Para solicitar asilo, la persona debe encontrarse físicamente dentro de Estados Unidos o presentar su solicitud en un puerto de entrada autorizado.',
      },
      {
        title: 'Presentación dentro del plazo',
        text: 'En la mayoría de los casos, la solicitud debe presentarse dentro del primer año desde la última llegada a Estados Unidos. Existen algunas excepciones que pueden aplicar dependiendo de las circunstancias particulares del solicitante.',
      },
      {
        title: 'Reasentamiento en otro país',
        text: 'Generalmente, el solicitante no debe haberse establecido de forma permanente en un tercer país antes de llegar a Estados Unidos.',
      },
      {
        title: 'Restricciones legales',
        text: 'Algunas personas pueden no ser elegibles para solicitar asilo debido a circunstancias específicas previstas por la ley, como determinados antecedentes penales, participación en actos de persecución u otras causales de inadmisibilidad.',
      },
    ],
  },
  {
    slug: 'vawa',
    name: 'VAWA',
    short: 'Protección para víctimas de violencia doméstica o abuso.',
    intro:
      'La Ley de Violencia contra la Mujer (VAWA) ofrece una vía de protección migratoria para personas —de cualquier género— que han sufrido maltrato o crueldad extrema por parte de un familiar ciudadano o residente permanente. Este proceso es confidencial y se puede presentar sin que el agresor lo sepa. Te acompañamos con una preparación documental cuidadosa, discreta y respetuosa.',
    category: 'Humanitario',
    requirements: [
      {
        title: 'Relación calificada',
        text: 'Cónyuge, ex cónyuge, padre o hijo de un ciudadano estadounidense, o cónyuge, ex cónyuge o padre de un residente permanente.',
      },
      {
        title: 'Maltrato o crueldad extrema',
        text: 'Haber sufrido maltrato físico o crueldad extrema por parte del familiar ciudadano o residente durante la relación.',
        highlight: true,
      },
      {
        title: 'Confidencialidad total',
        text: 'La solicitud se presenta sin notificar al agresor. Tu información permanece protegida durante todo el proceso.',
      },
      {
        title: 'Evaluación personalizada',
        text: 'Cada historia es única. Una consulta permite analizar tu situación con sensibilidad y determinar las opciones disponibles.',
      },
    ],
  },
  {
    slug: 'visa-u',
    name: 'Visa U',
    short: 'Para víctimas de ciertos delitos que colaboran con las autoridades.',
    intro:
      'La Visa U es una protección migratoria para personas que han sido víctimas de ciertos delitos en Estados Unidos y que han colaborado, colaboran o están dispuestas a colaborar con las autoridades en la investigación o persecución del caso. Nuestro equipo te orienta en la organización de la documentación necesaria para presentar una solicitud sólida.',
    category: 'Humanitario',
    requirements: [
      {
        title: 'Víctima de un delito calificado',
        text: 'La ley contempla una lista de delitos específicos que dan acceso a esta protección, como agresión, violencia doméstica o secuestro, entre otros.',
      },
      {
        title: 'Colaboración con las autoridades',
        text: 'La persona debe haber ayudado, estar ayudando o estar dispuesta a ayudar en la investigación o persecución del delito.',
        highlight: true,
      },
      {
        title: 'Certificación policial',
        text: 'El proceso requiere una certificación firmada por una autoridad competente que confirme la colaboración de la víctima.',
      },
      {
        title: 'Daño sufrido',
        text: 'Debe demostrarse que la persona sufrió daño físico o mental sustancial como consecuencia del delito.',
      },
    ],
  },
  {
    slug: 'tps',
    name: 'TPS',
    short: 'Estatus de Protección Temporal para países designados.',
    intro:
      'El Estatus de Protección Temporal (TPS) es un beneficio migratorio para personas de países designados por el gobierno de Estados Unidos debido a conflictos, desastres naturales u otras condiciones extraordinarias que impiden un regreso seguro. Te ayudamos con la preparación de tu solicitud inicial o reinscripción dentro de los plazos correspondientes.',
    category: 'Humanitario',
    requirements: [
      {
        title: 'Nacionalidad de un país designado',
        text: 'Solo las personas de países con designación vigente de TPS pueden solicitar este beneficio, según las fechas establecidas por las autoridades.',
      },
      {
        title: 'Presencia continua',
        text: 'Debe acreditarse la presencia física continua en Estados Unidos desde la fecha indicada en la designación del país.',
        highlight: true,
      },
      {
        title: 'Registro dentro del plazo',
        text: 'Tanto el registro inicial como las reinscripciones deben presentarse dentro de los periodos oficiales anunciados.',
      },
      {
        title: 'Antecedentes',
        text: 'Ciertos antecedentes penales pueden afectar la elegibilidad, por lo que cada caso debe evaluarse de manera individual.',
      },
    ],
  },
  {
    slug: 'ciudadania',
    name: 'Ciudadanía',
    short: 'Naturalización: el paso final de tu camino migratorio.',
    intro:
      'La naturalización es el proceso mediante el cual un residente permanente puede convertirse en ciudadano de Estados Unidos. Te acompañamos en la preparación organizada de tu solicitud, para que llegues a esta etapa tan importante con un expediente completo y bien estructurado.',
    category: 'Familiar',
    requirements: [
      {
        title: 'Residencia permanente previa',
        text: 'En la mayoría de los casos se requiere haber sido residente permanente durante un periodo determinado antes de solicitar la naturalización.',
      },
      {
        title: 'Presencia física y residencia continua',
        text: 'Existen requisitos de tiempo vivido dentro de Estados Unidos y de permanencia en el estado donde se presenta la solicitud.',
        highlight: true,
      },
      {
        title: 'Buen carácter moral',
        text: 'El solicitante debe demostrar buen carácter moral durante el periodo establecido por la ley.',
      },
      {
        title: 'Conocimientos de inglés y civismo',
        text: 'La mayoría de los solicitantes debe aprobar exámenes de inglés y de historia y gobierno de Estados Unidos. Existen excepciones según edad y tiempo de residencia.',
      },
    ],
  },
  {
    slug: 'residencia-permanente',
    name: 'Residencia permanente',
    short: 'Solicitud, renovación o reemplazo de la Green Card.',
    intro:
      'La residencia permanente es el estatus que permite vivir y trabajar de forma indefinida en Estados Unidos. Ofrecemos apoyo documental para solicitudes y ajustes de estatus, así como para renovaciones o reemplazos de la tarjeta de residencia, cuidando cada detalle de tu expediente.',
    category: 'Residencia',
    requirements: [
      {
        title: 'Vía de elegibilidad',
        text: 'Existen distintas vías para obtener la residencia —familiar, humanitaria, laboral u otras— y cada una tiene requisitos propios.',
      },
      {
        title: 'Expediente completo',
        text: 'Formularios, evidencias y documentos de identidad deben presentarse de manera completa, coherente y organizada.',
        highlight: true,
      },
      {
        title: 'Renovaciones a tiempo',
        text: 'La tarjeta de residencia tiene vigencia; renovarla o reemplazarla a tiempo evita complicaciones con empleadores y autoridades.',
      },
      {
        title: 'Seguimiento del caso',
        text: 'Realizamos seguimiento administrativo para mantenerte informado del estado de tu trámite en cada etapa.',
      },
    ],
  },
  {
    slug: 'permisos-de-trabajo',
    name: 'Permisos de trabajo',
    short: 'Solicitudes iniciales y renovaciones del permiso de empleo.',
    intro:
      'El permiso de trabajo (EAD) permite a ciertas personas con procesos migratorios en curso trabajar legalmente en Estados Unidos. Preparamos solicitudes iniciales y renovaciones con la organización documental necesaria para evitar retrasos innecesarios.',
    category: 'Trabajo',
    requirements: [
      {
        title: 'Categoría elegible',
        text: 'El permiso de trabajo se otorga bajo categorías específicas vinculadas a procesos migratorios en curso, como asilo, TPS o ajustes de estatus.',
      },
      {
        title: 'Renovación anticipada',
        text: 'Se recomienda iniciar la renovación con la debida anticipación para evitar interrupciones en la autorización de empleo.',
        highlight: true,
      },
      {
        title: 'Documentación actualizada',
        text: 'Datos personales, evidencias y fotografías deben cumplir con los requisitos vigentes al momento de la presentación.',
      },
      {
        title: 'Acompañamiento continuo',
        text: 'Te mantenemos informado sobre el avance de tu solicitud y los pasos siguientes una vez emitido el permiso.',
      },
    ],
  },
  {
    slug: 'foia',
    name: 'Registros migratorios (FOIA)',
    short: 'Solicitud de tu historial migratorio ante las autoridades.',
    intro:
      'A través de una solicitud FOIA (Freedom of Information Act) es posible obtener copias de tu historial migratorio ante las autoridades correspondientes. Conocer tu historial es un paso fundamental antes de iniciar casi cualquier proceso: permite evaluar tu caso con información real y completa.',
    category: 'Registros',
    requirements: [
      {
        title: 'Identidad verificada',
        text: 'La solicitud requiere datos de identificación claros y consistentes para que las autoridades puedan localizar el expediente.',
      },
      {
        title: 'Base para tu estrategia',
        text: 'El historial obtenido permite evaluar con precisión las opciones migratorias disponibles antes de iniciar un proceso.',
        highlight: true,
      },
      {
        title: 'Diversas agencias',
        text: 'Dependiendo del caso, las solicitudes pueden dirigirse a distintas dependencias del gobierno relacionadas con inmigración.',
      },
      {
        title: 'Interpretación del historial',
        text: 'Te orientamos sobre el contenido recibido y su relevancia para los siguientes pasos de tu caso.',
      },
    ],
  },
  {
    slug: 'tribunal-de-inmigracion',
    name: 'Tribunal de inmigración',
    short: 'Preparación documental para procesos ante la Corte.',
    intro:
      'Los procesos ante la Corte de Inmigración exigen una preparación documental rigurosa y puntual. Brindamos apoyo administrativo y paralegal en la organización de expedientes, evidencias y formularios, trabajando de la mano de los abogados que representan cada caso.',
    category: 'Tribunal',
    requirements: [
      {
        title: 'Expediente organizado',
        text: 'Un expediente completo, cronológico y bien estructurado es la base de una presentación sólida ante la Corte.',
      },
      {
        title: 'Trabajo junto a abogados',
        text: 'Nuestro apoyo paralegal se coordina con los abogados del caso para facilitar la preparación documental de cada etapa.',
        highlight: true,
      },
      {
        title: 'Fechas y plazos',
        text: 'Cada presentación tiene plazos estrictos. El seguimiento administrativo ayuda a que ningún vencimiento pase desapercibido.',
      },
      {
        title: 'Comunicación constante',
        text: 'Mantenemos informado al cliente sobre el estado de su proceso y los documentos necesarios en cada fase.',
      },
    ],
  },
]

export const homeCategories = [
  {
    name: 'Procesos familiares',
    text: 'Reunificación familiar, peticiones y ajustes migratorios.',
    icon: 'users',
    slug: 'procesos-familiares',
  },
  {
    name: 'Procesos humanitarios',
    text: 'Opciones de protección para personas que enfrentan circunstancias especiales.',
    icon: 'shield',
    slug: 'asilo',
  },
  {
    name: 'Tribunal de inmigración',
    text: 'Preparación administrativa y documental para procesos ante la Corte de Inmigración.',
    icon: 'scale',
    slug: 'tribunal-de-inmigracion',
  },
  {
    name: 'Residencia permanente',
    text: 'Solicitudes y trámites para la obtención o renovación de la residencia permanente.',
    icon: 'id-card',
    slug: 'residencia-permanente',
  },
  {
    name: 'Permisos de trabajo',
    text: 'Preparación de solicitudes iniciales y renovaciones.',
    icon: 'briefcase',
    slug: 'permisos-de-trabajo',
  },
  {
    name: 'Registros migratorios (FOIA)',
    text: 'Solicitud y obtención de registros migratorios ante las autoridades correspondientes.',
    icon: 'file-search',
    slug: 'foia',
  },
]
