package org.maciejmarczak.financemanager.user;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Data;
import org.hibernate.validator.constraints.Email;
import org.hibernate.validator.constraints.Length;
import org.hibernate.validator.constraints.NotBlank;

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

    @Email
    @NotBlank
    private String email;

    @Length(min = 5)
    @NotBlank
    private String password;

    @Transient
    @JsonInclude(JsonInclude.Include.NON_EMPTY)
    private String token;
}
