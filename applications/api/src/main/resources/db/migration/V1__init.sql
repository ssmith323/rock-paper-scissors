CREATE TABLE PLAYER(
    id INT NOT NULL PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

CREATE TABLE GAME_RESULT(
    id INT NOT NULL PRIMARY KEY,
    outcome VARCHAR(20) NOT NULL,
    player_1_id VARCHAR(255) NOT NULL,
    player_2_id VARCHAR(255) NOT NULL,
    player_1_threw VARCHAR(10) NOT NULL,
    player_2_threw VARCHAR(10) NOT NULL,
    CONSTRAINT fk_player_1 FOREIGN KEY (player_1_id) REFERENCES player(id),
    CONSTRAINT fk_player_2 FOREIGN KEY (player_2_id) REFERENCES player(id)
);