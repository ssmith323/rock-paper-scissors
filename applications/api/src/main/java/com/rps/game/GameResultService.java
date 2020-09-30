package com.rps.game;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class GameResultService {

    private final GameResultRepository gameResultRepository;
    private final GameConverter gameConverter;

    public GameResult playGame(Game game) {
        GameResult gameResult = gameConverter.convert(game);
        return gameResultRepository.save(gameResult);
    }

    public GameResult practiceGame(Game game) {
        return gameConverter.convert(game);
    }
}
