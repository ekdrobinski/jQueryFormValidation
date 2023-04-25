$(document).ready(function() {
    $('#form').submit(function(event) {
      event.preventDefault(); // prevent form submission
  
      // create variables for each input
      var name = $('#name');
      var email = $('#email');
      var phoneNumber = $('#phone');
  
      // reate an array of required inputs
      var required = [name, email, phoneNumber];
  
      // loop through required inputs and check if they're filled out
      for (var i = 0; i < required.length; i++) {
        if (required[i].val() === '') { //if the value is an empty string
          $('#message').text('Please Fill Out Required Fields').addClass('warning');//populate required fields
          required[i].parent().addClass('warning'); //add the warning class
        } else {
          required[i].parent().removeClass('warning');
        }
      }
  
      //check if any labels have the warning class
      if ($('label').hasClass('warning')) {//attach the warning class to the array's items label
        //verify that no labels have the warning class
        return false;
      } else {
        // if no labels have the warning class take the form from the DOM and manipulate the h2 to say Thanks for your feedback
        $('#form').html('<h2>Thanks for your feedback!</h2>');
        return true;
      }
    });
  });
  
  

  
  