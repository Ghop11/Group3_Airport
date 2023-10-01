// tables.js

// Your JSON data
let DATA = {
    "employees": [
        {
            "SSN": "123-45-6789",
            "union_membership_number": "UMN12345"
        },
        {
            "SSN": "987-65-4321",
            "union_membership_number": "UMN98765"
        },
        {
            "SSN": "111-22-3333",
            "union_membership_number": "UMN11122"
        },
        {
            "SSN": "444-55-6666",
            "union_membership_number": "UMN44455"
        },
        {
            "SSN": "777-88-9999",
            "union_membership_number": "UMN77788"
        },
        {
            "SSN": "666-77-8888",
            "union_membership_number": "UMN66677"
        },
        {
            "SSN": "222-33-4444",
            "union_membership_number": "UMN22233"
        },
        {
            "SSN": "555-44-3333",
            "union_membership_number": "UMN55544"
        },
        {
            "SSN": "999-88-7777",
            "union_membership_number": "UMN99988"
        },
        {
            "SSN": "123-12-1234",
            "union_membership_number": "UMN12312"
        },
        {
            "SSN": "789-01-2345",
            "union_membership_number": "UMN78901"
        },
        {
            "SSN": "345-67-8901",
            "union_membership_number": "UMN34567"
        },
        {
            "SSN": "456-78-9012",
            "union_membership_number": "UMN45678"
        },
        {
            "SSN": "234-56-7890",
            "union_membership_number": "UMN23456"
        },
        {
            "SSN": "876-54-3210",
            "union_membership_number": "UMN87654"
        }
    ],
    "trafficControllers": [
        {
            "SSN": "123-45-6789",
            "medical_examination_date": "2023-05-15"
        },
        {
            "SSN": "987-65-4321",
            "medical_examination_date": "2023-04-20"
        },
        {
            "SSN": "111-22-3333",
            "medical_examination_date": "2023-06-10"
        },
        {
            "SSN": "444-55-6666",
            "medical_examination_date": "2023-03-25"
        }
    ],
    "technicians": [
        {
            "SSN": "123-12-1234",
            "name": "John Doe",
            "address": "123 Main St",
            "phone_number": "555-1234",
            "salary": 60000
        },
        {
            "SSN": "789-01-2345",
            "name": "Jane Smith",
            "address": "456 Elm St",
            "phone_number": "555-5678",
            "salary": 55000
        },
        {
            "SSN": "345-67-8901",
            "name": "David Johnson",
            "address": "789 Oak St",
            "phone_number": "555-7890",
            "salary": 62000
        },
        {
            "SSN": "456-78-9012",
            "name": "Mary Wilson",
            "address": "101 Pine St",
            "phone_number": "555-2345",
            "salary": 58000
        },
        {
            "SSN": "234-56-7890",
            "name": "Robert Lee",
            "address": "222 Cedar St",
            "phone_number": "555-6789",
            "salary": 63000
        },
        {
            "SSN": "876-54-3210",
            "name": "Linda Martinez",
            "address": "333 Maple St",
            "phone_number": "555-3456",
            "salary": 59000
        }
    ],
    "expertises": [
        {
            "technician": "123-12-1234",
            "airplane_model": "DC-10"
        },
        {
            "technician": "123-12-1234",
            "airplane_model": "A320"
        },
        {
            "technician": "789-01-2345",
            "airplane_model": "A320"
        },
        {
            "technician": "789-01-2345",
            "airplane_model": "B737"
        },
        {
            "technician": "345-67-8901",
            "airplane_model": "B737"
        },
        {
            "technician": "345-67-8901",
            "airplane_model": "E170"
        },
        {
            "technician": "456-78-9012",
            "airplane_model": "DC-10"
        },
        {
            "technician": "456-78-9012",
            "airplane_model": "MD-80"
        },
        {
            "technician": "234-56-7890",
            "airplane_model": "MD-80"
        },
        {
            "technician": "234-56-7890",
            "airplane_model": "A340"
        },
        {
            "technician": "876-54-3210",
            "airplane_model": "A340"
        },
        {
            "technician": "876-54-3210",
            "airplane_model": "B777"
        },
        {
            "technician": "123-45-6789",
            "airplane_model": "B777"
        },
        {
            "technician": "123-45-6789",
            "airplane_model": "E190"
        },
        {
            "technician": "123-45-6789",
            "airplane_model": "MD-90"
        }
    ],
    "airplanes": [
        {
            "registration_number": "ABC123",
            "model_number": "DC-10"
        },
        {
            "registration_number": "XYZ789",
            "model_number": "A320"
        },
        {
            "registration_number": "LMN456",
            "model_number": "B737"
        },
        {
            "registration_number": "PQR789",
            "model_number": "E170"
        },
        {
            "registration_number": "DEF123",
            "model_number": "MD-80"
        },
        {
            "registration_number": "GHI456",
            "model_number": "A340"
        },
        {
            "registration_number": "JKL789",
            "model_number": "B777"
        },
        {
            "registration_number": "MNO123",
            "model_number": "E190"
        },
        {
            "registration_number": "UVW456",
            "model_number": "MD-90"
        },
        {
            "registration_number": "QRS789",
            "model_number": "A320"
        },
        {
            "registration_number": "TUV123",
            "model_number": "A320"
        },
        {
            "registration_number": "ZAB456",
            "model_number": "B737"
        },
        {
            "registration_number": "CDE789",
            "model_number": "B737"
        },
        {
            "registration_number": "FGH123",
            "model_number": "A340"
        },
        {
            "registration_number": "IJK456",
            "model_number": "A340"
        }
    ],
    "airplaneModels": [
        {
            "model_number": "DC-10",
            "capacity": 300,
            "weight": 150000
        },
        {
            "model_number": "A320",
            "capacity": 220,
            "weight": 100000
        },
        {
            "model_number": "B737",
            "capacity": 180,
            "weight": 120000
        },
        {
            "model_number": "E170",
            "capacity": 100,
            "weight": 60000
        },
        {
            "model_number": "MD-80",
            "capacity": 150,
            "weight": 80000
        },
        {
            "model_number": "A340",
            "capacity": 330,
            "weight": 160000
        },
        {
            "model_number": "B777",
            "capacity": 350,
            "weight": 170000
        },
        {
            "model_number": "E190",
            "capacity": 110,
            "weight": 65000
        },
        {
            "model_number": "MD-90",
            "capacity": 160,
            "weight": 85000
        },
        {
            "model_number": "A380",
            "capacity": 550,
            "weight": 300000
        }
    ],
    "test": [
        // Test data for airplane "ABC123"
        {
            date: "2023-08-10",
            work_on_hours: 5,
            score: 95,
            airplane: "ABC123",
            technician: "123-12-1234"
        },
        // Test data for airplane "XYZ789"
        {
            date: "2023-08-15",
            work_on_hours: 4,
            score: 91,
            airplane: "XYZ789",
            technician: "789-01-2345"
        },
        // Test data for airplane "LMN456"
        {
            date: "2023-08-20",
            work_on_hours: 6,
            score: 92,
            airplane: "LMN456",
            technician: "345-67-8901"
        },
        // Test data for airplane "PQR789"
        {
            date: "2023-08-25",
            work_on_hours: 3,
            score: 89,
            airplane: "PQR789",
            technician: "345-67-8901"
        },
        // Test data for airplane "DEF123"
        {
            date: "2023-08-12",
            work_on_hours: 7,
            score: 94,
            airplane: "DEF123",
            technician: "456-78-9012"
        },
        // Test data for airplane "GHI456"
        {
            date: "2023-08-18",
            work_on_hours: 5,
            score: 93,
            airplane: "GHI456",
            technician: "234-56-7890"
        },
        // Test data for airplane "JKL789"
        {
            date: "2023-08-30",
            work_on_hours: 4,
            score: 90,
            airplane: "JKL789",
            technician: "876-54-3210"
        },
        // Test data for airplane "MNO123"
        {
            date: "2023-08-28",
            work_on_hours: 5,
            score: 96,
            airplane: "MNO123",
            technician: "234-56-7890"
        },
        // Test data for airplane "UVW456"
        {
            date: "2023-08-22",
            work_on_hours: 6,
            score: 91,
            airplane: "UVW456",
            technician: "876-54-3210"
        },
        // Test data for airplane "QRS789"
        {
            date: "2023-08-14",
            work_on_hours: 4,
            score: 88,
            airplane: "QRS789",
            technician: "789-01-2345"
        },
        // Test data for airplane "TUV123"
        {
            date: "2023-08-26",
            work_on_hours: 3,
            score: 87,
            airplane: "TUV123",
            technician: "789-01-2345"
        },
        // Test data for airplane "ZAB456"
        {
            date: "2023-08-16",
            work_on_hours: 5,
            score: 94,
            airplane: "ZAB456",
            technician: "345-67-8901"
        },
        // Test data for airplane "CDE789"
        {
            date: "2023-08-17",
            work_on_hours: 4,
            score: 92,
            airplane: "CDE789",
            technician: "345-67-8901"
        },
        // Test data for airplane "FGH123"
        {
            date: "2023-08-29",
            work_on_hours: 6,
            score: 95,
            airplane: "FGH123",
            technician: "234-56-7890"
        },
        // Test data for airplane "IJK456"
        {
            date: "2023-08-19",
            work_on_hours: 7,
            score: 90,
            airplane: "IJK456",
            technician: "234-56-7890"
        }
    ]
};



// Function to create and display tables with styled pagination
document.addEventListener('DOMContentLoaded', function () {
    // Function to create and display tables
    function createTables(section = false) {

        // Default is jsonData check if section is true or false
        const jsonData = section ? { [section] : DATA[section] } : DATA;
        console.log(jsonData)

        // if section has something, then get the correct element id
        const tablesDiv = section ? document.getElementById(`${section}`) : document.getElementById('tables');

        // Iterate through the JSON data and create a table for each dataset
        for (const key in jsonData) {
            if (jsonData.hasOwnProperty(key)) {
                const data = jsonData[key];

                // Calculate the number of items per page and current page
                const pageSize = 5; // Number of items per page
                let currentPage = 1;

                // Create a table
                const table = document.createElement('table');
                table.classList.add('table', 'table-hover', 'table-dark', 'table-bordered', 'mt-4', 'table-sm');

                // Create a table header with column titles
                const thead = document.createElement('thead');
                thead.classList.add('thead-dark')

                const headerRow = document.createElement('tr');
                for (const column in data[0]) {
                    if (data[0].hasOwnProperty(column)) {
                        const th = document.createElement('th');
                        th.textContent = column;
                        headerRow.appendChild(th);
                    }
                }
                thead.appendChild(headerRow);
                table.appendChild(thead);

                // Create table rows with data for the current page
                const tbody = document.createElement('tbody');

                // Function to update the table with the current page
                function updateTable() {
                    const startIndex = (currentPage - 1) * pageSize;
                    const endIndex = Math.min(startIndex + pageSize, data.length);
                    const pageData = data.slice(startIndex, endIndex);
                    tbody.innerHTML = '';
                    for (const item of pageData) {
                        const row = document.createElement('tr');

                        // Add Bootstrap row color classes (odd/even)
                        // const rowColorClass = (startIndex + pageData.indexOf(item)) % 2 === 0 ? 'table-light' : 'table-active';
                        // row.classList.add(rowColorClass);

                        for (const column in item) {
                            if (item.hasOwnProperty(column)) {
                                const cell = document.createElement('td');
                                cell.textContent = item[column];
                                row.appendChild(cell);
                            }
                        }
                        tbody.appendChild(row);
                    }
                    prevButton.disabled = currentPage == 1 ? true : false;
                }
                table.appendChild(tbody);

                // Create pagination
                const paginationDiv = document.createElement('div');
                paginationDiv.classList.add('pagination', 'justify-content-center', 'mt-3');

                // Previous page button
                const prevButton = document.createElement('button');
                prevButton.textContent = '<';
                prevButton.classList.add('btn', 'btn-light');
                prevButton.addEventListener('click', () => {
                    currentPage--;
                    if (currentPage < 1) currentPage = 1;
                    updateTable();
                });

                prevButton.disabled = currentPage == 1 ? true : false;
                paginationDiv.appendChild(prevButton);

                // Page numbers
                const pageCount = Math.ceil(data.length / pageSize);
                for (let i = 1; i <= pageCount; i++) {
                    const pageButton = document.createElement('button');
                    pageButton.textContent = i;
                    pageButton.classList.add('btn', 'btn-light');
                    pageButton.addEventListener('click', () => {
                        currentPage = i;
                        updateTable();
                    });
                    paginationDiv.appendChild(pageButton);
                }

                // Next page button
                const nextButton = document.createElement('button');
                nextButton.textContent = '>';
                nextButton.classList.add('btn', 'btn-light');
                nextButton.addEventListener('click', () => {
                    currentPage++;
                    if (currentPage > pageCount) currentPage = pageCount;
                    updateTable();
                });
                nextButton.disabled = pageCount <= 1; // Initially disabled if there's only one page
                paginationDiv.appendChild(nextButton);

                // Append the title, table, and styled pagination to the container
                const title = document.createElement('h2');
                title.textContent = key;

                tablesDiv.appendChild(title);
                tablesDiv.appendChild(table);
                // tablesDiv.appendChild(tbody);
                tablesDiv.appendChild(paginationDiv);

                // Initially populate the table with data
                updateTable();
            }
        }
    }
    // Call the function to create and display tables with pagination
    createTables();
    createTables('airplanes');
    createTables('test');

    // Function to populate the modelSelect dropdown with airplane models
    function populateModelSelect() {
        const modelSelect = document.getElementById("modelSelect");

        // Iterate through airplaneModels in DATA and add options
        DATA.airplaneModels.forEach((model) => {
            const option = document.createElement("option");
            option.value = model.model_number;
            option.textContent = model.model_number;
            modelSelect.appendChild(option);
        });
    }

    // Call the populateModelSelect function to populate the dropdown
    populateModelSelect();

    // Function to add an airplane to DATA
    addAirplane = () => {
        const registrationNumber = document.getElementById("registrationNumber").value;
        const selectedModel = document.getElementById("modelSelect").value;

        // Check if the registration number is not empty
        if (registrationNumber.trim() === "") {
            alert("Please enter a valid Registration Number.");
            return;
        }

        // Add the airplane to DATA
        DATA.airplanes.push({
            registration_number: registrationNumber,
            model_number: selectedModel
        });

        // Get a reference to the "airplanes" div
        const airplanesDiv = document.getElementById("airplanes");

      // Remove all content within the "airplanes" div
        airplanesDiv.innerHTML = "";

        // Call createTables("airplanes") to populate the table again
        createTables("airplanes");

        // Clear the input fields
        document.getElementById("registrationNumber").value = "";
    }

    // Function to remove an airplane from DATA
    removeAirplane = () => {
        const registrationNumberToRemove = document.getElementById("removeRegistrationNumber").value;

        // Check if the registration number is not empty
        if (registrationNumberToRemove.trim() === "") {
            alert("Please enter a valid Registration Number to remove.");
            return;
        }

        // Find the index of the airplane to remove
        const indexToRemove = DATA.airplanes.findIndex(
            (airplane) => airplane.registration_number === registrationNumberToRemove
        );

        // Check if the airplane was found
        if (indexToRemove === -1) {
            alert("Airplane with the provided Registration Number was not found.");
            return;
        }

        // Remove the airplane from DATA
        DATA.airplanes.splice(indexToRemove, 1);

        // Get a reference to the "airplanes" div
        const airplanesDiv = document.getElementById("airplanes");

        // Remove all content within the "airplanes" div
        airplanesDiv.innerHTML = "";

        // Call createTables("airplanes") to populate the table again
        createTables("airplanes");

        // Clear the input field
        document.getElementById("removeRegistrationNumber").value = "";
    }

    function populateAirplaneDropdown() {
        const airplaneDropdown = document.getElementById('addTestAirplane');

        // Clear the current options
        while (airplaneDropdown.firstChild) {
            airplaneDropdown.removeChild(airplaneDropdown.firstChild);
        }

        // Get the registration numbers of all airplanes
        const airplaneRegistrations = DATA.airplanes.map(airplane => airplane.registration_number);

        // Create and add options for all airplanes
        airplaneRegistrations.forEach(registration => {
            const option = document.createElement('option');
            option.value = registration;
            option.text = registration;
            airplaneDropdown.appendChild(option);
        });

        // Show the airplane dropdown
        airplaneDropdown.disabled = false;
    }


    populateAirplaneDropdown();


    function populateTechnicians() {
        const selectedAirplane = document.getElementById('addTestAirplane').value;
        const technicianDropdown = document.getElementById('addTestTechnician');

        // Clear the current options
        while (technicianDropdown.firstChild) {
            technicianDropdown.removeChild(technicianDropdown.firstChild);
        }

        // Get the technicians who have expertise for the selected airplane
        const technicians = DATA.expertises
            .filter(expertise => expertise.airplane_model === selectedAirplane)
            .map(expertise => expertise.technician);

        // Create and add options for the selected technicians
        technicians.forEach(technician => {
            const option = document.createElement('option');
            option.value = technician;
            option.text = technician;
            technicianDropdown.appendChild(option);
        });

        // Show the technician dropdown
        document.getElementById('addTestTechnicianGroup').style.display = 'block';
    }

    populateTechnicians();



    addTest = () => {
        const date = document.getElementById('testDate').value;
        const hours = parseFloat(document.getElementById('testHours').value);
        const score = parseFloat(document.getElementById('testScore').value);
        const selectedAirplane = document.getElementById('testAirplane').value;

        // Validate input data (you can add more validation as needed)
        if (!date || isNaN(hours) || isNaN(score) || !selectedAirplane) {
            alert('Please fill in all fields with valid data.');
            return;
        }

        // Create a new test object
        const newTest = {
            date: date,
            work_on_hours: hours,
            score: score,
            airplane: selectedAirplane,
            technician: '' // You can set this value based on your requirements
        };

        // Add the new test to the "test" array
        DATA.test.push(newTest);

         // Get a reference to the "airplanes" div
         const airplanesDiv = document.getElementById("test");

         // Remove all content within the "airplanes" div
         airplanesDiv.innerHTML = "";

         // Call createTables("airplanes") to populate the table again
         createTables("test");

        // Clear the form fields
        document.getElementById('testDate').value = '';
        document.getElementById('testHours').value = '';
        document.getElementById('testScore').value = '';
    }
});

let addAirplane = () => {};
let removeAirplane = () => {};
let addTest = () => {};







