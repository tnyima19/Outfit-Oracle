-- Insert a user into the USERS table
INSERT INTO USERS (email, password) VALUES ('user@example.com', 'securepassword123');
INSERT INTO USERS (email, password) VALUES ('seller@example.com', 'sellerpassword456');
INSERT INTO USERS (email, password) VALUES ('buyer@example.com', 'buyerpassword789');

-- Add a product to the PRODUCTS table
INSERT INTO PRODUCTS (description, title, category, styles, email) 
VALUES ('A green t-shirt with eco print', 'Green T-Shirt', ARRAY['clothing', 'casual'], ARRAY['vintage', 'cotton'], 'seller@example.com');

-- We must fetch the product_id after it's been inserted since it's a SERIAL type
-- The product_id will be used in the following INSERT statements

-- Add an item to a user's cart in the CART table
-- Assuming that the SERIAL id given to the product above is 1
INSERT INTO CART (email, product_id, quantity) VALUES ('user@example.com', 1, 2);

-- Insert a product into the EXPLORE table
-- Assuming that the SERIAL id given to the product above is 1
INSERT INTO EXPLORE (id) VALUES (1);

-- Add an entry to the SELLING table
-- Assuming that the SERIAL id given to the product above is 1
INSERT INTO SELLING (email, product_id, quantity, price) VALUES ('seller@example.com', 1, 5, 20);

-- Record a sale in the SOLD table
-- Assuming that the SERIAL id given to the product above is 1
INSERT INTO SOLD (buyer_email, seller_email, date_sold, product_id, quantity) 
VALUES ('buyer@example.com', 'seller@example.com', NOW(), 1, 1);
