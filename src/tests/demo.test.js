
describe('pruebas en el archivo demo.test.js', () => {

    test('deben de ser iguales los strings', () => {
        // const isActive = true;
        //
        // if (isActive) {
        //     throw new Error('Not active')
        // }
//    1. Inicializacion - lo que se recibe
        const message = 'hello world';

//    2. Estimulo - lo que se espera
        const message2 = 'hello world'

        // 3. Observar el comportamiento
        expect(message).toBe(message2);
    })




})



