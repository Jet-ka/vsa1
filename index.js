import { classv } from './classv.js';
import { classiv } from './classiv.js';
import { info } from './info.js';

const searchInput = document.getElementById('searchInput');
const passwordInput = document.getElementById('password');
const searchButton = document.getElementById('searchButton');
const resultTable = document.getElementById('resultTable');

function renderStudents(students) {
    resultTable.innerHTML = '';

    students.forEach(student => {
        const row = document.createElement('tr');
        row.className = 'student-row';
        row.innerHTML = `
            <td>${student.id}</td>
            <td>${student.name}</td>
            <td><a style="text-decoration:none" href="tel:${student.phone}">${student.phone}</a></td>
            <td><a href="#" class="whatsapp-link"><i class="bi bi-whatsapp"></i></a></td>
        `;

        const whatsappLink = row.querySelector('.whatsapp-link');
        whatsappLink.addEventListener('click', (event) => {
            event.preventDefault();
            window.sendwhatsapp(student.whatsapp, student.name, info.msg);
        });

        resultTable.appendChild(row);
    });
}

searchButton.addEventListener('click', () => {
    const searchValue = Number(searchInput.value.trim());
    const passwordValue = passwordInput.value.trim();

    if (passwordValue !== 'vsa') {
        alert('Incorrect password');
        return;
    }

    if (searchValue === 5) {
        renderStudents(classv);
    } else if (searchValue === 4) {
        renderStudents(classiv);
    } else {
        alert('No data found');
    }
});
