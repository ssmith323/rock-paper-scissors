package com.rps.game;

import com.rps.player.Player;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@Builder
@Entity
@Table(name = "game_result")
@NoArgsConstructor
@AllArgsConstructor
public class GameResult {

    @Id
    private Integer id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "player_1_id")
    private Player player1;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "player_2_id")
    private Player player2;
    private Outcome outcome;
    private Throw player1Throw;
    private Throw player2Throw;
}
