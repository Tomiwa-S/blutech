const endpoint = "http://3.88.1.181:8000/products/public/catalog";

export async function getCatalogue(searchParams) {
    try {
        const url = `${endpoint}?${new URLSearchParams(searchParams).toString()}`;
        // console.log(url)
        const controller = new AbortController();
        const timeout = setTimeout(() => {
            controller.abort();
        }, 30000); 

        const response = await fetch(url, {
            signal: controller.signal
        });

        clearTimeout(timeout);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        return data;
    } catch (e) {
        if (e.name === 'AbortError') {
            console.error('Error: The request timed out');
        } else {
            console.error('Error: ' + e.message);
        }

        throw e;
    }
}