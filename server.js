const express = require("express");
const cors = require("cors");
const app = express();
const port = 3001;

app.use(cors());

const data = {
  "Andaman & Nicobar": {
    "E-2 Wheelers": {
      "FY 2024-23": {
        currentFY: "0.56M",
        previousMonth: "80.88K",
        evVolumes: "0.28M",
      },
      "FY 2023-22": {
        currentFY: "0.45M",
        previousMonth: "70.12K",
        evVolumes: "0.24M",
      },
    },
    "E-3 Wheelers": {
      "FY 2024-23": {
        currentFY: "0.40M",
        previousMonth: "50.10K",
        evVolumes: "0.20M",
      },
      "FY 2023-22": {
        currentFY: "0.35M",
        previousMonth: "45.50K",
        evVolumes: "0.18M",
      },
    },
  },
  Maharashtra: {
    "E-2 Wheelers": {
      "FY 2024-23": {
        currentFY: "1.20M",
        previousMonth: "150.88K",
        evVolumes: "0.60M",
      },
      "FY 2023-22": {
        currentFY: "1.10M",
        previousMonth: "140.75K",
        evVolumes: "0.55M",
      },
    },
    "E-4 Wheelers": {
      "FY 2024-23": {
        currentFY: "0.75M",
        previousMonth: "90.20K",
        evVolumes: "0.35M",
      },
      "FY 2023-22": {
        currentFY: "0.68M",
        previousMonth: "85.10K",
        evVolumes: "0.30M",
      },
    },
  },
  Karnataka: {
    "E-2 Wheelers": {
      "FY 2024-23": {
        currentFY: "0.90M",
        previousMonth: "120.88K",
        evVolumes: "0.45M",
      },
      "FY 2023-22": {
        currentFY: "0.80M",
        previousMonth: "110.55K",
        evVolumes: "0.40M",
      },
    },
    "E-3 Wheelers": {
      "FY 2024-23": {
        currentFY: "0.50M",
        previousMonth: "60.10K",
        evVolumes: "0.25M",
      },
      "FY 2023-22": {
        currentFY: "0.45M",
        previousMonth: "55.25K",
        evVolumes: "0.22M",
      },
    },
  },
  Delhi: {
    "E-2 Wheelers": {
      "FY 2024-23": {
        currentFY: "1.50M",
        previousMonth: "200.88K",
        evVolumes: "0.75M",
      },
      "FY 2023-22": {
        currentFY: "1.40M",
        previousMonth: "190.75K",
        evVolumes: "0.70M",
      },
    },
    "E-4 Wheelers": {
      "FY 2024-23": {
        currentFY: "0.95M",
        previousMonth: "110.20K",
        evVolumes: "0.50M",
      },
      "FY 2023-22": {
        currentFY: "0.85M",
        previousMonth: "100.10K",
        evVolumes: "0.45M",
      },
    },
  },
};

const chartData = [
  {
    month: "FY2014-15",
    E2W: 186,
    E3W: 80,
    EBus: 15,
    E4W_Personal: 120,
    E4W_Commercial: 30,
  },
  {
    month: "FY2015-16",
    E2W: 305,
    E3W: 200,
    EBus: 25,
    E4W_Personal: 200,
    E4W_Commercial: 40,
  },
  {
    month: "FY2016-17",
    E2W: 237,
    E3W: 120,
    EBus: 20,
    E4W_Personal: 180,
    E4W_Commercial: 50,
  },
  {
    month: "FY2017-18",
    E2W: 73,
    E3W: 190,
    EBus: 30,
    E4W_Personal: 170,
    E4W_Commercial: 60,
  },
  {
    month: "FY2018-19",
    E2W: 209,
    E3W: 130,
    EBus: 35,
    E4W_Personal: 150,
    E4W_Commercial: 70,
  },
  {
    month: "FY2019-20",
    E2W: 214,
    E3W: 140,
    EBus: 40,
    E4W_Personal: 160,
    E4W_Commercial: 80,
  },
  {
    month: "FY2020-21",
    E2W: 230,
    E3W: 170,
    EBus: 50,
    E4W_Personal: 140,
    E4W_Commercial: 90,
  },
  {
    month: "FY2021-22",
    E2W: 255,
    E3W: 200,
    EBus: 60,
    E4W_Personal: 130,
    E4W_Commercial: 100,
  },
  {
    month: "FY2022-23",
    E2W: 270,
    E3W: 266,
    EBus: 70,
    E4W_Personal: 120,
    E4W_Commercial: 110,
  },
  {
    month: "FY2023-24",
    E2W: 210,
    E3W: 210,
    EBus: 80,
    E4W_Personal: 110,
    E4W_Commercial: 120,
  },
  {
    month: "FY2024-25",
    E2W: 210,
    E3W: 210,
    EBus: 90,
    E4W_Personal: 100,
    E4W_Commercial: 130,
  },
];

app.use(express.json());

app.get("/api/data", (req, res) => {
  const { state, category, year } = req.query;
  console.log("Received request with params:", { state, category, year });
  if (data[state] && data[state][category] && data[state][category][year]) {
    res.json(data[state][category][year]);
  } else {
    console.log("Data not found for these parameters");
    res.status(404).json({ error: "Data not found" });
  }
});

app.get("/api/chart-data", (req, res) => {
  res.json(chartData);
});

app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
