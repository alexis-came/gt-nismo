<?php
include 'conexion.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $conn->real_escape_string($_POST['nombre']);
    $telefono = $conn->real_escape_string($_POST['telefono']);
    $email = $conn->real_escape_string($_POST['email']);
    $genero = $conn->real_escape_string($_POST['genero']);
    $nacionalidad = $conn->real_escape_string($_POST['nacionalidad']);
    $comentarios = $conn->real_escape_string($_POST['comentarios']);

    $sql = "INSERT INTO formulario_contacto (nombre, telefono, email, genero, nacionalidad, comentarios) 
            VALUES ('$nombre', '$telefono', '$email', '$genero', '$nacionalidad', '$comentarios')";

    if ($conn->query($sql) === TRUE) {
        echo "<p style='color: green;'>Datos guardados correctamente. Serás redirigido en 5 segundos...</p>";
        // Redirigir de nuevo al formulario después de 5 segundos
        header("refresh:5;url=contacto.html");
    } else {
        echo "<p style='color: red;'>Error: " . $sql . "<br>" . $conn->error . "</p>";
        echo "<p style='color: red;'>Serás redirigido en 5 segundos...</p>";
        // Redirigir de nuevo al formulario después de 5 segundos
        header("refresh:5;url=contacto.html");
    }


    $conn->close();
}
?>
