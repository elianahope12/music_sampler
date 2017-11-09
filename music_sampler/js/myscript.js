$(document).ready(function() {


  // function to hide all divs
  function hideAll() {
    $('#album1').hide();
    $('#album2').hide();
    $('#album3').hide();
    $('#album4').hide();
  }

  // run that function right away
  hideAll();

  // when any album is clicked, make the suitable div appear
  $('.albumcover').click(function() {

    $("audio").each(function() {
    this.pause();
    this.currentTime = 0;
    });

    // but first, hide all the divs to ensure that
    // only one will be open, ever
    hideAll();

    // here is a switch statement

    // we can get the ID of the thing that was clicked -
    switch ($(this).attr("id")) {
      case "oneworld":
        $('#album1').show();
        break;
      case "mistletoe":
        $('#album2').show();
        break;
      case "believe":
        $('#album3').show();
        break;
      case "purpose":
        $('#album4').show();
        break;

    }

  }); // end of function for clicking

});

// slideToggle() example

$(document).ready(function() {

  $('#story').hide();

  $('#bieber').click(function() {
    $('#story').slideToggle();
  });


});
