<?php
$servername = "nombre_del_servidor";
$username = "nombre_de_usuario";
$password = "contraseña";
$dbname = "nombre_de_la_base_de_datos";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
}

$nombre = $_POST['nombre'];
$correo = $_POST['correo'];
$pais = $_POST['pais'];
$genero = $_POST['genero'];
$motivo = $_POST['motivo'];

$sql = "INSERT INTO respuestas_formulario (nombre, correo, pais, genero, motivo) VALUES ('$nombre', '$correo', '$pais', '$genero', '$motivo')";

if ($conn->query($sql) === TRUE) {
    echo "Datos almacenados con éxito";
} else {
    echo "Error al almacenar datos: " . $conn->error;
}

$conn->close();
?>
