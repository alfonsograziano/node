import { spawnPromisified } from '../common/index.mjs';
import * as fixtures from '../common/fixtures.mjs';
import { describe, it } from 'node:test';
import { match, strictEqual } from 'node:assert';

describe('--bun flag test',
    { concurrency: true }, () => {
    it('should exit with "Terrible"', async () => {
        const { code, signal, stdout, stderr } = await spawnPromisified(process.execPath, [
        '--bun',
        fixtures.path('es-modules/loose.js'),
        ]);

        match(stderr, /Terrible/);
        strictEqual(stdout, '');
        strictEqual(code, 1);
        strictEqual(signal, null);
    });

});