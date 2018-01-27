package org.maciejmarczak.financemanager.user;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Transient;

@Entity
@Data
public class User {

    @Id
    @GeneratedValue
    private long id;

    private String email;
    private String password;

    @Transient
    @JsonInclude(JsonInclude.Include.NON_EMPTY)
    private String token;
}
