package com.rps.game;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
class GameControllerTest {

    @Mock
    private GameResultService gameResultService;

    @InjectMocks
    private GameController subject;

    @Test
    void playGame_shouldPlayRealGame() {
        when(gameResultService.playGame(any(Game.class))).thenReturn(GameResult.builder().build());

        GameResult actual = subject.playGame(Game.builder().build(), false);

        verify(gameResultService).playGame(Game.builder().build());
        assertThat(actual).isEqualTo(GameResult.builder().build());
    }

    @Test
    void playGame_shouldBePracticeGame() {
        when(gameResultService.practiceGame(any(Game.class))).thenReturn(GameResult.builder().build());

        GameResult actual = subject.playGame(Game.builder().build(), true);

        verify(gameResultService).practiceGame(Game.builder().build());
        assertThat(actual).isEqualTo(GameResult.builder().build());
    }
}