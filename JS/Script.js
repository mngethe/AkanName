const MALE_NAMES = { 
    ("Kwasi", 
    "Kwadwo", 
    "Kwabena", 
    "Kwaku", 
    "Yaw", 
    "Kofi",
    "Kwame") 
}

const FEMALE_NAMES = { ("Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama") }
const DAYS_OF_THE_WEEK = { ("sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday") }

get_user_input
    user_day_of_birth, 10
    user_month_of_birth, 11
    user_year_of_birth, 1989
    user_gender, F

    //calculate day birth
  //  var day = prompt("enter your date of birth")
    //var month = prompt("enter your month of birth")
    //var year = prompt("enter your year of birth")
    //var century =year . slice(0,2)







Day-of-the week (d) = ( ( (19/4) -2*19-1) + ((5*89/4) ) + ((26*(11+1)/10)) + 10 ) % 7



function getAkhnaName {
    if (gender === "M");
if (gender.toLocateLowerCase ("m") .startsWith ) {
    name = MALE_NAMES ( indexOfDay)
    
} else if (gender === "F"); {
    if (gender.toLocateLowerCase ("f") .startsWith) name = FEMALE_NAMES (indexOfDay)
} else !(gender "M"||"F"); { 
    (console.log ("Invalid Gender"))
}
var userAkhanName = getAkhnaName (day, month, year, gender);
console.log ("Your Name Is" + userAkhanName);


}



