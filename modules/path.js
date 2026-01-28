const path  = require('path')

//Basename
console.log(path.basename(__filename))

// Nome diretorio
console.log(path.dirname(__filename))

// Extensao do arquivo
console.log(path.extname(__filename))

// Criar path
console.log(path.parse(__filename))

// Juntar caminhos
console.log(path.join(__dirname, 'test', 'hello.html'))