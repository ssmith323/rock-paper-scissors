package com.rps.player;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE;

@RestController
@RequestMapping("/player")
@RequiredArgsConstructor
public class PlayerController {

    private final PlayerService playerOrchestrator;

    @GetMapping(produces = APPLICATION_JSON_VALUE)
    public List<Player> getAll() {
        return playerOrchestrator.getAll();
    }
}
