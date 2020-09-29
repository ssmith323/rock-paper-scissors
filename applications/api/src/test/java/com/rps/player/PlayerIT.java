package com.rps.player;

import com.rps.AbstractIntegrationTest;
import org.junit.jupiter.api.Test;

import static org.springframework.http.MediaType.APPLICATION_JSON;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

class PlayerIT extends AbstractIntegrationTest {

    @Test
    void getAll_200() throws Exception {
        mockMvc.perform(get("/player"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.[0].id").value(1));
    }

    @Test
    void create_201() throws Exception {
        mockMvc.perform(
                post("/player")
                        .contentType(APPLICATION_JSON)
                        .content("{\"name\": \"test\"}")
        )
                .andExpect(status().isCreated());
    }

    @Test
    void getById_200() throws Exception {
        mockMvc.perform(get("/player/1"))
                .andExpect(status().isOk());
    }

    @Test
    void getById_404() throws Exception {
        mockMvc.perform(get("/player/0"))
                .andExpect(status().isNotFound());
    }

    @Test
    void updateById_200() throws Exception {
        mockMvc.perform(
                put("/player/1")
                        .contentType(APPLICATION_JSON)
                        .content("{\"id\": 1, \"name\": \"test\"}")
        )
                .andExpect(status().isOk());
    }

    @Test
    void updateById_404() throws Exception {
        mockMvc.perform(
                put("/player/0")
                        .contentType(APPLICATION_JSON)
                        .content("{\"id\": 0, \"name\": \"test\"}")
        )
                .andExpect(status().isNotFound());
    }

    @Test
    void updateById_409() throws Exception {
        mockMvc.perform(
                put("/player/0")
                        .contentType(APPLICATION_JSON)
                        .content("{\"id\": 1, \"name\": \"test\"}")
        )
                .andExpect(status().isConflict());
    }
}
