package com.rps.player;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.List;

import static java.util.Collections.emptyList;
import static java.util.Collections.singletonList;
import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
class PlayerControllerTest {

    @Mock
    private PlayerService playerService;

    @InjectMocks
    private PlayerController subject;

    @Test
    void getAll_shouldReturnEmptyList() {
        when(playerService.getAll()).thenReturn(emptyList());

        List<Player> actual = subject.getAll();

        verify(playerService).getAll();
        assertThat(actual).isEqualTo(emptyList());
    }

    @Test
    void getAll_shouldReturnAList() {
        when(playerService.getAll()).thenReturn(singletonList(Player.builder().build()));

        List<Player> actual = subject.getAll();

        verify(playerService).getAll();
        assertThat(actual).isEqualTo(singletonList(Player.builder().build()));
    }

    @Test
    void create_shouldReturnAList() {
        when(playerService.create(any(Player.class))).thenReturn(Player.builder().id(1).build());

        Player actual = subject.create(Player.builder().build());

        verify(playerService).create(Player.builder().build());
        assertThat(actual).isEqualTo(singletonList(Player.builder().id(1).build()));
    }
}