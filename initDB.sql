-- DB NAME: outfitoracleDB
CREATE TABLE USERS(
    email VARCHAR(255) PRIMARY KEY,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE PRODUCTS(
    id SERIAL PRIMARY KEY,
    description VARCHAR(255),
    title VARCHAR(255),
    category VARCHAR(255)[],
    styles VARCHAR(255)[],
    email VARCHAR(255) REFERENCES USERS(email) ON DELETE CASCADE
);

CREATE TABLE CART(
    email VARCHAR(255) REFERENCES USERS(email) ON DELETE CASCADE,
    product_id INT REFERENCES PRODUCTS(id) ON DELETE CASCADE,
    quantity INT NOT NULL CHECK (quantity > 0), 
    PRIMARY KEY (email, product_id)
);

CREATE TABLE EXPLORE(
    id INT REFERENCES PRODUCTS(id) ON DELETE CASCADE
);

CREATE TABLE SELLING(
    email VARCHAR(255) REFERENCES USERS(email) ON DELETE CASCADE,
    product_id INT REFERENCES PRODUCTS(id) ON DELETE CASCADE,
    quantity INT NOT NULL CHECK (quantity > 0), 
    price INT NOT NULL CHECK (price >= 1), 
    PRIMARY KEY(email, product_id, quantity)
);

CREATE TABLE SOLD(
    buyer_email VARCHAR(255) REFERENCES USERS(email) ON DELETE CASCADE,
    seller_email VARCHAR(255) REFERENCES USERS(email) ON DELETE CASCADE,
    date_sold TIMESTAMP,
    product_id INT REFERENCES PRODUCTS(id) ON DELETE CASCADE,
    quantity INT NOT NULL CHECK (quantity > 0),
    PRIMARY KEY(buyer_email, seller_email, date_sold, product_id, quantity)
);
