let biotipo=(estatura,clasificar)=>{
    if (estatura <1.70) {
        let mensaje="biotipo bajo"
        clasificar(mensaje);
    }else if (estatura <1.80){
        let mensaje="biotipo promedio"
        clasificar(mensaje);
    }else{
        let mensaje="biotipo superior"
        clasificar(mensaje);
    }
}
biotipo(1.75,(mensaje)=>{
    console.log(mensaje);

});