export const useGoogleSheets = async () => {
    const { data, error } = await useFetch('/api/sheets');

    if (error.value) {
        console.error("Error fetching Google Sheets:", error.value);
    }

    return data.value;
};
