// Comprehensive pool of quiz questions - randomized selection each time!
const questionPool = [
    {
        question: "What's your ideal way to spend a weekend? 🌸",
        answers: [
            { text: "Reading a book in a cozy corner with fairy lights ✨", personality: "fairy" },
            { text: "Going on an adventure in the forest 🌲", personality: "dragon" },
            { text: "Having a magical tea party with friends 🫖", personality: "unicorn" },
            { text: "Splashing around in a beautiful lagoon 🌊", personality: "mermaid" }
        ]
    },
    {
        question: "Which magical power would you choose? 🪄",
        answers: [
            { text: "The ability to make flowers bloom instantly 🌺", personality: "fairy" },
            { text: "Breathing fire and flying through clouds ☁️", personality: "dragon" },
            { text: "Healing others with a gentle touch 💖", personality: "unicorn" },
            { text: "Controlling the tides and talking to sea creatures 🐠", personality: "mermaid" }
        ]
    },
    {
        question: "What's your favorite type of music? 🎵",
        answers: [
            { text: "Soft, whimsical melodies that make you daydream 🎶", personality: "fairy" },
            { text: "Epic, powerful orchestral music 🎼", personality: "dragon" },
            { text: "Gentle, uplifting songs that warm your heart 💕", personality: "unicorn" },
            { text: "Flowing, oceanic sounds that calm your soul 🌊", personality: "mermaid" }
        ]
    },
    {
        question: "Which color palette speaks to you most? 🎨",
        answers: [
            { text: "Pastels - soft pinks, lavender, and mint green 💜", personality: "fairy" },
            { text: "Bold jewel tones - deep reds, purples, and gold ❤️", personality: "dragon" },
            { text: "Pure whites, silvers, and rainbow hues 🌈", personality: "unicorn" },
            { text: "Ocean blues, seafoam greens, and pearl whites 🤍", personality: "mermaid" }
        ]
    },
    {
        question: "What's your approach to helping others? 🤗",
        answers: [
            { text: "Offering gentle encouragement and tiny surprises 🎁", personality: "fairy" },
            { text: "Being fiercely protective and standing up for them 🛡️", personality: "dragon" },
            { text: "Providing comfort and emotional healing 🫂", personality: "unicorn" },
            { text: "Listening deeply and offering wise guidance 🧭", personality: "mermaid" }
        ]
    },
    {
        question: "Where would you build your dream home? 🏡",
        answers: [
            { text: "In a magical garden full of twinkling lights 🌟", personality: "fairy" },
            { text: "On top of a mountain with an amazing view 🏔️", personality: "dragon" },
            { text: "In a peaceful meadow surrounded by rainbows 🌈", personality: "unicorn" },
            { text: "In an underwater palace made of coral and pearls 🐚", personality: "mermaid" }
        ]
    },
    {
        question: "What's your favorite way to express creativity? 🎨",
        answers: [
            { text: "Creating tiny, delicate crafts and decorations ✂️", personality: "fairy" },
            { text: "Bold, dramatic art that makes a statement 🖼️", personality: "dragon" },
            { text: "Spreading joy through acts of kindness and beauty 🌸", personality: "unicorn" },
            { text: "Storytelling and sharing ancient wisdom 📚", personality: "mermaid" }
        ]
    },
    {
        question: "Which element feels most like home to you? 🌍",
        answers: [
            { text: "Air - light, free, and full of possibilities 🍃", personality: "fairy" },
            { text: "Fire - passionate, powerful, and transformative 🔥", personality: "dragon" },
            { text: "Earth - grounding, nurturing, and stable 🌱", personality: "unicorn" },
            { text: "Water - flowing, emotional, and mysterious 💧", personality: "mermaid" }
        ]
    },
    {
        question: "What's your ideal social gathering? 🎉",
        answers: [
            { text: "An intimate garden party with close friends 🌷", personality: "fairy" },
            { text: "A grand celebration where you're the center of attention ✨", personality: "dragon" },
            { text: "A peaceful gathering focused on meaningful connections 💕", personality: "unicorn" },
            { text: "A mystical moonlight ceremony by the water 🌙", personality: "mermaid" }
        ]
    },
    {
        question: "How do you handle challenges in life? 💪",
        answers: [
            { text: "Find creative, unexpected solutions with a touch of magic ✨", personality: "fairy" },
            { text: "Face them head-on with courage and determination 🔥", personality: "dragon" },
            { text: "Approach with patience, wisdom, and inner strength 🌟", personality: "unicorn" },
            { text: "Go with the flow and trust your intuition 🌊", personality: "mermaid" }
        ]
    },
    {
        question: "What's your dream magical accessory? ✨",
        answers: [
            { text: "A delicate wand that leaves sparkle trails 🪄", personality: "fairy" },
            { text: "A powerful crystal that amplifies inner strength 💎", personality: "dragon" },
            { text: "A healing amulet that spreads peace and love 🌟", personality: "unicorn" },
            { text: "A mystical pearl that reveals hidden truths 🔮", personality: "mermaid" }
        ]
    },
    {
        question: "Which season calls to your soul? 🍂",
        answers: [
            { text: "Spring - when everything blooms and comes alive 🌸", personality: "fairy" },
            { text: "Summer - bold, bright, and full of energy ☀️", personality: "dragon" },
            { text: "Autumn - peaceful, reflective, and beautifully transformative 🍂", personality: "unicorn" },
            { text: "Winter - mysterious, deep, and magically quiet ❄️", personality: "mermaid" }
        ]
    },
    {
        question: "What's your magical sleeping style? 😴",
        answers: [
            { text: "Curled up in a cozy nest of soft pillows and blankets 🛏️", personality: "fairy" },
            { text: "Sprawled out confidently, taking up the whole space 🔥", personality: "dragon" },
            { text: "Peacefully on your back, dreaming of rainbows 🌈", personality: "unicorn" },
            { text: "Gently swaying like floating on gentle waves 🌊", personality: "mermaid" }
        ]
    },
    {
        question: "How do you prefer to receive compliments? 💖",
        answers: [
            { text: "Whispered sweetly with a little giggle ✨", personality: "fairy" },
            { text: "Boldly declared for everyone to hear 📣", personality: "dragon" },
            { text: "Gently spoken with genuine warmth 🤗", personality: "unicorn" },
            { text: "Shared quietly in an intimate moment 💫", personality: "mermaid" }
        ]
    },
    {
        question: "What's your ideal magical pet companion? 🐾",
        answers: [
            { text: "A tiny glowing butterfly that sits on your shoulder 🦋", personality: "fairy" },
            { text: "A majestic phoenix that soars beside you 🔥", personality: "dragon" },
            { text: "A gentle deer that follows you through meadows 🦌", personality: "unicorn" },
            { text: "A wise sea turtle that swims with you 🐢", personality: "mermaid" }
        ]
    },
    {
        question: "How do you like to celebrate achievements? 🎉",
        answers: [
            { text: "A quiet celebration with sparklers and fairy cakes 🧚‍♀️", personality: "fairy" },
            { text: "A grand party with fireworks and fanfare 🎆", personality: "dragon" },
            { text: "Sharing the joy with those who helped you succeed 🤝", personality: "unicorn" },
            { text: "A peaceful reflection under the moonlight 🌙", personality: "mermaid" }
        ]
    },
    {
        question: "What's your magical morning routine? ☀️",
        answers: [
            { text: "Greet the sunrise with a twirl and flower crown 🌅", personality: "fairy" },
            { text: "Rise boldly and roar with confidence 💪", personality: "dragon" },
            { text: "Start with gentle stretches and gratitude 🧘‍♀️", personality: "unicorn" },
            { text: "Wade into cool water and meditate 🌊", personality: "mermaid" }
        ]
    },
    {
        question: "Which magical profession calls to you? 🔮",
        answers: [
            { text: "Enchanted florist creating living bouquets 🌻", personality: "fairy" },
            { text: "Royal advisor to magical kingdoms 👑", personality: "dragon" },
            { text: "Healer in a crystal sanctuary 💎", personality: "unicorn" },
            { text: "Keeper of ancient oceanic libraries 📚", personality: "mermaid" }
        ]
    },
    {
        question: "How do you handle magical secrets? 🤫",
        answers: [
            { text: "Keep them safe in a tiny locked diary ✨", personality: "fairy" },
            { text: "Guard them fiercely like precious treasure 🛡️", personality: "dragon" },
            { text: "Hold them gently in your heart with love 💝", personality: "unicorn" },
            { text: "Let them flow like messages in bottles 🍼", personality: "mermaid" }
        ]
    },
    {
        question: "What's your magical study preference? 📖",
        answers: [
            { text: "Small groups with lots of giggles and snacks 🍯", personality: "fairy" },
            { text: "Leading discussions with passion and energy ⚡", personality: "dragon" },
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
    fairy: 0,
    dragon: 0,
    unicorn: 0,
    mermaid: 0
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
    fairy: {
        title: "✨ Enchanted Fairy ✨",
        emoji: "🧚‍♀️",
        description: "You are a magical fairy with a heart full of wonder! You bring joy and sparkle wherever you go. Your gentle nature and love for beautiful, delicate things make you a beacon of light in others' lives. You find magic in the smallest moments and have a gift for making ordinary days feel extraordinary. Your creativity knows no bounds, and you're always ready to sprinkle a little fairy dust on someone's day! 🌟💖",
        zodiacSigns: ["♊ Gemini", "♎ Libra", "♒ Aquarius"],
        compatibility: {
            best: ["unicorn", "mermaid"],
            good: ["fairy"],
            challenging: ["dragon"]
        },
        creativity: [
            { icon: "🎨", title: "Miniature Art", desc: "Creating tiny, detailed masterpieces" },
            { icon: "🌸", title: "Flower Pressing", desc: "Preserving nature's beauty forever" },
            { icon: "✨", title: "Fairy Gardens", desc: "Designing magical miniature worlds" },
            { icon: "🕯️", title: "Candle Making", desc: "Crafting scented magical ambiance" }
        ],
        funFacts: [
            "🌟 Fairies are drawn to anything that sparkles and shimmers",
            "🌙 They're most active during twilight hours when magic is strongest", 
            "🍄 Fairy rings of mushrooms are their favorite gathering spots",
            "💫 They can sense emotions and always know when someone needs cheering up"
        ]
    },
    dragon: {
        title: "🔥 Majestic Dragon 🔥",
        emoji: "🐉",
        description: "You are a powerful and magnificent dragon! You're confident, brave, and not afraid to stand up for what you believe in. Your fierce loyalty and protective nature make you an incredible friend. You have natural leadership qualities and the courage to face any challenge. While you may seem intimidating at first, those who know you understand your warm heart and generous spirit. You're destined for greatness! 👑💪",
        zodiacSigns: ["♈ Aries", "♌ Leo", "♐ Sagittarius"],
        compatibility: {
            best: ["dragon", "unicorn"],
            good: ["mermaid"],
            challenging: ["fairy"]
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
    unicorn: {
        title: "🦄 Pure Unicorn 🦄",
        emoji: "🦄",
        description: "You are a beautiful, pure-hearted unicorn! Your kindness and compassion touch everyone around you. You have an incredible ability to heal hearts and bring peace to troubled souls. Your optimistic outlook and belief in magic inspire others to see the good in the world. You're graceful, gentle, and possess an inner strength that shines like a beacon of hope. You truly make the world a more magical place! 🌈💕",
        zodiacSigns: ["♉ Taurus", "♍ Virgo", "♓ Pisces"],
        compatibility: {
            best: ["fairy", "dragon"],
            good: ["unicorn"],
            challenging: ["mermaid"]
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
    mermaid: {
        title: "🧜‍♀️ Mystical Mermaid 🧜‍♀️",
        emoji: "🧜‍♀️",
        description: "You are an enchanting mermaid with depths of wisdom and mystery! You're intuitive, emotional, and deeply connected to the world around you. Your fluid nature allows you to adapt to any situation, and your ancient wisdom helps guide others through life's currents. You're a natural storyteller and keeper of secrets, with an oceanic heart that's both calm and powerful. Your mysterious charm and deep understanding make you truly captivating! 🌊✨",
        zodiacSigns: ["♋ Cancer", "♏ Scorpio", "♓ Pisces"],
        compatibility: {
            best: ["fairy", "mermaid"],
            good: ["dragon"],
            challenging: ["unicorn"]
        },
        creativity: [
            { icon: "📖", title: "Storytelling", desc: "Weaving tales of ancient wisdom" },
            { icon: "🐚", title: "Shell Crafting", desc: "Creating art from ocean treasures" },
            { icon: "🎶", title: "Siren Songs", desc: "Enchanting melodies from the deep" },
            { icon: "🔮", title: "Divination", desc: "Reading the tides of fate and future" }
        ],
        funFacts: [
            "🌊 Mermaids can communicate with all sea creatures",
            "🌙 Their powers are strongest during full moons and high tides",
            "💎 They guard ancient treasures and lost civilizations",
            "🎭 Each mermaid's song is unique, like a magical fingerprint"
        ],
        powers: [
            { icon: "🌊", name: "Tidal Control", description: "Command the ocean's movements" },
            { icon: "🐟", name: "Sea Speak", description: "Communicate with marine life" },
            { icon: "🔮", name: "Future Sight", description: "See visions in water's reflection" },
            { icon: "💧", name: "Healing Waters", description: "Purify and heal with touch" }
        ],
        spiritAnimal: {
            name: "Mystical Dolphin",
            icon: "🐬",
            description: "Your spirit guide is the wise dolphin, representing intelligence, playfulness, and deep emotional connection. Like you, dolphins are social creatures who value harmony and possess ancient wisdom about navigating life's depths."
        },
        loveLanguage: {
            name: "Deep Conversations",
            icon: "🌊",
            description: "Your magical love language flows through meaningful conversations and emotional intimacy. You connect through sharing secrets, dreams, and exploring the mysteries of the heart together."
        },
        quote: {
            text: "Like the ocean, I am deep, mysterious, and full of hidden treasures waiting to be discovered.",
            author: "The Mystical Mermaid Within"
        }
    }
};

// Add powers, spirit animals, love languages, and quotes for other personalities
personalities.fairy.powers = [
    { icon: "✨", name: "Sparkle Magic", description: "Make anything beautiful and bright" },
    { icon: "🌸", name: "Nature's Touch", description: "Help flowers bloom instantly" },
    { icon: "🧚‍♀️", name: "Size Shifting", description: "Become tiny to explore hidden worlds" },
    { icon: "💫", name: "Joy Spreading", description: "Lift spirits with pure happiness" }
];

personalities.fairy.spiritAnimal = {
    name: "Enchanted Hummingbird",
    icon: "🐦",
    description: "Your spirit guide is the delicate hummingbird, representing joy, resilience, and the ability to find sweetness in life. Like you, hummingbirds bring color and magic wherever they go, despite their small size."
};

personalities.fairy.loveLanguage = {
    name: "Thoughtful Surprises",
    icon: "🎁",
    description: "Your magical love language sparkles through small, thoughtful gestures and surprise gifts. You show love by creating magical moments and leaving little tokens of affection."
};

personalities.fairy.quote = {
    text: "I may be small, but I carry enough magic to light up the entire world with wonder and joy.",
    author: "The Enchanted Fairy Within"
};

personalities.dragon.powers = [
    { icon: "🔥", name: "Dragon Fire", description: "Create and control magical flames" },
    { icon: "👑", name: "Natural Leadership", description: "Inspire others to greatness" },
    { icon: "🛡️", name: "Protective Aura", description: "Shield loved ones from harm" },
    { icon: "💎", name: "Treasure Sense", description: "Detect true value and beauty" }
];

personalities.dragon.spiritAnimal = {
    name: "Majestic Eagle",
    icon: "🦅",
    description: "Your spirit guide is the powerful eagle, representing vision, courage, and leadership. Like you, eagles soar above challenges and see the bigger picture with clarity and strength."
};

personalities.dragon.loveLanguage = {
    name: "Acts of Protection",
    icon: "🛡️",
    description: "Your magical love language roars through fierce loyalty and protective actions. You show love by standing up for others and being their unwavering support system."
};

personalities.dragon.quote = {
    text: "I am fire and strength, wisdom and power - a guardian whose flame burns bright for those I cherish.",
    author: "The Majestic Dragon Within"
};

personalities.unicorn.powers = [
    { icon: "🌈", name: "Rainbow Creation", description: "Paint the sky with hope and beauty" },
    { icon: "💖", name: "Heart Healing", description: "Mend broken hearts and spirits" },
    { icon: "🦄", name: "Purity Aura", description: "Purify negativity with presence" },
    { icon: "✨", name: "Miracle Working", description: "Make the impossible possible through belief" }
];

personalities.unicorn.spiritAnimal = {
    name: "Graceful Swan",
    icon: "🦢",
    description: "Your spirit guide is the elegant swan, representing grace, transformation, and inner beauty. Like you, swans embody purity and have the power to transform from humble beginnings into magnificent beings."
};

personalities.unicorn.loveLanguage = {
    name: "Gentle Affirmations",
    icon: "💕",
    description: "Your magical love language glows through kind words and gentle encouragement. You show love by believing in others and helping them see their own inner light and potential."
};

personalities.unicorn.quote = {
    text: "I am pure light and endless possibility - wherever I go, I leave trails of hope and healing.",
    author: "The Pure Unicorn Within"
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
    // Show magical loading message
    showMagicalMessage("🎲 Conjuring 13 magical questions just for you... ✨", 2000);
    
    // Generate randomized questions for this quiz session
    setTimeout(() => {
        generateRandomQuestions();
        
        // Reset quiz state
        currentQuestion = 0;
        answers = [];
        personalityScores = {
            fairy: 0,
            dragon: 0,
            unicorn: 0,
            mermaid: 0
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
        fairy: 0,
        dragon: 0,
        unicorn: 0,
        mermaid: 0
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
    let resultPersonality = 'fairy';
    
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
        fairy: 'Fairy',
        dragon: 'Dragon', 
        unicorn: 'Unicorn',
        mermaid: 'Mermaid'
    };
    return names[type];
}

function shareResult() {
    const personality = calculatePersonality();
    const result = personalities[personality];
    
    if (navigator.share) {
        navigator.share({
            title: 'My Magical Creature Result!',
            text: `I just discovered I'm a ${result.title}! ✨ Take the randomized quiz to find your magical creature!`,
            url: window.location.href
        });
    } else {
        // Fallback for browsers that don't support native sharing
        const shareText = `I just discovered I'm a ${result.title}! ✨ Take the magical randomized quiz to find your creature: ${window.location.href}`;
        
        if (navigator.clipboard) {
            navigator.clipboard.writeText(shareText).then(() => {
                showShareMessage('Result copied to clipboard! Share it with your friends! 💖');
            });
        } else {
            // Final fallback
            const textArea = document.createElement('textarea');
            textArea.value = shareText;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
            showShareMessage('Result copied to clipboard! Share it with your friends! 💖');
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
        <span class="spirit-animal-icon">${result.spiritAnimal.icon}</span>
        <div class="spirit-animal-name">${result.spiritAnimal.name}</div>
        <div class="spirit-animal-desc">${result.spiritAnimal.description}</div>
    `;
}

function updateLoveLanguage(result) {
    const loveLanguage = document.getElementById('loveLanguage');
    loveLanguage.innerHTML = `
        <span class="love-language-icon">${result.loveLanguage.icon}</span>
        <div class="love-language-name">${result.loveLanguage.name}</div>
        <div class="love-language-desc">${result.loveLanguage.description}</div>
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
    
    const userName = prompt("Enter your magical name for the certificate:") || "Magical Being";
    
    certificate.innerHTML = `
        <div style="text-align: center;">
            <h1 style="color: #ff6b9d; font-size: 2.5rem; margin-bottom: 20px;">
                🏆 Certificate of Magical Identity 🏆
            </h1>
            <div style="font-size: 4rem; margin: 20px 0;">${result.emoji}</div>
            <h2 style="color: #4a5568; margin-bottom: 10px;">This certifies that</h2>
            <h1 style="color: #ff6b9d; font-size: 2rem; margin: 20px 0; font-weight: bold;">
                ${userName}
            </h1>
            <h2 style="color: #4a5568; margin-bottom: 20px;">is officially recognized as</h2>
            <h1 style="background: linear-gradient(45deg, #ff6b9d, #ffd93d, #6bcf7f); 
                       -webkit-background-clip: text; -webkit-text-fill-color: transparent; 
                       font-size: 2.2rem; margin: 20px 0; font-weight: bold;">
                ${result.title}
            </h1>
            <p style="color: #666; font-size: 1.1rem; margin: 20px 0; line-height: 1.6;">
                Possessing the magical powers of ${result.powers[0].name}, ${result.powers[1].name}, 
                and ${result.powers[2].name}, with ${result.spiritAnimal.name} as their eternal guide.
            </p>
            <div style="margin-top: 30px; display: flex; justify-content: space-between; align-items: center;">
                <div style="text-align: center;">
                    <div style="border-top: 2px solid #ff6b9d; width: 200px; margin-bottom: 5px;"></div>
                    <small style="color: #888;">Magical Council Seal</small>
                </div>
                <div style="font-size: 2rem;">🌟✨🦄✨🌟</div>
                <div style="text-align: center;">
                    <div style="border-top: 2px solid #ff6b9d; width: 200px; margin-bottom: 5px;"></div>
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
    // Reset all quiz state - new questions will be generated on next start
    currentQuestion = 0;
    answers = [];
    questions = [];
    personalityScores = {
        fairy: 0,
        dragon: 0,
        unicorn: 0,
        mermaid: 0
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

// Enhanced show question with magical effects
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
    
    // Update navigation buttons
    prevBtn.style.display = currentQuestion > 0 ? 'block' : 'none';
    nextBtn.style.display = answers[currentQuestion] !== undefined ? 'block' : 'none';
    
    // Add magical entrance animations
    questionElement.style.animation = 'fadeInDown 0.6s ease-out';
    answersElement.style.animation = 'fadeInUp 0.6s ease-out';
    
    // Update hint message
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