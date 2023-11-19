//Get reference to DOM Elements

const body = document.querySelector("body"),
  hourHand = document.querySelector(".hour"),
  minuteHand = document.querySelector(".minute"),
  secondHand = document.querySelector(".second"),
  modeSwitch = document.querySelector(".mode-switch");



  // check if the mode is already set ' Dark Mode'
  if (localStorage.getItem("mode") === "Dark Mode") {
    //add "dark class to body and set modeSwitch text to 'LIGHT Mode'"
    body.classList.add("dark");
    modeSwitch.textContent = "Light mode"
  }

  // add a click event listner to modeSwitch

  modeSwitch.addEventListener("click",() => {
    //toggle the "dark" class is curently presnet on the body element
    body.classList.toggle("dark");
    //check if the 'dark' class is current 
    const isDarkMode = body.classList.contains("dark");
    modeSwitch.textContent = isDarkMode ? "Light Mode " : "Dark Mode";

    localStorage.setItem("mode", isDarkMode ? "Dark Mode" : "Light Mode");
    });


    const updateTime = () => {
      //Get current time and calcultedegree for clock hands

      let date= new Date(),
        secToDeg = (date.getSeconds() / 60 ) * 360,
        minToDeg = (date.getMinutes() / 60) * 360,
        hrToDeg = (date.getHours() / 12) * 360;

        //Rotate the clock handle to the appropriate degreebaase on the current time
        secondHand.style.transform = `rotate(${secToDeg}deg)`;
        minuteHand.style.transform = `rotate(${minToDeg}deg)`;
        hourHand.style.transform = `rotate(${hrToDeg}deg)`; 
    }
    setInterval(updateTime, 1000);

    updateTime();