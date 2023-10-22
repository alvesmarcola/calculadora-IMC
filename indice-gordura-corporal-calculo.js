


                


     document.getElementById('calcular').addEventListener('click', function(event) {
            event.preventDefault(); 
            
            var nome = document.getElementById('nome').value;
            var altura = parseFloat(document.getElementById('altura').value) / 100;
            var peso = parseFloat(document.getElementById('peso').value);

            var imc = (peso / (altura * altura)).toFixed(2);

            var classificacao = "";

            if (imc >= 16 && imc <= 16.99) {
                classificacao = "Baixo peso grave";
            } else if (imc >= 17 && imc <= 18.49) {
                classificacao = "Baixo peso";
            } else if (imc >= 18.50 && imc <= 24.99) {
                classificacao = "Peso normal";
            } else if (imc >= 25 && imc <= 29.99) {
                classificacao = "Sobrepeso";
            } else if (imc >= 30 && imc <= 34.99) {
                classificacao = "Obesidade grau I";
            } else if (imc >= 35 && imc <= 39.99) {
                classificacao = "Obesidade grau II";
            } else if (imc >= 40) {
                classificacao = "Obesidade grau III";
            }

            // Classificação através do peso
            var resultadoMessage = "";

            if (classificacao === "Baixo peso grave") {
                resultadoMessage = "Procure um médico. Algumas pessoas têm um baixo peso por características do seu organismo e tudo bem. Outras podem estar enfrentando problemas, como a desnutrição. É preciso saber qual é o caso.";
            } else if (classificacao === "Baixo peso") {
                resultadoMessage = "Provavelmente você possui baixo peso por características do seu organismo, porém é importante consultar um médico.";
            } else if (classificacao === "Peso normal") {
                resultadoMessage = "Que bom que você está com o peso normal! O melhor jeito de continuar assim é mantendo um estilo de vida ativo e uma alimentação equilibrada.";
            } else if (classificacao === "Sobrepeso") {
                resultadoMessage = "Lembre-se de que a saúde é um bem valioso. Se você está com sobrepeso, considere adotar hábitos mais saudáveis, como uma dieta balanceada e a prática regular de exercícios.";
            } else if (classificacao === "Obesidade grau I") {
                resultadoMessage = "Você não apresenta preocupação grave, mas cuide de sua alimentação. Pode ser útil iniciar um acompanhamento com nutricionista e/ou endocrinologista.";
            } else if (classificacao === "Obesidade grau II") {
                resultadoMessage = "É hora de se cuidar mais. Busque mudanças no estilo de vida com o acompanhamento próximo de profissionais de saúde.";
            } else if (classificacao === "Obesidade grau III") {
                resultadoMessage = "Aqui o sinal é vermelho, com forte probabilidade de já existirem doenças muito graves associadas. O tratamento deve ser ainda mais urgente.";
            }

            var resultado = `Parabéns pela iniciativa, ${nome}. Você possui índice de massa corporal igual a ${imc}, classificado como ${classificacao}`;

            
            var resultadoDiv = document.getElementById("resultado");
            resultadoDiv.innerHTML = resultado + "<br>" + resultadoMessage;
            
                
                

            });
        