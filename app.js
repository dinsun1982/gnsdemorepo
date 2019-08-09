var person={

firstName:"Dinesh",
lastName:"Gupta",
address: "Pune",
 fullName : function() {
       return this.firstName + " " + this.lastName;
    }
};

// document.getElementById("demo").innerHTML = person.fullName();
document.write(person.fullName());

function displaydate()
{
	  alert(this.date());
}
