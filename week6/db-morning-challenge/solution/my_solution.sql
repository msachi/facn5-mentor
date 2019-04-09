-- 2.1

SELECT name, COUNT(id) FROM mentors
INNER JOIN posts ON mentors.name = posts.mentor_name
INNER JOIN likes ON posts.id = likes.post_id
GROUP BY name
ORDER BY COUNT(id) DESC;

-- better
SELECT posts.mentor_name, COUNT(id) FROM posts
INNER JOIN likes ON posts.id = likes.post_id
GROUP BY posts.mentor_name
ORDER BY COUNT(id) DESC;

-- 2.2

SELECT location, post_id FROM mentors
INNER JOIN likes ON mentors.name = likes.mentor_name;

-- 3

SELECT CAST(AVG(count) AS INTEGER) FROM
  (SELECT mentors.location, COUNT(mentors.location) FROM mentors
  INNER JOIN likes ON mentors.name = likes.mentor_name
  GROUP BY mentors.location, mentors.name)
as locationCount
GROUP BY location;