 $(document).ready(function(){

   $("#owl-carousel-demo").owlCarousel({
     items: 3,
     nav: false,
     loop: true,
     center: true,
     autoWidth: true,
     autoplay: true,
     margin: 20,
     responsive : {
       0 : {
         items: 3,
         nav: false,
         loop: true,
         center: true,
       },
       320: {
         items: 3,
       },
       480 : {
         items: 3,
       },
       768 : {
         items: 11,
       },
       1200 : {
         items: 13,
       }
     }
   });
 });
