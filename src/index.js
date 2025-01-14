import "./style.css";
import {add_Student} from "./student/student.js";
import {student_edit} from "./student/student.js";
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
student_edit_form.addEventListener("click", function(student_info){ //json_inforation
    let form = student_edit(student_info).student_edit_form;
    // let form = student_edit(student_info);
    content.innerHTML = form;
});