const API_KEY = "auA7t02NWHTSdu4AinTIRHspBcZfyNUUuPkOCIlY"
const API_URL = "https://api.nasa.gov/planetary/apod"

export default async (urlParams?: string | undefined) => {
    const param = urlParams?.length > 0 ? urlParams : "";
    try {
        const req = await fetch(`${API_URL}?api_key=${API_KEY}${param}`)
        const res = await req.json()
        return res

    } catch (error) {
        console.log("ERROR API:", error)
        return error
    }
}