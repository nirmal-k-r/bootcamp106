# Description
E-commerce project that allows:
-------
1. Users
------
- Login
- Register account
- View all products 
- View one product
- Make a purchase
- View wishlist
- Add to wishlist
- Delete wishlist

2. Admin
-----------
- Create a product
- Update a product
- Delete a product


# Route planning
--------------
- authentication
    - Login
    - Register
- product
    - View products
    - view product
    - create product
    - update product
    - delete product
- wishlist
    - View wishlist
    - Create wishlist item
    - delete wish item

# Models
- User (id, username, password, address, isAdmin)
- product (id, name, description, quantity, price, imageUrl)
- wishlist (id, userId, productId )