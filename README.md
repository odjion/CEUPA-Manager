# CEUPA-Manager

<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sistema de Dados Interno - CEUPA</title>
    <link rel="stylesheet" href="styles.css">
    <style>
        .dashboard {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
            margin: 20px 0;
        }
        .card {
            background-color: #f9f9f9;
            border-radius: 8px;
            padding: 15px;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        }
        .estatisticas {
            display: flex;
            justify-content: space-between;
        }
    </style>
</head>
<body>
    <header>
        <h1>Sistema de Dados Interno - CEUPA</h1>
        <nav>
            <ul>
                <li><a href="pag-inicio.html">Início</a></li>
                <li><a href="moradores.html">Moradores</a></li>
                <li><a href="administracao.html">Administração</a></li>
                <li><a href="contato.html">Contato</a></li>
                <li><a href="transparência.html">Portal da Transparência</a></li>
            </ul>
        </nav>
    </header>

    <section id="home">
        <h2>Bem-vindo ao Sistema de Dados Interno</h2>
        <p>Este sistema foi desenvolvido para facilitar o armazenamento, acesso e organização de informações dos moradores e da administração da CEUPA.</p>
    </section>

    <div class="dashboard">
        <!-- Estatísticas de Moradores -->
        <div class="card">
            <h2>Estatísticas de Moradores</h2>
            <div class="estatisticas">
                <div>
                    <h3>Total de Moradores</h3>
                    <p>120 moradores</p>
                </div>
                <div>
                    <h3>Novos Moradores (2024)</h3>
                    <p>15 moradores</p>
                </div>
                <div>
                    <h3>Ocupação</h3>
                    <p>95%</p>
                </div>
            </div>
        </div>

        <!-- Eventos -->
        <div class="card">
            <h2>Próximos Eventos</h2>
            <ul>
                <li>15/10 - Reunião Semestral</li>
                <li>22/10 - Festa de Integração</li>
                <li>05/11 - Assembleia Geral</li>
                <li>20/11 - Confraternização de Fim de Ano</li>
            </ul>
        </div>

        <!-- Aniversariantes do Mês -->
        <div class="card">
            <h2>Aniversariantes de Outubro</h2>
            <ul>
                <li>João Silva - 05/10</li>
                <li>Maria Souza - 12/10</li>
                <li>Pedro Santos - 18/10</li>
                <li>Ana Oliveira - 25/10</li>
            </ul>
        </div>

        <!-- Metas e Planejamento -->
        <div class="card">
            <h2>Metas e Planejamento</h2>
            <h3>Metas Atuais</h3>
            <ul>
                <li>Aumentar ocupação para 100%</li>
                <li>Implementar sistema de gestão digital</li>
                <li>Melhorar infraestrutura das casas</li>
                <li>Aumentar integração entre moradores</li>
            </ul>
        </div>

        <!-- Gestão e Administração -->
        <div class="card">
            <h2>Gestão e Administração</h2>
            <div style="width: 100%; height: 250px;">
                <canvas id="graficoGestao"></canvas>
            </div>
        </div>
    </div>

    <!-- Gráfico de Gestão -->
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <script>
        const ctx = document.getElementById('graficoGestao').getContext('2d');
        const graficoGestao = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio'],
                datasets: [{
                    label: 'Despesas (R$)',
                    data: [3000, 2500, 4000, 3500, 4500],
                    borderColor: 'rgba(75, 192, 192, 1)',
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    fill: true
                }]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    </script>
    <br>
    <br>
    <br>
    <br>

    <footer>
        <p>&copy; 2024 CEUPA. Todos os direitos reservados.</p>
    </footer>
</body>
</html>
