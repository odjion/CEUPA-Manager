// estatisticas.js

// Configuração do Firebase (substitua com suas credenciais)
const firebaseConfig = {
    apiKey: "SUA_API_KEY",
    authDomain: "seu-projeto.firebaseapp.com",
    databaseURL: "https://seu-projeto-default-rtdb.firebaseio.com",
    projectId: "seu-projeto",
    storageBucket: "seu-projeto.appspot.com",
    messagingSenderId: "SEU_SENDER_ID",
    appId: "SEU_APP_ID"
};

// Inicializar Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

// Referências para os dados em tempo real
const moradoresRef = database.ref('estatisticas/moradores');
const ocupacaoRef = database.ref('estatisticas/ocupacao');

// Função para atualizar estatísticas
function atualizarEstatisticas() {
    // Total de Moradores
    moradoresRef.child('total').on('value', (snapshot) => {
        const totalMoradores = snapshot.val();
        const elementoTotal = document.getElementById('totalMoradores');
        elementoTotal.textContent = totalMoradores;
        elementoTotal.parentElement.classList.add('updated');
        setTimeout(() => {
            elementoTotal.parentElement.classList.remove('updated');
        }, 2000);
    });

    // Novos Moradores
    moradoresRef.child('novos').on('value', (snapshot) => {
        const novosMoradores = snapshot.val();
        const elementoNovos = document.getElementById('novosMoradores');
        elementoNovos.textContent = novosMoradores;
        elementoNovos.parentElement.classList.add('updated');
        setTimeout(() => {
            elementoNovos.parentElement.classList.remove('updated');
        }, 2000);
    });

    // Taxa de Ocupação
    ocupacaoRef.on('value', (snapshot) => {
        const taxaOcupacao = snapshot.val();
        const elementoOcupacao = document.getElementById('taxaOcupacao');
        elementoOcupacao.textContent = `${taxaOcupacao}%`;
        elementoOcupacao.parentElement.classList.add('updated');
        setTimeout(() => {
            elementoOcupacao.parentElement.classList.remove('updated');
        }, 2000);
    });
}

// Função para atualizar dados (simulação)
function simularAtualizacoes() {
    // Exemplo de como você poderia atualizar os dados
    moradoresRef.child('total').set(
        Math.floor(Math.random() * 150) + 100
    );
    
    moradoresRef.child('novos').set(
        Math.floor(Math.random() * 20) + 10
    );
    
    ocupacaoRef.set(
        Math.floor(Math.random() * 20) + 80
    );
}

// Iniciar monitoramento
document.addEventListener('DOMContentLoaded', () => {
    atualizarEstatisticas();
    // Simular atualizações a cada 5 segundos (para demonstração)
    setInterval(simularAtualizacoes, 5000);
});