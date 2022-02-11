import { BlindMiceHTML } from "./BlindMice.js"
import { fetchEmployees, fetchComputers, fetchDepartments, fetchLocations, fetchCustomers, fetchEmployeeCustomers } from "./dataAccess.js"


const mainContainer = document.querySelector("#container")
// ----fetch data from API and store it in application state, then convert data into HTML representation
const render = () => {
    fetchEmployees()
    .then(() => fetchComputers())
    .then(() => fetchDepartments())
    .then(() => fetchLocations())
    .then(() => fetchCustomers())
    .then(() => fetchEmployeeCustomers())
    .then(() => {
            mainContainer.innerHTML = BlindMiceHTML()
        }
    )
}

render()
