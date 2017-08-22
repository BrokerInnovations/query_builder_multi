<?php
 $connect = mysqli_connect("localhost","root","root","query");
 $data = json_decode(file_get_contents("php://input"));
 foreach($data as $item) {
   $id = $item->venue_id;
   $descr = $item->config_descr;
   $sql = "INSERT INTO venue_configuration (venue_id,config_descr)
            SELECT venue_id, '$descr' FROM venue WHERE venue_descr = '$id'";
   mysqli_query($connect,$sql);

 }
 echo json_encode($data);

?>
