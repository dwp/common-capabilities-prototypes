var $searchInput = $('input#country-search')
var $countryList = $('.app-country-group-container')
var $countryLinks = $('.app-country-group-container .countries-list__item')
var $alphabetGroups = $('.app-country-group')
var $synonymMatchElements = $('.app-synonym-matches')

$searchInput.on('input', function () {
  // Save the search query to use later
  // - change to lower case so we can match without being case-sensitive
  var searchQuery = $(this).val().toLowerCase().trim()

  // Empty all synonym match elements from previous search
  $synonymMatchElements.empty()

  // Check search query is not blank, show all if so
  if (searchQuery.length) {
    var hasMatch = false
    var hasSynonymMatch = false

    // Loop through all of the possible countries so we can check each one
    $countryLinks.each(function () {
      // Save the current element to a variable name we recognise
      $countryLink = $(this)

      // Set variables to 'false' so we can switch them to 'true' if a match is found
      var matches = false
      var synonymMatch = false

      // Get the 'text' from the link so we know what the official country name is
      var officialName = $countryLink.text()
      // Get the synonym data attribute which are formatted using '|'s like a|b|c|d....
      var synonymsString = $countryLink.attr('data-synonyms') || ''
      // Split those synonyms up by looking for '|'s so we have an array to loop through
      var synonyms = synonymsString.split('|')

      // Check that official name against the search term
      matches = officialName.toLowerCase().includes(searchQuery)

      var $synonymSpan = $countryLink.find('.app-synonym-matches')

      // Check if there are any synonyms to check
      if (synonyms.join('') != '') {
        // Create an empty array to save matched synonyms to show later, if any
        var outputSynonyms = []
        // Check the synonyms in the synonym array against the search term
        for (var synonymIndex in synonyms) {
          var synonym = synonyms[synonymIndex]
          currentMatch = synonym.toLowerCase().includes(searchQuery)
          synonymMatch = currentMatch || synonymMatch
          // If it's a match, add this synonym to the output array
          if (currentMatch) {
            outputSynonyms.push(synonym)
          }
        }

        if (synonymMatch) {
          // Create new element containing synonym match(es) in brackets
          $synonymSpan.html(' (' + outputSynonyms.join(', ') + ')')
          // Add to link
          $countryLink.append($synonymSpan)
        }
      }

      // Show this link if there is either an official or synonym match, hide if not
      if (matches || synonymMatch) {
        $countryLink.removeClass('app-country-hidden')
      } else {
        $countryLink.addClass('app-country-hidden')
      }

      // Update global variables whether there is a match or not
      hasMatch = matches || hasMatch
      hasSynonymMatch = synonymMatch || hasSynonymMatch
    })

    // Loop through each of the alphebetical letter groups to check if there are results there, hide if not
    $alphabetGroups.each(function () {
      // Save the current element to a variable name we recognise
      $alphabetGroup = $(this)

      // Count of the number of countries there are in this group
      var numberOfCountries = $alphabetGroup.find('.countries-list__item')
        .length
      // Count of the number of countries are hidden in this group
      var numberOfHiddenCountries = $alphabetGroup.find(
        '.countries-list__item.app-country-hidden'
      ).length

      console.log(numberOfCountries)
      console.log(numberOfHiddenCountries)

      // If these numbers don't match there are still results in this group, hide if not
      if (numberOfCountries != numberOfHiddenCountries) {
        $alphabetGroup.show()
      } else {
        $alphabetGroup.hide()
      }
    })
  } else {
    $alphabetGroups.show()
    $countryLinks.removeClass('app-country-hidden')
  }
})
