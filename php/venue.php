<?php
 $connect = mysqli_connect("localhost","root","root","query");
 $data = json_decode(file_get_contents("php://input"));
 foreach($data as $item) {
   $id = $item->venue_id;
   $descr = $item->venue_descr;
   $sql = "INSERT INTO venue (venue_id,venue_descr) VALUES ('$id' , '$descr')";
   mysqli_query($connect,$sql);

 }
 echo json_encode($data);


?>
