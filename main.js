var arrow;
arrow= document.getElementsByClassName('arrow');
head= document.getElementsByClassName('head');
content=document.getElementsByClassName('content');
box=document.getElementById('box');
desktopImage=document.getElementById('image-desktop');
deshtopShadow=document.getElementById('shadow-desktop');
container=document.getElementById('container');



console.log(window.screen.width);
function arrowclick(a,b,c,d,e,f,g){
var clickCounter=0;
		
	a.onclick=function()
	{
if(clickCounter==0)
	{
	b.style.transform="rotate(180deg)";
	clickCounter++;
	a.style.color=" hsl(237, 12%, 33%)";
	a.style.fontWeight="700";
	c.style.display="flex";
	b.style.filter="brightness(.5)";
	}
	

	else 
	
	{b.style.transform="rotate(0deg)";
	clickCounter=0;
	a.style.color=" hsl(240, 6%, 50%)";
	a.style.fontWeight="700";
	c.style.display="none";
	b.style.filter="brightness(1)";
	};
	console.log(clickCounter);

}

a.onmouseenter=function()
	{
		
			


		if(clickCounter==0)
		{
			a.style.color="hsl(14, 88%, 65%)";
			d.style.transform="translateX(-42rem) translateY(15rem)";
			e.style.transform="translateX(-27rem) translateY(21rem)";
			f.style.transform="translateX(-26rem) translateY(22.5rem)";

			if(window.screen.width>"600")
			{g.style.transform="translateX(-.5rem)";}
			if(window.screen.width<="600")
				{g.style.transform="translateX(0rem)";}
		}	
		else
		{
			a.style.color="hsl(240, 6%, 50%)";
		}
	}


	a.onmouseleave=function()
	{
		if(clickCounter==1)
		{
			a.style.color="hsl(237, 12%, 33%)";

		}
		else
		{
			a.style.color="hsl(240, 6%, 50%)";
			d.style.transform="translateX(-38rem) translateY(15rem)";
			e.style.transform="translateX(-25rem) translateY(21rem)";
			f.style.transform="translateX(-25rem) translateY(22.5rem)";
			g.style.transform="translateX(0rem)";
		}	
	}





}


for(var i=0;i<arrow.length;i++)
arrowclick(head[i],arrow[i],content[i],box,desktopImage,deshtopShadow,container);







