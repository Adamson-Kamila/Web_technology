### Task
Cформировать многомерный массив с данными для блока «Опыт работы»

Массив предствален словарем, с двумя ключами и значениями к ним. 

<p class="w3-large"><b><i class="fa fa-asterisk fa-fw w3-margin-right w3-text-teal"></i>Навыки</b></p>

<?php for($i=0; $i<count($skills['skill_name']); $i++):?>
<p><?php echo $skills['skill_name'][$i]; ?></p>

<div class="w3-light-grey w3-round-xlarge w3-small">

<div class="w3-container w3-center w3-round-xlarge w3-teal" style="width:<?php echo $skills['level'][$i]; ?>%"><?php echo $skills['level'][$i]; ?>%</div>

</div>
<?php endfor?>