delete from project 
where id = ${project_id};

select * from project 
where creator_id = ${id}