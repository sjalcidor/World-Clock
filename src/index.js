function updateTime() {
// Miami
    let miamiElement = document.querySelector("#miami");
    if (miamiElement) {
      let miamiDateElement = miamiElement.querySelector(".date");
      let miamiTimeElement = miamiElement.querySelector(".time");
      let miamiTime = moment().tz("America/Miami");
  
      miamiDateElement.innerHTML = miamiTime.format("MMMM	Do YYYY");
      miamiTimeElement.innerHTML = miamiTime.format(
        "h:mm:ss [<small>]A[</small>]"
      );
    }

    // Rome
let romeElement = document.querySelector("#rome");
if (romeElement) {
  let romeDateElement = romeElement.querySelector(".date");
  let romeTimeElement = romeElement.querySelector(".time");
  let romeTime = moment().tz("Europe/Rome");

  romeDateElement.innerHTML = romeTime.format("MMMM	Do YYYY");
  romeTimeElement.innerHTML = romeTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}
  // Johannesburg
  let johanElement = document.querySelector("#johan");
  if (johanElement) {
    let johanDateElement = johanElement.querySelector(".date");
    let johanTimeElement = johanElement.querySelector(".time");
    let johanTime = moment().tz("Africa/Johannesburg");

    johanDateElement.innerHTML = johanTime.format("MMMM	Do YYYY");
    johanTimeElement.innerHTML = johanTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
  

  // Moscow
  let moscowElement = document.querySelector("#moscow");
  if (moscowElement) {
    let moscowDateElement = moscowElement.querySelector(".date");
    let moscowTimeElement = moscowElement.querySelector(".time");
    let moscowTime = moment().tz("Europe/Moscow");

    moscowDateElement.innerHTML = moscowTime.format("MMMM	Do YYYY");
    moscowTimeElement.innerHTML = moscowTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

// Hong Kong
let hongkongElement = document.querySelector("#hongkong");
if (hongkongElement) {
  let hongkongDateElement = hongkongElement.querySelector(".date");
  let hongkongTimeElement = hongkongElement.querySelector(".time");
  let hongkongTime = moment().tz("Asia/Hong_Kong");

  hongkongDateElement.innerHTML = hongkongTime.format("MMMM	Do YYYY");
  hongkongTimeElement.innerHTML = hongkongTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}
}

  function updateCity(event) {
    let cityTimeZone = event.target.value;
    if (cityTimeZone === "current") {
      cityTimeZone = moment.tz.guess();
    }
    let cityName = cityTimeZone.replace("_", " ").split("/")[1];
    let cityTime = moment().tz(cityTimeZone);
    let citiesElement = document.querySelector("#cities");
    citiesElement.innerHTML = `
    <div class="city">
      <div>
        <h2>${cityName}</h2>
        <div class="date">${cityTime.format("MMMM	Do YYYY")}</div>
      </div>
      <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
      "A"
    )}</small></div>
    </div>
    `;
  }
  
  updateTime();
  setInterval(updateTime, 1000);
  
  let citiesSelectElement = document.querySelector("#city");
  citiesSelectElement.addEventListener("change", updateCity);