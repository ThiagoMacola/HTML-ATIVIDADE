var usuario;

function getValuesFromForm() {
    document.getElementById('statusCadastro').innerHTML = "";
    document.getElementById('imposto').innerHTML = "";
    usuario = {
        id: document.getElementById("id").value,
        nome: document.getElementById("nome").value,
        telefone: document.getElementById("telefone").value,
        logradouro: document.getElementById("logradouro").value,
        numero: document.getElementById("numero").value,
        bairro: document.getElementById("bairro").value,
        localidade: document.getElementById("localidade").value,
        salario: document.getElementById("salario").value,
        estadoCivil: document.getElementById("estado").value,
        idade: document.getElementById("idade").value
    }

    if (validaIdade(usuario.idade)) {
        console.log(usuario);
        document.getElementById('statusCadastro').innerHTML = "Cadastro realizado com sucesso!";
        document.getElementById('imprime').style.display = "block";
        verificaEstadoCivil(usuario.estadoCivil);
        if (validaSalario(usuario.salario)) {
            document.getElementById('imposto').innerHTML = "É necessário declarar imposto de renda!";
        }
    }
}

function revelar()
{
    document.getElementById('imprime').style.display = "none";
    document.getElementById('btns').style.display = "none";
    window.print();
    document.getElementById('imprime').style.display = "block";
    document.getElementById('btns').style.display = "block";
    
}


function validaIdade(idade) {
    if (idade < 18) {
        alert("Não é permitido o cadastro!");
        return false;
    }
    return true;
}
function validaSalario(salario) {
    if (salario > 10000) {
        return true;
    }
    return false;
}
function verificaEstadoCivil(ec) {
    if (ec === 'casado') {
        alert("Necessário enviar a documentação da sua esposa(o)!");
    }
}