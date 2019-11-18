if (localStorage.getItem("usuarioLogado") !== null) { // verificando se o local storage ta vazio ou não
    var usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));
  }

  document.getElementById('nome').innerHTML = usuarioLogado.nome
  document.getElementById('cpf').innerHTML = usuarioLogado.cpf
  document.getElementById('perfil').innerHTML = usuarioLogado.tipo
  document.getElementById('email').innerHTML = usuarioLogado.email
  document.getElementById('telefone').innerHTML = usuarioLogado.telefone
  document.getElementById('celular').innerHTML = usuarioLogado.celular

  var endereco = null;

  axios.get(
      `http://localhost:3001/pessoas/${usuarioLogado.id}/enderecos`,
      {}
      )
      .then(function(response){
          endereco = response.data[0]
          document.getElementById('rua').innerHTML = endereco.rua
          document.getElementById('numero').innerHTML = endereco.numero
          document.getElementById('bairro').innerHTML = endereco.bairro
          document.getElementById('cidade').innerHTML = endereco.cidade
          document.getElementById('cep').innerHTML = endereco.cep
        })  




