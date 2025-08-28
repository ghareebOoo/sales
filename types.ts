import { StaticImageData } from "next/image";

export type Cities = string[];

export type DummyAgentData = {
    _id: string;
    username: string;
    image: string | StaticImageData; 
    role: string;
    createdAt: string;
    updatedAt: string;
    __v: number,
    recentSearchedCities: string[];
}

export type DummyAgencyData = {
    _id: string;
    name: string;
    contact: string;
    email: string;
    address: string;
    owner: DummyAgentData
    city: string;
    createdAt: string;
    updatedAt: string;
    "__v": number
}

type Price = {
    rent: number;
    sale: number;
}

type Facilities = {
    bedrooms: number;
    bathrooms: number;
    garages: number;
}

export type DummyProperties = {
    _id: string;
    agency: DummyAgencyData;
    title: string;
    description: string;
    address: string;
    city: string;
    country: string;
    propertyType: string;
    price: Price;
    facilities: Facilities
    area: number;
    amenities: string[];
    images: (string | StaticImageData)[];
    isAvailable: boolean;
    status: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
}

export type DummyBookingsData = {
    _id: string;
    user: DummyAgentData,
    property: DummyProperties;
    agency: DummyAgencyData,
    checkInDate: string;
    checkOutDate: string;
    totalPrice: number;
    guest: number;
    status: string;
    paymentMethod: string;
    isPaid: boolean;
    createdAt: string;
    updatedAt: string;
    __v: number;
}

export type Blogs = {
    title: string;
    category: string;
    image: (string | StaticImageData);
    description: string;
}

export type DummyDashboardData = {
    totalBookings: number;
    totalRevenue: number;
    bookings: DummyBookingsData
}