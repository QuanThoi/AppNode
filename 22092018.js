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