# 🛒 E-commerce Admin API

This project provides a back-end API for an admin dashboard that offers insights into **sales**, **revenue**, and **inventory status** for an e-commerce platform. It also supports **new product registration** and **inventory tracking**.

---

## 📌 Features

- 📊 **Sales Status**
  - View and filter sales data
  - Analyze revenue (daily, weekly, monthly, annual)
  - Compare sales across different products and periods

- 📦 **Inventory Management**
  - View current inventory
  - Detect low-stock products
  - Track stock levels over time

---

## 🧰 Tech Stack

- **Language:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB (Mongoose ODM)
- **API Type:** RESTful
- **Other Tools:** dotenv, nodemon

---

## 🚀 Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/your-username/ecommerce-admin-api.git
cd ecommerce-admin-api
```

### 2. Install Dependencies

```bash
npm install
```
### 3. Environment Variables
Create a .env file and add:
```bash
PORT=4000
MONGO_URI=mongodb://localhost:27017/ecommerce_admin
```

### 4. Start the Server
```bash
npm run dev

```
### 5.Seed Demo Data
To populate demo products, sales, and inventory:

```bash
node src/seeder/seed.js

```
### 6.API Endpoints
Sales
Method	Endpoint	Description
GET	/api/sales	Get sales & revenue (with filters)

Query Parameters (optional):

start: Start date (e.g. 2025-05-01)

end: End date (e.g. 2025-05-30)

product: Product ID

Inventory
Method	Endpoint	Description
GET	/api/inventory	Get all inventory and low stock

### 7.Database Schema
Product
```bash
{
  name: String,
  category: String,
  price: Number
}

```
Inventory
```bash

{
  product: ObjectId, // reference to Product
  quantity: Number
}
```
Sale
```bash
{
  product: ObjectId, // reference to Product
  quantity: Number,
  totalPrice: Number,
  date: Date
}
```
### 8.Folder Structure
```bash
.
├── app.js
├── .env
├── package.json
├── src
│   ├── config
│   │   └── db.js
│   ├── controllers
│   │   ├── inventory.controller.js
│   │   └── sales.controller.js
│   ├── helpers
│   │   └── revenue.helper.js
│   ├── middlewares
│   │   └── error.middleware.js
│   ├── models
│   │   ├── Inventory.js
│   │   ├── Product.js
│   │   └── Sale.js
│   ├── routes
│   │   ├── inventory.routes.js
│   │   └── sales.routes.js
│   ├── services
│   │   ├── inventory.service.js
│   │   └── sales.service.js
│   ├── utils
│   │   └── query.filter.js
│   └── seeder
│       └── seed.js

```
### Notes
All sales data is returned along with revenue totals.

Inventory API also returns a list of low-stock items based on a configurable threshold (default: 10).

Make sure to use ISO date format (YYYY-MM-DD) when querying by date.

### Author

Developed by Talha Hussain


