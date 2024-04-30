const redeSocial = {
    usuario: [], // Inicializando o array de usuários como vazio
    postagen: [], // Inicializando o array de postagens como vazio
    proximoID: 1 // Definindo o próximo ID disponível para 1, já que não há postagens ainda
};


// Create \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

//tem que passar o conteudo do post na funcao
function criaPostagem(nomeUsuario, conteudoPostagem) {
    const novaPostagem = {
        id: redeSocial.proximoID,
        postador: nomeUsuario,
        conteudoPost: conteudoPostagem
    };
    
    redeSocial.proximoID++;
    redeSocial.postagen.push(novaPostagem);
    redeSocial.usuario.push(nomeUsuario); 
    return 'Postagem adicionada com sucesso!';
}

// Read\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

function pegaPostagem(idPostagem) {
    for (let i = 0; i < redeSocial.postagen.length; i++) {
        if (redeSocial.postagen[i].id === idPostagem) {
            return redeSocial.postagen[i];
        }
    }
}

//Update\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

function editarConteudoPostagem(idPostagem, novoConteudo) {

    const postagem = redeSocial.postagen.find(postagem => postagem.id === idPostagem);

    if (postagem) {
        postagem.conteudoPost = novoConteudo;
        console.log(`Conteúdo da postagem com ID ${idPostagem} atualizado com sucesso.`);
    } else {
        console.log(`Essa postagem não existe.`);
    }

    return 'Mensagem editada com sucesso!'
}

//Delete\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

function deletarPostagem(id) {
    redeSocial.postagen = redeSocial.postagen.filter(postagem => postagem.id !== id);
    atualizarIDs()
    return 'Deletado com sucesso!'
}

//Funções adicionais\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
function atualizarIDs() {

 
    for (let i = 0; i < redeSocial.postagen.length; i++) {
        if(redeSocial.postagen[i].id === 1){
        }
        else{
        redeSocial.postagen[i].id--;
        }
    }
    redeSocial.proximoID--;
}

function mostrarTodosUsuarios() {
    let usuariosComPostagens = new Set();


    for (let i = 0; i < redeSocial.postagen.length; i++) {
        usuariosComPostagens.add(redeSocial.postagen[i].postador);
    }

    let todosUsuarios = Array.from(usuariosComPostagens);
    
    return todosUsuarios;
}




function quantosPostUsuario(nomedeUsuario) {
    var numPosts = 0;

    for (let i = 0; i < redeSocial.postagen.length; i++) {
        if (redeSocial.postagen[i].postador === nomedeUsuario) {
            numPosts++; 
        }
    }
    return numPosts;      
}

function quantasPostagensAoTodo(){
    var numPosts = 0;
    for (let i = 0; i < redeSocial.postagen.length; i++) {

            numPosts++;
    }
    return numPosts;      
}

// portanto temos o CRUD e algumas funções adicionais
// Create - criaPostagem(nomeUsuario, conteudoPostagem) sendo 2 strings que devem ser passadas entre ' ' 
// Read - pegaPostagem(idPostagem) sendo o idPostagem o id da postagem em um int
// Update -  editarConteudoPostagem(idPostagem, novoConteudo) sendo o Id da postagem e uma string com o novo conteúdo entre ' '
// Delete - deletarPostagem(id) sendo apenas o Id da postagem em um int
// atualizarIDs() - é uma função que auxilia a função delete, não é usada diretamente
// mostrarTodosUsuarios() - mostra o nome de todos os usuários sem repetição, não tem entrada e pode ser usada diretamente
// quantosPostUsuario(nomedeUsuario) - mostra o numero de postagens que um usuário tem, deve ser passado uma string entre ' ', retorna um int e pode ser usada diretamente
// quantasPostagensAoTodo() - mostra quantas postagens existem na rede social ao todo, não tem entrada e retorna um int, pode ser usada diretamente

console.log(criaPostagem('vitor', 'olá a todos dessa rede'))
console.log(pegaPostagem(1))
console.log(criaPostagem('gabriel', 'olá também'))
console.log(pegaPostagem(2))
console.log(editarConteudoPostagem(1, 'editei o que eu disse'))
console.log(pegaPostagem(1))
console.log(deletarPostagem(1))
console.log(pegaPostagem(1))
console.log(pegaPostagem(2))
console.log(mostrarTodosUsuarios())
console.log(criaPostagem('vitor', 'olá, eu voltei'))
console.log(mostrarTodosUsuarios())
console.log(quantosPostUsuario('vitor'))
console.log(quantasPostagensAoTodo())
