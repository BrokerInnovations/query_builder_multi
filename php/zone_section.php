<?php
 $connect = mysqli_connect("localhost","root","root","query");
 $data = json_decode(file_get_contents("php://input"));
 foreach($data as $item) {
   $level_descr = $item->level_descr;
   //$level_plus = explode(",", $item->level_id_plus);
   $zone_descr = $item->zone_descr;
   $zone_plus = explode(",", $item->zone_plus);
   $descr = $item->section_desc;
   $sql = "INSERT INTO zone_section(section_desc,zone_id,level_id) SELECT '$descr',zone_id,level_id
           FROM zone, level, venue_configuration, venue
           WHERE zone_descr = '$zone_descr'
           AND level_descr = '$level_descr'
           AND venue_descr = '$zone_plus[0]' AND config_descr = '$zone_plus[1]'
           AND venue.venue_id = venue_configuration.venue_id
           AND venue_configuration.venue_config_id = level.venue_config_id
           AND zone.venue_config_id = level.venue_config_id";
   mysqli_query($connect,$sql);

 }
 echo json_encode($data);


?>
