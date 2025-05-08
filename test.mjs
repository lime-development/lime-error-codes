import { getErrorMessage } from './getErrorMessage.mjs';

const expectedResults = {
    'F1': 'Insufficient token balance.',
    'F99': 'Unknown error.'
};

function runTest(code, lang, expected) {
    const result = getErrorMessage(code, lang);
    if (result === expected) {
        console.log(`Test passed for code: ${code}`);
    } else {
        console.error(`Test failed for code: ${code}. Expected: "${expected}", but got: "${result}"`);
        process.exit(1); // Завершаем с ошибкой, если результат не соответствует ожиданиям
    }
}

runTest('F1', 'en', expectedResults['F1']);
runTest('F99', 'en', expectedResults['F99']);
