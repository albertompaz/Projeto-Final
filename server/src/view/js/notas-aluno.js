if (localStorage.getItem("usuarioLogado") !== null) { // verificando se o local storage ta vazio ou não
    var usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));
}

if (localStorage.getItem("idDisciplina") !== null) { // verificando se o local storage ta vazio ou não
    var idDisciplina = JSON.parse(localStorage.getItem("idDisciplina"));
}

if (localStorage.getItem("nomeDisciplina") !== null) { // verificando se o local storage ta vazio ou não
    var nomeDisciplina = JSON.parse(localStorage.getItem("nomeDisciplina"));
}

if (localStorage.getItem("idAluno") !== null) { // verificando se o local storage ta vazio ou não
    var idAluno = JSON.parse(localStorage.getItem("idAluno"));
}

console.log(idDisciplina, nomeDisciplina, idAluno)

document.getElementById('nome-disciplina').innerHTML = nomeDisciplina
document.getElementById('nome').innerHTML = usuarioLogado.nome

axios.get(
    `http://localhost:3001/inscricao/disciplina/${idDisciplina}/aluno/${idAluno}`,
    {}
    )
    .then(function(response){
        //console.log(response.data[0].id)
        idInscricao = response.data[0].id
        axios.get(
            `http://localhost:3001/inscricao/${idInscricao}/pauta`,
            {}
            )
            .then(function(response){
                console.log(response.data[0])
                
                if (response.data[0].nota_1 == 0 || response.data[0].nota_1 == null) {
                    response.data[0].nota_1 = 0;
                    document.getElementById('nota1').innerHTML = '---';     
                }
                if (response.data[0].nota_2 == 0 || response.data[0].nota_2 == null) {
                    response.data[0].nota_2 = 0;
                    document.getElementById('nota2').innerHTML = '---';     
                }
                if (response.data[0].nota_3 == 0 || response.data[0].nota_3 == null) {
                    response.data[0].nota_3 = 0;
                    document.getElementById('nota3').innerHTML = '---';     
                }
                
                document.getElementById('nota1').innerHTML = response.data[0].nota_1; 
                document.getElementById('nota2').innerHTML = response.data[0].nota_2;
                document.getElementById('nota3').innerHTML = response.data[0].nota_3;

                document.getElementById('media').innerHTML = Number(response.data[0].nota_1)+Number(response.data[0].nota_2)+Number(response.data[0].nota_3)

              })
      })

