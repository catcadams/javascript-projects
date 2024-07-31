function init() {
  const missionAbort = document.getElementById("abortMission");
  const button = document.getElementById("liftoffButton");
  const paragraph = document.getElementById("statusReport");

  // Put your code for the exercises here.
  button.addEventListener("click", function (event) {
    paragraph.innerHTML = "Houston, we have liftoff!";
  });
  missionAbort.addEventListener("mouseover", (event) => {
    event.target.style.backgroundColor = "red";
  });
  missionAbort.addEventListener("mouseout", (event) => {
    event.target.style.backgroundColor = "";
  });
  missionAbort.addEventListener("click", (event) => {
    let confirm = window.confirm("Are you sure you want to abort the mission?");
    if ((confirm)) {
      paragraph.innerHTML = "Mission aborted! Space shuttle returning home";
    }
    else {
        paragraph.innerHTML;
    }
  });
}

window.addEventListener("load", init);
