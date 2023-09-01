const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://prgharde:prgharde@cluster0.l6haet4.mongodb.net/gofoodmern?retryWrites=true&w=majority';

const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Connected to database!');

    const fetched_data = mongoose.connection.db.collection("food_items");
    const data = await fetched_data.find({}).toArray();
    // console.log(data);
    global.food_items = data;
    // console.log(global.food_items)
    const foodCategory = mongoose.connection.db.collection("foodCategory");
    const catData = await foodCategory.find({}).toArray();
    global.foodCategory = catData;
    
    
  } catch (error) {
    console.error('Failed to connect to database:', error);
  }
};

module.exports = mongoDB;


// async function mongoDB() {
//   try {
//     await mongoose.connect(mongoURI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log('Connected to database!');

//     const fetched_data = mongoose.connection.collection('food_items');
//     fetched_data.find({}).toArray(function(err,data){
//                       if(err)console.log(err)
//                       else console.log(data)
  
    
//   } catch (error) {
//     console.error('Failed to connect to database:', error);
//   }
// }
// // const mongoDB =()=>{
// //     mongoose.connect(mongoURI,()=>{
// //         console.log("DB connected !")
// //     });
// // }

// // const mongoDB = () => {
// //     mongoose.connect(mongoURI)
// //         .then(() => {
// //             console.log("DB connected !");
// //             const fetched_data = mongoose.connection.db.collection("food_items")
// //             fetched_data.find({}).toArray(function(err,data){
// //                 if(err)console.log(err)
// //                 else console.log(data)
// //             })
// //         })
// //         .catch((error) => {
// //             console.error("Error connecting to the database:", error);
// //         });
// // }



// module.exports = mongoDB;


// const mongoose = require('mongoose');
// const mongoURI = 'mongodb+srv://prgharde:prgharde@cluster0.l6haet4.mongodb.net/gofoodmern?retryWrites=true&w=majority';

// async function mongoDB() {
//   try {
//     await mongoose.connect(mongoURI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log('Connected to database!');
    
//     const fetched_data = mongoose.connection.collection('food_items');
//     fetched_data.find({}).toArray(function(err, data) {
//       if (err) {
//         console.log(err);
//       } else {
//         console.log("This is the data",data);
//       }
//     });
//   } catch (error) {
//     console.error('Failed to connect to database:', error);
//   }
// }

// module.exports = mongoDB;


// const mongoose = require('mongoose');
// const mongoURI = 'mongodb+srv://prgharde:prgharde@cluster0.l6haet4.mongodb.net/gofoodmern?retryWrites=true&w=majority';

// async function mongoDB() {
//   try {
//     await mongoose.connect(mongoURI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log('Connected to database!');

//     const FoodItem = mongoose.model('food_items', new mongoose.Schema({}));

//     const data = await FoodItem.find({}).exec();
//     console.log(data);

//     mongoose.connection.close();
//   } catch (error) {
//     console.error('Failed to connect to database:', error);
//   }
// }

// module.exports = mongoDB;
