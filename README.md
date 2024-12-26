<H1>TABLES</H1>
<p>You will need this tables to use the app</p>
<H2>users</H2>
<p>CREATE TABLE users (</p>
<p>id SERIAL PRIMARY KEY,</p>
<p>username VARCHAR(100) NOT NULL,</p>
<p>email VARCHAR(150) UNIQUE NOT NULL,</p>
<p>password VARCHAR(255) NOT NULL,</p>
<p>registration_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP</p>
<p>);</p>

<H2>teams</H2>
<p>CREATE TABLE teams (</p>
<p>id SERIAL PRIMARY KEY,</p>
<p>user_id INT REFERENCES users(id) ON DELETE CASCADE,</p>
<p>team_name VARCHAR(100) NOT NULL,</p>
<p>city VARCHAR(100),</p>
<p>coach VARCHAR(100),</p>
<p>creation_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP</p>
<p>);</p>

<H2>players</H2>
<p>CREATE TABLE players (</p>
<p>id SERIAL PRIMARY KEY,</p>
<p>team_id INT REFERENCES teams(id) ON DELETE CASCADE,</p>
<p>first_name VARCHAR(100) NOT NULL,</p>
<p>last_name VARCHAR(100) NOT NULL,</p>
<p>creation_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP</p>
<p>);</p>

<H2>goalkeeper_statistics</H2>
<p>CREATE TABLE goalkeeper_statistics (</p>
<p>id SERIAL PRIMARY KEY,</p>
<p>player_id INT REFERENCES players(id) ON DELETE CASCADE,</p>
<p>matches_played INT NOT NULL,</p>
<p>saves INT NOT NULL,</p>
<p>goals_conceded INT NOT NULL,</p>
<p>total_shots INT GENERATED ALWAYS AS (saves + goals_conceded) STORED,</p>
<p>save_percentage NUMERIC GENERATED ALWAYS AS </p>
<p>(CASE </p>
<p>WHEN (saves + goals_conceded) > 0 THEN </p>
<p>(saves * 100.0 / (saves + goals_conceded)) </p>
<p>ELSE</p>
<p>0</p>
<p>END) STORED,</p>
<p>last_updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP</p>
<p>);</p>
