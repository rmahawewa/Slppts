export let add_student_semester = `
<form action=#>
<h1>Add Student Semester Record</h1>
<div class="form_content">
<div class="form_element">
<label class="topic">Year</label><select><option>1</option><option>2</option><option>3</option></select>
</div>
<div class="form_element">
<label class="topic">Semester</label><select><option>1</option><option>2</option><option>3</option></select>
</div>
<div class="form_element">
<label class="topic">Student name</label><input type="text" name="student_name" id="student_name">
</div>
<div class="form_element butns">
<button type="submit" id="submit_btn">Submit</button>
<button id="clear">Clear</button>
</div>
</div>
</form>
`;