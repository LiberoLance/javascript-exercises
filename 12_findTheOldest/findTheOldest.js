const findTheOldest = function(people) {
	let oldest = people.reduce(function (lastPerson, currentPerson) {
		let oldPerson = currentPerson;
		
		if(lastPerson.yearOfDeath != null && currentPerson.yearOfDeath != null){ 
			oldPerson = lastPerson.yearOfDeath - lastPerson.yearOfBirth > currentPerson.yearOfDeath - currentPerson.yearOfBirth ? lastPerson : currentPerson;
		}
		else{
			oldPerson = lastPerson.yearOfBirth < currentPerson.yearOfBirth ? lastPerson : currentPerson;
		}

		
		return oldPerson;
	});

	return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
