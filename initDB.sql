-- DB NAME: outfitoracleDB
CREATE TABLE users (
    email VARCHAR(255) PRIMARY KEY,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    description VARCHAR(255),
    title VARCHAR(255),
    category VARCHAR(255)[],
    styles VARCHAR(255)[],
    email VARCHAR(255) REFERENCES users(email) ON DELETE CASCADE
);

CREATE TABLE cart (
    email VARCHAR(255) REFERENCES users(email) ON DELETE CASCADE,
    product_id INT REFERENCES products(id) ON DELETE CASCADE,
    quantity INT NOT NULL CHECK (quantity > 0),
    PRIMARY KEY (email, product_id)
);

CREATE TABLE explore (
    id INT REFERENCES products(id) ON DELETE CASCADE
);

CREATE TABLE selling (
    email VARCHAR(255) REFERENCES users(email) ON DELETE CASCADE,
    product_id INT REFERENCES products(id) ON DELETE CASCADE,
    quantity INT NOT NULL CHECK (quantity > 0),
    price INT NOT NULL CHECK (price >= 1),
    PRIMARY KEY(email, product_id, quantity)
);

CREATE TABLE sold (
    buyer_email VARCHAR(255) REFERENCES users(email) ON DELETE CASCADE,
    seller_email VARCHAR(255) REFERENCES users(email) ON DELETE CASCADE,
    date_sold TIMESTAMP,
    product_id INT REFERENCES products(id) ON DELETE CASCADE,
    quantity INT NOT NULL CHECK (quantity > 0),
    PRIMARY KEY(buyer_email, seller_email, date_sold, product_id, quantity)
);
