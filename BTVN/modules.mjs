function TongDiemCacMon(list){
	var diem = 0;
	for (var i = 0; i <list.length; ++i) {
		var tem = 0;
		tem = list[i].tinhD()*list[i].stc;
		diem+=tem;
	}
	return diem;
}

function TinhDiemTB(list) {
	var diem = 0;
	for (var i = 0; i <list.length; ++i) {
		var tem = 0;
		tem = list[i].tinhD()*list[i].stc;
		diem+=tem;
	}
	return diem/list.length;
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
	return ma;
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
	return ma;
}

function hi(){
	console.log("Hi ALL!");
}

export {TongDiemCacMon,TinhDiemTB,min,max,hi}