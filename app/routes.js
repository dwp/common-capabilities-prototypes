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
    res.redirect('/address-service/thank-you')
  } else {
    res.redirect('/index-address-service')
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
    res.redirect('/address-service/thank-you')
  } else {
    res.redirect('/index-address-service')
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
    res.redirect('/address-service/address-lookups-yes-no-postcode')
  } else {
    res.redirect('enter-typeahead')
  }
})

router.get('/making-pages', function (req, res) {
  res.redirect('/docs/make-first-prototype/create-pages')
})




module.exports = router
