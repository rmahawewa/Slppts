export let add_assignment = `
<form action=#>
<h1>Add Assignment Record</h1>
<div class="form_content">
<div class="form_element">
<label class="topic">Lession</label><select><option>select1</option><option>select2</option><option>select3</option></select>
</div>
<div class="form_element">
<label class="topic">Assignment name</label><input type="text" name="assignment_name" id="assignment_name">
</div>
<div class="form_element">
<label class="topic">Date</label><input type="date" name="date" id="date">
</div>
<div class="form_element butns">
<button type="submit" id="submit_btn">Submit</button>
<button id="clear">Clear</button>
</div>
</div>
</form>
`;