function filterData(event) {
  event.preventDefault();
  var startdate = new Date(document.getElementById("startdate").value);
  var enddate = new Date(document.getElementById("enddate").value);
  
  console.log("Starting date: " + startdate);
  console.log("Ending date: " + enddate);
  
  const rows = document.querySelectorAll('#data-table tbody tr');

  rows.forEach(row => {
      const dateCell = row.cells[3].textContent; // Assuming the datetime is in the 4th cell (index 3)
      const rowDate = new Date(dateCell);

      // Check if the rowDate is within the specified range
      if (rowDate >= startdate && rowDate <= enddate) {
          row.style.display = ''; // Show row
      } else {
          row.style.display = 'none'; // Hide row
      }
  });
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