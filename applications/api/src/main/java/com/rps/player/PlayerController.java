package com.rps.player;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static org.springframework.http.HttpStatus.CREATED;
import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE;

@RestController
@RequestMapping("/player")
@CrossOrigin("*")
@RequiredArgsConstructor
public class PlayerController {

    private final PlayerService playerOrchestrator;

    @GetMapping(produces = APPLICATION_JSON_VALUE)
    public List<Player> getAll() {
        return playerOrchestrator.getAll();
    }

    @ResponseStatus(CREATED)
    @PostMapping(consumes = APPLICATION_JSON_VALUE, produces = APPLICATION_JSON_VALUE)
    public Player create(@RequestBody Player player) {
        return playerOrchestrator.create(player);
    }
}
