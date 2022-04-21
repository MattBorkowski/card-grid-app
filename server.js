const express = require("express");
const app = express();
const port = 4000;

function LoremIpsumGenerator(min, max) {
  const sampleText = [
    "Lorem",
    "ipsum",
    "dolor",
    "sit",
    "amet,",
    "consectetur",
    "adipiscing",
    "elit,",
    "sed",
    "do",
    "eiusmod",
    "tempor",
    "incididunt",
    "ut",
    "labore",
    "et",
    "dolore",
    "magna",
    "aliqua.",
    "In",
    "egestas",
    "erat",
    "imperdiet",
    "sed",
    "euismod.",
    "Justo",
    "nec",
    "ultrices",
    "dui",
    "sapien",
    "eget.",
    "Quis",
    "lectus",
    "nulla",
    "at",
    "volutpat",
    "diam",
    "ut",
    "venenatis.",
    "Faucibus",
    "scelerisque",
    "eleifend",
    "donec",
    "pretium",
    "vulputate",
    "sapien",
    "nec.",
    "Interdum",
    "consectetur",
    "libero",
    "id",
    "faucibus",
    "nisl.",
    "Eget",
    "duis",
    "at",
    "tellus",
    "at",
    "urna",
    "condimentum",
    "mattis",
    "pellentesque",
    "id.",
    "Et",
    "malesuada",
    "fames",
    "ac",
    "turpis",
    "egestas",
    "integer",
    "eget",
    "aliquet.",
    "Nunc",
    "sed",
    "blandit",
    "libero",
    "volutpat",
    "sed",
    "cras",
    "ornare.",
    "Ultrices",
    "sagittis",
    "orci",
    "a",
    "scelerisque",
    "purus",
    "semper",
    "eget",
    "duis.",
    "Donec",
    "pretium",
    "vulputate",
    "sapien",
    "nec",
    "sagittis",
    "aliquam",
    "malesuada.",
    "Tellus",
    "orci",
    "ac",
    "auctor",
    "augue",
    "mauris.",
    "Nisi",
    "porta",
    "lorem",
    "mollis",
    "aliquam",
    "ut",
    "porttitor.",
    "Ultrices",
    "vitae",
    "auctor",
    "eu",
    "augue",
    "ut.",
    "Sed",
    "risus",
    "pretium",
    "quam",
    "vulputate",
    "dignissim",
    "suspendisse",
    "in.",
    "In",
    "nibh",
    "mauris",
    "cursus",
    "mattis",
    "molestie",
    "a",
    "iaculis",
    "at",
    "erat.",
  ];
  return sampleText.slice(0, Math.random() * (max - min) + min).join(" ");
}

function ImageSelector() {
  const images = [
    {
      url: "https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb_4x3.jpg",
      alt: "Puppy close to screen",
    },
    {
      url: "https://hips.hearstapps.com/hmg-prod/images/domestic-cat-lies-in-a-basket-with-a-knitted-royalty-free-image-1592337336.jpg",
      alt: "Cat laying on couch",
    },
    {
      url: "https://cdn.britannica.com/91/173391-131-E2106C95/macaw-Quantana-Roo-Mexico.jpg",
      alt: "Parrot on a branch",
    },
    {
      url: "https://images.unsplash.com/photo-1535591273668-578e31182c4f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjM2NTI5fQ",
      alt: "Clownfish in reef",
    },
    {
      url: " https://static.toiimg.com/thumb/msid-70428261,width-1200,height-900,resizemode-4/.jpg",
      alt: "Tiger with cub",
    },
  ];
  return images[Math.floor(Math.random() * (5 - 0))];
}

function retrieveCards(req, res) {
  try {
    console.log("retrieving card details");
    let cards = [...Array(50)];
    cards = cards.map((card, index) => {
      return {
        id: index + 1,
        title: LoremIpsumGenerator(2, 10),
        description: LoremIpsumGenerator(15, 75),
        image: ImageSelector(),
      };
    });
    console.log("retrieved card details");
    return res.send(cards);
  } catch (error) {
    console.error('There was an error retrieving card info', error);
    res.status(500).json("There was an issue getting card details, please try again later");
  }
}
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  next();
});
app.get("/cards", retrieveCards);
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
