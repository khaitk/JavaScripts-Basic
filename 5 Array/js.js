var myFriends = ['Bông', 'Tài', 'Doãn', 'Khả', 'Đoàn', 'Sơn'];
console.log(myFriends); // "Bông", "Tài", "Doãn", "Khả", "Đoàn", "Sơn"

console.log(typeof(myFriends));

for (const i in myFriends) {
    console.log("My friend : " + myFriends[i]);
}

console.log(myFriends.length); // 6

myFriends[4] = 'Phương';
console.log(myFriends); // "Bông", "Tài", "Doãn", "Khả", "Phương", "Sơn"

console.log("======= Splice ======");
myFriends.splice(2, 3, 'Khải');

console.log(myFriends); // "Bông", "Tài", "Khải", "Sơn"

var myFriendsGirl = ['Phượng', 'Khải'];

console.log("======= Concat ======");

var myAllFriends = myFriends.concat(myFriendsGirl);
console.log(myAllFriends); // "Bông", "Tài", "Khải", "Sơn", "Phượng", "Khải"

console.log("======= Sort ======");
myFriends.sort();
console.log(myFriends);

console.log("======= Reverse ======");

myFriends.reverse();
console.log(myFriends);