const express = require("express");
const router = express.Router();




const authMiddleware = require("../middleware/authMiddleware");
const adminMiddleware = require("../middleware/adminMiddleware");
const Order = require("../models/Order");
const Product = require("../models/Product");

router.post("/", authMiddleware, async (req, res) => {
    try {
        const { items } = req.body;

        if (!items || items.length === 0) {
            return res.status(400).json({
            message: "Order must contain at least one item"
            });
        }

        let totalPrice = 0;
        const orderItems = [];
        
        for (const item of items) {
            if (!item.product || !item.quantity || item.quantity < 1) {
                return res.status(400).json({
                    message: "Each item must have a product and quantity greater than 0"
                });
            }

            const product = await Product.findById(item.product);

            if (!product) {
                return res.status(404).json({
                    message: "Product not found"
                });
            }

            if (product.stock < item.quantity) {
                    return res.status(400).json({
                    message: `Not enough stock for ${product.name}`
                });
            }

            product.stock -= item.quantity;

            await product.save();

            const itemTotal = product.price * item.quantity;

            totalPrice += itemTotal;

            orderItems.push({
                product: product._id,
                quantity: item.quantity,
                price: product.price
            });
        }

        const order = new Order({
            user: req.user.userId,
            items: orderItems,
            totalPrice: totalPrice
        });

        await order.save();



        console.log(items);

        res.status(201).json({
            message: "Order created successfully",
            order
        });
    } catch (error) {
        console.log(error);

        res.status(500).json({
            message: "Something went wrong"
        });
    }
});

router.get("/my-orders", authMiddleware, async (req, res) => {
    try {
        const orders = await Order.find({
            user: req.user.userId
        });

        res.status(200).json(orders);

    } catch (error) {
        console.log(error);

        res.status(500).json({
            message: "Something went wrong"
        });
    }
});

router.get("/", authMiddleware, adminMiddleware, async (req, res) => {
    try {
        const orders = await Order.find();

        res.status(200).json(orders);

    } catch (error) {
        console.log(error);

        res.status(500).json({
            message: "Something went wrong"
        });
    }
});

router.get("/:id", authMiddleware, async (req, res) => {
    try {
        const order = await Order.findById(req.params.id);

        if (!order) {
            return res.status(404).json({
                message: "Order not found"
            });
        }

        if (
            order.user.toString() !== req.user.userId &&
            req.user.role !== "admin"
        ) {
            return res.status(403).json({
                message: "You are not authorized to view this order"
            });
        }

        res.status(200).json(order);

    } catch (error) {
        console.log(error);

        res.status(500).json({
            message: "Something went wrong"
        });
    }
});

router.put("/:id/status", authMiddleware, adminMiddleware, async (req, res) => {
    try {
        const { status } = req.body;

        const validStatuses = [
            "pending",
            "confirmed",
            "shipped",
            "delivered",
            "cancelled"
        ];

        if (!validStatuses.includes(status)) {
            return res.status(400).json({
                message: "Invalid order status"
            });
        }

        const order = await Order.findById(req.params.id);

        if (!order) {
            return res.status(404).json({
                message: "Order not found"
            });
        }

        order.status = status;

        await order.save();

        res.status(200).json({
            message: "Order status updated successfully",
            order
        });

    } catch (error) {
        console.log(error);

        res.status(500).json({
            message: "Something went wrong"
        });
    }
});

module.exports = router;