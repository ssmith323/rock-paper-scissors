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
public class PlayerStats {

    @Id
    private Integer id;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "player_id")
    private Player player;

    private Integer gamesWon;
    private Integer gamesLost;
    private Integer gamesTied;
    private Integer rocksThrown;
    private Integer papersThrown;
    private Integer scissorsThrown;
}
