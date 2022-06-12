const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line


// Add characteristeristcs while adding agent profiles
router.post('/add-agent-char', function (req, res) {

  const addChar = req.session.data['add-char-answer']

  if (addChar === 'yes') {
    res.redirect('/self-service/admin-v3/manage-agent-profiles/add-agent-char')
  } else {
    res.redirect('/self-service/admin-v3/manage-agent-profiles/check-add-agent')
  }
})




// Add characteristeristcs while adding agent profiles
router.post('/add-agent-char-ba', function (req, res) {

  const addChar = req.session.data['add-char-answer']

  if (addChar === 'yes') {
    res.redirect('/self-service/admin-v3/maintain/agents/add-agent-char')
  } else {
    res.redirect('/self-service/admin-v3/maintain/agents/check-add-agent-char-added')
  }
})




// Add characteristeristcs while adding task template
router.post('/add-tt-char-ba', function (req, res) {

  const addChar = req.session.data['add-char-answer']

  if (addChar === 'yes') {
    res.redirect('/self-service/admin-v3/maintain/task-definitions/add-char')
  } else {
    res.redirect('/self-service/admin-v3/maintain/task-definitions/check-defi-details')
  }
})

// Add characteristeristcs while adding characteristic
router.post('/added-to-characteristic-list', function (req, res) {

  const addChar = req.session.data['add-another-characteristics']

  if (addChar === 'yes') {
    res.redirect('/self-service/admin-v3/attributes/add-attributes')
  } else {
    res.redirect('/self-service/admin-v3/attributes/added-to-attributes-list')
  }
})

// Add characteristeristcs while adding characteristic
router.post('/char-ba', function (req, res) {

  const addChar = req.session.data['add-another-characteristics']

  if (addChar === 'yes') {
    res.redirect('/self-service/admin-v3/maintain/char-ba/add-char')
  } else {
    res.redirect('/self-service/admin-v3/maintain/char-ba/added-to-char-list')
  }
})

module.exports = router
