import { rest } from "msw";

const getResponse = (id) => {
  switch (id) {
    case "1":
      return {
        name: "Luke Skywalker",
        height: "172",
        hair_color: "blond",
      };
    case "2":
      return {
        name: "C-3PO",
        height: "n/a",
        hair_color: "n/a",
      };
    case "3":
      return {
        name: "R2-D2",
        height: "96",
        hair_color: "n/a",
      };
    case "4":
      return {
        name: "Darth Vader",
        height: "202",
        hair_color: "none",
      };
    case "5":
      return {
        name: "Leia Organa",
        height: "150",
        hair_color: "brown",
      };
    default:
      return { name: "", height: "", hair_color: "" };
  }
};

export const handlers = [
  rest.get("https://swapi.dev/api/people/:id", (req, res, ctx) => {
    return res(ctx.json(getResponse(req.params.id)));
  }),
];
