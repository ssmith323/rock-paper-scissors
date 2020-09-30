package com.rps.player;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class PlayerService {

    private final PlayerRepository repository;

    public List<Player> getAll() {
        return repository.findAll();
    }

    public Player create(Player player) {
        return repository.save(player);
    }
}
