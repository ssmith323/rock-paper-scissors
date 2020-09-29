package com.rps.player;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.List;

import static java.util.Collections.emptyList;
import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
class PlayerServiceTest {

    @Mock
    private PlayerRepository playerRepository;

    @InjectMocks
    private PlayerService subject;

    @Test
    void getAll() {
        when(playerRepository.findAll()).thenReturn(emptyList());

        List<Player> actual = subject.getAll();

        verify(playerRepository).findAll();
        assertThat(actual).isEqualTo(emptyList());
    }

}