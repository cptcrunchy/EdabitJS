const uncensor = (str, vowels) => {
    const vowelsArr = vowels.split('')
    return str.replace(/\*/g, () => vowelsArr.shift())
}

uncensor("Wh*r* d*d my v*w*ls g*?", "eeioeo")//?
uncensor("asdfasdfasdf", "")//?