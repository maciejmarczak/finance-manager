package org.maciejmarczak.financemanager.user;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import org.hibernate.validator.constraints.Email;
import org.hibernate.validator.constraints.Length;
import org.hibernate.validator.constraints.NotBlank;

import javax.persistence.*;

@Entity
@Data
@EqualsAndHashCode(callSuper = true)
@NoArgsConstructor
public class User extends AbstractUserDetails {

    @Id
    @GeneratedValue
    private int id;

    @Email
    @NotBlank
    @Column(unique = true)
    private String email;

    @Length(min = 5)
    @NotBlank
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private String password;

    @Transient
    @JsonInclude(JsonInclude.Include.NON_EMPTY)
    private String token;

    public User(String email, String token) {
        this.email = email;
        this.token = token;
    }

    @Override
    public String getUsername() {
        return email;
    }
}
