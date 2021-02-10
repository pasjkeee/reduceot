export default class RestoService {
    
    getMenuItems = async () => {
        const res = await fetch(`http://localhost:3000/menu`);

        if(!res.ok){
            throw new Error(`Could not fetch http://localhost:3000/menu`);
        }
        let arr = await res.json();
        console.log(arr);
        return arr;
    }


}