var titleList = ["Eucalyptus", "Aloe Vera"]
var subHeaderList = ["Eucalyptus globulus", "Aloe perfoliata L"]
var imageList = ["../images/eucalyptus.jpg", "../images/aloe.jpg"]
var textList = ["Eucalyptus is a genus of over seven hundred species of flowering trees, shrubs or mallees in the myrtle family, Myrtaceae commonly known as eucalypts.", "Aloe vera is a succulent plant species of the genus Aloe. An evergreen perennial, it originates from the Arabian Peninsula but grows wild in tropical climate."]

function displayResult() {
  var index = Math.floor(Math.random() * 2)
  document.getElementById("myHeader").innerHTML = titleList[index];
  document.getElementById("subHeader").innerHTML = subHeaderList[index];
  document.getElementById("infoImage").src = imageList[index];
  document.getElementById("infoText").innerHTML = textList[index];
    }
