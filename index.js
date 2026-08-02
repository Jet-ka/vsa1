import {classnursery} from './data/classnursery.js';
import {classlkg} from './data/classlkg.js';
import {classukg} from './data/classukg.js';

import {classi} from './data/classi.js';
import {classii} from './data/classii.js'
import {classiii} from './data/classiii.js';
import { classiv } from './data/classiv.js';
import { classv } from './data/classv.js';
import {classvi} from'./data/classvi.js';
import {classix} from './data/classix.js';
import {classx} from './data/classx.js';

// for principal message by teachers 
const codemgs=["a","b","c","d","e","f","g","h","i","j","k","l","m","n"];
const randomnumber=Math.floor(Math.random()*14);
const code=codemgs[randomnumber];




// import { info } from './info.js';


const pass='vsa';

//teacher info
const searchteacher=document.getElementById('searchteacher');

const passwordteacher=document.getElementById('passwordteacher');



//to open page
const element = document.querySelector('.box');
const elementtwo=document.querySelector('.loginbox');
const verifybutton=document.getElementById('verify');

verifybutton.addEventListener('click', function(){
    const enterv=passwordteacher.value;
    const nam=searchteacher.value;
    if(nam=='' ){
     return   alert('Apunar nam tu type korok..');
        
    } else if(enterv==''){
        return alert('Apunar Password tu diok')
    }
  //  console.log(nam)
if(enterv==pass){

const teachername=document.getElementById('teachername')

element.classList.remove('main');
elementtwo.classList.add('new');
teachername.textContent=`Welcome ${nam}`;


}else{
    alert('You are not Authorised to use this System.')
}



})

// end


const searchInput = document.getElementById('searchInput');
const passwordInput = document.getElementById('password');
const searchButton = document.getElementById('searchButton');
const resultTable = document.getElementById('resultTable');
const anchor= document.getElementById('anchor');

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
            window.sendwhatsapp(student.phone, student.name,student.class);
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
if(searchValue==-1){
    renderStudents(classnursery)
}
    else if (searchValue === -2) {
        renderStudents(classlkg);
    } else if (searchValue === -3) {
        renderStudents(classukg);
    } else if(searchValue== 1){
        renderStudents(classi)
    }else if(searchValue==2){
        renderStudents(classii)
    }else if(searchValue==3){
        renderStudents(classiii)
    }else if(searchValue==4){
        renderStudents(classiv)
    }else if(searchValue==5){
        renderStudents(classv)
    }else if(searchValue==6){
        renderStudents(classvi)
    }else if(searchValue==9){
        renderStudents(classix)
    } else if(searchValue==10){
        renderStudents(classx)
    }
    
    
    else {
        alert('No data found');
    }
    if(searchValue==-1){
     anchor.setAttribute("href",`http://wa.me/+916002976805?text=${code}[Class: Nursery]:Number of Absent students:   out of:  due to:`)   
    }else if(searchValue==-2){
        anchor.setAttribute("href",`http://wa.me/+916002976805?text=${code}[Class: L.K.G]:Number of Absent students:   out of:  due to:`)
    }else if(searchValue==-3){
        anchor.setAttribute("href",`http://wa.me/+916002976805?text=${code}[Class: U.K.G]:Number of Absent students:   out of:  due to:`)
    }else{
     anchor.setAttribute("href",`http://wa.me/+916002976805?text=${code}[Class: ${searchValue}]:Number of Absent students:   out of:  due to:`)

    }

});
