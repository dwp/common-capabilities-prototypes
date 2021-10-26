const addresses = [
'OXLEASOWES FARM HAY BARN, BROCKHILL LANE,TARDEBIGGE, BROMSGROVE,B60 1LU',
'LITTLE SHORTWOOD FARM,,,,BROCKHILL LANE,,TARDEBIGGE,BROMSGROVE,B60 1LU',
'BROCKHILL WOOD,,,,BROCKHILL LANE,,,REDDITCH,B97 6AF',
'22,,BROCKHILL LANE,,,REDDITCH,B97 6GZ',
'20,,BROCKHILL LANE,,,REDDITCH,B97 6GZ',
'24,,BROCKHILL LANE,,,REDDITCH,B97 6GZ',
'GRACE COTTAGE,,,,BROCKHILL LANE,,,REDDITCH,B97 6QX',
'ROSEMARY COTTAGE,,,,BROCKHILL LANE,,,REDDITCH,B97 6QX',
'FOUR GABLES,,,,BROCKHILL LANE,,,REDDITCH,B97 6QX',
'BADGERS RETREAT,,,,BROCKHILL LANE,,,REDDITCH,B97 6QX',
'PALMERS COTTAGE,,,,BROCKHILL LANE,,,REDDITCH,B97 6QX',
'10,,BROCKHILL LANE,,,REDDITCH,B97 6QX',

]

accessibleAutocomplete({
    element: document.querySelector('#address-search'),
    name: 'addresses',
    id: 'address-search',
    source: addresses
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
            document.getElementById("address-search__option--0").click()
        }, 100);
    }
}
