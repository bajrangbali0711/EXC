function calculateCoolingLoad() {
    const area = parseFloat(document.getElementById('area').value);
    const occupants = parseInt(document.getElementById('occupants').value);
    const buildingType = parseInt(document.getElementById('buildingType').value);
    const outdoorTemp = parseFloat(document.getElementById('outdoorTemp').value);
    const indoorTemp = parseFloat(document.getElementById('indoorTemp').value);

    let coolingLoad;

    if (buildingType === 1) {
        coolingLoad = 100 * occupants;
    } else if (buildingType === 2) {
        coolingLoad = 150 * occupants;
    } else {
        document.getElementById('result').innerText = 'Invalid building type';
        return;
    }

    const overallHeatTransferCoefficient = 30; 
    const qConduction = overallHeatTransferCoefficient * area * (outdoorTemp - indoorTemp);

    const sensibleCoolingLoad = qConduction + coolingLoad;

    document.getElementById('result').innerText = `Sensible Cooling Load: ${sensibleCoolingLoad} W`;
}