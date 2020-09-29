package com.rps.player;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Data
@Entity
@Table(name = "player")
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Player {

    @Id
    private Integer id;

    private String name;
}
