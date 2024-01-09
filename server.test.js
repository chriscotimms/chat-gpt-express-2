import {expect, test} from 'vitest';
import {app} from "./server.js";

test('tests port variable working', () => {
    expect(app).toBe("5050")
})

