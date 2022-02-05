export const getUserData = function (fn: (str: string) => userEntity, id: string): userEntity {
    return fn(id);
}