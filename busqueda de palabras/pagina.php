<?php
    $pal=$_REQUEST['palabra'];

    //?------------------RETORNA TEXTO PLANO---------------
    /* if($pal=="2"){
        $vec=['acacia','algo','amor','arbol','arco','argumento','banco','barco','caminar','cantar','cargo','castor'];
        echo implode(" ",$vec);
    } */


    //?------------------RETORNA UN JSON----------------------
    /* $vec=['acacia','algo','amor','arbol','arco','argumento','banco','barco','caminar','cantar','cargo','castor'];
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode($vec);
    */

    
    //?-------------------RETORNA UN ARCHIVO XML--------------
    $vec=['acacia','algo','amor','arbol','arco','argumento','banco','barco','caminar','cantar','cargo','castor'];
    header( 'Content-Type: application/xml; charset-utf-8');
    $xml = new SimpleXMLElement('<nombres/>');
    foreach($vec as $palabra){
        $xml->addChild('palabra',$palabra);
    }    
    echo $xml->asXML();
?>