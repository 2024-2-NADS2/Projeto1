using System;
using System.Collections.Generic;

namespace InovaSaudeApp
{
    public class PaginaInovaSaude
    {
        public string Logo { get; set; }
        public List<string> MenuLinks { get; set; }
        public List<string> ButtonLinks { get; set; }
        public string Frase { get; set; }
        public List<string> SliderImagens { get; set; }
        public Footer PaginaFooter { get; set; }

        
        public PaginaInovaSaude()
        {
            MenuLinks = new List<string>();
            ButtonLinks = new List<string>();
            SliderImagens = new List<string>();
        }

    
    public class Footer
    {
        public string SobreNos { get; set; }
        public List<string> LinksRapidos { get; set; }
        public string Email { get; set; }
        public string Telefone { get; set; }

       
        public Footer()
        {
            LinksRapidos = new List<string>();
        }

        public void ExibirFooter()
        {
            Console.WriteLine("Sobre Nós:");
            Console.WriteLine(SobreNos);

            Console.WriteLine("Links Rápidos:");
            foreach (var link in LinksRapidos)
            {
                Console.WriteLine($" - {link}");
            }

            Console.WriteLine($"Contato: {Email}");
            Console.WriteLine($"Telefone: {Telefone}");
        }
    }

    
    class Program
    {
        static void Main(string[] args)
        {
            // Criando uma instância da página
            var pagina = new PaginaInovaSaude
            {
                Logo = "Logo da empresa",
                Frase = "Inova Saúde: Cuidando com carinho, inovando para o bem-estar",
                MenuLinks = new List<string> { "Doação", "Cadastre-se/Faça Login" },
                ButtonLinks = new List<string> { "Convênios", "Agendamento", "Resultados", "Farmácia", "Educação" },
                SliderImagens = new List<string> { "img/imagem01.jpg", "img/imagem02.jpg", "img/imagem03.jpg" },
                PaginaFooter = new Footer
                {
                    SobreNos = "Inova Saúde: uma empresa dedicada a fornecer os melhores serviços de saúde e bem estar.",
                    LinksRapidos = new List<string> { "Início", "Serviços", "Contato" },
                    Email = "Inovasaude@empresa.com",
                    Telefone = "(11) 1234-5678"
                }
            };
            pagina.ExibirPagina();
        }
    }
}

