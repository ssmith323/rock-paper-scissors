package com.rps.stats;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE;

@RestController
@RequestMapping("/stats")
@CrossOrigin("*")
@RequiredArgsConstructor
public class StatsController {

    private final StatsService statsService;

    @GetMapping(produces = APPLICATION_JSON_VALUE)
    public List<PlayerStats> getAll() {
        return statsService.getAll();
    }

    @GetMapping(path = "/{id}", produces = APPLICATION_JSON_VALUE)
    public PlayerStats getById(@PathVariable Integer id) {
        return statsService.getById(id);
    }
}
