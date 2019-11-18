if (localStorage.getItem("usuarioLogado") !== null) { // verificando se o local storage ta vazio ou não
    var usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));
}

if (localStorage.getItem("idDisciplina") !== null) { // verificando se o local storage ta vazio ou não
    var idDisciplina = JSON.parse(localStorage.getItem("idDisciplina"));
}

if (localStorage.getItem("nomeDisciplina") !== null) { // verificando se o local storage ta vazio ou não
    var nomeDisciplina = JSON.parse(localStorage.getItem("nomeDisciplina"));
} 
 
document.getElementById('nome-disciplina').innerHTML = nomeDisciplina

var data = new Date();
var ano = data.getFullYear()
var dia = data.getDate();
var ano = data.getFullYear()
var mes = data.getMonth()

switch (mes) {
    case 0:
        mes = '01';
        break;
    case 1:
        mes = '02';
        break;    
    case 2:
        mes = '03';
        break;
    case 3:
        mes = '04';
        break;  
    case 4:
        mes = '05';
        break;
    case 5:
        mes = '06';
        break;    
    case 6:
        mes = '07';
        break;
    case 7:
        mes = '08';
        break;  
    case 8:
        mes = '09';
        break;
    case 9:
        mes = '10';
        break;    
    case 10:
        mes = '11';
        break;
    case 11:
        mes = '12';
        break;       
}

var minhaData = `${dia}/${mes}/${ano}` //////////////////////// DIA AQUI /////////////////////

document.getElementById('dia').innerHTML = minhaData
document.getElementById('dia2').innerHTML = minhaData

// COMEÇANDO A COLETA DE DADOS

// PEGANDO INSCRIÇÕES E ID_ALUNO A PARTIR DO MEU ID_DISCIPLINA
objetoInscricoes = [];
axios.get(
    `http://localhost:3001/inscricao/disciplinas/${idDisciplina}`,
    {}
    )
    .then(function(response){
        console.log(response.data)
        objetoInscricoes = response.data;
        console.log(objetoInscricoes) 

        for(let i=0; i<objetoInscricoes.length; i++) {

            $('#dados').append(
                `
                <tr id="dados${objetoInscricoes[i].id}">
                    <td id="aluno${i}"> Nome a ser trocado </td>
                    <td id="idA${i}"> ${objetoInscricoes[i].aluno_id} </td>
                    <td id="idI${[i]}">${objetoInscricoes[i].id}</td>
                    <td class="centralizando" id="idP${[i]}"><input type="checkbox" id="presente${[i]}" name="presente"></td>
                </tr>
                `
            )

        }

        // INDO EM ALUNOS PARA VERIFICAR SE ELE TA INSCRITO NA MATERIA
        axios.get(
            `http://localhost:3001/pessoas/alunos`,
            {}
            )
            .then(function(response){
                console.log(response.data)
                objetoAlunos = response.data;

                objetoAlunosDaDisciplina = [];

                for (let i=0; i<objetoAlunos.length; i++) {
                    
                    if (objetoAlunos.id == objetoInscricoes.aluno_id) {
                        
                        objetoAlunosDaDisciplina.push(objetoAlunos[i].pessoa_id)
                    }

                }
                
                axios.get(
                    `http://localhost:3001/pessoas`,
                    {}
                    )
                    .then(function(response){
                        
                        let objetoPessoas = response.data
                        console.log(response.data)

                        nomesPessoas = []

                        for (let i=0; i<objetoPessoas.length; i++) {
                            
                            if (objetoAlunosDaDisciplina.includes(objetoPessoas[i].id)) {

                                nomesPessoas.push(objetoPessoas[i].nome) 

                            }

                        }

                        for (let i=0; i<nomesPessoas.length; i++) {

                            document.getElementById(`aluno${i}`).innerHTML = nomesPessoas[i]

                        }
    
                      })
        
              })

      })

function salvar() {
    let presenca = null
    let inscricaoId = null
    for (let i=0; i<objetoInscricoes.length; i++) {
        
        var estaPresente = document.getElementsByName(`presente`)

        if(estaPresente[i].checked) {
            //alert('funfou')
            presenca = true;  
        } else {
            presenca = false;
        }

        //console.log(presenca, typeof presenca)

        inscricaoId = objetoInscricoes[i].id//document.getElementById(`idI${[i]}`).value
        //console.log(inscricaoId, typeof inscricaoId)

        //console.log(minhaData, typeof minhaData)

        axios.post(
            `http://localhost:3001/create/presencas`,
            {
                dia: minhaData,
                presente: presenca,
                inscricao_id: inscricaoId
            }
            )
            .then(function(response){
                console.log(response.data)

              })

    }

    alert('Presenças Salvadas no sistema com sucesso!!')
}

function alterar() {
    let presenca = null
    let inscricaoId = null

    inscricaoId = document.getElementById('idIAlteracao').value
    inscricaoId = Number(inscricaoId)

    let estaPresente = document.getElementById('alterarPresente')

    if(estaPresente.checked) {
        presenca = "true";  
    } else {
        presenca = "false";
    }

    console.log(minhaData, typeof minhaData)
    console.log(presenca, typeof presenca)
    console.log(inscricaoId, typeof inscricaoId)

    axios.put(
        `http://localhost:3001/update/presenca`,
        {
            dia: minhaData,
            presente: presenca,
            inscricao_id: inscricaoId
        }
        )
        .then(function(response){
            console.log(response.data)

          })
    
}