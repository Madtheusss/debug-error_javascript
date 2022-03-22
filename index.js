function validaArray(arr, num) {

    try {
        if (!arr && !num) throw new ReferenceError("Entre com os parâmetros");

        if (typeof arr !== 'object') throw new TypeError("Array precisa ser do tipo object");

        if (typeof num !== 'number') throw new TypeError("O numero precisa ser do tipo number");

        if (arr.lenght !== num) throw new RangeError("Tamanho invalido!");

        return arr
    }
    catch (erro) {
        if (erro instanceof ReferenceError) {
            console.log("Este erro é um ReferenceError");
            console.log(erro.message);
        } else if (erro instanceof TypeError) {
            console.log("Esse erro é um TypeError");
            console.log(erro.message);
        } else if (erro instanceof RangeError) {
            console.log("Esse erro é um RangeError");
            console.log(erro.message);
        } else {
            console.log("Tipo de erro n~]ao esperado: " + erro);
        }
    }

}

console.log(validaArray());