import { it, expect } from "vitest";
import { add } from "./math"

it('Aqui se coloca la descripcion requerida para identificar el test, primer parametro', () => {
    //ARREGLAR
    const numbers = [1, 2, 3, 4]
    const initialValue = 0; // valor incial
    //AACTUA
    const result = add(numbers); //este valor es proveniente de nuestro archivo math.js que tiene la funcion add
    //AFIRMA
    const expectedResult = numbers.reduce((prevValue, curValue) => prevValue + curValue, initialValue); // utilizacion de la funcion reduce  para devolver un valor unico
    expect(result).toBe(expectedResult);

});
//Segundo caso 
it('Segunda Prueba donde un numero no es valido', () => {
        const inputs = ['invalid', 1, false];

        const result = add(inputs); //se agrega los valores  de mi arrglo  el primer valor caracter texto y el otro numero

        expect(result).toBeNaN()
    })
    //Tercer caso
it('Tercer prueba donde una matriz esta vacia', () => {
    const numbers = []; ///Se crea una matriz vacia 
    const result = add(numbers);
    expect(result).toBe(0); //espera como resultado 0
})

//Cuarto caso
it('Se realiza un error cunado un valor no paso de la funcion utilizando try catch', () => {
    const resultFn = () => {
        add();
    }
    expect(resultFn).not.toThrow(); // comprueba si nuestraq funcion erroja un error, es mejor utilizar esat forma a comparacion  de bloques de try {}catch(error){}
    // si queremos que haya un valor contrario donde un valor "no" queremos que salga solo se agrega .not " expect(resultFn).not.toThrow()"
})

it('Descripcion de cuando una prueba falla', () => {
    const result = add([1, 2, 3, 4]);
    expect(result).toBe(9);
});

it('Descripcion de cuando ', () => {
    const result = add([1, 2, 3, 4]);
    expect(result).toBe(NaN);
});