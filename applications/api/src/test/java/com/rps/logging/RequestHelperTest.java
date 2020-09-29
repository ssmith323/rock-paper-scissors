package com.rps.logging;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import javax.servlet.http.HttpServletRequest;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class RequestHelperTest {

    @Mock
    private RequestWrapper requestWrapper;

    @InjectMocks
    private RequestHelper subject;

    @Test
    void getMethod() {
        HttpServletRequest httpServletRequest = mock(HttpServletRequest.class);
        when(httpServletRequest.getMethod()).thenReturn("GET");
        when(requestWrapper.getRequest()).thenReturn(httpServletRequest);

        String actual = subject.getMethod();

        assertThat(actual).isEqualTo("GET");
    }

    @Test
    void getUrl() {
        HttpServletRequest httpServletRequest = mock(HttpServletRequest.class);
        when(httpServletRequest.getRequestURL()).thenReturn(new StringBuffer("localhost"));
        when(requestWrapper.getRequest()).thenReturn(httpServletRequest);

        String actual = subject.getUrl();

        assertThat(actual).isEqualTo("localhost");
    }

    @Test
    void getHeader() {
        HttpServletRequest httpServletRequest = mock(HttpServletRequest.class);
        when(httpServletRequest.getHeader(anyString())).thenReturn("Header Value");
        when(requestWrapper.getRequest()).thenReturn(httpServletRequest);

        String actual = subject.getHeader("header");

        verify(httpServletRequest).getHeader("header");
        assertThat(actual).isEqualTo("Header Value");
    }
}