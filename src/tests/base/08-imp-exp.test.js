import {getHeroeById, getHeroesByOwner} from "../../base/08-imp-exp";
import heroes from "../../data/heroes";

describe('Pruebas en 08-imp-exp.js', () => {
    test('debe de retornar un heroe por id', () => {
        const id = 1;
        const heroe = getHeroeById(id);
        console.log(heroe);
        const heroeData = heroes.find(hero => hero.id === id);

        expect(heroe).toEqual(heroeData);

    })

     test('debe de retornar undefined si heroe no existe', () => {
         const id = 10;
         const heroe = getHeroeById(id);

         expect(heroe).toEqual(undefined);

     })

    test('debe retornar arreglos de heroes Dc si owner es Dc', () => {
        const owner = 'DC'
        const heroesOwner = getHeroesByOwner(owner);
        console.log(heroesOwner)
        const heroesOwnerData = heroes.filter( (heroe) => heroe.owner === owner );

        expect(heroesOwner).toEqual(heroesOwnerData);
    })

    test('debe retornar arreglos de heroes Marvel si length de array es 2', () => {
        const owner = 'Marvel'
        const heroesOwner = getHeroesByOwner(owner);
        console.log(heroesOwner)
        const heroesOwnerData = heroes.filter( (heroe) => heroe.owner === owner );
        const n = heroesOwnerData.length;
        expect(heroesOwner.length).toBe(n);
    })


})