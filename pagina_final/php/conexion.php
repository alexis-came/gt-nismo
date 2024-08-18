<?php
$servername = "localhost";
$username = "root";
$password = "";
$database = "contactos";

// Crear conexión
$conn = new mysqli($servername, $username, $password, $database);

// Verificar conexión
if ($conn->connect_errno) {
    printf("Falló la conexión: %s\n", $conn->connect_error);
    echo "Errno: " . $conn->connect_errno . "\n";
    echo "Error: " . $conn->connect_error . "\n";
    exit;
} else {
    echo "Conexión exitosa";
}
?>
