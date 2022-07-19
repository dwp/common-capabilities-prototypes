const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line


// Add attribute while adding agent profiles
router.post('/add-agent-char', function (req, res) {

  const addChar = req.session.data['add-char-answer']

  if (addChar === 'yes') {
    res.redirect('/self-service/admin-v3/manage-agent-profiles/add-agent-char')
  } else {
    res.redirect('/self-service/admin-v3/manage-agent-profiles/check-add-agent')
  }
})




// Add attribute while adding agent profiles
router.post('/add-agent-char-ba', function (req, res) {

  const addChar = req.session.data['add-char-answer']

  if (addChar === 'yes') {
    res.redirect('/self-service/admin-v3/maintain/agents/add-agent-char')
  } else {
    res.redirect('/self-service/admin-v3/maintain/agents/check-add-agent-char-added')
  }
})




// Add attribute while adding task template
router.post('/add-tt-char-ba', function (req, res) {

  const addChar = req.session.data['add-char-answer']

  if (addChar === 'yes') {
    res.redirect('/self-service/admin-v3/maintain/task-definitions/add-char')
  } else {
    res.redirect('/self-service/admin-v3/maintain/task-definitions/check-defi-details')
  }
})

// Add attribute while adding characteristic
router.post('/added-to-characteristic-list', function (req, res) {

  const addChar = req.session.data['add-another-characteristics']

  if (addChar === 'yes') {
    res.redirect('/self-service/admin-v3/attributes/add-attributes')
  } else {
    res.redirect('/self-service/admin-v3/attributes/added-to-attributes-list')
  }
})

// Add attribute while adding characteristic
router.post('/char-ba', function (req, res) {

  const addChar = req.session.data['add-another-attribute']

  if (addChar === 'yes') {
    res.redirect('/self-service/admin-v3/maintain/char-ba/add-char')
  } else {
    res.redirect('/self-service/admin-v3/maintain/char-ba/added-to-char-list')
  }
})

// Remove attribute while adding characteristic
router.post('/remove-attri-ba', function (req, res) {

  const addChar = req.session.data['add-another-attribute']

  if (addChar === 'yes') {
    res.redirect('/self-service/admin-v3/maintain/char-ba/removed-char-list')
  } else {
    res.redirect('/self-service/admin-v3/maintain/char-ba/char-list')
  }
})




//For Team leader interfaces

// Selecting the search in Manage tasks
router.post('/task/search-task', function (req, res) {

  const searchTerm = req.session.data['searchTerm']

  if (searchTerm === 'taskid') {
    res.redirect('/task/search-results-taskid')
  } else if(searchTerm === 'citizenGUID') {
    res.redirect('/task/search-results-citizenGUID')
  } else if(searchTerm === 'staffnumber') {
    res.redirect('/task/search-results-staffnumber')
  }
})



module.exports = router
