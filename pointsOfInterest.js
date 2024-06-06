function parseCSV(csvText) {

    const options = { header: true };
    const pointsData = Papa.parse(csvText, options);

    return pointsData;
}