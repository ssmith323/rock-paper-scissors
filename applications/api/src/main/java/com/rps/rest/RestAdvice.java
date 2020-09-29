package com.rps.rest;

import com.rps.rest.exception.ConflictException;
import com.rps.rest.exception.NotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import static org.springframework.http.HttpStatus.*;

@RestControllerAdvice
@RequiredArgsConstructor
public class RestAdvice {

    private final ExceptionToResponseBuilder builder;

    @ResponseStatus(NOT_FOUND)
    @ExceptionHandler(NotFoundException.class)
    public ExceptionResponse handleNotFoundError(Exception e) {
        return builder.build(NOT_FOUND.toString(), e);
    }

    @ResponseStatus(CONFLICT)
    @ExceptionHandler(ConflictException.class)
    public ExceptionResponse handleConflictError(Exception e) {
        return builder.build(CONFLICT.toString(), e);
    }

    @ResponseStatus(INTERNAL_SERVER_ERROR)
    @ExceptionHandler(Exception.class)
    public ExceptionResponse handleInternalServerError(Exception e) {
        return builder.build(INTERNAL_SERVER_ERROR.toString(), e);
    }
}
