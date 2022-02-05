export const userModel = function (s: string): userEntity {
    // TODO: DBから取得
    const user = { id: s, name: 'username', email: 'aaa@exam.com' };
    return user;
}