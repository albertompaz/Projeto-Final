var pessoas = null

$(document).ready(function() {

    $.get('http://localhost:3001/pessoas/dados', function(data){
        pessoas = data

        data.forEach(element => {
            $("#docente").append(
                `
                <p id="professor-nome" class=""> <strong>Professor</strong>: ${element.nome}</p>
                <p id="professor-email"><strong>Email</strong>: ${element.email}</p></br>
                `
            )
        });
    })

})
   