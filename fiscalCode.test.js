const fiscalCode = require('./fiscalCode')

test('person1', () => {
    const person1 = { name: "Brendan", surname: "Eich", gender: "M", dob: "1/12/1961" }
    expect(fiscalCode(person1)).toBe("CHEBND61T01")
});

test('person2', () => {
    const person2 = { name: "Helen", surname: "Yu", gender: "F", dob: "1/12/1950" }
    expect(fiscalCode(person2)).toBe("YUXHLN50T41")
});

test('person3', () => {
    const person3 = { name: "Al", surname: "Capone", gender: "M", dob: "17/1/1899" }
    expect(fiscalCode(person3)).toBe("CPNLAX99A17")
});
test('person4', () => {
    const person4 = { name: "Mickey", surname: "Mouse", gender: "M", dob: "16/1/1928" }
    expect(fiscalCode(person4)).toBe("MSOMKY28A16")
});
test('person5', () => {
    const person5 = { name: "Marie", surname: "Curie", gender: "F", dob: "7/11/1867" }
    expect(fiscalCode(person5)).toBe("CRUMRA67S47")
});
