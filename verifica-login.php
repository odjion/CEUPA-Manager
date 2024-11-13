<?php
session_start();

// Simulação de dados de usuários com permissões.
$usuarios = [
    'admin' => ['senha' => '1234', 'permissao' => 'administrador'],
    'user1' => ['senha' => 'abcd', 'permissao' => 'moderador'],
    'user2' => ['senha' => '5678', 'permissao' => 'usuario']
];

$username = $_POST['username'];
$password = $_POST['password'];

if (isset($usuarios[$username]) && $usuarios[$username]['senha'] === $password) {
    $_SESSION['username'] = $username;
    $_SESSION['permissao'] = $usuarios[$username]['permissao'];
    
    // Redireciona com base na permissão.
    switch ($usuarios[$username]['permissao']) {
        case 'administrador':
            header('Location: admin_dashboard.html');
            break;
        case 'moderador':
            header('Location: moderador_dashboard.html');
            break;
        default:
            header('Location: usuario_dashboard.html');
            break;
    }
} else {
    echo "Usuário ou senha inválidos.";
}
?>
