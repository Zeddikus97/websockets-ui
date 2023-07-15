export interface IUser {
    readonly name: string;
    readonly password: string;
}

export interface IPlayer extends IUser{
    connectionID: string;
    isActive: boolean;
    inGame: boolean;
    wins: number;
}