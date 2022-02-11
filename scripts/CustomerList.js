// display all customers and employees that have worked for them
import { getCustomers, getEmployeeCustomers, getEmployees, getComputers, getDepartments, getLocations } from "./dataAccess.js";

// create a function for list
export const ListOfCompaniesWithEmployees = () => {
    const customers = getCustomers()
    const employeeCustomers = getEmployeeCustomers()
    const employees = getEmployees()
    const computers = getComputers()
    const departments = getDepartments()
    const locations = getLocations()
    

    // iterate over all customers
    const customerList = customers.map(customer => {
        
        // filter all matching customer id with employeecustomers customerid
        const matchingRelationships = employeeCustomers.filter(employee => customer.id === employee.id)

        // make function that makes assignment list
        const assignmentList = () => {
            // start ul
            let html = "<ul>"
            // map list from filter
            const relationshipList = matchingRelationships.map(relationship => {
                // find matching employee id with employeecustomers employeeid
                const foundEmployee = employees.find(employee => employee.id === relationship.employeeId)
                // return found names in li tags
                return `<li class="employeeNames">${foundEmployee.firstName} ${foundEmployee.lastName}</li>`
                // join html, then join html += found name
            }).join("")
            html += relationshipList
            // end ul list tag
            html += "</ul>"
            
            return html
        }
        return `
        <div class="company">
            <header class="companyName">
                <h1>${customer.name}</h1>
            </header>
            <section class="employee__customers">
                Working for company:
                <section>
                    ${assignmentList()}
                </section>
            </section>
            <hr>
        </div>
        `
    }).join("")
    return customerList
}
    // return interpolated html