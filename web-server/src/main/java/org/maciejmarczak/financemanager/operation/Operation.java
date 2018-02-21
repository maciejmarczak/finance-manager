package org.maciejmarczak.financemanager.operation;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.validator.constraints.NotBlank;
import org.maciejmarczak.financemanager.user.User;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.math.BigDecimal;
import java.util.Date;

@Entity
@Data
@NoArgsConstructor
public class Operation {

    @Id
    @GeneratedValue
    private long id;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "issuer_id")
    @JsonIgnore
    private User issuer;

    @NotNull
    private Date date;

    @NotNull
    private BigDecimal value;

    @NotBlank
    private String currency;

    @NotBlank
    private String category;
}
