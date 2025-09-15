// Define a data final da contagem regressiva (Ano, Mês-1, Dia)
        const dataCasamento = new Date("2025-11-07T19:30:00").getTime();

        // Seleciona os elementos do HTML onde os números serão exibidos
        const diasEl = document.getElementById('dias');
        const horasEl = document.getElementById('horas');
        const minutosEl = document.getElementById('minutos');
        const countdownEl = document.getElementById('countdown');

        // Atualiza o contador a cada segundo
        const intervalo = setInterval(() => {// --- DATA FINAL DA CONTAGEM ---
        const dataFinal = new Date("2025-11-07T00:00:00").getTime();

        // --- SELEÇÃO DOS ELEMENTOS ---
        const diasEl = document.getElementById('dias');
        const horasEl = document.getElementById('horas');
        const minutosEl = document.getElementById('minutos');
        const segundosEl = document.getElementById('segundos');

        const diasRing = document.getElementById('dias-ring');
        const horasRing = document.getElementById('horas-ring');
        const minutosRing = document.getElementById('minutos-ring');
        const segundosRing = document.getElementById('segundos-ring');

        // --- LÓGICA DO CÍRCULO DE PROGRESSO ---
        const raio = diasRing.r.baseVal.value;
        const circunferencia = 2 * Math.PI * raio;

        diasRing.style.strokeDasharray = `${circunferencia} ${circunferencia}`;
        horasRing.style.strokeDasharray = `${circunferencia} ${circunferencia}`;
        minutosRing.style.strokeDasharray = `${circunferencia} ${circunferencia}`;
        segundosRing.style.strokeDasharray = `${circunferencia} ${circunferencia}`;

        function setProgress(circle, percent) {
            const offset = circunferencia - (percent / 100) * circunferencia;
            circle.style.strokeDashoffset = offset;
        }

        // --- ATUALIZAÇÃO DO CONTADOR ---
        const intervalo = setInterval(() => {
            const agora = new Date().getTime();
            const distancia = dataFinal - agora;

            if (distancia < 0) {
                clearInterval(intervalo);
                document.querySelector('.timers-wrapper').innerHTML = "<h2>O grande dia chegou!</h2>";
                return;
            }

            // Cálculos de tempo
            const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
            const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
            const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

            // Atualiza os números no HTML
            diasEl.textContent = dias;
            horasEl.textContent = horas;
            minutosEl.textContent = minutos;
            segundosEl.textContent = segundos;

            // Atualiza os anéis de progresso
            // (Progresso é o inverso do tempo: 60 segundos = 0% do anel, 1 segundo = 99% do anel)
            setProgress(diasRing, (dias / 365) * 100); // Baseado em 1 ano
            setProgress(horasRing, (horas / 24) * 100);
            setProgress(minutosRing, (minutos / 60) * 100);
            setProgress(segundosRing, (segundos / 60) * 100);

        }, 1000);
            // Pega a data e hora de agora
            const agora = new Date().getTime();

            // Calcula a distância entre a data final e a data de agora
            const distancia = dataCasamento - agora;

            // Se a contagem terminou
            if (distancia < 0) {
                clearInterval(intervalo); // Para o contador
                countdownEl.innerHTML = "<h3>O grande dia chegou!</h3>"; // Exibe a mensagem final
                return;
            }

            // Cálculos de tempo para dias, horas e minutos
            const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
            const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));

            // Função para adicionar um zero à esquerda se o número for menor que 10
            const formatarTempo = (tempo) => tempo < 10 ? '0' + tempo : tempo;

            // Exibe o resultado nos elementos HTML
            diasEl.textContent = formatarTempo(dias);
            horasEl.textContent = formatarTempo(horas);
            minutosEl.textContent = formatarTempo(minutos);

        }, 1000); // A função será executada a cada 1000ms (1 segundo)