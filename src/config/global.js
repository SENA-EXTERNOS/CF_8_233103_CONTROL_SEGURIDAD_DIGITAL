export default {
  global: {
    componenteFormativo: 'Ciberseguridad - Impacto de eventos e incidentes',
    descripcionCurso:
      'En este material se introduce al aprendiz en la validación del impacto de incidentes de seguridad con base en criterios técnicos y herramientas de monitoreo, de acuerdo con el modelo del negocio. Para ello, se hace necesario revisar, clasificar, validar y notificar el estado del incidente de acuerdo a una política de gestión de eventos eincidentes.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },

      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Validación de incidentes',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'CSIRT',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'CERT',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Centro de gestión de incidentes',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Ciclo de gestión de incidentes',
            hash: 't_1_4',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Monitoreo de eventos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Plataformas de seguridad',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Notificación de respuestas',
            hash: 't_2_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'CCENT/CCNA ICND1 100 - 105 : <em>official cert guide</em>',
      referencia:
        'Wendell, O. (2016) <em>CCENT/CCNA ICND1 100 - 105: official cert guide</em>. Cisco Systems.',
      tipo: 'Libro',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1j5choe/sena_aleph000106585',
    },
    {
      tema: 'Estrategia de ciberseguridad para la sociedad digital.',
      referencia:
        'Núñez Jarrosay, L. (2021) Estrategia de ciberseguridad para la sociedad digital. <em>Telemática</em>. 20 (1). P. 47-53',
      tipo: 'Artículo',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1i756fj/TN_cdi_doaj_primary_oai_doaj_org_article_f492659b81964e40aa0cfa17afaf7b25',
    },
    {
      tema:
        'Propuesta de infraestructura técnica de seguridad para un equipo de respuesta ante incidentes de seguridad (CSIRT).',
      referencia:
        'Ramírez Luna H. E. & Mejía Miranda, J. (2015) Propuesta de infraestructura técnica de seguridad para un equipo de respuesta ante incidentes de seguridad (CSIRT). <em>ReCIBE. Revista electrónica de Computación, Informática, Biomédica y Electrónica</em> p. VI',
      tipo: 'Artículo',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1i756fj/TN_cdi_doaj_primary_oai_doaj_org_article_2fb23d76e9204433a27a187b95886220',
    },
    {
      tema:
        '<em>Specialized CSIRT for Incident Response Management in Smart Grids</em>',
      referencia:
        'Martins, R.J, Días Knob, L. A. Germano Da Silva, E. Araujo Wickboldt, J., Schaeffer-Filho, A., & Zambenedetti Granville, L. (2018) Specialized CSIRT for Incident Response Management in Smart Grids. <em>Journal of Network and Systems Management</em> 27 (1) p. 269-285.',
      tipo: 'Artículo',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1i756fj/TN_cdi_proquest_journals_2030542969',
    },
  ],
  glosario: [
    {
      termino: 'CERT<em> (Computer Emergency Response Team)</em>',
      significado: 'equipo para dar respuesta a las emergencias informáticas.',
    },
    {
      termino:
        'Contención, erradicación y recuperación de gestión de incidentes',
      significado:
        'después de analizar y priorizar el incidente, se procede a contener sus consecuencias y propagación. Las acciones por implementar deben ser previamente analizadas en conjunto con el equipo de atención de incidentes.',
    },
    {
      termino: 'CSIRT',
      significado:
        'equipo que tiene la función de prestar los servicios que permiten prevenir y dar respuesta a incidentes de seguridad de la información. Se encargan , generalmente, de cubrir un área específica en una entidad pública o privada.',
    },
    {
      termino: 'Detección y análisis de gestión de incidentes',
      significado:
        'es fundamental mitigar el impacto de los incidentes por medio de acciones eficientes, logrando alertar a la entidad cada vez que exista una situación. Después que el incidente se haya gestionado se debe realizar un informe, detallando causas, costos y el paso a paso a seguir para cuando se presente a futuro.',
    },
    {
      termino: 'Evento',
      significado:
        'es una ocurrencia que al presentarse denota una posible vulneración en las políticas de seguridad de la información (PSI) o fallas significativas en los protocolos de control. Los eventos pueden o no pueden ocurrir, sin embargo, se puede apreciar como incumplimientos en la implementación de las PSI, o acciones sospechosas que pretenden sustraer información de los sistemas o aplicaciones.',
    },
    {
      termino: 'Incidente',
      significado:
        'suceso no deseado y no planeado que puede causar daño. Según la norma ISO 27035 ‘Gestión de incidentes de SI’, se describe como un evento o serie de eventos de SI inesperados, que tienen una alta probabilidad de comprometer o interrumpir la operatividad de la entidad o empresa amenazando y afectando la transparencia, confidencialidad, disponibilidad e integridad de la información, o los equipos que la almacenan y gestionan.',
    },
    {
      termino: 'Preparación de gestión de incidentes',
      significado:
        'se intenta minimizar la cantidad de incidentes mediante la aplicación de controles basados en resultados de evaluación de riesgos. Es importante tener presente que hay una cierta cantidad de incidentes que no pueden ser tratados, estos se denominan residuales.',
    },
    {
      termino: 'Recolección y manejo de evidencias en gestión de incidentes',
      significado:
        'la recolección de evidencia y su posterior manejo debe realizarse con personal altamente entrenado y capacitado para llevar a cabo dichas acciones. La recolección de información es fundamental para iniciar procesos judiciales contra los atacantes, pero debe ser reunida cumpliendo estándares y recomendaciones legales, de acuerdo al procedimiento estipulado por la entidad.',
    },
    {
      termino: 'Servicios en gestión de calidad de SI',
      significado:
        'dan valor agregado a los servicios reactivos y proactivos, además de ser complementarios a las buenas prácticas existentes en otros sectores, como las Tecnologías de la Información (TI), auditorías o áreas de capacitación.',
    },
    {
      termino: 'Servicios proactivos',
      significado:
        'son aquellos que se presentan antes de ocurrir un suceso, llamados también servicios preventivos. Estos se anticipan a los eventos e incidentes protegiendo y asegurando los activos de la información.',
    },
    {
      termino: 'Servicios reactivos',
      significado:
        'son los que se inician cuando el incidente ya ocurrió, es decir, un equipo de oficina comprometido o infectado, intrusos en registros de información, malware disperso por toda la red, software vulnerado o eventos identificados sin mecanismo previos de protección.',
    },
  ],
  referencias: [
    {
      referencia:
        'Carnegie Mellon University (2022) <em>The CERT Division.</em>',
      link: 'https://www.sei.cmu.edu/about/divisions/cert/',
    },
    {
      referencia:
        'Comisión Europea (s.f.) <em>¿Qué es una violación de la seguridad de los datos y qué deberíamos hacer en caso de sufrir una?</em>',
      link:
        'https://ec.europa.eu/info/law/law-topic/data-protection/reform/rules-business-and-organisations/obligations/what-data-breach-and-what-do-we-have-do-case-data-breach_es#:~:text=Una%20violaci%C3%B3n%20de%20la%20seguridad%20de%20los%20datos%20se%20produce,o%20integridad%20de%20los%20datos',
    },
    {
      referencia:
        'Consejo Nacional de Política Económica y Social –CONPES-, República de Colombia & Departamento de Planeación –DNP- (2011) Lineamientos de Política para Ciberseguridad y Ciberdefensa.',
      link: '',
    },
    {
      referencia: 'Heide der Van, M. (2020) <em>Estableciendo un CSIRT.</em>',
      link: '',
    },
    {
      referencia:
        'DELL (2022) <em>Soluciones de seguridad destacadas para las principales amenazas actuales.</em>',
      link:
        'https://www.dell.com/es-co/dt/solutions/security/index.htm?gacd=10017601-14052-5761040-342546571-0&dgc=ST&gclid=Cj0KCQjwhY-aBhCUARIsALNIC041EsUQV8wdaADw7UR04_aIRZrbdh9DIRjuQjsWgziI0Z4-Y14q9lgaAma0EALw_wcB&gclsrc=aw.ds',
    },
    {
      referencia:
        'Instituto para la Economía Social -IPES (2017) Gestión de incidentes de seguridad de la información.',
      link: '',
    },
    {
      referencia:
        'Ley 1273 de 2009. Por medio de la cual se modifica el Código Penal, se crea un nuevo bien jurídico tutelado – denominado ‘de la protección de la información y de los datos’ - y se preservan integralmente los sistemas que utilicen las tecnologías de la información y las comunicaciones, entre otras disposiciones. Enero 5 de 2009. DO N° 47223.',
      link: '',
    },
    {
      referencia:
        'Martins, R.J, Días Knob, L. A. Germano Da Silva, E. Araujo Wickboldt, J., Schaeffer-Filho, A., & Zambenedetti Granville, L. (2018) Specialized CSIRT for Incident Response Management in Smart Grids. <em>Journal of Network and Systems Management</em> 27 (1) p. 269-285.',
      link: '',
    },
    {
      referencia:
        'Ministerio de las Tecnologías de la Información y la Comunicaciones –MINTIC (2016). Guía N° 21. Guía para la Gestión y Clasificación de Incidentes de Seguridad de la Información.',
      link: '',
    },
    {
      referencia:
        'Núñez Jarrosay, L. (2021) Estrategia de ciberseguridad para la sociedad digital. <em>Telemática</em>. 20 (1). P. 47-53',
      link: '',
    },
    {
      referencia:
        'Ramírez Luna H. E. & Mejía Miranda, J. (2015) Propuesta de infraestructura técnica de seguridad para un equipo de respuesta ante incidentes de seguridad (CSIRT). <em>ReCIBE. Revista electrónica de Computación, Informática, Biomédica y Electrónica</em> p. VI',
      link: '',
    },
    {
      referencia:
        'Wendell, O. (2016) <em>CCENT/CCNA ICND1 100 - 105: official cert guide</em>. Cisco Systems.',
      link: '',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
