if (localStorage.getItem("usuarioLogado") !== null) { // verificando se o local storage ta vazio ou não
    var usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));
}

if (localStorage.getItem("idDisciplina") !== null) { // verificando se o local storage ta vazio ou não
    var idDisciplina = JSON.parse(localStorage.getItem("idDisciplina"));
}

if (localStorage.getItem("nomeDisciplina") !== null) { // verificando se o local storage ta vazio ou não
    var nomeDisciplina = JSON.parse(localStorage.getItem("nomeDisciplina"));
} 
 
document.getElementById("nome-disciplina").innerHTML = nomeDisciplina;


function atualizar() {

    var tipoAv = document.getElementsByName("radavaliacao") 

    if(tipoAv[0].checked) {
        //alert('salvou no banco?')
        
        let id_inscricao = document.getElementById('id-inscricao').value
        id_inscricao = Number(id_inscricao)
        //console.log(id_inscricao, typeof id_inscricao)
        let av1 = document.getElementById('nota').value
        av1 = Number(av1)
        //console.log(av1, typeof av1)

        axios.put(
            `http://localhost:3001/update/pauta/av1/${id_inscricao}`,
            {
                nota_1: av1
            }
            )
            .then(function(response){
                alert('Nota alterada com sucesso')
                console.log(response.data)
              })

    }

    if(tipoAv[1].checked) {

        let id_inscricao = document.getElementById('id-inscricao').value
        id_inscricao = Number(id_inscricao)
        //console.log(id_inscricao, typeof id_inscricao)
        let av2 = document.getElementById('nota').value
        av2 = Number(av2)
        //console.log(av1, typeof av1)

        axios.put(
            `http://localhost:3001/update/pauta/av2/${id_inscricao}`,
            {
                nota_2: av2
            }
            )
            .then(function(response){
                alert('Nota alterada com sucesso')
                console.log(response.data)
              })
    }

    if(tipoAv[2].checked) {

        let id_inscricao = document.getElementById('id-inscricao').value
        id_inscricao = Number(id_inscricao)
        //console.log(id_inscricao, typeof id_inscricao)
        let av3 = document.getElementById('nota').value
        av3 = Number(av3)
        //console.log(av1, typeof av1)

        axios.put(
            `http://localhost:3001/update/pauta/av3/${id_inscricao}`,
            {
                nota_3: av3
            }
            )
            .then(function(response){
                alert('Nota alterada com sucesso')
                console.log(response.data)
              })
    }

}