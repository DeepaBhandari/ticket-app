export const getTickets = async () => {
    try {
        const res = await fetch("http://localhost:3000/api/Tickets", {
            cache: "no-store",
        });
        if (!res.ok) {
            throw new Error(
                `Failed to fetch tickets: ${res.status} ${res.statusText}`
            );
        }
        const ticketsData = await res.json();
        return ticketsData;
    } catch (error) {
        console.error("Failed to get tickets", error);
        throw error;
    }
};
