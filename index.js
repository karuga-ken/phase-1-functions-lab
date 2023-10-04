function distanceFromHqInBlocks(block){
    if (block > 42) {
        return block - 42;
    }else{
        return 42 - block;
    }
}

function distanceFromHqInFeet (block){
        return distanceFromHqInBlocks(block) * 264;
}

function distanceTravelledInFeet (location, destination) {
    if (location < destination){
        return (destination - location) * 264;
    }else{
        return (location - destination) *264;
    }
}

function calculatesFarePrice (location, destination){
    const distance = distanceTravelledInFeet (location, destination);
    if (distance <= 400 ){
        return 0;
    }else if(distance > 400 && distance <= 2000){
        return (distance - 400 ) * 0.02;
    }else if(distance > 2000 && distance < 2500){
        return 25;
    }else{
        return "cannot travel that far"
    }
}
