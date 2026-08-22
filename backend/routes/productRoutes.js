const express = require("express");
const mongoose = require("mongoose");
const Product = require("../models/Product");
const authMiddleware = require("../middleware/authMiddleware");
const adminMiddleware = require("../middleware/adminMiddleware");

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const products = await Product.find();

        res.status(200).json({
            products
        });

    } catch (error) {
        console.log(error);

        res.status(500).json({
            message: "Something went wrong"
        });
    }
});

router.get("/:id", async (req, res) => {
    try {
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.status(400).json({
            message: "Invalid product ID"
        });
    }
        const product = await Product.findById(req.params.id);

        if (!product) {
            return res.status(404).json({
                message: "Product not found"
            });
        }

        res.status(200).json({
            product
        });

    } catch (error) {
        console.log(error);

        res.status(500).json({
            message: "Something went wrong"
        });
    }
});

router.put("/:id",authMiddleware, adminMiddleware, async (req, res) => {
    try {
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.status(400).json({
            message: "Invalid product ID"
        });
    }

        if (req.body.price !== undefined && req.body.price < 0) {
            return res.status(400).json({
                message: "Price cannot be negative"
        });
    }

    if (req.body.stock !== undefined && req.body.stock < 0) {
        return res.status(400).json({
            message: "Stock cannot be negative"
        });
    }
        const product = await Product.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        );

        if (!product) {
            return res.status(404).json({
                message: "Product not found"
            });
        }

        res.status(200).json({
            message: "Product updated successfully",
            product
        });

    } catch (error) {
        console.log(error);

        res.status(500).json({
            message: "Something went wrong"
        });
    }
});

router.delete("/:id",authMiddleware, adminMiddleware, async (req, res) => {
    try {
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.status(400).json({
            message: "Invalid product ID"
        });
    }

        const product = await Product.findByIdAndDelete(req.params.id);

        if (!product) {
            return res.status(404).json({
                message: "Product not found"
            });
        }

        res.status(200).json({
            message: "Product deleted successfully"
        });

    } catch (error) {
        console.log(error);

        res.status(500).json({
            message: "Something went wrong"
        });
    }
});

router.post("/", authMiddleware, adminMiddleware, async (req, res) => {
    try {
        const {
            name,
            description,
            price,
            category,
            stock,
            image
        } = req.body;

    if (!name || !category || price === undefined || stock === undefined) {
        return res.status(400).json({
            message: "Name, category, price and stock are required"
        });
    }

    if (price < 0) {
        return res.status(400).json({
            message: "Price cannot be negative"
        });
    }

    if (stock < 0) {
        return res.status(400).json({
            message: "Stock cannot be negative"
        });
    }

        const product = await Product.create({
            name,
            description,
            price,
            category,
            stock,
            image
        });

        res.status(201).json({
            message: "Product created successfully",
            product
        });

    } catch (error) {
        console.log(error);

        res.status(500).json({
            message: "Something went wrong"
        });
    }
});

module.exports = router;