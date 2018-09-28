function display_mess(list) {
	var min = list[0].tinhD();
	var ma='';
	for (var i = 1; i <list.length; ++i) {
		if(list[i].tinhD()<min)
			{
				min = list[i].tinhD();
				ma = list[i].ma_mh;
			}
	}
	return ma;
}

function sum(a=1,b=2){
	return a+b;
}

function display_message() { 
   console.log("Hello World") 
} 
export {display_message,sum}