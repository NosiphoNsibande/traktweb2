
$(window).load(function(){
jQuery('#show1Topic').addClass("hidden").viewportChecker({
           classToAdd: 'visible animated flash',
           offset: 200
           });

jQuery('#show4Topic').addClass("hidden").viewportChecker({
           classToAdd: 'visible animated flash',
           offset: 200
           });

jQuery('#show3Topic').addClass("hidden").viewportChecker({
           classToAdd: 'visible animated flash',
           offset: 200
           });

jQuery('.show2').addClass("hidden").viewportChecker({
           classToAdd: 'visible animated slideInLeft',
           offset: 200
         });

jQuery('.show1').addClass("hidden").viewportChecker({
           classToAdd: 'visible animated zoomIn',
           offset: 200
           });

jQuery('.show3').addClass("hidden").viewportChecker({
           classToAdd: 'visible animated zoomIn',
           offset: 200
           });

jQuery('.show4').addClass("hidden").viewportChecker({
           classToAdd: 'visible animated slideInUp',
           offset: 200
           });


setInterval(function()
      {
        var start = "2017/01/01";
        var end   = new Date();
        var diff = new Date(start) - end;
        var t = diff/1000;
        var seconds = parseInt( t%60);
        var minutes = parseInt( (t/60) % 60 );
        var hours = parseInt( (t/(60*60)) % 24 );
        var days = parseInt( t/60/60/24 );

        $(".seconds").html(seconds);
        $(".hours").html(hours);
        $(".days").html(days);
        $(".minutes").html(minutes);

      },1000);


 $('.fml').on({
    'mouseover' : function() {
     
      $(this).attr('src','http://www.w3.org/html/logo/downloads/HTML5_Logo_512.png');
    },
    mouseout : function() {
     $(this).attr('src','images/index5.jpg');
    }
  });

 $('#fc').on({
    'mouseover' : function() {
     
      $(this).attr('src','images/fc.jpg');
    },
    mouseout : function() {
     $(this).attr('src','images/f.jpg');
    }
  
  });
 $('#tw').on({
    'mouseover' : function() {
     
      $(this).attr('src','images/Twitter Logo_png.jpg');
    },
    mouseout : function() {
     $(this).attr('src','images/mytwi.jpg');
    }
  });

 $('#gm').on({
    'mouseover' : function() {
     
      $(this).attr('src','images/gmail2.png');
    },
    mouseout : function() {
     $(this).attr('src','images/gmailicon.jpg');
    }
  });
 

 $("#btnplayed").click(function()
 {
    
      $("#panelPlayed").html("");
     $.getJSON("http://www.omdbapi.com/?s=power&page=1", function(data, status){
        console.log(data);
          var count=0;
            $.each(data['Search'], function(key, value ) {
            if(count<2)
            {
              $('#panelPlayed').append(
                "<img src='" + value['Poster'] +"'/>");
               jQuery('#panelPlayed').addClass("hidden").viewportChecker({
               classToAdd: 'visible animated rollIn',
               offset: 400
             });

            }
            count++;
              
            });
            
        });

      $.getJSON("http://www.omdbapi.com/?s=vampire&page=1", function(data, status){
        console.log(data);
          var count=0;
            $.each(data['Search'], function(key, value ) {
            if(count<2)
            {
              $('#panelPlayed').append(
                "<img src='" + value['Poster'] +"'/>");
            }
            count++;
              
            });
          
        });
});
$("#btnAnt").click(function()
{

 jQuery('.ant').addClass("hidden").viewportChecker({
               classToAdd: 'visible animated hinge',
               offset: 200
             });
 jQuery('#btnAnt').addClass("hidden").viewportChecker({
               classToAdd: 'visible animated hinge',
               offset: 200
             });

 $.getJSON("http://www.omdbapi.com/?s=Lost&page=1", function(data, status){
        console.log(data);
          var count=0;
            $.each(data['Search'], function(key, value ) {
            if(count<2)
            {
              $('.panelA').append(
                "<img src='" + value['Poster'] +"'/>");
               
               jQuery('.panelA').addClass("hidden").viewportChecker({
               classToAdd: 'visible animated zoomIn',
               offset: 400
             });

            }
            count++;
              
            });
            
        });

      $.getJSON("http://www.omdbapi.com/?s=teen wolf&page=1", function(data, status){
        console.log(data);
          var count=0;
            $.each(data['Search'], function(key, value ) {
            if(count<2)
            {
              $('.panelA').append(
                "<img src='" + value['Poster'] +"'/>");
              jQuery('.ant').addClass("hidden").viewportChecker({
               classToAdd: 'visible animated hinge',
               offset: 200
             });
            }
            count++;
              
            });
           
          
        });




});



$("#btntred").click(function()
{
  $("#panelTrend").html("");
 $.getJSON("http://www.omdbapi.com/?s=Lost&page=1", function(data, status){
        console.log(data);
          var count=0;
            $.each(data['Search'], function(key, value ) {
            if(count<2)
            {
              $('#panelTrend').append(
                "<img src='" + value['Poster'] +"'/>");
               jQuery('.imgMovieT').addClass("hidden").viewportChecker({
               classToAdd: 'visible animated hinge',
               offset: 200
             });
               jQuery('#panelTrend').addClass("hidden").viewportChecker({
               classToAdd: 'visible animated zoomIn',
               offset: 300
             });

            }
            count++;
              
            });
            
        });

      $.getJSON("http://www.omdbapi.com/?s=teen wolf&page=1", function(data, status){
        console.log(data);
          var count=0;
            $.each(data['Search'], function(key, value ) {
            if(count<2)
            {
              $('#panelTrend').append(
                "<img src='" + value['Poster'] +"'/>");
            }
            count++;
              
            });
             $('.show3Topic').animate({marginTop: -110},'slow','swing');
            $(".imgMovieT").slideToggle(7000);
          
        });




});

$("#btnPop1").click(function(){
  $("#panelpop").html("");
      $.getJSON("http://www.omdbapi.com/?s=The originals&page=1", function(data, status){
        console.log(data);
          var count=0;
            $.each(data['Search'], function(key, value ) {
            if(count<1)
            {
              $('#panelpop').append(
                "<img src='" + value['Poster'] +"'/>");
               jQuery('#panelpop').addClass("hidden").viewportChecker({
               classToAdd: 'visible animated zoomInRight',
               offset: 200
             });
             
            }
            count++;
              
            });
           
            $('#show2Topic').animate({marginTop: +10},'slow','swing');
            $(".imgMovie").slideToggle(7000); 

           
        });

      $.getJSON("http://www.omdbapi.com/?s=teen wolf&page=1", function(data, status){
        console.log(data);
          var count=0;
            $.each(data['Search'], function(key, value ) {
            if(count<1)
            {
              $('#panelpop').append(
                "<img src='" + value['Poster'] +"'/>");
            }
            count++;
              
            });
           
           
        });

       $.getJSON("http://www.omdbapi.com/?s=Legends of Tomorrow&page=1", function(data, status){
        console.log(data);
          var count=0;
            $.each(data['Search'], function(key, value ) {
            if(count<1)
            {
              $('#panelpop').append(
                "<img src='" + value['Poster'] +"'/>");
            }
            count++;
              
            });
           
           
        });

        $.getJSON("http://www.omdbapi.com/?s=supergirl&page=1", function(data, status){
        console.log(data);
          var count=0;
            $.each(data['Search'], function(key, value ) {
            if(count<1)
            {
              $('#panelpop').append(
                "<img src='" + value['Poster'] +"'/>");
            }
            count++;
              
            });
           
           
        });
       
  


$(".menus").click(function(){
    if($(this).attr("id")=="pop")
    {
       $("html, body").animate({ scrollTop:0}, 1900);
    }
    else if($(this).attr("id")=="tred")
    {
       $("html, body").animate({ scrollTop: $('.show1').height()+165 }, 1900);
    }
    else if($(this).attr("id")=="anti")
    {
       $("html, body").animate({ scrollTop: ($('.show1').height()+160)+($('show2').height()+175) }, 1900);
    }
    else if($(this).attr("id")=="pla")
    {
       $("html, body").animate({ scrollTop: ($('.show1').height()+160)+($('.show2').height()+185)+($('.show3').height()+160) }, 1900);
    }
    
});
});
























});











