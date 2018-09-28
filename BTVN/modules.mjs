function TongDiemCacMon(list){
	var diem = list[0].tinhD();
	for (var i = 0; i <list.length; ++i) {
		var tem = list[i].tinhD()/list[i].stc;
		diem+=tem;
	}
	return diem.toPrecision(3);
}

function TinhDiemTB(list) {
	var diem = list[0].tinhD();
	for (var i = 0; i <list.length; ++i) {
		diem +=list[i].tinhD();
	}
	return (diem/list.length).toPrecision(3);
}

function min(list) {
	var min = list[0].tinhD();
	var ma = list[0].get_maMH();
	for (var i = 0; i <list.length; ++i) {
		if(list[i].tinhD()<min)
			{
				min = list[i].tinhD();
				ma = list[i].get_maMH();
			}
	}
	return ma+": ("+min.toPrecision(3)+"đ)";
}

function max(list){
	var max = list[0].tinhD();
	var ma = list[0].get_maMH();
	for(var i = 0; i < list.length; ++i)
	{
		if(list[i].tinhD()> max)
		{
			max = list[i].tinhD();
			ma = list[i].get_maMH();
		}

	}
	return ma+": ("+max.toPrecision(3)+"đ)";
}

function hi(){
	console.log("Hi ALL!");
}

export {TongDiemCacMon,TinhDiemTB,min,max,hi}