'use server'
export async function getData(url) {

    const response = await fetch(`http://80.75.14.90:9090/${url}`)
    if (!response.ok) {
       return console.log("error")
    }
    else {
        const data = await response.json()

         
        return data
    }
  }