function filterData() {
  event.preventDefault();
  var startdate = document.getElementById("startdate").value;
    var enddate = document.getElementById("enddate").value;
  console.log("startinf date: " + startdate);
  console.log("Ending date: " + enddate);
  fetch("https://compute.samford.edu/zohauth/clients/data");

}
