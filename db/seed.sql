create table product (
    product_id serial primary key not null,
    name varchar(60) not null,
    description varchar(100) not null,
    price integer not null,
    image_url text not null
);