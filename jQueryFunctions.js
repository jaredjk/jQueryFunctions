$(document).ready(function(){
    // $('#click').click(function(){
    // });
    
    $('#hide').click(function(){
        $( "#hide" ).hide( "slow", function(){   
        });
    });
    $('#show').click(function(){
        $( "#show2" ).show("slow",function(){  
        });
    });
    $('#toggle').click(function(){
        $( "#fadetoggle" ).fadeToggle("slow", "linear", function(){ 
        });
    });
    $('#slideDown').click(function(){
        $( "#slideDown2" ).slideDown("slow", function(){ 
        });
    });
    $('#slideUp').click(function(){
        $( "#slideUp2" ).slideUp( function(){ 
        });
    });
    $('#slideToggle').click(function(){
        $( "#slideToggle2" ).slideToggle( function(){ 
        });
    });
    $('#fadeIn').click(function(){
        $( "#fadeIn2" ).fadeIn( function(){ 
        });
    });
    $('#fadeOut').click(function(){
        $( "#fadeOut2" ).fadeOut( function(){ 
        });
    });
 
    $( "p" ).last().addClass( "selected" );
    $( "h1" ).before( "<p>that's what she said?</p>" );
    $( "h2" ).after( "<p>after what? </p>" );
    $( "p" ).append( "<strong>Hello</strong>" );

    $( "h3" ).html( "<span class='red'>Hello <b>Again</b></span>" );

    $( "input" )
    .change(function() {
      var $input = $( this );
      $( "i" ).html( ".attr( 'checked' ): <b>" + $input.attr( "checked" ) + "</b><br>" +
        ".prop( 'checked' ): <b>" + $input.prop( "checked" ) + "</b><br>" +
        ".is( ':checked' ): <b>" + $input.is( ":checked" ) + "</b>" );
    })
    .change();



    function displayVals() {
        var singleValues = $( "#single" ).val();
        var multipleValues = $( "#multiple" ).val() || [];
        // When using jQuery 3:
        // var multipleValues = $( "#multiple" ).val();
        $( "h4" ).html( "<b>Single:</b> " + singleValues +
          " <b>Multiple:</b> " + multipleValues.join( ", " ) );
      }
       
      $( "select" ).change( displayVals );
      displayVals();


      $( "text2" ).data( "test", { first: 20, last: "hamburger" } );
      $( "span:first" ).text( $( "text" ).data( "test" ).first );
      $( "span:last" ).text( $( "text" ).data( "test" ).last );
});   
    