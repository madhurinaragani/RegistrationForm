function formValidation()
{
var First_Name = document.registration.First_Name;
var Middle_Name = document.registration.Middle_Name;
var Last_Name = document.registration.Last_Name;
var uemail = document.registration.email;
var gender = document.registration.gender;
var mealChoice = document.registration.mealChoice;
var department = document.registration.department;


if(Name_Validation(First_Name)){
	if(Middle_Name_Validation(Middle_Name))
	{
		if(Name_Validation(Last_Name)) {
			if(ValidateEmail(uemail))
			{
				if(validsex(gender))
				{
					if (select_value(mealChoice))
					{
						if (select_value(department))
						{

						}
					}

				}
			}
	}
}
}

return false;

}
function Name_Validation(Name)
{
	var name = /^[A-Za-z]+$/;
	var name_len = Name.value.length
	if (name_len == 0 )
	{
		alert(Name.name + ' should not be empty')
		Name.focus();
		return false;
	}
	if(Name.value.match(name))
	{
		return true;
	}
	else
	{
		alert(Name.name + ' must have alphabet characters only')
		Name.focus();
		return false;
	}
}

function Middle_Name_Validation(Middle_Name)
{
	var middlename_len = Middle_Name.value.length
	if (middlename_len != 0 )
	{
		var middlename = /^[A-Za-z]+$/;
		if(Middle_Name.value.match(middlename))
		{
			return true;
		}
		else
		{
			alert('Middle Name must have alphabet characters only');
			Middle_Name.focus();
			return false;
		}
	}
	return true;
}

function ValidateEmail(uemail)
{
	var uemail_len = uemail.value.length
	if (uemail_len != 0 )
	{
		var mailformat = /^\w+([\.-]?\w+)*@ucop.edu$/;
		if(uemail.value.match(mailformat))
		{
			return true;
		}
		else
		{
			alert("You have entered an invalid email address!");
			uemail.focus();
			return false;
		}
	}
	else
	{
		alert('email should not be empty');
		uemail.focus();
		return false;
	}
}

function validsex(gender)
{
	if(gender.value == "Gender")
	{
		alert('select a value for ' + gender.name);
		gender.focus();
		return false;
	}
	return true
}

function select_value(drop_down)
{
	if(drop_down.value == "Default")
	{
		alert('select a value for ' + drop_down.name);
		drop_down.focus();
		return false;
	}
	else if (drop_down.value != "Default" && drop_down.name == "department")
	{
		var isNewUser=true;
		//if user exists
		// isNewUser=false;
		//if user does not exist in registration database the allow user to
		//register call respective API for validation
		if(isNewUser){
			alert('Form Succesfully Submitted');
			window.location.href = "Events.html";
		}

		return true;
	}
	else
	{
		return true;
	}
}
