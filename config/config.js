require('dotenv').config()

const config = {}
config.mongodbUrl = process.env.MONGODB_URL
config.jwtSecret = process.env.JWT_SECRET
config.mailUser = process.env.MAIL_USER
config.mailPass = process.env.MAIL_PASS
config.mailService = process.env.MAIL_SERVICE

module.exports = config
