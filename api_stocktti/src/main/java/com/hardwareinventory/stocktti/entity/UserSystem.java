package com.hardwareinventory.stocktti.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;


@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "users",
       uniqueConstraints = {
               @UniqueConstraint(columnNames = "username"),
               @UniqueConstraint(columnNames = "email")
       })
public class UserSystem {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @NotBlank
    @Size(max = 20)
    private String username;

    @NotBlank
    @Size(max = 50)
    @Email
    private String email;

    @NotBlank
    @Size(max = 120)
    private String password;

    public UserSystem(String username, String email, String password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }
}
