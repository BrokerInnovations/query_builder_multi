<?php
 $connect = mysqli_connect("localhost","root","root","query");
 $data = json_decode(file_get_contents("php://input"));
 foreach($data as $item) {
   $row_id = $item->row_id;
   $event_id = $item->event_id;
   $row_price_offset_pct = $item->row_price_offset_pct;
   $sql = "INSERT INTO row_event (row_id, event_id, row_price_offset_pct)
            VALUES ('$row_id', '$event_id', '$row_price_offset_pct')";

   mysqli_query($connect,$sql);

 }
 echo json_encode($data);


?>
