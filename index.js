const  names = ['Xurshid', 'Alisher','Malik', 'Sobir','ahmad','parvez','zokir','doston','alibek','nodir','bobur','suxrob','jasur','mirzo','ulugbek','atham','amirxon','toxir','shukur','bekzod']
const conf = prompt(`write please ${names}:`)





const people = [
    {
        name:"Xurshid",
        age:28,
        hobbies:"play footbal",
        city:"Toshkent",
        Number:998889988,
    },
    {
        name:"Malik",
        age:22,
        hobbies:"play pubg",
        city:"Samarqand",
        Number:912234456,
        
    },
    {
        name:"Alisher",
        age: 25,
        isWorking: true,
        hobbies: ["play computer games", "play footboll", 'listing music']
    },
    {
        name:"Sobir",
        age:33,
    }
]


for(let i =0; i < people.length; i++){
    if(conf === people[i].name){
        document.write(`
        <div class="block">
        <div class="card" style="width: 18rem;">
        <img src="https://i.pinimg.com/originals/bf/82/f6/bf82f6956a32819af48c2572243e8286.jpg" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${people[i].name}</h5>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">age:${people[i].age}</li>
          <li class="list-group-item">hobbies:${people[i].hobbies}</li>
          <li class="list-group-item">city:${people[i].city}</li>
          <li class="list-group-item">number:${people[i].Number}</li>
        </ul>
      </div>
      </div>
        `)
    }
}