<!DOCTYPE html>
<html>
<head>
	<title>Démo 2.2</title>
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
</head>
<body>
	<div class="container mt-5">
		<div class="row justify-content-center">
			<div class="col-10">
				<h5>Liste des cours</h5>
				<table class="table">
		            <thead>
		                <tr>
		                    <th>Date</th>
		                    <th>Instructeur</th>
		                    <th>Nom du cours</th>
		                </tr>
		            </thead>
		            <tbody>
		            	<!-- Venons ajouter les deux cours à notre table HTML... -->
		            	<tr>
		            		<td><?php echo $cours_fitness_A["date"]; ?></td>
		            		<td><?php echo $cours_fitness_A["instructeur"]; ?></td>
		            		<td><?php echo $cours_fitness_A["titre"]; ?></td>
		            	</tr>
		            	<tr>
		            		<td><?php echo $cours_fitness_B["date"]; ?></td>
		            		<td><?php echo $cours_fitness_B["instructeur"]; ?></td>
		            		<td><?php echo $cours_fitness_B["titre"]; ?></td>
		            	</tr>
		            	<tr>
		            		<td><?php echo $cours_fitness_C["date"]; ?></td>
		            		<td><?php echo $cours_fitness_C["instructeur"]; ?></td>
		            		<td><?php echo $cours_fitness_C["titre"]; ?></td>
		            	</tr>
		            	<tr>
		            		<td><?php echo $cours_fitness_D["date"]; ?></td>
		            		<td><?php echo $cours_fitness_D["instructeur"]; ?></td>
		            		<td><?php echo $cours_fitness_D["titre"]; ?></td>
		            	</tr>
		            </tbody>
				</table>
			</div>
		</div>
	</div>
</body>
</html>

