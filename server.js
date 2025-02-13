const express = require('express')
const app = express()
const PORT = 8000

const rappers = {
    '21 savage': {
        'age' : 29,
        'birthname': 'Sheyaa Bin Abraham-Joseph',
        'birthLocation': 'London, England'
    },
    'chance the rapper': {
        'age' : 29,
        'birthname': 'Chancellor Bennett',
        'birthLocation': 'Chicago, Illinois'
    },
    'unkown':{
        'age': 0,
        'birthName': 'unkown',
        'birthlocation':'unkown'
    }
}


app.get('/' , (request, response) =>{
    response.sendFile(__dirname +  '/index.html')
})
app.get('/api/:name', (request, response) =>{
    const Rapper = request.params.name.toLowerCase();
    if(rappers[Rapper]){
        response.json(rappers[Rapper]) 
    }else{
        response.json(rappers['unkown'])
    }
    
})

app.listen(process.env.PORT, () =>{
    console.log(`server.js is running on ${PORT}`)
})
