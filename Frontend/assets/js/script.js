const TMDB_IMAGE_URL = "http://image.tmdb.org/t/p/w600_and_h900_bestv2/";
const movies = [
  {
    budget: 200000000,
    genres: ["Action", "Science Fiction"],
    homepage: "https://www.godzillavskong.net",
    id: 399566,
    original_language: "English",
    overview:
      "In a time when monsters walk the Earth, humanity’s fight for its future sets Godzilla and Kong on a collision course that will see the two most powerful forces of nature on the planet collide in a spectacular battle for the ages.",
    popularity: 10755.513,
    poster_path: "/pgqgaUx1cJb5oZQQ5v0tNARCeBp.jpg",
    release_date: "2021-03-24",
    revenue: 298573106,
    runtime: 113,
    tagline: "One Will Fall",
    title: "Godzilla vs. Kong",
    vote_average: 8.4,
    vote_count: 4108,
    external_ids: {
      imdb_id: "tt5034838",
      facebook_id: "GodzillaVsKong",
      instagram_id: "godzillavskong",
      twitter_id: "GodzillavsKong",
    },
    similar: [
      { id: 15767, title: "Godzilla: Final Wars" },
      { id: 929, title: "Godzilla" },
      { id: 12636, title: "Godzilla Against MechaGodzilla" },
      { id: 18983, title: "Godzilla, King of the Monsters!" },
      { id: 315011, title: "Shin Godzilla" },
      { id: 36679, title: "Godzilla vs. King Ghidorah" },
      { id: 18289, title: "Godzilla vs. Biollante" },
      { id: 268896, title: "Pacific Rim: Uprising" },
      { id: 536115, title: "Godzilla: The Planet Eater" },
      { id: 1678, title: "Godzilla" },
      { id: 254, title: "King Kong" },
      { id: 7191, title: "Cloverfield" },
      { id: 68726, title: "Pacific Rim" },
      { id: 293167, title: "Kong: Skull Island" },
      { id: 19333, title: "Terror of Mechagodzilla" },
      { id: 26947, title: "Gamera vs. Guiron" },
      { id: 803386, title: "The Legend of King Kong" },
      { id: 19742, title: "Rodan" },
      { id: 54433, title: "Gamera: Guardian of the Universe" },
      {
        id: 39468,
        title: "Godzilla vs. Megaguirus: The G Extermination Strategy",
      },
    ],
    certification: "PG-13",
    directors: [{ id: 98631, name: "Adam Wingard" }],
    writers: [
      { id: 1706, name: "Terry Rossio" },
      { id: 11012, name: "Michael Dougherty" },
      { id: 579281, name: "Eric Pearson" },
      { id: 1080778, name: "Max Borenstein" },
      { id: 1443683, name: "Zach Shields" },
    ],
    cast: [
      { id: 28846, name: "Alexander Skarsgård" },
      { id: 1356210, name: "Millie Bobby Brown" },
      { id: 15556, name: "Rebecca Hall" },
    ],
    trailer_yt: "odM92ap8_c0",
  },
  {
    budget: 70000000,
    genres: ["Action", "Adventure", "Fantasy", "Science Fiction"],
    homepage: "https://www.hbomax.com/zacksnydersjusticeleague",
    id: 791373,
    original_language: "English",
    overview:
      "Determined to ensure Superman's ultimate sacrifice was not in vain, Bruce Wayne aligns forces with Diana Prince with plans to recruit a team of metahumans to protect the world from an approaching threat of catastrophic proportions.",
    popularity: 4066.664,
    poster_path: "/tnAuB8q5vv7Ax9UAEje5Xi4BXik.jpg",
    release_date: "2021-03-18",
    runtime: 242,
    tagline: "",
    title: "Zack Snyder's Justice League",
    vote_average: 8.6,
    vote_count: 4740,
    external_ids: {
      imdb_id: "tt12361974",
      facebook_id: "thesnydercut",
      instagram_id: "snydercut",
      twitter_id: "snydercut",
    },
    similar: [
      { id: 9738, title: "Fantastic Four" },
      { id: 246655, title: "X-Men: Apocalypse" },
      { id: 36586, title: "Blade II" },
      { id: 408647, title: "Teen Titans: The Judas Contract" },
      { id: 297556, title: "Justice League: Throne of Atlantis" },
      { id: 1924, title: "Superman" },
      { id: 9531, title: "Superman III" },
      { id: 8536, title: "Superman II" },
      { id: 251519, title: "Son of Batman" },
      { id: 1979, title: "Fantastic Four: Rise of the Silver Surfer" },
      { id: 183011, title: "Justice League: The Flashpoint Paradox" },
      { id: 1452, title: "Superman Returns" },
      { id: 166424, title: "Fantastic Four" },
      { id: 299537, title: "Captain Marvel" },
      { id: 13640, title: "Superman: Doomsday" },
      { id: 68721, title: "Iron Man 3" },
      { id: 141052, title: "Justice League" },
      { id: 10195, title: "Thor" },
      { id: 320288, title: "Dark Phoenix" },
      { id: 21683, title: "Batman: Mystery of the Batwoman" },
    ],
    certification: "R",
    directors: [{ id: 15217, name: "Zack Snyder" }],
    writers: [
      { id: 3794, name: "Bob Kane" },
      { id: 15217, name: "Zack Snyder" },
      { id: 18866, name: "Jack Kirby" },
      { id: 20007, name: "Jerry Siegel" },
      { id: 20008, name: "Joe Shuster" },
      { id: 131680, name: "Chris Terrio" },
      { id: 198034, name: "Bill Finger" },
      { id: 466391, name: "Will Beall" },
      { id: 1236448, name: "William Moulton Marston" },
      { id: 1368162, name: "Gardner Fox" },
    ],
    cast: [
      { id: 880, name: "Ben Affleck" },
      { id: 73968, name: "Henry Cavill" },
      { id: 90633, name: "Gal Gadot" },
    ],
    trailer_yt: "vM-Bja2Gy04",
  },
  {
    budget: 125000000,
    genres: ["Science Fiction", "Action", "Adventure", "Thriller"],
    homepage: "https://chaoswalking.movie",
    id: 412656,
    original_language: "English",
    overview: "Two unlikely companions embark on a perilous adventure through the badlands of an unexplored planet as they try to escape a dangerous and disorienting reality, where all inner thoughts are seen and heard by everyone.",
    popularity: 2919.395,
    poster_path: "/9kg73Mg8WJKlB9Y2SAJzeDKAnuB.jpg",
    release_date: "2021-02-24",
    runtime: 109,
    tagline: "No one escapes the noise.",
    title: "Chaos Walking",
    vote_average: 7.5,
    vote_count: 287,
    external_ids: {
      imdb_id: "tt2076822",
      facebook_id: "ChaosWalkingMovie",
      instagram_id: "chaoswalking",
      twitter_id: "ChaosWalking",
    },
    similar: [
      { id: 16437, title: "Cyborg 2" },
      { id: 333339, title: "Ready Player One" },
      { id: 14092, title: "Ghost in the Shell 2.0" },
      { id: 157350, title: "Divergent" },
      { id: 198663, title: "The Maze Runner" },
      { id: 428078, title: "Mortal Engines" },
      { id: 294254, title: "Maze Runner: The Scorch Trials" },
      { id: 500664, title: "Upgrade" },
      { id: 10134, title: "Cyborg" },
      { id: 131631, title: "The Hunger Games: Mockingjay - Part 1" },
      { id: 3509, title: "A Scanner Darkly" },
      { id: 11309, title: "Hardware" },
      { id: 11633, title: "Appleseed" },
      { id: 9739, title: "Demolition Man" },
      { id: 5550, title: "RoboCop 3" },
      { id: 9381, title: "Babylon A.D." },
      { id: 17189, title: "Battle Angel" },
      { id: 78, title: "Blade Runner" },
      { id: 5548, title: "RoboCop" },
      { id: 72710, title: "The Host" },
    ],
    certification: "PG-13",
    directors: [{ id: 11694, name: "Doug Liman" }],
    writers: [
      { id: 101814, name: "Christopher D. Ford" },
      { id: 1299057, name: "Patrick Ness" },
    ],
    cast: [
      { id: 1315036, name: "Daisy Ridley" },
      { id: 1136406, name: "Tom Holland" },
      { id: 1019, name: "Mads Mikkelsen" },
    ],
    trailer_yt: "nRf4ZgzHoVw",
  },
  {
    genres: ["Animation", "Adventure", "Fantasy", "Family", "Action"],
    homepage: "https://movies.disney.com/raya-and-the-last-dragon",
    id: 527774,
    original_language: "English",
    overview:
      "Long ago, in the fantasy world of Kumandra, humans and dragons lived together in harmony. But when an evil force threatened the land, the dragons sacrificed themselves to save humanity. Now, 500 years later, that same evil has returned and it’s up to a lone warrior, Raya, to track down the legendary last dragon to restore the fractured land and its divided people.",
    popularity: 2064.45,
    poster_path: "/lPsD10PP4rgUGiGR4CCXA6iY0QQ.jpg",
    release_date: "2021-03-03",
    revenue: 56482606,
    runtime: 107,
    tagline: "A quest to save her world.",
    title: "Raya and the Last Dragon",
    vote_average: 8.3,
    vote_count: 2176,
    external_ids: {
      imdb_id: "tt5109280",
      facebook_id: "rayaandthelastdragon",
      instagram_id: "disneyraya",
      twitter_id: "DisneyRaya",
    },
    similar: [
      { id: 140300, title: "Kung Fu Panda 3" },
      { id: 10674, title: "Mulan" },
      { id: 11360, title: "Dumbo" },
      { id: 13465, title: "The Adventures of Ichabod and Mr. Toad" },
      { id: 408, title: "Snow White and the Seven Dwarfs" },
      { id: 10895, title: "Pinocchio" },
      { id: 3170, title: "Bambi" },
      { id: 11886, title: "Robin Hood" },
      { id: 12092, title: "Alice in Wonderland" },
      { id: 146, title: "Crouching Tiger, Hidden Dragon" },
      {
        id: 263341,
        title: "Crouching Tiger, Hidden Dragon: Sword of Destiny",
      },
      { id: 756, title: "Fantasia" },
      { id: 10882, title: "Sleeping Beauty" },
      { id: 9502, title: "Kung Fu Panda" },
      { id: 49444, title: "Kung Fu Panda 2" },
      { id: 82702, title: "How to Train Your Dragon 2" },
      { id: 10191, title: "How to Train Your Dragon" },
      { id: 15854, title: "Kung Fu Panda: Secrets of the Furious Five" },
      { id: 37933, title: "Tales from Earthsea" },
      { id: 5470, title: "Beowulf" },
    ],
    certification: "PG",
    directors: [
      { id: 227439, name: "Don Hall" },
      { id: 1932178, name: "Carlos López Estrada" },
    ],
    writers: [
      { id: 227439, name: "Don Hall" },
      { id: 1117779, name: "Kiel Murray" },
      { id: 1215038, name: "Adele Lim" },
      { id: 1340669, name: "Paul Briggs" },
      { id: 1459476, name: "Dean Wellins" },
      { id: 1822324, name: "Qui Nguyen" },
      { id: 1932178, name: "Carlos López Estrada" },
      { id: 1995178, name: "John Ripa" },
      { id: 2375591, name: "Fawn Veerasunthorn" },
    ],
    cast: [
      { id: 1663195, name: "Kelly Marie Tran" },
      { id: 1625558, name: "Awkwafina" },
      { id: 2362044, name: "Izaac Wang" },
    ],
    trailer_yt: "9BPMTr-NS9s",
  },
  {
    budget: 50000000,
    genres: ["Comedy", "Family", "Animation"],
    homepage: "https://www.tomandjerrymovie.com",
    id: 587807,
    original_language: "English",
    overview:
      "Tom the cat and Jerry the mouse get kicked out of their home and relocate to a fancy New York hotel, where a scrappy employee named Kayla will lose her job if she can’t evict Jerry before a high-class wedding at the hotel. Her solution? Hiring Tom to get rid of the pesky mouse.",
    popularity: 1454.107,
    poster_path: "/6KErczPBROQty7QoIsaa6wJYXZi.jpg",
    release_date: "2021-02-11",
    revenue: 66890000,
    runtime: 101,
    tagline: "Best of enemies. Worst of friends.",
    title: "Tom & Jerry",
    vote_average: 7.3,
    vote_count: 1157,
    external_ids: {
      imdb_id: "tt1361336",
      facebook_id: "TomandJerry",
      instagram_id: "tomandjerry",
      twitter_id: "TomAndJerry",
    },
    similar: [
      { id: 420817, title: "Aladdin" },
      { id: 454626, title: "Sonic the Hedgehog" },
      { id: 6477, title: "Alvin and the Chipmunks" },
      { id: 329996, title: "Dumbo" },
      { id: 512895, title: "Lady and the Tramp" },
      { id: 55301, title: "Alvin and the Chipmunks: Chipwrecked" },
      { id: 258509, title: "Alvin and the Chipmunks: The Road Chip" },
      { id: 23398, title: "Alvin and the Chipmunks: The Squeakquel" },
      { id: 122, title: "The Lord of the Rings: The Return of the King" },
      { id: 121, title: "The Lord of the Rings: The Two Towers" },
      {
        id: 120,
        title: "The Lord of the Rings: The Fellowship of the Ring",
      },
      { id: 420814, title: "Christopher Robin" },
      { id: 381719, title: "Peter Rabbit" },
      { id: 420818, title: "The Lion King" },
      { id: 433, title: "Mary Poppins" },
      { id: 400650, title: "Mary Poppins Returns" },
      { id: 278927, title: "The Jungle Book" },
      { id: 150689, title: "Cinderella" },
      { id: 321612, title: "Beauty and the Beast" },
      { id: 15947, title: "The Three Caballeros" },
    ],
    certification: "PG",
    directors: [{ id: 20400, name: "Tim Story" }],
    writers: [
      { id: 13594, name: "Joseph Barbera" },
      { id: 13620, name: "William Hanna" },
      { id: 1640647, name: "Kevin Costello" },
    ],
    cast: [
      { id: 56734, name: "Chloë Grace Moretz" },
      { id: 454, name: "Michael Peña" },
      { id: 1226277, name: "Colin Jost" },
    ],
    trailer_yt: "kP9TfCWaQT4",
  },
  {
    budget: 40000000,
    genres: ["Crime", "Drama"],
    homepage: "https://tv.apple.com/movie/umc.cmc.40gvwq6hnbilmnxuutvmejx4r",
    id: 544401,
    original_language: "English",
    overview:
      "Cherry drifts from college dropout to army medic in Iraq - anchored only by his true love, Emily. But after returning from the war with PTSD, his life spirals into drugs and crime as he struggles to find his place in the world.",
    popularity: 1427.104,
    poster_path: "/pwDvkDyaHEU9V7cApQhbcSJMG1w.jpg",
    release_date: "2021-02-26",
    runtime: 140,
    tagline: "Life leaves a mark.",
    title: "Cherry",
    vote_average: 7.6,
    vote_count: 484,
    external_ids: { imdb_id: "tt9130508" },
    similar: [
      { id: 293767, title: "Billy Lynn's Long Halftime Walk" },
      { id: 627, title: "Trainspotting" },
      { id: 180863, title: "T2 Trainspotting" },
      { id: 592984, title: "Hillbilly Elegy" },
      { id: 414425, title: "Mudbound" },
      { id: 84892, title: "The Perks of Being a Wallflower" },
      { id: 504599, title: "Donnybrook" },
      { id: 96724, title: "Anna Karenina" },
      { id: 397837, title: "Before I Fall" },
      { id: 581, title: "Dances with Wolves" },
      { id: 465136, title: "Every Day" },
      { id: 32293, title: "The Cheetah Girls" },
      { id: 157386, title: "The Spectacular Now" },
      { id: 481848, title: "The Call of the Wild" },
      { id: 222935, title: "The Fault in Our Stars" },
      { id: 628, title: "Interview with the Vampire" },
      { id: 470044, title: "The Hate U Give" },
      { id: 424488, title: "Megan Leavey" },
      { id: 443463, title: "Leave No Trace" },
      { id: 10437, title: "The Muppet Christmas Carol" },
    ],
    certification: "R",
    directors: [
      { id: 19271, name: "Anthony Russo" },
      { id: 19272, name: "Joe Russo" },
    ],
    writers: [
      { id: 1110909, name: "Jessica Goldberg" },
      { id: 1751775, name: "Angela Russo-Otstot" },
      { id: 2114506, name: "Nico Walker" },
    ],
    cast: [
      { id: 1136406, name: "Tom Holland" },
      { id: 144216, name: "Ciara Bravo" },
      { id: 1007683, name: "Jack Reynor" },
    ],
    trailer_yt: "H5bH6O0bErk",
  },
  {
    genres: ["Animation", "Action", "Fantasy"],
    homepage: "https://www.warnerbros.com/movies/mortal-kombat-legends-scorpions-revenge",
    id: 664767,
    original_language: "English",
    overview:
      "After the vicious slaughter of his family by stone-cold mercenary Sub-Zero, Hanzo Hasashi is exiled to the torturous Netherrealm. There, in exchange for his servitude to the sinister Quan Chi, he’s given a chance to avenge his family – and is resurrected as Scorpion, a lost soul bent on revenge. Back on Earthrealm, Lord Raiden gathers a team of elite warriors – Shaolin monk Liu Kang, Special Forces officer Sonya Blade and action star Johnny Cage – an unlikely band of heroes with one chance to save humanity. To do this, they must defeat Shang Tsung’s horde of Outworld gladiators and reign over the Mortal Kombat tournament.",
    popularity: 878.696,
    poster_path: "/4VlXER3FImHeFuUjBShFamhIp9M.jpg",
    release_date: "2020-04-12",
    runtime: 80,
    tagline: "",
    title: "Mortal Kombat Legends: Scorpion's Revenge",
    vote_average: 8.4,
    vote_count: 828,
    external_ids: { imdb_id: "tt9580138" },
    similar: [
      { id: 9312, title: "Mortal Kombat" },
      { id: 9823, title: "Mortal Kombat: Annihilation" },
      { id: 345887, title: "The Equalizer 2" },
      { id: 631132, title: "Goblin Slayer: Goblin's Crown" },
      { id: 9053, title: "DOA: Dead or Alive" },
      { id: 81463, title: "Mad Foxes" },
      { id: 15357, title: "District 13: Ultimatum" },
      { id: 592867, title: "Dragon Quest: Your Story" },
      { id: 6312, title: "Brotherhood of the Wolf" },
      { id: 8456, title: "Never Back Down" },
      { id: 11835, title: "Death Sentence" },
      { id: 332411, title: "I Am Wrath" },
      { id: 445954, title: "Acts of Vengeance" },
      { id: 714338, title: "Bulbbul" },
      { id: 254473, title: "Brick Mansions" },
      { id: 421313, title: "Eliminators" },
      { id: 10045, title: "District B13" },
      { id: 68735, title: "Warcraft" },
      { id: 11713, title: "Fist of Fury" },
      { id: 36647, title: "Blade" },
    ],
    certification: "R",
    directors: [{ id: 204553, name: "Ethan Spaulding" }],
    writers: [{ id: 1674791, name: "Jeremy Adams" }],
    cast: [
      { id: 939345, name: "Patrick Seitz" },
      { id: 1231115, name: "Jordan Rodrigues" },
      { id: 53828, name: "Jennifer Carpenter" },
    ],
    trailer_yt: "I1vccr3yWBU",
  },
  {
    budget: 65000000,
    genres: ["Family", "Fantasy", "Animation", "Comedy"],
    homepage: "https://www.dreamworks.com/movies/the-croods-2",
    id: 529203,
    original_language: "English",
    overview:
      "Searching for a safer habitat, the prehistoric Crood family discovers an idyllic, walled-in paradise that meets all of its needs. Unfortunately, they must also learn to live with the Bettermans -- a family that's a couple of steps above the Croods on the evolutionary ladder. As tensions between the new neighbors start to rise, a new threat soon propels both clans on an epic adventure that forces them to embrace their differences, draw strength from one another, and survive together.",
    popularity: 907.472,
    poster_path: "/tbVZ3Sq88dZaCANlUcewQuHQOaE.jpg",
    release_date: "2020-11-25",
    revenue: 135076090,
    runtime: 95,
    tagline: "The future ain't what it used to be.",
    title: "The Croods: A New Age",
    vote_average: 7.5,
    vote_count: 1930,
    external_ids: {
      imdb_id: "tt2850386",
      facebook_id: "TheCroods",
      instagram_id: "TheCroods",
      twitter_id: "TheCroods",
    },
    similar: [
      { id: 62211, title: "Monsters University" },
      { id: 9806, title: "The Incredibles" },
      { id: 301528, title: "Toy Story 4" },
      { id: 863, title: "Toy Story 2" },
      { id: 585, title: "Monsters, Inc." },
      { id: 508442, title: "Soul" },
      { id: 10193, title: "Toy Story 3" },
      { id: 508439, title: "Onward" },
      { id: 11360, title: "Dumbo" },
      { id: 13465, title: "The Adventures of Ichabod and Mr. Toad" },
      { id: 408, title: "Snow White and the Seven Dwarfs" },
      { id: 10895, title: "Pinocchio" },
      { id: 3170, title: "Bambi" },
      { id: 11886, title: "Robin Hood" },
      { id: 12092, title: "Alice in Wonderland" },
      { id: 756, title: "Fantasia" },
      { id: 10530, title: "Pocahontas" },
      { id: 150540, title: "Inside Out" },
      { id: 62177, title: "Brave" },
      { id: 49013, title: "Cars 2" },
    ],
    certification: "PG",
    directors: [{ id: 1450348, name: "Joel Crawford" }],
    writers: [
      { id: 8930, name: "John Cleese" },
      { id: 66193, name: "Chris Sanders" },
      { id: 71267, name: "Kirk DeMicco" },
      { id: 934181, name: "Paul Fisher" },
      { id: 1003944, name: "Dan Hageman" },
      { id: 1003945, name: "Kevin Hageman" },
      { id: 1767030, name: "Bob Logan" },
    ],
    cast: [
      { id: 2963, name: "Nicolas Cage" },
      { id: 54693, name: "Emma Stone" },
      { id: 10859, name: "Ryan Reynolds" },
    ],
    trailer_yt: "GkXeVIfbJOw",
  },
  {
    genres: ["Animation", "Family"],
    id: 755812,
    original_language: "French",
    overview: "During a school field trip, Ladybug and Cat Noir meet the American superheroes, whom they have to save from an akumatised super-villain. They discover that Miraculous exist in the United States too.",
    popularity: 886.238,
    poster_path: "/kIHgjAkuzvKBnmdstpBOo4AfZah.jpg",
    release_date: "2020-09-26",
    runtime: 55,
    tagline: "NEW CITY. SAME DUTY.",
    title: "Miraculous World: New York, United HeroeZ",
    vote_average: 8.3,
    vote_count: 611,
    external_ids: { imdb_id: "tt12816348" },
    similar: [],
    certification: "NR",
    directors: [{ id: 1565301, name: "Thomas Astruc" }],
    writers: [
      { id: 1163095, name: "Sébastien Thibaudeau" },
      { id: 1565301, name: "Thomas Astruc" },
      { id: 2848194, name: "Matthieu Choquet" },
      { id: 2848195, name: "Fred Lenoir" },
    ],
    cast: [
      { id: 1762588, name: "Anouck Hautbois" },
      { id: 2952757, name: "Benjamin Boullen" },
    ],
  },
  {
    budget: 150000000,
    genres: ["Family", "Animation", "Comedy", "Drama", "Music", "Fantasy"],
    homepage: "https://movies.disney.com/soul",
    id: 508442,
    original_language: "English",
    overview:
      "Joe Gardner is a middle school teacher with a love for jazz music. After a successful gig at the Half Note Club, he suddenly gets into an accident that separates his soul from his body and is transported to the You Seminar, a center in which souls develop and gain passions before being transported to a newborn child. Joe must enlist help from the other souls-in-training, like 22, a soul who has spent eons in the You Seminar, in order to get back to Earth.",
    popularity: 631.205,
    poster_path: "/2NNebYVf8XAbJzVZTM3razRaZKA.jpg",
    release_date: "2020-12-25",
    revenue: 57400000,
    runtime: 101,
    tagline: "Is all this living really worth dying for?",
    title: "Soul",
    vote_average: 8.3,
    vote_count: 5638,
    external_ids: {
      imdb_id: "tt2948372",
      facebook_id: "pixarsoul",
      instagram_id: "pixarsoul",
      twitter_id: "PixarSoul",
    },
    similar: [
      { id: 11886, title: "Robin Hood" },
      { id: 11360, title: "Dumbo" },
      { id: 13465, title: "The Adventures of Ichabod and Mr. Toad" },
      { id: 12233, title: "Oliver & Company" },
      { id: 408, title: "Snow White and the Seven Dwarfs" },
      { id: 10895, title: "Pinocchio" },
      { id: 3170, title: "Bambi" },
      { id: 12092, title: "Alice in Wonderland" },
      { id: 756, title: "Fantasia" },
      { id: 9806, title: "The Incredibles" },
      { id: 301528, title: "Toy Story 4" },
      { id: 62211, title: "Monsters University" },
      { id: 585, title: "Monsters, Inc." },
      { id: 354912, title: "Coco" },
      { id: 508439, title: "Onward" },
      { id: 4978, title: "An American Tail" },
      { id: 10028, title: "Honey" },
      { id: 244786, title: "Whiplash" },
      { id: 10674, title: "Mulan" },
      { id: 13700, title: "Home on the Range" },
    ],
    certification: "PG",
    directors: [
      { id: 12890, name: "Pete Docter" },
      { id: 2451598, name: "Kemp Powers" },
    ],
    writers: [
      { id: 12890, name: "Pete Docter" },
      { id: 1348911, name: "Michael Yates" },
      { id: 2451598, name: "Kemp Powers" },
      { id: 2808625, name: "Mike Jones" },
    ],
    cast: [
      { id: 134, name: "Jamie Foxx" },
      { id: 56323, name: "Tina Fey" },
      { id: 4719, name: "Ahmir-Khalib Thompson" },
    ],
    trailer_yt: "xOsLIiBStEs",
  },
  {
    budget: 90000000,
    genres: ["Thriller", "Action", "Crime"],
    homepage: "https://www.badboysforlife.movie/",
    id: 38700,
    original_language: "English",
    overview:
      "Marcus and Mike are forced to confront new threats, career changes, and midlife crises as they join the newly created elite team AMMO of the Miami police department to take down the ruthless Armando Armas, the vicious leader of a Miami drug cartel.",
    popularity: 519.767,
    poster_path: "/y95lQLnuNKdPAzw9F9Ab8kJ80c3.jpg",
    release_date: "2020-01-15",
    revenue: 426505244,
    runtime: 124,
    tagline: "Ride together. Die together.",
    title: "Bad Boys for Life",
    vote_average: 7.2,
    vote_count: 6163,
    external_ids: {
      imdb_id: "tt1502397",
      facebook_id: "BadBoysMovie",
      instagram_id: "badboys",
      twitter_id: "BadBoys",
    },
    similar: [
      { id: 256731, title: "Bad Country" },
      { id: 9604, title: "Red Heat" },
      { id: 96, title: "Beverly Hills Cop II" },
      { id: 90, title: "Beverly Hills Cop" },
      { id: 357096, title: "I Spit on Your Grave III: Vengeance is Mine" },
      { id: 75780, title: "Jack Reacher" },
      { id: 11423, title: "Memories of Murder" },
      { id: 306, title: "Beverly Hills Cop III" },
      { id: 2017, title: "No Good Deed" },
      { id: 64688, title: "21 Jump Street" },
      { id: 4771, title: "Gone Baby Gone" },
      { id: 455957, title: "Domino" },
      { id: 984, title: "Dirty Harry" },
      { id: 434119, title: "Confidential Assignment" },
      { id: 1572, title: "Die Hard: With a Vengeance" },
      { id: 136795, title: "The Heat" },
      { id: 4638, title: "Hot Fuzz" },
      { id: 290250, title: "The Nice Guys" },
      { id: 807, title: "Se7en" },
      { id: 392044, title: "Murder on the Orient Express" },
    ],
    certification: "R",
    directors: [
      { id: 1399841, name: "Adil El Arbi" },
      { id: 1399842, name: "Bilall Fallah" },
    ],
    writers: [
      { id: 21792, name: "George Gallo" },
      { id: 40223, name: "Joe Carnahan" },
      { id: 225633, name: "Peter Craig" },
      { id: 1986351, name: "Chris Bremner" },
    ],
    cast: [
      { id: 2888, name: "Will Smith" },
      { id: 78029, name: "Martin Lawrence" },
      { id: 544442, name: "Paola Nuñez" },
    ],
    trailer_yt: "jKCj3XuPG8M",
  },
  {
    budget: 205000000,
    genres: ["Action", "Thriller", "Science Fiction"],
    homepage: "https://www.tenetfilm.com/",
    id: 577922,
    original_language: "English",
    overview: "Armed with only one word - Tenet - and fighting for the survival of the entire world, the Protagonist journeys through a twilight world of international espionage on a mission that will unfold in something beyond real time.",
    popularity: 522.048,
    poster_path: "/k68nPLbIST6NP96JmTxmZijEvCA.jpg",
    release_date: "2020-08-22",
    revenue: 363129000,
    runtime: 150,
    tagline: "Time runs out.",
    title: "Tenet",
    vote_average: 7.3,
    vote_count: 4955,
    external_ids: {
      imdb_id: "tt6723592",
      facebook_id: "tenetfilm",
      instagram_id: "tenetfilm",
      twitter_id: "TENETFilm",
    },
    similar: [
      { id: 27576, title: "Salt" },
      { id: 2502, title: "The Bourne Supremacy" },
      { id: 3132, title: "Bad Company" },
      { id: 11665, title: "Get Smart" },
      { id: 56288, title: "Spy Kids: All the Time in the World" },
      { id: 302699, title: "Central Intelligence" },
      { id: 4349, title: "The Kingdom" },
      { id: 37834, title: "Knight and Day" },
      { id: 36669, title: "Die Another Day" },
      { id: 59967, title: "Looper" },
      { id: 954, title: "Mission: Impossible" },
      { id: 157849, title: "A Most Wanted Man" },
      { id: 657, title: "From Russia with Love" },
      { id: 290859, title: "Terminator: Dark Fate" },
      { id: 1948, title: "Crank" },
      { id: 816, title: "Austin Powers: International Man of Mystery" },
      { id: 817, title: "Austin Powers: The Spy Who Shagged Me" },
      { id: 235704, title: "Commitment" },
      { id: 416144, title: "Hotel Mumbai" },
      { id: 49040, title: "The Bourne Legacy" },
    ],
    certification: "PG-13",
    directors: [{ id: 525, name: "Christopher Nolan" }],
    writers: [{ id: 525, name: "Christopher Nolan" }],
    cast: [
      { id: 1117313, name: "John David Washington" },
      { id: 11288, name: "Robert Pattinson" },
      { id: 1133349, name: "Elizabeth Debicki" },
    ],
    trailer_yt: "LdOM0x0XDMo",
  },
  {
    genres: ["Comedy", "Thriller", "Crime"],
    id: 609242,
    original_language: "Spanish",
    overview:
      "In 2006, a group of thieves performed what is considered one of the most famous and smart bank heists in the history of Argentina. How they robbed the Rio bank is as surprising as what happened afterwards. This is their story.",
    popularity: 491.432,
    poster_path: "/aSGwXbaTMxUhrfXT6xyZKqoklfB.jpg",
    release_date: "2020-01-16",
    runtime: 114,
    tagline: "The Story Of The Theft That Made History",
    title: "The Heist of the Century",
    vote_average: 7.9,
    vote_count: 478,
    external_ids: { imdb_id: "tt10948718" },
    similar: [],
    directors: [{ id: 567536, name: "Ariel Winograd" }],
    writers: [
      { id: 69318, name: "Alex Zito" },
      { id: 2408835, name: "Rodolfo Palacios" },
      { id: 2564217, name: "Fernando Araujo" },
    ],
    cast: [
      { id: 93650, name: "Guillermo Francella" },
      { id: 96429, name: "Diego Peretti" },
      { id: 103431, name: "Luis Luque" },
    ],
    trailer_yt: "u3rtVNSC-FU",
  },
];

// List View - index.html
const loadListView = () => {
  let movieList = "";
  movies.map((movie) => {
    movieList += `
      <div class="card">
        <div><img class="poster-image" src="${TMDB_IMAGE_URL + movie.poster_path}" alt="${movie.title}"></div>
        <div class="wrapper">
          <div class="description">
            <h2>${movie.title.length >= 29 ? movie.title.slice(0, 29) + "..." : movie.title}</h2>
            <p>${movie.tagline}</p>
          </div>
          <a href="movie.html">
            <img class="detail-view-arrow" src="assets/img/panah-kanan.png" alt="Arrow">
          </a>
        </div>
      </div>
    `;
  });

  document.querySelector(".container").innerHTML = `
    <header><h1>Popular Movies</h1></header>
    <main>${movieList}</main>
  `;
};

// Detail View - movie.html
const loadDetailView = () => {
  const movie = movies[4];

  let directors = "";
  movie.directors.map((director) => {
    directors += `
      <div class="grid-item">
        <p class="name">${director.name}</p>
        <p class="position">Directors</p>
      </div>
    `;
  });

  let writers = "";
  movie.writers.map((writer) => {
    writers += `
      <div class="grid-item">
        <p class="name">${writer.name}</p>
        <p class="position">Writers</p>
      </div>
    `;
  });

  let pemain = "";
  movie.cast.map((cast) => {
    pemain += `
      <div class="grid-item">
        <p class="name">${cast.name}</p>
        <p class="position">Casts</p>
      </div>
    `;
  });

  document.querySelector(".container").innerHTML = `
    <header>
      <a class="icon" href="index.html">
        <img src="assets/img/panah-kiri.png">
        <span>Back</span>
      </a>
      <h1 class="title">${movie.title}</h1>
    </header>
    
    <main>
      <section class="thumbnail">
        <img src="${TMDB_IMAGE_URL + movie.poster_path}" alt="${movie.title}">
        <h2 class="title"><b>${movie.title}</b> (${movie.release_date.slice(0, 4)})</h2>
        <p>${movie.certification} | ${movie.release_date} | ${movie.original_language}</p>
      </section>

      <h3 class="overview">Overview</h3>

      <section class="content">
        <p class="overview-text">${movie.overview}</p>
        <div class="grid">${directors}</div>
        <div class="grid">${writers}</div>
        <div class="grid">${pemain}</div>
      </section>
    </main>
  `;
};
