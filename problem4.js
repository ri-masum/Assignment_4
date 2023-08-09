function findAddress(obj) {


    const name=object.street;
    const house=object.house;
    const society=obj.society;
    return name+","+house+","+society;

}

const object={
    street:10,
    house:"15A",
    society:"Earth Perfect"
}
console.log(findAddress(object));