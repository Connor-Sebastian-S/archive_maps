

function parseCSV(csvText) {
    const lines = csvText.split('\n');
    const headers = lines[0].split(',');
    const pointsData = [];

    for (let i = 1; i < lines.length; i++) {
        if (!lines[i]) continue; // skip empty lines
        const currentLine = lines[i].split(',');

        const point = {};
        for (let j = 0; j < headers.length; j++) {
            const key = headers[j].trim();
            let value = currentLine[j].trim();

            // Convert latitude and longitude to numbers
            if (key === 'latitude' || key === 'longitude') {
                value = parseFloat(value);
            }

            // Convert startYear and endYear to numbers
            if (key === 'startYear' || key === 'endYear') {
                value = parseInt(value);
            }

            point[key] = value;
        }
        pointsData.push(point);
    }

    return pointsData;
}