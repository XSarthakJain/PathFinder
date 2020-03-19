
var a=new Array();
var graph=new Array(225);
for(k=0;k<225;k++)
	graph[k]=new Array(225);
for(var k=0;k<225;k++){
	for(var l=0;l<225;l++){
		graph[k][l]=0;
	}
}
var dis=new Array(225);

var map=new Array(225);
var s=new Array(225);

var hurdle=new Array();

var hr=0;
var i=0;
var p1,p2;
var Source;
var destination;

function Start(){
	Source=prompt("Enter Source Location","Ex-5");
	s=document.getElementById(Source);
	s.textContent='';
	s=document.getElementById(Source).className="glyphicon glyphicon-map-marker";
	document.getElementById(Source).style.color="green";
	
}

function End(){
	destination=prompt("Enter destination Location","Ex-25");
	s=document.getElementById(destination);
	s.textContent='';
	document.getElementById(destination).className="glyphicon glyphicon-map-marker";
	document.getElementById(destination).style.color="red";

}

function Obstracle(n){
	document.getElementById(n).style.backgroundColor="#a64b3c";
	a[i++]=n;	
	hurdle[hr++]=n;
	}

function Visualize(){
	if(Source!=destination){
	var col=1;
	for(j=0;j<225;j++){
		graph[j][j]=0;
	
		if(col>1 && col<25){

				if(!((j-26)<0)){
					graph[j][j-26]=1;	
				}
				if(!((j-25)<0)){
					graph[j][j-25]=1;				
				}
				if(!((j-24)<0)){
					graph[j][j-24]=1;
				}
				
				graph[j][j-1]=1;


				graph[j][j+1]=1;
				if(!((j+24)>225)){
					graph[j][j+24]=1;
				}

				if(!((j+25)>225)){
					graph[j][j+25]=1;
				}
				if(!((j+26)>225)){
					graph[j][j+26]=1;
				}
				
				
				

		}
		 if(col==1){
		 	if(!((j-24)<0)){
		 		graph[j][j-24]=1;	
		 	}
			if(!((j-24)<0)){
				graph[j][j-25]=1;	
			}
			
			graph[j][j+1]=1;
			graph[j][j+25]=1;
			if(!((j+26)>225)){
				graph[j][j+26]=1;	
			}
			
		}

		else if(col==25){

			if(!((j+24)>225)){
				graph[j][j+24]=1;	
			}
			if(!((j+25)>225)){
				graph[j][j+25]=1;
			}
		
			graph[j][j-1]=1;
			graph[j][j-25]=1;
			if(!((j-26)<0)){
				graph[j][j-26]=1;	
			}
			
		}

		if(col==25){
			col=1;
		}
		else{
			col=col+1;
		}

	}

	Filter();
}

else{
	alert("Source and destination can't be equal");
}

}


function Filter(){

	for(i=0;i<hr;i++)
	{
		for(j=0;j<225;j++)
		{

			graph[hurdle[i]][j] =0;
			graph[j][hurdle[i]]=0;
		}
	}

	Dijkstra();
}


function sleep(ms){
			document.getElementById(ms).style.backgroundColor="red";
	for(z=0;z<10000;z++){

	}
}




function Dijkstra(){

var l=0;
for(var i=0;i<225;i++){
	if(i==Source)
		{
			dis[i]=0;

			map[i]=Source;
		}
	else
		{
			dis[i]=10000;
			map[i]=Source;
			
		}

}


s[l++]=Source;
for(var i=0;i<225;i++){
	if(graph[Source][i]>0)
		{
			dis[i]=graph[Source][i];
			
			map[i]=map[Source]+"$"+i;
		}


}

var i,j,k;
for(i=0;i<224;i++)
{
	for(j=0;j<225;j++)
	{
		if(dis[j]!=10000)
		{

			//const btn=
			//setTimeout(function (){

			//},1000);
				
			for(k=0;k<225;k++)
			{

					//console.log(bn);
				if(graph[j][k]!=0)
				{
					if(dis[k]>dis[j]+graph[j][k])
					{
						
						dis[k]=dis[j]+graph[j][k];
						map[k]=map[j]+"$"+k;
					
					var rang=document.getElementById(k).style.backgroundColor="skyblue";
						//document.getElementById(k).style.transition = "all 0.5s";
						

					}
				}
			}
		}
	}
}


way();
}


function way()
{
	var w=map[destination].split("$");
	if(w[0]==Source && w[(w.length)-1]==destination)
	for(i=0;i<w.length;i++){
		document.getElementById(w[i]).style.backgroundColor="yellow";
		document.getElementById('result').innerHTML="Minimum Path of "+Source+" to "+destination+ " is "+((w.length)-1);
	}
	else
		alert("There is no path from source to destination");
}


function Automation()
{
	while(true){

			Source=Math.floor((Math.random()*225)+1);
			destination=Math.floor((Math.random()*225)+1);

			if(Source!=destination){
				document.getElementById(Source).className="fa fa-map-pin";
				document.getElementById(Source).style.color="green";
				document.getElementById(Source).style.fontSize="25px";
				document.getElementById(destination).className="fa fa-map-marker";
				document.getElementById(destination).style.color="red";
				document.getElementById(destination).style.fontSize="25px";

				Visualize();
				break;
			}

	}

}
