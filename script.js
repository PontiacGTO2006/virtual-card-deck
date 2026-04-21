// Here is where you customize the cards to fit your needs; you can add as many as you want per deck,
// and have as many decks as you desire. However with this first version, you may need to do some alignment
// modifications in the index.html and style.css with more than 2 decks.

const originalDeck1 = Object.freeze([
    { title: "SEC Investigation Halted", description: "LACK of Evidence: Keep this card - Good for ONE exit out of Frozen Assets." },
    { title: "SEC Investigation Halted", description: "LACK of Evidence: Keep this card - Good for ONE exit out of Frozen Assets." },
    { title: "SEC Investigation Halted", description: "LACK of Evidence: Keep this card - Good for ONE exit out of Frozen Assets." },
    { title: "SEC Investigation Halted", description: "LACK of Evidence: Keep this card - Good for ONE exit out of Frozen Assets." },
    { title: "Bond Market Slows", description: "30 Year Bond interest rate down slightly. Bonds down 1 coin, Stocks with Yield ≥ 4.0 up 1 coin" },
    { title: "US Inflation Rises", description: "Gold and Bonds are a safe haven. GBI and 30 YR bonds up 1 coin" },
    { title: "Market Analysis Report", description: "FONE Downgrade - Competition of cheap overseas cell phones drives FONE down 1 coin" },
    { title: "Long Term Investments", description: "Buy companies that will grow larger very quickly. Stocks with PEG > 2.5 up 1 coin." },
    { title: "Russell Index Increases", description: "A strong US dollar means companies that do not export goods rise. Advance to nearest Small-Cap Stock Block." },
    { title: "IRA Investment Pays Off", description: "Yearly IRA Contributions: Jump to the Start space" },
    { title: "Trending on Social Media", description: "CEO of WPI accused of sexual harassment. WPI down 1 coin, FIMC up 1 coin." },
    { title: "S&P 500 Index Soars", description: "New trade deal means exports will increase. Large Caps go up 1 coin." },
    { title: "The BEST Advice", description: "Buy low, sell high: Advance to the nearest BUY/SELL space" },
    { title: "Insider Trading", description: "You make $$ on a trade on your CEO's buddy tip - that's illegal!!! Go to Frozen Assets" },
    { title: "Accounting Fraud", description: "CPA caught fudging income numbers: your stock with the most coins loses 1/2 its coin value - Ouch! (Round down)." },
    { title: "US Manufacturing", description: "US exports to Europe rise: AMA and BETC stocks up 1 coin" },
    { title: "Capital Gains Tax", description: "IRS wants its share of the pie - ALWAYS! Pay 10K to the brokerage house." },
    { title: "Are You Diversified?", description: "Do you have more than three sector colors? If not, pay 10K" },
    { title: "US Housing Boom", description: "New home construction and loans are up! GBC up 1 coin, PRL up 2 coins, and BFM stock up 1 coin" },
    { title: "New Tech", description: "Real life-like robot developed with Artificial Intelligence (AI). NASDAQ exchange and BFM go up 1 coin" },
    { title: "US GDP Falls", description: "Rumors of a future recession spread! Safety Sector up 1 coin, Beta > 3.0 down 1 coin" },
    { title: "High Risk Pays Off", description: "Stocks with Beta > 2.0 up 1 coin" },
    { title: "New AI Competition Threatens BETC", description: "BETC CEO put on blast for not keeping up with the latest AI trends. BETC down 1 coin." },
    { title: "Market Analysis Report", description: "FONE Upgrade - company set to overpower competitors in cell phone production. FONE up 1 coin." },
    { title: "New Jobless Claim", description: "US economy added more jobs than ever before in recent jobless claim. Safety sector up 1 coin; advance to Stock Dividend/Retire Space." },
    { title: "Market Rally", description: "Large companies lead an upward trend in the stock market. Large caps go up 1 coin." },
    { title: "S&P 500 Trends Higher", description: "S&P 500 Index soars on new market performance data. S&P 500 up 1 coin." },
    { title: "Advent of High-Speed Rails", description: "Rail transport could be revolutionized with electric high-speed rails soon, accoring to a new press release. RTC up 1 coin." },
    { title: "New EV Designs Top Reliability Ratings", description: "The latest EV design by AMA Auto Corp topped recent reliability ratings in the US. AMA up 1 coin." },
    { title: "HUI CEO Accused of Corruption", description: "HUI CEO discharged after uncomortable corruption case. HUI down 1 coin." },
    { title: "10 New Big Box Store Locations Open", description: "Sales are already increasing after the influx of new business. BBC up 1 coin." },
    { title: "Diseased Meat Lawsuit", description: "Angry consumers file a lawsuit against BME after hundreds of deaths resulting from undercooked meat. BME down 1 coin, WPI up 1 coin." },
    { title: "Ultra-High Risk Boom", description: "Stocks with extremely high risk are gaining in popularity across the market. Beta > 4.0 up 1 coin." },
    { title: "Trending on Social Media", description: "New innovative AI-based self checkout concept introduced at BBC stores gains in popularity. FIMC and BBC up 1 coin." },
    { title: "New Oil Struck under Rainforest", description: "Mining company strikes new oil under a rainforest ready for use. TOI up 2 coins as they begin to harness the new oil profits." },
    { title: "Nanotechnology Powers New Drug", description: "WPI up 1 coin. Innovative AI-powered nanotechnology has been developed to power a new cancer drug. WPI forecasts immense profits from this drug." },
    { title: "Earnings Per Share is the Top Priority", description: "Investors focus in on earnings per share (EPS) results as companies begin to release quarterly sales. Stocks with P/E > 20 up 1 coin." },
    { title: "Ex-Dividend Date Arrives", description: "Jump to the Stock Dividend/Retire space as your stocks pay out dividends for shares." },
    { title: "Bonds Zoom in Popularity", description: "30 Year Bonds are the new most popular retirement stock among investors as Gold declines in value suddenly. Bonds up 1 coin, Gold down 1 coin." },
    { title: "Trending on Social Media", description: "New innovative AI-based self checkout concept introduced at BBC stores gains in popularity. FIMC and BBC up 1 coin." },
    { title: "Ultra High Yield Pays Off", description: "High-yield stocks are now in favor. Yield ≥ 5.0 up 1 coin." },
    { title: "Popular Sentiment Declines", description: "Low-risk stocks in favor. Stocks with beta < 2.0 up 1 coin." },
    { title: "Upset Billionaire Goes Mad", description: "After a devastating car crash with an AMA vehicle, an upset billionaire has sold 10M wroth of AMA. <b>AMA down 1 coin, FMC up 1 coin</b>." },
    { title: "Lawsuit Filed over Privacy Breach", description: "FIMC down 1 coin after losing case over data release and privacy issues raised by upset users." },
    { title: "IRS Audit Finds Issues!", description: "you're accused of cheating on taxes and fudging numbers. Go to Frozen Assets and pay 20K to Pre-IPO." },
    { title: "BETC AI Robot Goes Mad", description: "A BETC-made AI humanoid robot goes insane and starts cursing at the CES tech festival. Videos go viral; BETC down 1 coin, FIMC up 1 coin." },
    { title: "New Humanoid Robot", description: "BETC releases plans for new humanoid robot <i>WITHOUT<i> the aid of BFM this time. <b>BETC up 1 coin, BFM down 1 coin.</b>" },
    { title: "Stock Index Soars:", description: "BFM tops the S&P's list once again of top-performing companies. BFM up 1 coin, S&P up 1 coin." },
    { title: "Retirement Coming?", description: "Time to finalize financial plans and get some stocks privatized. Advance to nearest Buy/Sell space." },
    { title: "Mass Shooting", description: "CEO and 10 board members of a leading healthcare company have been killed in a mass shooting. Health Sector down 1 coin." },
    { title: "Interest Rates Lowered", description: "The Fed lowers interest rates dramatically, causing an increase in bank activity. <b>GBC up 1 coin.</b>" },
    { title: "New TOI CEO Hired", description: "Hopefully this CEO will be one that won't abuse prices and employees. Things are looking good: <b>TOI up 1 coin.</b>" },
    { title: "Investor Conflict", description: "In a furious argument between S/P fund managers and TOI investors, TOI is removed from the S/P index. <b>S/P up 1 coin, TOI down 1 coin</b>." },
    { title: "Best Value Stocks", description: "A recent report shows that mid-cap stocks offer some of the best profit margins available. <b>Advance to the nearest Mid-Cap stock block</b>." },
    { title: "Support Small", description: "#SupportSmall hashtag trending on social media as people invest in small businesses over large ones. <b>Small Caps up 1 coin, FIMC up 1 coin.</b>" },
    { title: "More Privacy Lawsuits", description: "Angry users upset that their data is being sold on social media file a class-action lawsuit. FIMC down 1 coin." },
    { title: "FONE: the Next Generation", description: "Reports show that FONE is at the forefront of an influx of new, intelligent smartphones with the ability to transform experiences. FONE up 1 coin." },
    { title: "Stock Indexes Rise", description: "Consumer sentiment improves with the latest job report, showing that the US economy added thousands of new jobs in the last month. S/P Index up 1 coin." },
    { title: "False Advertising", description: "WPI accused of false advertising on drug and prescription labels, causing 15 deaths due to overdose. WPI CEO removed and company sued; <b>WPI down 1 coin</b>." },
    { title: "BETC Price Upgrade", description: "Analysts have upgraded BETC's 12-month price target after stellar performance thus far. <b>BETC up 1 coin</b>; price targets can have great influences on stock prices." },
    { title: "Mid-Caps Fall", description: "Mid-caps are declining in popularity because of their excessive prices making them unfavorable. Mid-caps down 1 coin." },
    { title: "U.S. Market Sell-Off?", description: "Roll two dice - if you get doubles, every stock on the board loses half its coins." },
    { title: "Value for Money", description: "Investors are looking for better value for money (lower PEG) in stocks to get higher profits. Stocks with PEG ≤ 1.5 up 1 coin." },
    { title: "The SEC Apologizes", description: "The SEC, after mistakenly convicting you of investor fraud, apologizes for the inconvenience by sending you <b>to the Start space</b>." },
    { title: "HUI Commits to Sustainability", description: "After an unfortunate track record of poor sustainability practices, HUI's CEO is revising their commitment to treat customers and the environment better. <b>HUI up 1 coin</b> on the good news." },
    { title: "Upset WPI Customer", description: "An upset WPI customer breaks into the WPI headquarters building, killing 10 employees, the CEO, and stealing millions of dollars in cash. <b>WPI down 1 coin</b>." },
    { title: "Oil-Powered Airplane Fails", description: "ROTC attempts to work with TOI to produce a brand-new oil-powered airplane--which promptly crashes on its first test flight, wasting thousands of barrels of oil. <b>ROTC and TOI down 1 coin</b>." },
    { title: "Electronic Oil Monitoring", description: "TOI is now working on devising a new plan to electronically monitor and control oil barrels to dissuade people and attackers from stealing oil barrels. The technology takes off, TOI up 1 coin." },
    { title: "Housing Boom", description: "An influx of new home construction across the nation, fueled by lower interest rates, pushes the housing boom to new levels. <b>PRL up 1 coin.</b>" },
    { title: "Fake Realtor Scam", description: "An upset customer who recently sold their home was horrified to discover that their PRL-supplied realtor now expects thousands of dollars in reimbursement fees due to a scam and misunderstanding! <b>PRL down 1 coin</b>." },
    { title: "AI Robot", description: "BETC, FONE, and BBC begin to work together to produce a new intelligent AI robot that hopefully won't go on a rampage at the CES conference. Technology sector and BBC up 1 coin." },
    { title: "Self-Driving Car Accident", description: "A self-driving vehicle produced by several companies in the Tech sector and NASDAQ went haywire and crashed into a building, causing significant damage. <b>NASDAQ exchange down 1 coin</b>." },
    { title: "Financial Boom Coming", description: "Analysts predict that financials, specifically bank stocks, are soon to take off due to a coming interest rate decrease. <b>Advance to GBC space</b>." },
    { title: "Hidden Fees", description: "Watch those hidden fees when investing: pay 10K to the brokerage house." },
    { title: "Inflation Report", description: "An upcoming inflation report could determine the future of stocks: Roll 2 dice. If the sum is greater than 10, all stocks lose 1 coin. If the sum is less than 4, all stocks gain 1 coin. Otherwise, <b> nothing happens</b>." },
    { title: "Tech Glitch", description: "A glitch at BBC headquarters results in the release of inaccurate and misleading sales data. BBC down 1 coin." },
    { title: "Earnings Call", description: "BFM's earnings this quarter were up by nearly 10% from the previous one, surprising investors. <b>BFM up 1 coin</b>." },
    { title: "New Sheep Burger", description: "BME attempts to transform an ordinary burger into a sheep-shaped meat link. After failing horribly, videos went viral on social media. <b>FIMC up 1 coin, BME down 1 coin</b>." },
    { title: "Bread Lawsuit", description: "In a recent court case, FIMC was charged for promoting false info about a popular and reputabl bread company, saying the bread was 'plastic' and 'tasteless'. <b>FIMC down 1 coin</b>." },
    { title: "Quarterly Profits Drive Stock Rally", description: "Profitable companies are in high demand. Stocks with PE < 13 up 1 coin" }
]);

const originalDeck2 = Object.freeze([
    { title: "Consumer Alert", description: "Interest on Credit Cards rise. Financial sector stocks up 1 coin." },
    { title: "FDA Warning", description: "Mad cow disease found in Texas. BME & HUI down 1 coin, FIMC & WPI up 1 coin." },
    { title: "Congressman Indicted", description: "Video of congressman taking bribes from Auto lobbyist on nightly news goes viral. AMA down 1 coin." },
    { title: "War in the Middle East", description: "Middle East oil productions fall 30% as a result of war. TOI up 2 coins." },
    { title: "Asian Bird Flu", description: "Asian bird flu outbreak infects 200,000. Health sector up 1 coin." },
    { title: "25% Tariffs Imposed On Electronics", description: "Tech sector stocks hit hard. NASDAQ and BFM down 1 coin." },
    { title: "World Leaders Unite on Better Manufacturing Practices", description: "BFM up 1 coin on news of faster and more efficient manufacturing processes." },
    { title: "Gulf Oil Spill", description: "10 million barrels floating into Rockport, Texas. TOI and BFM down 2 coins." },
    { title: "Obesity Grows in US", description: "30% obesity in children, 20% in adults. BME up 2 coins, WPI up 1 coin, HUI down 1 coin." },
    { title: "Hurricane Hits Texas", description: "TOI, which is based in Texas, is hit hard by a Category 4 hurricane. TOI down 1 coin, FIMC up 1 coin." },
    { title: "Tsunami Hits Areas of India, China, and Japan", description: "Technology sector and AMA down 1 coin after shipping halted in major ports due to damage." },
    { title: "Bears Destroy Oil Refinery", description: "<b>A bear attack</b> destroys an overseas TOI-owned oil refinery, killing 8 and causing millions of dollars in damage. TOI down 1 coin." },
    { title: "New Metal Factory Under Construction", description: "New electronics & metal factory under construction in Japan set to finish within five years. <b>BFM up 1 coin.</b>" },
    { title: "Russian Bank Hack", description: "Russian hackers infiltrate GBC servers and bring down millions of accounts worldwide, exposing data. GBC down 1 coin, FIMC up 1 coin." },
    { title: "Cow Disease Spreads in China", description: "Major sources of meat and poultry become infected by rapidly-spreading disease. BME down 1 coin, WPI up 1 coin, HUI down 1 coin." },
    { title: "Earthquake", description: "7.2-magnitude earthquake devastates overseas cell phone companies in China and Japan. FONE up 1 coin." },
    { title: "Data Error", description: "Auto worker at manufacturing plant in China orders ten times as many vehicles as were required, overloading AMA systems and causing chaos. AMA down 1 coin." },
    { title: "Train Derail", description: "Train carrying millions of barrels of oil derails while traveling through Brazil. TOI down 1 coin, ROTC down 1 coin." },
    { title: "New BBC Store Locations", description: "BBC opens 10 new department stores across Australia, China to increase business. BBC up 1 coin." },
    { title: "AMA Cheating Overseas", description: "German officials accuse AMA of fudging safety records and data on vehicles to byass regulations. AMA down 2 coins." },
    { title: "Large Companies Gain Profits Worldwide", description: "Report shows that even a small number of large companies are set to outpace smaller companies in the near future. Advance to nearest <b>large cap stock block</b>." },
    { title: "GBC representative goes Mad", description: "A GBC representative official screamed at the English prime minister in a heated financial press conference. GBC down 1 coin." },
    { title: "Nuclear War?", description: "US government official spits on a dog belonging to a French official, sparking a heated debate. Anxious sentiment about a possible nuclear war brings <b>S&P Index</b> and other indexes down 1 coin." },
    { title: "Global Chip Shortage", description: "A semiconductor and chip shortage worldwide is bad news for tech companies. Technology sector down 1 coin." },
    { title: "New Automaker Collaboration", description: "AMA's CEO has vowed to partner up with a cheap Japanese automaker to produce more reliable and cheaper parts in the US. AMA up 1 coin." },
    { title: "Meat Processing", description: "BME expands meat processing factories overseas to generate more revenue. BME up 1 coin." },
    { title: "AMA Expands Sales", description: "In a recent deal, AMA expands its auto production factories to locations in China and Japan to increase sales. AMA up 1 coin." },
    { title: "New Oil Transportation Railroad", description: "High-speed rail under construction to transport vast amounts of oil across parts of Peru. ROTC up 1 coin; <b>jump to the TOI space</b> to buy shares before they skyrocket." },
    { title: "Master's Degree", description: "You finally earn your Master's Degree after several long years in college. Collect an extra 5K when passing Start." },
    { title: "Container Ship Sinks", description: "A container ship carrying millions of dollars of warehouse goods for BBC tips over and sinks in the middle of the Atlantic Ocean. <b>BBC down 1 coin</b>." },
    { title: "Cell Tower Falls into Atlantic Ocean", description: "A cell tower in a Maryland harbor fell into the Atlantic Ocean in strong winds and was promptly crushed by a Chinese container ship intending to eliminate U.S. cellular competition. <b>FONE down 1 coin</b>." },
    { title: "Container Ship Sinks", description: "A container ship carrying millions of dollars of warehouse goods for BBC tips over and sinks in the middle of the Atlantic Ocean. <b>BBC down 1 coin</b>." },
    { title: "World Report", description: "Investors worldwide are dissatisfied with the low-quality bonds and gold and want to focus on investments that will make them money <b>NOW</b>. <b>Safety sector down 1 coin</b>." },
    { title: "Added Retirement Bonus", description: "Some smart stock planning and investing enables you to get more return upon retirement. Keep this card out and <b>collect an immediate 20K</b> when you trigger retirement." },
    { title: "Nuclear Accident", description: "Nuclear testing in Russia goes wrong when a missile impacts a FIMC data center. FIMC down 1 coin." }
]);

let decks = {
    1: { cards: [...originalDeck1], drawnCards: 0, drawnCard: null },
    2: { cards: [...originalDeck2], drawnCards: 0, drawnCard: null }
};

// Function to update card counters
function updateCounter(deckNum) {
    document.getElementById(`total-cards-${deckNum}`).innerText = decks[deckNum].cards.length;
    document.getElementById(`drawn-cards-${deckNum}`).innerText = decks[deckNum].drawnCards;
}

// Function to shuffle the deck
function shuffleDeck(deckNum) {
    let deck = decks[deckNum].cards;
    for (let i = deck.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
    decks[deckNum].drawnCards = 0;
    decks[deckNum].drawnCard = null;
    document.getElementById(`drawn-card-${deckNum}`).style.display = 'none';
    saveDeckState(deckNum); // save the current state of the deck to localStorage
    renderDeck(deckNum);
}

// Function to reset the deck
function resetDeck(deckNum) {
    decks[deckNum].cards = deckNum === 1 ? [...originalDeck1] : [...originalDeck2];
    decks[deckNum].drawnCards = 0;
    decks[deckNum].drawnCard = null;
    document.getElementById(`drawn-card-${deckNum}`).style.display = 'none';
    renderDeck(deckNum);

    saveDeckState(deckNum);
}

// Function to draw a card
function drawCard(deckNum, event) {
    let cardElement = event.currentTarget;
    let deck = decks[deckNum].cards;
    let cardIndex = Array.from(document.getElementById(`deck-${deckNum}`).children).indexOf(cardElement);

    // Flip card before removing it
    cardElement.classList.add("flipped");

    setTimeout(() => {
        let drawnCard = deck.splice(cardIndex, 1)[0];
        decks[deckNum].drawnCards++;
        decks[deckNum].drawnCard = drawnCard;

        let drawnCardElement = document.getElementById(`drawn-card-${deckNum}`);
        drawnCardElement.innerHTML = `<div class="card-title">${drawnCard.title}</div><div class="card-description">${drawnCard.description}</div>`; // this line is causing an uncaught type error apparently?
        drawnCardElement.style.display = 'flex';
                
        saveDeckState(deckNum);
        renderDeck(deckNum);
        // If all cards are drawn, show an empty message
        if (deck.length === 0) {
            setTimeout(() => {
                alert("Deck is empty! Hit 'Reset Deck' and then 'Shuffle'.");
            }, 500);
        }
    }, 600);

    saveDeckState(deckNum);
}

// Function to dismiss drawn card
function dismissDrawnCard(deckNum) {
    document.getElementById(`drawn-card-${deckNum}`).style.display = 'none';
}

// Function to render a deck with different card-back styles
function renderDeck(deckNum) {
    const deckContainer = document.getElementById(`deck-${deckNum}`);
    deckContainer.innerHTML = '';
    deckContainer.classList.add(`deck-${deckNum}`); // Apply deck-specific styles

    decks[deckNum].cards.forEach((_, index) => {
        let cardElement = document.createElement('div');
        cardElement.classList.add('card');
        cardElement.style.setProperty('--stack-index', index);
        cardElement.innerHTML = `<div class="card-front"></div><div class="card-back"></div>`;
        cardElement.addEventListener("click", (e) => drawCard(deckNum, e));
        deckContainer.appendChild(cardElement);
    });

    updateCounter(deckNum);
}

function saveDeckState(deckNum) {
    localStorage.setItem(`deck${deckNum}_cards`, JSON.stringify(decks[deckNum].cards));
    localStorage.setItem(`deck${deckNum}_drawn`, decks[deckNum].drawnCards.toString());
}

function loadDeckState(deckNum) {
    const cardsJSON = localStorage.getItem(`deck${deckNum}_cards`);
    const drawnCount = localStorage.getItem(`deck${deckNum}_drawn`);

    if (cardsJSON && drawnCount !== null) {
        decks[deckNum].cards = JSON.parse(cardsJSON);
        decks[deckNum].drawnCards = parseInt(drawnCount, 10);
    } else {
        // Only fallback if localStorage is empty
        decks[deckNum].cards = deckNum === 1 ? [...originalDeck1] : [...originalDeck2];
        decks[deckNum].drawnCards = 0;
    }
}

loadDeckState(1);
loadDeckState(2);
renderDeck(1);
renderDeck(2);