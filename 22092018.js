// var number = 10;
// function test() {
// 	let number = 100;
// 	console.log("Bien cuc bo la: "+ number);
// }
// console.log("Bien toan cuc la: "+number);
// test();



// let main = function(){
// 	var n = 5;
// 	for (var i = 0; i <n; ++i) {
// 		console.log("Gia tri i trong for la: "+i);
// 	}
// 	console.log("main la 1 hosting: "+i);
// }

// main();



var person = {
	cmnd: 12345,
	name: "Thoi",
	bangcap:function(x="TA1"){
		return x;
	},
	ban_gai:['t','tt'],
	lop:{
		ten_lop: "DHSTIN15",
		ma_lop: "TIN15"
	}
}

console.log("CMND: "+ person.cmnd);
console.log("name: "+ person.name);
console.log("Ban gai: "+ person.ban_gai);
console.log("Lop "+ person.lop.ma_lop);
console.log("Ma Lop "+ person.lop.ten_lop);
console.log("Ban gai dau tien:"+ person.ban_gai[0]);
console.log("Bang cap: "+ person.bangcap("B1"));

var sv = new Object();
sv.name = "Viet Duong";
sv.cmnd = 11111;
sv.bangcap = function(x="B1"){
	return x;
}

sv.ban_gai = ['t','t'];
console.log("Ten Moi: "+ sv.name);
console.log("CMND Moi: "+ sv.cmnd);
console.log("Bang cap: "+sv.bangcap());
console.log("Ban gai: "+sv.ban_gai);
console.log("Ban gai dau tien: "+ sv.ban_gai[0]);
console.log(sv);

var gv = new Object();
gv.ma_gv = "GV001";
gv.ten_gv = "Huong";
gv.ktlichday = function(x=0){
	var kq="";
	switch(x){
		case 0:
			kq = "trong";
			break;
		case 1 2:
			kq = "co lich";
			break;
	}
	return kq;
}
gv.tg_cong_tac = function(y=2010){
	return 2018-y;
}

console.log("Ma GV: "+ gv.ma_gv);
console.log("Ten GV: "+ gv.ten_gv);
console.log("Lich cong tac: "+ gv.ktlichday(2));
console.log("TG cong tac: "+ gv.tg_cong_tac(1997));

