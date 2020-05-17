const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const fs = require('fs')
const fhirConfig = require('./modules/fhirConfig')
const nconf = require('./modules/config')
const requireFromString = require('require-from-string')
const fhirModules = require('./modules/fhirModules')

const app = express()

var configLoaded = false

async function startUp() {
  await nconf.loadRemote()
  console.log(nconf.get())

  const indexRouter = require('./routes/index')
  const usersRouter = require('./routes/users')
  const authRouter = require('./routes/auth')

  app.use(logger('dev'))
  app.use(express.json())
  app.use(express.urlencoded({ extended: false }))
  app.use(cookieParser())
  app.use( require('express-session')( { secret: 'should pull from config', resave: true, saveUninitialized: true } ) )
  app.use(express.static(path.join(__dirname, 'public')))

  
  app.use('/', indexRouter)
  app.use('/users', usersRouter)

  app.use('/auth', authRouter)
  app.use(authRouter.passport.initialize())
  app.use(authRouter.passport.session())

  app.get('/test',
    ( req, res ) => {
      res.status(200).json({"user":req.user})
    }
  )

  testMod = fhirModules.require()
  app.use( '/mod', testMod )

  /*
  let testStr = `
var express = require('express')
var router = express.Router()

router.get('/', (req, res, next) => {
  res.status(200).json({"string": true, "user":req.user})
} )

module.exports = router
`

  const testModule = requireFromString(testStr, "ihris-module-test")
  app.use( '/mod', testModule )
  */

  configLoaded = true
}

startUp()

app.whenReady = () => {
  return new Promise( (resolve) => {
    let idx = setInterval( () => {
      if ( configLoaded === true ) {
        clearInterval(idx)
        resolve()
      }
    }, 100 )
  } )
}

module.exports = app

