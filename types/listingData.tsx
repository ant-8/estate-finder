export default interface ListingData{
    listingType: string, // "Rent" or "Sale"
    imageUri?: string,
    price: string,
    bedQty: number,
    bathQty: number,
    images: Array<string>,
    address: string,
    navigation: any
}