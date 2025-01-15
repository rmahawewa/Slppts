export let add_Student = `
<form action=#>
<h1>Add Student Record</h1>
<div class="form_content">
<div class="form_element">
<label class="topic">Student name</label><input type="text" name="student_name" id="student_name">
</div>
<div class="form_element">
<label class="topic">Student number</label><input type="text" name="student_id" id="student_id">
</div>
<div class="form_element">
<label class="topic">Student current year</label><input type="text" name="current_year" id="current_year">
</div>
<div class="form_element">
<label class="topic">Year of entarance</label><input type="text" name="year_of_entarance" id="year_of_entarance">
</div>
<div class="form_element">
<label class="topic">Course</label><input type="text" name="course" id"course">
</div>
<div class="form_element">
<label class="topic">Current GPA</label><input type="text" name="current_gpa" id="current_gpa">
</div>
<div class="form_element butns">
<button type="submit" id="submit_btn">Submit</button>
<button id="clear">Clear</button>
</div>
</div>
</form>
`;


export function student_edit(student_info){
    let student_name = student_info.student_name;
    let student_id = student_info.student_id;
    let current_year = student_info.current_year;
    let year_of_entarance = student_info.year_of_entarance;
    let course = student_info.course;
    let current_gpa = student_info.current_gpa;


    let student_edit_form = `
        <form action=#>
        <h1>Edit Student Record</h1>
        <div class="form_content">
        <div class="form_element">
        <label class="topic">Student name</label><input type="text" name="student_name" id="student_name" value=`+ student_name +`>
        </div>
        <div class="form_element">
        <label class="topic">Student number</label><input type="text" name="student_id" id="student_id" value=`+ student_id +`>
        </div>
        <div class="form_element">
        <label class="topic">Student current year</label><input type="text" name="current_year" id="current_year" value=`+ current_year +`>
        </div>
        <div class="form_element">
        <label class="topic">Year of entarance</label><input type="text" name="year_of_entarance" id="year_of_entarance" value=`+ year_of_entarance +`>
        </div>
        <div class="form_element">
        <label class="topic">Course</label><input type="text" name="course" id"course" value=`+ course +`>
        </div>
        <div class="form_element">
        <label class="topic">Current GPA</label><input type="text" name="current_gpa" id="current_gpa" value=`+ current_gpa +`>
        </div>
        <div class="form_element butns">
        <button type="submit" id="submit_btn">Submit</button>
        <button id="clear">Clear</button>
        </div>
        </div>
        </form>
            `;

        return {student_edit_form};
}


export function studentView(student_info){
    console.log(student_info);



    let student_view_table = `
    <table border="1">
    <caption>Students information</caption>
    <thead>
    <tr>
        <th>id</th>
        <th>student name</th>
        <th>student code</th>
        <th>current year</th>
        <th>year of entarance</th>
        <th>course</th>
        <th>current gpa</th>
        <th>VIEW</th>
        <th>EDIT</th>
    </tr>
    </thead>
    <tbody>`;

    student_info.forEach(element => {
        student_view_table += `<tr>`;
        Object.values(element).forEach(value => {
            student_view_table += `<td>`+ (value) +`</td>`;            
        });
        let id=Object.values(element.id);
        student_view_table += `<td><button class="view" id=`+ id +`>VIEW</button></td>`;
        student_view_table += `<td><button class="edit" id=`+ id +`>EDIT</button></td>`;
        student_view_table += `</tr>`;
    });

    student_view_table += `</table>`;

    return {student_view_table};
}