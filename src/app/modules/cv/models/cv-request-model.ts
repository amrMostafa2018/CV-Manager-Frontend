export class CVRequestModel {
    name!: string;
    fullName!: string;
    cityName!: string;
    email!: string;
    mobileNumber!: string;
    companyName!: string;
    city!: string;
    companyField!: string;
}

export class CVMOdel extends CVRequestModel {
    id!: number;
}