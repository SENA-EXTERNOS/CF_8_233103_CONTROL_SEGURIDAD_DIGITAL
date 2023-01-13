<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-around.align-items-center.mt-5
      .col-lg-5
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/temas/introduccion/img1.svg', alt='Texto que describa la imagen')  

      .col-lg-7(data-aos="fade-down")
        p Apreciado aprendiz, bienvenido a este componente formativo, donde se describirá el proceso de validación del impacto de incidentes de ciberseguridad, enfocando el estudio en los Equipos de Respuesta ante Emergencias Informáticas (CERT), y los Equipos de Respuesta a Incidentes de Seguridad (CSIRT). Además, el componente favorece el reconocimiento y comprensión de los centros de gestión de respuesta a incidentes, las plataformas de monitoreo de eventos de seguridad y, finalmente, los ciclos de gestión (preparación, detección, análisis, notificación, documentación y gestión del conocimiento).
        p Con un mundo cada vez más conectado a través de la Internet, los ataques, incidentes o eventos que afectan la seguridad de las instituciones son muy comunes, por lo que se ha hecho necesario verificar el impacto que pueden tener; para hacerlo, se requiere de una estructura y metodología organizacional que permita gestionar respuestas a través de ciclos de gestión.
        p En el siguiente video conocerá, de forma general, la temática que se estudiará a lo largo del componente formativo.

    .row.justify-content-center.align-items-center.mb-5.mt-5          
      .col-lg-12(data-aos="fade-left")     
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)            
               

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
