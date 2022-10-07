//---------------------------------------------------------------------------------
// A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?

// Return True if yes, False otherwise :)
// --------------------------------------------------------------------------------

//Parameters - number of bullets and a number of dragons
//returns - bool
//examples -(hero(10, 5), true);
    // (hero(7, 4), false);
    // (hero(4, 5), false);
    // (hero(100, 40), true);
    // (hero(1500, 751), false);
    // (hero(0, 1), false);
//psuedo - bullets need to be double the amount of dragons to kill them all and bullets need to be more than amoiunt of dragons


function hero(bullets, dragons){
  return (bullets > dragons && bullets/dragons >= 2) ? true : false
  }
  console.log(hero(10,5))