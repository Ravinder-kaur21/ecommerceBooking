const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const productRoutes = require("./routes/productRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();

dotenv.config();

app.use(express.json());

app.use("/api", productRoutes);

app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
   res.send("Backend Running");
});

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || process.env.MONGO_URL;

const startServer = async () => {
   try {
      if (!MONGO_URI) {
         throw new Error("MONGO_URI is not set");
      }

      await mongoose.connect(MONGO_URI);

      console.log("MongoDB Connected");

      app.listen(PORT, () => {
         console.log(`Server Running On Port ${PORT}`);
      });
   } catch (error) {
      console.log(error.message);
      process.exit(1);
   }
};

startServer();