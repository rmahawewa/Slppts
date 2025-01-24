export let add_student_assignment = `
<form action=#>
<h1>Assignment for student</h1>
<div class="form_content">
<div class="form_element">
<label class="topic">Lesson</label><select><option>1</option><option>2</option><option>3</option></select>
</div>
<div class="form_element">
<label class="topic">Student_name</label><select><option>1</option><option>2</option><option>3</option></select>
</div>
<div class="form_element">
<label class="points">Points</label><input type="number" id="points" name="points" >
</div>
<div class="form_element butns">
<button type="submit" id="submit_btn">Submit</button>
<button id="clear">Clear</button>
</div>
</div>
</form>
`;