document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Sign Up attempted.");
  });


  function shownavside(){
    const navside = document.querySelector(`.navside`)
    navside.style.display=`flex`
  }

  function delnavside(){
    const navside = document.querySelector(`.navside`) 
    navside.style.display = `none`

  }

function validateForm() {
    const password = document.getElementById("password").value;
    const errorMsg = document.getElementById("passwordError");

    document.getElementById("form").addEventListener("submit", function (event){
        if (!this.checkValidity()){

            return;
        }
        window.location.href = "home.html";
    });

    
    if (password.length < 8) {
      errorMsg.textContent = "Password must be at least 8 characters long.";
      return false;
    }
     else {
      errorMsg.textContent = "";
      alert("Form submitted successfully!");
      return true;
    }
  }