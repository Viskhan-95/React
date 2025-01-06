
export const getDataLocalStorage = () => {
    try {
        const res = localStorage.getItem('user');
        return res ? JSON.parse(res) : [];
    } catch (error) {
        console.error('Error reading localeStorage', error);
        return [];
    };
};

export const saveDataLocalStorage = (newUsers) => {
    try {
        localStorage.setItem('user', JSON.stringify(newUsers));
    } catch (error) {
        console.error('Error setting localeStorage', error);
    }
};