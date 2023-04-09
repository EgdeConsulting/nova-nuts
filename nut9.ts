import csv from "csv-parser";
import fs from "fs";
const results = new Array();
fs.createReadStream("./nut9_from_to_city.csv")
  .pipe(csv({ separator: ";" }))
  .on("data", (data) => {
    results.push(data);
  })
  .on("end", () => {
    type DistanceMatrix = number[][];

    function tspWithMatrix(
      matrix: DistanceMatrix,
      startCity: number,
      endCity: number,
      visited: Set<number> = new Set(),
      currentDistance: number = 0,
      bestDistance: number = Infinity
    ): number {
      visited.add(startCity);

      if (visited.size === matrix.length) {
        const totalDistance = currentDistance + matrix[startCity][endCity];
        return Math.min(bestDistance, totalDistance);
      }

      for (let city = 0; city < matrix.length; city++) {
        if (!visited.has(city)) {
          const newDistance = currentDistance + matrix[startCity][city];
          if (newDistance < bestDistance) {
            bestDistance = tspWithMatrix(
              matrix,
              city,
              endCity,
              new Set(visited),
              newDistance,
              bestDistance
            );
          }
        }
      }

      return bestDistance;
    }

    let distanceMatrix: DistanceMatrix = new Array<Array<number>>();

    results.forEach((element) => {
      let arrayInput = new Array<number>();
      for (const key in element) {
        if (element.hasOwnProperty(key) && !Number.isNaN(+element[key])) {
          const el: number = +element[key];
          console.log(el);
          if (!Number.isNaN(el)) {
            arrayInput.push(el);
          }
        }
      }
      distanceMatrix.push(arrayInput);
    });
    console.log(distanceMatrix);

    const startCity = 5;
    const endCity = 5;

    const shortestPathDistance = tspWithMatrix(
      distanceMatrix,
      startCity,
      endCity
    );
    console.log(`Shortest path distance: ${shortestPathDistance}`);
  });
