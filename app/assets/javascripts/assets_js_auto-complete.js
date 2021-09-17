const countries = [
    'Afghan',
    'Albanian',
    'Algerian',
    'American',
    'Andorran',
    'Angolan',
    'Anguillan',
    'Antiguan',
    'Argentine',
    'Armenian',
    'Aruban',
    'Ascension',
    'Australian',
    'Austrian',
    'Azerbaijani',
    'Bahamian',
    'Bahraini',
    'Bangladeshi',
    'Barbadian',
    'Barbudan',
    'Belarusian',
    'Belgian',
    'Belizean',
    'Beninese',
    'Bermudian',
    'Bhutanese',
    'Bolivian',
    'Bosnian',
    'Botswanan',
    'Brazilian',
    'British', 
    'British Virgin Islander',
    'British/West Indian',
    'Brunei',
    'Bulgarian',
    'Burkinan',
    'Burmese',
    'Burundian',
    'Cambodian',
    'Cameroonian',
    'Canadian',
    'Cape Verdean',
    'Cayman Islander',
    'Central African',
    'Chadian',
    'Chilean',
    'Chinese',
    'Citizen of Antigua and Barbuda',
    'Citizen Of United Arab Emirates',
        'Cocos & Malese People',
    'Colombian',
    'Comoran',
    'Congolese',
    'Cook Islander',
    'Costa Rican',
        'Cote D Ivoire',
    'Croatian',
    'Cuban',
    'Cymraes',
    'Cymro',
    'Cypriot',
    'Czech',
        'Czechoslovakian',
    'Danish',
    'Department Of Guadeloupe',
    'Djiboutian',
    'Dominican',
    'Dutch',
    'East Timorese',
    'Ecuadorian',
    'Egyptian',
    'Emirati',
    'Equatorial Guinean',
    'Eritrean',
    'Estonian',
    'Ethiopian',
    'Faeroese',
    'Fijian',
    'Filipino',
    'Finnish',
    'French',
        'French Guianan',
    'Gabonese',
    'Gambian',
    'Georgian',
    'German',
    'Ghanaian',
    'Gibraltarian',
    'Greek',
    'Greenlandic',
    'Grenadian',
    'Guamanian',
    'Guatemalan',
    'Guinea Bissau',
    'Guinean',
    'Guyanese',
    'Haitian',
    'Honduran',
    'Hong Konger',
    'Hungarian',
        'I-Kiribatians',
    'Icelandic',
        'Ilois',
    'Indian',
    'Indonesian',
    'Iranian',
    'Iraqi',
    'Irish',
    'Israeli',
    'Italian',
    'Ivorian',
    'Jamaican',
    'Japanese',
    'Jordanian',
        'Kampuchean',
    'Kazakh',
    'Kenyan',
    'Kiribati',
    'Kittitian',
    'Kosovan',
    'Kuwaiti',
    'Kyrgyz',
    'Laotian',
    'Latvian',
    'Lebanese',
        'Lesotho',
    'Liberian',
    'Libyan',
    'Liechtenstein',
    'Lithuanian',
    'Luxembourger',
    'Macanese',
    'Macedonian',
    'Malagasy',
    'Malawian',
    'Malaysian',
    'Maldivian',
    'Malian',
    'Maltese',
        'Marianans',
    'Marshalese',
    'Martiniquais',
    'Mauritanian',
    'Mauritian',
    'Mexican',
    'Micronesian',
    'Moldovan',
    'Monegasque',
    'Mongolian',
    'Montengrin',
    'Montserratian',
    'Moroccan',
    'Mosotho',
    'Mozambican',
    'Namibian',
    'Nauruan',
    'Nepalese',
        'Nevisian',
    'New Zealander',
    'Nicaraguan',
    'Nigerian',
    'Niueans',
    'North Korean',
    'Norwegian',
    'Omani',
    'Pakistani',
    'Palauan',
    'Palestinian',
    'Panamanian',
    'Papua New Guinean',
    'Paraguayan',
    'Peruvian',
    'Pitcairn Islander',
    'Polish',
        'Polynesian',
    'Portuguese',
    'Prydeinig',
    'Puerto Rican',
    'Qatari',
        'Reunion',
    'Romanian',
    'Russian',
    'Rwandan',
        'Sabah',
        'Sahwi',
    'Salvadoran',
    'Sammarinese',
    'Samoan',
        'San Marino',
    'Sao Tomean',
        'Sarawak',
    'Saudi Arabian',
    'Senegalese',
    'Serbian',
    'Seychellois',
        'Sharjah',
    'Sierra Leonean',
    'Singaporean',
    'Slovak',
    'Slovenian',
    'Solomon Islander',
    'Somali',
    'South African',
    'South Korean',
    'South Sudanese',
    'Spanish',
    'Sri Lankan',
    'St Helenian',
    'St Lucian',
    'Stateless',
    'Sudanese',
    'Surinamese',
    'Swazi',
    'Swedish',
    'Swiss',
    'Syrian',
        'Tahitian',
    'Taiwanese',
    'Tajik',
    'Tanzanian',
    'Thai',
        'Timorese',
    'Togolese',
        'Tokelauans',
    'Tongan',
    'Trinidanian & Tobagan',
    'Tristan Da Gunha',
    'Tunisian',
    'Turkish',
    'Turkmen',
    'Turks & Caicos Islander',
    'Tuvaluan',
    'Ugandan',
    'Ukrainian',
    'Uruguayan',
    'Uzbek',
    'Vanuatu',
    'Vatican',
    'Vincentian',
    'Venezuelan',
    'Vietnamese',
    'Wallisian',
        'West Indian',
    'Yemeni',
        'Yugoslav',
        'Yugoslavian',
        'Zairean',
    'Zambian',
    'Zimbabwean',
    
]

accessibleAutocomplete({
    element: document.querySelector('#f-nationality'),
    name: 'nationality',
    id: 'f-nationality',
    source: countries
})

if (document.addEventListener){
    document.addEventListener('DOMContentLoaded', getElement, false);
} else if (document.attachEvent){
    document.attachEvent('onDOMContentLoaded', getElement);
}

function getElement() {
    if (document.getElementById("previousValue")) {
        document.getElementsByClassName("autocomplete__input autocomplete__input--default")[0].value = document.getElementById("previousValue").value;
        setTimeout(function(){
            document.getElementById("f-nationality__option--0").click()
        }, 100);
    }
}
