package com.rps.stats;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import javax.servlet.http.HttpServletRequest;

import java.util.Collections;
import java.util.List;

import static java.util.Collections.*;
import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class StatsControllerTest {

    @Mock
    private StatsService statsService;

    @InjectMocks
    private StatsController subject;

    @Test
    void getAll() {
        when(statsService.getAll()).thenReturn(emptyList());

        List<PlayerStats> actual = subject.getAll();

        verify(statsService).getAll();
        assertThat(actual).isEqualTo(emptyList());
    }

    @Test
    void getById() {
        when(statsService.getById(anyInt())).thenReturn(PlayerStats.builder().build());

        PlayerStats actual = subject.getById(1);

        verify(statsService).getById(1);
        assertThat(actual).isEqualTo(PlayerStats.builder().build());
    }
}