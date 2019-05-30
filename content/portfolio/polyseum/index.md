---
title: Polyseum
index: 3
---

Gameplay Engineer, C++ (Unreal Engine 4)
<br/>
Spring 2014 - Spring 2015
<br/>
Website: [polyseum.com](https://www.polyseum.com/)

<iframe src="https://youtube.com/embed/ynaGn57ZiN0" width="640" height="360" frameborder="0" allowfullscreen></iframe>

<br/>

Polyseum is a team-focused first person shooter where the goal is to knock enemies into hazards or off of the stage in order to kill them. In a sense, it's akin to a cross between Super Smash Bros. and the first person shooter genre, with emphasis on teamwork and player roles rather than headshots and twitch reactions.

Polyseum was created with a 20-person team in C++ using Unreal Engine 4.

### Programming Contributions

- Architected in-game chat system
- Added on to our status effect system
  - Hitstun - After hit by an attack, the player is input locked for a short amount of time.
  - Gravity Reset - When hit by a certain attack, gravity is lost and slowly regained.
  - Damage Over Time - When hit by an attack, the player takes a small amount of damage every interval for a certain amount of time.
  - Area Damage Over Time - Damage Over Time applied to a player if they're located within a certain area.
- Game Flow: Pre-Game to Match (round-based) to Post-Game
  - Pre-Game - Before the game begins, players may freely choose their weapon kit, face off against players on the other team, and "ready up" to move on to the match. Once the match begins, players are locked into their weapon choice.
  - Game Modes - Responsible for the Arena game mode in which the goal is to eliminate the enemy team. Surviving team wins the round, and first to three rounds wins!
- Spectator mode with a free-flying camera
- Handled reconnecting to the game while maintaining player stats
- Dash formula

### Skills Developed

- C++
- 3D Math
- Networking Models
- Perforce
