const express = require('express')
const router = express.Router()



// Add your routes here - above the module.exports line
// Branching
router.post('/address-service/address-lookups', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  const anotherLookup = req.session.data['another-lookup-service']

  if (anotherLookup === 'no-to-lookup') {
    res.redirect('/address-service/thank-you')
  } else {
    res.redirect('/index-address-service')
  }
})

router.get('/making-pages', function (req, res) {
  res.redirect('/docs/make-first-prototype/create-pages')
})




router.post('/address-service/check-your-answers-uprn-answer', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  const anotherLookup = req.session.data['another-address']

  if (anotherLookup === 'false') {
    res.redirect('/address-service/address-lookups-yes-no')
  } else {
    res.redirect('enter-uprn')
  }
})

router.get('/making-pages', function (req, res) {
  res.redirect('/docs/make-first-prototype/create-pages')
})


// Add your routes here - above the module.exports line
// Branching
router.post('/address-service/address-lookups-postcode', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  const anotherLookup = req.session.data['another-lookup-service']

  if (anotherLookup === 'no-to-lookup') {
    res.redirect('/address-service/main-thank-you')
  } else {
    res.redirect('/address-service/main-address-lookups-u-t')
  }
})

router.get('/making-pages', function (req, res) {
  res.redirect('/docs/make-first-prototype/create-pages')
})



router.post('/address-service/check-your-answers-postcode-answer', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  const anotherLookup = req.session.data['another-address']

  if (anotherLookup === 'false') {
    res.redirect('/address-service/address-lookups-yes-no-postcode')
  } else {
    res.redirect('enter-postcode')
  }
})

router.get('/making-pages', function (req, res) {
  res.redirect('/docs/make-first-prototype/create-pages')
})



// Branching textsearch
router.post('/address-service/address-lookups-textsearch', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  const anotherLookup = req.session.data['another-lookup-service']

  if (anotherLookup === 'no-to-lookup') {
    res.redirect('/address-service/main-thank-you')
  } else {
    res.redirect('/address-service/main-address-lookups-p-u')
  }
})

router.get('/making-pages', function (req, res) {
  res.redirect('/docs/make-first-prototype/create-pages')
})



router.post('/address-service/check-your-answers-textsearch-answer', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  const anotherLookup = req.session.data['another-address']

  if (anotherLookup === 'false') {
    res.redirect('/address-service/address-lookups-yes-no-textsearch')
  } else {
    res.redirect('enter-textsearch')
  }
})

router.get('/making-pages', function (req, res) {
  res.redirect('/docs/make-first-prototype/create-pages')
})



// Branching textsearch
router.post('/address-service/main-address-lookups', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  const anotherLookup = req.session.data['main-lookup-service']

  if (anotherLookup === 'postcode') {
    res.redirect('/address-service/main-address-details-postcode')
  }

  else if (anotherLookup === 'uprn') {
    res.redirect('/address-service/main-check-address-uprn')
  }

  else if (anotherLookup === 'textsearch') {
    res.redirect('/address-service/main-enter-textsearch')
  }

})


//////////////////////////SELF SERVICE/////////////////////////////////
// Branching remove-task-definition
router.post('/self-service/admin-self-service-1/task-definitions/remove-task', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  const removeTaskDefinition = req.session.data['remove-task-definition']

  if (removeTaskDefinition === 'yes') {
    res.redirect('/self-service/admin-self-service-1/task-definitions/removed-task-defi')
  }

  else if (removeTaskDefinition === 'no') {
    res.redirect('/self-service/admin-self-service-1/task-definitions/added-task-defi')
  }


})


// Branching remove-task-definition
router.post('/self-service/admin-self-service-1/agents/remove-agent', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  const removeTaskDefinition = req.session.data['remove-agent']

  if (removeTaskDefinition === 'yes') {
    res.redirect('/self-service/admin-self-service-1/agents/removed-agents-list')
  }

  else if (removeTaskDefinition === 'no') {
    res.redirect('/self-service/admin-self-service-1/agents/added-agents-list')
  }


})


// Branching remove-task-definition
router.post('/self-service/admin-self-service-1/want-to-setup-new', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  const removeTaskDefinition = req.session.data['setup-answer']

  if (removeTaskDefinition === 'Yes') {
    res.redirect('/self-service/admin-self-service-1/service-domain')
  }

  else if (removeTaskDefinition === 'No') {
    res.redirect('/self-service/admin-self-service-1/maintain/added-organisations-maintain')
  }


})

router.use('/node_modules', express.static('node_modules'))
module.exports = router
