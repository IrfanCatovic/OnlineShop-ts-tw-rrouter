const API_URL = "https://fakestoreapi.com/products"

export async function getStorage() {
    const res = await fetch(`${API_URL}`)

    if(!res.ok) throw Error("Failed to get StorageAPI");

    const data = await res.json();
    return data
}