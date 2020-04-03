/*First create an array of objects called data with the following values:

1. Principal- 2500, time- 1.8

2. Principal- 1000, time- 5

3. Principal- 3000, time- 1

4. Principal- 2000, time- 3
 

NB: Each individual object should have 'principal' and 'time' as keys.*/

//author: idiaghe osaigbovo
//javascrit task2


const data = [
    {
      principal: 2500,
      time: 1.8
    },
    {
      principal: 1000,
      time: 5
    },
    {
      principal: 3000,
      time: 1
    },
    {
      principal: 2000,
      time: 3
    }
  ];
 
  const interestCalculator = (arr) => {
    let rate;
    let interest;
    const interestData = [];
    arr.forEach(data => {
       if (data.principal >= 2500 && data.time > 1 && data.time < 3) {
         rate = 3;
         interest = (data.principal * rate * data.time) / 100;
         interestData.push(
           {
             'principal':  data.principal,
             'rate': rate,
             'time': data.time,
             'interest': interest
           }
         );
       } else if (data.principal >= 2500 && data.time >= 3){
        rate = 4;
        interest = (data.principal * rate * data.time) / 100;
        interestData.push(
           {
             'principal':  data.principal,
             'rate': rate,
             'time': data.time,
             'interest': interest
           }
         );
       } else if (data.principal < 2500 || data.time <= 1) {
        rate = 2; 
        interest = (data.principal * rate * data.time) / 100;
        interestData.push(
           {
             'principal':  data.principal,
             'rate': rate,
             'time': data.time,
             'interest': interest
           }
         );
       } else {
        rate = 1;
        interest = (data.principal * rate * data.time) / 100;
        interestData.push(
           {
             'principal':  data.principal,
             'rate': rate,
             'time': data.time,
             'interest': interest
           }
         );
       }
    })
    
    console.log(interestData)
   
   return interestData;
  }
  
  interestCalculator(data)