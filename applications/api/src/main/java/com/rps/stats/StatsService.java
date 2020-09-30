package com.rps.stats;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class StatsService {

    private final StatsRepository statsRepository;

    public List<PlayerStats> getAll() {
        return statsRepository.findAll();
    }
}
