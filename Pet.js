module.exports = class Pet {
    constructor(type, nickname, happiness=7, hunger=7, thirst=7, energy=100, cleanliness=7, exp=0, lvl=1, food=0, water=0, cooldown=0) {
        this.nickname = nickname;           // Set by the user
        this.happiness = happiness;         // 0 - 10
        this.hunger = hunger;               // 0 - 10
        this.thirst = thirst;               // 0 - 10
        this.energy = energy;               // 0 - 100
        this.cleanliness = cleanliness;     // 0 - 10
        this.exp = exp;                     // 0 - 100
        this.lvl = lvl;                     // 0 - no cap
        this.food = food;
        this.water = water;
        this.cooldown = cooldown;
        
        var colors;
        if (type == 1) {
            this.type = "Dog";
            colors = ["Black","Colorful","White"];
        }
        else if (type == 2){
            this.type = "Cat";
            colors = ["Black","Blue","Brown", "Red"];
        }
        else if(type == 3){
            this.type = "Bunny";
            colors = ["Red","Blue","White"];
        }
        else{
            this.type = "Frog";
            colors = ["Red","Blue","Green"];
        }     
        this.color = colors[Math.floor(Math.random()*colors.length)];
    }   

}
