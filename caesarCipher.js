function caesarCipher(s, k) {
    const isUpperCase = s => s === s.toUpperCase()
    const isLetter = s => (s.charCodeAt(s) >= 65 && s.charCodeAt(s) <= 90) || (s.charCodeAt(s) >= 97 && s.charCodeAt(s) <= 122)   
    
    return Array.from(s).map( l => {
        let codex = ""
        if (isLetter(l)) {
            let delta = isUpperCase(l) ? 65 : 97
            codex += String.fromCharCode((l.charCodeAt(l) + k - delta) % 26 + delta)
        } else { 
            codex += l
        }
        return codex
    }).join('')
}

// caesarCipher("One should not worry over things that have already happened and that cannot be changed.", 49)//?

module.exports = caesarCipher