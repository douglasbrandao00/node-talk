module.exports = {
  makeLogin: (req, res) => {
    if(req.body.name && req.body.email)
    createSession(req, res)
      return res.render('logout')
  } 
}


const createSession = (req, res) => req.session.name = req.body.name
