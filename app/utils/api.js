export const getTickets = async () => {
    try {
        const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
        const res = await fetch(`${baseUrl}/api/Tickets`, {
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
