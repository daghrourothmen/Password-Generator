const AlphabetTableUppercase=['A','B','C','D','E','F',
                     'G','H','I','J','K','L',
                     'M','N','O','P','Q','R',
                     'S','T','U','V','W','X',
                     'Y','Z'];

const AlphabetTableLowerCase=AlphabetTableUppercase.map((Upper)=>{
 return Upper.toLocaleLowerCase();
});

const NumbersTable=[0,1,2,3,4,5,6,7,8,9];

const SymbolTable=['.',',','?','§','!','<','>','=','*','/','-','+','|','^','(',')','_','%','°','{','}','&'];

const RandomTable=((Math.random())*10).toFixed(0);

const TableName=['AlphabetTableUppercase','AlphabetTableLowerCase','NumbersTable','SymbolTable'];

let length=8;
let Password='';
let RandomPosition=((Math.random())*10).toFixed(0);
let RandomT1=((Math.random())*10).toFixed(0);
let RandomT2=((Math.random())*10).toFixed(0);
let RandomT3=((Math.random())*10).toFixed(0);
let RandomT4=((Math.random())*10).toFixed(0);

function ControlledRandomNumbers(){

    while(RandomT1>3 || RandomT2>3 || RandomT3>3 || RandomT4>3){
        RandomT1=((Math.random())*10).toFixed(0);
        RandomT2=((Math.random())*10).toFixed(0);
        RandomT3=((Math.random())*10).toFixed(0);
        RandomT4=((Math.random())*10).toFixed(0);
    }

    return [RandomT1,RandomT2,RandomT3,RandomT4];

};

function PasswordGenerator(){

    while(length >0)
    {

        Password=Password+TableName[ControlledRandomNumbers()[0]][RandomPosition]+
                          TableName[ControlledRandomNumbers()[1]][RandomPosition]+
                          TableName[ControlledRandomNumbers()[2]][RandomPosition]+
                          TableName[ControlledRandomNumbers()[3]][RandomPosition];
        RandomPosition=((Math.random())*10).toFixed();
        length--;

    }

    return Password;

};


console.log(PasswordGenerator());
console.log(ControlledRandomNumbers());