function temParam(param){
    return process.argv.indexOf(param) !== -1
}

if (temParam("--producao")){
    console.log("Modo produção!")
}else{
    console.log("Modo Padrão")
}
