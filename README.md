# Veladie Back API

<p style="text-align: justify">
The Veladie Back API is the backend service for the Veladie e-commerce platform. This API provides endpoints for user authentication, product management, shopping cart operations, favorites management, address handling, purchase creation, and more.
</p>

## **_Build With_** 🛠️

<div style="text-align: left">
    <p>
        <a href="https://code.visualstudio.com" target="_blank"> <img alt="V" src="https://raw.githubusercontent.com/devicons/devicon/55609aa5bd817ff167afce0d965585c92040787a/icons/vscode/vscode-original.svg" height="60" width = "60"></a>
        <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="60" alt="Nest Logo" /></a>
    </p>
</div>

## **_Versioned_** 📌

<div style="text-align: left">
    <a href="https://git-scm.com/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/git/git-original.svg" height="60" width = "60" alt="Git"></a>
    <a href="https://github.com/" target="_blank"> <img src="https://img.icons8.com/fluency-systems-filled/344/ffffff/github.png" height="60" width = "60" alt="GitHub"></a>
</div>

## **_Installation_** 📦

```bash
$ pnpm install
```

## **_Running the app_** 📦

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
```

## **_Table of Contents_** ✒️

- [Authentication](#authentication)
  - [Login](#login)
  - [Register](#register)
- [User Profile](#user-profile)
- [Shopping Cart](#shopping-cart)
  - [Get Cart](#get-cart)
  - [Add Product to Cart](#add-product-to-cart)
- [Favorites](#favorites)
  - [Get Favorites](#get-favorites)
  - [Add Product to Favorites](#add-product-to-favorites)
- [Colors](#colors)
  - [Create Color](#create-color)
  - [Get All Colors](#get-all-colors)
- [Products](#products)
  - [Create Product](#create-product)
  - [Get All Products](#get-all-products)
  - [Add Color to Product](#add-color-to-product)
  - [Add Collection to Product](#add-collection-to-product)
  - [Add Categories to Product](#add-categories-to-product)
- [Address](#address)
  - [Add Address](#add-address)
- [Purchases](#purchases)
  - [Create Purchase](#create-purchase)
  - [Get User's Purchases](#get-users-purchases)
- [Categories](#categories)
  - [Create Category](#create-category)
  - [Get All Categories](#get-all-categories)
- [Collections](#collections)
  - [Create Collection](#create-collection)
  - [Get All Collections](#get-all-collections)

## **_Authentication_** ✒️

### **_Login_** ✒️

- **Endpoint:** `/auth/login`
- **Method:** `POST`
- **Description:** User Login to Get an Access Token
- **Request Body:**
  - Content-Type: `application/json`
  - Schema: [LoginDTO](#loginDTO)
- **Responses:**
  - `200`: User Login Successful
  - `401`: Unauthorized

### **_Register_** ✒️

- **Endpoint:** `/auth/register`
- **Method:** `POST`
- **Description:** User Registration
- **Request Body:**
  - Content-Type: `application/json`
  - Schema: [RegisterDTO](#registerDTO)
- **Responses:**
  - `201`: User Registered
  - `401`: Unauthorized

## **_User Profile_** ✒️

### **_Get Profile_** ✒️

- **Endpoint:** `/user`
- **Method:** `GET`
- **Description:** Get User Details
- **Responses:**
  - `200`: User Details
  - `401`: Unauthorized

## **_Shopping Cart_** ✒️

### **_Get Cart_** ✒️

- **Endpoint:** `/cart`
- **Method:** `GET`
- **Description:** Get User's Cart Details
- **Responses:**
  - `200`: User's Cart Details
  - `401`: Unauthorized

### **_Add Product to Cart_** ✒️

- **Endpoint:** `/cart`
- **Method:** `POST`
- **Description:** Add Product to User's Cart
- **Request Body:**
  - Content-Type: `application/json`
  - Schema: [CartsDTO](#cartsDTO)
- **Responses:**
  - `200`: Product Added to User's Cart
  - `401`: Unauthorized

## **_Favorites_** ✒️

### **_Get Favorites_** ✒️

- **Endpoint:** `/favorites`
- **Method:** `GET`
- **Description:** Get User's Favorites Details
- **Responses:**
  - `200`: User's Favorites Details
  - `401`: Unauthorized

### **_Add Product to Favorites_** ✒️

- **Endpoint:** `/favorites`
- **Method:** `POST`
- **Description:** Add Product to User's Favorites
- **Request Body:**
  - Content-Type: `application/json`
  - Schema: [FavoritesDTO](#favoritesDTO)
- **Responses:**
  - `200`: Product Added to User's Favorites
  - `401`: Unauthorized

## **_Colors_** ✒️

### **_Create Color_** ✒️

- **Endpoint:** `/colors`
- **Method:** `POST`
- **Description:** Add Color to Products
- **Request Body:**
  - Content-Type: `application/json`
  - Schema: [ColorsDTO](#colorsDTO)
- **Responses:**
  - `200`: Product's Color Added
  - `401`: Unauthorized

### **_Get All Colors_** ✒️

- **Endpoint:** `/colors`
- **Method:** `GET`
- **Description:** Get All Colors
- **Responses:**
  - `200`: Get All Colors
  - `401`: Unauthorized

## **_Products_** ✒️

### **_Create Product_** ✒️

- **Endpoint:** `/products`
- **Method:** `POST`
- **Description:** Create Product
- **Request Body:**
  - Content-Type: `application/json`
  - Schema: [ProductsDTO](#productsDTO)
- **Responses:**
  - `201`: Product Created
  - `401`: Unauthorized

### **_Get All Products_** ✒️

- **Endpoint:** `/products`
- **Method:** `GET`
- **Description:** Get All Products
- **Responses:**
  - `200`: Get All Products
  - `401`: Unauthorized

### **_Add Color to Product_** ✒️

- **Endpoint:** `/products/color`
- **Method:** `POST`
- **Description:** Add Color to Product
- **Request Body:**
  - Content-Type: `application/json`
  - Schema: [ProductPutDTO](#productPutDTO)
- **Responses:**
  - `200`: Color Added to Product
  - `401`: Unauthorized

### **_Add Collection to Product_** ✒️

- **Endpoint:** `/products/collection`
- **Method:** `POST`
- **Description:** Add Collection to Product
- **Request Body:**
  - Content-Type: `application/json`
  - Schema: [ProductPutDTO](#productPutDTO)
- **Responses:**
  - `200`: Collection Added to Product
  - `401`: Unauthorized

### **_Add Categories to Product_** ✒️

- **Endpoint:** `/products/categories`
- **Method:** `POST`
- **Description:** Add Categories to Product
- **Request Body:**
  - Content-Type: `application/json`
  - Schema: [ProductPutDTO](#productPutDTO)
- **Responses:**
  - `200`: Categories Added to Product
  - `401`: Unauthorized

## **_Address_** ✒️

### **_Add Address_** ✒️

- **Endpoint:** `/address`
- **Method:** `POST`
- **Description:** Add Address to User
- **Request Body:**
  - Content-Type: `application/json`
  - Schema: [AddressDTO](#addressDTO)
- **Responses:**
  - `200`: Address Added to User
  - `401`: Unauthorized

## **_Purchases_** ✒️

### **_Create Purchase_** ✒️

- **Endpoint:** `/purchases`
- **Method:** `POST`
- **Description:** Create Purchase
- **Request Body:**
  - Content-Type: `application/json`
  - Schema: [PurchasesDTO](#purchasesDTO)
- **Responses:**
  - `201`: Purchase Created
  - `401`: Unauthorized

### **_Get User's Purchases_** ✒️

- **Endpoint:** `/purchases`
- **Method:** `GET`
- **Description:** Get User's Purchases
- **Responses:**
  - `200`: User's Purchases
  - `401`: Unauthorized

## **_Categories_** ✒️

### **_Create Category_** ✒️

- **Endpoint:** `/categories`
- **Method:** `POST`
- **Description:** Add Category to Products
- **Request Body:**
  - Content-Type: `application/json`
  - Schema: [CategoriesDTO](#categoriesDTO)
- **Responses:**
  - `200`: Product's Category Added
  - `401`: Unauthorized

### **_Get All Categories_** ✒️

- **Endpoint:** `/categories`
- **Method:** `GET`
- **Description:** Get All Categories
- **Responses:**
  - `200`: Get All Categories
  - `401`: Unauthorized

## **_Collections_** ✒️

### **_Create Collection_** ✒️

- **Endpoint:** `/collections`
- **Method:** `POST`
- **Description:** Add Collection to Products
- **Request Body:**
  - Content-Type: `application/json`
  - Schema: [CollectionsDTO](#collectionsDTO)
- **Responses:**
  - `200`: Product's Collections Added
  - `401`: Unauthorized

### **_Get All Collections_** ✒️

- **Endpoint:** `/collections`
- **Method:** `GET`
- **Description:** Get All Collections
- **Responses:**
  - `200`: Get All Collections
  - `401`: Unauthorized

## **_Data Transfer Objects (DTOs)_** ✒️

### **_LoginDTO_** ✒️

```json
{
  "type": "object",
  "properties": {
    "username": { "type": "string" },
    "password": { "type": "string" }
  },
  "required": ["username", "password"]
}
```

### **_RegisterDTO_** ✒️

```json
{
  "type": "object",
  "properties": {
    "name": { "type": "string" },
    "email": { "type": "string" },
    "username": { "type": "string" },
    "phone": { "type": "string" },
    "password": { "type": "string" },
    "gender": { "type": "string", "enum": ["female", "male"] },
    "birthDay": { "format": "date-time", "type": "string" },
    "role": { "type": "string", "enum": ["user", "admin"] },
    "favorites": { "type": "string" },
    "cart": { "type": "string" }
  },
  "required": [
    "name",
    "email",
    "username",
    "phone",
    "password",
    "gender",
    "birthDay",
    "role",
    "favorites",
    "cart"
  ]
}
```

### **_CartsDTO_** ✒️

```json
{
  "type": "object",
  "properties": {
    "product": { "type": "string" }
  },
  "required": ["product"]
}
```

### **_FavoritesDTO_** ✒️

```json
{
  "type": "object",
  "properties": {
    "product": { "type": "string" }
  },
  "required": ["product"]
}
```

### **_ColorsDTO_** ✒️

```json
{
  "type": "object",
  "properties": {
    "name": { "type": "string" },
    "html": { "type": "string" }
  },
  "required": ["name", "html"]
}
```

### **_ProductsDTO_** ✒️

```json
{
  "type": "object",
  "properties": {
    "name": { "type": "string" },
    "description": { "type": "string" },
    "recomendation": { "type": "string" },
    "categories": { "type": "array", "items": { "type": "string" } },
    "colors": { "type": "array", "items": { "type": "string" } },
    "collections": { "type": "array", "items": { "type": "string" } },
    "price": { "type": "number" },
    "ammount": { "type": "number" },
    "size": { "type": "string", "enum": ["xs", "s", "m", "l", "xl", "xxl"] }
  },
  "required": [
    "name",
    "description",
    "recomendation",
    "categories",
    "colors",
    "collections",
    "price",
    "ammount",
    "size"
  ]
}
```

### **_AddressDTO_** ✒️

```json
{
  "type": "object",
  "properties": {
    "name": { "type": "string" },
    "city": { "type": "string" },
    "address": { "type": "string" },
    "neighborhood": { "type": "string" }
  },
  "required": ["name", "city", "address", "neighborhood"]
}
```

### **_PurchasesDTO_** ✒️

```json
{
  "type": "object",
  "properties": {
    "user": { "type": "string" },
    "products": { "type": "array", "items": { "type": "string" } },
    "total": { "type": "number" },
    "state": { "type": "string", "enum": ["bought", "dispatch", "delivered"] }
  },
  "required": ["user", "products", "total", "state"]
}
```

### **_CategoriesDTO_** ✒️

```json
{
  "type": "object",
  "properties": {
    "name": { "type": "string" }
  },
  "required": ["name"]
}
```

### **_CollectionsDTO_** ✒️

```json
{
  "type": "object",
  "properties": {
    "name": { "type": "string" }
  },
  "required": ["name"]
}
```

## **_Authors_** ✒️

<div style="text-align: left">
    <a href="https://github.com/cuatrosr" target="_blank"> <img alt="cuatrosr" src="https://images.weserv.nl/?url=avatars.githubusercontent.com/u/70908378?v=4&h=60&w=60&fit=cover&mask=circle"></a>
    <a href="https://github.com/G20-00" target="_blank"> <img alt="G20-00" src="https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/70019070?v=4&h=60&w=60&fit=cover&mask=circle"></a>
</div>

---

[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/for-you.svg)](https://forthebadge.com)
