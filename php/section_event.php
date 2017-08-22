<?php
 $connect = mysqli_connect("localhost","root","root","query");
 $data = json_decode(file_get_contents("php://input"));
 foreach($data as $item) {
    $event_id = $item->event_id;
    $section_id = $item->section_id;
    $section_price_offset_pct = $item->section_price_offset_pct;
    $venue_config_id = $item->venue_config_id;
    $sql = "INSERT INTO section_event (section_id, event_id, section_price_offset_pct, venue_config_id)
             VALUES ('$section_id', '$event_id', '$section_price_offset_pct', '$venue_config_id')";

   mysqli_query($connect,$sql);
 }
 echo json_encode($data);


?>
