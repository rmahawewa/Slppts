export let add_subject_semester = `
<form action=#>
<h1>Add Subject Semester Record</h1>
<div class="form_content">
<div class="form_element">
<label class="topic">Subject</label><select><option>subj1</option><option>subj2</option></select>
</div>
<div class="form_element">
<label class="topic">Semester</label><select><option>semester1</option><option>semester2</option></select>
</div>
<div class="form_element">
<label class="topic">Name</label><input type="text" name="subject name" id="subject name">
</div>
<div class="form_element">
<label class="topic">Number of modules</label><input type="number" name="number_of_modules" id="number_of_modules">
</div>
<div class="form_element butns">
<button type="submit" id="submit_btn">Submit</button>
<button id="clear">Clear</button>
</div>
</div>
</form>
`;