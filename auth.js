<<<<<<< HEAD
'use strict';

let parse = require('co-body'),
    jwt   = require('jsonwebtoken')

let secret = 'shhreallysecretzomgforrealz'
=======
'use strict'
let parse = require('co-body'),
    jwt   = require('jsonwebtoken')

let secret = 'shhreallysecretomgforreals'
>>>>>>> 527401fff0b9b13a00803de603d5ea5cd31cebe0

module.exports = {
    isAuth:       isAuth,
    checkAuth:    checkAuth,
    authenticate: authenticate
}

function isAuth() {
    return function*(next) {
        if (this.user.userid > 0) {
            yield next
        } else {
            this.throw(401, 'must be logged in to view that page')
        }
    }
}

function* checkAuth (next) {
    let authHeader, token, elements, scheme
    authHeader = this.get('Authorization')
    if (authHeader) {
        elements.split(' ')
        if (elements.length === 2) {
            scheme = elements[0]
            if (scheme === 'Bearer') {
                token = elements[1]
                try {
                    this.user = jwt.verify(token, secret)
                } catch (err) {
                    
                }
            }
        }
    }
    yield next
}

function* authenticate() {
<<<<<<< HEAD
    console.log('hello')
    let body, claim
    
    body = yield parse(this)
=======
    let body, claim
    
    body = yield parse(this)
    
>>>>>>> 527401fff0b9b13a00803de603d5ea5cd31cebe0
    if (body.username === 'Zane' && body.password === '1234') {
        claim = {
            userid: 1
        }
        this.body = {
            token: jwt.sign(claim, secret)
        }
    } else {
        this.throw(401, 'Wrong username or password')
    }
}