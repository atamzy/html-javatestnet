function adjustProfileSize() {
    const profile = document.getElementById('profilePic');
    const title = document.getElementById('title');
    if (window.innerWidth < 600) {
      profile.style.width = "180px";
      profile.style.height = "180px";
      title.style.fontSize = "1.2rem";
    } else {
      profile.style.width = "";
      profile.style.height = "";
      title.style.fontSize = "";
    }
  }

  function shownavside(){
    const navside = document.querySelector(`.navside`)
    navside.style.display=`flex`
  }

  function delnavside(){
    const navside = document.querySelector(`.navside`) 
    navside.style.display = `none`
  }
  window.addEventListener('resize', adjustProfileSize);
  window.addEventListener('load', adjustProfileSize);