function caesarCipher(s, k) {
    return s.replace(/[a-z]/gi,  c => {
        const d = c < 'a' ? 65 : 97
        return String.fromCharCode((c.charCodeAt(0) - d + k) % 26 + d)
    })
}

module.exports = caesarCipher