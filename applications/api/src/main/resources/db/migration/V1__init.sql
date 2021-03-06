CREATE TABLE PLAYER(
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL
);

CREATE TABLE GAME_RESULT(
    id INT PRIMARY KEY AUTO_INCREMENT,
    outcome VARCHAR(20) NOT NULL,
    player_1_id INT NOT NULL,
    player_2_id INT NOT NULL,
    player_1_throw VARCHAR(10) NOT NULL,
    player_2_throw VARCHAR(10) NOT NULL,
    CONSTRAINT fk_player_1 FOREIGN KEY (player_1_id) REFERENCES player(id),
    CONSTRAINT fk_player_2 FOREIGN KEY (player_2_id) REFERENCES player(id)
);