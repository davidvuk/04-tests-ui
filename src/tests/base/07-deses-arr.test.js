import {retornaArreglo} from "../../base/07-deses-arr";

describe('Pruebas en 07-deses-arr.js', () => {

    test('Debe retornar un string y un numero', () => {

        const arrTest = ['ABC', 123];
        const arr = retornaArreglo();
        const [letra, numero] = retornaArreglo();

        expect(arr).toEqual(arrTest);
        expect(letra).toBe('ABC');
        expect(typeof letra).toBe('string')
        expect(numero).toBe(123);
        expect(typeof numero).toBe('number')

    })

})