const express = require("express");
const app = express();

const weatherData = [
    { city: "mumbai", temperature: "30 degree" },
    { city: "delhi", temperature: "25 degree" },
    { city: "pune", temperature: "28 degree" },
    { city: "bangalore", temperature: "22 degree" },
    { city: "chennai", temperature: "35 degree" }
];

// app.get("/weather/:city", (req, res) => {
//     const city = req.params.city;
//     const found = weatherData.find(el => el.city === city);

//     if (!found) {
//         return res.status(404).json({ error: `Weather of '${city}' not found` });
//     }

//     res.status(200).json({ message: `Weather of ${city} is ${found.temperature}` });
// });

app.get("/weather", (req, res) => {
    const city = req.query.city;
    const found = weatherData.find(el => el.city === city);

    if (!found) {
        return res.status(404).json({ error: `Weather of '${city}' not found` });
    }

    res.status(200).json({ message: `Weather of ${city} is ${found.temperature}` });
});


app.listen(3501, () => {
    console.log("Server running on http://localhost:3501");
});
