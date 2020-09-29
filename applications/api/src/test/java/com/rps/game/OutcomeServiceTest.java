package com.rps.game;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.junit.jupiter.MockitoExtension;

import static com.rps.game.Outcome.*;
import static com.rps.game.Throw.*;
import static org.assertj.core.api.Assertions.assertThat;

@ExtendWith(MockitoExtension.class)
class OutcomeServiceTest {

    @InjectMocks
    private OutcomeService subject;

    @Test
    void RockVsScissors() {
        Outcome actual = subject.play(ROCK, SCISSORS);
        assertThat(actual).isEqualTo(P1_WINS);
    }

    @Test
    void ScissorsVsRock() {
        Outcome actual = subject.play(SCISSORS, ROCK);
        assertThat(actual).isEqualTo(P2_WINS);
    }

    @Test
    void ScissorsVsPaper() {
        Outcome actual = subject.play(SCISSORS, PAPER);
        assertThat(actual).isEqualTo(P1_WINS);
    }

    @Test
    void PaperVsScissors() {
        Outcome actual = subject.play(PAPER, SCISSORS);
        assertThat(actual).isEqualTo(P2_WINS);
    }

    @Test
    void PaperVsRock() {
        Outcome actual = subject.play(PAPER, ROCK);
        assertThat(actual).isEqualTo(P1_WINS);
    }

    @Test
    void RockVsPaper() {
        Outcome actual = subject.play(ROCK, PAPER);
        assertThat(actual).isEqualTo(P2_WINS);
    }

    @Test
    void RockVsRock() {
        Outcome actual = subject.play(ROCK, ROCK);
        assertThat(actual).isEqualTo(TIE);
    }

    @Test
    void PaperVsPaper() {
        Outcome actual = subject.play(PAPER, PAPER);
        assertThat(actual).isEqualTo(TIE);
    }

    @Test
    void ScissorsVsScissors() {
        Outcome actual = subject.play(SCISSORS, SCISSORS);
        assertThat(actual).isEqualTo(TIE);
    }
}