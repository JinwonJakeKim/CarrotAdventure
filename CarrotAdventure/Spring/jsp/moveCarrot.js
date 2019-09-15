function moveCarrot()
{
	window.addEventListener('keydown', getkeydown, false);
    window.addEventListener('keyup', getkeyup, false);
}
function getkeydown(event)
{
	if(event.keyCode==37)
	{
        direction='L';
	    carrotx-=carrotvx;
	}
	if(carrotx<=10)
	    carrotx=carrotx;
	if(event.keyCode==39)
	{
        direction='R';
	    carrotx+=carrotvx;
	}
	if(carrotx>=1200)
	    carrotx=1200;
}
function getkeyup(event)
{
	carrotvx-=1;
	if(event.keyCode==37)
	{
		carrotx-=carrotvx;
	}
	if(evnet.keyCode==39)
	{
		carrotx+=carrotvx;
	}
}
function getkeypress(event)
{
}