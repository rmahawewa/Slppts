import "./style.css";
import {add_Student} from "./student/student.js";
import {student_edit} from "./student/student.js";
import {studentView} from "./student/student.js";
import {specific_student_view} from "./student/student.js";
import {student_info} from "./data.js";

import {add_Student_Year} from "./student_year/student_year.js";

// import {add_Course} from "./course/course.js";
import {add_Subject} from "./subject/subject.js";

import {add_Degree} from "./degree/degree.js";

import {add_Semester} from "./semester/semester.js";

import {add_subject_semester} from "./subject_semester/subject_semester.js";

import {add_module} from "./Module/module.js";

import {add_lesson} from "./lesson/lesson.js";

import {add_assignment} from "./assignments/assignments.js";

import {add_student_degree} from "./student_enroll_degree/studentDegree.js";

import {add_student_semester} from "./student_semester.js/studentSemester.js";

import {add_student_lesson} from "./lesson_student/lesson_student.js";

import {add_student_assignment} from "./student_assignment/student_assignment.js";


let content = document.querySelector(".detailed-content");
// content.innerHTML = add_Student;

let student_view = document.querySelector("#student_view");
let student_add = document.querySelector("#student_add");
let student_edit_form = document.querySelector("#student_edit");

let add_student_year = document.querySelector("#student_year_add");

let addSubject = document.querySelector("#student_subject_add");

let addDegree = document.querySelector("#degree_add");
 
let addSemester = document.querySelector("#semester_add");

let subjectSemester = document.querySelector("#subject_semester_add");

let module_add = document.querySelector("#module_add");

let addLesson = document.querySelector("#lesson_add");

let addAssignment = document.querySelector("#assignment_add");

let addStudentDegree = document.querySelector("#student_degree_add");

let student_semester_add = document.querySelector("#student_semester_add");

let lesson_student_add = document.querySelector("#lesson_student_add");

let student_assignment_add = document.querySelector("#student_assignment_add");



// let course = document.querySelector("#course_add");

student_assignment_add.addEventListener("click", function(){
    content.innerHTML = add_student_assignment;
});

lesson_student_add.addEventListener("click", function() {
    content.innerHTML = add_student_lesson;
});

student_semester_add.addEventListener("click", function(){
    content.innerHTML = add_student_semester;
});

addStudentDegree.addEventListener("click", function(){
    content.innerHTML = add_student_degree;
});

addAssignment.addEventListener("click", function(){
    content.innerHTML = add_assignment;
});

addLesson.addEventListener("click", function(){
    content.innerHTML = add_lesson;
});

module_add.addEventListener("click", function(){
    content.innerHTML = add_module;
});

subjectSemester.addEventListener("click", function(){
    content.innerHTML = add_subject_semester;
});

addSemester.addEventListener("click", function(){
    content.innerHTML = add_Semester;
});

addSubject.addEventListener("click", function(){
    content.innerHTML = add_Subject;
});

// course.addEventListener("click", function(){
//     content.innerHTML = add_Course;
// });

addDegree.addEventListener("click", function(){
    content.innerHTML = add_Degree;
});

add_student_year.addEventListener("click", function(){
    content.innerHTML = add_Student_Year;
});


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