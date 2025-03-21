# fotoh-mall


Project Overview

Type: E-commerce platform.

Target Audience: Users looking to purchase home appliances, electronics, and other household items.

Languages/Technologies:

Frontend: HTML, CSS, JavaScript.

Charts: Chart.js for data visualization.

Local Storage: Used for storing products, cart items, and user preferences.

Responsive Design: Basic responsiveness is implemented, but further improvements can be made.

Key Features
User-Facing Features
Home Page (index.html):

Navigation Bar: Dropdown menus for categories like "Kitchen & Home," "Furnishings," "TVs & Screens," and "Home Appliances."

Product Grids: Displays products in a carousel-like format with categories like "Appliances," "Blenders," "Cutting Tools," etc.

Seasonal Offers: A grid for seasonal promotions.

Sales Section: Displays discounted products.

Footer: Contains links to social media, contact information, and company details.

Store Page (store.html):

Displays products filtered by categories (e.g., Mattresses, Appliances, Electrics).

Allows users to add products to their wishlist or cart.

Product Page (product.html):

Displays detailed information about a product, including images, description, and price.

Allows users to add the product to their cart or buy it directly.

Contact Page (contact.html):

A form for users to contact the company.

Links to social media and contact information.

Login/Signup Page (login.html):

Allows users to log in or create an account.

Uses local storage for user data (not secure for production).

Shopping Cart:

Users can add/remove items from the cart.

Supports multiple payment methods (Credit Card, PayPal, Cash on Delivery).

Favorites/Wishlist:

Users can add products to a favorites list.

Admin-Facing Features
Admin Dashboard (admin dashboard.html):

Displays key metrics like total sales, users, orders, and pending orders.

Includes charts for sales, user growth, and order growth using Chart.js.

Allows admins to manage banners (upload/delete images).

Product Management (admin.html):

Admins can add, edit, or delete products.

Products are categorized into Mattresses, Appliances, and Electrics.

Supports uploading multiple images for each product.

Orders Management (OrdersControl.html):

Displays a list of orders with details like order ID, customer name, status, total, and payment method.

Admins can update the status of orders.

Banner Management:

Admins can upload and manage banners displayed on the home page.

Technical Details
Frontend:

HTML/CSS: Custom styles are defined in styles.css. The design is clean and modern, with a gradient background and responsive layouts.

JavaScript: Handles dynamic content like product filtering, cart management, and chart rendering.

Chart.js: Used for visualizing sales, user growth, and order growth in the admin dashboard.

Local Storage:

Used to store products, cart items, wishlist items, and user data.

Limitation: Local storage is not secure for sensitive data like user credentials. Consider using a backend with a database for production.

Responsiveness:

The site is partially responsive, but some elements (like the product grids) may need further adjustments for smaller screens.

Dynamic Content:

Products, orders, and banners are dynamically loaded using JavaScript and local storage.
