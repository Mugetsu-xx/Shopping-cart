var Product = require("../models/product");
var mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://qwerty:pranav1234@cluster0-3szaz.mongodb.net/test?retryWrites=true&w=majority",
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongDB Connected on port 3000"))
  .catch((err) => console.log(err));

var products = [
  new Product({
    imagePath: "https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png",
    title: "Gothic Video Game",
    description: "Buy it at ur own risk!!",
    price: 1000,
  }),
  new Product({
    imagePath:
      "https://upload.wikimedia.org/wikipedia/en/thumb/5/51/Minecraft_cover.png/220px-Minecraft_cover.png",
    title: "Minecraft Video Game",
    description: "Buy it at ur own risk!!",
    price: 2000,
  }),
  new Product({
    imagePath:
      "https://upload.wikimedia.org/wikipedia/en/thumb/c/c6/Far_Cry_3_PAL_box_art.jpg/220px-Far_Cry_3_PAL_box_art.jpg",
    title: "Far Cry 3$",
    description: "Buy it at ur own risk!!",
    price: 1000,
  }),
  new Product({
    imagePath:
      "https://upload.wikimedia.org/wikipedia/en/7/7f/Cover_Art_of_Need_for_Speed_Heat.png",
    title: "NFS: Heat",
    description: "Buy it at ur own risk!!",
    price: 1000,
  }),
];
var done = 0;
for (var i = 0; i < products.length; i++) {
  products[i].save(function (err, result) {
    done++;
    if (done === products.length) {
      exit();
    }
  });
}

function exit() {
  mongoose.disconnect();
}
