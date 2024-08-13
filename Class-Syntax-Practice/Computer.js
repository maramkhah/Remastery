class Computer{
    constructor(brand,OS,type){
        this.brand = brand,
        this.OS=OS,
        this.type=type
    }
    //instance methods
    powerOn(){
        console.log(`${this.brand} ${this.type} power on with ${this.OS}`);
    }
    static callPower(...Computer){
        Computer.forEach((cpu)=>cpu.powerOn())
    }
}

//local testing

const cpu1 = new Computer("Microsoft","HP-dm4","Windows");
const cpu2 = new Computer("Macntoch","MacbookPro","MacOS");

cpu1.powerOn();
cpu2.powerOn();

Computer.callPower(cpu1,cpu2);