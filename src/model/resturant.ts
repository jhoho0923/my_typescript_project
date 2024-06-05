
export type Resturant = {
    name:string;
    category:string;
    address:Address;
    menu: Menu[]
}


export type Address = {
    city:string;
    detail:string;
    zipCode:Number;
}

export type Menu = {
    name:string;
    price:number;
    category:string;
}


export type AddressWithoutZip = Omit<Address, 'zipCode'>
export type ResturantOnlyCategory = Pick<Resturant, 'category'>

export type ApiResponse<T> = {
    data: T[],
    totalPage:number,
    page: number
}

export type ResturantResponse =  ApiResponse<Resturant>
export type MenuResponse = ApiResponse<Menu>



