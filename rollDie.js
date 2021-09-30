// let dic=dictionary();
// dic={1:0,2:0,3:0,4:0,5:0,6:0};
// while(true){
// n=Math.floor((Math.random() * 6) + 1);
// dic[n]=dic[n].values()+1;
// console.log(dic);
// }
let DiceValueMap=new Map();
for (let [key,value] of DiceValueMap){
	if(value == 10) {
		winner = key;
	}
	
}
while( count <= 10){
    let key = Math.floor(Math.random() * 6) + 1;
	DiceValueMap.set(key,count);
    count++;
}