var min=0;
var sec=0;
var msec=0;
var minute=document.getElementById('minu');
var seconds=document.getElementById('seconds');
var milli=	document.getElementById('milli');
var fun;
function timer(){
	msec++;
	milli.innerHTML=msec;
		if(msec==100){
		msec=0;
		sec++;
		seconds.innerHTML=sec;
	}
	if(sec==60){
		sec=0;
		min++;
		minute.innerHTML=min;
	}
}

function start()
{	fun=setInterval(timer,10);
	document.getElementById('start').disabled=true;
	document.getElementById('reset').disabled=false;
	document.getElementById('stop').disabled=false;

		}
function stop()
{clearInterval(fun);
	document.getElementById('start').disabled=false;
	document.getElementById('reset').disabled=false;
	document.getElementById('stop').disabled=true;}
function reset(){
	minute.innerHTML='00';
	seconds.innerHTML='00';
	milli.innerHTML='00';
	clearInterval(fun);
	min=0,sec=0,msec=0;
	document.getElementById('start').disabled=false;
	document.getElementById('reset').disabled=true;
	document.getElementById('stop').disabled=false;
}