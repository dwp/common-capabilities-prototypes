const address = [
  '14 Taylor St, St. Stephens Ward, Kent, CT2 7PP',


]

const char = [
  'NewsamP',
  'Decision maker',
  'Jason bourne',

]

accessibleAutocomplete({
    element: document.querySelector('#address-search'),
    name: 'addresses',
    id: 'address-search',
    source: address
})

accessibleAutocomplete_1({
    element: document.querySelector('#char-search'),
    name: 'characteristics-selected',
    id: 'char-search',
    source: char
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
