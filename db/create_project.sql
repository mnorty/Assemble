insert into project(title,due_date,description,creator_id,userid)
values(${title}, ${due_date},${description},${creator_id},${userid});

select * from project 
where creator_id = ${creator_id}