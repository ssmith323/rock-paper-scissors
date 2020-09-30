package com.rps.stats;

import com.rps.AbstractIntegrationTest;
import org.junit.jupiter.api.Test;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

class StatsIT extends AbstractIntegrationTest {

    @Test
    void getAll_200() throws Exception {
        mockMvc.perform(get("/stats"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.[0].id").value(1));
    }

    @Test
    void getById_200() throws Exception {
        mockMvc.perform(get("/stats/1"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.id").value(1));
    }

    @Test
    void getById_404() throws Exception {
        mockMvc.perform(get("/stats/0"))
                .andExpect(status().isNotFound());
    }
}
