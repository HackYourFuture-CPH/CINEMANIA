/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('reviews').del();
  await knex('reviews').insert([
    {
      movie_id: 1,
      user_id: 3,
      rating: 5,
      review_text:
        'I love The Matrix! It is definitely most masterpiece movie I had ever seen. I give this masterpiece film a 10/10!',
    },
    {
      movie_id: 2,
      user_id: 3,
      rating: 5,
      review_text:
        'This movie is the go-to one for me whenever I feel down or whenever I need some sort of motivation. This movie will melt even the hardest hearts, it will always keep you engaged, for each and every second!',
    },
    {
      movie_id: 1,
      user_id: 5,
      rating: 4,
      review_text:
        'This movie is truly one of the greats it has stood the test of time in more ways than one. Overall great movie with quotable limes and memriable scenes.',
    },
    {
      id: 4,
      movie_id: 2,
      user_id: 5,
      rating: 4,
      review_text:
        'This movie is so powerful. The only problem is that it is not very realistic or historically accurate, but even with the mistakes it is definitely worth watching.',
    },
    {
      movie_id: 1,
      user_id: 1,
      rating: 3,
      review_text:
        'I quite enjoyed it, but it was strange. Keanu Reeves was brilliant as Neo, and fit the role quite well. But there a lot of unexplained things. So overall a good movie, but with a range of flaws.',
    },
    {
      movie_id: 2,
      user_id: 1,
      rating: 4,
      review_text:
        'One should must watch this flick to understand the essence of life through some rough aspects. An absolute relatable entertainer with a hope for survival.',
    },
    {
      movie_id: 1,
      user_id: 1,
      rating: 3,
      review_text:
        "A heartwarming collection of films that beautifully captures the journey of parenthood and the joyous chaos of wedding preparations. While it may not break new ground, it's a delightful watch for those seeking light-hearted family entertainment.",
    },
    {
      movie_id: 2,
      user_id: 2,
      rating: 5,
      review_text:
        'An absolute mind-bending masterpiece! The Matrix revolutionizes the sci-fi genre with its groundbreaking concept, jaw-dropping action sequences, and thought-provoking exploration of reality. A must-watch for any film enthusiast.',
    },
    {
      movie_id: 3,
      user_id: 3,
      rating: 5,
      review_text:
        'A timeless classic that captivates from start to finish. The Shawshank Redemption is an emotionally gripping tale of hope, friendship, and resilience. Stellar performances, a well-crafted narrative, and poignant themes make it an absolute must-see.',
    },
    {
      movie_id: 4,
      user_id: 4,
      rating: 4,
      review_text:
        "Legend offers a fascinating glimpse into the notorious London underworld. Tom Hardy's dual performance is truly captivating, and the film's stylish direction and dark atmosphere add to its appeal. A compelling crime drama that leaves a lasting impression.",
    },
    {
      movie_id: 5,
      user_id: 5,
      rating: 3,
      review_text:
        'A heartfelt story based on real events, I Can Only Imagine explores themes of forgiveness and the power of music. While it may not be groundbreaking, the film delivers an inspiring message and features solid performances.',
    },
    {
      movie_id: 6,
      user_id: 1,
      rating: 4,
      review_text:
        "A Beautiful Mind is a thought-provoking biographical drama that takes viewers on a rollercoaster journey through the brilliant mind of John Nash. Russell Crowe delivers a captivating performance, and the film's exploration of mental illness and the power of human connection is deeply moving.",
    },
    {
      movie_id: 7,
      user_id: 2,
      rating: 3,
      review_text:
        "Patch Adams is a heartwarming comedy-drama that celebrates the importance of laughter and compassion in healthcare. While it may be formulaic at times, Robin Williams' charismatic performance and the film's uplifting message make it an enjoyable watch.",
    },
    {
      movie_id: 8,
      user_id: 3,
      rating: 4,
      review_text:
        "P.S. I Love You is a touching romantic drama that explores the journey of love and loss. With solid performances and heartfelt moments, the film manages to strike an emotional chord. While it may not be groundbreaking, it's a satisfying watch for fans of the genre.",
    },
    {
      movie_id: 9,
      user_id: 4,
      rating: 3,
      review_text:
        "Stuart Little is a charming family film that brings the beloved mouse to life in an endearing way. While the plot may be simple, the film's lovable characters, sweet humor, and positive messages make it an enjoyable choice for a cozy movie night.",
    },
    {
      movie_id: 16,
      user_id: 5,
      rating: 5,
      review_text:
        "The Dark Knight is a monumental achievement in the superhero genre. Christopher Nolan's gripping direction, Heath Ledger's iconic portrayal of the Joker, and the film's complex themes elevate it to a whole new level. A true masterpiece that continues to captivate audiences.",
    },
    {
      movie_id: 11,
      user_id: 1,
      rating: 5,
      review_text:
        "Interstellar is a breathtaking sci-fi epic that combines stunning visuals, an emotionally charged story, and thought-provoking concepts about time and space. Christopher Nolan's visionary direction and Hans Zimmer's mesmerizing score create an immersive cinematic experience.",
    },
    {
      movie_id: 11,
      user_id: 2,
      rating: 4,
      review_text:
        "Titanic is a timeless romance that sweeps viewers away on a grand, tragic journey. The film's lavish production, compelling performances, and James Cameron's meticulous attention to detail make it an unforgettable cinematic experience. Prepare to be immersed in a tale of love and loss.",
    },
    {
      movie_id: 13,
      user_id: 3,
      rating: 4,
      review_text:
        "The Social Network is a riveting drama that delves into the creation and rise of Facebook. With Aaron Sorkin's sharp screenplay, David Fincher's stylish direction, and strong performances, the film offers a captivating exploration of ambition, friendship, and the complexities of success.",
    },
    {
      movie_id: 14,
      user_id: 4,
      rating: 5,
      review_text:
        "Inception is a mind-bending masterpiece that keeps viewers guessing until the very end. Christopher Nolan's intricate storytelling, stunning visuals, and exceptional ensemble cast create an immersive experience that challenges perceptions of reality. Prepare to be captivated by this thrilling and thought-provoking film.",
    },
    {
      movie_id: 15,
      user_id: 5,
      rating: 4,
      review_text:
        "The Silence of the Lambs is a chilling psychological thriller that has stood the test of time. With Anthony Hopkins' unforgettable performance as Hannibal Lecter and Jodie Foster's portrayal of Clarice Starling, the film delivers intense suspense and a gripping cat-and-mouse game.",
    },
    {
      movie_id: 16,
      user_id: 1,
      rating: 5,
      review_text:
        "The Godfather: Part II is a cinematic masterpiece that delves deeper into the Corleone family's saga. With outstanding performances, a gripping storyline, and Francis Ford Coppola's masterful direction, this film is a must-watch for any fan of the crime genre.",
    },
    {
      movie_id: 16,
      user_id: 2,
      rating: 5,
      review_text:
        "The Dark Knight is a monumental achievement in the superhero genre. Christopher Nolan's gripping direction, Heath Ledger's iconic portrayal of the Joker, and the film's complex themes elevate it to a whole new level. A true masterpiece that continues to captivate audiences.",
    },
    {
      movie_id: 18,
      user_id: 3,
      rating: 5,
      review_text:
        "The Godfather is an undisputed classic that set the standard for crime films. With Marlon Brando's iconic performance, Francis Ford Coppola's masterful direction, and a compelling story filled with power, loyalty, and family dynamics, this film is a timeless gem.",
    },
    {
      movie_id: 19,
      user_id: 4,
      rating: 5,
      review_text:
        "Forrest Gump is a heartwarming and captivating film that takes viewers on an extraordinary journey through history. Tom Hanks delivers an exceptional performance, and the film's blend of humor, drama, and heartfelt moments makes it an unforgettable cinematic experience.",
    },
    {
      movie_id: 20,
      user_id: 5,
      rating: 5,
      review_text:
        "Schindler's List is a hauntingly powerful film that portrays the atrocities of the Holocaust with unflinching honesty. Steven Spielberg's direction, the remarkable performances, and the film's emotional impact make it a must-see for anyone interested in history and the resilience of the human spirit.",
    },
    {
      movie_id: 20,
      user_id: 1,
      rating: 4,
      review_text:
        "Psycho is a suspenseful and iconic masterpiece that redefined the horror genre. Alfred Hitchcock's brilliant direction, Anthony Perkins' chilling performance, and the film's psychological twists and turns have made it a classic that continues to thrill audiences to this day.",
    },
    {
      movie_id: 22,
      user_id: 2,
      rating: 5,
      review_text:
        'Star Wars Episode V: The Empire Strikes Back is widely regarded as the best film in the Star Wars saga. With its epic battles, memorable characters, and iconic plot twists, this film takes viewers to a galaxy far, far away and leaves them longing for more.',
    },
    {
      movie_id: 23,
      user_id: 3,
      rating: 4,
      review_text:
        "Pulp Fiction is a Quentin Tarantino masterpiece that weaves multiple interconnected stories with style and wit. The film's non-linear narrative, memorable dialogue, and stellar ensemble cast create a unique and engrossing cinematic experience that keeps viewers hooked from start to finish.",
    },
    {
      movie_id: 24,
      user_id: 4,
      rating: 5,
      review_text:
        "The Lord of the Rings: The Return of the King is a monumental conclusion to the epic trilogy. Peter Jackson's visionary direction, breathtaking visuals, and emotional storytelling make this film a true cinematic achievement. It's a grand and satisfying conclusion that leaves a lasting impression.",
    },
    {
      movie_id: 25,
      user_id: 5,
      rating: 4,
      review_text:
        'Star Wars Episode VI: Return of the Jedi delivers a thrilling and satisfying conclusion to the original Star Wars trilogy. With its epic battles, memorable characters, and a climactic showdown between the light and dark sides of the Force, this film is a must-watch for any Star Wars fan.',
    },
    {
      movie_id: 26,
      user_id: 1,
      rating: 3,
      review_text:
        'Star Wars Episode II: Attack of the Clones is an action-packed entry in the Star Wars saga. While it has its flaws, such as a clunky romance subplot, the film still offers exciting lightsaber duels, visually stunning worlds, and key revelations that advance the overall story.',
    },
    {
      movie_id: 27,
      user_id: 2,
      rating: 4,
      review_text:
        "Star Wars Episode IV: A New Hope is a groundbreaking film that started a cultural phenomenon. George Lucas' imaginative world-building, memorable characters, and a classic hero's journey make this film a must-see for any fan of the sci-fi genre. May the Force be with you!",
    },
    {
      movie_id: 28,
      user_id: 3,
      rating: 4,
      review_text:
        "Star Wars: Episode VII - The Force Awakens successfully revitalizes the Star Wars franchise with a new generation of characters. J.J. Abrams' direction, the return of beloved characters, and a captivating story make this film a thrilling and nostalgic ride for both new and longtime fans.",
    },
    {
      movie_id: 29,
      user_id: 4,
      rating: 3,
      review_text:
        'Star Wars: Episode III - Revenge of the Sith provides a darker and more emotional chapter in the Star Wars prequel trilogy. While it has its flaws, the film delivers intense lightsaber battles, tragic character arcs, and crucial developments that bridge the gap to the original trilogy.',
    },
    {
      movie_id: 30,
      user_id: 5,
      rating: 4,
      review_text:
        "Star Wars: Episode VIII - The Last Jedi is a bold and divisive entry in the Star Wars saga. Rian Johnson's direction takes risks, subverting expectations and delving deeper into the complexities of the Force. It sparks debate and offers a fresh take on familiar themes.",
    },
    {
      movie_id: 32,
      user_id: 1,
      rating: 5,
      review_text:
        'The Green Mile is a deeply moving and powerful film that explores themes of compassion, redemption, and the human spirit. With outstanding performances, especially by Tom Hanks and Michael Clarke Duncan, this film leaves a lasting impact and reminds us of the power of empathy.',
    },
    {
      movie_id: 33,
      user_id: 2,
      rating: 5,
      review_text:
        "Spirited Away is a mesmerizing and enchanting animated masterpiece from Hayao Miyazaki. With its imaginative storytelling, breathtaking animation, and profound themes of identity and self-discovery, this film takes viewers on a magical journey they won't soon forget.",
    },
    {
      movie_id: 34,
      user_id: 3,
      rating: 4,
      review_text:
        "Don't Look Up is a satirical and thought-provoking film that cleverly critiques society's obsession with fame and the looming threats of climate change. With its star-studded cast, sharp humor, and biting social commentary, this film sparks important conversations.",
    },
    {
      movie_id: 35,
      user_id: 4,
      rating: 5,
      review_text:
        'Spider-Man: No Way Home is an exhilarating and emotionally charged superhero film that delivers on all fronts. With its thrilling action sequences, surprising plot twists, and heartfelt moments, this film is a true celebration of the Spider-Man legacy and a treat for fans.',
    },
    {
      movie_id: 36,
      user_id: 5,
      rating: 4,
      review_text:
        'Bridesmaids is a hilarious and refreshing comedy that showcases the strength of female friendships. With its talented ensemble cast, witty dialogue, and relatable moments of both chaos and heartfelt connection, this film is a laugh-out-loud delight.',
    },
    {
      movie_id: 37,
      user_id: 1,
      rating: 5,
      review_text:
        'Back to the Future is a timeless classic that seamlessly blends sci-fi, comedy, and adventure. With its iconic characters, an ingenious time-travel plot, and a sense of pure fun, this film continues to captivate audiences of all ages.',
    },
    {
      movie_id: 38,
      user_id: 2,
      rating: 4,
      review_text:
        'The Matrix Resurrections is a thrilling and mind-bending return to the beloved Matrix universe. With stunning visuals, exhilarating action sequences, and philosophical themes, this film offers a fresh take on the franchise while honoring its legacy.',
    },
    {
      movie_id: 39,
      user_id: 3,
      rating: 5,
      review_text:
        'Shang-Chi and the Legend of the Ten Rings is a groundbreaking superhero film that celebrates Asian representation and culture. With its dynamic action, compelling characters, and a captivating story, this film brings a refreshing and exciting new chapter to the Marvel Cinematic Universe.',
    },
    {
      movie_id: 40,
      user_id: 4,
      rating: 5,
      review_text:
        'Coda is a heartfelt and touching film that explores themes of family, identity, and the power of music. With its authentic performances, genuine emotions, and a story that resonates, this film is a beautiful celebration of individuality and the bonds that unite us.',
    },
    {
      movie_id: 41,
      user_id: 5,
      rating: 5,
      review_text:
        'Parasite is a masterful and thought-provoking film that delves into the complexities of class divide and social inequality. With its brilliant storytelling, stellar performances, and a perfect balance of suspense and satire, this film is a cinematic triumph that deserves every accolade.',
    },
    {
      movie_id: 42,
      user_id: 1,
      rating: 4,
      review_text:
        'Star Wars Episode I: The Phantom Menace is a visually stunning and action-packed entry in the Star Wars saga. While it has its criticisms, such as the divisive character of Jar Jar Binks, the film introduces memorable characters and lays the foundation for the epic story to come.',
    },
    {
      movie_id: 20,
      user_id: 2,
      rating: 5,
      review_text:
        "Psycho is a masterpiece of suspense and psychological horror that continues to captivate audiences decades after its release. Alfred Hitchcock's direction, coupled with Anthony Perkins' unforgettable performance, makes this film an enduring classic that set the standard for the genre.",
    },
    {
      movie_id: 44,
      user_id: 3,
      rating: 4,
      review_text:
        "Alien is a sci-fi horror classic that keeps viewers on the edge of their seats. With its atmospheric tension, groundbreaking creature design, and Sigourney Weaver's iconic portrayal of Ellen Ripley, this film remains a thrilling and influential entry in the genre.",
    },
    {
      movie_id: 45,
      user_id: 4,
      rating: 5,
      review_text:
        'Cinema Paradiso is a nostalgic and heartfelt love letter to the magic of cinema. With its beautifully crafted storytelling, charming performances, and a celebration of the power of movies to touch our lives, this film is a true gem for cinephiles and dreamers alike.',
    },
    {
      movie_id: 46,
      user_id: 1,
      rating: 5,
      review_text:
        'The Intouchables is a heartwarming and uplifting film that celebrates the power of friendship and human connection. With its touching story, brilliant performances by Omar Sy and François Cluzet, and a perfect blend of humor and emotion, this movie leaves a lasting impact and reminds us of the beauty of embracing our differences.',
    },
    {
      movie_id: 47,
      user_id: 2,
      rating: 5,
      review_text:
        "The Prestige is a mind-bending and mesmerizing film that explores the obsession and rivalry between two magicians. With its intricate plot, superb performances by Hugh Jackman and Christian Bale, and Christopher Nolan's masterful direction, this movie keeps viewers on the edge of their seats, constantly questioning what is real and what is illusion.",
    },
    {
      movie_id: 48,
      user_id: 3,
      rating: 4,
      review_text:
        "The Girl with the Dragon Tattoo is a gripping and atmospheric thriller that delves into the dark corners of human nature. With its compelling mystery, Rooney Mara's captivating portrayal of Lisbeth Salander, and David Fincher's meticulous direction, this film keeps audiences engaged and on the edge of their seats until the shocking conclusion.",
    },
    {
      movie_id: 49,
      user_id: 4,
      rating: 4,
      review_text:
        "Prisoners is a tense and gripping crime drama that explores the lengths a parent will go to protect their child. With its stellar performances by Hugh Jackman and Jake Gyllenhaal, Denis Villeneuve's atmospheric direction, and a morally complex narrative, this film keeps viewers captivated as they navigate through a web of secrets and deception.",
    },
    {
      movie_id: 50,
      user_id: 5,
      rating: 5,
      review_text:
        "Platoon is a powerful and visceral war film that offers a gritty and realistic portrayal of the Vietnam War. With its raw and intense performances, Oliver Stone's immersive direction, and a thought-provoking exploration of the moral complexities of war, this movie leaves a profound impact and stands as a testament to the sacrifices made by soldiers.",
    },
    {
      movie_id: 51,
      user_id: 1,
      rating: 3,
      review_text:
        'The Da Vinci Code is an intriguing and fast-paced thriller that combines historical puzzles with religious conspiracy. While the film has its moments of suspense and Tom Hanks delivers a solid performance, some viewers may find the plot convoluted and the pacing uneven. Nevertheless, it offers an entertaining escape into the world of secret societies and hidden codes.',
    },
    {
      movie_id: 52,
      user_id: 2,
      rating: 5,
      review_text:
        "Saving Private Ryan is a harrowing and emotionally charged war epic that portrays the horrors and sacrifices of World War II. With its stunningly realistic battle sequences, Steven Spielberg's masterful direction, and a stellar ensemble cast led by Tom Hanks, this film immerses viewers in the chaos and heroism of war, leaving a lasting impact.",
    },
    {
      movie_id: 53,
      user_id: 3,
      rating: 4,
      review_text:
        "True Grit is a gripping and visually stunning western that showcases the Coen brothers' unique storytelling style. With its strong performances, particularly by Hailee Steinfeld and Jeff Bridges, and a compelling revenge narrative set against the backdrop of the Old West, this film pays homage to the classic western genre while adding its own distinct flavor.",
    },
    {
      movie_id: 54,
      user_id: 4,
      rating: 4,
      review_text:
        "Die Hard is an action-packed and iconic film that defined the modern action genre. With Bruce Willis' charismatic performance as John McClane, thrilling set pieces, and a cleverly crafted cat-and-mouse plot, this movie delivers a satisfying blend of adrenaline-fueled excitement and memorable one-liners that have become part of cinematic history.",
    },
    {
      movie_id: 55,
      user_id: 5,
      rating: 3,
      review_text:
        'Lethal Weapon is an entertaining buddy cop film that combines action, humor, and a dynamic partnership between Mel Gibson and Danny Glover. While the film may feel dated in some aspects, it still delivers enjoyable chemistry between the lead actors, thrilling action sequences, and a touch of humor that has made it a beloved classic in the genre.',
    },
    {
      movie_id: 56,
      user_id: 1,
      rating: 4,
      review_text:
        'Harry Potter and the Half-Blood Prince delves deeper into the wizarding world, unraveling secrets and setting the stage for the final chapter. With its darker tone, captivating performances by the ensemble cast, and the exploration of love and sacrifice, this film offers a satisfying continuation of the beloved Harry Potter series, keeping fans eagerly awaiting the epic conclusion.',
    },
    {
      movie_id: 57,
      user_id: 2,
      rating: 5,
      review_text:
        "Mad Max: Fury Road is a relentless and exhilarating post-apocalyptic action film that pushes the boundaries of visual storytelling. With its breathtaking practical stunts, Charlize Theron's fierce portrayal of Furiosa, and George Miller's visionary direction, this movie is a non-stop adrenaline rush from start to finish, setting a new standard for the action genre.",
    },
    {
      movie_id: 58,
      user_id: 3,
      rating: 4,
      review_text:
        'Superbad is a hilarious and raunchy coming-of-age comedy that captures the awkwardness and camaraderie of teenage friendships. With its sharp writing, endearing performances by Jonah Hill and Michael Cera, and a blend of outrageous humor and genuine heart, this film resonates with audiences as they reminisce about their own high school experiences.',
    },
    {
      movie_id: 59,
      user_id: 4,
      rating: 5,
      review_text:
        'John Wick is an adrenaline-fueled and stylish action thriller that introduces audiences to the iconic assassin John Wick, played brilliantly by Keanu Reeves. With its slick choreography, intense fight sequences, and a captivating underworld of assassins, this film reinvigorates the action genre and establishes itself as a modern cult classic.',
    },
    {
      movie_id: 60,
      user_id: 5,
      rating: 4,
      review_text:
        "The Hobbit: An Unexpected Journey transports viewers back to the enchanting world of Middle-earth, filled with breathtaking landscapes and magical creatures. While some may find the pacing slower compared to The Lord of the Rings trilogy, this film still captures the essence of J.R.R. Tolkien's beloved novel and sets the stage for an epic adventure to come.",
    },
    {
      movie_id: 61,
      user_id: 1,
      rating: 5,
      review_text:
        "Terminator 2: Judgment Day is a groundbreaking and action-packed sci-fi film that revolutionized visual effects and storytelling. With its iconic characters, thrilling chase sequences, and James Cameron's visionary direction, this movie blends heart-pounding excitement with thought-provoking themes of humanity and the consequences of technology, cementing its status as a timeless classic.",
    },
    {
      movie_id: 62,
      user_id: 2,
      rating: 5,
      review_text:
        "Django Unchained is a gripping and bold western that tackles themes of slavery, vengeance, and justice. With Quentin Tarantino's trademark dialogue, stellar performances by Jamie Foxx, Christoph Waltz, and Leonardo DiCaprio, and a mix of intense violence and dark humor, this film is a compelling and thought-provoking exploration of a dark chapter in American history.",
    },
    {
      movie_id: 63,
      user_id: 3,
      rating: 4,
      review_text:
        "Hereditary is a chilling and psychologically disturbing horror film that explores the depths of grief, family dynamics, and the supernatural. With Toni Collette's mesmerizing performance, Ari Aster's atmospheric direction, and a slow-burn narrative that builds to shocking moments, this movie leaves a lingering sense of unease and showcases the power of effective storytelling in the horror genre.",
    },
    {
      movie_id: 64,
      user_id: 4,
      rating: 5,
      review_text:
        'Harry Potter and the Deathly Hallows Part 2 is a thrilling and emotional conclusion to the Harry Potter saga. With its epic battles, poignant character moments, and a satisfying resolution to the overarching story, this film delivers a grand finale that rewards fans for their investment in the magical world created by J.K. Rowling.',
    },
    {
      movie_id: 65,
      user_id: 5,
      rating: 4,
      review_text:
        'The Magnificent Seven is a classic western that brings together an ensemble cast of charismatic characters and delivers exhilarating gunfights and a tale of honor and justice. While the film may feel familiar in its themes and storytelling, the chemistry among the actors and the thrilling action sequences make it an enjoyable and memorable cinematic experience.',
    },
    {
      movie_id: 66,
      user_id: 1,
      rating: 4,
      review_text:
        "The Fault in Our Stars is a heartfelt and bittersweet romance that explores love, loss, and the resilience of the human spirit. With Shailene Woodley and Ansel Elgort's touching performances, the film captures the emotional journey of its characters and reminds us of the beauty and fragility of life, leaving a lasting impression on audiences.",
    },
    {
      movie_id: 67,
      user_id: 2,
      rating: 3,
      review_text:
        'The Girl on the Train is a psychological thriller with a gripping premise and an unreliable narrator at its center. While the film may not fully capture the complexity and suspense of the source material, Emily Blunt delivers a compelling performance, and the twists and turns keep viewers engaged as they unravel the mystery.',
    },
    {
      movie_id: 68,
      user_id: 3,
      rating: 5,
      review_text:
        "Once Upon a Time in the West is a mesmerizing and epic western that showcases Sergio Leone's masterful direction and Ennio Morricone's iconic score. With its sprawling landscapes, iconic characters, and a slow-burn narrative that builds tension to a satisfying climax, this film stands as a timeless masterpiece of the genre.",
    },
    {
      movie_id: 69,
      user_id: 4,
      rating: 4,
      review_text:
        "The Chronicles of Narnia: The Lion, the Witch and the Wardrobe brings C.S. Lewis' beloved fantasy world to life with its enchanting visuals and endearing characters. While the film may not fully capture the depth of the source material, it offers an enjoyable adventure that appeals to both children and adults, sparking the imagination and igniting a sense of wonder.",
    },
    {
      movie_id: 70,
      user_id: 1,
      rating: 5,
      review_text:
        "Shutter Island is a mind-bending psychological thriller that keeps you guessing until the very end. With Leonardo DiCaprio's brilliant performance and Martin Scorsese's masterful direction, the film immerses you in a world of mystery, suspense, and paranoia, leaving you questioning what is real and what is illusion.",
    },
    {
      movie_id: 71,
      user_id: 2,
      rating: 5,
      review_text:
        "Whiplash is an intense and exhilarating drama that explores the pursuit of greatness and the sacrifices one must make for their passion. With its electrifying performances, especially J.K. Simmons' mesmerizing portrayal of a ruthless music teacher, and Damien Chazelle's dynamic direction, the film hits all the right notes and leaves a lasting impact.",
    },
    {
      movie_id: 72,
      user_id: 3,
      rating: 5,
      review_text:
        "The Good, the Bad and the Ugly is a legendary western that epitomizes the genre's grit and style. With Clint Eastwood's iconic performance, Sergio Leone's visionary direction, and Ennio Morricone's iconic score, the film takes you on an epic journey through the lawless and treacherous landscapes of the Wild West, delivering unforgettable moments and a gripping tale of survival.",
    },
    {
      movie_id: 73,
      user_id: 4,
      rating: 4,
      review_text:
        'Harry Potter and the Order of the Phoenix continues the magical journey of the beloved characters with a darker and more mature tone. With its captivating storytelling, thrilling wizard duels, and the exceptional performance of Imelda Staunton as Dolores Umbridge, the film explores themes of rebellion, friendship, and the fight against oppression in the wizarding world.',
    },
    {
      movie_id: 74,
      user_id: 5,
      rating: 4,
      review_text:
        "The Hangover is a hilarious and wild comedy that takes you on a raucous adventure through the aftermath of a bachelor party gone wrong. With its outrageous situations, memorable characters, and unexpected twists, the film keeps you laughing from start to finish, reminding you that sometimes the most unforgettable nights are the ones you can't fully remember.",
    },
    {
      movie_id: 75,
      user_id: 1,
      rating: 4,
      review_text:
        'Harry Potter and the Chamber of Secrets delves deeper into the magical world created by J.K. Rowling, introducing new enchantments, mysterious creatures, and the thrilling mystery of the Chamber of Secrets. With its enchanting visuals, charming performances, and a story that balances wonder and danger, the film continues to captivate both young and old audiences.',
    },
    {
      movie_id: 76,
      user_id: 2,
      rating: 4,
      review_text:
        "The Thin Red Line is a visually stunning war film that explores the complexities of human nature and the brutality of war. With Terrence Malick's poetic direction, a star-studded cast, and breathtaking cinematography capturing the beauty and devastation of the battlefield, the film offers a meditative and thought-provoking experience that transcends the traditional war movie genre.",
    },
    {
      movie_id: 77,
      user_id: 3,
      rating: 5,
      review_text:
        "Harry Potter and the Prisoner of Azkaban takes the series in a darker and more thrilling direction, introducing new characters, time-travel twists, and the captivating storyline of Sirius Black. With Alfonso Cuarón's imaginative direction, impressive visual effects, and the stellar performances of the young cast, the film showcases the growing maturity of the franchise and leaves you eagerly anticipating what's to come.",
    },
    {
      movie_id: 78,
      user_id: 4,
      rating: 5,
      review_text:
        "Remember the Titans is an inspiring sports drama based on a true story, highlighting the power of unity, resilience, and overcoming racial divisions. With Denzel Washington's commanding performance, strong ensemble cast, and a heartfelt message, the film delivers powerful emotions and reminds us of the importance of embracing diversity and working together to achieve greatness.",
    },
    {
      movie_id: 79,
      user_id: 5,
      rating: 5,
      review_text:
        "The Lion King is a timeless animated classic that combines breathtaking animation, unforgettable music, and a poignant coming-of-age story. With its memorable characters, powerful themes of identity and responsibility, and an emotional resonance that transcends generations, the film continues to captivate and inspire audiences, solidifying its place as one of Disney's greatest achievements.",
    },
    {
      movie_id: 80,
      user_id: 1,
      rating: 5,
      review_text:
        "The Usual Suspects is a gripping and clever crime thriller that keeps you guessing until its jaw-dropping twist ending. With Kevin Spacey's mesmerizing performance, Bryan Singer's stylish direction, and a well-crafted screenplay, the film weaves a complex web of deception, loyalty, and betrayal, leaving you questioning everything you thought you knew.",
    },
    {
      movie_id: 81,
      user_id: 2,
      rating: 5,
      review_text:
        "Goodfellas is a masterful mob drama that immerses you in the gritty and brutal world of organized crime. With Martin Scorsese's kinetic direction, standout performances, and a compelling narrative based on true events, the film offers an unflinching look at the rise and fall of Henry Hill, showcasing the allure and consequences of a life led by power and violence.",
    },
    {
      movie_id: 82,
      user_id: 3,
      rating: 4,
      review_text:
        "Harry Potter and the Philosopher's Stone introduces us to the enchanting world of Hogwarts and the magical journey of Harry Potter. With its charming cast, dazzling visual effects, and a story filled with wonder and discovery, the film captures the essence of J.K. Rowling's beloved book, bringing it to life on the screen and setting the stage for the epic adventure that lies ahead.",
    },
    {
      movie_id: 83,
      user_id: 4,
      rating: 4,
      review_text:
        "Manchester by the Sea is a poignant and emotionally resonant drama that explores grief, redemption, and the complexities of human relationships. With Casey Affleck's powerful performance, Kenneth Lonergan's sensitive direction, and a screenplay that balances heartache and humor, the film delves deep into the depths of loss and reminds us of the fragile nature of life and the strength of the human spirit.",
    },
    {
      movie_id: 84,
      user_id: 5,
      rating: 4,
      review_text:
        'Harry Potter and the Deathly Hallows Part 1 marks the beginning of the epic conclusion to the Harry Potter series, delving into the darkest and most dangerous chapter of the wizarding world. With its thrilling action sequences, emotional depth, and the stellar performances of the ensemble cast, the film sets the stage for an epic showdown between good and evil, leaving fans eagerly awaiting the final installment.',
    },
    {
      movie_id: 85,
      user_id: 1,
      rating: 5,
      review_text:
        "The Shining is a haunting and atmospheric horror film that showcases Stanley Kubrick's mastery of visual storytelling. With Jack Nicholson's chilling performance, unsettling cinematography, and a sense of psychological dread that lingers long after the credits roll, the film has become a true classic, often cited as one of the greatest horror movies ever made.",
    },
    {
      movie_id: 86,
      user_id: 2,
      rating: 4,
      review_text:
        'A Quiet Place is a suspenseful and nerve-wracking thriller that takes the concept of silence to a whole new level. With its innovative premise, strong performances, and expertly crafted tension, the film keeps you on the edge of your seat, showcasing the primal instinct to protect your loved ones in a world where even the slightest sound can mean death.',
    },
    {
      movie_id: 87,
      user_id: 3,
      rating: 5,
      review_text:
        "The Lord of the Rings: The Fellowship of the Ring is a cinematic masterpiece that transports you to a world of epic adventure and fantastical wonders. With Peter Jackson's visionary direction, breathtaking landscapes, and a captivating story based on J.R.R. Tolkien's beloved novel, the film sets the stage for the grandeur and scale of the entire trilogy, leaving you yearning for more.",
    },
    {
      movie_id: 88,
      user_id: 4,
      rating: 4,
      review_text:
        "A Star is Born is a powerful and emotionally charged musical drama that explores love, fame, and the sacrifices we make for our dreams. With Bradley Cooper's impressive directorial debut, Lady Gaga's stunning performance, and a heartfelt soundtrack, the film captures the highs and lows of the music industry, delivering raw and authentic performances that resonate long after the final note.",
    },
    {
      movie_id: 89,
      user_id: 5,
      rating: 4,
      review_text:
        "The Notebook is a timeless and heartwarming love story that touches your soul. With its captivating performances by Ryan Gosling and Rachel McAdams, Nicholas Sparks' poignant storytelling, and a chemistry that sparks on screen, the film takes you on an emotional rollercoaster of love, loss, and the enduring power of true love.",
    },
    {
      movie_id: 90,
      user_id: 1,
      rating: 3,
      review_text:
        "A Walk to Remember is a sweet and sentimental coming-of-age tale that explores the transformative power of love and forgiveness. With Mandy Moore's endearing performance and a touching story that tugs at your heartstrings, the film offers moments of tenderness and nostalgia, although at times it veers into predictable territory.",
    },
    {
      movie_id: 91,
      user_id: 2,
      rating: 4,
      review_text:
        "Harry Potter and the Goblet of Fire takes the wizarding world to new heights with its thrilling Triwizard Tournament and the emergence of dark forces. With its spectacular visual effects, intense action sequences, and the growing complexity of the characters' relationships, the film marks a turning point in the series, paving the way for the epic battles yet to come.",
    },
    {
      movie_id: 92,
      user_id: 3,
      rating: 5,
      review_text:
        "The Terminator is a groundbreaking sci-fi action film that combines thrilling suspense, mind-bending time travel, and Arnold Schwarzenegger's iconic portrayal of the relentless cyborg. With James Cameron's visionary direction, pulse-pounding action sequences, and a gripping storyline that explores the dangers of technology, the film has become a cultural phenomenon and a benchmark for the genre.",
    },
    {
      movie_id: 8,
      user_id: 3,
      rating: 4,
      review_text:
        'A heartwarming story that beautifully captures the essence of love and healing. The performances were exceptional, and the emotional journey left a lasting impact.',
    },
    {
      movie_id: 54,
      user_id: 5,
      rating: 3,
      review_text:
        'An adrenaline-fueled action flick with intense sequences and a charismatic lead. While the plot may be predictable, the sheer entertainment value makes it worth watching.',
    },
    {
      movie_id: 42,
      user_id: 2,
      rating: 5,
      review_text:
        'A captivating space opera that immerses you in a galaxy far, far away. The epic battles and memorable characters make it a must-watch for any Star Wars fan.',
    },
    {
      movie_id: 66,
      user_id: 1,
      rating: 4,
      review_text:
        'A touching and emotional story that explores the complexities of life and love. The performances were remarkable, and the narrative kept me engaged from start to finish.',
    },
    {
      movie_id: 37,
      user_id: 4,
      rating: 5,
      review_text:
        'A timeless classic that combines adventure, humor, and heart. The charismatic performances and innovative storytelling make it a must-see for all ages.',
    },
    {
      movie_id: 72,
      user_id: 3,
      rating: 5,
      review_text:
        'A masterfully crafted Western that delivers gripping action and compelling characters. The cinematography and score enhance the overall experience, making it a true gem.',
    },
    {
      movie_id: 15,
      user_id: 5,
      rating: 4,
      review_text:
        'A chilling psychological thriller that keeps you on the edge of your seat. The performances, particularly by the lead actor, are outstanding, and the suspense is palpable.',
    },
    {
      movie_id: 45,
      user_id: 2,
      rating: 4,
      review_text:
        'A heartfelt and nostalgic tale of love for cinema. The film beautifully captures the magic of movies and the impact they can have on our lives.',
    },
    {
      movie_id: 64,
      user_id: 1,
      rating: 5,
      review_text:
        'An epic conclusion to the beloved Harry Potter series. The film perfectly balances action, emotion, and character development, providing a satisfying end to the journey.',
    },
    {
      movie_id: 10,
      user_id: 4,
      rating: 5,
      review_text:
        'A dark and gripping superhero film that transcends the genre. The intense performances, complex themes, and visually stunning action sequences make it a modern masterpiece.',
    },
    {
      movie_id: 29,
      user_id: 3,
      rating: 4,
      review_text:
        'A thought-provoking film that explores the complexities of human relationships and the pursuit of happiness. The performances were top-notch, and the story kept me engaged throughout.',
    },
    {
      movie_id: 57,
      user_id: 2,
      rating: 5,
      review_text:
        'A visually stunning masterpiece that takes you on an unforgettable journey. The cinematography and special effects were breathtaking, and the emotional depth of the story left a lasting impact.',
    },
    {
      movie_id: 19,
      user_id: 1,
      rating: 4,
      review_text:
        'An exhilarating action-packed thrill ride with a captivating storyline. The dynamic performances and intense sequences kept me on the edge of my seat from start to finish.',
    },
    {
      movie_id: 16,
      user_id: 5,
      rating: 3,
      review_text:
        'A lighthearted comedy that offers plenty of laughs. While the plot may be predictable, the charming characters and witty dialogue make it an enjoyable watch.',
    },
    {
      movie_id: 49,
      user_id: 4,
      rating: 5,
      review_text:
        'An emotionally charged drama that tugs at the heartstrings. The powerful performances and poignant storytelling create a truly unforgettable cinematic experience.',
    },
    {
      movie_id: 9,
      user_id: 3,
      rating: 4,
      review_text:
        'A gripping crime thriller with unexpected twists and turns. The suspenseful plot and compelling performances kept me guessing until the very end.',
    },
    {
      movie_id: 25,
      user_id: 1,
      rating: 5,
      review_text:
        'A heartwarming tale of love and friendship that will leave you with a smile. The endearing characters and genuine moments of joy make it a must-watch.',
    },
    {
      movie_id: 30,
      user_id: 2,
      rating: 3,
      review_text:
        'A visually stunning film with impressive special effects. While the story lacked depth, the action-packed sequences and stunning visuals made it an entertaining watch.',
    },
    {
      movie_id: 61,
      user_id: 5,
      rating: 4,
      review_text:
        'A captivating historical drama that sheds light on an important chapter of history. The performances were remarkable, and the film beautifully captures the spirit of the time.',
    },
    {
      movie_id: 14,
      user_id: 4,
      rating: 5,
      review_text:
        'A mind-bending sci-fi thriller that challenges your perception of reality. The intricate plot, stellar performances, and thought-provoking themes make it a must-see for genre fans.',
    },
    {
      movie_id: 11,
      user_id: 3,
      rating: 4,
      review_text:
        'A thrilling and suspenseful film that keeps you on the edge of your seat. The gripping storyline and intense performances make it a must-watch for fans of the genre.',
    },
    {
      movie_id: 34,
      user_id: 2,
      rating: 5,
      review_text:
        'An absolute masterpiece that takes you on an emotional rollercoaster. The exceptional acting and profound themes leave a lasting impact, making it a truly unforgettable experience.',
    },
    {
      movie_id: 8,
      user_id: 1,
      rating: 4,
      review_text:
        'A heartwarming and inspiring film that reminds us of the power of dreams. The stellar performances and uplifting story make it a delightful watch for all ages.',
    },
    {
      movie_id: 27,
      user_id: 5,
      rating: 3,
      review_text:
        'An action-packed adventure with stunning visual effects. While the plot may be predictable, the thrilling sequences and charismatic characters keep you entertained throughout.',
    },
    {
      movie_id: 48,
      user_id: 4,
      rating: 5,
      review_text:
        'A powerful and thought-provoking drama that explores deep human emotions. The exceptional performances and compelling narrative make it a must-see for any cinephile.',
    },
    {
      movie_id: 17,
      user_id: 3,
      rating: 4,
      review_text:
        'A hilarious comedy that will have you laughing from start to finish. The talented cast and clever jokes make it a perfect choice for a fun movie night.',
    },
    {
      movie_id: 43,
      user_id: 1,
      rating: 5,
      review_text:
        'A visually stunning film with breathtaking cinematography. The captivating story and remarkable performances make it an immersive cinematic experience.',
    },
    {
      movie_id: 28,
      user_id: 2,
      rating: 3,
      review_text:
        'A light-hearted romantic comedy with charming characters. While it may follow a familiar formula, the witty dialogue and feel-good moments make it an enjoyable watch.',
    },
    {
      movie_id: 51,
      user_id: 5,
      rating: 4,
      review_text:
        'A gripping and suspenseful thriller that keeps you guessing until the end. The intriguing plot twists and solid performances make it a must-see for fans of the genre.',
    },
    {
      movie_id: 36,
      user_id: 4,
      rating: 5,
      review_text:
        'A mesmerizing and visually stunning film that pushes the boundaries of storytelling. The innovative approach and powerful imagery create an unforgettable cinematic experience.',
    },
    {
      movie_id: 3,
      user_id: 2,
      rating: 4,
      review_text:
        'A captivating and emotionally charged film that delves into the complexities of human relationships. The stellar performances and heartfelt moments make it a must-watch for any cinema enthusiast.',
    },
    {
      movie_id: 7,
      user_id: 3,
      rating: 5,
      review_text:
        'An exhilarating and action-packed adventure that keeps you on the edge of your seat. The thrilling sequences and stunning visuals make it a true cinematic spectacle.',
    },
    {
      movie_id: 15,
      user_id: 4,
      rating: 3,
      review_text:
        'A lighthearted and entertaining comedy that brings laughter to every scene. While the plot may be predictable, the comedic timing and hilarious performances make it a delightful watch.',
    },
    {
      movie_id: 22,
      user_id: 5,
      rating: 4,
      review_text:
        'A visually stunning film that transports you to a mesmerizing world. The breathtaking cinematography and immersive storytelling make it an unforgettable cinematic experience.',
    },
    {
      movie_id: 25,
      user_id: 1,
      rating: 5,
      review_text:
        'An extraordinary and thought-provoking film that challenges societal norms. The powerful performances and profound themes make it a must-see for those seeking a thought-provoking experience.',
    },
    {
      movie_id: 30,
      user_id: 3,
      rating: 4,
      review_text:
        'A heartwarming and uplifting film that celebrates the human spirit. The inspiring story and touching performances make it a feel-good movie that leaves a lasting impact.',
    },
    {
      movie_id: 33,
      user_id: 2,
      rating: 3,
      review_text:
        'A suspenseful and gripping thriller that keeps you guessing until the final scene. The tension-filled plot and solid performances make it an engaging watch for fans of the genre.',
    },
    {
      movie_id: 40,
      user_id: 5,
      rating: 5,
      review_text:
        'An epic and breathtaking cinematic experience that takes you on a thrilling journey. The grand scale and superb storytelling make it a true masterpiece of its genre.',
    },
    {
      movie_id: 45,
      user_id: 1,
      rating: 4,
      review_text:
        'A heartwrenching and emotionally charged drama that explores the depths of human emotions. The stellar performances and compelling narrative make it a must-watch for any film lover.',
    },
    {
      movie_id: 49,
      user_id: 4,
      rating: 5,
      review_text:
        'A captivating and immersive film that transports you to a different time and place. The stunning cinematography and exceptional performances make it a cinematic gem.',
    },
    {
      movie_id: 2,
      user_id: 1,
      rating: 2,
      review_text:
        'I was highly disappointed with this film. The storyline was confusing and poorly executed. The characters felt shallow and lacked depth, making it hard to connect with them. Overall, it was a letdown and not worth the time.',
    },
    {
      movie_id: 8,
      user_id: 3,
      rating: 1,
      review_text:
        "This movie was a complete disaster. The acting was subpar, and the dialogue felt forced. The plot was unoriginal and filled with clichés. I couldn't wait for it to end. Save yourself the disappointment and skip this one.",
    },
    {
      movie_id: 14,
      user_id: 4,
      rating: 2,
      review_text:
        'I had high expectations for this film, but it fell short in every aspect. The pacing was slow, and the story lacked coherence. The characters were uninteresting, and their actions made no sense. It was a frustrating experience.',
    },
    {
      movie_id: 18,
      user_id: 5,
      rating: 1,
      review_text:
        "I regret watching this movie. It was painfully dull, and the plot was predictable from start to finish. The performances were lackluster, and I found myself disengaged throughout. I wouldn't recommend it to anyone.",
    },
    {
      movie_id: 21,
      user_id: 2,
      rating: 2,
      review_text:
        "This film was a major disappointment. The story was uninteresting, and the pacing was all over the place. The characters were poorly developed, and I couldn't find a reason to care about their journey. It was a waste of time and money.",
    },
    {
      movie_id: 26,
      user_id: 3,
      rating: 1,
      review_text:
        "I can't believe I wasted my time on this film. The plot was convoluted and made no sense. The acting was wooden, and the dialogue was cringe-worthy. It was a painful experience from beginning to end.",
    },
    {
      movie_id: 31,
      user_id: 4,
      rating: 2,
      review_text:
        'I had high hopes for this movie, but it turned out to be a disappointment. The story was uninspired, and the characters were one-dimensional. The film lacked any emotional impact, and I found myself bored throughout.',
    },
    {
      movie_id: 36,
      user_id: 1,
      rating: 1,
      review_text:
        "This movie was a complete disaster. The plot was nonsensical, and the editing was choppy. The performances were lackluster, and the visual effects were subpar. I couldn't wait for it to end.",
    },
    {
      movie_id: 42,
      user_id: 5,
      rating: 2,
      review_text:
        'I was highly disappointed with this film. The storytelling was disjointed, and the characters were uninteresting. The movie failed to engage me on any level, and I found myself checking my watch constantly.',
    },
    {
      movie_id: 47,
      user_id: 2,
      rating: 1,
      review_text:
        'This movie was a complete waste of time. The plot was confusing and poorly developed. The acting was mediocre at best, and the dialogue was cringe-worthy. I would strongly advise against watching it.',
    },
    {
      movie_id: 3,
      user_id: 4,
      rating: 1,
      review_text:
        'I had high hopes for this movie, but it turned out to be a complete disappointment. The plot was convoluted and made no sense. The acting was subpar, and the characters felt flat. Overall, it was a waste of time.',
    },
    {
      movie_id: 10,
      user_id: 2,
      rating: 2,
      review_text:
        "This film failed to live up to its potential. The storyline was weak and lacked depth. The performances were mediocre, and I found myself uninterested in the characters' journeys. It was a forgettable experience.",
    },
    {
      movie_id: 13,
      user_id: 5,
      rating: 1,
      review_text:
        "I regret watching this movie. The plot was nonsensical, and the pacing was all over the place. The acting was unconvincing, and I couldn't connect with any of the characters. It was a frustrating and confusing film.",
    },
    {
      movie_id: 19,
      user_id: 3,
      rating: 2,
      review_text:
        'I had high expectations for this film, but it fell short in every aspect. The story was uninteresting and poorly executed. The performances were lackluster, and the dialogue felt forced. It was a disappointment.',
    },
    {
      movie_id: 23,
      user_id: 1,
      rating: 1,
      review_text:
        "This movie was a complete disaster. The plot was predictable and cliché. The acting was wooden, and the characters lacked depth. I couldn't wait for it to end. Save your time and skip this one.",
    },
    {
      movie_id: 28,
      user_id: 4,
      rating: 2,
      review_text:
        'I was highly disappointed with this film. The storyline was unengaging, and the pacing was uneven. The characters were poorly developed, and their motivations were unclear. It failed to leave any impact on me.',
    },
    {
      movie_id: 32,
      user_id: 2,
      rating: 1,
      review_text:
        'This movie was a major letdown. The plot was confusing and poorly executed. The acting was subpar, and the dialogue felt forced. It lacked any originality and failed to deliver an engaging experience.',
    },
    {
      movie_id: 38,
      user_id: 5,
      rating: 2,
      review_text:
        'I had high hopes for this film, but it turned out to be a disappointment. The story felt disjointed, and the characters were uninteresting. The film failed to evoke any emotions or leave a lasting impression.',
    },
    {
      movie_id: 41,
      user_id: 3,
      rating: 1,
      review_text:
        "This movie was a complete waste of time. The plot was unoriginal and lacked depth. The performances were lackluster, and I found myself disinterested throughout. I wouldn't recommend it to anyone.",
    },
    {
      movie_id: 45,
      user_id: 1,
      rating: 2,
      review_text:
        'I was highly disappointed with this film. The story was predictable, and the characters were poorly developed. The film lacked any meaningful substance and failed to engage me on any level.',
    },
  ]);
};
