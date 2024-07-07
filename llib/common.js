export async function getData(url) {
  let data = await fetch(url);
  return await data.json();
}
