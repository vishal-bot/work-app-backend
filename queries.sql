-- Create Teams table
CREATE TABLE Teams (
    team_id SERIAL PRIMARY KEY,
    team_name VARCHAR(100) NOT NULL
);

-- Create Team_Members table
CREATE TABLE Team_Members (
    member_id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    number VARCHAR(15) CHECK (number ~ '^[0-9]{10}$'), -- Indian contact number format (10 digits)
    username VARCHAR(50) NOT NULL,
    password VARCHAR(255) NOT NULL, -- You should hash passwords before storing them
    role VARCHAR(50),
    status VARCHAR(50),
    company VARCHAR(100),
    team_id INT NOT NULL,
    FOREIGN KEY (team_id) REFERENCES Teams(team_id)
);


-- Insert sample data into Teams table
INSERT INTO Teams (team_name)
VALUES ('Team Alpha'),
       ('Team Beta'),
       ('Team Gamma');

-- Insert sample data into Team_Members table
INSERT INTO Team_Members (name, email, number, username, password, role, status, company, team_id)
VALUES ('John Doe', 'john.doe@example.com', '9876543210', 'johndoe', 'hashed_password_1', 'Developer', 'Active', 'Company A', 1),
       ('Jane Smith', 'jane.smith@example.com', '9876543211', 'janesmith', 'hashed_password_2', 'Manager', 'Active', 'Company A', 1),
       ('Alice Johnson', 'alice.johnson@example.com', '9876543212', 'alicejohnson', 'hashed_password_3', 'Developer', 'Active', 'Company B', 2),
       ('Bob Brown', 'bob.brown@example.com', '9876543213', 'bobbrown', 'hashed_password_4', 'Tester', 'Inactive', 'Company B', 2),
       ('Charlie Davis', 'charlie.davis@example.com', '9876543214', 'charliedavis', 'hashed_password_5', 'Designer', 'Active', 'Company C', 3);

-- Insert sample data into Team_Members table
INSERT INTO Team_Members (name, email, number, username, password, role, status, company, team_id)
VALUES ('Vishal Singh', 'john.doe@example.com', '9876543210', 'Vishalsingh', 'hashed_password_1', 'Developer', 'Active', 'Company A', 1),
       ('Pratik Oberoi', 'jane.smith@example.com', '9876543211', 'pratikoberoi', 'hashed_password_2', 'Manager', 'Active', 'Company A', 1),
       ('Poonam Patil', 'alice.johnson@example.com', '9876543212', 'poonampatil', 'hashed_password_3', 'Developer', 'Active', 'Company B', 1),
       ('Mahesh Yadav', 'bob.brown@example.com', '9876543213', 'maheshyadav', 'hashed_password_4', 'Tester', 'Inactive', 'Company B', 1),
       ('Reema Koli', 'charlie.davis@example.com', '9876543214', 'reemakoil', 'hashed_password_5', 'Designer', 'Active', 'Company C', 1);



CREATE TABLE Projects (
    project_id SERIAL PRIMARY KEY,
    project_name VARCHAR(100) NOT NULL,
    project_desc TEXT,
    status VARCHAR(50),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    team_id INT NOT NULL,
    FOREIGN KEY (team_id) REFERENCES Teams(team_id)
);


INSERT INTO Projects (project_name, project_desc, status, team_id)
VALUES ('Project X', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'Active', 1),
('Project A', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'Active', 1),
('Project L', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'Active', 1),
('Project P', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'Active', 1),
       ('Project Y', 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'Inactive', 2),
       ('Project Z', 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 'Active', 3);





CREATE TABLE Tasks (
    task_id SERIAL PRIMARY KEY,
    task_title VARCHAR(255) NOT NULL,
    task_desc TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status VARCHAR(50) CHECK (status IN ('Active', 'InActive', 'Completed')),
    priority VARCHAR(50) CHECK (priority IN ('High','Medium','Low')),
    stage VARCHAR(50) CHECK (stage IN ('ToDo', 'InProgress', 'Done')),
    assigned_to VARCHAR(10),
    project_id INT NOT NULL,
    FOREIGN KEY (project_id) REFERENCES Projects(project_id)
);






-- Insert dummy data into Tasks table
INSERT INTO Tasks (task_title, task_desc, status, priority, stage, assigned_to, project_id)
VALUES 
    ('Task 1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum, ligula quis posuere scelerisque, odio quam tincidunt urna, nec aliquam lorem sapien nec risus.', 'Active', 'High', 'ToDo', '1,2,3', 1),
    ('Task 2', 'Suspendisse potenti. Phasellus blandit libero nec lorem commodo, id rutrum ligula dictum.', 'InActive', 'Medium', 'InProgress', '2,3', 2),
    ('Task 3', 'Proin in mi eu mi rhoncus finibus. Vivamus consectetur ut quam a facilisis. Nullam fermentum gravida urna ut ultricies.', 'Completed', 'Low', 'Done', '1', 3),
    ('Task 4', 'Nulla et metus feugiat, vestibulum ante at, varius nulla. Phasellus id enim enim.', 'Active', 'Medium', 'ToDo', '2,3', 1),
    ('Task 5', 'Morbi ultricies tincidunt nisl non rutrum. Nulla facilisi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.', 'InActive', 'High', 'InProgress', '3', 2),
    ('Task 6', 'Quisque id eros arcu. Integer consectetur lorem eros, nec tincidunt nisi vestibulum eget.', 'Completed', 'Low', 'Done', '1,2', 3),
    ('Task 7', 'Maecenas non velit nisl. Fusce interdum, magna non malesuada pellentesque, justo orci aliquet libero, vitae accumsan neque lacus et est.', 'Active', 'Medium', 'ToDo', '1,3', 1),
    ('Task 8', 'Pellentesque in libero vel mi fermentum ullamcorper. Sed semper dignissim ex vel feugiat.', 'InActive', 'High', 'InProgress', '2', 2),
    ('Task 9', 'Morbi tempus, magna nec elementum consequat, sapien purus malesuada leo, sit amet efficitur urna ante ut ipsum.', 'Completed', 'Medium', 'Done', '3', 3),
    ('Task 10', 'Phasellus rutrum consequat consectetur. Nulla congue ipsum sit amet nulla cursus, nec tempor ipsum sollicitudin.', 'Active', 'Low', 'ToDo', '1,2', 1),
    ('Task 11', 'Ut rhoncus justo et sem laoreet efficitur. Maecenas tristique ex vel nisl commodo, a hendrerit turpis placerat.', 'InActive', 'High', 'InProgress', '2', 2),
    ('Task 12', 'Cras nec est eget arcu scelerisque suscipit. Sed vulputate nulla vel nunc euismod, non malesuada odio luctus.', 'Completed', 'Low', 'Done', '3', 3),
    ('Task 13', 'Fusce tristique feugiat tortor, sed elementum odio scelerisque vel. Fusce nec suscipit ipsum.', 'Active', 'High', 'ToDo', '1', 1),
    ('Task 14', 'Suspendisse potenti. Donec id lorem a ligula elementum commodo.', 'InActive', 'Medium', 'InProgress', '2,3', 2),
    ('Task 15', 'Morbi fringilla turpis vitae lacinia viverra. Curabitur nec volutpat metus, vitae facilisis tortor.', 'Completed', 'Low', 'Done', '1,2', 3),
    ('Task 16', 'Sed id convallis odio. Nam ac orci nulla. Sed laoreet volutpat purus, sed dapibus arcu efficitur id.', 'Active', 'Medium', 'ToDo', '1,3', 1),
    ('Task 17', 'Proin quis libero rutrum, mattis lorem eu, placerat risus. Nulla facilisi.', 'InActive', 'High', 'InProgress', '2', 2),
    ('Task 18', 'Aliquam tincidunt justo in sapien scelerisque, at venenatis tortor semper. Praesent vehicula euismod eros sit amet dictum.', 'Completed', 'Medium', 'Done', '3', 3),
    ('Task 19', 'Maecenas volutpat placerat lectus, vel auctor magna varius a. Aliquam erat volutpat.', 'Active', 'Low', 'ToDo', '1,2,3', 1),
    ('Task 20', 'Ut convallis arcu quis magna lobortis aliquet. Sed bibendum elit id metus vestibulum dignissim.', 'InActive', 'High', 'InProgress', '2,3', 2);




-- -- Create Comments table
-- CREATE TABLE Comments (
--     comment_id SERIAL PRIMARY KEY,
--     task_id INT NOT NULL,
--     member_id INT NOT NULL,
--     comment_text TEXT,
--     timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
--     FOREIGN KEY (task_id) REFERENCES Tasks(task_id),
--     FOREIGN KEY (member_id) REFERENCES Team_Members(member_id)
-- );

-- -- Insert dummy data into Comments table
-- INSERT INTO Comments (task_id, member_id, comment_text)
-- VALUES 
--     (1, 1, 'This is a comment on task 1 by member 1.'),
--     (2, 2, 'This is a comment on task 2 by member 2.'),
--     (3, 3, 'This is a comment on task 3 by member 3.'),
--     (4, 1, 'This is a comment on task 4 by member 1.'),
--     (5, 2, 'This is a comment on task 5 by member 2.'),
--     (6, 3, 'This is a comment on task 6 by member 3.'),
--     (7, 1, 'This is a comment on task 7 by member 1.'),
--     (8, 2, 'This is a comment on task 8 by member 2.'),
--     (9, 3, 'This is a comment on task 9 by member 3.'),
--     (10, 1, 'This is a comment on task 10 by member 1.');



CREATE TABLE task_mapper (
	mapper_id serial Primary key,
    task_id Int not null,
	member_id int not null,
    FOREIGN KEY (task_id) REFERENCES tasks(task_id),
	FOREIGN KEY (member_id) REFERENCES team_members(member_id)
);

Insert into task_mapper (task_id, member_id) 
values 
(1 , 1),
(1 , 2),
(1 , 3),
(1 , 4),
(3 , 3),
(3 , 5),
(4 , 1),
(4 , 4);

select * from task_mapper;
select * from tasks
truncate table task_mapper

select tasks.task_title, team_members.name 
from tasks join task_mapper 
on tasks.task_id = task_mapper.task_id 
join team_members 
on team_members.member_id = task_mapper.member_id 
where task_mapper.member_id = 5;

select * from tasks order by row_number() desc;

-- Create Comments table
CREATE TABLE Comments (
    comment_id SERIAL PRIMARY KEY,
    task_id INT NOT NULL,
    member_id INT NOT NULL,
	member_name TEXT NOT NULL,
    comment_text TEXT,
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO Comments (task_id, member_id, member_name, comment_text)
VALUES 
    (1, 1, 'Vishal Singh', 'This is a comment on task 1 by member 1.');


select * from comments where task_id = 1;
select * from team_members;


with cte as
(SELECT t.*,
       string_agg(comment_text, ', ')
           OVER (partition by member_name ORDER BY member_id) AS aggregated_comments,
 		   row_number() over(partition by member_name order by timestamp desc) as rnk
FROM comments t)
select cte.*    from cte where rnk = 1;


Delete  from comments where comment_id = 1;

drop table comments;
ALTER TABLE tasks
ADD created_by INT;

select * from tasks;

select * from tasks where assigned_to in (2::text) or created_by = 2;

SELECT tasks.* FROM tasks JOIN projects ON tasks.project_id = projects.project_id WHERE projects.team_id = 1 AND (tasks.assigned_to IN (1::text) OR tasks.created_by = 1) ORDER BY tasks.task_id DESC;


-- Create Tasks Updates table
CREATE TABLE tasks_updates (
    update_id SERIAL PRIMARY KEY,
    task_id INT,
    task_title VARCHAR(255) NOT NULL,
	task_desc text,
	status VARCHAR(50),
	member_id int,
	update_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (task_id) REFERENCES Tasks(task_id)
);

drop table tasks_updates;

-- Create Trigger function
CREATE OR REPLACE FUNCTION log_task_updates()
RETURNS TRIGGER AS $$
BEGIN
    IF TG_OP = 'INSERT' THEN
        INSERT INTO tasks_updates (task_id, task_title, task_desc, status, member_id)
        VALUES (NEW.task_id, NEW.task_title, NEW.task_desc, 'Created tasks', new.created_by);
    ELSIF TG_OP = 'UPDATE' THEN
        IF OLD.task_title <> NEW.task_title OR OLD.task_desc <> NEW.task_desc OR OLD.status <> NEW.status THEN
            INSERT INTO tasks_updates (task_id, task_title, task_desc, status, member_id)
            VALUES (NEW.task_id, NEW.task_title, NEW.task_desc, 'Updated tasks', old.created_by);
        END IF;
    END IF;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create Trigger on Tasks table
CREATE TRIGGER tasks_update_trigger
AFTER INSERT OR UPDATE ON Tasks
FOR EACH ROW
EXECUTE FUNCTION log_task_updates();

select * from tasks_updates;

-- Drop the trigger
DROP TRIGGER IF EXISTS tasks_update_trigger ON Tasks;

-- Drop the trigger function
DROP FUNCTION IF EXISTS log_task_updates();


-- Create Comments table
CREATE TABLE Comments (
    comment_id SERIAL PRIMARY KEY,
    task_id INT NOT NULL,
    member_id INT NOT NULL,
    member_name TEXT NOT NULL,
    comment_text TEXT,
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create update_comments table
CREATE TABLE update_comments (
    update_id SERIAL PRIMARY KEY,
    comment_id INT,
    task_id INT,
    member_id INT,
    member_name TEXT,
    comment_text TEXT,
    update_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create Trigger function
CREATE OR REPLACE FUNCTION log_comment_updates()
RETURNS TRIGGER AS $$
BEGIN
    IF TG_OP = 'INSERT' THEN
        INSERT INTO update_comments (comment_id, task_id, member_id, member_name, comment_text)
        VALUES (NEW.comment_id, NEW.task_id, NEW.member_id, NEW.member_name, NEW.comment_text);
    ELSIF TG_OP = 'UPDATE' THEN
        INSERT INTO update_comments (comment_id, task_id, member_id, member_name, comment_text )
        VALUES (NEW.comment_id, NEW.task_id, NEW.member_id, NEW.member_name, NEW.comment_text);
    END IF;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create Trigger on Comments table
CREATE TRIGGER comments_update_trigger
AFTER INSERT OR UPDATE ON Comments
FOR EACH ROW
EXECUTE FUNCTION log_comment_updates();


select * from update_comments;
select * from tasks_updates;

Select t.update_id, t.task_title, t.task_desc, t.status, t.update_date from tasks_updates t where Date(update_date) = '2024-04-07' AND member_id = 1;

Select c.update_id, t.task_title, c.comment_text, c.update_date from tasks t join update_comments c on t.task_id = c.task_id where Date(c.update_date) = '2024-04-07' AND c.member_id = '1';


select * from team_members