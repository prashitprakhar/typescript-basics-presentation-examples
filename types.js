var city = 'Bangalore';
//city = 10;
var a;
var b;
var c;
var d;
var e = ['Hello', true, 10];
var f = [2, 10, 15];
var friends;
(function (friends) {
    friends[friends["Ram"] = 2] = "Ram";
    friends[friends["Mohan"] = 3] = "Mohan";
    friends[friends["Shyam"] = 1] = "Shyam";
})(friends || (friends = {}));
;
var friend = friends.Mohan;
console.log(friend);
