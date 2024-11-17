using System;

namespace InovaSaudeApp
{
   
    public class SistemaLoginCadastro
    {
        public string Nome { get; set; }
        public string Telefone { get; set; }
        public string Email { get; set; }
        public string Senha { get; set; }
        public void ExibirTelaLogin()
        {
            Console.WriteLine("Bem-vindo de volta!");
            Console.WriteLine("Já tem uma conta? Conecte-se aqui.");
            Console.WriteLine("1. Login");
            Console.WriteLine("2. Criar uma conta");

            int opcao = int.Parse(Console.ReadLine());

            if (opcao == 1)
            {
                RealizarLogin();
            }
            else if (opcao == 2)
            {
                CriarConta();
            }
            else
            {
                Console.WriteLine("Opção inválida. Tente novamente.");
            }
        }

        public void RealizarLogin()
        {
            Console.WriteLine("Digite seu e-mail:");
            string email = Console.ReadLine();
            Console.WriteLine("Digite sua senha:");
            string senha = Console.ReadLine();

            if (email == "usuario@exemplo.com" && senha == "senha123")
            {
                Console.WriteLine("Login realizado com sucesso!");
            }
            else
            {
                Console.WriteLine("E-mail ou senha incorretos. Tente novamente.");
            }
        }

        public void CriarConta()
        {
            Console.WriteLine("Crie sua conta agora com facilidade e praticidade!");

            Console.WriteLine("Digite seu nome:");
            Nome = Console.ReadLine();
            Console.WriteLine("Digite seu telefone:");
            Telefone = Console.ReadLine();
            Console.WriteLine("Digite seu e-mail:");
            Email = Console.ReadLine();
            Console.WriteLine("Digite sua senha:");
            Senha = Console.ReadLine();

            Console.WriteLine("Conta criada com sucesso! Bem-vindo(a) " + Nome + "!");
        }

        public static void Main(string[] args)
        {
            var sistema = new SistemaLoginCadastro();
            sistema.ExibirTelaLogin();
        }
    }
}
