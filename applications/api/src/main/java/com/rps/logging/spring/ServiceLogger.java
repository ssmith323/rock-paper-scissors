package com.rps.logging.spring;

import com.rps.logging.LoggerFactory;
import com.rps.logging.LoggerConstants;
import lombok.RequiredArgsConstructor;
import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.AfterThrowing;
import org.aspectj.lang.annotation.Aspect;
import org.slf4j.Logger;
import org.springframework.stereotype.Component;

@Aspect
@Component
@RequiredArgsConstructor
public class ServiceLogger {

    private final LoggerFactory loggerFactory;

    @AfterThrowing(pointcut = "@within(org.springframework.stereotype.Service)", throwing = "e")
    public void logAfterException(JoinPoint joinPoint, Exception e) {
        Logger logger = loggerFactory.create(joinPoint);
        logger.error("{} {} thrown error {}", LoggerConstants.ERROR, joinPoint.getSignature().getName(), e.getClass().getCanonicalName());
    }
}
