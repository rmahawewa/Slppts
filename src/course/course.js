export let add_Course = `
<form action=#>
<h1>Add Course</h1>
<div class="form_content">
<div class="form_element">
<label class="topic">Course name</label><input type="text" name="course_name" id="course_name">
</div>
<div class="form_element">
<label class="topic">Course number</label><input type="text" name="course_number" id="course_number">
</div>
<div class="form_element">
<label class="topic">Number of learning years</label><input type="number" name="learning_years" id="learning_years">
</div>
<div class="form_element">
<label class="topic">Total number of modules</label><input type="number" name="total_modules" id="total_modules">
</div>
<div class="form_element">
<label class="topic">Minimum number of required points</label><input type="number" name="min_req_points" id"min_req_points">
</div>
<div class="form_element butns">
<button type="submit" id="submit_btn">Submit</button>
<button id="clear">Clear</button>
</div>
</div>
</form>
`;