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
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "player_1_id", updatable = false)
    private Player player1;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "player_2_id", updatable = false)
    private Player player2;

    @Enumerated(EnumType.STRING)
    private Outcome outcome;

    @Column(name = "player_1_throw")
    @Enumerated(EnumType.STRING)
    private Throw player1Throw;

    @Column(name = "player_2_throw")
    @Enumerated(EnumType.STRING)
    private Throw player2Throw;
}
