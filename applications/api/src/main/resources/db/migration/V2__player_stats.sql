CREATE VIEW PLAYER_STATS as
select player.id, player.id as player_id, IFNULL(wins,0) as games_won, IFNULL(tie, 0) as games_tied, IFNULL(loses,0) as games_lost, IFNULL(rock,0) as rocks_thrown, IFNULL(paper,0) as papers_thrown, IFNULL(scissors,0) as scissors_thrown
from player
		left join
			(SELECT player.id, count(outcome) as wins
			 FROM player, game_result gr
			 where (player.id=gr.player_1_id and outcome = 'P1_WINS') or (player.id=gr.player_2_id and outcome = 'P2_WINS')
			 group by player.id) as w
		on  player.id=w.id
		LEFT JOIN
			(SELECT player.id, count(outcome) as tie
			 FROM player, game_result gr
			 where (player.id=gr.player_1_id and outcome = 'TIE') or (player.id=gr.player_2_id and outcome = 'TIE')
			 group by player.id) as t
		on player.id=t.id
        left join
			(SELECT player.id, count(outcome) as loses
			 FROM player, game_result gr
			 where (player.id=gr.player_1_id and outcome = 'P2_WINS') or (player.id=gr.player_2_id and outcome = 'P1_WINS')
			 group by player.id) as l
		on player.id=l.id
		left join
			(SELECT player.id, count(*) as rock
			 FROM player, game_result gr
			 where (player.id=gr.player_1_id and player_1_throw = 'ROCK') or (player.id=gr.player_2_id and player_2_throw = 'ROCK')
			 group by player.id) as r
		on player.id=r.id
        left join
			(SELECT player.id, count(*) as paper
			 FROM player, game_result gr
			 where (player.id=gr.player_1_id and player_1_throw = 'PAPER') or (player.id=gr.player_2_id and player_2_throw = 'PAPER')
			 group by player.id) as p
		on player.id=p.id
        left join
			(SELECT player.id, count(*) as scissors
			 FROM player, game_result gr
			 where (player.id=gr.player_1_id and player_1_throw = 'SCISSORS') or (player.id=gr.player_2_id and player_2_throw = 'SCISSORS')
			 group by player.id) as s
		on player.id=s.id
group by player.id