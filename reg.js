      
      $(document).ready(function(){
      $("#sub").click(function(){
          sessionStorage.uname=$("#fname").val();
          sessionStorage.lname=$("#lname").val();
          
          var pwd=$("#pass").val();
          if(pwd.length<8)
          {
          	alert("password must be contain 8 character");
           $("#pass").focus();
            $("#pass").addclass("error");
            $(event.delegateTarget).addclass("error");
           return false;
          	
         
          }
         else if ( !pwd.match(/[a-z]/) )
          {
              alert("password must be contain at least one lower case");
              $("#pass").focus();
            return false;
          }
        else  if ( !pwd.match(/[A-Z]/) ) 
          {
              alert("password must be contain at least one upper case");
              $("#pass").focus();
            return false;
          }
         else if (! pwd.match(/\d/) )
          {
              alert("password must be contain at least one number ");
              $("#pass").focus();
            return false;
          }

         var mail=$("#email").val();
         if(!mail.match("jitu@gmail.com") )
         {
                 alert("email is wrong");
                 $("#pass").focus();
            return false;
         }

          var mail=$("#uname").val();
         if(!mail.match("jitu") )
         {
                 alert("username is wrong");
                 $("#pass").focus();
            return false;
         }
            
         
      });

  });
