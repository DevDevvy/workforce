import { getComputers } from "./dataAccess";



export const ComputersHTML = () => {
    const computers = getComputers();
    let html = "<ul>"

    const employee = employees.map(employee => {
        return `
        <li class="employee-list" value="${employee.id}" name="employee-lister">${employee.firstName} ${employee.lastName} </li>
        `
    }).join("")
    html += employee
    html += "</ul>"
    return html
}