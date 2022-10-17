import { it, expect } from "vitest";
import { add } from "./math"

it('Aqui se coloca la descripcion requerida para identificar el test, primer parametro', () => {
    //Arrange
    const numbers =[1,2,3,4]
    //Actua
    const result = add(numbers);
    //Asert
    expect(result).toBe(10);
});

it('Descripcion de cuando una prueba falla', () => {
    const result = add([1, 2, 3, 4]);
    expect(result).toBe(9);
});

it('Descripcion de cuando ', () => {
    const result = add([1, 2, 3, 4]);
    expect(result).toBe(NaN);
});