class a{
	constructor(a_a){
		this.a = a_a;
	}

	get_a(){
		return a_a=this.a_a;
	}
}
class b extends a{
	constructor(b_b,a){
		super(a.a_a);
		this.b = b_b;
	}
	in(){
		var a= super.get_a();
		console.log("a: " + a.a_a);
		console.log("b: " + this.b_b);
	}
}
var  AA = new a(1);
var	BB = new b(2);
b.in();

