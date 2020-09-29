package com.rps.stats;

import com.rps.player.Player;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;

@Data
@Builder
@Entity
@Table(name = "player_stats")
@NoArgsConstructor
@AllArgsConstructor
public class PlayerStats implements Serializable {

    @Id
    private Integer rowId;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "id")
    private Player player;
    private int gamesWon;
    private int gamesLost;
    private int gamesTied;
    private int rocksThrown;
    private int papersThrown;
    private int scissorsThrown;
}
