package com.rps.game;

import com.rps.AbstractIntegrationTest;
import org.junit.jupiter.api.Test;

import static org.springframework.http.MediaType.APPLICATION_JSON;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

class GameIT extends AbstractIntegrationTest {

    @Test
    void create_201() throws Exception {
        mockMvc.perform(
                post("/game")
                        .contentType(APPLICATION_JSON)
                        .content("{" +
                                "  \"player1\": {" +
                                "    \"id\": 1," +
                                "    \"name\": \"No\"" +
                                "  }," +
                                "  \"player2\": {" +
                                "    \"id\": 2," +
                                "    \"name\": \"Yes\"" +
                                "  }," +
                                "  \"player1Throw\": \"ROCK\"," +
                                "  \"player2Throw\": \"PAPER\"" +
                                "}")
        )
                .andExpect(status().isCreated())
                .andExpect(jsonPath("$.id").value(1))
                .andExpect(jsonPath("$.outcome").value("P2_WINS"));
    }

    @Test
    void create_practice_201() throws Exception {
        mockMvc.perform(
                post("/game?practice=true")
                        .contentType(APPLICATION_JSON)
                        .content("{" +
                                "  \"player1\": {" +
                                "    \"id\": 1," +
                                "    \"name\": \"No\"" +
                                "  }," +
                                "  \"player2\": {" +
                                "    \"id\": 2," +
                                "    \"name\": \"Yes\"" +
                                "  }," +
                                "  \"player1Throw\": \"ROCK\"," +
                                "  \"player2Throw\": \"ROCK\"" +
                                "}")
        )
                .andExpect(status().isCreated())
                .andExpect(jsonPath("$.id").doesNotExist())
                .andExpect(jsonPath("$.outcome").value("TIE"));
    }
}
