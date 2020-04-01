let data = [
    {
        username : 'lian',
        password : '123',
        id : 1,
        role: 'user'
    },
    {
        username : 'admin',
        password : 'admin',
        id : 2,
        role: 'admin'
    }
]

module.exports = {
    getAllUsers : (req,res) => {
        res.status(200).send(data)
    },
    getUserById : (req,res) => {
        let userbyId = data.find(val=> val.id === parseInt(req.params.id))
        console.log('asd')
        if(userbyId){
            res.status(200).send(userbyId)
        }else{
            res.status(404).send('Not Found')
        }

    },
    searchByUsername : (req,res) => {
        let found = data.filter(val => {
            let data = []
            return val.username === req.query.username
        })
        if(found){
            res.status(200).send(found)
        }else{
            res.status(404).send('<h1>Not Found</h1>')
        }
    },
    login : (req,res) =>{
        let user = req.query.username
        let pass = req.query.password
        let find = data.find((val) => val.username === user)
        if(find){
            if(find.password === pass){
                res.status(200).send('<h1>Welcome!</h1>')
            }else{
                res.status(200).send('<h1>Wrong Password</h1>')
            }
        }else{
            res.status(404).send('<h1>Username not found</h1>')
        }
    },
    searchByRole : (req,res) => {
        let found = data.filter(val => {
            let data = []
            return val.role === req.query.role
        })
        if(found){
            res.status(200).send(found)
        }else{
            res.status(404).send('<h1>Not Found</h1>')
        }
    }
}