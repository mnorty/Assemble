select users.username,project.title,project.due_date,project.description,project.userid
from project
Inner Join users on users.id = project.userid