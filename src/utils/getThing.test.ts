import getThing from "./getThing";

test('getThing', () => {

  const result = getThing()
  expect(result).toBe('thing')

})
