package com.rps.stats;

import com.rps.rest.exception.NotFoundException;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.List;
import java.util.Optional;

import static java.util.Collections.emptyList;
import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class StatsServiceTest {

    @Mock
    private StatsRepository statsRepository;

    @InjectMocks
    private StatsService subject;

    @Test
    void getAll() {
        when(statsRepository.findAll()).thenReturn(emptyList());

        List<PlayerStats> actual = subject.getAll();

        verify(statsRepository).findAll();
        assertThat(actual).isEqualTo(emptyList());
    }

    @Test
    void getById_shouldReturnStat() {
        when(statsRepository.findById(anyInt())).thenReturn(Optional.of(PlayerStats.builder().build()));

        PlayerStats actual = subject.getById(1);

        verify(statsRepository).findById(1);
        assertThat(actual).isEqualTo(PlayerStats.builder().build());
    }

    @Test
    void getById_shouldThrowNotFound() {
        when(statsRepository.findById(anyInt())).thenReturn(Optional.empty());

        assertThatThrownBy(() -> subject.getById(1))
                .isInstanceOf(NotFoundException.class)
                .hasMessage("Player not found");

        verify(statsRepository).findById(1);
    }
}