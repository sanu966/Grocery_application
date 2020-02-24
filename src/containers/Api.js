export const BannerData = async() => {
    try {
    const response = await fetch('https://www.mocky.io/v2/5e36fb30320000d40cae3d2d');
    let data = await response.json(); 
    data = data.filter((d)=>{ return d.isActive === true}).sort((a,b)=>{ return a.order - b.order}); 
    return data;
    } catch (e){
    console.log(e);
    }
}

export const CategoriesData = async() => {
    try {
        const response = await fetch('https://www.mocky.io/v2/5e36fc4f3200009921ae3d30');
        let data = await response.json();
        data = data.filter((d)=> {return d.enabled === true}).sort((a,b)=>{return a.order - b.order});
        return data;
    }
    catch(e){
        console.log(e);
    }
}


export const ProductsData = async() => {
    try {
        const response = await fetch('https://www.mocky.io/v2/5e36fc913200005500ae3d32');
        let data = await response.json();
        return data;
    }
    catch(e){
        console.log(e);
    }
}

export const postAddtoCartData = async (data) => {
    try {
        const apiRes = await fetch('https://www.mocky.io/v2/5e36fcd43200009921ae3d34', {
            method: 'post',
            body: data.id
        });
        let resp = await apiRes.json();
        return resp;
    } catch (e) {
        console.log(e);
    }
}