package com.rps.logging;

import org.aspectj.lang.JoinPoint;
import org.slf4j.Logger;
import org.springframework.stereotype.Component;

@Component
public class LoggerFactory {
    public Logger create(JoinPoint joinPoint) {
        return org.slf4j.LoggerFactory.getLogger(joinPoint.getSignature().getDeclaringType());
    }
}
