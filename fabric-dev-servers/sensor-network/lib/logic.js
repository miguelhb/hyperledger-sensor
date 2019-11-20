/**

 * Track the trade of a commodity from one trader to another

 * @param {org.example.sensornetwork.NewMeasure} trade - the trade to be processed

 * @transaction

 */

async function newMeasure(newMeasure) {
    //trade.commodity.owner = trade.newOwner;
    //let assetRegistry = await getAssetRegistry('org.example.sensornetwork.Commodity');
    //await assetRegistry.update(trade.commodity);
	//newMeasure.room.roomID = newMeasure.room;
	newMeasure.room.temperature = newMeasure.temp;
	newMeasure.room.humidity = newMeasure.hum;
	newMeasure.room.supervisor = newMeasure.supervisor;
	let assetRegistry = await getAssetRegistry('org.example.sensornetwork.Room');
	await assetRegistry.update(newMeasure.room);
}
