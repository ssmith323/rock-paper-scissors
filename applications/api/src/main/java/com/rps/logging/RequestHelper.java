package com.rps.logging;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class RequestHelper {

    private final RequestWrapper requestWrapper;

    public String getMethod() {
        return requestWrapper.getRequest().getMethod();
    }

    public String getUrl() {
        return requestWrapper.getRequest().getRequestURL().toString();
    }

    public String getHeader(String header) {
        return requestWrapper.getRequest().getHeader(header);
    }
}
