<?php
class DB
{
private static $conn = null;
public static function getConn()
{
if(self::$conn === null)
{
self::$conn = new PDO('mysql:host=localhost;dbname=base','user','password');
}
return self::$conn;
}
}
try
{
$c = DB::getConn();
$q = intval($_GET['q']);
//print "$q";
//echo "<hr>";
$sql = "SELECT content FROM `articles` WHERE id = ".$q."";
//echo $sql . "<hr>";
$res = $c->query($sql);

while ($var2 = $res->fetch(PDO::FETCH_ASSOC)) {
	print_r($var2[content]);
}

}
catch(PDOException $e)
{
print $e->getMessage();
}
?>
