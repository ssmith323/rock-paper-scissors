package com.rps.rest;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.junit.jupiter.MockitoExtension;

import static org.assertj.core.api.Assertions.assertThat;


@ExtendWith(MockitoExtension.class)
class ExceptionToResponseBuilderTest {

    @InjectMocks
    private ExceptionToResponseBuilder subject;

    @Test
    void build() {
        Exception e = new Exception();

        ExceptionResponse actual = subject.build("404", e);

        assertThat(actual).isEqualTo(new ExceptionResponse("404", e.getMessage()));
    }
}