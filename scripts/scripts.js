var titleList = ["Eucalyptus", "Aloe Vera", "Cactus"]
var subHeaderList = ["Eucalyptus globulus", "Aloe perfoliata L", "Cactus"]
var imageList = ["../images/eucalyptus.jpg", "../images/aloe.jpg", "../images/cactai.jpg"]
var textList = ["Eucalyptus is a genus of over seven hundred species of flowering trees, shrubs or mallees in the myrtle family, Myrtaceae commonly known as eucalypts.", "Aloe vera is a succulent plant species of the genus Aloe. An evergreen perennial, it originates from the Arabian Peninsula but grows wild in tropical climate.", "Any member of the family Cactaceae, a family of flowering New World succulent plants suited to a hot, semi-desert climate."]

function displayResult() {
  var index = Math.floor(Math.random() * 3)
  document.getElementById("myHeader").innerHTML = titleList[index];
  document.getElementById("subHeader").innerHTML = subHeaderList[index];
  document.getElementById("infoImage").src = imageList[index];
  document.getElementById("infoText").innerHTML = textList[index];
    }
