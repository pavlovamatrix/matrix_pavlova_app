export interface IState {
  isLoading: boolean;
  mainString: string[];
  mainString1: string[];
  mainString2: string[];
  personalEnergyArray: number[];

  userDataPersonal: IUserData;
  usersDataCompatibility: IUsersDataCompatibility;
}

export interface IUserData {
  name: string;
  birth: string;
  yearsOld: string;
}
export interface IUsersDataCompatibility {
  user1: {
    name: string;
    birth: string;
    yearsOld: string;
  };
  user2: {
    name: string;
    birth: string;
    yearsOld: string;
  };
}
