const fs = require('fs')
const path = require('path')

// Criar pasta
fs.mkdir(path.join(__dirname, '/test'), (err) => {
    if (err) {
        return console.log('Erro ao criar a pasta', err)
    }
    console.log('Pasta criada com sucesso!')
})



// Criar arquivo
fs.writeFile(path.join(__dirname, '/test', 'test.html'), 'helo node', (err) => {
    if (err) {
        return console.log('Erro ao criar o arquivo', err)
    }
    console.log('Arquivo criado com sucesso!')
}) 

// Adicionar ao arquivo
fs.appendFile(path.join(__dirname, '/test', 'test.html'), '\n\nAdicionando mais conteudo', (err) => {
    if (err) {
        return console.log('Erro ao adicionar ao arquivo', err)
    }
    console.log('Conteudo adicionado com sucesso!')
})

// Ler arquivo
fs.readFile(path.join(__dirname, '/test', 'test.html'), 'utf-8', (err, data) => {
    if (err) {
        return console.log('Erro ao ler o arquivo', err)
    }
    console.log('Conteudo do arquivo:')
    console.log(data)
})

// Ler arquivo
fs.readFile(path.join(__dirname, '/test', 'test.html'), (err, data) => {
    if (err) {
        return console.log('Erro ao ler o arquivo', err)
    }
    console.log('Conteudo do arquivo em buffer:')
    console.log(data)
})