package com.rps;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.jdbc.Sql;
import org.springframework.test.context.junit4.AbstractTransactionalJUnit4SpringContextTests;
import org.springframework.test.web.servlet.MockMvc;

@SpringBootTest(classes = ApiApplication.class)
@ActiveProfiles("integration")
@AutoConfigureMockMvc
@Sql(scripts = {"classpath:sql/player.sql"})
public abstract class AbstractIntegrationTest extends AbstractTransactionalJUnit4SpringContextTests {

    @Autowired
    protected MockMvc mockMvc;
}
