const homeLi = document.querySelector(".home");
      const profileLi = document.querySelector(".profile");
      const friendsLi = document.querySelector(".friends");
      const settingLi = document.querySelector(".setting");
      const privacyLi = document.querySelector(".privacy");
      const helpLi = document.querySelector(".help");
  
      homeLi.addEventListener("click", () => {
        window.location.href = "index.html";
      });
  
      profileLi.addEventListener("click", () => {
        window.location.href = "profile.html";
      });
  
      friendsLi.addEventListener("click", () => {
        window.location.href = "friends.html";
      });
      settingLi.addEventListener("click",()=>{
        window.location.href = "setting.html"
      })
      privacyLi.addEventListener("click",()=>{
        window.location.href = "privacy.html"
      })
      helpLi.addEventListener("click",()=>{
        window.location.href = "help.html"
      })