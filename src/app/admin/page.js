"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/supabaseClient";
 
export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const router = useRouter();

 async function funcaoLogin(e) {
  e.preventDefault();

    const { data, error } = await supabase
      .from("admin")
      .select("*")
      .eq("email", email)
      .eq("senha", senha)

      if (error) {
        console.log(error);
        alert("Erro no login do Admin!" + error);
        return
      }
      
      if (data && data.length > 0) {
        router.push("/admin/entregas");
      } else {
        alert("Email ou senha incorretos!");
      }
  }
  
  return (
    <div>
        <form onSubmit={funcaoLogin}>
            <div>
              <input className="py-2 px-4 border border-zinc-700" type="email" placeholder="Digite seu Email" 
              onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <input className="py-2 px-4 border border-zinc-700" type="password" placeholder="Digite sua Senha" 
              onChange={(e) => setSenha(e.target.value)}
              />
            </div>
            <div>
              <button className="py-2 px-4 bg-indigo-500 text-shadow-white" type="submit">Entrar na Administração</button>
            </div>
        </form>
    </div>
  );
}
