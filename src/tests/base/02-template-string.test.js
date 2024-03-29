import {getSaludo} from "../../base/02-template-string";



describe('Pruebas en 02-template-string.js', () => {
    test('getSaludo debe retornar Hola Fernando', () => {
        const nombre = 'Fernando';
        const saludo = getSaludo(nombre);

        expect(saludo).toBe('Hola ' + nombre);
    })

    test('getSaludo debe retornar Hola David si no hay arg nombre', () => {
        const saludo = getSaludo();

        expect(saludo).toBe('Hola David');
    })
})