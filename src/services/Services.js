const Get = async (Url) => {
    let Data = await fetch(Url).then((response) => response.json());
    return Data;
}
export default { Get }