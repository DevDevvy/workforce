// gets all customers

// import { getCustomers, getEmployees, getEmployeeCustomers } from "./dataAccess.js";

// const contentTarget = document.querySelector("#assignments")

// export const renderHTML = () => {
//     const employees = getEmployees()
//     const customerRelationships = getEmployeeCustomers()
//     const customers = getCustomers()
//     contentTarget.innerHTML = `
//         ${
//             employees.map(employee => {
                
//                 // Find all the customer relationships
//                 const relationships = customerRelationships.filter(relationship => relationship.employeeId === employee.id)

//                 // Find the related customer for each relationship
//                 const assignedCustomers = relationships.map(rel => {
//                     return customers.find(customer => customer.id === rel.customerId).name
//                 })
//                 return `
//                 <div class="assigned">
//                     <section class="assigned">
//                         Has worked for the following customers.
//                         <ul>
//                             ${assignedCustomers}
//                         </ul>
//                     </section>
//                 </div>
//                 `
//             }).join("")
//         }
//     `
// }

