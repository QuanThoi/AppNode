class lop{
	constructor(ma_lop,ten_lop,so_luong){
		this.ml = ma_lop;
		this.tl = ten_lop;
		this.sl = so_luong;
	}

	get_lop(){
		return {
			ma_lop : this.ma_lop,
			ten_lop : this.ten_lop,
			so_luong : this.so_luong
		}

	}
	in_lop(){
		console.log("Ma lop: "+ this.ml);
		console.log("Ten lop:"+ this.tl);
		console.log("So luong:"+ this.sl);
	}
}

class sinh_vien extends lop{
	constructor(ma_sv,ten_sv,nam_sinh){
		super(lop.ma_lop,lop.ten_lop,lop.so_luong);
		this.msv = ma_sv;
		this.tsv = ten_sv;
		this.ns = nam_sinh; 
	}

	get_SV(){
		return {
			ma_sv,
			ten_sv,
			nam_sinh
		}
	}

	in_sv(){
		var l = super.get_lop();
		console.log("Ten Lop: "+ l.ten_lop);
		console.log("Ma Sv: "+ this.msv);
		console.log("Ten Sv:"+ this.tsv);
		console.log("Nam sinh:" + this.ns);
	}

	get_thongtin(){

	}
}

class mon_hoc extends sinh_vien{
	constructor(ma_mh,ten_mh,so_tin_chi){
		super();
		this.mmh = ma_mh;
		this.tmh = ten_mh;
		this.stc = so_tin_chi;
	}

	in_mh(){
		var sv = this.get_SV();
		console.log("Ma sv: "+ sv.ma_sv);
		console.log("Ma MH: "+ this.mmh);
		console.log("Ten MH: "+ this.tmh);
		console.log("So tin chi: "+ this.stc);
	}
}
var Stin = new lop("T15A","DHSTIN",35);
var SV = new sinh_vien(410606,"Thoi",1997,Stin);
//var Tin = new mon_hoc(1997,"GE4150","Lap Trinh Thiet bi di dong",1);
SV.in_sv();