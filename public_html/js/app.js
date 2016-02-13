$(document).ready(function(){
   
   
    var signsMaster = [
        "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "Again", "Airplane", "Alligator", "Ambulance/Siren", 
        "Angry", "Animal", "Ape", "Apple", "Aunt", "Baby", "Babysitter/Nanny", "Bad", "Ball", "Balloon", "Banana", "Bath", "Bear", "Beautiful", "Bed", "Bee", "Bell", "Big", "Bike", "Bird", 
        "Bite", "Black", "Blanket", "Blue", "Boat", "Book", "Boy", "Bread", "Broken/Break", "Brother", "Brown", "Brush Hair", "Bubble", "Bug/Insect", "Build", "Bus", "Butterfly", "Cake",
        "Camera", "Candle", "Candy", "Car/Drive", "Careful", "Cat", "Catch (a ball)", "Catch (grab/capture)", "Cereal", "Change", "Chase", "Cheese", "Child/Children", "Christmas", "Clean (not dirty)",
        "Clean (clean up/wash)", "Climb", "Close", "Clouds", "Coffee", "Cold", "Color", "Comb Hair", "Come", "Cook", "Cookie", "Corn", "Cow", "Crab", "Cracker", "Crayon", "Cry", "Cup", "Daddy",
        "Dance", "Danger", "Deer", "Diaper", "Dinosaur", "Dirty", "Dog", "Doll", "Dolphin", "Door", "Down", "Dream", "Dress", "Drink", "Drum", "Dry", "Duck", "Eat", "Elephant", "Excited", "Fall Down",
        "Family", "Fan", "Fast", "Finished", "Fire", "Firefighter", "Fire Truck", "Fish", "Flower", "Fly (bird)", "Fly (insect)", "Friend", "Frog", "Fruit", "Frustrated", "Fun", "Funny", "Game", 
        "Gentle", "Get", "Ghost", "Giraffe", "Girl", "Give", "Give Me", "Glasses", "Go", "Goat", "Good", "Goose", "Grandma", "Grandpa", "Grapes", "Grass", "Green", "Guinea Pig", "Guitar"
    ];
    
    var signsNeedWork = [];
    
    var signsKnown = [];
    
    var currentCards = signsMaster;  //Begins with full deck
    
  
  //Puts a random item from current array into the placeholder text
    function switchCard(array) {
        var item = array[Math.floor(Math.random()*array.length)];
        $('#currentItem').text(item);
    };
    
     //next button chooses a new random item from chosen array
     $('.next').on('click', function(e) {
         e.preventDefault();
         if(currentCards.length > 0) {
            switchCard(currentCards);
        } else {
            alert('This deck has no cards yet!');
        }
     });
    
    
   ///header buttons switches which array being used
     $('#all').on('click', function(e){
         e.preventDefault();
         $('#currentItem').text('All Available Cards');
         currentCards = signsMaster;
     });
     
     $('#hard').on('click', function(e) {
         e.preventDefault();
         $('#currentItem').text('Cards to Work On');
         currentCards = signsNeedWork;
     });
     
     $('#known').on('click', function(e){
         e.preventDefault();
         $('#currentItem').text('Cards You Know');
         currentCards = signsKnown;
     });
     
    
    //easy pushes to signs known
    
    $('#addKnown').on('click', function(e) {
       e.preventDefault();
       var knownItem = $('#currentItem').text();
       signsKnown.push(knownItem);
       
       //remove from hard deck if moving to easy, advances master deck
       if(currentCards === signsNeedWork) {
           var i = signsNeedWork.indexOf(knownItem);
           signsNeedWork.splice(i, 1);
       } else if(currentCards === signsMaster) {
           switchCard(currentCards);
       }
    });
    
    // need work pushes to signs not known
    
    $('#addRepeat').on('click', function(e) {
        e.preventDefault();
        var hardItem = $('#currentItem').text();
        signsNeedWork.push(hardItem);
        
        //remove from easy deck if moving to hard, advances master desk
        if(currentCards === signsKnown) {
            var i = signsKnown.indexOf(hardItem);
            signsKnown.splice(i, 1);
        } else if(currentCards === signsMaster) {
           switchCard(currentCards);
       }
    });
    
    
});
