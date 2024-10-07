function calcularPerdaPeso() {
    // Obter valores dos inputs
    const diametro = parseFloat(document.getElementById('diametro').value);
    const profundidade = parseFloat(document.getElementById('profundidade').value);
    const densidade = parseFloat(document.getElementById('material').value); // Densidade associada ao material selecionado

    // Verificar se os valores são válidos
    if (isNaN(diametro) || isNaN(profundidade) || diametro <= 0 || profundidade <= 0) {
        document.getElementById('resultado').innerHTML = "Por favor, insira valores válidos.";
        return;
    }

    // Converter diâmetro e profundidade de mm para cm
    const diametroCm = diametro / 10;
    const profundidadeCm = profundidade / 10;

    // Calcular o volume do cilindro (em cm³)
    const raio = diametroCm / 2;
    const volume = Math.PI * Math.pow(raio, 2) * profundidadeCm;

    // Calcular a perda de peso (g)
    const perdaPeso = volume * densidade;

    // Exibir o resultado
    document.getElementById('resultado').innerHTML = `A perda de peso por furo é de ${perdaPeso.toFixed(2)} g.`;
}

function calcularFuros() {
    // Obter valores dos inputs
    const diametro = parseFloat(document.getElementById('diametro').value);
    const profundidade = parseFloat(document.getElementById('profundidade').value);
    const densidade = parseFloat(document.getElementById('material').value); // Densidade associada ao material selecionado
    const pesoDesejado = parseFloat(document.getElementById('pesoDesejado').value);

    // Verificar se os valores são válidos
    if (isNaN(diametro) || isNaN(profundidade) || isNaN(pesoDesejado) || diametro <= 0 || profundidade <= 0 || pesoDesejado <= 0) {
        document.getElementById('resultado').innerHTML = "Por favor, insira valores válidos.";
        return;
    }

    // Converter diâmetro e profundidade de mm para cm
    const diametroCm = diametro / 10;
    const profundidadeCm = profundidade / 10;

    // Calcular o volume do cilindro (em cm³)
    const raio = diametroCm / 2;
    const volume = Math.PI * Math.pow(raio, 2) * profundidadeCm;

    // Calcular a perda de peso por furo (g)
    const perdaPesoPorFuro = volume * densidade;

    // Calcular a quantidade de furos necessários
    const quantidadeFuros = pesoDesejado / perdaPesoPorFuro;

    // Exibir o resultado
    document.getElementById('resultado').innerHTML = `Você precisará de aproximadamente ${Math.ceil(quantidadeFuros)} furos para remover ${pesoDesejado.toFixed(2)} g.`;
}
