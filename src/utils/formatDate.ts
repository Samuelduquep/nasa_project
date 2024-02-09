export const formatDate = (date: Date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Agrega cero inicial si es necesario
    const day = String(date.getDate()).padStart(2, '0'); // Agrega cero inicial si es necesario

    return `${year}-${month}-${day}`;
}

export const calculateFiveDaysAgo = () => {
    const today = new Date();
    const fiveDaysAgo = new Date(today);
    fiveDaysAgo.setDate(today.getDate() - 5);
    return fiveDaysAgo;
}
