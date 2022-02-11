import { getEmployees, getComputers, getDepartments, getLocations, getCustomers, getEmployeeCustomers } from "./dataAccess.js"



// create function to list out employees and components


// get employee list

// start <ul>

// map employees from database

// interpolate string of employees and components


// export const EmployeesHTML = () => {
//     const employees = getEmployees();
//     let html = "<ul>"

//     const employee = employees.map(employee => {
//         return `
//         <li class="employee-list" value="${employee.id}" name="employee-lister">${employee.firstName} ${employee.lastName} </li>
//         `
//     }).join("")
//     html += employee
//     html += "</ul>"
//     return html
// }

// export const EmployeesHTML = () => {
//     const employees = getEmployees();
//     const computers = getComputers()
//     let html = "<ul>"

//     const employee = employees.map(employee => { 
//         const found = computers.find(computer => {
//             return computer.id === employee.computerId}
//     })
// }

// get employees and computer
// start <ul>
// map employees
// find computer.id = employee.computerId
// return html with interpolation
// close <ul>

// export const EmployeesHTML  = () => {
//     const employees = getEmployees()
//     const computers = getComputers()
//     const departments = getDepartments()
//     let html = "<ul>"
//     const EmployeeMap = employees.map(employee => {
//         const computerModel = computers.find(computer => computer.id === employee.computerId ).model
//         const computerYear = computers.find(computer => computer.id === employee.computerId ).year
//         const department = departments.find(depo => depo.id === employee.departmentId).name
//         return `<li> ${employee.firstName} ${employee.lastName} uses a ${computerYear} ${computerModel}
//         `
//     })
//     html += EmployeeMap.join("")
//     html += "</ul>"
//     return html
// }
// export const EmployeesHTML  = () => {
//     const employees = getEmployees()
//     const computers = getComputers()
//     const departments = getDepartments()
//     const locations = getLocations()
//     const EmployeeMap = employees.map(employee => {
//         const computerModel = computers.find(computer => computer.id === employee.computerId ).model
//         const computerYear = computers.find(computer => computer.id === employee.computerId ).year
//         const department = departments.find(depo => depo.id === employee.departmentId).name
//         const location = locations.find(location => location.id === employee.locationId).name
//         return `
//             <div class="employee">
//                 <header class="employee__name">
//                     <h1>${employee.firstName} ${employee.lastName}</h1>
//                 </header>
//                 <section class="employee__computer">
//                     Currently using a ${computerYear} ${computerModel}
//                 </section>
//                 <section class="employee__department">
//                     Works in the ${department} department
//                 </section>
//                 <section class="employee__location">
//                     Works at the ${location} office
//                 </section>
//             </div>
//         `
//     })
//     return EmployeeMap
// }
const contentTarget = document.querySelector("#container")
export const EmployeesHTML = () => {
    const employees = getEmployees()
    const customers = getCustomers()
    const computers = getComputers()
    const departments = getDepartments()
    const locations = getLocations()
    const customerRelationships = getEmployeeCustomers()
    
    
            
    const html = employees.map(employee => {
        const computerModel = computers.find(computer => computer.id === employee.computerId ).model
        const computerYear = computers.find(computer => computer.id === employee.computerId ).year
        const department = departments.find(depo => depo.id === employee.departmentId).name
        const location = locations.find(location => location.id === employee.locationId).name
        // Find all the customer relationships
        const relationships = customerRelationships.filter(relationship => relationship.employeeId === employee.id)
        
        
        
        // Find the related customer for each relationship
        const assignedCustomers = () => {
            
            let html = "<ul>"
            // iterate customer relationships and find the customer name
            const relationshipList = relationships.map(rel => {
                const assignedCustomer = customers.find(customer => customer.id === rel.customerId).name
                return `<li>${assignedCustomer}</li>`
            }).join("")
            html += relationshipList
            html += "</ul>"
            return html
        }
        return `
        <div class="employee">
            <header class="employee__name">
                <h1>${employee.firstName} ${employee.lastName}</h1>
            </header>
            <section class="employee__department">
                Works in the ${department} department
            </section>
            <section class="employee__computer">
                Currently using a <em>${computerYear} ${computerModel}</em>
            </section>
            <section class="employee__location">
                Works at the ${location} office
            </section>
            <section class="employee__customers">
                Has worked for the following customers:
                <section>
                    ${assignedCustomers()}
                </section>
            </section>
            <hr>
        </div>
        `
    }).join("")
            
        return html

}

