
import {TongDiemCacMon,TinhDiemTB,min,max,hi} from './modules.mjs'
class MonHoc{
	constructor(ma_mh,ten_mh,DiemHK1,DiemHK2,sotinhchi){
		this.mmh = ma_mh;
		this.tmh = ten_mh;
		this.DHK1 = DiemHK1;
		this.DHK2 = DiemHK2;
		this.stc = sotinhchi;
	}
	get_MH(){
		return{
			ma_mh : this.mmh,
			ten_mh : this.tmh,
			DiemHK1 : this.DHK1,
			DiemHK2 : this.DHK2,
			sotinhchi : this.stc
		}
	}

	get_maMH(){
		return this.mmh;
	}

	tinhD(){
		//var num = (this.DHK1+2*this.DHK2)/3;
		return (this.DHK1+2*this.DHK2)/3;
	}

}
class SinhVien extends MonHoc{
	
	constructor(ma_sv,ten_sv,nam_sinh,mh){
		super(mh.mmh,mh.tmh,mh.DHK1,mh.DHK2,mh.stc);
		this.msv = ma_sv;
		this.tsv = ten_sv;
		this.ns = nam_sinh; 
	}

	in_sv(){
		console.log("Ma Sv: "+ this.msv);
		console.log("Ten Sv:"+ this.tsv);
		console.log("Nam sinh:" + this.ns);
	}
}

var tin = new MonHoc("TIN","TIN",9,10,3);
var toan = new MonHoc("TOAN","TOAN",8,1,2);
var cnpm = new MonHoc("CNPM","CONG NGHE PHAN MEM",9,9,4);
var arr_MH = [tin,toan,cnpm];

var SV = new SinhVien(410606,"Thoi",1997,tin);
SV.in_sv();
console.log(TongDiemCacMon(arr_MH));
console.log(TinhDiemTB(arr_MH));
console.log(min(arr_MH));
console.log(max(arr_MH));