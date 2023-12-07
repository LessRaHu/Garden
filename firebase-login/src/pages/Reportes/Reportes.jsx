import React, { useEffect, useState } from "react";
import { Typography, Paper } from "@mui/material";
import mqtt from "mqtt";

export function Reportes(props) {
  const [humedad, setHumedad] = useState("");
  const [temperatura, setTemperatura] = useState("");
  const [nivelAgua, setNivelAgua] = useState("");

  useEffect(() => {}, []);

  return (
    <div>
      <Paper elevation={3} style={{ padding: "20px", marginBottom: "20px" }}>
        <Typography variant="h6">Humedad:</Typography>
        <Typography>{humedad}</Typography>
      </Paper>
      <Paper elevation={3} style={{ padding: "20px", marginBottom: "20px" }}>
        <Typography variant="h6">Temperatura:</Typography>
        <Typography>{temperatura}</Typography>
      </Paper>
      <Paper elevation={3} style={{ padding: "20px" }}>
        <Typography variant="h6">Nivel del Agua:</Typography>
        <Typography>{nivelAgua}</Typography>
      </Paper>
    </div>
  );
}
