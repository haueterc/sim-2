CREATE TABLE houses (
    home_id SERIAL PRIMARY KEY NOT NULL,
    applicant varchar(40) NOT NULL,
    address varchar(40) NOT NULL,
    city varchar(40) NOT NULL,
    state varchar(40) NOT NULL,
    zipcode integer NOT NULL
)

Insert into houses (applicant, address,  city, state, zipcode) values ('john', '456', 'ville', 'ak', 12345);