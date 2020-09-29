package com.rps.logging.spring;

import com.rps.logging.LoggerFactory;
import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.reflect.MemberSignature;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.slf4j.Logger;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class ServiceLoggerTest {

    @Mock
    private LoggerFactory loggerFactory;

    @InjectMocks
    private ServiceLogger subject;

    @Test
    void logAfterException() {
        JoinPoint joinPoint = mock(JoinPoint.class);
        Exception e = new Exception("Test");
        Logger logger = mock(Logger.class);
        when(loggerFactory.create(any(JoinPoint.class))).thenReturn(logger);
        MemberSignature signature = mock(MemberSignature.class);
        when(joinPoint.getSignature()).thenReturn(signature);
        when(signature.getName()).thenReturn("test");

        subject.logAfterException(joinPoint, e);

        verify(loggerFactory).create(joinPoint);
        verify(logger).error("{} {} thrown error {}", "!!!!!", "test", e.getClass().getCanonicalName());
    }
}