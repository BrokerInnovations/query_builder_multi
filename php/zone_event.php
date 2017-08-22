<?php
 $connect = mysqli_connect("localhost","root","root","query");
 $data = json_decode(file_get_contents("php://input"));
 foreach($data as $item) {
   $event_id = $item->event_id;
   $zone_id = $item->zone_id;
   $qty_to_broadcast = $item->qty_to_broadcast;
   $zone_base_price = $item->zone_base_price;
   $sql = "INSERT INTO zone_event (event_id, zone_id, qty_to_broadcast, zone_base_price)
            VALUES ('$event_id', '$zone_id', '$qty_to_broadcast', '$zone_base_price')";

   mysqli_query($connect,$sql);

 }
 echo json_encode($data);


?>
