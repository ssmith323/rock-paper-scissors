package com.rps.game;

import com.rps.player.Player;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import javax.servlet.http.HttpServletRequest;

import static com.rps.game.Outcome.*;
import static com.rps.game.Throw.PAPER;
import static com.rps.game.Throw.ROCK;
import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class GameConverterTest {

    @Mock
    private OutcomeService outcomeService;

    @InjectMocks
    private GameConverter subject;

    @Test
    void convert() {
        when(outcomeService.play(any(Throw.class), any(Throw.class))).thenReturn(P1_WINS);
        Game game = Game.builder()
                .player1(new Player(1, "one"))
                .player1Throw(PAPER)
                .player2(new Player(2, "two"))
                .player2Throw(ROCK)
                .build();

        GameResult actual = subject.convert(game);

        GameResult expected = GameResult.builder()
                .player1(new Player(1, "one"))
                .player1Throw(PAPER)
                .player2(new Player(2, "two"))
                .player2Throw(ROCK)
                .outcome(P1_WINS)
                .build();
        verify(outcomeService).play(PAPER, ROCK);
        assertThat(actual).isEqualTo(expected);
    }
}