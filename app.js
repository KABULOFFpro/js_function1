let userName = prompt("Ismingizni kiriting")

while(!isNaN(userName)){
    userName = prompt("Ismingizni kiriting")
}
let curretYear = +prompt("Hozirgi yilni kitining...")
while (isNaN(curretYear) || curretYear == "") {
     curretYear = +prompt("Hozirgi yilni kiriting...")
    
}
let userBornDate = +prompt("Tug'ilgan yilingizni kiriting...")
while(isNaN(userBornDate) || userBornDate == "")
userBornDate = +prompt("Tug'ilgan yilingizni kiriting...")
let userAge
function calcAge(a,b) {
    userAge = a - b
}   
calcAge(curretYear, userBornDate)
alert(`${userName} yowiz ${userAge} da`)