import { createContext, useState} from "react";

// Definindo o tipo para o usuário
export type User = {
    name: string;
    email: string;
    token: string | null;
  };
  
  // Criando um contexto para o usuário
  type UserContextType = {
    user: User | null;
    setUser: (user: User | null) => void;
  };

const UserContext = createContext<UserContextType>({user: null, setUser: () => {}});

export default UserContext;