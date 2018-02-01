export interface User {

  id: number;         // required

  accountInfo: {

    username: string; // required with at least 8 char up-to 12
    email:    string; // required
    password: string; // required

  };

  profileInfo: {

    profileType:  string;
    firstname:    string;
    lastname:     string;
    sex:          string;
    birthDate:    Date;

    address: {
      addressType:  string;
      street:       string;
      number:       string;
      postcode:     string;
      city:         string;
      country:      string;
    }

  };

  mentalityMatch: {
    test1: string;
  };

  paymentInfo: {
    paypalEmail: string;
  };

}
