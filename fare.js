function calculateBodaFare(){
    let kmInput = prompt("Unafika wapi Mkubwa? kilometer ngapi?: ")
    let distanceInKm = Number(kmInput);
    let baseFare = 50;
    let chargePerKm =15;
    let totalFare =baseFare + (distanceInKm * chargePerKm);

    console.log("Uko kwote? Io ni " + distanceInKm + "km:")
    console.log("Ukikalia Pikipiki:" + " KES" + baseFare)
    console.log("Mpaka Uko:" + " KES" + totalFare)
    console.log("Total:" + " KES" + totalFare)
    console.log("Panda Pikipiki!")
}
calculateBodaFare();