const BASE_URL = "https://swapi.dev/api/";

const urls = ["people/1", "people/2", "people/3", "people/4", "people/5"];

export const fetchData = async () => {
  try {
    const response = await Promise.all(
      urls.map((url) => fetch(`${BASE_URL}${url}`).then((res) => res.json()))
    );
    console.log(response);
    return response;
  } catch (error) {
    console.log("Error", error);
  }
};
