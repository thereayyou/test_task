export const isAgeLessThan14 = (selectedDate: Date): boolean => {
    const currentDate = new Date();
    const birthDate = new Date(selectedDate);

    const age = Math.floor((currentDate.getTime() - birthDate.getTime()) / (365.25 * 24 * 60 * 60 * 1000));

    return age < 14;
};

export const parseDateStringToDate = (dateString: string): Date => {
    const [year, month, day] = dateString.split('-').map(Number);
    return new Date(year, month - 1, day);
};