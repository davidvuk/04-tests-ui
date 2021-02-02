import {getHeroeByIdAsync} from "../../base/09-promesas";
import heroes from "../../data/heroes";

describe('Pruebas en 09-promesas.js', () => {

    test('getHeroeByIdAsync debe retornar un heroe async', (done) => {
        const id = 1;
        getHeroeByIdAsync(id)
            .then(heroe => {

                expect(heroe).toBe(heroes[0]);
                done();

            })

    })
    
    test('getHeroeByIdAsync debe retornar un error si el heroe no existe', (done) => {
        const id = 10;
        getHeroeByIdAsync(id)
            .catch(error => {

                expect(error).toBe('No se pudo encontrar el héroe');
                done();

            })

    })

})