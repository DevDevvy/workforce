

const employeeList = {}
const computerList = {}
const departmentList = {}
const locationList = {}
const customerList = {}
const employeeCustomersList = {}
const mainContainer = document.querySelector("#container")

const API = "http://localhost:8088"

// fetch employee list
export const fetchEmployees = () => {
    return fetch(`${API}/employees`)
        .then(response => response.json())
        .then(
            (empList) => {
                // Store the external state in application state
                employeeList.employees = empList
            }
        )
}

// export employee state

export const getEmployees = () => {
    return employeeList.employees.map(employee => ({...employee}))
}

// fetch computers list
export const fetchComputers = () => {
    return fetch(`${API}/computers`)
    .then(response => response.json())
    .then(
        (computerListed) => {
            // Store the external state in application state
            computerList.computers = computerListed
        }
        
        )
    }
    
// export computer state

export const getComputers = () => {
    return computerList.computers.map(computer => ({...computer}))
}

// fetch departments list
export const fetchDepartments = () => {
    return fetch(`${API}/departments`)
    .then(response => response.json())
    .then(
        (depo) => {
            // Store the external state in application state
            departmentList.departments = depo
        }
        
        )
    }
    
// export departments state

export const getDepartments = () => {
    return departmentList.departments.map(department => ({...department}))
}

// fetch locations list
export const fetchLocations = () => {
    return fetch(`${API}/locations`)
    .then(response => response.json())
    .then(
        (location) => {
            // Store the external state in application state
            locationList.locations = location
        }
        
        )
    }
    
// export locations state

export const getLocations = () => {
    return locationList.locations.map(local => ({...local}))
}
export const fetchCustomers = () => {
    return fetch(`${API}/customers`)
    .then(response => response.json())
    .then(
        (customer) => {
            // Store the external state in application state
            customerList.customers = customer
        }
        
        )
    }
    
// export customers state

export const getCustomers = () => {
    return customerList.customers.map(local => ({...local}))
}

export const fetchEmployeeCustomers = () => {
    return fetch(`${API}/employeeCustomers`)
    .then(response => response.json())
    .then(
        (customer) => {
            // Store the external state in application state
            employeeCustomersList.employeeCustomers = customer
        }
        
        )
    }
    
// export customers state

export const getEmployeeCustomers = () => {
    return employeeCustomersList.employeeCustomers.map(custy => ({...custy}))
}