
const express = require('express')
const app = express()



const inv = [
    {
      category: "food",
      items: [
        {
          name: "Spaghetti Carbonar",
          imageu: ["https://leitesculinaria.com/wp-content/uploads/2024/04/spaghetti-carbonara-1200.jpg"],
          des: "A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.",
          Resc: "made with eggs, cheese, pancetta, and pepper",
          bttew:"Best with Garlic Bread, Red Wine",
          ytl:"https://www.youtube.com/watch?v=4F1JcvnsBRc",
          path:"/r/0"
        },
        {
            name: "Sushi",
            imageu: ["https://www.heinens.com/content/uploads/2023/06/Tuna-Sushi-Rolls-800x550-1.jpg"],
            des: "rice seasoned with sweetened vinegar and often topped or filled with a variety of ingredients such as seafood (both raw and cooked) and vegetables.",
            Resc: " rice, fish, and nori (seaweed).",
            bttew:"best with  Soy Sauce, Wasabi, Pickled Ginger",
            ytl:"https://www.youtube.com/watch?v=nIoOv6lWYnk",
            path:"/r/1"
          },
          {
            name: "Tacos",
            imageu: ["https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/k%2FPhoto%2FRecipes%2F2024-04-tacos%2Ftacos-490"],
            des: "an internationally popular hand-sized food item of Mexican origin combining seasoned meat, vegetables, and other fillings and served inside a folded or rolled corn or flour tortilla",
            Resc: "ground meat (like beef, chicken, or pork), taco seasoning, onions, tomato sauce, tortillas (hard or soft), cheese, lettuce, tomatoes, salsa, guacamole, sour cream, and optional toppings like cilantro, lime wedges, and hot sauce",
            bttew:"Best with Guacamole, Salsa, Lime",
            ytl:"https://www.youtube.com/watch?v=ALeF0GUCSSk",
            path:"/r/2"
          },
          {
            name: "Burger",
            imageu: ["https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/32/94/28/best-burger.jpg?w=900&h=500&s=1"],
            des: " a patty of ground beef grilled and placed between two halves of a bun. Slices of raw onion, lettuce, bacon, mayonnaise, and other ingredients add flavor. Burgers are considered an American food but are popular around the world.",
            Resc: "1 lb 85/15 ground beef (chuck and brisket),2 oz frozen unsalted butter,1 tbsp granulated garlic or garlic powder,1.5 tbsp Maldon salt.1 tbsp fresh cracked black pepper,1 tbsp olive oil,2 slices swiss cheese.",
            bttew:"Best with fries and soda",
            ytl:"https://www.youtube.com/watch?v=BIG1h2vG-Qg",
            path:"/r/3"
          },
          {
            name: "Ramen",
            imageu: ["https://hikarimiso.com/wp-content/uploads/2024/05/Trimmed_03_Miso-Ramen_02_M.jpg"],
            des: "a Japanese noodle soup, with a combination of a rich flavoured broth, one of a variety of types of noodle and a selection of meats or vegetables, often topped with a boiled egg.",
            Resc: "ramen noodles,scallions ,salt ,garlic soy sauce ",
            bttew:"Best with Soft-boiled Egg, Green Onions",
            ytl:"https://www.youtube.com/watch?v=r3_tcQiyGG8",
            path:"/r/4"
          },
          {
            name: "Paella",
            imageu: ["https://images.squarespace-cdn.com/content/v1/50106d5684aed4702b7242ed/1586791335709-Z8GE8755Y0D0K6F8U934/shutterstock_1454439050-2.jpg"],
            des: "a dish of saffron-flavoured rice cooked with meats, seafood, and vegetables",
            Resc: " rice, saffron, vegetables, chicken, and seafood.",
            bttew:"Best with  Sangria, Bread ",
            ytl:"https://www.youtube.com/watch?v=21NECl64HKE",
            path:"/r/5"
          },
          {
            name: "Butter Chicken",
            imageu: ["https://feelgoodfoodie.net/wp-content/uploads/2024/02/Easy-Butter-Chicken-TIMG.jpg"],
            des: "Butter chicken is a rich and flavorful Indian dish of chicken in a creamy, spiced tomato sauce",
            Resc: "chicken, tomato, onion, butter, ginger, garlic, garam masala, yogurt (for marinating), turmeric powder, coriander powder, cumin seeds, red chili powder, and sometimes cream or cashew paste",
            bttew:" best with Naan, Basmati Rice",
            ytl:"https://www.youtube.com/watch?v=a03U45jFxOI",
            path:"/r/6"
          },
          {
            name: "Croissant",
            imageu: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReXqRrEbcPNx_oGNGd2813LPRDduR3cjKa_Q&s"],
            des: "A flaky, buttery pastry enjoyed for breakfast or as a snack",
            Resc: " flour, water, milk, sugar, salt, yeast, and a significant amount of butter",
            bttew:"Best with  Coffee, Jam ",
            ytl:"https://www.youtube.com/watch?v=djnNkLi_K6E",
            path:"/r/7"
          },
      ]
 }
]



app.set('view engine', 'ejs')


app.use((req, res, next) => {
  console.log(req.method + " " + req.path)
  next()
})


app.use(express.static(__dirname + "/public"))


app.get("/list", (req,res)=>{
  res.render("overview.ejs",inv[0])
})



app.get("/r/:index",(req,res)=>{
const i = req.params.index
res.render("certain.ejs", inv[0].items[i])


})



app.use((req,res,next)=>{
  res.status(404).send('not found')
})







app.listen(3000, () => {
  console.log("Server running")
})
