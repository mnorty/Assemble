insert into project(title,due_date,description)
values(${title}, ${due_date},${description});

insert into project(title,due_date,description)
values(${title},${due_date},${description})
returning title, id, description;