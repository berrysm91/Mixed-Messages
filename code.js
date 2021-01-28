const movie = ['Top Gun', 'Anchorman', 'Caddyshack', 'Fast Times at Ridgemont High'];

const topGunChar = ['Nick "Goose" Bradshaw', 'Pete "Maverick" Mitchell'];

const anchorChar = ['Ron Burgandy', 'Brian Fantana'];

const caddyChar = ['Carl Spackler', 'Ty Webb'];

const fastChar = ['Jeff Spicoli', 'Brad Hamilton'];

const gooseQuote = ["The defense department regrets to inform you that your sons are dead because they were stupid.","Communicating, You know, the finger, I'm sorry. Excuse me.; Aw sh... I hate it when she does that.", "Hell, I'd be happy to just find a girl that would talk dirty to me."]

const mavQuote = ["It's classified. I could tell you, but then I'd have to kill you." ,  "Just want to serve my country, be the best pilot in the Navy, sir." ,  "Goose, she's lost it, man.",  "Sorry, Goose, but it's time to buzz the tower." , "You don't have time to think up there. If you think, you're dead."];

const ronQuote = ["And I'm Ron Burgundy." ,  "Go #$@& yourself, San Diego." , "Discovered by the Germans in 1904, they named it San Diego, which of course in German means a whale's vagina." , "You stay classy, San Diego." , "Let's go over the groundrules. Rule number 1: No touching of the hair or face... AND THAT'S IT!", `Ron Burgundy says "NO!"`];

const brianQuote = ["They've done studies, you know. 60% of the time, it works every time." , "You ladies play your cards right you just might get to meet the whole gang." , "I tried to get an interview with him, but they said no, you can't do that he's a live bear, he will literally rip your face off."];

const carlQuote = ["A former greenskeeper now about to become the Master's champion.", "So I got that goin' for me, which is nice.", "Check me if I'm wrong Sandy, but if I kill all the golfers, they're gonna lock me up and throw away the key...", "I don't think the heavy stuff's gonna come down for quite awhile."];

const tyQuote = ["You take drugs, Danny?", "Don't sell yourself short Judge, you're a tremendous slouch.", "And all you have to do is get in touch with it, stop thinking, let things happen, and be the ball.", "I'm not quite sure where they are.", "Oh, Judge, I don't keep score."];

const spicoliQuote = ["No shirt, no shoes, No dice!",  "Hey bud, let's party!",   "If I'm here and you're here, doesn't that make it our time?", "Make up your mind, dude, is he gonna sh!t or is he gonna kill us?", "I'm so wasted!", "You d!ck!"];

const bradQuote = ["Doesn't anyone f$#%ing knock any more?", "Get off my case, motherfucker!", "Mister, if you don't shut up I'm gonna kick one hundred percent of your ass!", "Learn it, Know it, Live it."];

function getQuote() {

    var movieSelect = math.Floor(math.Random() * array.length);
    
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
    
    const charSelect = math.floor(math.Random()* movieSelect.length);
    
    const quoteSelect = math.Floor(math.Ramdom()* charSelect.length);
    
    console.log(`${charSelect} said "${quoteSelect}" in the movie ${movieSelect}.`)
    
};

console.log(getQuote)