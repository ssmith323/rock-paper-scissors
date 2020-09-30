package com.rps.game;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

import static org.springframework.http.HttpStatus.*;
import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE;

@RestController
@RequestMapping("/game")
@RequiredArgsConstructor
public class GameController {

    private final GameResultService gameResultService;

    @ResponseStatus(CREATED)
    @PostMapping(consumes = APPLICATION_JSON_VALUE, produces = APPLICATION_JSON_VALUE)
    public GameResult playGame(@RequestBody @Valid Game game, @RequestParam(required = false, name = "practice", defaultValue = "false") boolean isPractice) {
        return isPractice ? gameResultService.practiceGame(game) : gameResultService.playGame(game);
    }
}
