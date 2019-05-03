const Get = async (Url) => {
    // let Data = await fetch(Url).then((response) => response.json());
    // return Data;
    // 不要浪費記憶體空間, 直接 return 即可
    return await fetch(Url).then((response) => response.json());
}
export default { Get }