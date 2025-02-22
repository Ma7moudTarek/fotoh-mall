const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const multer = require("multer");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// الاتصال بقاعدة البيانات
mongoose.connect("mongodb://127.0.0.1:27017/storeDB")
    .then(() => console.log("✅ تم الاتصال بقاعدة البيانات بنجاح"))
    .catch(err => console.error("❌ فشل الاتصال بقاعدة البيانات:", err.message));

// إنشاء مخطط المنتجات
const productSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    category: String,
    image: String
});

const Product = mongoose.model("Product", productSchema);

// إعداد `multer` لرفع الصور
const storage = multer.memoryStorage();
const upload = multer({ storage });

// 📌 إضافة منتج جديد
app.post("/add-product", upload.single("image"), async (req, res) => {
    try {
        const { name, description, price, category } = req.body;
        const image = req.file ? `data:image/png;base64,${req.file.buffer.toString("base64")}` : "";

        const newProduct = new Product({ name, description, price, category, image });
        await newProduct.save();
        res.json({ message: "✅ تمت إضافة المنتج بنجاح!" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// 📌 جلب جميع المنتجات
app.get("/products", async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// 📌 تحديث منتج
app.put("/update-product/:id", async (req, res) => {
    try {
        await Product.findByIdAndUpdate(req.params.id, req.body);
        res.json({ message: "✅ تم تحديث المنتج!" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// 📌 حذف منتج
app.delete("/delete-product/:id", async (req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.id);
        res.json({ message: "✅ تم حذف المنتج!" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// تشغيل الخادم
const PORT = 5000;
app.listen(PORT, () => console.log(`🚀 الخادم يعمل على المنفذ ${PORT}`));
