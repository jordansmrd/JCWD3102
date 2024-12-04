/** @format */

// const url = "https://api.restful-api.dev/objects";
const url = "http://localhost:2000/products";

export const getData = async () => {
  const res = await fetch(url, {
    next: {
      revalidate: 0,
    },
  });
  console.log(res);

  if (!res.ok) throw new Error("data cannot be fetched");
  return res.json();
};

export const getItem = async (id: string) => {
  const res = await fetch(url + "/" + id, {
    next: {
      revalidate: 0,
    },
  });
  if (!res.ok) throw new Error("data cannot be fetched");
  return res.json();
};
