import {getUser, getUsuarioActivo} from "../../base/05-funciones";

describe('Pruebas en 05-funciones.js', () => {

    test('getUser debe retornar un objeto', () => {
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }
        // console.log(userTest);
        const user = getUser();

        expect(user).toEqual(userTest);
    })

    test('getUsuarioActivo debe de retornar un objeto', () => {

        const nombre = 'David';
        const userActivoTest = {
            uid: 'ABC567',
            username: nombre
        }

        const userActivo = getUsuarioActivo(nombre)

        expect(userActivo).toEqual(userActivoTest);

    })

})