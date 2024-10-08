export const collectDataFromRange = (array, fromIndex, toIndex) => {
    if (!Array.isArray(array)) {
        return []
    }
    if (fromIndex < 0 || fromIndex >= array.length) {
        return []
    }
    if (toIndex < fromIndex || toIndex > array.length) {
        return []
    }

    return array?.slice(fromIndex, toIndex + 1);
};

export const getStartAndEndIndex = counter => ({
    start: counter * 10,
    end: counter * 10 + 9
});


export const getUniqueDatas = (array,key) => {
    const unique = {}
    return  array?.filter((obj)=> !unique[obj?.[key]] && (unique[obj?.[key]] = true))
}