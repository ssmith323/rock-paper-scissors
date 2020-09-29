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
class GameResultServiceTest {

    @Mock
    private GameConverter gameConverter;

    @Mock
    private GameResultRepository gameResultRepository;

    @InjectMocks
    private GameResultService subject;

    @Test
    void playGame() {
        Game game = Game.builder().build();
        when(gameConverter.convert(any(Game.class))).thenReturn(GameResult.builder().build());
        when(gameResultRepository.save(any(GameResult.class))).thenReturn(GameResult.builder().id(1).build());

        GameResult actual = subject.playGame(game);

        verify(gameConverter).convert(Game.builder().build());
        verify(gameResultRepository).save(GameResult.builder().build());
        assertThat(actual).isEqualTo(GameResult.builder().id(1).build());
    }

}