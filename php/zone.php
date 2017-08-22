<?php
 $connect = mysqli_connect("localhost","root","root","query");

 $data = json_decode(file_get_contents("php://input"));
 foreach($data as $item) {
   $config = explode(",", $item->venue_config_id);
   $descr = $item->zone_descr;
   $sql = "INSERT INTO zone (zone_descr, venue_config_id) SELECT '$descr',venue_config_id FROM venue_configuration,venue
            WHERE venue_descr = '$config[0]' AND config_descr = '$config[1]'
            AND venue.venue_id = venue_configuration.venue_id";
   mysqli_query($connect,$sql);

 }
 echo json_encode($data);

?>
