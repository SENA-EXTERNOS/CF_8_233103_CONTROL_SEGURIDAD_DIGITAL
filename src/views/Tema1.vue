<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Validación de incidentes

    .row.justify-content-around.align-items-center.mt-5.background-full
      .col-lg-4
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/temas/tema1/img1.svg', alt='Texto que describa la imagen').imagen-full-tema-1.margin-image
      .col-lg-8
        p(data-aos="fade-down") En el día a día se pueden cometer incidentes de seguridad inadvertidamente, por esto es necesario describir algunas situaciones, a manera de ejemplo, para no caer en estos errores, bien sea por desconocimiento, descuido o imprudencia.

    .row.justify-content-around.align-items-center.mt-5
      p #[b Situación 1.]
      .col-lg-10
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img2.svg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Cuando se usa el correo corporativo para iniciar sesión o registrarse en alguna red social, o simplemente para publicar el nombre o logo de la empresa para la cual se trabaja, o fotografías donde quede expuesta la imagen corporativa; se debe evitar realizar bromas y comentarios que pueden llegar a afectar el perfil personal o profesional.

    .row.mt-5
      p #[b Situación 2.]   

      p Exponer información en el puesto de trabajo, bien sea por descuido o dejando notas pegadas en el escritorio con información sensible, como datos de acceso a plataformas, bancos y claves. A continuación se describe el comportamiento de unos personajes, ¿Con cuál de ellos se identifica?

 
    .tarjeta.tarjeta--gris.p-4
      LineaTiempoC.color-secundario(text-small)
        .row.justify-content-around.align-items-center(titulo="El despistado")
          .col-md-4
            figure
              img(src='@/assets/curso/temas/tema1/img3.svg', alt='Texto que describa la imagen')

          .col-md-8.mb-4.mb-md-0
            p #[b Su lema es:] "déjeme que yo entiendo mi desorden", algunas de las características de este personaje son:

            ul.lista-ul--color
              li 
                i.fas.fa-check
                | Todo está en su escritorio, notas, datos de acceso, etc. A la vista de todo el mundo.

              li 
                i.fas.fa-check
                | Tiene una foto de su hijo cuando era bebé, pero este ya es todo un profesional.

              li 
                i.fas.fa-check
                | Los últimos recibos de servicios públicos cancelados.

              li 
                i.fas.fa-check
                | Dos ediciones de la revista Dinero.
        
            p.text-blue #[b El nivel de riesgo de este personaje es ‘muy alto’.]

        .row.justify-content-around.align-items-center(titulo="El subordinado")

          .col-md-4
            figure
              img(src='@/assets/curso/temas/tema1/img4.svg', alt='Texto que describa la imagen')

          .col-md-8.mb-4.mb-md-0
            p #[b Se caracteriza por:]

            ul.lista-ul--color
              li 
                i.fas.fa-check
                p.mb-0 Ordenar la información en carpetas, pero no guardarlas.

              li 
                i.fas.fa-check
                p.mb-0  Usar nombres para las carpetas como; ‘Info nueva’, ‘Info personal’, ‘Info confidencial’, ‘#[i Top secret]’.

              li 
                i.fas.fa-check
                p.mb-0 Su puesto de trabajo está despejado pero guarda un paquete de documentos en un lugar visible con el nombre “confidencial”.

              li 
                i.fas.fa-check
                p.mb-0 Cierra las gavetas del archivador con llave, pero guarda las llaves en el #[i mug] de los lapiceros.

            p.text-blue #[b El nivel de riesgo de este personaje es ‘medio’.]     

        .row.justify-content-around.align-items-center(titulo="El segurísimo")

          .col-md-4
            figure
              img(src='@/assets/curso/temas/tema1/img5.svg', alt='Texto que describa la imagen')

          .col-md-8.mb-4.mb-md-0
            p #[b Sus características son:]

            ul.lista-ul--color
              li 
                i.fas.fa-check
                p.mb-0 Todo está protegido y bajo llave, hasta el teclado.

              li 
                i.fas.fa-check
                p.mb-0 Toda su información está clasificada como ‘confidencial’, hasta las notas escritas.

              li 
                i.fas.fa-check
                p.mb-0 Su escritorio es pulcro, no se ve ni siquiera el pequeño residuo de un tajalápiz.

              li 
                i.fas.fa-check
                p.mb-0 Tiene un #[i software] que le permite cambiar sus contraseñas constantemente.

              li 
                i.fas.fa-check
                p.mb-0  Los fines de semana va a la oficina a revisar su puesto de trabajo.

            p.text-blue #[b El nivel de riesgo de este personaje es ‘bajo’.]

        .row.justify-content-around.align-items-center(titulo="El ejemplar")

          .col-md-4
            figure
              img(src='@/assets/curso/temas/tema1/img6.svg', alt='Texto que describa la imagen')

          .col-md-8.mb-4.mb-md-0
            p #[b Sus características son:]

            ul.lista-ul--color
              li 
                i.fas.fa-check
                p.mb-0 Ordena, clasifica y nombra de forma adecuada su información.

              li 
                i.fas.fa-check
                p.mb-0 Tiene presente lo que se puede guardar en el escritorio y lo que no.

              li 
                i.fas.fa-check
                p.mb-0 Deja las gavetas de su archivador bajo llave, la cual lleva consigo siempre.

              li 
                i.fas.fa-check
                p.mb-0  Nunca deja el PC desatendido y desbloqueado. Usa el comando #[i Windows] + L y su usuario tiene un #[i password] con seguridad fuerte.

              li 
                i.fas.fa-check
                p.mb-0  Socializa y ayuda a implementar la cultura de Seguridad de la Información.

            p.text-blue #[b El nivel de riesgo de este personaje es ‘muy bajo’.] 

    .row.mt-5
      p #[b Situación 3.]

    .row.justify-content-around.align-items-center.mt-5
      .col-lg-10
        .bloque-texto-f.color-secundario.p-3.p-sm-4.p-md-5
          .bloque-texto-f__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img7.svg')})`}"
          )
          .bloque-texto-f__texto.p-4
            p.mb-0 Al reenviar correos masivos, como chistes o cadenas, y no usar la opción ‘CCO’ sino el espacio ‘para’, se está divulgando información sensible, como las cuentas de correo electrónico de terceros sin el consentimiento de los propietarios.

    .row.mt-5
      p #[b Situación 4.]   

    .row.justify-content-around.align-items-center.mt-5
      .col-lg-10
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img8.svg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Si se descargan programas, música, juegos, libros, etc., que cuentan con derechos de autor y se debe pagar por ellos, pero se accede a sus contenidos mediante plataformas que ofrecen estos servicios gratuitos, se está cometiendo un fraude al no respetar los derechos de autor y reproducir el contenido.

    .row.justify-content-around.align-items-center.mt-5
      .col-lg-10
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img9.svg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Existen muchas situaciones del diario vivir en las que se pueden estar cometiendo infracciones de manera involuntaria, poniendo en riesgo la seguridad digital. Es importante reflexionar y autoevaluarse para saber qué tipo de personaje se es y qué situación se está realizando, con el fin de corregir estos hábitos lo más pronto posible, evitando así cualquier inconveniente a futuro.

      p.mt-5 Para validar los incidentes es necesario contar con equipos capacitados en seguridad digital, como los siguientes:

    separador

    #t_1_1

    .titulo-segundo.color-acento-contenido.mt-5(data-aos="zoom-in-left")
      h2 1.1 CSIRT

    .row.justify-content-around.align-items-center.mt-5
      .col-lg-10.order-2.order-lg-1
        TabsA.color-secundario.mb-5        
          .tarjeta.clr-paleYellow.p-4(titulo="Introducción")
            .row.justify-content-around.align-items-center
              .col-lg-8
                p Con la masificación de las TIC, también aumentaron los ataques e incidentes de Seguridad de la Información como, por ejemplo, manipulación de redes de datos, alteración de cajeros electrónicos y transferencias bancarias, generando así pérdidas por billones de pesos. Por tal motivo, el Congreso de la República ha promulgado la Ley 1273 de 2009. Desde entonces, y como buenas prácticas para prevenir y minimizar la exposición a los ataques nacen los CSIRT.
              .col-lg-4
                figure
                  img(src='@/assets/curso/temas/tema1/img10.svg', alt='Texto que describa la imagen')

          .tarjeta.clr-paleYellow.p-4(titulo="Definición")
            p Los CSIRT son un equipo que tiene la función de prestar los servicios que permiten prevenir y dar respuesta a incidentes de seguridad de la información; se encargan generalmente de cubrir un área específica en una entidad pública o privada.

          .tarjeta.clr-paleYellow.p-4(titulo="Objetivos")
            p Los CSIRTS pueden ser internos o externos cubriendo áreas para el manejo de incidentes en los centros de coordinación y análisis, los equipos de vendedores y proveedores. Estas acciones le permiten ser el punto central para el informe de problemas, cuyos objetivos se basan en:

            ul.lista-ul--color
              li 
                i.fas.fa-check
                p.mb-0 Verificar si se ha producido el incidente.

              li 
                i.fas.fa-check
                p.mb-0 Recuperar la continuidad operativa de la empresa.

              li 
                i.fas.fa-check
                p.mb-0 Disminuir las consecuencias del incidente.

              li 
                i.fas.fa-check
                p.mb-0  Especificar la forma en que el ataque se convirtió en incidente.

              li 
                i.fas.fa-check
                p.mb-0 Preparar la entidad para futuros incidentes.

              li 
                i.fas.fa-check
                p.mb-0 Aumentar la seguridad digital y la respuesta a incidentes.

              li 
                i.fas.fa-check
                p.mb-0 Dar seguimiento a las actividades ilegales.

              li 
                i.fas.fa-check
                p.mb-0 Mantener informada de la gestión y respuesta a todos los miembros involucrados e interesados.
              
          .tarjeta.clr-paleYellow.p-4(titulo="Servicios de un CSIRT")

            ul.lista-ul--color
              li 
                i.fas.fa-check
                p.mb-0 #[b Servicios reactivos:] son los que se inician cuando el incidente ya ocurrió, es decir, un equipo de oficina comprometido o infectado, intrusos en registros de información, #[i malware] disperso por toda la red, #[i software] vulnerado o eventos identificados sin mecanismos previos de protección.

              li 
                i.fas.fa-check
                p.mb-0 #[b Servicios proactivos:] son aquellos que se presentan antes de ocurrir un suceso. Son los llamados servicios preventivos, los cuales se anticipan a los eventos e incidentes protegiendo y asegurando los activos de la información.

              li 
                i.fas.fa-check
                p.mb-0 #[b Servicios en gestión de calidad de SI:] dan valor agregado a los reactivos y proactivos, además de ser complementarios a las buenas prácticas existentes en otros sectores como las Tecnologías de la Información (IT), auditorías o áreas de capacitación.

          .tarjeta.clr-paleYellow.p-4(titulo="Funciones")
            p Las funciones del CSIRT se basan en el cumplimiento de los objetivos y la eficiencia del manejo de incidentes, entre las que se pueden destacar:

            ul.lista-ul--color
              li 
                i.fas.fa-check
                p.mb-0 Entregar información confiable de fuentes primarias.

              li 
                i.fas.fa-check
                p.mb-0 Enviar alertas al CSIRT que corresponda.

              li 
                i.fas.fa-check
                p.mb-0 Almacenar y seleccionar la información que se usará en los niveles posteriores.

              li 
                i.fas.fa-check
                p.mb-0 Realizar los procesos de prevención y recuperación de incidentes recientes.

          .tarjeta.clr-paleYellow.p-4(titulo="En conclusión")
            p El CSIRT es el encargado de coordinar las actividades de respuesta a los implicados de un incidente, por lo general, deben incluir a la víctima del incidente, terceros que se encuentren involucrados, y cualquier otra parte que necesite asistencia cuando se realice el análisis, por ejemplo, administradores de redes, soporte IT, proveedores de servicios de internet, otros CSIRT, etc.

    .row.mt-5
      p Es momento de continuar con los equipos que apoyan el proceso de validación de incidentes, los CERT.

    separador

    #t_1_2

    .titulo-segundo.color-acento-contenido.mt-5(data-aos="zoom-in-left")
      h2 1.2 CERT

    .row
      p Los activos de información en una entidad deben ser preservados, y para ello se requiere de protección, ya sea con buenas prácticas de administración o mediante equipos que impidan el acceso no autorizado de usuarios a los repositorios de estos activos.

    TabsC.color-primario
      .py-3.py-md-4(titulo="Definición")
        .row
          .col-md-4
            figure
              img(src='@/assets/curso/temas/tema1/img11.svg', alt='Texto que describa la imagen')

          .col-md-8.mb-4.mb-md-0
            p El CERT (#[i Computer Emergency Response Team]) es el equipo para dar respuestas a las emergencias informáticas. Esta palabra es una marca registrada desde el año 1997 por parte de la #[i Carnegie Mellon University]. Aunque muchas empresas usan el término de forma genérica, es indispensable saber qué se debe solicitar permiso para su uso en la institución, so pena de estar infringiendo una norma legal.

      .py-3.py-md-4(titulo="Enfoque")
        .row
          .col-md-4.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema1/img12.svg', alt='Texto que describa la imagen')
          .col-md-8
            p Según #[i Carnegie Mellon University] (2022), el CERT tiene un enfoque particular y un nicho que opera como un socio con el gobierno, la industria, el cumplimiento de la ley y el mundo académico para mejorar la seguridad y la capacidad de recuperación de los sistemas y redes informáticos. Este estudia problemas que tienen implicaciones generalizadas de ciberseguridad y desarrolla métodos y herramientas avanzados.

      .py-3.py-md-4(titulo="Los CERT y la cibersegruidad")
        .row
          .col-md-4.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema1/img13.svg', alt='Texto que describa la imagen')
          .col-md-8
            p La ciberseguridad a través del CERT está basada en la recepción, análisis y respuesta de novedades y acciones de incidentes de SI para las instituciones públicas y privadas, las cuales destinan sus recursos a la gestión de incidentes de SI y protección de infraestructuras críticas.

      .py-3.py-md-4(titulo="ColCERT")
        .row.justify-content-around.align-items-center
          .col-md-4.mb-4.mb-md-0
            .titulo-sexto.color-acento-contenido
              h5 Figura 1
              p(data-aos="fade-down").mb-0 #[i Modelo de coordinación]
            figure
              img(src='@/assets/curso/temas/tema1/img14.svg', alt='Texto que describa la imagen')
          .col-md-8
            p En Colombia, el Ministerio de Defensa estructuró el ColCERT, que es el equipo coordinador a nivel nacional en aspectos de seguridad informática, el cual será el encargado de apoyar y colaborar con las demás instituciones a nivel nacional, como por ejemplo, el Centro Cibernético Policial - CCP y el Comando Conjunto Cibernético - CCOC. (Consejo Nacional de Política Económica y Social (CONPES), República de Colombia, y Departamento de Planeación (DNP), 2011).

      .py-3.py-md-4(titulo="Misión del ColCERT")
        .row.justify-content-around.align-items-center
          .col-md-4.mb-4.mb-md-0
            .titulo-sexto.color-acento-contenido
              h5 Figura 2
              p(data-aos="fade-down").mb-0 #[i Modelo Relacional del ColCERT]
            figure
              img(src='@/assets/curso/temas/tema1/img15.svg', alt='Texto que describa la imagen')
          .col-md-8
            p El ColCERT es un grupo adscrito al Ministerio de Defensa Nacional, integrado por funcionarios civiles, personal militar y comisiones de otras entidades que debe cumplir con las directrices de la comisión intersectorial de diversas entidades; su misión es coordinar las acciones que se requieran para proteger la infraestructura TI del Estado colombiano, frente a incidencias y ataques que se puedan presentar y comprometan la seguridad nacional.

            p El ColCERT inició operaciones en el segundo semestre del año 2011, siguiendo un modelo relacional diseñado por el Ministerio de Defensa. (Consejo Nacional de Política Económica y Social (CONPES), República de Colombia y Departamento de Planeación (DNP), 2011).

    .row.mt-5
      p El monitoreo continuo de los equipos que hacen parte de la red de seguridad de la información sigue unos protocolos o procedimientos descritos en la normatividad ISO 27000; estos deben ser establecidos o personalizados de acuerdo al tipo y necesidad de la empresa, a través del centro de gestión de incidentes, el cual se describe a continuación:

    separador

    #t_1_3

    .titulo-segundo.color-acento-contenido.mt-5(data-aos="zoom-in-left")
      h2 1.3 Centro de gestión de incidentes

    .row.justify-content-around.align-items-center.mt-5.background-full
      .col-lg-4
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/temas/tema1/img16.svg', alt='Texto que describa la imagen').imagen-full-tema-1.margin-image
      .col-lg-8
        p(data-aos="fade-down") El monitoreo trae consigo la operación de herramientas que protegen y controlan los activos, así como las herramientas de monitoreo y gestión de los incidentes que se puedan presentar.

    .row.mt-5
      p Un centro de gestión de incidentes cumple con varias etapas que conforman un proceso de atención de incidentes en SI, estas se encuentran organizadas de la siguiente manera:

    .row.justify-content-around.align-items-center.mt-5
      .col-lg-10
        AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
          .row.color-acord(titulo="<b style='color: white'>Preparación</b>")
            .col-md-12.mb-4.mb-md-0.text-white
              p Se intenta minimizar la cantidad de incidentes mediante la aplicación de controles basados en resultados de evaluación de riesgos. Es importante tener presente que hay una cierta cantidad de incidentes que no pueden ser tratados, estos se denominan residuales.

          .row.color-acord(titulo="<b style='color: white'>Detección y análisis</b>")
            .col-md-12.text-white
              p Es fundamental mitigar el impacto de los incidentes por medio de acciones eficientes, logrando alertar a la entidad cada vez que exista una situación. Después que el incidente se haya gestionado, se debe realizar un informe detallando causas, costos y el paso a paso que se debe seguir cuando se presente en el futuro.
              
          .row.color-acord(titulo="<b style='color: white'>Contención, erradicación y recuperación</b>")
            .col-md-12.text-white
              p Después de analizar y priorizar el incidente se procede a contener sus consecuencias y propagación. Las acciones por implementar deben ser previamente analizadas en conjunto con el equipo de atención. Cada situación se debe tratar como única, debido a sus formas y comportamientos particulares. Por lo general, algunas acciones que se implementan son:

              ul.lista-ul--color
                li 
                  i.fas.fa-check
                  p.mb-0 Desconexión del sistema y redes cableadas o inalámbricas.

                li 
                  i.fas.fa-check
                  p.mb-0 Deshabilitar funciones del sistema y dejar el servicio en #[i off].

                li 
                  i.fas.fa-check
                  p.mb-0 Revisión posterior del incidente.

          .row.color-acord(titulo="<b style='color: white'>Recolección y manejo de evidencias</b>")
            .col-md-12.text-white
              p La recolección de evidencia y su posterior manejo debe realizarse con personal altamente entrenado y capacitado para llevar a cabo dichas acciones. Las evidencias son fundamentales para iniciar procesos judiciales contra los atacantes, pero deben ser recolectadas cumpliendo estándares y recomendaciones legales, de acuerdo al procedimiento estipulado por la entidad.

    .row.justify-content-around.align-items-center.mt-5
      .col-8
        .titulo-sexto.color-acento-contenido
          h5 Figura 3
          p(data-aos="fade-down").mb-0 #[i Flujograma de gestión de incidentes de SI]
        figure
          img(src='@/assets/curso/temas/tema1/img17.svg', alt='Texto que describa la imagen')
          figcaption.mt-3.text-center Nota: Elaboración propia del experto con la información tomada de Heide der Van, M. (2020) Estableciendo un CSIRT. 


    .row.justify-content-around.align-items-center.mt-5
      .col-lg-9
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img18.svg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 En Colombia existe el Comando de Atención Inmediata Virtual - CAI Virtual, un grupo coordinado por el ColCERT que previene, gestiona e investiga los incidentes que se presentan en SI; este recibe los reportes y la información de delitos cibernéticos, por lo tanto, debe clasificar y perfilar las conductas encontradas. Con ello busca la protección y respuesta de la ciudadanía ante delitos cibernéticos mediante acciones para prevenir, atender, investigar y apoyar en la judicialización de estos en el territorio nacional.

    .row.justify-content-around.align-items-center.mt-3
      .col-lg-9
        .cajonAmarillo.bgr-tarjeta-tema1.p-4.mt-5
          p(data-aos="fade-down") Para finalizar con el primer tema de estudio sobre la validación de incidentes, es necesario reconocer las etapas del ciclo de gestión de incidentes, las cuales son las siguientes:

    separador

    #t_1_4

    .titulo-segundo.color-acento-contenido.mt-5(data-aos="zoom-in-left")
      h2 1.4 Ciclo de gestión de incidentes

    .row
      p Con la implementación del CSIRT se deben considerar e implementar algunos factores que se rigen por los principios del ciclo de vida PHVA -Planificar-Hacer-Verificar-Actuar-, garantizando la mejora continua.

    .row.justify-content-around.align-items-center.mt-5
      .col-8
        .titulo-sexto.color-acento-contenido
          h5 Figura 4
          p(data-aos="fade-down").mb-0 #[i Ilustración del ciclo de Deming (Ciclo PHVA)]
        figure
          img(src='@/assets/curso/temas/tema1/img19.svg', alt='Texto que describa la imagen')
          figcaption.mt-3.text-center Nota: Mejoras continuas a la calidad se logran iterando en el ciclo y consolidando el progreso logrado a través de la estandarización (Johannes Vietze).


    .row.mt-5
      p El equipo encargado del ciclo de la gestión de incidentes debe integrar como mínimo a un directivo de la organización, de tal manera que la aplicabilidad de las acciones no se desvíe del objeto misional de la entidad, y a su vez, que pueda suplir de forma rápida las necesidades que llegue a tener.

      p A continuación, se describen cada una de las etapas del ciclo de gestión de incidentes. 

    .row.justify-content-around.align-items-center.mt-5
      .col-6
        ImagenInfografica.color-primario
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema1/img20.svg', alt='Texto que describa la imagen')

          .tarjeta.color-acento-contenido.p-3(x="94%" y="25.5%" numero="1")
            p Se implementa el plan de acción previamente planificado, que contiene las políticas para el manejo de incidentes e intercambio de información.

          .tarjeta.color-acento-contenido.p-3(x="89.5%" y="82.5%" numero="2")
            p Se realiza el análisis de desempeño grupal, teniendo en cuenta el cumplimiento de las tareas más importantes, involucrando a todos los miembros del equipo.

          .tarjeta.color-acento-contenido.p-3(x="5.5%" y="86.5%" numero="3")
            p Se decide qué mejoras realizar al proceso, o qué acciones adicionales implementar, abarcando otras áreas o tipos de incidentes nuevos que se presenten. Iniciar nuevamente el ciclo con la etapa de ‘planificar’, con el propósito de implementar estas mejoras.

          .tarjeta.color-acento-contenido.p-3(x="6%" y="13.5%" numero="4")
            p En esta etapa se define el marco para el CSIRT, además del presupuesto con todos los costos operacionales, para llevar a cabo las acciones de tratamiento de los incidentes. Este debe ser presentado ante la junta directiva de la organización.

    .row.mt-5
      p A continuación, se presenta a manera de ejemplo el ciclo completo de la gestión de incidentes de la organización española CEDIA:

    .row.justify-content-around.align-items-center.mt-3
      .titulo-sexto.color-acento-contenido
        h5 Tabla 1
        p(data-aos="fade-down").mb-0 #[i Ejemplo del ciclo completo de la gestión de incidentes de la organización española CEDIA]
      .col-10
        .tabla-a.color-acento-contenido 
          table
            caption Nota: Elaboración propia del experto con la información tomada de Heide der Van, M. (2020) Estableciendo un CSIRT. 
            thead
              tr
                th Nivel de Madurez
                th Descripción
            tbody
              tr
                td Introductorio
                td El CSIRT existe como un Punto de Contacto (POC) para coordinación y resolución de incidentes. Tiene sus reglas y regulaciones para notificar a las autoridades relevantes. 
              tr
                td Básico
                td Igual a 1, añadiendo un proceso para manejar nuevas amenazas. Se utiliza un sistema de #[i tickets] para manejar los incidentes reportados y se proveen avisos para la organización.
              tr
                td Actívo
                td Igual a 2, añadiendo herramientas de análisis de amenazas y procedimientos para la clasificación y el manejo de incidentes. 
              tr
                td Proactivo
                td Igual a 3, adicionando la diseminación de información de seguridad, herramientas para verificar y mantener su estado y planificación de entrenamiento a miembros del equipo.
              tr
                td Comprensivo
                td Igual a 4, pero con monitoreo en tiempo real de incidentes y amenazas. Se definen y comparten por interno, se proporcionan terceras instrucciones para nuevas amenazas y formas de prevenir incidentes con la finalidad de generar conciencia.


      p.mt-5 Ya se conocen los incidentes en la seguridad digital, es hora de ver qué son los eventos y cómo se deben monitorear.

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
