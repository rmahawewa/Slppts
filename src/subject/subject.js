export let add_Subject = `
<form action=#>
<h1>Add Subject Record</h1>
<div class="form_content">
<div class="form_element">
<label class="topic">Subject name</label><input type="text" name="subject_name" id="subject_name">
</div>
<div class="form_element">
<label class="topic">Degree</label><select name="degree" id="degree"><option>IT</option></select>
</div>
<div class="form_element">
<label class="topic">Subject code</label><input type="text" name="subject_code" id="subject_code">
</div>
<div class="form_element butns">
<button type="submit" id="submit_btn">Submit</button>
<button id="clear">Clear</button>
</div>
</div>
</form>
`;