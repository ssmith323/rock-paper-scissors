CREATE VIEW PLAYER_STATS as
select player.id, IFNULL(wins,0) gamesWon, IFNULL(tie, 0) as gamesTied, IFNULL(loses,0) gamesLost, IFNULL(rock,0) rocksThrown, IFNULL(paper,0) as papersThrown, IFNULL(scissors,0) as scissorsThrown
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
			 where (player.id=gr.player_1_id and player_1_threw = 'ROCK') or (player.id=gr.player_2_id and player_2_threw = 'ROCK')
			 group by player.id) as r
		on player.id=r.id
        left join
			(SELECT player.id, count(*) as paper
			 FROM player, game_result gr
			 where (player.id=gr.player_1_id and player_1_threw = 'PAPER') or (player.id=gr.player_2_id and player_2_threw = 'PAPER')
			 group by player.id) as p
		on player.id=p.id
        left join
			(SELECT player.id, count(*) as scissors
			 FROM player, game_result gr
			 where (player.id=gr.player_1_id and player_1_threw = 'SCISSORS') or (player.id=gr.player_2_id and player_2_threw = 'SCISSORS')
			 group by player.id) as s
		on player.id=s.id
group by player.id