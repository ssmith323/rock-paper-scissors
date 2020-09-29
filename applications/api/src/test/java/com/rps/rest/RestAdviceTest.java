package com.rps.rest;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
class RestAdviceTest {

    @Mock
    private ExceptionToResponseBuilder builder;

    @InjectMocks
    private RestAdvice subject;

    @Test
    void handleNotFound() {
        Exception e = new Exception();
        when(builder.build(anyString(), any(Exception.class))).thenReturn(ExceptionResponse.builder().build());

        ExceptionResponse actual = subject.handleNotFoundError(e);

        verify(builder).build("404 NOT_FOUND", e);
        assertThat(actual).isEqualTo(new ExceptionResponse());
    }

    @Test
    void handleConflict() {
        Exception e = new Exception();
        when(builder.build(anyString(), any(Exception.class))).thenReturn(ExceptionResponse.builder().build());

        ExceptionResponse actual = subject.handleConflictError(e);

        verify(builder).build("409 CONFLICT", e);
        assertThat(actual).isEqualTo(new ExceptionResponse());
    }

    @Test
    void handleInternalServerError() {
        Exception e = new Exception();
        when(builder.build(anyString(), any(Exception.class))).thenReturn(ExceptionResponse.builder().build());

        ExceptionResponse actual = subject.handleInternalServerError(e);

        verify(builder).build("500 INTERNAL_SERVER_ERROR", e);
        assertThat(actual).isEqualTo(new ExceptionResponse());
    }
}