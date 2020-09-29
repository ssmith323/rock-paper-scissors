package com.rps.game;

import com.rps.player.Player;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Game {
    private Player player1;
    private Player player2;
    private Throw player1Throw;
    private Throw player2Throw;
}
