// This JavaScript code is used to store and retrieve data from the local storage of a web browser. It is also used to update the state of two HTML switches based on the data stored in local storage.
// The code first retrieves two items from local storage: "ga" and "redads". If either of these items do not exist in local storage, they are added with a default value of "true", and the page is reloaded.
// The code then checks if the values of "ga" and "redads" are either "true" or "false". If they are not, they are set to "true" and the page is reloaded.
// The code then updates the state of the two switches based on the values of "ga" and "redads" in local storage. If "ga" is "true", the switch with the ID "ga" is checked. If "redads" is "true", the switch with the ID "redadswitch" is checked.
// The code defines two functions, tog1 and tog2, that are called when the respective switch is toggled. These functions toggle the value of the corresponding item in local storage between "true" and "false" and reload the page.
// The tog1 function also checks if the user's device has more than 1 GB of RAM and, if so, displays an alert and prevents the switch from being toggled. The tog2 function has no such check.
// Help generated by ChatGPT

// get data from local storage
var ga = window.localStorage.getItem("ga");
var redads = window.localStorage.getItem("redads");
// fill local storage with data if it is empty
if (!redads) {
  window.localStorage.setItem("redads", "true");
  location.reload();
};
if (!ga) {
  window.localStorage.setItem("ga", "true");
  location.reload();
};
// validate the data
if (!["true", "false"].includes(redads)) {
  window.localStorage.setItem("redads", "true");
  location.reload();
};
if (!["true", "false"].includes(ga)) {
  window.localStorage.setItem("ga", "true");
  location.reload();
};
// update the switches
if (ga == "true") {
  document.getElementById("ga").checked = true;
} else {
  document.getElementById("ga").checked = false;
  document.getElementById("gapls").innerText = "Please turn this on so I can see detailed analytics!";
};
if (redads == "true") {
  document.getElementById("redadswitch").checked = true;
} else {
  document.getElementById("redadswitch").checked = false;
  document.getElementById("redadpls").innerText = "Please turn this on to support me!";
};

function tog1() {
  if (document.getElementById("redadswitch").checked) {
    let ram = navigator.deviceMemory;
    if (ram === undefined) {
      alert("Sorry, this feature is not available in this broswer. Please switch to Chrome, Opera, or Edge to use this feature!");
      document.getElementById("redadswitch").checked = true;
      window.localStorage.setItem("redads", "true");
      return;
    } else if (ram > 1) {
      alert("Sorry, this feature is restricted to low-end devices that can not display ads. Please switch to a low-end device to use this feature.");
      document.getElementById("redadswitch").checked = true;
      window.localStorage.setItem("redads", "true");
      return;
    };
    document.getElementById("redadswitch").checked = false;
    window.localStorage.setItem("redads", "false"); //we dont want this
    location.reload();
  } else {
    document.getElementById("redadswitch").checked = true;
    window.localStorage.setItem("redads", "true");
    location.reload();
  };
};

function tog2() {
  if (document.getElementById("ga").checked) {
    document.getElementById("ga").checked = false;
    window.localStorage.setItem("ga", "false"); //we dont want this
    location.reload();
  } else {
    document.getElementById("ga").checked = true;
    window.localStorage.setItem("ga", "true");
    location.reload();
  };
};