/**
 * @jest-environment jsdom
 */
 import { pushToHistory } from '../scripts/router.js';

 describe('testing pushToHistory', () => {

    test('state is settings', () => {
        expect(pushToHistory('settings').length).toBe(2);
    });

    test('state is home', () => {
        expect(pushToHistory('home').length).toBe(3);
    });

    test('state is entry', () => {
        expect(pushToHistory('entry', 1).length).toBe(4);
    });

    test('settings', () => {
        expect(pushToHistory('settings').state).toEqual({page: 'settings'});
    });

    test('home', () => {
        expect(pushToHistory('').state).toEqual({});
    });

    test('entry', () => {
        expect(pushToHistory('entry', 1).state).toEqual({page: 'entry1'});
    });
   
 });

