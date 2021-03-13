//when document is loaded then run jquery code
$(function () {

    //run code when form submit button clicked(form submitted)
    $('#form-validation').submit(function (e) {
      //get data from all inputs
  
      //1) for username
      var username = $('#username').val() //val => for getting value from form filed
      //apply validation
      //1) username must not be less than 3 characters
  
      if (username.length < 3) {
        $('#usernameHelp').text("Username must contain atlease 3")  //text => for setting some text in a html element
  
        //to prevent default nature of form to be reload or load new url
        e.preventDefault()
      } else {
        $('#usernameHelp').text("")  //text => for setting some text in a html element
  
      }
  
  
      //2) for email
      var email = $('#email').val();
      var pattern = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i
      // console.log(email)
      if (!pattern.test(email)) {
        $('#emailHelp').text("invalid email , must have @gmail.com")
        e.preventDefault()
      } 
      else {
        $('#emailHelp').text("")
      }
  
      // for phoneNumber
      var phoneNumber = $('#phone').val();
      var phone__pattern = /([0-9]{10})|(\([0-9]{3}\)\s+[0-9]{3}\-[0-9]{4})/
      if(!phone__pattern.test(phoneNumber)){
        $('#phoneHelp').text("invalid phone number(must have 10 numbers)")
            e.preventDefault()
      }
      else{
        $('phoneHelp').text("isdyuhvb")
      }
      
      // for password
      var strength = 1
      var password = $('#pwd').val();
      var password__pattern =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/
      if(!password__pattern.test(password)){
        // $("#passwordHelp").addclass('bg-danger')
        $('#passwordHelp').text("weak password ")
            e.preventDefault()
      }
      else{
        $('passwordHelp').text("isdyuhvb")
      }  
  
      })
  })
  
  