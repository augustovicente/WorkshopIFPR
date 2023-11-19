import { useEffect, useState } from "react";
import { MainContainer } from "./styles";
import { api } from "services/api";

export const Main = () => {
    // carregar lista de tipos de usuário do backend
    const [userTypes, setUserTypes] = useState([]);
    // carregar lista de tipos de usuário do backend
    const loadUserTypes = async () => {
        try {
            const response = await api.get('/user-types');
            setUserTypes(response.data);
        } catch (error) {
            alert('Erro ao carregar lista de tipos de usuário!');
        }
    };
    // carregar lista de usuários já existentes
    const [users, setUsers] = useState([]);
    // carregar lista de usuários do backend
    const loadUsers = async () => {
        try {
            const response = await api.get('/users');
            setUsers(response.data);
        } catch (error) {
            alert('Erro ao carregar lista de usuários!');
        }
    }

    useEffect(() => {
        loadUserTypes();
        loadUsers();
    }, []);

    const onSubmit = async (event: any) => {
        event.preventDefault();
        // recebendo os dados do formulário
        const dados = {
            email: event.target[0].value,
            name: event.target[1].value,
            password: event.target[2].value,
            password_confirmation: event.target[3].value,
            user_type_id: event.target[4].value,
        };
        // check se as senhas são iguais
        if(dados.password !== dados.password_confirmation) {
            alert('As senhas não conferem!');
            return;
        }
        // enviar dados para o backend
        try {
            await api.post('/create-user', dados);
            alert('Usuário cadastrado com sucesso!');
        } catch (error) {
            alert('Erro ao cadastrar usuário!');
        }
    }

    return (
        <MainContainer>
            <div className="cadastrar">
                <h1>Cadastro de Usuários</h1>
                <form onSubmit={onSubmit}>
                    <input type="text" placeholder="E-mail" />
                    <input type="text" placeholder="Nome" />
                    <input type="password" placeholder="Senha" />
                    <input type="password" placeholder="Confirmação de Senha" />
                    <select>
                        <option value="">Selecione um tipo de usuário</option>
                        {userTypes.map((userType: any) => (
                            <option key={userType.id} value={userType.id}>{userType.name}</option>
                        ))}
                    </select>
                    <button type="submit">Enviar</button>
                </form>
            </div>
            <div className="listar">
                <h1>Lista de Usuários</h1>
                <table>
                    <thead>
                        <tr>
                            <th>E-mail</th>
                            <th>Tipo</th>
                            <th>Nome</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user: any) => (
                            <tr key={user.id}>
                                <td>{user.email}</td>
                                <td>{user.userType?.name}</td>
                                <td>{user.name}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </MainContainer>
    );
}