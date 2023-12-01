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
        <?php foreach($cours as $un_cours) { ?>
        <tr>
            <td><?php echo $un_cours["date"] ?></td>
            <td><?php echo $un_cours["coach"] ?></td>
            <td><?php echo $un_cours["titre"] ?></td>
        </tr>
        <?php } ?>
    </tbody>
</table>