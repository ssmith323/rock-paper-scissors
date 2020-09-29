package com.rps.game;

import com.rps.player.Player;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotNull;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Game {

    @NotNull
    private Player player1;

    @NotNull
    private Player player2;

    @NotNull
    private Throw player1Throw;

    @NotNull
    private Throw player2Throw;
}
