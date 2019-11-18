// PEGANDO O USUARIO LOGADO
if (localStorage.getItem("usuarioLogado") !== null) { // verificando se o local storage ta vazio ou não
    var usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));
}

localStorage.removeItem('idDisciplina')
localStorage.removeItem('nomeDisciplina')

nomesPessoas = [];

// LIMPANDO O ID_DISCIPLINA E O NOME DELA

// ESCONDENDO AS FUNCIONALIDADDES PELO PERFIL
/* if(usuarioLogado.tipo == 'professor') {
    document.getElementById("nova-tabela2").style.display = 'none';
}  */
/* else if (usuarioLogado.tipo =='aluno') {
    document.getElementById("nova-tabela1").style.display = 'none';
} */

if (usuarioLogado.tipo == 'aluno') {

   let id_aluno = null;
   let objetoIscricao = null
   let disciplinaNomes = [];

   //ACHANDO O ID DO ALUNO LOGADO
   axios.get(
    `http://localhost:3001/pessoas/alunos`,
    {}
    )
    .then(function(response){
        let objetoReposta = response.data;
        //console.log(objetoReposta)
        for (let i=0; i<objetoReposta.length; i++) {
            if (objetoReposta[i].pessoa_id == usuarioLogado.id) {
                id_aluno = objetoReposta[i].id

                if (typeof(Storage) !== "undefined") {
                    //localStorage.removeItem("usuarioLogado");
                    localStorage.setItem("idAluno", JSON.stringify(id_aluno) );
                } else {
                    document.getElementById("result").innerHTML = 
                    "Sorry, your browser does not support Web Storage...";
                }

            }

        }

        //PEGANDO MEU objetoInscricao
        axios.get(
            `http://localhost:3001/inscricao/alunos/${id_aluno}`,
            {}
            )
            .then(function(response){
                objetoIscricao = response.data; 
                console.log(objetoIscricao)         
                disciplinaNomes.push(1)
                for (let i=0; i<objetoIscricao.length; i++) {

                    axios.get(
                        `http://localhost:3001/disciplinas/${objetoIscricao[i].disciplina_id}`,
                        {}
                        )
                        .then(function(response){
                            console.log(response.data)
                            let disciplina = response.data[0].nome
                            //disciplinaNomess += disciplina
                            //disciplinaNomess.push(disciplina) 


                            $("#conteinerDisciplinas").append(
                                `
                                <section id="nova-tabela${response.data[0].id}" class="main row">
                                    <aside class="disciplina-nome" id="discip">${response.data[0].nome}</aside>
                                    <aside class="disciplina-nota" id="${response.data[0].id}"><a href="./notas-aluno.html" onclick="abrir('${response.data[0].id}','${response.data[0].nome}')">Vizualizar Nota</a></aside>
                                </section>
                                `
                            )

                          })

                }

            })

        
              
    })      
    
     function abrir(id, nome) {
         //alert('chamou local storage?')

         if (typeof(Storage) !== "undefined") {
            //localStorage.removeItem("usuarioLogado");
            localStorage.setItem("idDisciplina", JSON.stringify(id));
            localStorage.setItem("nomeDisciplina", JSON.stringify(nome))
        } else {
            document.getElementById("result").innerHTML = 
            "Sorry, your browser does not support Web Storage...";
        }

     }
    
}

////////////////////////////////////////////////////////////////////////////////


if (usuarioLogado.tipo == 'professor') {
    
    let id_professor = null;
   
    //PEGANDO ID DO PROFESSOR
    axios.get(
        `http://localhost:3001/pessoa/${usuarioLogado.id}/professor/id`,
        {}
        )
        .then(function(response){
            id_professor = response.data[0].id
            console.log(id_professor)
            //PEGANDO DISCIPLINAS QUE O PROFESSOR LECIONA
            axios.get(
                `http://localhost:3001/professores/${id_professor}/disciplinas`,
                {}
                )
                .then(function(response){
                    //window.alert('cheguei')
                    console.log(response.data)

                    for (let i=0; i<response.data.length; i++) {

                        $("#conteinerDisciplinas").append(
                            `
                            <section id="nova-tabela1" class="main row">
                                <aside class="disciplina-nome">${response.data[i].nome}</aside>
                                <aside class="disciplina-nota"><a href="./notas-prof.html" onclick="abrir('${response.data[i].id}','${response.data[i].nome}')" >Lançar Nota</a></aside>
                                <aside class="disciplina-presenca"><a href="./presenca-prof.html" onclick="abrir('${response.data[i].id}','${response.data[i].nome}')" >Lançar Presença</a></aside>
                            </section>
                            `
                        )

                    }

                  })
             

          })  

    function abrir(id, nome) {
        //alert('chamou')

        if (typeof(Storage) !== "undefined") {
            //localStorage.removeItem("usuarioLogado");
            localStorage.setItem("idDisciplina", JSON.stringify(id));
            localStorage.setItem("nomeDisciplina", JSON.stringify(nome))
        } else {
            document.getElementById("result").innerHTML = 
            "Sorry, your browser does not support Web Storage...";
        }

    }
               
}
      
