export default interface ListingData{
    listingType: string;
    desc: string;
    price: string;
    bedQty: number;
    bathQty: number;
    images: Array<string>;
    address: string;
    navigation: any;
}