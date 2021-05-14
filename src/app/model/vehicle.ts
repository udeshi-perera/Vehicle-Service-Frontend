import { variable } from '@angular/compiler/src/output/output_ast';
import {gql} from 'graphql-request'

export interface IVehicle {

    id: number;
    firstName: string;
    lastName: string;
    email: string;
    carMake: string;
    carModel: string;
    vinNumber: string;
    manufacturedDate: string;
}

export class Vehicle implements IVehicle {

    id!: number;
    firstName: string;
    lastName: string;
    email: string;
    carMake: string;
    carModel: string;
    vinNumber: string;
    manufacturedDate: string;

    constructor(
        firstName: string,
        lastName: string,
        email: string,
        carMake: string,
        carModel: string,
        vinNumber: string,
        manufacturedDate: string) {

        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.carMake = carMake;
        this.carModel = carModel;
        this.vinNumber = vinNumber;
        this.manufacturedDate = manufacturedDate;
    }
}

export const GET_ALL_VEHICLE = gql`
query {
    getVehicles {
            id
            firstName
            email
            carModel
            carMake
            lastName
            manufacturedDate
            vinNumber
    }
  }
`;

export const DELETE_VEHICLE = gql`
mutation ($id:Int!){
    deleteVehicle(deleteVehicleData: {id:$id}) {
      id
    }
  }
`;

export const GET_VEHICLE_DETAIL = gql`
query($id:Int!){
  vehicleById(id:$id ) {
    carMake
    email
    carModel
    firstName
    id
    lastName
    manufacturedDate
    vinNumber
}
}
`

