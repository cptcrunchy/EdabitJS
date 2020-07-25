const caesarCipher = require('./caesarCipher')

test('case-1', () => {
    expect(caesarCipher("middle-Outz", 2))
    .toBe("okffng-Qwvb")
})
test('case-2', () => {
    expect(caesarCipher("Always-Look-on-the-Bright-Side-of-Life", 5))
    .toBe("Fqbfdx-Qttp-ts-ymj-Gwnlmy-Xnij-tk-Qnkj")
})
test('case-3', () => {
    expect(caesarCipher("A friend in need is a friend indeed", 20))
    .toBe("U zlcyhx ch hyyx cm u zlcyhx chxyyx")
})
test('case-4', () => {
    expect(caesarCipher("A Fool and His Money Are Soon Parted.", 27))
    .toBe("B Gppm boe Ijt Npofz Bsf Tppo Qbsufe.")
})
test('case-5', () => {
    expect(caesarCipher("One should not worry over things that have already happened and that cannot be changed.", 49))
    .toBe("Lkb pelria klq tloov lsbo qefkdp qexq exsb xiobxav exmmbkba xka qexq zxkklq yb zexkdba.")
})
test('case-6', () => {
    expect(caesarCipher("Back to Square One is a popular saying that means a person has to start over, similar to: back to the drawing board.", 126))
    .toBe("Xwyg pk Omqwna Kja eo w lklqhwn owuejc pdwp iawjo w lanokj dwo pk opwnp kran, oeiehwn pk: xwyg pk pda znwsejc xkwnz.")
})