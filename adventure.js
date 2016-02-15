alert('hello')

var ending


var answer = prompt("Want to go on an adventure?  yes, no, maybe?");
if (answer === 'yes') { // "Want to go on an adventure?  yes, no, maybe?"
alert('yippy ky-yay mother fucker!');
answer = prompt("Would you like to take the car, the plane, or the submarine?");
      if (answer === 'car') { // "Would you like to take the car, the plane, or the submarine?"
      answer = prompt('should you take a left, right, or stay straight?');
            if (answer === 'left') { // 'should you take a left, right, or stay straight?'
            answer = prompt('oops.  you drove straight off a ciff.  you are dead.  bummer man');
          } else if (answer === 'right') { // 'should you take a left, right, or stay straight?'
            answer = prompt('oh shit.  you drove into a lake infested with sharks with lasers attached to their heads.  you are dead.  shit.');
        } else if (answer === 'straight') { //'should you take a left, right, or stay straight?'
            answer = prompt('well would you look at that.  you drove right into a brick wall.  that is not ideal.  you are dead.');
            } else {
              confirm('go away');
}
}
        else if(answer === 'plane') {  // "Would you like to take the car, the plane, or the submarine?"
        answer = prompt('Did you remember to gas up the plane?');
        if (answer === 'yes') {
        answer = prompt('good.  but you forgot to hire a proper pilot.  you crashed.  you are dead.');}
        else if (answer === 'no') {
        answer = prompt('well how were you supposed to stay aflight with no gas?  looks like you crashed.  not a good way to go.  you are dead');
}
}
        else if (answer === 'submarine') {  // "Would you like to take the car, the plane, or the submarine?"
        answer = prompt('Would you like to take the submarine below the surface, above the surface, or leave it at the dock?');
        if (answer === 'below the surface') {
        answer = prompt ('you my friend are a ballsy bastard. but you forgot to maintain the correct oxygen level.  everyone is suffocating.  you are dead.');}
        else if (answer=== 'above the surface') {
        answer = prompt('nice choice.  unfortunately this is a nuclear sub and it is beginning to melt down.  everyone within a 100 mile radius is dead.  you are also dead.')}
        else if (answer === 'leave it at the dock') {
        answer = prompt('this is a terrible choice.  what kind of adventure would you have at the dock.  you died of boredom.  you are dead.')
        }
}
}
 else if (answer === 'no') { // "Want to go on an adventure?  yes, no, maybe?"
  alert('whathefuck!  This is suppposed to be fun.  why are you here then? ');
  answer = prompt('are you scared, a baby, or just an asshole?');
  if (answer === 'scared') {
    answer = prompt('would you like me to hold your hand?');}
  if (answer === 'yes') {
    answer = prompt('Hell No Mother Fucker');}
  if (answer === 'no') {
    answer = prompt('well im not getting your mommy for you.  guess you dont measure up.  get the hell outta here.')}


  else if (answer === 'baby') {
    answer = prompt('Would you like a pacifier, a blankey, or a nap?');}
  if (answer === 'pacifier') {
    answer = prompt('nope.  not going to find one of those here.  leave.');}
  else if (answer === 'blankey') {
    answer = prompt('I tore up and burned your blankey.  get outta here.');}
  else if (answer === 'nap'){
    answer = prompt('actually a nap sounds kind of nice.  im pretty tired too.  Fuck it.  Im going home.')
  }
  else if (answer === 'asshole')
  answer = prompt('YOU HAVE VIOLATED THE NUMBER ONE RULE IN THESE PARTS.  FUCK YOU.  GET OUT.')
}
else if (answer === 'maybe') { // "Want to go on an adventure?  yes, no, maybe?"
  alert('make up your damn mind, jerk');
  answer = prompt("have you made up your mind yet?");
  if (answer === 'yes') {
    answer = prompt('about time.  make your selection');}
  else if (answer === 'no') {
  answer = prompt('maybe you arent cut out for this kind of life.  rethink your priorities and life choices.');}
}
