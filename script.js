
$(document).ready(function() {
    $('#form').submit(function(event) {
      event.preventDefault(); // prevent form submission
  
      // create variables for each input
      var name = $("#name");
      var email = $("#email");
      var phoneNumber = $("#phone");
  
      // reate an array of required inputs
      var required = [name, email, phoneNumber];
  
      // loop through required inputs and check if they're filled out
      for (var i = 0; i < required.length; i++) {
        if (required[i].val() === "") { //if the value is an empty string
          $('#message').text("Please Fill Out Required Fields").addClass("warning");//populate required fields
          required[i].parent().addClass("warning"); //add the warning class
        } else {
          // Remove the warning class if the text field has a an input value
          $("label").eq(i).removeClass("warning");
        }
      }
  
   // Check if any fields are still missing values
   if ($(".warning").length === 0) {
    // Remove the form and display a success message
    $("#form").remove(); 
    $("#pre-form h2").text("Thanks for your feedback!");
  }
    });
  });
  
  

  
  