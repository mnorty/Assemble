const bcrypt = require('bcryptjs')

module.exports = {
  register: async (req,res) => {
    const {email,username,password} = req.body
    const db = req.app.get('db')
    const {session} = req
    const userFound = await db.check_user_email({email})//passing that in as an object lets us use its name in the sql command
    if (userFound[0]) return res.status(409).send('Email already exists')
    const salt = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(password,salt)
    const createdUser = await db.register_user({
      
      email,
      username,
      password: hash  //if we dont add the : hash it would pull the plain unencrypted password
    })
    session.user = {id: createdUser[0].id, username: createdUser[0].username}
    res.status(201).send(session.user)
    console.log('registration succsesful')
  },
  login: async (req,res) => {
    const {username, password} = req.body
    const db = req.app.get('db')
    const {session} = req
    const userFound = await db.check_username({username})
    if (!userFound[0]) return res.status(401).send('User does not exist')
    const authenticated = bcrypt.compareSync(password,userFound[0].password)
    if(authenticated){
      session.user = {id: userFound[0].login_id,username: userFound[0].username}
      res.status(200).send(session.user)
    } else {
      return res.status(401).send('Incorrect username or password')
    }
  },
  getDetails: async (req,res) => {
    const db = req.app.get('db')
    const {session} = req
    if(session.user){
      const details = await db.get_user_details({id: session.users.id})
      const {username,email,balance,id} = details[0]
      return res
        .status(200)
        .send({firstname,
          email,
          balance,
          user_id,
          username:session.user.username
      })
    }
    return res.status(401).send('Please log in')
  },
  getUser : (req,res) => {
    const {session} = req
    if(session.user){
      return res.status(200).send(session.user)
    } else {
      return res.status(401).send('Please Log In')
    }
  },
  logout: (req,res) => {
    req.session.destroy()
    res.sendStatus(200)
  }
}

