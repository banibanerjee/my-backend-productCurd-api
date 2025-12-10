import mongoose from 'mongoose';
import dotenv from 'dotenv';

import Product from '../model/productModel.js';
dotenv.config();

const Products = [
  {
      "id": 1,
      "title": "Wireless Headphones",
      "category": "Electronics",
      "details": "High quality Wireless Headphones in Electronics category with great features and excellent performance.",
      "price": 8540,
      "offerPrice": 7686,
      "mainImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXAAdfnXprRpP2nwns2wU0-uHHQFuH6AYwdg&s",
      "subImages": [
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXAAdfnXprRpP2nwns2wU0-uHHQFuH6AYwdg&s",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXAAdfnXprRpP2nwns2wU0-uHHQFuH6AYwdg&s",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXAAdfnXprRpP2nwns2wU0-uHHQFuH6AYwdg&s"
      ]
  },
  {
      "id": 2,
      "title": "Smartphone",
      "category": "Electronics",
      "details": "High quality Smartphone in Electronics category with great features and excellent performance.",
      "price": 4830,
      "offerPrice": 4347,
      "mainImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzm3xH10nee5x0A6zUQOjqkriQQi5umhXLbQ&s",
      "subImages": [
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzm3xH10nee5x0A6zUQOjqkriQQi5umhXLbQ&s",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzm3xH10nee5x0A6zUQOjqkriQQi5umhXLbQ&s",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzm3xH10nee5x0A6zUQOjqkriQQi5umhXLbQ&s"
      ]
  },
  {
      "id": 3,
      "title": "Gaming Laptop",
      "category": "Computers",
      "details": "High quality Gaming Laptop in Computers category with great features and excellent performance.",
      "price": 2860,
      "offerPrice": 2574,
      "mainImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRODNrtzhr8WygH5EnfgcaVwYQXYYIoGoC-n2uqMo2QmDZgVdW32_4ChCyJFU_EhVjvPlA&usqp=CAU",
      "subImages": [
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRODNrtzhr8WygH5EnfgcaVwYQXYYIoGoC-n2uqMo2QmDZgVdW32_4ChCyJFU_EhVjvPlA&usqp=CAU",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRODNrtzhr8WygH5EnfgcaVwYQXYYIoGoC-n2uqMo2QmDZgVdW32_4ChCyJFU_EhVjvPlA&usqp=CAU",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRODNrtzhr8WygH5EnfgcaVwYQXYYIoGoC-n2uqMo2QmDZgVdW32_4ChCyJFU_EhVjvPlA&usqp=CAU"
      ]
  },
  {
      "id": 4,
      "title": "Smart Watch",
      "category": "Wearables",
      "details": "High quality Smart Watch in Wearables category with great features and excellent performance.",
      "price": 6000,
      "offerPrice": 5400,
      "mainImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRawkVMiU0E19KV4yC_gaHOSnF46EtiCgMmFw&s",
      "subImages": [
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRawkVMiU0E19KV4yC_gaHOSnF46EtiCgMmFw&s",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRawkVMiU0E19KV4yC_gaHOSnF46EtiCgMmFw&s",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRawkVMiU0E19KV4yC_gaHOSnF46EtiCgMmFw&s"
      ]
  },
  {
      "id": 5,
      "title": "Bluetooth Speaker",
      "category": "Audio",
      "details": "High quality Bluetooth Speaker in Audio category with great features and excellent performance.",
      "price": 4930,
      "offerPrice": 4437,
      "mainImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ545wfJT9K69QnfjnIV6oIfg8N5mNCx32GdA&s",
      "subImages": [
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ545wfJT9K69QnfjnIV6oIfg8N5mNCx32GdA&s",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ545wfJT9K69QnfjnIV6oIfg8N5mNCx32GdA&s",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ545wfJT9K69QnfjnIV6oIfg8N5mNCx32GdA&s"
      ]
  },
  {
      "id": 6,
      "title": "DSLR Camera",
      "category": "Photography",
      "details": "High quality DSLR Camera in Photography category with great features and excellent performance.",
      "price": 5430,
      "offerPrice": 4887,
      "mainImage": "https://i.pinimg.com/originals/52/f7/86/52f786c1bf9b23e0beed47ed45c0dd02.jpg",
      "subImages": [
          "https://i.pinimg.com/originals/52/f7/86/52f786c1bf9b23e0beed47ed45c0dd02.jpg",
          "https://i.pinimg.com/originals/52/f7/86/52f786c1bf9b23e0beed47ed45c0dd02.jpg",
          "https://i.pinimg.com/originals/52/f7/86/52f786c1bf9b23e0beed47ed45c0dd02.jpg"
      ]
  },
  {
      "id": 7,
      "title": "Tablet",
      "category": "Computers",
      "details": "High quality Tablet in Computers category with great features and excellent performance.",
      "price": 5210,
      "offerPrice": 4689,
      "mainImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuSIXXr8yUKTZj2ePDpwLgZ-VSPe40_DBiJA&s",
      "subImages": [
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuSIXXr8yUKTZj2ePDpwLgZ-VSPe40_DBiJA&s",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuSIXXr8yUKTZj2ePDpwLgZ-VSPe40_DBiJA&s",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuSIXXr8yUKTZj2ePDpwLgZ-VSPe40_DBiJA&s"
      ]
  },
  {
      "id": 8,
      "title": "4K Television",
      "category": "Home Entertainment",
      "details": "High quality 4K Television in Home Entertainment category with great features and excellent performance.",
      "price": 5440,
      "offerPrice": 4896,
      "mainImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLQQsDXK9etOoktC48QeRMK2yK2C2wtyuOLA&s",
      "subImages": [
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLQQsDXK9etOoktC48QeRMK2yK2C2wtyuOLA&s",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLQQsDXK9etOoktC48QeRMK2yK2C2wtyuOLA&s",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLQQsDXK9etOoktC48QeRMK2yK2C2wtyuOLA&s"
      ]
  },
  {
      "id": 9,
      "title": "Gaming Console",
      "category": "Gaming",
      "details": "High quality Gaming Console in Gaming category with great features and excellent performance.",
      "price": 2680,
      "offerPrice": 2412,
      "mainImage": "https://5.imimg.com/data5/SELLER/Default/2023/1/WY/NN/CH/125434654/ps5-gaming-console-500x500.png",
      "subImages": [
          "https://5.imimg.com/data5/SELLER/Default/2023/1/WY/NN/CH/125434654/ps5-gaming-console-500x500.png",
          "https://5.imimg.com/data5/SELLER/Default/2023/1/WY/NN/CH/125434654/ps5-gaming-console-500x500.png",
          "https://5.imimg.com/data5/SELLER/Default/2023/1/WY/NN/CH/125434654/ps5-gaming-console-500x500.png"
      ]
  },
  {
      "id": 10,
      "title": "Fitness Tracker",
      "category": "Wearables",
      "details": "High quality Fitness Tracker in Wearables category with great features and excellent performance.",
      "price": 2450,
      "offerPrice": 2205,
      "mainImage": "https://static.independent.co.uk/2024/01/23/16/Runlio%20fitness%20tracker.png",
      "subImages": [
          "https://static.independent.co.uk/2024/01/23/16/Runlio%20fitness%20tracker.png",
          "https://static.independent.co.uk/2024/01/23/16/Runlio%20fitness%20tracker.png",
          "https://static.independent.co.uk/2024/01/23/16/Runlio%20fitness%20tracker.png"
      ]
  },
  {
    "id": 11,
    "title": "Wireless Headphones",
    "category": "Electronics",
    "details": "High quality Wireless Headphones in Electronics category with great features and excellent performance.",
    "price": 8540,
    "offerPrice": 7686,
    "mainImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXAAdfnXprRpP2nwns2wU0-uHHQFuH6AYwdg&s",
    "subImages": [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXAAdfnXprRpP2nwns2wU0-uHHQFuH6AYwdg&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXAAdfnXprRpP2nwns2wU0-uHHQFuH6AYwdg&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXAAdfnXprRpP2nwns2wU0-uHHQFuH6AYwdg&s"
    ]
},
{
    "id": 12,
    "title": "Smartphone",
    "category": "Electronics",
    "details": "High quality Smartphone in Electronics category with great features and excellent performance.",
    "price": 4830,
    "offerPrice": 4347,
    "mainImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzm3xH10nee5x0A6zUQOjqkriQQi5umhXLbQ&s",
    "subImages": [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzm3xH10nee5x0A6zUQOjqkriQQi5umhXLbQ&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzm3xH10nee5x0A6zUQOjqkriQQi5umhXLbQ&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzm3xH10nee5x0A6zUQOjqkriQQi5umhXLbQ&s"
    ]
},
{
    "id": 13,
    "title": "Gaming Laptop",
    "category": "Computers",
    "details": "High quality Gaming Laptop in Computers category with great features and excellent performance.",
    "price": 2860,
    "offerPrice": 2574,
    "mainImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRODNrtzhr8WygH5EnfgcaVwYQXYYIoGoC-n2uqMo2QmDZgVdW32_4ChCyJFU_EhVjvPlA&usqp=CAU",
    "subImages": [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRODNrtzhr8WygH5EnfgcaVwYQXYYIoGoC-n2uqMo2QmDZgVdW32_4ChCyJFU_EhVjvPlA&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRODNrtzhr8WygH5EnfgcaVwYQXYYIoGoC-n2uqMo2QmDZgVdW32_4ChCyJFU_EhVjvPlA&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRODNrtzhr8WygH5EnfgcaVwYQXYYIoGoC-n2uqMo2QmDZgVdW32_4ChCyJFU_EhVjvPlA&usqp=CAU"
    ]
},
{
    "id": 14,
    "title": "Smart Watch",
    "category": "Wearables",
    "details": "High quality Smart Watch in Wearables category with great features and excellent performance.",
    "price": 6000,
    "offerPrice": 5400,
    "mainImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRawkVMiU0E19KV4yC_gaHOSnF46EtiCgMmFw&s",
    "subImages": [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRawkVMiU0E19KV4yC_gaHOSnF46EtiCgMmFw&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRawkVMiU0E19KV4yC_gaHOSnF46EtiCgMmFw&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRawkVMiU0E19KV4yC_gaHOSnF46EtiCgMmFw&s"
    ]
},
{
    "id": 15,
    "title": "Bluetooth Speaker",
    "category": "Audio",
    "details": "High quality Bluetooth Speaker in Audio category with great features and excellent performance.",
    "price": 4930,
    "offerPrice": 4437,
    "mainImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ545wfJT9K69QnfjnIV6oIfg8N5mNCx32GdA&s",
    "subImages": [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ545wfJT9K69QnfjnIV6oIfg8N5mNCx32GdA&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ545wfJT9K69QnfjnIV6oIfg8N5mNCx32GdA&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ545wfJT9K69QnfjnIV6oIfg8N5mNCx32GdA&s"
    ]
},
{
    "id": 16,
    "title": "DSLR Camera",
    "category": "Photography",
    "details": "High quality DSLR Camera in Photography category with great features and excellent performance.",
    "price": 5430,
    "offerPrice": 4887,
    "mainImage": "https://i.pinimg.com/originals/52/f7/86/52f786c1bf9b23e0beed47ed45c0dd02.jpg",
    "subImages": [
        "https://i.pinimg.com/originals/52/f7/86/52f786c1bf9b23e0beed47ed45c0dd02.jpg",
        "https://i.pinimg.com/originals/52/f7/86/52f786c1bf9b23e0beed47ed45c0dd02.jpg",
        "https://i.pinimg.com/originals/52/f7/86/52f786c1bf9b23e0beed47ed45c0dd02.jpg"
    ]
},
{
    "id": 17,
    "title": "Tablet",
    "category": "Computers",
    "details": "High quality Tablet in Computers category with great features and excellent performance.",
    "price": 5210,
    "offerPrice": 4689,
    "mainImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuSIXXr8yUKTZj2ePDpwLgZ-VSPe40_DBiJA&s",
    "subImages": [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuSIXXr8yUKTZj2ePDpwLgZ-VSPe40_DBiJA&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuSIXXr8yUKTZj2ePDpwLgZ-VSPe40_DBiJA&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuSIXXr8yUKTZj2ePDpwLgZ-VSPe40_DBiJA&s"
    ]
},
{
    "id": 18,
    "title": "4K Television",
    "category": "Home Entertainment",
    "details": "High quality 4K Television in Home Entertainment category with great features and excellent performance.",
    "price": 5440,
    "offerPrice": 4896,
    "mainImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLQQsDXK9etOoktC48QeRMK2yK2C2wtyuOLA&s",
    "subImages": [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLQQsDXK9etOoktC48QeRMK2yK2C2wtyuOLA&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLQQsDXK9etOoktC48QeRMK2yK2C2wtyuOLA&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLQQsDXK9etOoktC48QeRMK2yK2C2wtyuOLA&s"
    ]
},
{
    "id": 19,
    "title": "Gaming Console",
    "category": "Gaming",
    "details": "High quality Gaming Console in Gaming category with great features and excellent performance.",
    "price": 2680,
    "offerPrice": 2412,
    "mainImage": "https://5.imimg.com/data5/SELLER/Default/2023/1/WY/NN/CH/125434654/ps5-gaming-console-500x500.png",
    "subImages": [
        "https://5.imimg.com/data5/SELLER/Default/2023/1/WY/NN/CH/125434654/ps5-gaming-console-500x500.png",
        "https://5.imimg.com/data5/SELLER/Default/2023/1/WY/NN/CH/125434654/ps5-gaming-console-500x500.png",
        "https://5.imimg.com/data5/SELLER/Default/2023/1/WY/NN/CH/125434654/ps5-gaming-console-500x500.png"
    ]
},
{
    "id": 20,
    "title": "Fitness Tracker",
    "category": "Wearables",
    "details": "High quality Fitness Tracker in Wearables category with great features and excellent performance.",
    "price": 2450,
    "offerPrice": 2205,
    "mainImage": "https://static.independent.co.uk/2024/01/23/16/Runlio%20fitness%20tracker.png",
    "subImages": [
        "https://static.independent.co.uk/2024/01/23/16/Runlio%20fitness%20tracker.png",
        "https://static.independent.co.uk/2024/01/23/16/Runlio%20fitness%20tracker.png",
        "https://static.independent.co.uk/2024/01/23/16/Runlio%20fitness%20tracker.png"
    ]
}
]

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
    return Product.insertMany(Products);
  })
  .then(() => {
    console.log("Products inserted successfully");
    mongoose.disconnect();
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB or inserting products:", err);
  });
