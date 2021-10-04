export const validate = (values) => {
    let errors = {};
  
    // Username
    if (!values.username) {
      errors.username = "Required";
    } else if (values.username.length < 4 || values.username.length > 20) {
      errors.username = "Must be between 4 and 20 characters";
    } else if (
      !/^(?=[a-zA-Z0-9._]{4,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/.test(
        values.username.trim()
      )
    ) {
      errors.username = "It must not contain spaces or hyphens";
    }
  
    // Password
    if (!values.password) {
      errors.password = "Required";
    } else if (
      !/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/.test(values.password)
    ) {
      errors.password =
        "Must contain letters (Capital and lower case), numbers and between 8 and 16 characters";
    }
  
    // Confirm password
    if (!values.confirmpassword) {
      errors.confirmpassword = "Required";
    } else if (values.password !== values.confirmpassword) {
      errors.confirmpassword = "Password must be the same";
    }
  
    // Profile picture
    if (
      values.profilePicture !== "" &&
      !/^(ftp|http|https):\/\/[^ "]+$/.test(values.profilePicture)
    ) {
      errors.profilePicture = "Must be an url";
    }
  
    // Name
    if (!values.name) {
      errors.name = "Required";
    }
    // else if (!/^(?!.* $)[A-Z][a-z ]+$/.test(values.name)) {
    //   errors.name = "Invalid name";
    // }
  
    // Lastname
    if (!values.lastName) {
      errors.lastName = "Required";
    }
  
    // Email
    if (!values.email) {
      errors.email = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = "Enter a valid email";
    }
  
    // Phone number
    if (values.phoneNumber) {
      if (!/^([0-9])*$/.test(values.phoneNumber)) {
        errors.phoneNumber = "Enter a valid phone number";
      }
    }
  
    return errors;
  };

export const nationalities = [
    "Afghan",
    "Argentinean",
    "Albanian",
    "Algerian",
    "American",
    "Andorran",
    "Angolan",
    "Anguillan",
    "Citizen of Antigua and Barbuda",
    "Burundian",    
    "Cambodian",
    "Colombian",
    "Cuban",
    "Czech", 
    "Danis",
    "Dominican",
    "Dutch",
    "Ecuador",
    "Egyptian",
    "English",
    "Equator",
    "Eritrean",
    "Estonian",
    "Ethiopian",	 	 	 
    "Faroese",
    "Fijian",
    "Filipino",
    "Finnish",
    "French",
    "Gabonese",	
    "Gambian",	
    "Georgian",	
    "German",
    "Ghanaian",	
    "Gibraltarian",	
    "Greek",	
    "Greenlandic",
    "Grenadian",	
    "Guamanian",	
    "Guatemalan",	
    "Citizen of Guinea-Bissau",
    "Guinean",	
    "Guyanese",	 	 
    "Haitian",
    "Honduran",
    "Hong Konger",
    "Hungarian",
    "Icelandic",
    "Indian",
    "Indonesian",
    "Iranian",
    "Iraqi",
    "Israeli",
    "Italian",
    "Ivorian",
    "Jamaican", 
    "Kazakh",	
    "Kenyan",
    "Lebanese",	
    "Liberian",
    "Libyan",
    "Lithuanian",	
    "Luxembourger",
    "Macedonian",
    "Malawian",
    "Malaysian",
    "Maldivian",	
    "Maltese",
    "Mexican",
    "Moroccan",
    "Nepalese",
    "Nicaraguan",
    "Nigerian",
    "Nigerie",
    "North Korean",
    "Irish",
    "Norwegian",
    "Peruvian",
    "Polish",
    "Portuguese",
    "Puerto Rican",
    "Romanian",
    "Russiann",
    "Saudi Arabi",
    "Singaporea",
    "Slovak",
    "Slovenian",	
    "Somali",
    "South African",
    "South Korean",
    "Surinamese",
    "Swedish",
    "Swiss",
    "Syrian",
    "Taiwanese",
    "Togolese",
    "Tongan",
    "Trinidadian",
    "Tristania",
    "Tunisian",
    "Turkish",
    "Tuvaluan",
    "Ugandan",	
    "Ukrainian",
    "Uruguayan",
    "Uzbek",
    "Venezuelan",
    "Vietnamese",
    "Yemeni",
    "Zambian",
    "Zimbabwean"
    
]

export const languagesSpoken = [
    "Afrikaans",
    "Albanian",
    "Amharic",
    "Arabic",
    "Aramaic",
    "Armenian",
    "Assamese",
    "Aymara",
    "Azerbaijani",
    "Balochi",
    "Bamanankan",
    "Belarusan",
    "Bengali",
    "Bhojpuri",
    "Bislama",
    "Bosnian",
    "Brahui",
    "Bulgarian",
    "Burmese",
    "Cantonese",
    "Catalan",
    "Cebuano",
    "Chechen",
    "Cherokee",
    "Croatian",
    "Czech",
    "Dakota",
    "Danish",
    "Dari",
    "Dholuo",
    "Dutch",
    "English",
    "Esperanto",
    "Estonian",
    "Éwé",
    "Finnish",
    "French",
    "Georgian",
    "German",
    "Gikuyu",
    "Greek",
    "Guarani",
    "Gujarati",
    "Haitian",
    "Hawaiian",
    "Italian",
    "Japanese",
    "Jarai",
    "Javanese",
    "Korean",
    "Kurdish",
    "Kyrgyz",
    "Lao",
    "Latin",
    "Lithuanian",
    "Macedonian",
    "Maithili",
    "Malagasy",
    "Mongolian",
    "Nahuatl",
    "Navajo",
    "Nepali",
    "Norwegian",
    "Ojibwa",
    "Oriya",
    "Oromo",
    "Pashto",
    "Persian",
    "Polish",
    "Portuguese",
    "Punjabi",
    "Quechua",
    "Romani",
    "Romanian",
    "Russian",
    "Rwanda",
    "Samoan",
    "Sanskrit",
    "Serbian",
    "Shona",
    "Sindhi",
    "Sinhala",
    "Slovak",
    "Slovene",
    "Somali",
    "Spanish",
    "Swahili",
    "Swedish",
    "Tachelhit",
    "Tagalog",
    "Tajiki",
    "Tamil",
    "Tatar",
    "Telugu",
    "ThaiTibetic",
    "Turkish",
    "Turkmen",
    "Ukrainian",
    "Vietnamese",
    "Warlpiri",
    "Yucatec",
    "Zapotec",
    "Zulu"
    
]