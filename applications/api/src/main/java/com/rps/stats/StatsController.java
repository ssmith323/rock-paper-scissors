package com.rps.stats;

import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/stats")
@RequiredArgsConstructor
public class StatsController {

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public List<PlayerStats> getAll() {
        return null;
    }
}
