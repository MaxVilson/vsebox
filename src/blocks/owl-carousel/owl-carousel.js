 $(document).ready(function(){

   $("#owl-carousel-demo").owlCarousel({
     items: 3,
     nav: false,
     loop: true,
     center: true,
     autoplay: true,
     margin: 10,
     mouseDrag: false,
     touchDrag: false,
     rtl: true,
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
         items: 7,
       },
       1200 : {
         items: 11,
       }
     }
   });
 });
