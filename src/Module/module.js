export let add_module = `
<form action=#>
<h1>Add Module</h1>
<div class="form_content">
<div class="form_element">
<label class="topic">Subject</label><select><option>Subject1</option><option>Subject2</option></select>
</div>
<div class="form_element">
<label class="topic">Semester</label><select><option>Semester1</option><option>Semester2</option></select>
</div>
<div class="form_element">
<label class="topic">Module</label><input type="text" name="module_name" id="module_name">
</div>
<div class="form_element">
<label class="topic">Number of credits</label><input type="text" name="number_of_credits" id="number_of_credits">
</div>
<div class="form_element">
<label class="topic">Pass mark</label><input type="number" name="pass_mark" id = "pass_mark">
</div>
<div class="form_element butns">
<button type="submit" id="submit_btn">Submit</button>
<button id="clear">Clear</button>
</div>
</div>
</form>
`;