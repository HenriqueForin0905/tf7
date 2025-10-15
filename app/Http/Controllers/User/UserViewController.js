import UserModel from "../../../Models/UserModel.js"; // ajuste o caminho se necessário

export default async function UserViewController(request, response) {
    // Usuário atual vindo do middleware/token
    const currentUser = request.user;

    // Buscar todos os usuários pelo model
    const users = await UserModel.findAll();

    return response.render("users", {
        header: "Aula 07 - V de Views, SSR e SSG",
        user: currentUser,
        users: users
    });
    
};
