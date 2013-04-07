<!doctype html>
<!--[if lt IE 7 ]> <html class="no-js ie6"> <![endif]-->
<!--[if IE 7 ]>    <html class="no-js ie7"> <![endif]-->
<!--[if IE 8 ]>    <html class="no-js ie8"> <![endif]-->
<!--[if (gte IE 9)|!(IE)]><!--> 
<html class="no-js"> <!--<![endif]-->
<head>
	<meta charset="utf-8">
	<title>Formulaires personnalisables avec jQuery | www.snoupix.com</title>
	<meta http-equiv="Content-Type" content="Content-type: text/html; charset=UTF-8" />
	<meta http-equiv="Content-language" content="fr-FR" />
			
	<link href="style/css/style.css" rel="stylesheet" type="text/css" media="all" />
	
</head>
<body>

	<form action="index.php?a=envoyer" method="post">
		<fieldset>
			<div class="formitem">
				<label>Input</label>
				<input type="text" name="data"/>
			</div>
			<div class="formitem">
				<label>number</label>
				<input type="number" name="data"/>
			</div>
			<div class="formitem">
				<label>Input File</label>
				<input type="file" name="data" class="myfile" />
			</div>
			<div class="formitem fleft">
				<label>Select list</label>
	 			<select name="data"class="myselect">
					<option value="jquery">jQuery</option>
					<option value="snoupix">Snoupix</option>
					<option value="shinyform">Shinyform</option>
				</select>
			</div>
			<div class="formitem fleft">
				<label>Button radio</label>
				<ul>
					<li><input type="radio" name="mon_radio" value="0" id="radio_1"/><label for="radio_1">radio normal</label></li>
					<li><input type="radio" name="mon_radio" value="1" checked="checked" class="myradio" id="radio_2"/><label for="radio_2">radio checked</label></li>
					<li><input type="radio" name="mon_radio" value="2" disabled=""  id="radio_3"/><label for="radio_3">radio disabled</label></li>
				</ul>	
			</div>
			<div class="formitem fleft">
				<label>Checkbox</label>
				<ul>
					<li><input type="checkbox" name="mon_checkbox" value="0" id="checkbox_1"/><label for="checkbox_1">checkbox normal</label></li>
					<li><input type="checkbox" name="mon_checkbox2" value="toto" checked="checked"  id="checkbox_2"/><label for="checkbox_2">checkbox checked</label></li>
					<li><input type="checkbox" name="mon_checkbox3" value="tutu" disabled="" id="checkbox_3"/><label for="checkbox_3">checkbox disabled</label></li>
				</ul>	
			</div>
		</fieldset>
	</form>

	
	<script type="text/javascript" src="http://code.jquery.com/jquery-1.9.0.js"></script>
	<script type="text/javascript" src="js/jquery.shinyform.js" ></script>
	
	<script type="text/javascript">
		$(function(){
			$('input:radio,input:checkbox,select').shinyform();
			$('input:file').shinyform({
				txtButtonFile : '<i class="icon-download-alt"></i>'
			});
		});
	</script>
	
</body>
</html>