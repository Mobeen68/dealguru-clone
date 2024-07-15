

// getUser function
export const getUser = async () => {
    const response = await fetch("/api/user");
    const data = await response.json();
    return data;
}