package com.rps.logging;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.reflect.MemberSignature;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.junit.jupiter.MockitoExtension;
import org.slf4j.Logger;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class LoggerFactoryTest {

    @InjectMocks
    private LoggerFactory subject;

    @Test
    void create_shouldCreateLogger() {
        JoinPoint joinPoint = mock(JoinPoint.class);
        MemberSignature signature = mock(MemberSignature.class);
        when(joinPoint.getSignature()).thenReturn(signature);
        when(signature.getDeclaringType()).thenReturn(Object.class);

        Logger actual = subject.create(joinPoint);

        verify(joinPoint).getSignature();
        verify(signature).getDeclaringType();
        assertThat(actual).isNotNull();
    }
}