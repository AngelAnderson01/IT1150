$(document).ready(function(){
      $(".p1").hide();
      $(".p2").hide();
      $(".p3").hide();
    });


$(document).ready(function(){
    $(".head1").click(function(){
      $(".p1").toggle();
      $(".p2").hide();
      $(".p3").hide();
    });
  });

  $(document).ready(function(){
    $(".head2").click(function(){
      $(".p2").toggle();
      $(".p1").hide();
      $(".p3").hide();
    });
  });

  $(document).ready(function(){
    $(".head3").click(function(){
      $(".p3").toggle();
      $(".p1").hide();
      $(".p2").hide();
    });
  });