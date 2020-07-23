const uniqueStyles = arr => {
    const styles = []
    arr.map(element => styles.push(...element.split(',')))
    return [...new Set(styles)].length//?
}

const uniqueStyles2 = albums => new Set(albums.join(',').split(',')).size

uniqueStyles([ "Dub, Dancehall", "Industrial, Heavy Metal", "Techno, Dubstep", "Synth-pop, Euro-Disco", "Industrial, Techno, Minimal"]) //?
uniqueStyles2([ "Dub, Dancehall", "Industrial, Heavy Metal", "Techno, Dubstep", "Synth-pop, Euro-Disco", "Industrial, Techno, Minimal"]) //?
