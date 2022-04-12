import React, { useEffect, useState } from "react";
import { fetchData } from "./utils";

export function Table() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    fetchData().then((response) => setPeople(response));
  }, []);

  return (
    <div style={{ margin: "0 auto", maxWidth: "450px" }}>
      <h1>Star Wars Characters</h1>
      <table style={{ textAlign: "left" }}>
        <tbody>
          {people.map((person) => {
            return (
              <tr key={person.name}>
                <td>
                  <strong>Name: </strong> {person.name}
                </td>
                <td>
                  <strong>Height: </strong> {person.height}cm
                </td>
                <td>
                  <strong>Hair color: </strong> {person.hair_color}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
