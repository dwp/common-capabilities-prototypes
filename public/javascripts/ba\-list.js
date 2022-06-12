var charArray = new Array(

"Attenance Allowance",
"Bereavement Support Payment",
"Capture information about a death",
"Carer’s Allowance",
"Cross retirement",
"Get your State Pension",
"Pension Credit",


);

// Get dropdown element from DOM
var dropdown = document.getElementById("selected-ba");

// Loop through the array
for (var i = 0; i < charArray.length; ++i) {
    // Append the element to the end of Array list
    dropdown[dropdown.length] = new Option(charArray[i], charArray[i]);
}

// var opt = {
//     friendchat:[
//         {name:"somefriend1"},
//         {name:"somefriend2"}
//     ],
//     otherchat:[
//         {name:"someother1"},
//         {name:"someother2"}
//     ],
//     friendrequest:[
//         {name:"somerequest1"},
//         {name:"somerequest2"}
//     ],
//     sentrequest:[
//         {name:"somesent1"},
//         {name:"somesent2"}
//     ]
// };

// $(function(){
//     var $select = $('#selected-char');
//     $.each(opt, function(key, value){
//         var group = $('<optgroup label="' + key + '" />');
//         $.each(value, function(){
//             $('<option />').html(this.name).appendTo(group);
//         });
//         group.appendTo($select);
//     });
// });



function addRow() {
  var selectedChar = document.getElementById('selected-ba');
  var table = document.getElementById('characteristics');

  var rowCount = table.rows.length;
  var row = table.insertRow(rowCount);
  row.className = 'govuk-table__row';

  var valueCell = row.insertCell(0);
  valueCell.innerHTML = selectedChar.options[selectedChar.selectedIndex].text;
  valueCell.id = 'attribute-value-' + selectedChar.options[selectedChar.selectedIndex].text;
  valueCell.className = 'govuk-table__cell';

  var actionCell = row.insertCell(1);
  actionCell.innerHTML = '<a class="govuk-link" data-module="govuk-link" onclick="javascript:removeRow(' + rowCount + ');">Remove</a>';
  actionCell.className = 'govuk-table__cell';
}

function removeRow(index) {
  var table = document.getElementById('ba');
  table.deleteRow(index);
}
