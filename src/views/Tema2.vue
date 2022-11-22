<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Monitoreo de eventos

    .row
      p Es fundamental en la gestión de seguridad digital de las organizaciones que se rastreen los incidentes de seguridad digital, a continuación se describe cómo hacerlo: 
    

    TabsC.color-primario
      .py-3.py-md-4(titulo="¿Para qué monitorear los eventos?")
        .row.justify-content-around.align-items-center
          .col-md-4
            figure
              img(src='@/assets/curso/temas/tema2/img1.svg', alt='Texto que describa la imagen')

          .col-md-8.mb-4.mb-md-0
            p Con el aumento frenético y la sofisticación de las amenazas de ciberseguridad, se deben tomar acciones que recopilen y rastreen los incidentes en tiempo real, implementando análisis avanzados que ayuden a clasificar y enviar a un equipo de expertos la información necesaria para su posterior estudio. Los miembros deben seleccionar los datos y dar prioridad a los eventos, identificando los incidentes en los que necesitan enfocarse y aplicar acciones inmediatas.

      .py-3.py-md-4(titulo="¿Cómo monitorear?")
        .row.justify-content-around.align-items-center
          .col-md-4.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema2/img2.svg', alt='Texto que describa la imagen')
          .col-md-8
            p El monitoreo de eventos debe centrarse en las mejores prácticas de supervisión, implementando la automatización integrada con la revisión de los miembros del equipo de trabajo, esto permite descartar la mayor cantidad de eventos generados por falsas alarmas, para poder identificar las amenazas considerables y centrar los esfuerzos de validación y tratamiento en los problemas críticos.

      .py-3.py-md-4(titulo="Monitoreo continuo")
        .row.justify-content-around.align-items-center
          .col-md-4.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema2/img3.svg', alt='Texto que describa la imagen')
          .col-md-8
            p El monitoreo continuo se debe realizar a todos los elementos de la infraestructura que intervienen en el proceso de resguardo de la información, así como a los que se van integrando por motivo de crecimiento o automatización de gestión de los registros. De este modo, se podrán controlar todos los dispositivos y garantizar protección total a los sistemas de información, tomando mejores decisiones y manteniendo el cumplimiento normativo.

    .row.mt-5
      p Un sistema de monitoreo confiable debe cumplir, como mínimo, las siguientes características:

      h3 Características de un sistema de monitoreo

    .row.justify-content-around.align-items-center.mt-5
      .col-6
        ImagenInfografica.color-primario
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema2/img4.svg', alt='Texto que describa la imagen')

          .tarjeta.color-acento-contenido.p-3(x="75.3%" y="5.7%" numero="1")
            p #[b Relación entre dispositivos:]
            p proporcionar una correlación entre los dispositivos de la red y el equipo de reportes para que todos cuenten con la misma información al detalle y se pueda examinar minuciosamente.

          .tarjeta.color-acento-contenido.p-3(x="94.5%" y="50%" numero="2")
            p #[b Traducción de datos:]
            p traducir datos de difícil entendimiento en tiempo real, documentando la lista de acciones a realizar por la organización.

          .tarjeta.color-acento-contenido.p-3(x="75.3%" y="94.5%" numero="3")
            p #[b Priorización de actividades:]
            p ayudar a los equipos CSIRT y CERT en la priorización de actividades que previenen las alertas de falsos positivos, para ser más efectivos en la implementación de acciones en los eventos que realmente sean críticos.

          .tarjeta.color-acento-contenido.p-3(x="27%" y="94.5%" numero="4")
            p #[b Localización de amenazas:]
            p localizar las fuentes de las posibles amenazas y seguir el patrón de ataque, con el propósito de reforzar los puntos débiles e ir evolucionando hacia el desarrollo de la gestión de las amenazas más críticas.

          .tarjeta.color-acento-contenido.p-3(x="4.5%" y="50%" numero="5")
            p #[b Apoyarse en los CSIRT y el CERT:]
            p permitir que el CSIRT y el CERT realicen hipótesis ajustadas sobre los incidentes pasados que suministren el proceso para la prevención de eventos futuros.

          .tarjeta.color-acento-contenido.p-3(x="27%" y="5.7%" numero="6")
            p #[b Cumplimiento de la normatividad:]
            p garantizar la solución integral y que permita evolucionar la plataforma de seguridad de la entidad, sin necesidad de cambiarla para futuros eventos.

    .row.justify-content-around.align-items-center.mt-5
      .col-lg-10
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img5.svg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Cuando se usa el correo corporativo para iniciar sesión o registrarse en alguna red social, o simplemente para publicar el nombre o logo de la empresa para la cual se trabaja, o fotografías donde quede expuesta la imagen corporativa; se debe evitar realizar bromas y comentarios que pueden llegar a afectar el perfil personal o profesional.

    .row.mt-5
      p Para reconocer algunas de las acciones que se realizan en el monitoreo de eventos, se le invita a ver el siguiente video.

    .row.justify-content-center.align-items-center.mb-5.mt-5          
      .col-lg-12(data-aos="fade-left")     
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)            
               
    separador

    #t_2_1

    .titulo-segundo.color-acento-contenido.mt-5(data-aos="zoom-in-left")
      h2 2.1 Plataformas de seguridad

    .row
      p Muchas compañías reconocidas a nivel global han centrado su objetivo comercial en crear plataformas y herramientas de ciberseguridad. Un caso particular que se puede considerar es la compañía DELL, que integra en su portafolio de productos y servicios las siguientes plataformas y herramientas:

    .row.justify-content-center.align-items-center.mb-5.mt-5  
      .col-lg-10.col-xs-12
        SlyderF(columnas="col-lg-6 col-xl-4")
          .tarjetab.color-tarjeta-slider.p-4.columna-movil
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/tema2/img6.svg' alt='AvatarTop')
            p.text-center.text-blue #[b Servicios de resistencia del negocio]
            p.text-center.text-small moment. Abandon the shelter of insecurity. Be bold. Greatness isn’t the height of your stature, it’s the heft of your spirit.

          .tarjetab.color-tarjeta-slider.p-4.columna-movil
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/tema2/img7.svg' alt='AvatarTop')
            p.text-center.text-blue #[b #[i Ransomware Defender] para DELL EMC #[i PowerScale]]
            p.text-center.text-small Es una solución de protección cibernética integral para detectar patrones de acceso a datos inusuales, aislar los datos con espacio de aire y recuperar los datos de archivos y objetos. (DELL, 2022).

          .tarjetab.color-tarjeta-slider.p-4.columna-movil
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/tema2/img8.svg' alt='AvatarTop')
            p.text-center.text-blue #[b DELL #[i SafeData]]
            p.text-center.text-small Conjunto de aplicaciones integradas en la solución #[i Dell Trusted Devices] que proporciona cifrado a nivel de disco y archivo, infraestructura de escalamiento de red SASE y persistencia de datos a prueba de manipulaciones en entornos de múltiples nubes. (DELL, 2022).

          .tarjetab.color-tarjeta-slider.p-4.columna-movil
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/tema2/img9.svg' alt='AvatarTop')
            p.text-center.text-blue #[b Servicios de seguridad de terminales de DELL]
            p.text-center.text-small Serie de servicios integrales que ayuda a identificar riesgos, implementar soluciones y prevenir amenazas futuras con confianza. (DELL, 2022).

          .tarjetab.color-tarjeta-slider.p-4.columna-movil
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/tema2/img10.svg' alt='AvatarTop')
            p.text-center.text-blue #[b Plataforma de virtualización de red #[i VMware] NSX]
            p.text-center.text-small Plataforma de virtualización de red de pila completa que cuenta con segmentación de red y microsegmentación para la carga de trabajo individual. (DELL, 2022).

          .tarjetab.color-tarjeta-slider.p-4.columna-movil
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/tema2/img11.svg' alt='AvatarTop')
            p.text-center.text-blue #[b DELL #[i SafeGuard and Response]]
            p.text-center.text-small Permite prevenir amenazas desconocidas y responde en forma rápida y eficiente a los ataques ocultos en terminales, redes y nubes, con la ayuda de #[i VMware Carbon Black Cloud y Secureworks.] (DELL, 2022).

          .tarjetab.color-tarjeta-slider.p-4.columna-movil
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/tema2/img12.svg' alt='AvatarTop')
            p.text-center.text-blue #[b Arquitectura resistente cibernética de #[i PowerEdge]]
            p.text-center.text-small Logra sobrepasar continuamente los límites del diseño de servidores reforzado para detectar los ataques cibernéticos y protegerse y recuperarse de ellos. (DELL, 2022).

          .tarjetab.color-tarjeta-slider.p-4.columna-movil
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/tema2/img13.svg' alt='AvatarTop')
            p.text-center.text-blue #[b DELL #[i SafeBIOS] y #[i SafeID]]
            p.text-center.text-small Mitiga el riesgo de manipulación del BIOS con la detección de ataques de #[i firmware] integrada; utiliza el exclusivo chip de seguridad dedicado de DELL para mejorar la autenticación multifactor. (DELL, 2022).
        
          .tarjetab.color-tarjeta-slider.p-4.columna-movil
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/tema2/img14.svg' alt='AvatarTop')
            p.text-center.text-blue #[b DELL #[i Trusted Devices]]
            p.text-center.text-small Dado que el 70 % de las infracciones se originan en el terminal, un ecosistema seguro comienza con Dell #[i Trusted Devices]. (DELL, 2022).

    .row.justify-content-center
      .col-10
        p Si desea profundizar sobre la herramienta Ransomware Defender para Dell EMC PowerScale, remítase al manual adjunto como Anexo 1.

        .tarjeta.color-secundario.p-3.mb-5.mt-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/tema2/img15.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1.text-white Anexo 1
                  p.text-small.text-white #[i MANUAL RANSOMWARE DEFENDER PARA DELL EMC POWERSCALE.]
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download

        p Para conocer un poco más sobre la plataforma de virtualización de red VMware NSX, ver el Anexo 2, que contiene el manual de uso.

        .tarjeta.color-secundario.p-3.mb-5.mt-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/tema2/img15.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1.text-white Anexo 2
                  p.text-small.text-white #[i MANUAL VMWARE NSX.]
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('/downloads/Anexo_2.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download

    .row.justify-content-around.align-items-center.mt-5
      .col-lg-10
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img16.svg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Para la Unión Europea, la violación en la seguridad de la información se origina cuando los datos quedan expuestos a incidentes de seguridad y repercute en la vulneración de la integridad, transparencia, disponibilidad y confidencialidad de los datos. Al ocurrir esto se ponen en riesgo los derechos y la privacidad de los dueños de la información, por lo que se debe notificar a las autoridades competentes en un plazo no mayor a 72 horas después de haber ocurrido el evento (Comisión Europea, s.f.).  Dentro del siguiente tema se describen los aspectos asociados a la notificación de respuestas.  

    separador

    #t_2_2

    .titulo-segundo.color-acento-contenido.mt-5(data-aos="zoom-in-left")
      h2 2.2 Notificación de respuestas

    .row.justify-content-around.align-items-center.mt-5
      .col-lg-12
        .bloque-texto-f.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-f__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img17.svg')})`}"
          )
          .bloque-texto-f__texto.p-4
            p.mb-0 La vulneración de la seguridad de la información implica un alto riesgo para los dueños de los datos, por lo tanto, deberán ser notificados de que esta ha sido violada y las medidas que ha tomado el responsable del tratamiento de los datos.
            <br><br>
            La notificación de respuesta de incidentes genera acciones de forma sistemática, con el objetivo de disminuir la ocurrencia y lograr una rápida recuperación, minimizando el daño causado a los servicios de la organización.

      p.mt-5 A continuación, se describe la notificación de respuestas a incidentes extraída del Manual de Seguridad y Privacidad de la Información elaborado por el Ministerio de las Tecnologías de la Información y la Comunicaciones –MINTIC (2016). 

    .tarjeta.tarjeta--azul.p-4
      SlyderA(tipo="b")
        .row.justify-content-around.align-items-center
          .col-md-6.mb-4.mb-md-0
            p #[b Notificar al primer punto de contacto]

            p Un usuario, tercero o contratista que sospeche sobre la materialización de un incidente de seguridad deberá notificarlo al primer punto de contacto definido por la entidad (Ej.: Soporte de primer nivel). Esto se puede hacer a través de cualquier canal de comunicación (telefónico, correo, aplicativo, etc.). Es importante resaltar que debe existir un formato que el usuario debe diligenciar con la mayor cantidad posible de información relacionada.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/img18.svg', alt='Texto que describa la imagen')

        .row.justify-content-around.align-items-center
          .col-md-6.mb-4.mb-md-0
            p #[b Identificación del tipo de incidente]

            p El primer punto de contacto identificará el tipo de incidente (de acuerdo a la tabla de clasificación que realiza la entidad), analizará si corresponde a un incidente de seguridad de la información o si está relacionado con requerimientos propios de la infraestructura de TI. En caso de ser catalogado como un incidente de seguridad, se notificará a la persona encargada de la atención, o a quien haga sus veces, para que tome las decisiones correspondientes. 

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/img19.svg', alt='Texto que describa la imagen')

        .row.justify-content-around.align-items-center
          .col-md-6.mb-4.mb-md-0

            p Esta será la encargada de realizar el seguimiento hasta su cierre definitivo. Si el incidente de seguridad es identificado por otra línea diferente a un usuario de la entidad, a través de los elementos de detección o administradores de TI, este es notificado directamente al responsable, quien tomará las acciones necesarias. 

            p Se informará al primer punto de contacto sobre la presentación de un incidente de seguridad para que realice la documentación respectiva y esté atento al seguimiento y desarrollo de este.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/img20.png', alt='Texto que describa la imagen')

        .row.justify-content-around.align-items-center
          .col-md-6.mb-4.mb-md-0
            p #[b Punto de contacto clave]

            p El punto de contacto clave dentro de la gestión de incidentes es la persona encargada de la atención de estos, quien coordinará y asignará las actividades con las partes interesadas. Estos últimos solicitarán el apoyo a los involucrados en el proceso, con el fin de realizar la correcta ejecución de actividades que den solución al incidente. La persona encargada tendrá la potestad para decidir sobre las acciones que se deban ejecutar ante la presencia de una situación de este tipo y notificará a las altas directivas de la entidad.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/img21.svg', alt='Texto que describa la imagen')

        

</template>

<script>
export default {
  name: 'Tema2',
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
