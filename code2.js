const movie = ['Top Gun', 'Anchorman', 'Caddyshack', 'Fast Times at Ridgemont High'];

const topChar = ['Nick "Goose" Bradshaw', 'Pete "Maverick" Mitchell'];

const anchorChar = ['Ron Burgandy', 'Brian Fantana'];

const caddyChar = ['Carl Spackler', 'Ty Webb'];

const fastChar = ['Jeff Spicoli', 'Brad Hamilton'];


const movieSelect = movie[Math.floor(Math.random() * movie.length)];

switch(movieSelect) {
    case 'Top Gun':
        return topChar
    case 'Anchorman':
        return anchorChar
    case 'Caddyshack':
        return caddyChar
    case 'Fast Times at Ridgemont High':
        return fastChar ;
};
console.log(movieSelect);

const charSelect = movieSelect[Math.floor(Math.random()* movieSelect.length)];
    /*switch(charSelect) {
        case 'Nick "Goose" Bradshasw':
            return gooseQuote
        case 'Pete "Maverick" Mitchell':
            return mavQuote
        case 'Ron Burgandy':
            return ronQuote
        case 'Brian Fantana':
            return brianQuote
        case 'Carl Spackler':
            return carlQuote
        case 'Ty Webb':
            return tyQuote
        case 'Jeff Spicoli':
            return spicoliQuote
        case 'Brad Hamilton':
            return bradQuote;
    };*/


console.log(charSelect); 