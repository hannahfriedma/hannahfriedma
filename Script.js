function filterData() {
  event.preventDefault();
  var startdate = document.getElementById("startdate").value;
    var enddate = document.getElementById("enddate").value;
  console.log("startinf date: " + startdate);
  console.log("Ending date: " + enddate);
  fetch("https://compute.samford.edu/zohauth/clients/data");

}
async function fetchData() {
  try {
      const response = await fetch('https://compute.samford.edu/zohauth/clients/datajson');
      const data = await response.json();
      populateTable(data);
  } catch (error) {
      console.error('Error fetching data:', error);
  }
}

function populateTable(data) {
  const tableBody = document.querySelector('#data-table tbody');
  tableBody.innerHTML = ''; // Clear any existing rows

  data.forEach(item => {
      const row = document.createElement('tr');
      row.innerHTML = `
          <td><a href="details.html?id=${item.id}">Pitch ${item.id}</a></td>
          <td>${item.speed}</td>
          <td>${item.result || '--'}</td>
          <td>${item.datetime || '--'}</td>
      `;
      tableBody.appendChild(row);
  });
}