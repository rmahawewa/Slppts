export let add_student_lesson = `
<form action=#>
<h1>Student learning Lesson</h1>
<div class="form_content">
<div class="form_element">
<label class="topic">Module Id</label><select><option>1</option><option>2</option><option>3</option></select>
</div>
<div class="form_element">
<label class="topic">Student id</label><select><option>1</option><option>2</option><option>3</option></select>
</div>
<div class="form_element">
<label class="topic">Student name</label><label id="student_name"></label>
</div>
<div class="form_element">
<label class="topic">Lesson</label><select><option>1</option><option>2</option><option>3</option></select>
</div>
<div class="form_element butns">
<button type="submit" id="submit_btn">Submit</button>
<button id="clear">Clear</button>
</div>
</div>
</form>
`;