import "./style.css";
import {add_Student} from "./student/student.js";
import {student_edit} from "./student/student.js";
import {studentView} from "./student/student.js";
import {specific_student_view} from "./student/student.js";
import {student_info} from "./data.js";


let content = document.querySelector(".detailed-content");
// content.innerHTML = add_Student;

let student_view = document.querySelector("#student_view");
let student_add = document.querySelector("#student_add");
let student_edit_form = document.querySelector("#student_edit");

student_add.addEventListener("click", function(){
    content.innerHTML = add_Student;
});

// let student_info = student_info;
student_edit_form.addEventListener("click", function(){ //json_inforation
    let form = student_edit(student_info[0]).student_edit_form;
    content.innerHTML = form;
});


student_view.addEventListener("click", function(){
    // console.log(student_info);
    let table_data = studentView(student_info).student_view_table;
    content.innerHTML = table_data;
});


content.addEventListener("click", function(e){

    if(e.target.getAttribute("class") !== null && e.target.getAttribute("class").toString().localeCompare("edit") === 0 ){
        let id = e.target.getAttribute("id");
        let index = Number(id) - 1;
        let form = student_edit(student_info[index]).student_edit_form;
        content.innerHTML = form;
    }
    if(e.target.getAttribute("class") !== null && e.target.getAttribute("class").toString().localeCompare("view") === 0 ){
        let id = e.target.getAttribute("id");
        let index = Number(id) - 1;
        let form = specific_student_view(student_info[index]).single_student_view;
        content.innerHTML = form;
    }
    if(e.target.getAttribute("id") !== null && e.target.getAttribute("id").toString().localeCompare("view_all_students_btn") === 0 ){
        let table_data = studentView(student_info).student_view_table;
        content.innerHTML = table_data;
    }

});