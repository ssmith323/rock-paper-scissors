package com.rps.stats;

import org.springframework.data.jpa.repository.JpaRepository;

public interface StatsRepository extends JpaRepository<PlayerStats, Integer> {
}
