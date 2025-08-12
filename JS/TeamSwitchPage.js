function selectGame(Game_Selecter) {

  // Get the heading element that displays the selected game's name
  const GameName = document.getElementById('Game_Name');

  // Get the section elements for each game's team
  const LOLTeam = document.getElementById('Team_LOL');
  const VTTeam = document.getElementById('Team_VT');
  const MLTeam = document.getElementById('Team_ML');  

  // Check which game was selected and update the page accordingly
  if (Game_Selecter === 'LeagueOfLegends') {
    // Set the title to "LEAGUE OF LEGENDS"
    GameName.textContent = 'LEAGUE OF LEGENDS';

    // Show the League of Legends team section
    LOLTeam.style.display = 'block';

    // Hide the other teams
    VTTeam.style.display = 'none';
    MLTeam.style.display = 'none';

  } else if (Game_Selecter === 'Valorant') {
    // Set the title to "VALORANT"
    GameName.textContent = 'VALORANT';

    // Show the Valorant team section
    VTTeam.style.display = 'block';

    // Hide the other teams
    LOLTeam.style.display = 'none';
    MLTeam.style.display = 'none';

  } else if (Game_Selecter === 'MobileLegends') {
    // Set the title to "MOBILE LEGENDS"
    GameName.textContent = 'MOBILE LEGENDS';

    // Show the Mobile Legends team section
    MLTeam.style.display = 'block';

    // Hide the other teams
    VTTeam.style.display = 'none';
    LOLTeam.style.display = 'none';
  }

}
