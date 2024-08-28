'use server'
export async function postData(url, Body) {

        try {
            // const response = await fetch(`http://80.75.14.90:9090/${url}`, {
            const response = await fetch(`http://localhost:9095/${url}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body:Body
            });
            const data = await response.json();
           return data
        } 
        catch (error) {
            console.error(error);
        }
    }
 