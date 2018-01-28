package org.maciejmarczak.financemanager.security;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.CONFLICT)
class EmailAlreadyTakenException extends RuntimeException {}
