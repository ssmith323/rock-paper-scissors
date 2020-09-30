package com.rps.stats;

import com.rps.rest.exception.NotFoundException;
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

    public PlayerStats getById(Integer id) {
        return statsRepository.findById(id)
                .orElseThrow(() -> new NotFoundException("Player not found"));
    }
}
