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
query($page:Float!) {
  getVehicles(page:$page) {
    		vehicles{
          	id
          firstName
          email
          carModel
          carMake
          lastName
          manufacturedDate
          vinNumber
        }
    totalCount
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

export const UPDATE_VEHICLE = gql`
mutation($id: Int!
  $firstName: String
  $lastName: String
  $email: String
  $carMake: String
  $carModel: String
 $vinNumber: String
  $manufacturedDate: String)  {
  updateVehicle(
    updateVehicleData:  {
      carMake: $carMake,carModel:$carModel,firstName:$firstName,email:$email, lastName: $lastName,
      manufacturedDate:$manufacturedDate,
      vinNumber:$vinNumber, id: $id}
  )
  
{
    		firstName
        carModel
        carMake
        manufacturedDate
        lastName
        email
        vinNumber
  }
}

`

export const EXPORT_CSV_fILE = gql`
query($ageOfVehicle:Int!) {
  vehicleByAge(ageOfVehicle:$ageOfVehicle) {
      carMake
      carModel
      email
      lastName
      firstName
  }
}
`
export const SEARCH_VEHICLE_BY_MODEL = gql`
query($model:String!){
  searchVehicles( model:  $model) {
      ageOfVehicle
      carMake
      carModel
      email
      firstName
      id
      lastName
      manufacturedDate
      vinNumber
  }
}
`
