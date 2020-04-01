let data = [
    {
        username : 'lian',
        password : '123',
        id : 1
    },
    {
        username : 'admin',
        password : 'admin',
        id : 2
    }
]

module.exports = {
    getAllUsers : (req,res) => {
        res.status(200).send(JSON.parse(data))
    },
    // getUserByID : (req,res) => {
    //     // let byId = data.find((val)=> val.id === parseInt(req.params.id))
    //     console.log('asd')
    //     // if(byId){
    //     //     res.status(200).send(byId)
    //     // }else{
    //     //     res.status(404).send('Not Found')
    //     // }

    // },
    searchByUsername : (req,res) => {
        
    }
}