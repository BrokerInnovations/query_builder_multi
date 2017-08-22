<?php
 $connect = mysqli_connect("localhost","root","root","query");
 $data = json_decode(file_get_contents("php://input"));
 foreach($data as $item) {
   $config = explode(",", $item->level_id_plus);
   $row_seq = $item->row_seq_num;
   $level_id = $item->level_id;
   $descr = $item->row_descr;
   $sql = "INSERT INTO row (row_descr,row_seq_num,level_id) SELECT '$descr','$row_seq',level_id
            FROM level,venue_configuration,venue
            WHERE level_descr = '$level_id'
            AND venue_descr = '$config[0]' AND config_descr = '$config[1]'
            AND venue.venue_id = venue_configuration.venue_id
            AND venue_configuration.venue_config_id = level.venue_config_id";
   mysqli_query($connect,$sql);
 
 }
 echo json_encode($data);


?>
