function fiscalCode(person) {
	const months = " ABCDEHLMPRST"
	const [day, month, year] = person.dob.split("/")
	const getVowels = name => name.toUpperCase().replace(/[^AEIOU]/g, '')
	const getConsonants = name => name.toUpperCase().replace(/[AEIOU]/g, '')
	const partial = name => (getConsonants(name) + getVowels(name) + "X").slice(0,3)
	
	let sNameCode = partial(person.surname)
	let [first,_,third, fourth] = getConsonants(person.name)
	let fNameCode = (getConsonants(person.name).length > 3) ? [first, third, fourth].join('') : partial(person.name)//?
	let genderCode = (person.gender === "M") ? "0".concat(day).slice(-2) : +day + 40 //?

	return [sNameCode, fNameCode, year.slice(-2), months[month], genderCode].join('')
}

person1 = { name: "Helen", surname: "Yu", gender: "F", dob: "1/12/1950" }
person2 = { name: "Al", surname: "Capone", gender: "M", dob: "17/1/1899" }

fiscalCode(person1)//?
                    //  YUXHLN50T41
fiscalCode(person2)//?
                    //  CPNLAX99A17

// module.exports = fiscalCode;
