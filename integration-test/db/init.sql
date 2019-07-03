drop table if exists movies;

create table if not exists movies (
    id serial primary key,
    name text,
    genre text,
    date timestamp
);

insert into movies (name, genre, date)
values
('Final Desintation', 'Thriller', current_timestamp),
('Shrek', 'Family', current_timestamp),
('Lord of the Rings', 'Fantasy', current_timestamp);
