insert into movies (name, genre, date)
values (${name}, ${genre}, ${date})
returning *;
