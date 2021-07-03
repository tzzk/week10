//for in loop
var student={
    name:"TZZK",
    major:"IT",
    birth_year:1999,
    adress:"Mdy",
    checkAge:function(){
        var today=new Date();
        var current_year=today.getFullYear();
        var agea=current_year-this.birth_year;
        return agea;
    }

}
for(var prop in student){
    console.log(prop + ":" +student[prop]);

}
console.log("age is "+student.checkAge());

//sum exercse
var employee={
    name:"Hnin Hnin",
    position:"Manager",
    department:"HR",
    basic_salary:800000,
    absent:5,
    calculateBonus:function(){var bonus=0;
        if(this.basic_salary<=200000){
            bonus=this.basic_salary*0.05;
        }
        else if(this.basic_salary>=350000){
            bonus=this.basic_salary*0.07;
        }
        else if(this.basic_salary>= 1000000){
            bonus = this.basic_salary * 0.1;
        }
           
      
        return bonus;
    }
}
for (var prop in employee){
    console.log(prop +";"+employee[prop]);
}
console.log("Bonus is "+employee.calculateBonus());
// for of loop
var myname="Tin Zar";
for (var c of myname){
    console.log(c+",");
}
var students=["Mama","Htet Htet"];
for(var sname of students){
    console.log(sname+",");
}

//Mapping
//(key value nae lae .set nae write pay ya /out chin yin for of nae out)
var lang=new Map();
lang.set("js","Javascript");
lang.set("py","python");
lang.set("php","PHP-web lang");
for(var language of lang){
    console.log(language);
}

//forEach
students.forEach(function(name,index){
    console.log(index+"="+name+";");
})

var fruits=["Orange","Apple","Grape","Pineapple"];
fruits.forEach(function(name,index) {
    console.log(name+"="+index+";");
})
