-- Inserting sample data into users table
INSERT INTO users (email, password, styles) VALUES
('alice@example.com', 'alicePass123', ARRAY['casual', 'streetwear']),
('bob@example.com', 'bobPass123', ARRAY['formal', 'business']);

-- Inserting sample data into products table
INSERT INTO products (description, title, gender, styles, img_url, color, material, size_clothing, pattern, email) VALUES
('Comfortable and trendy streetwear hoodie', 'Street Hoodie', 'unisex', ARRAY['streetwear', 'casual'], 'http://example.com/hoodie.jpg', 'black', 'cotton', 'L', 'plain', 'alice@example.com'),
('Formal business suit for professional settings', 'Business Suit', 'male', ARRAY['formal', 'business'], 'http://example.com/suit.jpg', 'navy', 'wool', '40', 'solid', 'bob@example.com');

-- Inserting sample data into cart table
INSERT INTO cart (email, product_id, quantity) VALUES
('alice@example.com', 1, 1),
('bob@example.com', 2, 1);

-- Inserting sample data into explore table
INSERT INTO explore (id) VALUES
(1),
(2);

-- Inserting sample data into selling table
INSERT INTO selling (email, product_id, quantity, price) VALUES
('alice@example.com', 1, 10, 50),
('bob@example.com', 2, 5, 150);

-- Inserting sample data into sold table
INSERT INTO sold (buyer_email, seller_email, date_sold, product_id, quantity) VALUES
('bob@example.com', 'alice@example.com', '2023-12-05 09:00:00', 1, 1),
('alice@example.com', 'bob@example.com', '2023-12-06 15:30:00', 2, 1);
