//Code Your Solution Below
window.addEventListener("load", () => {
  const form = document.querySelector("form");
  form.addEventListener("submit", (event) => {
    const testName = document.querySelector("input[name=testName]");
    const testDate = document.querySelector("input[name=testDate]");
    const rocketType = document.querySelector("select[name=rocketType]");
    const windRating = document.querySelector("input[name=windRating]");
    const boosterCount = document.querySelector("input[name=boosterCount]");
    const productionServers = document.querySelector(
      "input[name=productionServers]"
    );
    if (
      testName.value === "" ||
      testDate.value === "" ||
      rocketType.value === "" ||
      boosterCount.value === "" ||
      windRating.value === undefined
      //   productionServers === undefined
    ) {
      alert("All fields are required.");
      event.preventDefault();
    }
  });
});
