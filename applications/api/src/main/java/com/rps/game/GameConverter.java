package com.rps.game;

import lombok.RequiredArgsConstructor;
import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class GameConverter implements Converter<Game, GameResult> {

    private final OutcomeService outcomeService;

    @Override
    public GameResult convert(Game source) {
        return GameResult.builder()
                .player1(source.getPlayer1())
                .player1Throw(source.getPlayer1Throw())
                .player2(source.getPlayer2())
                .player2Throw(source.getPlayer2Throw())
                .outcome(outcomeService.play(source.getPlayer1Throw(), source.getPlayer2Throw()))
                .build();
    }
}
