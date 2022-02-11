
import { EmployeesHTML } from "./Employees.js"


export const BlindMiceHTML = () => {
    return `
    <h1>Blind Mice Repair</h1>
    <section class="employees" id="employees">
    ${EmployeesHTML()}
    </section>
    
    `
}