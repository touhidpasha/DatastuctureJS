let dice={1:0,2:0,3:0,4:0,5:0,6:0};
let flag=true;
while(flag){
	let n=Math.floor((Math.random() * 6) + 1);
	dice[n]=dice[n]+1;
	for (key in dice){
		if(dice[key]>=10)
		{console.log("MAXIMUM:dice number "+key+" got 10");
		flag=false;
		let min=0;
		for (key in dice)
		if(min>dice[key])
		min=dice[key];
		console.log("MINIMUM: dice number"+key+" got "+dice[key]+" occurence");
	}
	}
}