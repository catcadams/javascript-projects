// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", () => {
  const takeOff = document.getElementById("takeoff");
  const flightStatus = document.getElementById("flightStatus");
  const shuttleBackground = document.getElementById("shuttleBackground");
  const rocket = document.getElementById("rocket");
  rocket.style.position = "absolute";
  rocket.style.bottom = "0";
  rocket.style.left = "0";
  const land = document.getElementById("landing");
  const abort = document.getElementById("missionAbort");
  const up = document.getElementById("up");
  const shuttleHeight = document.getElementById("spaceShuttleHeight");

  takeOff.addEventListener("click", () => {
    let isConfirmed = window.confirm(
      "Confirm that the shuttle is ready for takeoff."
    );
    if (isConfirmed) {
      flightStatus.innerHTML = "Shuttle in flight.";
      shuttleBackground.style.backgroundColor = "blue";
      rocket.style.bottom = String(parseInt(rocket.style.bottom) + 10) + "px";
    }
  });

  land.addEventListener("click", () => {
    window.alert("The shuttle is landing. Landing gear engaged.");
    flightStatus.innerHTML = "The shuttle has landed.";
    shuttleBackground.style.backgroundColor = "green";
    rocket.style.bottom = "0";
  });

  abort.addEventListener("click", () => {
    let isConfirmed = window.confirm(
      "Confirm that you want to abort the mission."
    );
    if (isConfirmed) {
      flightStatus.innerHTML = "Mission aborted.";
      shuttleBackground.style.backgroundColor = "green";
      rocket.style.bottom = "0";
    }
  });

  up.addEventListener("click", () => {
    rocket.style.bottom = String(parseInt(rocket.style.bottom) + 10) + "px";
    shuttleHeight.innerHTML = parseInt(shuttleHeight.innerHTML) + 10000;
    shuttleBackground.style.backgroundColor = checkLaunch(
      parseInt(rocket.style.bottom)
    );
  });

  const checkLaunch = (height) => {
    if (height > 0) {
      return "blue";
    } else {
      return "green";
    }
  };
});
