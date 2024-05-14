import reverse from '../src/index.js';

test('reverse', () => {
  const str = 'hello';
  expect(reverse(str)).toEqual('olleh');
  expect(reverse('')).toEqual('');
});

/** Jest поддерживает ECMAScript модули в экспериментальном режиме
 Чтобы активировать поддержку модулей в тестах,
 нужно запускать тесты с переменной окружения NODE_OPTIONS */