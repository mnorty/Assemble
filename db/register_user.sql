-- insert into users(username,password,email)
-- values(${username}, ${password},${email});

insert into users(username,password)
values(${username},${password})
returning username, id;