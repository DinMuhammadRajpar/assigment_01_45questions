function aboutCarInfo(manufacturer : string, model_name: string, ...options:[string, any][]):Record<string, any>{
    const carInfo: Record<string, any> = {
        manufacturer: manufacturer,
        model_name: model_name
    }

    options.forEach(option => {
        const [key, value] = option;
        carInfo[key] = value;
    });

    return carInfo
}


console.log(aboutCarInfo("Honda", "Civic", ["Color", "Black"], ["Year", "2022"]));