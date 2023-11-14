-- Insert example data into Users
INSERT INTO users (email, password) VALUES 
('user1@example.com', 'password1'),
('user2@example.com', 'password2');

-- Insert example data into Products
INSERT INTO products (description, title, category, styles, email) VALUES 
('A cool t-shirt', 'Cool Shirt', ARRAY['clothing', 'casual'], ARRAY['modern', 'summer'], 'user1@example.com'),
('An awesome pair of sneakers', 'Awesome Sneakers', ARRAY['footwear'], ARRAY['sporty', 'trendy'], 'user2@example.com');

-- Insert example data into Cart
INSERT INTO cart (email, product_id, quantity) VALUES 
('user1@example.com', 1, 2),
('user2@example.com', 2, 1);

-- Insert example data into Explore
INSERT INTO explore (id) VALUES 
(1),
(2);

-- Insert example data into Selling
INSERT INTO selling (email, product_id, quantity, price) VALUES 
('user1@example.com', 1, 5, 20),
('user2@example.com', 2, 3, 50);

-- Insert example data into Sold
INSERT INTO sold (buyer_email, seller_email, date_sold, product_id, quantity) VALUES 
('user2@example.com', 'user1@example.com', '2023-01-01 10:00:00', 1, 1),
('user1@example.com', 'user2@example.com', '2023-01-02 15:30:00', 2, 1);