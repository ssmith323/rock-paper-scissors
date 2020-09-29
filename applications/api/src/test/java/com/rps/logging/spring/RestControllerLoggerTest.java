package com.rps.logging.spring;

import com.rps.logging.LoggerFactory;
import com.rps.logging.RequestHelper;
import org.aspectj.lang.JoinPoint;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.slf4j.Logger;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class RestControllerLoggerTest {

    @Mock
    private LoggerFactory loggerFactory;

    @Mock
    private RequestHelper requestHelper;

    @InjectMocks
    private RestControllerLogger subject;

    private Logger logger;

    @BeforeEach
    void setup() {
        logger = mock(Logger.class);
        when(loggerFactory.create(any(JoinPoint.class))).thenReturn(logger);
        when(requestHelper.getMethod()).thenReturn("GET");
        when(requestHelper.getUrl()).thenReturn("localhost");
    }

    @Test
    void logBefore() {
        JoinPoint joinPoint = mock(JoinPoint.class);

        subject.logBefore(joinPoint);

        verify(loggerFactory).create(joinPoint);
        verify(requestHelper).getMethod();
        verify(requestHelper).getUrl();
        verify(logger).info("{} Started {}: {}", "*****", "GET", "localhost");
    }

    @Test
    void logAfter() {
        JoinPoint joinPoint = mock(JoinPoint.class);

        subject.logAfter(joinPoint);

        verify(loggerFactory).create(joinPoint);
        verify(requestHelper).getMethod();
        verify(requestHelper).getUrl();
        verify(logger).info("{} Completed {}: {}", "*****", "GET", "localhost");
    }

    @Test
    void logAfterThrowing() {
        JoinPoint joinPoint = mock(JoinPoint.class);

        subject.logAfterThrowing(joinPoint);

        verify(loggerFactory).create(joinPoint);
        verify(requestHelper).getMethod();
        verify(requestHelper).getUrl();
        verify(logger).error("{} Completed {}: {}", "!!!!!", "GET", "localhost");
    }
}