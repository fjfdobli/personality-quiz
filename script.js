// Comprehensive pool of quiz questions - randomized selection each time!
const questionPool = [
    {
        question: "What's your ideal way to spend a dark evening? �",
        answers: [
            { text: "Reading ancient tomes in a candlelit library 📚", personality: "vampire" },
            { text: "Running wild through moonlit forests 🌲", personality: "werewolf" },
            { text: "Brewing potions with mysterious herbs 🔮", personality: "witch" },
            { text: "Floating silently through abandoned halls 👻", personality: "ghost" }
        ]
    },
    {
        question: "Which dark power would you choose? ⚡",
        answers: [
            { text: "Eternal life and hypnotic charm 🩸", personality: "vampire" },
            { text: "Supernatural strength and pack leadership 🐺", personality: "werewolf" },
            { text: "Ancient magic and spell-casting abilities �", personality: "witch" },
            { text: "Invisibility and walking through walls �", personality: "ghost" }
        ]
    },
    {
        question: "What's your favorite type of music? 🎵",
        answers: [
            { text: "Haunting classical pieces that stir the soul �", personality: "vampire" },
            { text: "Primal drums and wild, rhythmic beats 🥁", personality: "werewolf" },
            { text: "Mystical chants and ancient melodies 🎶", personality: "witch" },
            { text: "Ethereal, otherworldly harmonies that echo �️", personality: "ghost" }
        ]
    },
    {
        question: "Which dark color palette calls to you? 🎨",
        answers: [
            { text: "Deep crimsons, midnight blacks, and blood reds �", personality: "vampire" },
            { text: "Earth tones, silver moonlight, and forest greens 🌲", personality: "werewolf" },
            { text: "Midnight purples, emerald greens, and mystical golds 💜", personality: "witch" },
            { text: "Ethereal whites, misty grays, and translucent blues 🤍", personality: "ghost" }
        ]
    },
    {
        question: "How do you protect those you care about? 🛡️",
        answers: [
            { text: "With elegant manipulation and strategic planning �", personality: "vampire" },
            { text: "With fierce loyalty and raw, protective instincts �", personality: "werewolf" },
            { text: "With powerful spells and magical barriers 🔮", personality: "witch" },
            { text: "By watching over them from the shadows unseen 👻", personality: "ghost" }
        ]
    },
    {
        question: "Where would you build your dark sanctuary? �️",
        answers: [
            { text: "An elegant gothic mansion with hidden passages �", personality: "vampire" },
            { text: "A secluded cabin deep in the wilderness �", personality: "werewolf" },
            { text: "A mysterious cottage filled with magical artifacts 🔮", personality: "witch" },
            { text: "An abandoned manor where spirits can roam free �", personality: "ghost" }
        ]
    },
    {
        question: "What's your favorite way to express darkness? 🎨",
        answers: [
            { text: "Creating eerie art with blood and shadows 🩸", personality: "vampire" },
            { text: "Crafting dark totems and cursed objects 🪬", personality: "witch" },
            { text: "Marking territory with primal scratches 🐾", personality: "werewolf" },
            { text: "Leaving mysterious messages in old books �", personality: "ghost" }
        ]
    },
    {
        question: "Which element feels most like home to you? 🌍",
        answers: [
            { text: "Darkness - mysterious, powerful, and full of secrets �️", personality: "witch" },
            { text: "Fire - passionate, powerful, and transformative 🔥", personality: "werewolf" },
            { text: "Earth - grounding, ancient, and powerful 🌱", personality: "vampire" },
            { text: "Water - flowing, emotional, and mysterious 💧", personality: "mermaid" }
        ]
    },
    {
        question: "What's your ideal social gathering? 🎉",
        answers: [
            { text: "A séance with trusted coven members 🕯️", personality: "witch" },
            { text: "A blood moon ritual where you command the pack 🌕", personality: "werewolf" },
            { text: "A peaceful gathering focused on meaningful connections 💕", personality: "unicorn" },
            { text: "A mystical moonlight ceremony by the water 🌙", personality: "mermaid" }
        ]
    },
    {
        question: "How do you handle threatening situations? �",
        answers: [
            { text: "Strike with calculated precision and cunning 🗡️", personality: "vampire" },
            { text: "Unleash primal fury and raw power 🔥", personality: "werewolf" },
            { text: "Cast protective spells and dark curses 🪄", personality: "witch" },
            { text: "Vanish into the shadows and strike unseen 👤", personality: "ghost" }
        ]
    },
    {
        question: "What's your dream dark accessory? ✨",
        answers: [
            { text: "An ornate silver ring that controls minds 💍", personality: "vampire" },
            { text: "A twisted staff that channels dark magic 🪄", personality: "witch" },
            { text: "A mystical collar that enhances beast form 🔗", personality: "werewolf" },
            { text: "An ancient locket that traps souls 🔮", personality: "ghost" }
        ]
    },
    {
        question: "Which season calls to your dark soul? 🍂",
        answers: [
            { text: "Winter - when death blankets the world in cold ❄️", personality: "vampire" },
            { text: "Autumn - when decay and transformation rule 🍂", personality: "witch" },
            { text: "Full moon nights - when the beast awakens �", personality: "werewolf" },
            { text: "All Hallows' Eve - when spirits roam free 🎃", personality: "ghost" }
        ]
    },
    {
        question: "What's your preferred resting style? 😴",
        answers: [
            { text: "Hanging upside down in complete darkness 🦇", personality: "vampire" },
            { text: "Curled up in a den surrounded by bones �", personality: "werewolf" },
            { text: "Floating cross-legged in meditation 🧘‍♀️", personality: "witch" },
            { text: "Phasing in and out of solid matter restlessly 👻", personality: "ghost" }
        ]
    },
    {
        question: "How do you prefer to receive fear? 💖",
        answers: [
            { text: "Through trembling whispers and wide eyes 👁️", personality: "vampire" },
            { text: "In terrified screams that echo through forests 📣", personality: "werewolf" },
            { text: "Through hushed rumors of your dark power �", personality: "witch" },
            { text: "In silent, haunted stares and cold chills 💫", personality: "ghost" }
        ]
    },
    {
        question: "What's your ideal dark companion? 🐾",
        answers: [
            { text: "A loyal bat that scouts ahead in darkness �", personality: "vampire" },
            { text: "A pack of wolves that hunt with you �", personality: "werewolf" },
            { text: "A wise raven that carries messages 🐦‍⬛", personality: "witch" },
            { text: "A phantom cat that phases between dimensions �‍⬛", personality: "ghost" }
        ]
    },
    {
        question: "How do you like to celebrate achievements? 🎉",
        answers: [
            { text: "A haunting celebration in an old cemetery ⚰️", personality: "ghost" },
            { text: "A wild hunt through the dark forest �", personality: "werewolf" },
            { text: "Sharing the joy with those who helped you succeed 🤝", personality: "unicorn" },
            { text: "A peaceful reflection under the moonlight 🌙", personality: "mermaid" }
        ]
    },
    {
        question: "What's your magical morning routine? ☀️",
        answers: [
            { text: "Begin the night with dark rituals and incantations �", personality: "witch" },
            { text: "Howl at the moon and embrace your wild nature 🌙", personality: "werewolf" },
            { text: "Start with gentle stretches and gratitude 🧘‍♀️", personality: "unicorn" },
            { text: "Wade into cool water and meditate 🌊", personality: "mermaid" }
        ]
    },
    {
        question: "Which magical profession calls to you? 🔮",
        answers: [
            { text: "Necromancer communing with the dead 💀", personality: "ghost" },
            { text: "Pack leader protecting the wilderness �", personality: "werewolf" },
            { text: "Healer in a crystal sanctuary 💎", personality: "unicorn" },
            { text: "Keeper of ancient oceanic libraries 📚", personality: "mermaid" }
        ]
    },
    {
        question: "How do you handle magical secrets? 🤫",
        answers: [
            { text: "Lock them away in an ancient grimoire 📖", personality: "witch" },
            { text: "Protect them with fierce pack loyalty 🛡️", personality: "werewolf" },
            { text: "Hold them gently in your heart with love 💝", personality: "unicorn" },
            { text: "Let them flow like messages in bottles 🍼", personality: "mermaid" }
        ]
    },
    {
        question: "What's your magical study preference? 📖",
        answers: [
            { text: "Small covens with dark rituals and potions �", personality: "witch" },
            { text: "Leading the pack with primal wisdom ⚡", personality: "werewolf" },
            { text: "One-on-one tutoring with patient guidance 🤲", personality: "unicorn" },
            { text: "Solo study in quiet, contemplative spaces 🧘", personality: "mermaid" }
        ]
    }
];

// Global variables for the current quiz session
let questions = []; // This will hold the randomized questions for current session
let currentQuestion = 0;
let answers = [];
let personalityScores = {
    vampire: 0,
    werewolf: 0,
    witch: 0,
    ghost: 0
};

// Function to randomize and select questions for this quiz session
function generateRandomQuestions() {
    // Shuffle the question pool
    const shuffledPool = [...questionPool].sort(() => Math.random() - 0.5);
    
    // Select 13 random questions
    questions = shuffledPool.slice(0, 13);
    
    // Shuffle the answers within each question for extra randomization
    questions.forEach(question => {
        question.answers = [...question.answers].sort(() => Math.random() - 0.5);
    });
    
    console.log("🎲 Generated 13 randomized questions for this quiz session!");
}

// Enhanced Personality results with compatibility and zodiac data
const personalities = {
    vampire: {
        title: "🧛‍♂️ Elegant Vampire 🧛‍♂️",
        emoji: "�‍♂️",
        description: "You are a sophisticated and mysterious vampire! You possess an eternal elegance and magnetic charm that draws people in. Your intelligence is matched only by your refined tastes and aristocratic nature. You prefer the shadows and nighttime, finding beauty in darkness and mystery. You're selective with your relationships but fiercely loyal to those you consider worthy. Your presence commands respect and a hint of fear. 🩸✨",
        zodiacSigns: ["♏ Scorpio", "♑ Capricorn", "♒ Aquarius"],
        compatibility: {
            best: ["ghost", "witch"],
            good: ["vampire"],
            challenging: ["werewolf"]
        },
        creativity: [
            { icon: "�", title: "Gothic Literature", desc: "Writing dark, romantic poetry and stories" },
            { icon: "�", title: "Wine Connoisseur", desc: "Appreciating the finest vintages" },
            { icon: "🎼", title: "Classical Music", desc: "Playing haunting melodies on piano" },
            { icon: "�", title: "Antique Collecting", desc: "Curating beautiful, ancient treasures" }
        ],
        funFacts: [
            "🩸 Vampires have an impeccable sense of style that never goes out of fashion",
            "🌙 They can see perfectly in complete darkness and prefer moonlit nights", 
            "🦇 Many vampires can transform into bats, wolves, or mist at will",
            "⚰️ They sleep during the day in silk-lined coffins for ultimate comfort"
        ],
        shadowCompanion: {
            name: "Phantom Bat",
            icon: "🦇",
            description: "Your shadow companion is the mysterious phantom bat, representing stealth, night vision, and ancient wisdom. Like you, bats navigate darkness with precision and possess supernatural senses."
        }
    },
    werewolf: {
        title: "� Fierce Werewolf �",
        emoji: "�",
        description: "You are a powerful and primal werewolf! You're passionate, protective, and deeply connected to your instincts. Your fierce loyalty to your pack and family makes you a formidable ally. You have natural leadership qualities and the strength to face any challenge head-on. While you can be wild and untamed, those who earn your trust know your heart is pure. You embody both human intelligence and wolf cunning! 🌕💪",
        zodiacSigns: ["♈ Aries", "♌ Leo", "♐ Sagittarius"],
        compatibility: {
            best: ["werewolf", "ghost"],
            good: ["witch"],
            challenging: ["vampire"]
        },
        creativity: [
            { icon: "🏛️", title: "Architecture", desc: "Designing grand, impressive structures" },
            { icon: "🎭", title: "Theater Arts", desc: "Commanding the stage with presence" },
            { icon: "⚔️", title: "Metalworking", desc: "Forging powerful, beautiful items" },
            { icon: "🎼", title: "Epic Compositions", desc: "Creating dramatic, stirring music" }
        ],
        funFacts: [
            "🔥 Dragons collect treasures not for greed, but to appreciate beauty",
            "🏔️ They prefer high places where they can survey their domain",
            "⚡ Dragon fire isn't just destructive - it can also create and transform",
            "👑 Ancient dragons are repositories of forgotten wisdom and history"
        ]
    },
    witch: {
        title: "�‍♀️ Mystical Witch �‍♀️",
        emoji: "�‍♀️",
        description: "You are a wise and powerful witch! Your deep knowledge of ancient mysteries and natural magic sets you apart from others. You have an innate ability to heal, protect, and transform situations with your spells and potions. Your intuition is unmatched, and you can see through deception easily. You're independent, strong-willed, and not afraid to walk your own path. Your magic comes from within, and you use it to help those who truly need it! �✨",
        zodiacSigns: ["♍ Virgo", "♏ Scorpio", "♓ Pisces"],
        compatibility: {
            best: ["vampire", "ghost"],
            good: ["witch"],
            challenging: ["werewolf"]
        },
        creativity: [
            { icon: "🌈", title: "Rainbow Art", desc: "Creating colorful, uplifting masterpieces" },
            { icon: "🎵", title: "Healing Music", desc: "Composing melodies that soothe souls" },
            { icon: "💎", title: "Crystal Work", desc: "Channeling energy through precious stones" },
            { icon: "🌺", title: "Garden Design", desc: "Growing spaces of peace and beauty" }
        ],
        funFacts: [
            "🌈 Unicorn horns can purify any water they touch",
            "✨ They can only be approached by those with pure intentions",
            "🌸 Flowers bloom brighter in their presence",
            "💫 Unicorns can see the true nature of people's hearts"
        ]
    },
    ghost: {
        title: "👻 Ethereal Ghost 👻",
        emoji: "👻",
        description: "You are a mysterious and ethereal ghost! You move through life with an otherworldly grace, often feeling like you're between two worlds. You're deeply empathetic and can sense the emotions and energies of others easily. Your past experiences have given you wisdom beyond your years, and you have a unique perspective on life and death. You're gentle yet haunting, with the ability to appear and disappear when needed. Your presence brings both comfort and mystery to those around you! �️✨",
        zodiacSigns: ["♋ Cancer", "♎ Libra", "♓ Pisces"],
        compatibility: {
            best: ["vampire", "witch"],
            good: ["ghost"],
            challenging: ["werewolf"]
        },
        creativity: [
            { icon: "�", title: "Haunting Poetry", desc: "Writing verses from beyond the veil" },
            { icon: "�️", title: "Ethereal Art", desc: "Creating mysterious, otherworldly pieces" },
            { icon: "�", title: "Spirit Theater", desc: "Performing haunting dramatic pieces" },
            { icon: "🔮", title: "Séance Leading", desc: "Communicating between worlds" }
        ],
        funFacts: [
            "👻 Ghosts can phase through solid matter at will",
            "� They're most active during the witching hours between midnight and 3 AM",
            "❄️ Their presence often drops the temperature in a room",
            "📱 They can interfere with electronic devices and cause mysterious glitches"
        ]
    }
};

personalities.vampire.powers = [
    { icon: "🩸", name: "Blood Drain", description: "Sustain yourself with life essence" },
    { icon: "🦇", name: "Bat Form", description: "Transform into a bat for swift travel" },
    { icon: "👁️", name: "Mind Control", description: "Hypnotize mortals with your gaze" },
    { icon: "🌙", name: "Immortality", description: "Live forever in eternal darkness" }
];

personalities.vampire.shadowCompanion = {
    name: "Blood Raven",
    icon: "🐦‍⬛",
    description: "Your shadow companion is the blood raven, representing death, mystery, and forbidden knowledge. Like you, ravens are intelligent, elegant, and deeply connected to the realm between life and death."
};

personalities.vampire.fearLanguage = {
    name: "Seductive Terror",
    icon: "💋",
    description: "Your dark language of fear flows through elegant intimidation and mesmerizing presence. You inspire fear through sophisticated charm mixed with deadly beauty."
};

personalities.vampire.quote = {
    text: "I am eternal darkness wrapped in elegant beauty, forever hunting in the shadows of immortality.",
    author: "The Ancient Vampire Within"
};

personalities.werewolf.powers = [
    { icon: "�", name: "Lycanthropy", description: "Transform into a powerful wolf" },
    { icon: "�", name: "Enhanced Senses", description: "Track prey for miles" },
    { icon: "�", name: "Pack Leadership", description: "Command respect and loyalty" },
    { icon: "🌕", name: "Lunar Strength", description: "Gain power from the full moon" }
];

personalities.werewolf.shadowCompanion = {
    name: "Alpha Wolf",
    icon: "🐺",
    description: "Your shadow companion is the alpha wolf, representing primal power, loyalty, and fierce protection. Like you, wolves are pack leaders who command respect through strength and unwavering loyalty."
};

personalities.werewolf.fearLanguage = {
    name: "Primal Intimidation",
    icon: "�",
    description: "Your dark language of fear howls through raw, primal power and territorial dominance. You inspire fear through savage strength and protective ferocity."
};

personalities.werewolf.quote = {
    text: "I am untamed wilderness and fierce loyalty - a beast whose howl echoes through the darkness for my pack.",
    author: "The Wild Werewolf Within"
};

personalities.witch.powers = [
    { icon: "🔮", name: "Dark Divination", description: "See into the future through scrying" },
    { icon: "🪄", name: "Curse Casting", description: "Weave spells of doom and misfortune" },
    { icon: "�‍♀️", name: "Potion Brewing", description: "Create powerful elixirs and potions" },
    { icon: "🌙", name: "Moon Magic", description: "Draw power from lunar cycles" }
];

personalities.witch.shadowCompanion = {
    name: "Blood Raven",
    icon: "🐦‍⬛",
    description: "Your shadow companion is the mystical raven, representing ancient wisdom, prophecy, and dark magic. Like you, ravens are keepers of secrets and messengers between worlds."
};

personalities.witch.fearLanguage = {
    name: "Mystical Dread",
    icon: "�",
    description: "Your dark language of fear weaves through ancient curses and supernatural omens. You inspire fear through mysterious knowledge and the threat of dark magic."
};

personalities.witch.quote = {
    text: "I am ancient wisdom and dark power - wherever I walk, I leave traces of magic and mystery.",
    author: "The Dark Witch Within"
};

personalities.ghost.powers = [
    { icon: "👻", name: "Ethereal Form", description: "Phase through solid matter at will" },
    { icon: "❄️", name: "Spectral Chill", description: "Freeze the air around your presence" },
    { icon: "👁️", name: "Soul Sight", description: "See the true nature of mortals" },
    { icon: "🌫️", name: "Manifestation", description: "Appear and disappear at will" }
];

personalities.ghost.shadowCompanion = {
    name: "Phantom Cat",
    icon: "🐈‍⬛",
    description: "Your shadow companion is the ethereal phantom cat, representing mystery, independence, and otherworldly wisdom. Like you, phantom cats move between dimensions with silent grace."
};

personalities.ghost.fearLanguage = {
    name: "Silent Terror",
    icon: "🤫",
    description: "Your dark language of fear whispers through haunting presence and chilling silence. You inspire fear through mysterious appearances and unexplained phenomena."
};

personalities.ghost.quote = {
    text: "I am the whisper between worlds, forever wandering the veil between life and death.",
    author: "The Eternal Ghost Within"
};

// DOM elements
const startScreen = document.getElementById('startScreen');
const quizContainer = document.getElementById('quiz');
const resultContainer = document.getElementById('result');
const questionElement = document.getElementById('question');
const answersElement = document.getElementById('answers');
const progressElement = document.getElementById('progress');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

function startQuiz() {
    // Show dark loading message
    showMagicalMessage("🎲 Summoning 13 sinister questions from the shadows... 🦇", 2000);
    
    // Generate randomized questions for this quiz session
    setTimeout(() => {
        generateRandomQuestions();
        
        // Reset quiz state
        currentQuestion = 0;
        answers = [];
        personalityScores = {
            vampire: 0,
            werewolf: 0,
            witch: 0,
            ghost: 0
        };
        
        startScreen.style.display = 'none';
        quizContainer.style.display = 'block';
        showQuestion();
    }, 1000);
}

// The enhanced showQuestion function is defined later in the file

function selectAnswer(answerIndex) {
    // Remove previous selection
    document.querySelectorAll('.answer').forEach(answer => {
        answer.classList.remove('selected');
    });
    
    // Add selection to clicked answer
    document.querySelectorAll('.answer')[answerIndex].classList.add('selected');
    
    // Store the answer
    answers[currentQuestion] = answerIndex;
    
    // Show next button
    nextBtn.style.display = 'block';
    
    // Auto-advance after a short delay for better UX
    setTimeout(() => {
        if (currentQuestion < questions.length - 1) {
            nextQuestion();
        } else {
            showResults();
        }
    }, 800);
}

function nextQuestion() {
    if (answers[currentQuestion] === undefined) return;
    
    currentQuestion++;
    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showResults();
    }
}

function prevQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        showQuestion();
    }
}

function calculatePersonality() {
    // Reset scores
    personalityScores = {
        vampire: 0,
        werewolf: 0,
        witch: 0,
        ghost: 0
    };
    
    // Calculate scores based on answers
    answers.forEach((answerIndex, questionIndex) => {
        if (answerIndex !== undefined) {
            const personality = questions[questionIndex].answers[answerIndex].personality;
            personalityScores[personality]++;
        }
    });
    
    // Find the personality with the highest score
    let maxScore = 0;
    let resultPersonality = 'vampire';
    
    for (const [personality, score] of Object.entries(personalityScores)) {
        if (score > maxScore) {
            maxScore = score;
            resultPersonality = personality;
        }
    }
    
    return resultPersonality;
}

function showResults() {
    const personality = calculatePersonality();
    const result = personalities[personality];
    
    // Hide quiz, show results
    quizContainer.style.display = 'none';
    resultContainer.style.display = 'block';
    
    // Update basic result content
    document.getElementById('resultImage').textContent = result.emoji;
    document.getElementById('resultTitle').textContent = result.title;
    document.getElementById('resultDescription').textContent = result.description;
    
    // Update zodiac information
    updateZodiacInfo(result);
    
    // Update compatibility information
    updateCompatibilityInfo(personality, result);
    
    // Update creativity section
    updateCreativityInfo(result);
    
    // Update fun facts
    updateFunFacts(result);
    
    // Update magical powers
    updateMagicalPowers(result);
    
    // Update spirit animal
    updateSpiritAnimal(result);
    
    // Update love language
    updateLoveLanguage(result);
    
    // Update magical quote
    updateMagicalQuote(result);
    
    // Add celebratory animation
    setTimeout(() => {
        createConfetti();
        createMagicalResultEffects();
    }, 500);
}

function updateZodiacInfo(result) {
    const zodiacInfo = document.getElementById('zodiacInfo');
    zodiacInfo.innerHTML = `
        <div style="margin-bottom: 10px; color: #4a5568;">Most compatible zodiac signs:</div>
        <div style="display: flex; flex-wrap: wrap; gap: 8px; justify-content: center;">
            ${result.zodiacSigns.map(sign => `<span class="zodiac-sign">${sign}</span>`).join('')}
        </div>
    `;
}

function updateCompatibilityInfo(userPersonality, result) {
    const compatibility = result.compatibility;
    
    // Best friends
    const bestFriends = document.getElementById('bestFriends');
    bestFriends.innerHTML = compatibility.best.map(type => 
        `<span class="creature-badge">${personalities[type].emoji} ${getCreatureName(type)}</span>`
    ).join('');
    
    // Good connections
    const goodConnections = document.getElementById('goodConnections');
    goodConnections.innerHTML = compatibility.good.map(type => 
        `<span class="creature-badge">${personalities[type].emoji} ${getCreatureName(type)}</span>`
    ).join('');
    
    // Challenging connections (growth opportunities)
    const challengingConnections = document.getElementById('challengingConnections');
    challengingConnections.innerHTML = compatibility.challenging.map(type => 
        `<span class="creature-badge">${personalities[type].emoji} ${getCreatureName(type)}</span>`
    ).join('');
}

function updateCreativityInfo(result) {
    const creativityGrid = document.getElementById('creativityGrid');
    creativityGrid.innerHTML = result.creativity.map(item => `
        <div class="creativity-item">
            <span class="creativity-icon">${item.icon}</span>
            <div class="creativity-title">${item.title}</div>
            <div class="creativity-desc">${item.desc}</div>
        </div>
    `).join('');
}

function updateFunFacts(result) {
    const funFacts = document.getElementById('funFacts');
    funFacts.innerHTML = result.funFacts.map((fact, index) => `
        <div class="fun-fact" style="animation-delay: ${index * 0.2}s">${fact}</div>
    `).join('');
}

function getCreatureName(type) {
    const names = {
        vampire: 'Vampire',
        werewolf: 'Werewolf', 
        witch: 'Witch',
        ghost: 'Ghost'
    };
    return names[type];
}

function shareResult() {
    const personality = calculatePersonality();
    const result = personalities[personality];
    
    if (navigator.share) {
        navigator.share({
            title: 'My Horror Character Result!',
            text: `I just discovered I'm a ${result.title}! 🎃 Take the randomized quiz to find your horror character!`,
            url: window.location.href
        });
    } else {
        // Fallback for browsers that don't support native sharing
        const shareText = `I just discovered I'm a ${result.title}! 🎃 Take the horror randomized quiz to find your character: ${window.location.href}`;
        
        if (navigator.clipboard) {
            navigator.clipboard.writeText(shareText).then(() => {
                showShareMessage('Result copied to clipboard! Share your darkness! 🦇');
            });
        } else {
            // Final fallback
            const textArea = document.createElement('textarea');
            textArea.value = shareText;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
            showShareMessage('Result copied to clipboard! Share your darkness! 🦇');
        }
    }
}

function updateMagicalPowers(result) {
    const powersGrid = document.getElementById('powersGrid');
    powersGrid.innerHTML = result.powers.map(power => `
        <div class="power-item">
            <span class="power-icon">${power.icon}</span>
            <div class="power-name">${power.name}</div>
            <div class="power-description">${power.description}</div>
        </div>
    `).join('');
}

function updateSpiritAnimal(result) {
    const spiritAnimal = document.getElementById('spiritAnimal');
    spiritAnimal.innerHTML = `
        <span class="spirit-animal-icon">${result.shadowCompanion.icon}</span>
        <div class="spirit-animal-name">${result.shadowCompanion.name}</div>
        <div class="spirit-animal-desc">${result.shadowCompanion.description}</div>
    `;
}

function updateLoveLanguage(result) {
    const loveLanguage = document.getElementById('loveLanguage');
    loveLanguage.innerHTML = `
        <span class="love-language-icon">${result.fearLanguage.icon}</span>
        <div class="love-language-name">${result.fearLanguage.name}</div>
        <div class="love-language-desc">${result.fearLanguage.description}</div>
    `;
}

function updateMagicalQuote(result) {
    const quote = document.getElementById('magicalQuote');
    quote.innerHTML = `
        <div class="quote-text">${result.quote.text}</div>
        <div class="quote-author">- ${result.quote.author}</div>
    `;
}

function createMagicalResultEffects() {
    // Create floating magical elements around result
    const container = document.querySelector('.result-card');
    const magicalElements = ['✨', '🌟', '💫', '⭐', '🌙', '💖', '🦋', '🌸'];
    
    for (let i = 0; i < 15; i++) {
        const element = document.createElement('div');
        element.textContent = magicalElements[Math.floor(Math.random() * magicalElements.length)];
        element.style.cssText = `
            position: absolute;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            font-size: ${0.8 + Math.random() * 0.8}rem;
            pointer-events: none;
            animation: result-float ${2 + Math.random() * 3}s ease-in-out infinite;
            animation-delay: ${Math.random() * 2}s;
            z-index: 1000;
        `;
        container.appendChild(element);
        
        setTimeout(() => element.remove(), 8000);
    }
}

function generateCertificate() {
    const personality = calculatePersonality();
    const result = personalities[personality];
    const certificateModal = document.getElementById('certificateModal');
    const certificate = document.getElementById('certificate');
    
    const userName = prompt("Enter your dark name for the certificate:") || "Dark Being";
    
    certificate.innerHTML = `
        <div style="text-align: center;">
            <h1 style="color: #DC143C; font-size: 2.5rem; margin-bottom: 20px;">
                � Certificate of Dark Identity �
            </h1>
            <div style="font-size: 4rem; margin: 20px 0;">${result.emoji}</div>
            <h2 style="color: #4a5568; margin-bottom: 10px;">This certifies that</h2>
            <h1 style="color: #DC143C; font-size: 2rem; margin: 20px 0; font-weight: bold;">
                ${userName}
            </h1>
            <h2 style="color: #4a5568; margin-bottom: 20px;">is officially recognized as</h2>
            <h1 style="background: linear-gradient(45deg, #8B0000, #DC143C, #B22222); 
                       -webkit-background-clip: text; -webkit-text-fill-color: transparent; 
                       font-size: 2.2rem; margin: 20px 0; font-weight: bold;">
                ${result.title}
            </h1>
            <p style="color: #666; font-size: 1.1rem; margin: 20px 0; line-height: 1.6;">
                Possessing the dark powers of ${result.powers[0].name}, ${result.powers[1].name}, 
                and ${result.powers[2].name}, with ${result.shadowCompanion.name} as their eternal guide.
            </p>
            <div style="margin-top: 30px; display: flex; justify-content: space-between; align-items: center;">
                <div style="text-align: center;">
                    <div style="border-top: 2px solid #DC143C; width: 200px; margin-bottom: 5px;"></div>
                    <small style="color: #888;">Dark Council Seal</small>
                </div>
                <div style="font-size: 2rem;">🦇💀�💀�</div>
                <div style="text-align: center;">
                    <div style="border-top: 2px solid #DC143C; width: 200px; margin-bottom: 5px;"></div>
                    <small style="color: #888;">Date: ${new Date().toLocaleDateString()}</small>
                </div>
            </div>
        </div>
    `;
    
    certificateModal.style.display = 'flex';
}

function closeCertificate() {
    document.getElementById('certificateModal').style.display = 'none';
}

function downloadCertificate() {
    // Simple implementation - in a real app, you'd want to use a library like html2canvas
    alert("Your magical certificate is ready! 📜✨\n\nTo save it: Right-click on the certificate and select 'Save as image' or take a screenshot!");
}

function showMagicalMessage(message, duration = 2000) {
    const messageDiv = document.createElement('div');
    messageDiv.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: linear-gradient(135deg, #6bcf7f, #4d9fff);
        color: white;
        padding: 25px 35px;
        border-radius: 20px;
        font-weight: 600;
        font-size: 1.1rem;
        text-align: center;
        box-shadow: 0 15px 35px rgba(107, 207, 127, 0.4);
        z-index: 10000;
        animation: magicalPop 0.6s ease-out;
        border: 2px solid rgba(255, 255, 255, 0.3);
    `;
    messageDiv.textContent = message;
    
    document.body.appendChild(messageDiv);
    
    setTimeout(() => {
        messageDiv.style.animation = 'fadeOut 0.5s ease-out forwards';
        setTimeout(() => {
            document.body.removeChild(messageDiv);
        }, 500);
    }, duration);
}

function showShareMessage(message) {
    const messageDiv = document.createElement('div');
    messageDiv.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: linear-gradient(135deg, #ff6b9d, #ffd93d);
        color: white;
        padding: 20px 30px;
        border-radius: 15px;
        font-weight: 600;
        box-shadow: 0 10px 30px rgba(255, 107, 157, 0.3);
        z-index: 10000;
        animation: fadeInScale 0.5s ease-out;
    `;
    messageDiv.textContent = message;
    
    document.body.appendChild(messageDiv);
    
    setTimeout(() => {
        messageDiv.style.animation = 'fadeOut 0.5s ease-out forwards';
        setTimeout(() => {
            document.body.removeChild(messageDiv);
        }, 500);
    }, 2000);
}

function restartQuiz() {
    currentQuestion = 0;
    answers = [];
    questions = [];
    personalityScores = {
        vampire: 0,
        werewolf: 0,
        witch: 0,
        ghost: 0
    };
    
    resultContainer.style.display = 'none';
    startScreen.style.display = 'block';
}

function createConfetti() {
    const colors = ['#ff6b9d', '#ffd93d', '#6bcf7f', '#4d9fff', '#ff9a9e', '#c471f5'];
    const confettiCount = 50;
    
    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'fixed';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.top = '-10px';
        confetti.style.width = '10px';
        confetti.style.height = '10px';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.borderRadius = '50%';
        confetti.style.zIndex = '1000';
        confetti.style.pointerEvents = 'none';
        confetti.style.animation = `confettiFall ${Math.random() * 3 + 2}s linear forwards`;
        
        document.body.appendChild(confetti);
        
        setTimeout(() => {
            confetti.remove();
        }, 5000);
    }
}

// Add confetti animation CSS and enhanced effects
const style = document.createElement('style');
style.textContent = `
    @keyframes confettiFall {
        0% {
            transform: translateY(-100vh) rotate(0deg);
            opacity: 1;
        }
        100% {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Initialize magical effects
document.addEventListener('DOMContentLoaded', function() {
    initializeMagicalEffects();
});

function initializeMagicalEffects() {
    // Magic cursor trail
    let mouseX = 0, mouseY = 0;
    let trailX = 0, trailY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
    function animateTrail() {
        trailX += (mouseX - trailX) * 0.1;
        trailY += (mouseY - trailY) * 0.1;
        
        const trail = document.getElementById('cursorTrail');
        if (trail) {
            trail.style.left = trailX + 'px';
            trail.style.top = trailY + 'px';
            trail.style.opacity = '0.7';
        }
        
        requestAnimationFrame(animateTrail);
    }
    animateTrail();
    
    // Create magical particles
    createMagicalParticles();
    
    // Add hover effects to answers
    document.addEventListener('click', createClickEffect);
}

function createMagicalParticles() {
    const container = document.getElementById('magicParticles');
    if (!container) return;
    
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'magic-particle';
        particle.style.cssText = `
            position: absolute;
            width: 4px;
            height: 4px;
            background: ${getRandomColor()};
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: float-particle ${3 + Math.random() * 4}s infinite ease-in-out;
            animation-delay: ${Math.random() * 2}s;
            opacity: 0.6;
        `;
        container.appendChild(particle);
    }
}

function getRandomColor() {
    const colors = ['#ff6b9d', '#ffd93d', '#6bcf7f', '#4d9fff', '#c471f5'];
    return colors[Math.floor(Math.random() * colors.length)];
}

function createClickEffect(e) {
    const effect = document.createElement('div');
    effect.style.cssText = `
        position: fixed;
        left: ${e.clientX}px;
        top: ${e.clientY}px;
        width: 20px;
        height: 20px;
        background: radial-gradient(circle, #ff6b9d, transparent);
        border-radius: 50%;
        pointer-events: none;
        z-index: 10000;
        animation: clickRipple 0.6s ease-out forwards;
    `;
    
    document.body.appendChild(effect);
    setTimeout(() => effect.remove(), 600);
}

function showQuestion() {
    const question = questions[currentQuestion];
    questionElement.textContent = question.question;
    document.getElementById('questionNumber').textContent = `Question ${currentQuestion + 1}`;
    document.getElementById('progressText').textContent = `Question ${currentQuestion + 1} of ${questions.length}`;
    
    // Update progress bar
    const progress = ((currentQuestion + 1) / questions.length) * 100;
    progressElement.style.width = progress + '%';
    
    // Clear previous answers
    answersElement.innerHTML = '';
    
    // Create answer buttons with enhanced effects
    question.answers.forEach((answer, index) => {
        const answerDiv = document.createElement('div');
        answerDiv.className = 'answer magical-answer';
        answerDiv.innerHTML = `
            <span class="answer-text">${answer.text}</span>
            <div class="answer-sparkle"></div>
        `;
        answerDiv.onclick = () => selectAnswer(index);
        
        // Check if this answer was previously selected
        if (answers[currentQuestion] === index) {
            answerDiv.classList.add('selected');
        }
        
        // Add magical hover effect
        answerDiv.addEventListener('mouseenter', () => {
            if (!answerDiv.classList.contains('selected')) {
                createSparkleEffect(answerDiv);
            }
        });
        
        answersElement.appendChild(answerDiv);
    });
    
    prevBtn.style.display = currentQuestion > 0 ? 'block' : 'none';
    nextBtn.style.display = answers[currentQuestion] !== undefined ? 'block' : 'none';
    questionElement.style.animation = 'fadeInDown 0.6s ease-out';
    answersElement.style.animation = 'fadeInUp 0.6s ease-out';
    
    const hints = [
        "✨ Trust your heart and choose what feels most magical to you! ✨",
        "🌟 There are no wrong answers, only magical discoveries! 🌟",
        "💖 Let your inner spirit guide your choice! 💖",
        "🦄 Choose the option that makes your soul sparkle! 🦄",
        "🌙 Follow the path that calls to your magical nature! 🌙"
    ];
    document.getElementById('questionHint').textContent = hints[Math.floor(Math.random() * hints.length)];
}

function createSparkleEffect(element) {
    for (let i = 0; i < 5; i++) {
        const sparkle = document.createElement('div');
        sparkle.textContent = '✨';
        sparkle.style.cssText = `
            position: absolute;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            font-size: 0.8rem;
            pointer-events: none;
            animation: sparkle-pop 0.8s ease-out forwards;
            z-index: 1000;
        `;
        element.appendChild(sparkle);
        setTimeout(() => sparkle.remove(), 800);
    }
}