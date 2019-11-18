//pegando local storage
localStorage.clear();
if (localStorage.getItem("usuarioLogado") !== null) { // verificando se o local storage ta vazio ou não
    var usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));
  }

var pessoas = null;

function verificar() {

    const perfilSelecionado = document.getElementsByName('radusuario')[0].checked ? "professor" : "aluno";
    const cpf = document.getElementById("matricula").value;
    const senha = document.getElementById('senha').value;
    
    axios.post(
        'http://localhost:3001/login',
        {
            cpf: cpf,
            senha: senha,
            perfil: perfilSelecionado,      
        }
    )
    .then(function (response) {
        if (response.data.length != 0 && perfilSelecionado == response.data[0].tipo && senha == response.data[0].senha) {
            const resultado = response.data[0]
            
            //window.alert('Encontrou')
            //localStorage.clear();
            if (typeof(Storage) !== "undefined") {
                //localStorage.removeItem("usuarioLogado");
                localStorage.setItem("usuarioLogado", JSON.stringify(resultado) );
            } else {
                document.getElementById("result").innerHTML = 
                "Sorry, your browser does not support Web Storage...";
            }

            window.location.replace('./index.html')
        } else {
            window.alert('Usuário ou senha invalido(s)')
        }
        
    })

}
