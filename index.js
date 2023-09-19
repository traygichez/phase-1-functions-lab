function distanceFromHqInBlocks(customer) {
  const scuber = 42;
   
  if (customer < scuber) {
    const distance = scuber-customer;
    return distance;
    
  } else {
    const distance = customer-scuber;
    return distance;
  }
  
  }
  distanceFromHqInBlocks(100);
  function distanceFromHqInFeet(customerFromHqInBlocks) {
    const scuberFromHqInBlocks = 42;
    const Block = 264;

    if (customerFromHqInBlocks>=scuberFromHqInBlocks){
        const feet = (customerFromHqInBlocks - scuberFromHqInBlocks) *Block;
        return feet;
    } else {
        const feet = (scuberFromHqInBlocks - customerFromHqInBlocks) *Block;
        return feet;
    }
}

const distanceInFeet = distanceFromHqInFeet(100);
console.log(distanceInFeet);

  function distanceTravelledInFeet(start, destination) {
    
    if (destination>start) {
        return (destination-start)*264
    } else {
        return(start-destination)*264
    }
  }
  distanceTravelledInFeet(34, 20);

  function calculatesFarePrice(start,destination) {
    const distance= distanceTravelledInFeet(start,destination);
    if (distance <400){
        return 0;
    }
    else if (distance>400&&distance<=2000) {
        return(distance-400)*2/100;
    }
    else if (distance>2000&&distance<=2500){
    return 25
    } 
    else{
        return'cannot travel that far';
    }
    }



  