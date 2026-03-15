const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

function generateReference (prefix) {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'
  let ref = prefix + '-'
  for (let i = 0; i < 8; i++) {
    ref += chars[Math.floor(Math.random() * chars.length)]
  }
  return ref
}

router.get('/', function (req, res) {
  res.redirect('/start')
})

router.get('/baby-age-weeks', function (req, res) {
  res.render('baby-age-weeks')
})

router.post('/baby-age-weeks', function (req, res) {
  const answer = req.session.data['baby-age-weeks']
  if (!answer || !answer.toString().trim()) {
    res.locals.errors = { 'baby-age-weeks': 'Select your baby\'s age in weeks.' }
    return res.render('baby-age-weeks')
  }
  res.redirect('/daily-routine')
})

router.get('/daily-routine', function (req, res) {
  res.render('daily-routine')
})

router.post('/daily-routine', function (req, res) {
  const answer = req.session.data['daily-routine']
  if (!answer || !answer.toString().trim()) {
    res.locals.errors = { 'daily-routine': 'Select what your routine is like.' }
    return res.render('daily-routine')
  }
  res.redirect('/bonding-concerns')
})

router.get('/bonding-concerns', function (req, res) {
  res.render('bonding-concerns')
})

router.post('/bonding-concerns', function (req, res) {
  const answer = req.session.data['bonding-concerns']
  if (!answer || !answer.toString().trim()) {
    res.locals.errors = { 'bonding-concerns': 'Select how you feel about bonding.' }
    return res.render('bonding-concerns')
  }
  res.redirect('/preferred-activities')
})

router.get('/preferred-activities', function (req, res) {
  res.render('preferred-activities')
})

router.post('/preferred-activities', function (req, res) {
  const answer = req.session.data['preferred-activities']
  if (!answer || !answer.toString().trim()) {
    res.locals.errors = { 'preferred-activities': 'Select what activities interest you.' }
    return res.render('preferred-activities')
  }
  res.redirect('/available-time')
})

router.get('/available-time', function (req, res) {
  res.render('available-time')
})

router.post('/available-time', function (req, res) {
  const answer = req.session.data['available-time']
  if (!answer || !answer.toString().trim()) {
    res.locals.errors = { 'available-time': 'Select how much time you have.' }
    return res.render('available-time')
  }
  res.redirect('/check-answers')
})

router.get('/check-answers', function (req, res) {
  res.render('check-answers')
})

router.post('/check-answers', function (req, res) {
  if (!req.session.data['reference']) {
    req.session.data['reference'] = generateReference('BB')
  }
  res.redirect('/confirmation')
})

router.get('/confirmation', function (req, res) {
  res.render('confirmation')
})

module.exports = router
