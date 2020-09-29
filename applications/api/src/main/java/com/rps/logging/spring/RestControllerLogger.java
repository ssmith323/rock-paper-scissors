package com.rps.logging.spring;

import com.rps.logging.LoggerFactory;
import com.rps.logging.RequestHelper;
import com.rps.logging.LoggerConstants;
import lombok.RequiredArgsConstructor;
import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.*;
import org.slf4j.Logger;
import org.springframework.stereotype.Component;


@Aspect
@Component
@RequiredArgsConstructor
public class RestControllerLogger {

    private final LoggerFactory loggerFactory;
    private final RequestHelper requestHelper;

    @Before("@within(org.springframework.web.bind.annotation.RestController)")
    public void logBefore(JoinPoint joinPoint) {
        Logger logger = loggerFactory.create(joinPoint);

        String method = requestHelper.getMethod();
        String url = requestHelper.getUrl();
        logger.info("{} Started {}: {}", LoggerConstants.GOOD, method, url);
    }

    @AfterReturning("@within(org.springframework.web.bind.annotation.RestController)")
    public void logAfter(JoinPoint joinPoint) {
        Logger logger = loggerFactory.create(joinPoint);

        String method = requestHelper.getMethod();
        String url = requestHelper.getUrl();
        logger.info("{} Completed {}: {}", LoggerConstants.GOOD, method, url);
    }

    @AfterThrowing("@within(org.springframework.web.bind.annotation.RestController)")
    public void logAfterThrowing(JoinPoint joinPoint) {
        Logger logger = loggerFactory.create(joinPoint);

        String method = requestHelper.getMethod();
        String url = requestHelper.getUrl();
        logger.error("{} Completed {}: {}", LoggerConstants.ERROR, method, url);
    }
}
