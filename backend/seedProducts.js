const mongoose = require("mongoose");

require("dotenv").config();

const Product = require("./models/Product");

const products = [

  // =====================================================
  // GROCERIES - 8
  // =====================================================

  {
    name: "Tata Salt 1kg",
    description: "Iodized vacuum evaporated salt for everyday cooking.",
    price: 28,
    category: "Groceries",
    stock: 50,
    image:
      "https://images.unsplash.com/photo-1518110925495-5aa0a1f4a4b0?auto=format&fit=crop&w=800&q=80"
  },

  {
    name: "Aashirvaad Atta 5kg",
    description: "Whole wheat flour suitable for soft and healthy rotis.",
    price: 285,
    category: "Groceries",
    stock: 30,
    image:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80"
  },

  {
    name: "India Gate Basmati Rice 5kg",
    description: "Premium long-grain basmati rice for everyday meals.",
    price: 520,
    category: "Groceries",
    stock: 24,
    image:
      "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=800&q=80"
  },

  {
    name: "Fortune Sunflower Oil 1L",
    description: "Light sunflower oil for everyday cooking and frying.",
    price: 145,
    category: "Groceries",
    stock: 35,
    image:
      "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=800&q=80"
  },

  {
    name: "Tata Sampann Toor Dal 1kg",
    description: "High-quality split pigeon peas for delicious everyday dal.",
    price: 165,
    category: "Groceries",
    stock: 28,
    image:
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80"
  },

  {
    name: "Madhur Sugar 1kg",
    description: "Fine granulated sugar for tea, desserts and everyday cooking.",
    price: 48,
    category: "Groceries",
    stock: 45,
    image:
      "https://images.unsplash.com/photo-1515037893149-de7f840978e2?auto=format&fit=crop&w=800&q=80"
  },

  {
    name: "Tata Tea Premium 500g",
    description: "Rich and refreshing tea blend for your daily cup of chai.",
    price: 245,
    category: "Groceries",
    stock: 25,
    image:
      "https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?auto=format&fit=crop&w=800&q=80"
  },

  {
    name: "Everest Garam Masala 100g",
    description: "Aromatic Indian spice blend for enhancing everyday dishes.",
    price: 92,
    category: "Groceries",
    stock: 40,
    image:
      "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=80"
  },


  // =====================================================
  // DAIRY - 6
  // =====================================================

  {
    name: "Amul Taaza Milk 1L",
    description: "Fresh toned milk for breakfast, tea and everyday use.",
    price: 58,
    category: "Dairy",
    stock: 40,
    image:
      "https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=800&q=80"
  },

  {
    name: "Amul Butter 500g",
    description: "Smooth and delicious table butter made from quality milk.",
    price: 285,
    category: "Dairy",
    stock: 20,
    image:
      "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?auto=format&fit=crop&w=800&q=80"
  },

  {
    name: "Amul Cheese Slices 200g",
    description: "Creamy cheese slices perfect for sandwiches and snacks.",
    price: 145,
    category: "Dairy",
    stock: 22,
    image:
      "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?auto=format&fit=crop&w=800&q=80"
  },

  {
    name: "Amul Fresh Paneer 200g",
    description: "Soft fresh paneer for curries, snacks and Indian dishes.",
    price: 95,
    category: "Dairy",
    stock: 18,
    image:
      "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=800&q=80"
  },

  {
    name: "Mother Dairy Curd 400g",
    description: "Fresh creamy curd suitable for meals and refreshments.",
    price: 45,
    category: "Dairy",
    stock: 30,
    image:
      "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=800&q=80"
  },

  {
    name: "Amul Lassi 200ml",
    description: "Refreshing chilled lassi with a smooth creamy taste.",
    price: 25,
    category: "Dairy",
    stock: 35,
    image:
      "https://images.unsplash.com/photo-1576186726115-4d51596775d1?auto=format&fit=crop&w=800&q=80"
  },


  // =====================================================
  // BEVERAGES - 6
  // =====================================================

  {
    name: "Coca-Cola 750ml",
    description: "Refreshing sparkling soft drink for every occasion.",
    price: 40,
    category: "Beverages",
    stock: 60,
    image:
      "https://images.unsplash.com/photo-1554866585-cd94860890b7?auto=format&fit=crop&w=800&q=80"
  },

  {
    name: "Real Mixed Fruit Juice 1L",
    description: "Refreshing mixed fruit drink for the whole family.",
    price: 120,
    category: "Beverages",
    stock: 30,
    image:
      "https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=800&q=80"
  },

  {
    name: "Nescafe Classic Coffee 100g",
    description: "Rich instant coffee for a quick and refreshing cup.",
    price: 275,
    category: "Beverages",
    stock: 24,
    image:
      "https://images.unsplash.com/photo-1512568400610-62da28bc8a13?auto=format&fit=crop&w=800&q=80"
  },

  {
    name: "Thums Up 750ml",
    description: "Bold and refreshing carbonated soft drink.",
    price: 40,
    category: "Beverages",
    stock: 45,
    image:
      "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=800&q=80"
  },

  {
    name: "Bisleri Mineral Water 1L",
    description: "Convenient packaged drinking water for everyday hydration.",
    price: 20,
    category: "Beverages",
    stock: 100,
    image:
      "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&w=800&q=80"
  },

  {
    name: "Bournvita 500g",
    description: "Chocolate-flavoured malt beverage mix for a nutritious drink.",
    price: 235,
    category: "Beverages",
    stock: 20,
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80"
  },


  // =====================================================
  // SNACKS - 7
  // =====================================================

  {
    name: "Maggi 2-Minute Noodles",
    description: "Classic instant noodles perfect for a quick tasty meal.",
    price: 14,
    category: "Snacks",
    stock: 100,
    image:
      "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?auto=format&fit=crop&w=800&q=80"
  },

  {
    name: "Parle-G Biscuits 800g",
    description: "Classic glucose biscuits loved by families across India.",
    price: 80,
    category: "Snacks",
    stock: 55,
    image:
      "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=800&q=80"
  },

  {
    name: "Lays Classic Salted 50g",
    description: "Crispy potato chips with a classic salted flavour.",
    price: 20,
    category: "Snacks",
    stock: 70,
    image:
      "https://images.unsplash.com/photo-1566478989037-eec170784d0b?auto=format&fit=crop&w=800&q=80"
  },

  {
    name: "Kurkure Masala Munch 90g",
    description: "Crunchy and spicy snack with a delicious masala flavour.",
    price: 30,
    category: "Snacks",
    stock: 65,
    image:
      "https://images.unsplash.com/photo-1621939514649-280e2aa09e7f?auto=format&fit=crop&w=800&q=80"
  },

  {
    name: "Oreo Original 120g",
    description: "Chocolate sandwich cookies with a creamy vanilla centre.",
    price: 40,
    category: "Snacks",
    stock: 50,
    image:
      "https://images.unsplash.com/photo-1558961363-8f2d9b4d4f1a?auto=format&fit=crop&w=800&q=80"
  },

  {
    name: "Britannia Good Day 200g",
    description: "Crunchy cookies made for a delicious tea-time snack.",
    price: 45,
    category: "Snacks",
    stock: 45,
    image:
      "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=800&q=80"
  },

  {
    name: "Cadbury Dairy Milk 110g",
    description: "Smooth and creamy milk chocolate for a sweet treat.",
    price: 110,
    category: "Snacks",
    stock: 35,
    image:
      "https://images.unsplash.com/photo-1575377427642-087cf684f29d?auto=format&fit=crop&w=800&q=80"
  },


  // =====================================================
  // PERSONAL CARE - 6
  // =====================================================

  {
    name: "Dove Daily Shine Shampoo 340ml",
    description: "Gentle shampoo designed for smooth and healthy-looking hair.",
    price: 285,
    category: "Personal Care",
    stock: 18,
    image:
      "https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=800&q=80"
  },

  {
    name: "Colgate Strong Teeth 200g",
    description: "Daily toothpaste for strong teeth and fresh breath.",
    price: 105,
    category: "Personal Care",
    stock: 35,
    image:
      "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?auto=format&fit=crop&w=800&q=80"
  },

  {
    name: "Dove Cream Beauty Bar 100g",
    description: "Moisturising beauty bar for soft and smooth skin.",
    price: 65,
    category: "Personal Care",
    stock: 40,
    image:
      "https://images.unsplash.com/photo-1607006344380-b6775a0824f7?auto=format&fit=crop&w=800&q=80"
  },

  {
    name: "Nivea Body Lotion 400ml",
    description: "Moisturising body lotion for soft and hydrated skin.",
    price: 295,
    category: "Personal Care",
    stock: 20,
    image:
      "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?auto=format&fit=crop&w=800&q=80"
  },

  {
    name: "Dettol Liquid Handwash 250ml",
    description: "Daily handwash that helps keep hands clean and fresh.",
    price: 110,
    category: "Personal Care",
    stock: 30,
    image:
      "https://images.unsplash.com/photo-1584483766114-2cea6facdf57?auto=format&fit=crop&w=800&q=80"
  },

  {
    name: "Parachute Coconut Hair Oil 250ml",
    description: "Coconut hair oil for everyday hair care and nourishment.",
    price: 115,
    category: "Personal Care",
    stock: 28,
    image:
      "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=800&q=80"
  },


  // =====================================================
  // HOUSEHOLD - 7
  // =====================================================

  {
    name: "Surf Excel Matic 2kg",
    description: "Powerful detergent powder for deep cleaning and stain removal.",
    price: 395,
    category: "Household",
    stock: 22,
    image:
      "https://images.unsplash.com/photo-1585832770485-e68a5dbfad52?auto=format&fit=crop&w=800&q=80"
  },

  {
    name: "Vim Dishwash Liquid 500ml",
    description: "Powerful dishwashing liquid for removing grease and food stains.",
    price: 125,
    category: "Household",
    stock: 30,
    image:
      "https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&w=800&q=80"
  },

  {
    name: "Harpic Toilet Cleaner 500ml",
    description: "Powerful toilet cleaner for hygienic and fresh bathrooms.",
    price: 105,
    category: "Household",
    stock: 25,
    image:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80"
  },

  {
    name: "Colin Glass Cleaner 500ml",
    description: "Glass cleaner that removes dirt and leaves surfaces sparkling.",
    price: 105,
    category: "Household",
    stock: 24,
    image:
      "https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=800&q=80"
  },

  {
    name: "Lizol Floor Cleaner 1L",
    description: "Floor cleaning solution for a fresh and hygienic home.",
    price: 190,
    category: "Household",
    stock: 20,
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80"
  },

  {
    name: "Good Knight Mosquito Repellent",
    description: "Convenient mosquito protection for everyday home use.",
    price: 165,
    category: "Household",
    stock: 30,
    image:
      "https://images.unsplash.com/photo-1583947581924-a6d1f7f4b5b5?auto=format&fit=crop&w=800&q=80"
  },

  {
    name: "Scotch-Brite Cleaning Sponge Pack",
    description: "Durable cleaning sponges for everyday kitchen cleaning.",
    price: 55,
    category: "Household",
    stock: 50,
    image:
      "https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&w=800&q=80"
  }

];


// =====================================================
// SEED DATABASE
// =====================================================

const seedDatabase = async () => {

  try {

    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB connected");

    await Product.deleteMany();

    console.log("Old products removed");

    await Product.insertMany(products);

    console.log(
      `${products.length} products inserted successfully`
    );

    await mongoose.connection.close();

    console.log("Database connection closed");

  } catch (error) {

    console.error(
      "Error seeding products:",
      error
    );

    process.exit(1);
  }
};

seedDatabase();