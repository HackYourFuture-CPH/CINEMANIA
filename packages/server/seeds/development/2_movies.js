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
      image_location: '',
      price: 100,
    },
    {
      category_id: 3,
      title: 'The Shawshank Redemption',
      description:
        'Over the course of several years, two convicts form a friendship, seeking consolation and, eventually, redemption through basic compassion.',
      movie_year: 1994,
      image_location: '',
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
  ]);
};
