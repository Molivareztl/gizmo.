<?php
$conexion = new mysqli("pma.torga.com.ar", "u3_TIM7rSia9H", "C^Sc9FRhnwH7Owkr@T8i0S0W", "s3_gizmo_db");
$resultado = $conexion->query("SELECT Id, Nombre, Puntos, Tiempo FROM Usuarios ORDER BY Puntos DESC LIMIT 15");

$Usuario = [];
while($fila = $resultado->fetch_assoc()) {
    $Usuario[] = $fila;
}

// Devolver los datos en formato JSON
header('Content-Type: application/json');
echo json_encode($Usuario);
?>
