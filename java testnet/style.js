document.addEventListener("DOMContentLoaded", function () {
    // Handle form submission
    document.querySelector("form").addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Login attempted.");
    });
  });

  function shownavside(){
    const navside = document.querySelector(`.navside`)
    navside.style.display=`flex`
  }

  function delnavside(){
    const navside = document.querySelector(`.navside`) 
    navside.style.display = `none`

  }