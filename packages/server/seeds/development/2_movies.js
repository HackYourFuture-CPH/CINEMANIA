/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('movies').del();
  await knex('movies').insert([
    {
      category_id: 8,
      title: 'The Matrix',
      description:
        'When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence.',
      movie_year: 1999,
      image_location:
        'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg',
      price: 100,
    },
    {
      category_id: 3,
      title: 'The Shawshank Redemption',
      description:
        'Over the course of several years, two convicts form a friendship, seeking consolation and, eventually, redemption through basic compassion.',
      movie_year: 1994,
      image_location:
        'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg',
      price: 80,
    },
    {
      category_id: 3,
      title: 'A Beautiful Mind',
      description:
        'After John Nash, a brilliant but asocial mathematician, accepts secret work in cryptography, his life takes a turn for the nightmarish.',
      movie_year: 2001,
      image_location:
        'https://www.themoviedb.org/t/p/w1280/zwzWCmH72OSC9NA0ipoqw5Zjya8.jpg',
      price: 90,
    },
    {
      category_id: 7,
      title: 'P.S. I Love You',
      description:
        'A young widow discovers that her late husband has left her 10 messages intended to help ease her pain and start a new life.',
      movie_year: 2007,
      image_location:
        'https://www.themoviedb.org/t/p/w1280/bZlRZKBOR6cC8L35BgGoh4hJ63F.jpg',
      price: 85,
    },
    {
      category_id: 6,
      title: 'Patch Adams',
      description:
        'The true story of a heroic man, Hunter Patch Adams, determined to become a medical doctor because he enjoys helping people. He ventured where no doctor had ventured before, using humour and pathos.',
      movie_year: 1998,
      image_location:
        'https://www.themoviedb.org/t/p/w1280/xN1aKur5ddWQSXTqvzDPJD2TCxe.jpg',
      price: 95,
    },
    {
      category_id: 3,
      title: 'I Can Only Imagine',
      description:
        'The inspiring and unknown true story behind MercyMes beloved, chart-topping song that brings ultimate hope to so many is a gripping reminder of the power of true forgiveness.',
      movie_year: 2018,
      image_location:
        'https://www.themoviedb.org/t/p/w1280/veZszwMZu8d3WMU6TJX9sV5w1Y4.jpg',
      price: 80,
    },
    {
      category_id: 6,
      title: 'Father of the Bride Collection',
      description:
        'Just when George Banks has recovered from his daughters wedding, he receives the news that shes pregnant ...and that Georges wife, Nina, is expecting too.He was planning on selling their home, but thats a plan.',
      movie_year: 1995,
      image_location:
        'https://www.themoviedb.org/t/p/w1280/nts4iOmNnq7GNicycMJ9pSAn204.jpg',
      price: 90,
    },
    {
      category_id: 1,
      title: 'Legend',
      description:
        'Suave, charming and volatile, Reggie Kray and his unstable twin brother Ronnie start to leave their mark on the London underworld in the 1960s. Using violence to get what they want, the siblings orchestrate robberies and murders.',
      movie_year: 2015,
      image_location:
        'https://www.themoviedb.org/t/p/w1280/4shf5Alq4KWCKqrAAQe0JGJHYp5.jpg',
      price: 66,
    },
    {
      category_id: 4,
      title: 'Stuart Little',
      description:
        'The adventures of a heroic and debonair stalwart mouse named Stuart Little with human qualities, who faces some comic misadventures while searching for his lost bird friend and living with a human family as their child.',
      movie_year: 1999,
      image_location:
        'https://www.themoviedb.org/t/p/w1280/jwydlxxLPVxM5uCfJybEsANzvvg.jpg',
      price: 100,
    },
    {
      category_id: 2,
      title: 'Gone Girl',
      description:
        'With his wife his disappearance having become the focus of an intense media circus, a man sees the spotlight turned on him when it is suspected that he may not be innocent.',
      movie_year: 2014,
      image_location:
        'https://www.themoviedb.org/t/p/w1280/qymaJhucquUwjpb8oiqynMeXnID.jpg',
      price: 120,
    },
    {
      category_id: 5,
      title: 'The Exorcist',
      description:
        "Ophelia, a young nun recently arriving in the town of San Ramon, is forced to perform an exorcism on a pregnant woman in danger of dying. Just when she thinks her possession has ended, she discovers that the evil presence hasn't disappeared yet",
      movie_year: 2014,
      image_location:
        'https://www.themoviedb.org/t/p/w1280/d07xtqwq1uriQ1hda6qeu8Skt5m.jpg',
      price: 666,
    },
    {
      category_id: 3,
      title: 'The Dark Knight',
      description:
        'Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the streets. The partnership proves to be effective.',
      movie_year: 2008,
      image_location:
        'https://www.themoviedb.org/t/p/w1280/z4XwvnDZSm40PCdg9vFJmo0W9ri.jpg',
      price: 120,
    },
    {
      category_id: 8,
      title: 'Interstellar',
      description:
        'The adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage.',
      movie_year: 2014,
      image_location:
        'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg',
      price: 120,
    },
    {
      category_id: 3,
      title: 'Titanic',
      description:
        '101-year-old Rose DeWitt Bukater tells the story of her life aboard the Titanic, 84 years later. A young Rose boards the ship with her mother and fiancé. Meanwhile, Jack Dawson and Fabrizio De Rossi win third-class tickets aboard the ship.',
      movie_year: 1997,
      image_location:
        'https://www.themoviedb.org/t/p/w1280/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg',
      price: 100,
    },
    {
      category_id: 10,
      title: 'The Silence of the Lambs',
      description:
        "Clarice Starling is a top student at the FBI's training academy. Jack Crawford wants Clarice to interview Dr. Hannibal Lecter, a brilliant psychiatrist who is also a violent psychopath, serving life behind bars for various acts of murder and cannibalism.",
      movie_year: 1991,
      image_location:
        'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/uS9m8OBk1A8eM9I042bx8XXpqAq.jpg',
      price: 180,
    },
    {
      category_id: 8,
      title: 'Inception',
      description:
        'A skilled thief is recruited to perform the impossible: to steal information from someone’s subconscious, by entering their dreams.',
      movie_year: 2010,
      image_location:
        'https://www.themoviedb.org/t/p/w1280/edv5CZvWj09upOsy2Y6IwDhK8bt.jpg',
      price: 150,
    },
    {
      category_id: 3,
      title: 'The Social Network',
      description:
        'Harvard student Mark Zuckerberg creates the social networking site that would become known as Facebook, but is later sued by two brothers who claimed he stole their idea.',
      movie_year: 2010,
      image_location:
        'https://www.themoviedb.org/t/p/w1280/n0ybibhJtQ5icDqTp8eRytcIHJx.jpg',
      price: 90,
    },
    {
      category_id: 3,
      title: 'The Godfather',
      description:
        'Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.',
      movie_year: 1972,
      image_location:
        'https://www.themoviedb.org/t/p/w1280/3bhkrj58Vtu7enYsRolD1fZdja1.jpg',
      price: 250,
    },
    {
      category_id: 3,
      title: 'The Godfather: Part II',
      description:
        'In the continuing saga of the Corleone crime family, a young Vito Corleone grows up in Sicily and in 1910s New York. In the 1950s, Michael Corleone attempts to expand the family business into Las Vegas, Hollywood and Cuba.',
      movie_year: 1974,
      image_location:
        'https://www.themoviedb.org/t/p/w1280/hek3koDUyRQk7FIhPXsa6mT2Zc3.jpg',
      price: 260,
    },
    {
      category_id: 1,
      title: 'The Dark Knight',
      description:
        'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
      movie_year: 2008,
      image_location:
        'https://www.themoviedb.org/t/p/w1280/1hRoyzDtpgMU7Dz4JF22RANzQO7.jpg',
      price: 300,
    },
    {
      category_id: 3,
      title: 'Forrest Gump',
      description:
        'A man with a low IQ has accomplished great things in his life and been present during significant historic events—in each case, far exceeding what anyone imagined he could do. But despite all he has achieved, his one true love eludes him.',
      movie_year: 1994,
      image_location:
        'https://www.themoviedb.org/t/p/w1280/clolk7rB5lAjs41SD0Vt6IXYLMm.jpg',
      price: 90,
    },
    {
      category_id: 5,
      title: 'Psycho',
      description:
        'A secretary is given a new position at her office and goes on a trip to deliver some money to a client. While on the trip, she decides to stay at a motel run by a seemingly nice and quiet young man named Norman Bates. But she soon discovers that nothing is as it seems.',
      movie_year: 1960,
      image_location:
        'https://www.themoviedb.org/t/p/w1280/81d8oyEFgj7FlxJqSDXWr8JH8kV.jpg',
      price: 95,
    },
    {
      category_id: 2,
      title: "Schindler's List",
      description:
        "Schindler's List is a 1993 American epic historical drama film directed and produced by Steven Spielberg. The story follows Oskar Schindler, a German industrialist who saved the lives of more than a thousand Jewish refugees during the Holocaust by employing them in his factories. The film is based on the novel Schindler's Ark by Australian novelist Thomas Keneally.",
      movie_year: 1993,
      image_location:
        'https://www.themoviedb.org/t/p/w1280/yPisjyLweCl1tbgwgtzBCNCBle.jpg',
      price: 150,
    },
    {
      category_id: 2,
      title: 'The Lord of the Rings: The Return of the King',
      description:
        'The final battle for Middle-earth begins as Frodo and Sam, led by Gollum, continue their dangerous mission toward the fires of Mount Doom in order to destroy the One Ring. Aragorn struggles to fulfill his legacy as he leads his outnumbered followers against the growing power of the Dark Lord Sauron, so that the Ring-bearer may complete his quest. Winner of 11 Academy Awards including Best Picture, Best Director and Best Adapted Screenplay.',
      movie_year: 2003,
      image_location:
        'https://www.themoviedb.org/t/p/w1280/5VTN0pR8gcqV3EPUHHfMGnJYN9L.jpg',
      price: 150,
    },
    {
      category_id: 2,
      title: 'Pulp Fiction',
      description:
        'Pulp Fiction is a stylized and quintessential film about the intertwining lives of two mob hitmen, a boxer, a gangster’s wife, and a pair of diner bandits. The movie is known for its nonlinear narrative structure and the iconic dance scene by Uma Thurman and John Travolta. With its unique blend of dark humor, violence, and pop culture references, Pulp Fiction is widely regarded as one of the greatest films ever made.',
      movie_year: 1994,
      image_location:
        'https://www.themoviedb.org/t/p/w1280/dM2w364MScsjFf8pfMbaWUcWrR.jpg',
      price: 150,
    },
    {
      category_id: 2,
      title: 'Star Wars Episode IV: A New Hope',
      description:
        "Luke Skywalker, a spirited farm boy, joins rebel forces to save Princess Leia from the evil Darth Vader, and the galaxy from the Empire's planet-destroying Death Star.",
      movie_year: 1977,
      image_location:
        'https://www.themoviedb.org/t/p/w1280/4iJfYYoQzZcONB9hNzg0J0wWyPH.jpg',
      price: 120,
    },
    {
      category_id: 2,
      title: 'Star Wars Episode V: The Empire Strikes Back',
      description:
        'After the rebels have been brutally overpowered by the Empire on their newly established base, Luke Skywalker takes advanced Jedi training with Master Yoda, while his friends are pursued by Darth Vader as part of his plan to capture Luke.',
      movie_year: 1980,
      image_location:
        'https://www.themoviedb.org/t/p/w1280/2GQGTXFgWgUoJQLCYvL9oKonR3n.jpg',
      price: 120,
    },

    {
      category_id: 2,
      title: 'Star Wars Episode VI: Return of the Jedi',
      description:
        "Luke Skywalker attempts to bring his father back to the light side of the Force, while Han Solo and Princess Leia race to save the rebel alliance from the Empire's world-destroying battle-station, the Death Star.",
      movie_year: 1983,
      image_location:
        'https://www.themoviedb.org/t/p/w1280/8qJFvU0QVXkF2b4F7ZbTtOwtd3O.jpg',
      price: 120,
    },

    {
      category_id: 2,
      title: 'Star Wars Episode I: The Phantom Menace',
      description:
        'Two Jedi Knights escape a hostile blockade to find allies and come across a young boy who may bring balance to the Force, but the long dormant Sith resurface to claim their old glory.',
      movie_year: 1999,
      image_location:
        'https://www.themoviedb.org/t/p/w1280/n8V09dDc02KsSN6Q4hC2BX6hN8X.jpg',
      price: 120,
    },

    {
      category_id: 2,
      title: 'Star Wars Episode II: Attack of the Clones',
      description:
        'Ten years after initially meeting, Anakin Skywalker shares a forbidden romance with Padmé Amidala, while Obi-Wan Kenobi investigates an assassination attempt on the senator and discovers a secret clone army crafted for the Jedi.',
      movie_year: 2002,
      image_location:
        'https://www.themoviedb.org/t/p/w1280/2vcNFtrZXNwIcBgH5e2xXCmVR8t.jpg',
      price: 120,
    },
    {
      category_id: 2,
      title: 'Star Wars: Episode III - Revenge of the Sith',
      description:
        "The Clone Wars rage on, and the rift between Anakin Skywalker and Obi-Wan Kenobi widens with the former's growing obsession with power. Anakin becomes the Sith Lord Darth Vader, while Palpatine, the evil Sith Lord, rises to power to become the Emperor, enforcing his brutal rule over the galaxy.",
      movie_year: 2005,
      image_location:
        'https://www.themoviedb.org/t/p/w1280/tgr5Pdy7ehZYBqBkN2K7Q02xgOb.jpg',
      price: 150,
    },
    {
      category_id: 2,
      title: 'Star Wars: Episode VII - The Force Awakens',
      description:
        "Three decades after the Empire's defeat, a new threat arises in the militant First Order. Stormtrooper defector Finn and the scavenger Rey are caught up in the Resistance's search for the missing Luke Skywalker, who may be the only hope for restoring peace to the galaxy.",
      movie_year: 2015,
      image_location:
        'https://www.themoviedb.org/t/p/w1280/wqnLdwVXoBjKibFRR5U3y0aDUhs.jpg',
      price: 180,
    },
    {
      category_id: 2,
      title: 'Star Wars: Episode VIII - The Last Jedi',
      description:
        'Rey develops her newly discovered abilities with the guidance of Luke Skywalker, who is unsettled by the strength of her powers. Meanwhile, the Resistance prepares for battle with the First Order.',
      movie_year: 2017,
      image_location:
        'https://www.themoviedb.org/t/p/w1280/kOVEVeg59E0wsnXmF9nrh6OmWII.jpg',
      price: 200,
    },
    {
      category_id: 2,
      title: 'Star Wars: Episode IX - The Rise of Skywalker',
      description:
        "The surviving Resistance faces the First Order once more as Rey, Finn and Poe Dameron's journey continues. With the power and knowledge of generations behind them, the final battle commences.",
      movie_year: 2019,
      image_location:
        'https://www.themoviedb.org/t/p/w1280/db32LaOibwEliAmSL2jjDF6oDdj.jpg',
      price: 220,
    },
    {
      category_id: 2,
      title: 'The Green Mile',
      description:
        'The lives of guards on Death Row are affected by one of their charges: a black man accused of child murder and rape, yet who has a mysterious gift.',
      movie_year: 1999,
      image_location:
        'https://www.themoviedb.org/t/p/w1280/velWPhVMQeQKcxggNEU8YmIo52R.jpg',
      price: 100,
    },
    {
      category_id: 4,
      title: 'Spirited Away',
      description:
        'Chihiro and her family are on their way to their new home when they stumble upon an abandoned amusement park. After her parents are turned into giant pigs, Chihiro meets the mysterious Haku, who explains that the park is a resort for supernatural beings who need a break from their earthly duties. To save her parents and escape the park, Chihiro must work at a bathhouse and overcome various obstacles while discovering the truth about herself.',
      movie_year: 2001,
      image_location:
        'https://www.themoviedb.org/t/p/w1280/oRvMaJOmapypFUcQqpgHMZA6qL9.jpg',
      price: 90,
    },
    {
      category_id: 2,
      title: "Don't Look Up",
      description:
        'Two astronomers go on a media tour to warn humankind of a comet that will destroy planet Earth.',
      movie_year: 2021,
      image_location:
        'https://www.themoviedb.org/t/p/w1280/xjyvkgY0hhsXVbcUdObP3B6OgZW.jpg',
      price: 120,
    },
    {
      category_id: 8,
      title: 'The Matrix Resurrections',
      description:
        'Neo is back and has to figure out why he has returned to the Matrix, as well as the truth about his reality.',
      movie_year: 2021,
      image_location:
        'https://www.themoviedb.org/t/p/w1280/6G9zwgCZsyrN8oUHPu7hfR0N8LC.jpg',
      price: 150,
    },
    {
      category_id: 3,
      title: 'Spider-Man: No Way Home',
      description:
        'Peter Parker teams up with his counterparts from two different universes to stop a dangerous threat.',
      movie_year: 2021,
      image_location:
        'https://www.themoviedb.org/t/p/w1280/1lF1nZV1xXx9rN4H41S6mLzoJ3V.jpg',
      price: 200,
    },
    {
      category_id: 4,
      title: 'Coda',
      description:
        'A young woman who is the only hearing member of her family dreams of becoming a singer.',
      movie_year: 2021,
      image_location:
        'https://www.themoviedb.org/t/p/w1280/jmH1Lb5R2NcB6vv7DjsOQh2Fy6R.jpg',
      price: 90,
    },
    {
      category_id: 5,
      title: 'Shang-Chi and the Legend of the Ten Rings',
      description:
        'Shang-Chi is forced to confront his past when he is drawn into the web of the mysterious Ten Rings organization.',
      movie_year: 2021,
      image_location:
        'https://www.themoviedb.org/t/p/w1280/xeItgLK9qcafxbd8kYgv7XnMEog.jpg',
      price: 180,
    },
    {
      category_id: 2,
      title: 'Parasite',
      description:
        'A poor family, the Kims, con their way into becoming the servants of a rich family, the Parks. But their easy life gets complicated when their deception is threatened with exposure.',
      movie_year: 2019,
      image_location:
        'https://www.themoviedb.org/t/p/w1280/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg',
      price: 99.99,
    },
    {
      category_id: 2,
      title: 'Whiplash',
      description:
        "A promising young drummer enrolls at a cut-throat music conservatory where his dreams of greatness are mentored by an instructor who will stop at nothing to realize a student's potential.",
      movie_year: 2014,
      image_location:
        'https://www.themoviedb.org/t/p/w1280/lIv1QinFqz4dlp5U4lQ6HaiskOZ.jpg',
      price: 149.99,
    },
    {
      category_id: 2,
      title: 'Back to the Future',
      description:
        'Marty McFly, a 17-year-old high school student, is accidentally sent thirty years into the past in a time-traveling DeLorean invented by his close friend, the eccentric scientist Doc Brown.',
      movie_year: 1985,
      image_location:
        'https://www.themoviedb.org/t/p/w1280/pTpxQB1N0waaSc3OSn0e9oc8kx9.jpg',
      price: 79.99,
    },
    {
      category_id: 6,
      title: 'The Hangover',
      description:
        'After a wild stag party in Las Vegas, three hazy groomsmen must find their missing friend and get him back to Los Angeles in time for his wedding.',
      movie_year: 2009,
      image_location:
        'https://www.themoviedb.org/t/p/w1280/3MjgDJXOz8FwNV1GJuT6mprust.jpg',
      price: 80,
    },
    {
      category_id: 6,
      title: 'Bridesmaids',
      description:
        "Competition between the maid of honor and a bridesmaid, over who is the bride's best friend, threatens to upend the life of an out-of-work pastry chef.",
      movie_year: 2011,
      image_location:
        'https://www.themoviedb.org/t/p/w1280/dYiMzKxApIOAvXNDrVmWMuzQ6pU.jpg',
      price: 75,
    },
    {
      category_id: 6,
      title: 'Superbad',
      description:
        'Two co-dependent high school seniors are forced to deal with separation anxiety after their plan to stage a booze-soaked party goes awry.',
      movie_year: 2007,
      image_location:
        'https://www.themoviedb.org/t/p/w1280/vJlHjYZqsXJbzS05bX2wYyKMQgL.jpg',
      price: 70,
    },
    {
      category_id: 5,
      title: 'Alien',
      description:
        'After a space merchant vessel perceives an unknown transmission as a distress call, its landing on the source moon finds one of the crew attacked by a mysterious lifeform, and they soon realize that its life cycle has merely begun.',
      movie_year: 1979,
      image_location:
        'https://www.themoviedb.org/t/p/w1280/vfrQk5IPloGg1v9Rzbh2Eg3VGyM.jpg',
      price: 90,
    },
    {
      category_id: 3,
      title: 'The Lion King',
      description:
        'After the murder of his father, a young lion prince flees his kingdom only to learn the true meaning of responsibility and bravery.',
      movie_year: 1994,
      image_location:
        'https://www.themoviedb.org/t/p/w1280/2xOqyQ0SL1W4yOMdH3Gw9M8vKvf.jpg',
      price: 100,
    },
    {
      category_id: 2,
      title: 'The Pianist',
      description:
        'A Polish Jewish musician struggles to survive the destruction of the Warsaw ghetto of World War II.',
      movie_year: 2002,
      image_location:
        'https://www.themoviedb.org/t/p/w1280/4nqkIUzgmXNFWDDSKpzr9p4N1EF.jpg',
      price: 95,
    },
    {
      category_id: 4,
      title: 'Psycho',
      description:
        "A Phoenix secretary embezzles $40,000 from her employer's client, goes on the run, and checks into a remote motel run by a young man under the domination of his mother.",
      movie_year: 1960,
      image_location:
        'https://www.themoviedb.org/t/p/w1280/81d8oyEFgj7FlxJqSDXWr8JH8kV.jpg',
      price: 150,
    },
    {
      category_id: 4,
      title: 'The Intouchables',
      description:
        'After he becomes a quadriplegic from a paragliding accident, an aristocrat hires a young man from the projects to be his caregiver.',
      movie_year: 2011,
      image_location:
        'https://www.themoviedb.org/t/p/w1280/4mFsNQwbndC6M1DZxO6r7wMzZwm.jpg',
      price: 120,
    },
    {
      category_id: 4,
      title: 'Cinema Paradiso',
      description:
        "A filmmaker recalls his childhood when falling in love with the pictures at the cinema of his home village and forms a deep friendship with the cinema's projectionist.",
      movie_year: 1988,
      image_location:
        'https://www.themoviedb.org/t/p/w1280/gwgJgogM7JoMmS0C0hOI2Yarp7A.jpg',
      price: 100,
    },
    {
      category_id: 2,
      title: 'Goodfellas',
      description:
        'The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners Jimmy Conway and Tommy DeVito in the Italian-American crime syndicate.',
      movie_year: 1990,
      image_location:
        'https://www.themoviedb.org/t/p/w1280/rMfZXaZ2T6N3n9tnNzIW0C6XbYZ.jpg',
      price: 120,
    },
    {
      category_id: 2,
      title: 'The Usual Suspects',
      description:
        'A sole survivor tells of the twisty events leading up to a horrific gun battle on a boat, which began when five criminals met at a seemingly random police lineup.',
      movie_year: 1995,
      image_location:
        'https://www.themoviedb.org/t/p/w1280/jgJoRWltoS17nD5MAQ1yK2Ztefw.jpg',
      price: 130,
    },
    {
      category_id: 3,
      title: 'A Star is Born',
      description:
        'A musician helps a young singer find fame as age and alcoholism send his own career into a downward spiral.',
      movie_year: 2018,
      image_location:
        'https://www.themoviedb.org/t/p/w1280/wrFpXMNBRj2PBiN4Z5kix51XaIZ.jpg',
      price: 170,
    },
    {
      category_id: 3,
      title: 'Manchester by the Sea',
      description:
        "A depressed uncle is asked to take care of his teenage nephew after the boy's father dies.",
      movie_year: 2016,
      image_location:
        'https://www.themoviedb.org/t/p/w1280/oH7lhIH1FPHhP0TJax5YlwET6T.jpg',
      price: 130,
    },
    {
      category_id: 4,
      title: 'The Lord of the Rings: The Fellowship of the Ring',
      description:
        'A young hobbit, Frodo, who has found the One Ring that belongs to the Dark Lord Sauron, begins his journey with eight companions to Mount Doom, the only place where it can be destroyed.',
      movie_year: 2001,
      image_location:
        'https://www.themoviedb.org/t/p/w1280/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg',
      price: 150,
    },
    {
      category_id: 4,
      title: 'The Hobbit: An Unexpected Journey',
      description:
        'A reluctant hobbit, Bilbo Baggins, sets out to the Lonely Mountain with a spirited group of dwarves to reclaim their mountain home and the gold within it from the dragon Smaug.',
      movie_year: 2012,
      image_location:
        'https://www.themoviedb.org/t/p/w1280/ysX7vDx2FK7M59vNS2mOxkPO5H.jpg',
      price: 130,
    },
    {
      category_id: 4,
      title: 'The Chronicles of Narnia: The Lion, the Witch and the Wardrobe',
      description:
        'Four siblings play a game of hide and seek and wind up entering a magical land. Once there, they discover a world inhabited by beasts, dwarfs, and giants and find themselves embroiled in a battle between the forces of good and evil.',
      movie_year: 2005,
      image_location:
        'https://www.themoviedb.org/t/p/w1280/rbXMHcXpMfJErPHzXDkt8HPBaye.jpg',
      price: 110,
    },
    {
      category_id: 4,
      title: "Harry Potter and the Philosopher's Stone",
      description:
        'An orphaned boy enrolls in a school of wizardry, where he learns the truth about himself, his family and the terrible evil that haunts the magical world.',
      movie_year: 2001,
      image_location:
        'https://www.themoviedb.org/t/p/w1280/wuMc08IPKEatf9rnMNXvIDxqP4W.jpg',
      price: 150,
    },
    {
      category_id: 4,
      title: 'Harry Potter and the Chamber of Secrets',
      description:
        'Harry ignores warnings not to return to Hogwarts, only to find the school plagued by a series of mysterious attacks and a strange voice haunting him.',
      movie_year: 2002,
      image_location:
        'https://www.themoviedb.org/t/p/w1280/e9rzDw4FLhvL5KRr5y2tiORPQIb.jpg',
      price: 150,
    },
    {
      category_id: 4,
      title: 'Harry Potter and the Prisoner of Azkaban',
      description:
        "It's Harry's third year at Hogwarts; not only does he have a new \"Defense Against the Dark Arts\" teacher, but there is also trouble brewing. Convicted murderer Sirius Black has escaped the Wizards' Prison and is coming after Harry.",
      movie_year: 2004,
      image_location:
        'https://www.themoviedb.org/t/p/w1280/jUFjMoLh8T2CWzHUSjKCojI5SHu.jpg',
      price: 150,
    },
    {
      category_id: 4,
      title: 'Harry Potter and the Goblet of Fire',
      description:
        'Harry finds himself mysteriously selected as an under-aged competitor in a dangerous tournament between three schools of magic.',
      movie_year: 2005,
      image_location:
        'https://www.themoviedb.org/t/p/w1280/6sASqcdrEHXxUhA3nFpjrRecPD2.jpg',
      price: 150,
    },
    {
      category_id: 4,
      title: 'Harry Potter and the Order of Phoenix',
      description:
        "With their warning about Lord Voldemort's return scoffed at, Harry and Dumbledore are targeted by the Wizard authorities as an authoritarian bureaucrat slowly seizes power at Hogwarts.",
      movie_year: 2007,
      image_location:
        'https://www.themoviedb.org/t/p/w1280/4YnLxYLHhT4UQ8i9jxAXWy46Xuw.jpg',
      price: 150,
    },
    {
      category_id: 4,
      title: 'Harry Potter and the Half-Blood Prince',
      description:
        "As Harry Potter (Daniel Radcliffe) begins his sixth year at Hogwarts, he discovers an old book marked as 'the property of the Half-Blood Prince' and begins to learn more about Lord Voldemort's (Ralph Fiennes') dark past.",
      movie_year: 2009,
      image_location:
        'https://www.themoviedb.org/t/p/w1280/bFXys2nhALwDvpkF3dP3Vvdfn8b.jpg',
      price: 150,
    },
    {
      category_id: 4,
      title: 'Harry Potter and the Deathly Hallows Part 1',
      description:
        'As Harry (Daniel Radcliffe), Ron (Rupert Grint), and Hermione (Emma Watson) race against time and evil to destroy the Horcruxes, they uncover the existence of the three most powerful objects in the wizarding world: the Deathly Hallows.',
      movie_year: 2010,
      image_location:
        'https://www.themoviedb.org/t/p/w1280/maP4MTfPCeVD2FZbKTLUgriOW4R.jpg',
      price: 150,
    },
    {
      category_id: 4,
      title: 'Harry Potter and the Deathly Hallows Part 2',
      description:
        "Harry, Ron, and Hermione search for Voldemort's remaining Horcruxes in their effort to destroy the Dark Lord as the final battle rages on at Hogwarts.",
      movie_year: 2011,
      image_location:
        'https://www.themoviedb.org/t/p/w1280/fTplI1NCSuEDP4ITLcTps739fcC.jpg',
      price: 150,
    },
    {
      category_id: 5,
      title: 'The Exorcist',
      description:
        'When a teenage girl is possessed by a mysterious entity, her mother seeks the help of two priests to save her daughter.',
      movie_year: 1973,
      image_location:
        'https://www.themoviedb.org/t/p/w1280/qW1oQyu8xgPRQ3UipYkGT70QBVz.jpg',
      price: 99,
    },
    {
      category_id: 5,
      title: 'The Shining',
      description:
        'A family heads to an isolated hotel for the winter where a sinister presence influences the father into violence, while his psychic son sees horrific forebodings from both past and future.',
      movie_year: 1980,
      image_location:
        'https://www.themoviedb.org/t/p/w1280/9fgh3Ns1iRzlQNYuJyK0ARQZU7w.jpg',
      price: 120,
    },
    {
      category_id: 5,
      title: 'A Quiet Place',
      description:
        'In a post-apocalyptic world, a family is forced to live in silence while hiding from monsters with ultra-sensitive hearing.',
      movie_year: 2018,
      image_location:
        'https://www.themoviedb.org/t/p/w1280/nAU74GmpUk7t5iklEp3bufwDq4n.jpg',
      price: 150,
    },
    {
      category_id: 5,
      title: 'Hereditary',
      description:
        'After the family matriarch passes away, a grieving family is haunted by tragic and disturbing occurrences, and begin to unravel dark secrets.',
      movie_year: 2018,
      image_location:
        'https://www.themoviedb.org/t/p/w1280/tYFOp4T9N1TY1iJtYx44z24zAoE.jpg',
      price: 130,
    },
    {
      category_id: 7,
      title: 'The Notebook',
      description:
        'A poor yet passionate young man falls in love with a rich young woman, giving her a sense of freedom, but they are soon separated because of their social differences.',
      movie_year: 2004,
      image_location:
        'https://www.themoviedb.org/t/p/w1280/kMS1zCJCvxUk7GkWUc4HkN1gwn.jpg',
      price: 85,
    },
    {
      category_id: 7,
      title: 'Titanic',
      description:
        'A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.',
      movie_year: 1997,
      image_location:
        'https://www.themoviedb.org/t/p/w1280/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg',
      price: 95,
    },
    {
      category_id: 7,
      title: 'A Walk to Remember',
      description:
        'The story of two North Carolina teens, Landon Carter and Jamie Sullivan, who are thrown together after Landon gets into trouble and is made to do community service.',
      movie_year: 2002,
      image_location:
        'https://www.themoviedb.org/t/p/w1280/iNh3BivHyg5sQRPP1KOkzguEX0H.jpg',
      price: 80,
    },
    {
      category_id: 7,
      title: 'The Fault in Our Stars',
      description:
        'Two teenage cancer patients begin a life-affirming journey to visit a reclusive author in Amsterdam.',
      movie_year: 2014,
      image_location:
        'https://www.themoviedb.org/t/p/w1280/9rP4s3V7v0pzJ7r02K1x3F9vZrK.jpg',
      price: 90,
    },
    {
      category_id: 8,
      title: 'Blade Runner',
      description:
        'A blade runner must pursue and terminate four replicants who stole a ship in space, and have returned to Earth to find their creator.',
      movie_year: 1982,
      image_location:
        'https://www.themoviedb.org/t/p/w1280/p64TtbZGCElxQHpAMWmDHkWJlH2.jpg',
      price: 120,
    },
    {
      category_id: 8,
      title: 'The Terminator',
      description:
        "A human soldier is sent from 2029 to 1984 to stop an almost indestructible cyborg killing machine, sent from the same year, which has been programmed to execute a young woman whose unborn son is the key to humanity's future salvation.",
      movie_year: 1984,
      image_location:
        'https://www.themoviedb.org/t/p/w1280/q8ffBuxQlYOHrvPniLgCbmKK4Lv.jpg',
      price: 100,
    },
    {
      category_id: 9,
      title: 'Rocky',
      description:
        'Rocky Balboa, a small-time boxer, gets a supremely rare chance to fight the heavy-weight champion, Apollo Creed, in a bout in which he strives to go the distance for his self-respect.',
      movie_year: 1976,
      image_location:
        'https://www.themoviedb.org/t/p/w1280/9ZDx4GmFTsGOv3KjZJXe6B5zkm.jpg',
      price: 110,
    },
    {
      category_id: 9,
      title: 'Remember the Titans',
      description:
        'The true story of a newly appointed African-American coach and his high school team on their first season as a racially integrated unit.',
      movie_year: 2000,
      image_location:
        'https://www.themoviedb.org/t/p/w1280/gdSPqOyOz8rUGlkqw9Rj9ACXouq.jpg',
      price: 120,
    },
    {
      category_id: 9,
      title: 'Rush',
      description:
        'The merciless 1970s rivalry between Formula One rivals James Hunt and Niki Lauda.',
      movie_year: 2013,
      image_location:
        'https://www.themoviedb.org/t/p/w1280/llbuJGILGOj0uUrsIw2wKWvvrR.jpg',
      price: 130,
    },
    {
      category_id: 10,
      title: 'The Girl on the Train',
      description:
        'A divorcee becomes entangled in a missing persons investigation that promises to send shockwaves throughout her life.',
      movie_year: 2016,
      image_location:
        'https://www.themoviedb.org/t/p/w1280/pWNBPN8ghaKtGLi69nLJvIhXl5U.jpg',
      price: 80,
    },
    {
      category_id: 10,
      title: 'The Departed',
      description:
        "To take down South Boston's Irish Mafia, the police send in one of their own to infiltrate the underworld, not realizing the syndicate has done likewise. But both sides soon discover there's a mole among them.",
      movie_year: 2006,
      image_location:
        'https://www.themoviedb.org/t/p/w1280/tGLOrLlwSbbGqhZadyAmy7JZJFp.jpg',
      price: 90,
    },
    {
      category_id: 10,
      title: 'Shutter Island',
      description:
        'Two U.S. Marshals, Teddy Daniels and Chuck Aule, are sent to an asylum on Shutter Island after investigating the disappearance of a patient there.',
      movie_year: 2010,
      image_location:
        'https://www.themoviedb.org/t/p/w1280/kxh94xSaM5s13ezpPa1yfktPmVh.jpg',
      price: 110,
    },
    {
      category_id: 10,
      title: 'Memento',
      description:
        "A man juggles searching for his wife's murderer and keeping his short-term memory loss from being an obstacle.",
      movie_year: 2000,
      image_location:
        'https://www.themoviedb.org/t/p/w1280/oM2YKgC5zQKgCdmw9sGJxnJreI6.jpg',
      price: 90,
    },
    {
      category_id: 10,
      title: 'Gone Girl',
      description:
        "With his wife's disappearance having become the focus of an intense media circus, a man sees the spotlight turned on him when it's suspected that he may not be innocent.",
      movie_year: 2014,
      image_location:
        'https://www.themoviedb.org/t/p/w1280/3moGmFKzhzPSLwRtRmJ9g1EjASL.jpg',
      price: 100,
    },
    {
      category_id: 11,
      title: 'The Girl with the Dragon Tattoo',
      description:
        'Journalist Mikael Blomkvist is aided in his search for a woman who has been missing for forty years by Lisbeth Salander, a young computer hacker.',
      movie_year: 2011,
      image_location:
        'https://www.themoviedb.org/t/p/w1280/4mFsNQwbD0F237Tx7gAPotd0nbJ.jpg',
      price: 120,
    },
    {
      category_id: 11,
      title: 'The Prestige',
      description:
        'Two stage magicians engage in competitive one-upmanship in an attempt to create the ultimate stage illusion.',
      movie_year: 2006,
      image_location:
        'https://www.themoviedb.org/t/p/w1280/6yoghtyTpznpBik8EngEmJskVUO.jpg',
      price: 130,
    },
    {
      category_id: 11,
      title: 'Prisoners',
      description:
        "When Keller Dover's daughter and her friend go missing, he takes matters into his own hands as the police pursue multiple leads and the pressure mounts. But just how far will this desperate father go to protect his family?",
      movie_year: 2013,
      image_location:
        'https://www.themoviedb.org/t/p/w1280/3bv0rJPsQ6BwcIVCJqHRrXe5u7P.jpg',
      price: 140,
    },
    {
      category_id: 11,
      title: 'The Da Vinci Code',
      description:
        'A murder inside the Louvre, and clues in Da Vinci paintings, lead to the discovery of a religious mystery protected by a secret society for two thousand years, which could shake the foundations of Christianity.',
      movie_year: 2006,
      image_location:
        'https://www.themoviedb.org/t/p/w1280/6mKAKhj8POVGqV1GsroSrYv8NxR.jpg',
      price: 130,
    },
    {
      category_id: 12,
      title: 'Saving Private Ryan',
      description:
        'During the invasion of Normandy, a group of U.S. soldiers go behind enemy lines to retrieve a paratrooper whose brothers have been killed in action.',
      movie_year: 1998,
      image_location:
        'https://www.themoviedb.org/t/p/w1280/miDoEMlYDJhOCvxlzI0wZqBs9Yt.jpg',
      price: 150,
    },
    {
      category_id: 12,
      title: 'Platoon',
      description:
        'A young recruit in Vietnam faces a moral crisis when confronted with the horrors of war and the duality of man.',
      movie_year: 1986,
      image_location:
        'https://www.themoviedb.org/t/p/w1280/6dNXnJMarsU1vrv2CJPYaGfvoVZ.jpg',
      price: 130,
    },
    {
      category_id: 12,
      title: 'Full Metal Jacket',
      description:
        'A pragmatic U.S. Marine observes the dehumanizing effects the Vietnam War has on his fellow recruits from their brutal boot camp training to the bloody street fighting in Hue.',
      movie_year: 1987,
      image_location:
        'https://www.themoviedb.org/t/p/w1280/c5VCUjQ2tnf6NwbnuxATp4qHHoA.jpg',
      price: 140,
    },
    {
      category_id: 12,
      title: 'Dunkirk',
      description:
        'Allied soldiers from Belgium, the British Empire, and France are surrounded by the German Army, and evacuated during a fierce battle in World War II.',
      movie_year: 2017,
      image_location:
        'https://www.themoviedb.org/t/p/w1280/bOXBV303Fgkzn2K4FeKDc0O31q4.jpg',
      price: 120,
    },
    {
      category_id: 12,
      title: 'The Thin Red Line',
      description:
        "Adaptation of James Jones' autobiographical 1962 novel, focusing on the conflict at Guadalcanal during the second World War.",
      movie_year: 1998,
      image_location:
        'https://www.themoviedb.org/t/p/w1280/wkHnQcICXZOFQnWQ0xIeHmnyD5Z.jpg',
      price: 110,
    },
    {
      category_id: 13,
      title: 'The Good, the Bad and the Ugly',
      description:
        'Blondie, a gunslinger, and Tuco, a bandit, are on a quest to find a hidden treasure. However, they must compete against a third party who is also looking for the treasure and is willing to kill anyone who gets in his way.',
      movie_year: 1966,
      image_location:
        'https://www.themoviedb.org/t/p/w1280/l7ShSzLXMGZQSGw495oTASf2QT.jpg',
      price: 150,
    },
    {
      category_id: 13,
      title: 'Django Unchained',
      description:
        "Django, a slave, teams up with bounty hunter Dr King Schultz to seek out the South's most wanted criminals with an aim to free Django's wife Broomhilda from the clutches of Calvin Candie, a plantation owner.",
      movie_year: 2012,
      image_location:
        'https://www.themoviedb.org/t/p/w1280/5WJnxuw41sddupf8cwOxYftuvJG.jpg',
      price: 120,
    },
    {
      category_id: 13,
      title: 'The Magnificent Seven',
      description:
        'Seven gun men in the old west gradually come together to help a poor village against savage thieves.',
      movie_year: 1960,
      image_location:
        'https://www.themoviedb.org/t/p/w1280/hNFMawyNDWZKKHU4GYCBz1krsRM.jpg',
      price: 110,
    },
    {
      category_id: 13,
      title: 'True Grit',
      description:
        "A stubborn teenager enlists the help of a tough U.S. Marshal to track down her father's murderer.",
      movie_year: 2010,
      image_location:
        'https://www.themoviedb.org/t/p/w1280/fdbwFSrQ6MYQ5jNfVyxtf10Vmou.jpg',
      price: 130,
    },
    {
      category_id: 13,
      title: 'Once Upon a Time in the West',
      description:
        'A mysterious stranger with a harmonica joins forces with a notorious desperado to protect a beautiful widow from a ruthless assassin working for the railroad.',
      movie_year: 1968,
      image_location:
        'https://www.themoviedb.org/t/p/w1280/4o1yeosjSFMaIUYvPGAhMf6SZ3U.jpg',
      price: 140,
    },
    {
      category_id: 1,
      title: 'Die Hard',
      description:
        'A New York City cop faces overwhelming odds when terrorists seize control of a Los Angeles skyscraper.',
      movie_year: 1988,
      image_location:
        'https://www.themoviedb.org/t/p/w1280/mA8Bf8KPH9v4kqqC7HnDmb4GvR.jpg',
      price: '99.99',
    },
    {
      category_id: 1,
      title: 'Terminator 2: Judgment Day',
      description:
        'A cyborg, identical to the one who failed to kill Sarah Connor, must now protect her teenage son, John Connor, from a more advanced and powerful cyborg.',
      movie_year: 1991,
      image_location:
        'https://www.themoviedb.org/t/p/w1280/yWVWiIIP4rLKKLZ8FkPlemQQd12.jpg',
      price: '99.99',
    },
    {
      category_id: 1,
      title: 'Lethal Weapon',
      description:
        'Two newly paired cops who are complete opposites must put aside their differences in order to catch a gang of drug smugglers.',
      movie_year: 1987,
      image_location:
        'https://www.themoviedb.org/t/p/w1280/tuMY1dKpF3YoY0OAXUD9rYdGTaF.jpg',
      price: '99.99',
    },
    {
      category_id: 1,
      title: 'John Wick',
      description:
        'An ex-hitman comes out of retirement to track down the gangsters that took everything from him.',
      movie_year: 2014,
      image_location:
        'https://www.themoviedb.org/t/p/w1280/wXqWR7dHncNRbxoEGybEy7QTe9h.jpg',
      price: '99.99',
    },
    {
      category_id: 1,
      title: 'Mad Max: Fury Road',
      description:
        'A woman rebels against a tyrannical ruler in postapocalyptic Australia in search for her homeland with the help of a group of female prisoners, a psychotic worshipper, and a drifter named Max.',
      movie_year: 2015,
      image_location:
        'https://www.themoviedb.org/t/p/w1280/kqjL17yufvn9OVLyXYpvtyrFfak.jpg',
      price: '99.99',
    },
  ]);
};
