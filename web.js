let port=process.env.PORT || 3000;
app.listen(port,(req, res) => {
    console.log('Servidor Rodando')
})

let response=await fetch(config.urlRoot,{
    method:'GET',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
}
)