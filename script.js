var User = function(name, pass){
	this.name = name;
	this.pass = pass;
	this.age = 0;
	this.note = []
}
// check name && password 
User.prototype.connect = function(name){
	

for (i = 0; i<users.length; i++){
	 if(users[i].name == this.name){
	 	if(users[i].pass == this.pass){
	 		this.age = users[i].age;
	 		this.note = users [i].note;
	 		return true;
	 	} else {
	 		return false; // deuxiemme condition
	 	}
	 } else {
	 	return false; // premiere condition
	 }
} // fin check

}//fin connect
var useprinc;
$('#button1').click(function(){
	useprinc = new User($("#login").val(), $("#pass").val());
	if(useprinc.connect()==true){
		$('#connect').hide;
		$('#main').fadeIn;
	} else { alert("brelle retourne dans ton calepin verifier ton mdp avant 12 o cock")}
}); // fin click
var user1 = new User("jason", "boss");