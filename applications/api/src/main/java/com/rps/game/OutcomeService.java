package com.rps.game;

import org.springframework.stereotype.Component;

import static com.rps.game.Outcome.*;
import static com.rps.game.Throw.*;

@Component
public class OutcomeService {

    public Outcome play(Throw p1, Throw p2) {

        if (p1.equals(p2)) {
            return TIE;
        }

        return p1.equals(ROCK) && p2.equals(PAPER)
                || p1.equals(PAPER) && p2.equals(SCISSORS)
                || p1.equals(SCISSORS) && p2.equals(ROCK)
                ? P2_WINS : P1_WINS;
    }
}
