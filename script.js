function calcular() {
    var input = document.getElementsByTagName('input');
    var valor_final = [];
    var sum = 0;


    for (var i = 0; i < input.length; i++) {
        input[i].style = 'border: solid none';
        document.getElementsByClassName('erro')[0].innerHTML = '';
        document.getElementsByClassName('erro')[1].innerHTML = '';
    }

    for (var x = 0; x < input.length; x++) {
        if (input[x].value === "") {
            input[x].style = 'border: 1px solid red';

            document.getElementsByClassName('erro')[x].innerHTML = '<p>Campo obrigatório!</p>';

            document.getElementsByClassName('alerta_erro')[x].innerHTML = "Preencha todos os campos!";
            document.getElementsByClassName('alerta_erro')[x].style.color = "red";

            document.getElementById('gasto_final')[x].innerHTML = "Preencha todos os campos!";  
            document.getElementById('gasto_final')[x].style.color = "red";
        }
    }

    if (!document.getElementById('banho').checked) {
        document.getElementsByClassName("servico_realizado")[0].innerHTML = '';
    } else {
        document.getElementsByClassName("servico_realizado")[0].innerHTML = 'Serviço selecionado!';
        document.getElementsByClassName("servico_realizado")[0].style.color = 'green';
        valor_final.push(parseFloat(banho.value));
    }

    if (!document.getElementById('tosa').checked) {
        document.getElementsByClassName("servico_realizado")[1].innerHTML = '';
    } else {
        document.getElementsByClassName("servico_realizado")[1].innerHTML = 'Serviço selecionado!';
        document.getElementsByClassName("servico_realizado")[1].style.color = 'green';
        valor_final.push(parseFloat(tosa.value));
    }

    if (!document.getElementById('passeio').checked) {
        document.getElementsByClassName("servico_realizado")[2].innerHTML = '';
    } else {
        document.getElementsByClassName("servico_realizado")[2].innerHTML = 'Serviço selecionado!';
        document.getElementsByClassName("servico_realizado")[2].style.color = 'green';
        valor_final.push(parseFloat(passeio.value));
    }

    //console.log(valor_final);

        for (var i = 0; i < valor_final.length; i++) {
            sum += valor_final[i];
        }

        if (sum == 0) {
            document.getElementById('gasto_final').innerHTML = "Nenhum serviço foi selecionado!";
            document.getElementById('gasto_final').style.color = "red";
        } else{
            document.getElementById('enviado').innerHTML = 'Enviado com sucesso!';
            document.getElementById('gasto_final').innerHTML = `Gasto total: R$${sum},00`;
            document.getElementById('gasto_final').style.color = "green";
            document.getElementById('enviado').style.color = "green";
        }

}