import type { ServiceRequirement } from './services';

export const consumerRequirements: Record<string, ServiceRequirement[]> = {
  'peticion-familiar': [
    { title: 'Relación familiar calificada', text: 'La ley reconoce categorías específicas de familiares que pueden ser peticionados, como cónyuges, hijos, padres y hermanos, según el estatus del peticionario.' },
    { title: 'Documentación de la relación', text: 'Actas, certificados y evidencias que demuestren la relación familiar deben organizarse de forma completa y coherente.', highlight: true },
    { title: 'Estatus del peticionario', text: 'Las opciones disponibles varían si la persona que peticiona es ciudadana estadounidense o residente permanente.' },
    { title: 'Evaluación del caso', text: 'Cada situación es distinta. Una evaluación individual permite identificar la vía más adecuada para tu familia.' },
  ],
  'asilo-afirmativo': [
    { title: 'Fundamento del temor', text: 'El solicitante debe demostrar que existe un temor real y razonable de regresar a su país debido a situaciones de persecución o riesgo para su seguridad.' },
    { title: 'Motivos protegidos por la ley', text: 'La persecución debe estar relacionada con al menos uno de los motivos reconocidos: raza, religión, nacionalidad, opinión política o pertenencia a un grupo social determinado.', highlight: true },
    { title: 'Presencia en Estados Unidos', text: 'Para solicitar asilo, la persona debe encontrarse físicamente dentro de Estados Unidos.' },
    { title: 'Plazo de presentación', text: 'En la mayoría de los casos, la solicitud debe presentarse dentro del primer año desde la última llegada a Estados Unidos.' },
  ],
  'asilo-en-corte': [
    { title: 'Caso en proceso de remoción', text: 'La persona debe tener un caso activo ante la Corte de Inmigración.' },
    { title: 'Fundamento de asilo sólido', text: 'Debe existir un temor creíble de persecución por motivos protegidos por la ley migratoria.', highlight: true },
    { title: 'Expediente documental completo', text: 'Un expediente organizado, cronológico y completo es esencial para una presentación sólida ante la Corte.' },
    { title: 'Coordinación con abogados', text: 'Trabajamos junto al abogado del caso para organizar la documentación de manera profesional.' },
  ],
  'vawa-i-360': [
    { title: 'Relación calificada', text: 'Cónyuge, ex cónyuge, padre o hijo de un ciudadano estadounidense o residente permanente.' },
    { title: 'Maltrato o crueldad extrema', text: 'Haber sufrido maltrato físico o crueldad extrema por parte del familiar ciudadano o residente.', highlight: true },
    { title: 'Confidencialidad total', text: 'La solicitud se presenta sin notificar al agresor. Tu información permanece protegida durante todo el proceso.' },
    { title: 'Evaluación personalizada', text: 'Cada historia es única. Una consulta permite analizar tu situación con sensibilidad.' },
  ],
  'visa-u-i-918': [
    { title: 'Víctima de un delito calificado', text: 'La ley contempla una lista de delitos específicos que dan acceso a esta protección.' },
    { title: 'Colaboración con las autoridades', text: 'La persona debe haber ayudado, estar ayudando o estar dispuesta a ayudar en la investigación o persecución del delito.', highlight: true },
    { title: 'Certificación policial', text: 'El proceso requiere una certificación firmada por una autoridad competente.' },
    { title: 'Daño sufrido', text: 'Debe demostrarse que la persona sufrió daño físico o mental sustancial como consecuencia del delito.' },
  ],
  'renovacion-tps': [
    { title: 'Nacionalidad de un país designado', text: 'Solo las personas de países con designación vigente de TPS pueden solicitar este beneficio.' },
    { title: 'Presencia continua en Estados Unidos', text: 'Debe acreditarse la presencia física continua desde la fecha indicada en la designación del país.', highlight: true },
    { title: 'Registro dentro del plazo', text: 'Tanto el registro inicial como las reinscripciones deben presentarse dentro de los periodos oficiales.' },
    { title: 'Evaluación de antecedentes', text: 'Ciertos antecedentes pueden afectar la elegibilidad, por lo que cada caso debe evaluarse de manera individual.' },
  ],
  'ciudadania-n-400': [
    { title: 'Residencia permanente previa', text: 'En la mayoría de los casos se requiere haber sido residente permanente durante un periodo determinado.' },
    { title: 'Presencia física y residencia continua', text: 'Existen requisitos de tiempo vivido dentro de Estados Unidos y de permanencia en el estado de solicitud.', highlight: true },
    { title: 'Buen carácter moral', text: 'El solicitante debe demostrar buen carácter moral durante el periodo establecido por la ley.' },
    { title: 'Conocimientos de inglés y civismo', text: 'La mayoría de los solicitantes debe aprobar exámenes de inglés y de historia y gobierno de Estados Unidos.' },
  ],
  'renovacion-residencia': [
    { title: 'Vía de elegibilidad', text: 'Existen distintas vías para obtener la residencia, y cada una tiene requisitos propios.' },
    { title: 'Expediente completo y organizado', text: 'Formularios, evidencias y documentos de identidad deben presentarse de manera completa y coherente.', highlight: true },
    { title: 'Renovaciones a tiempo', text: 'La tarjeta de residencia tiene vigencia; renovarla o reemplazarla a tiempo evita complicaciones.' },
    { title: 'Seguimiento del caso', text: 'Realizamos seguimiento administrativo para mantenerte informado del estado de tu trámite.' },
  ],
  'renovacion-permiso-trabajo': [
    { title: 'Categoría elegible', text: 'El permiso de trabajo se otorga bajo categorías específicas vinculadas a procesos migratorios en curso.' },
    { title: 'Renovación anticipada', text: 'Se recomienda iniciar la renovación con la debida anticipación para evitar interrupciones en la autorización de empleo.', highlight: true },
    { title: 'Documentación actualizada', text: 'Datos personales, evidencias y fotografías deben cumplir con los requisitos vigentes.' },
    { title: 'Acompañamiento continuo', text: 'Te mantenemos informado sobre el avance de tu solicitud y los pasos siguientes.' },
  ],
  'solicitud-foia': [
    { title: 'Identidad verificada', text: 'La solicitud requiere datos de identificación claros y consistentes.' },
    { title: 'Base para tu estrategia', text: 'El historial obtenido permite evaluar con precisión las opciones migratorias disponibles.', highlight: true },
    { title: 'Diversas agencias', text: 'Dependiendo del caso, las solicitudes pueden dirigirse a distintas dependencias del gobierno.' },
    { title: 'Interpretación del historial', text: 'Te orientamos sobre el contenido recibido y su relevancia para los siguientes pasos de tu caso.' },
  ],
  'ajuste-estatus': [
    { title: 'Visa de inmigrante disponible', text: 'Debe haber una visa de inmigrante disponible para la categoría correspondiente.' },
    { title: 'Presencia legal en Estados Unidos', text: 'Haber ingresado legalmente al país o cumplir con los requisitos para ajuste de estatus.', highlight: true },
    { title: 'Documentación completa', text: 'Formularios, evidencias y documentos de identidad deben presentarse de manera organizada.' },
    { title: 'Evaluación individual', text: 'Cada caso debe analizarse para determinar la vía de ajuste más adecuada.' },
  ],
  'ajuste-vawa': [
    { title: 'Solicitud VAWA aprobada o pendiente', text: 'El ajuste de estatus está vinculado a una petición bajo la Ley de Violencia contra la Mujer.' },
    { title: 'Presencia en Estados Unidos', text: 'La persona debe encontrarse físicamente en EE.UU. para solicitar el ajuste de estatus.', highlight: true },
    { title: 'Evidencia de elegibilidad', text: 'Documentación que demuestre el cumplimiento de los requisitos para el ajuste.' },
    { title: 'Coordinación del expediente', text: 'Trabajamos junto a tu abogado para organizar el paquete documental completo.' },
  ],
  'visa-prometido': [
    { title: 'Relación genuina', text: 'La pareja debe demostrar una relación comprometida y haber tenido un encuentro en persona.' },
    { title: 'Intención de contraer matrimonio', text: 'Ambas partes deben tener la intención de casarse dentro de los 90 días posteriores a la llegada.', highlight: true },
    { title: 'Ciudadanía del peticionario', text: 'El prometido que presenta la petición debe ser ciudadano estadounidense.' },
    { title: 'Documentación de la relación', text: 'Evidencias que demuestren la relación y el encuentro en persona.' },
  ],
  'exencion-provisional': [
    { title: 'Presencia ilegal acumulada', text: 'Haber acumulado presencia ilegal en EE.UU. que activa la barra de admisión.' },
    { title: 'Familiar ciudadano o residente', text: 'Demostrar que la denegación causaría dificultad extrema a un familiar directo.', highlight: true },
    { title: 'Salida programada para entrevista', text: 'La exención se solicita antes de salir de EE.UU. para la entrevista consular.' },
    { title: 'Evaluación de dificultad extrema', text: 'Cada caso requiere un análisis detallado de las circunstancias familiares.' },
  ],
  'eliminacion-condiciones': [
    { title: 'Residencia condicional previa', text: 'Haber obtenido la residencia a través de matrimonio dentro de los primeros dos años.' },
    { title: 'Matrimonio de buena fe', text: 'Demostrar que el matrimonio no fue contraído con fines migratorios.', highlight: true },
    { title: 'Solicitud conjunta o exención', text: 'Generalmente ambos cónyuges firman la solicitud, o se tramita una exención.' },
    { title: 'Evidencia de vida matrimonial', text: 'Documentos que demuestren una vida en común y relación genuina.' },
  ],
  'renovacion-daca': [
    { title: 'Llegada a EE.UU. siendo menor', text: 'Haber llegado a Estados Unidos antes de cumplir los 16 años.' },
    { title: 'Presencia continua', text: 'Residir en EE.UU. de forma continua desde una fecha específica establecida por el programa.', highlight: true },
    { title: 'Educación o servicio militar', text: 'Estar estudiando, haber completado estudios o servir en el ejército.' },
    { title: 'Antecedentes penales', text: 'No tener condenas por delitos graves o ciertos delitos menores.' },
  ],
  'procesamiento-consular': [
    { title: 'Petición de inmigrante aprobada', text: 'Contar con una petición aprobada por USCIS que sirva como base del proceso.' },
    { title: 'Entrevista consular', text: 'Completar el proceso de entrevista en el consulado estadounidense del país de origen.', highlight: true },
    { title: 'Documentación organizada', text: 'Formularios, evidencias y documentos civiles preparados para presentación consular.' },
    { title: 'Acompañamiento en el proceso', text: 'Te apoyamos en la preparación del paquete documental para el trámite consular.' },
  ],
};
