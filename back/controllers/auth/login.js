
const User = require('../../models/User')
require('dotenv').config()
const { OAuth2Client } = require('google-auth-library')

module.exports.login =async function(req, res){

    const client = new OAuth2Client(process.env.KEY_GOOGLE)
    const  token   = req.body
    const ticket = await client.verifyIdToken({
        idToken: token.id_token,
        audience:process.env.KEY_GOOGLE
    });

    const { email, picture,name,iss,sub} = ticket.getPayload(); 
      User.findOne({
        where: {
          email:email,
          iss_google:iss,
          sub_google:sub
        }
      }).then(user => {
          if (!user) {
            const user_data = {
                name: name,
                email: email,
                iss_google:iss,
                sub_google:sub,
                picture:picture
              } 
     console.log(user);
     
              User.create(user_data).then(user => {
                  res.json({ status: user.email + ' registered' })
                })
                .catch(err => {
                    res.status(400).json({ error: 'Authentication error' })
                })
         
          } else {
         
            res.status(200).send({ details: "Authentication error", user })
          }
        }).catch(err => {
            res.status(400).json({ error: 'Authentication error',error })
        })
    }
  



