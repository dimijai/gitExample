console.log('person1 shows ticket');
console.log('person2 shows ticket');

const preMovie = async () => {

  const person3PromiseToShowTicketWhenWifeArrives = new Promise((resolve, reject) => {
    setTimeout(() => resolve('ticket'), 3000);
  });
  const getPopcorn =  new Promise((resolve, reject) => {
		setTimeout(() => resolve('popcorn'), 3000);
  });
  
  const getButter =  new Promise((resolve, reject) => {
		setTimeout(() => resolve('butter'), 3000);
  });
  
   const getColdDrinks =  new Promise((resolve, reject) => {
		setTimeout(() => resolve('coldDrinks'), 3000);
  });

  let ticket = await person3PromiseToShowTicketWhenWifeArrives;
  
  let [ popcorn, butter, coldDrinks ] = await Promise.all([getPopcorn, getButter, getColdDrinks]);

  console.log(`got ${popcorn}, ${butter}, ${coldDrinks}`);
  
  return ticket;
  
};

preMovie().then((t) => console.log(`person3 shows ${t}`));

console.log('person3 shows ticket');
