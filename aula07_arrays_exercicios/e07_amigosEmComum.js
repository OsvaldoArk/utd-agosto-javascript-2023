/*
const amigosOsvaldo = ['rafael','victor','yan','fátima','carol'];

const amigosLucas = ['arthur','carol','alexandre','yan','luciana'];
*/

const p1 = {
    nome:'osvaldo',
    idade: 36,
    amigos: ['rafael','victor','yan','fátima','carol']
}

const p2 = {
    nome:'lucas',
    idade: 32,
    amigos: ['arthur','carol','alexandre','yan','luciana']
}
const amigosEmComum = p1.amigos.filter(amigo => p2.amigos.includes(amigo));

console.log(amigosEmComum);

console.log(p1.amigos[0]);
