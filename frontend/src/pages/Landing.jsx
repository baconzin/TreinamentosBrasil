import React, { useEffect, useMemo, useState } from "react";
import { LogoTB } from "../components/LogoTB";
import { catalog, partners, brand } from "../mock/mock";
import { Button } from "../components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion";
import { Card, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Toaster } from "../components/ui/toaster";
import { toast } from "sonner";
import { ShieldCheck, Hammer, Cpu, LineChart, ArrowRight, CheckCircle2 } from "lucide-react";
import { WordExportButton } from "../components/WordExportButton";
import { LogoDownloadButton } from "../components/LogoDownloadButton";

const colors = brand.colors;

const Section = ({ id, children, className = "" }) => (
  <section id={id} className={`relative py-16 md:py-24 ${className}`}>
    {children}
  </section>
);

const SiteHeader = () => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/70 border-b border-black/5">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <LogoTB size={44} />
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#catalogo" className="hover:opacity-80">Catálogo</a>
          <a href="#descricoes" className="hover:opacity-80">Descrições</a>
          <a href="#parceiros" className="hover:opacity-80">Parceiros</a>
          <a href="#contato" className="hover:opacity-80">Contato</a>
        </nav>
        <div className="flex items-center gap-2">
          <LogoDownloadButton />
          <WordExportButton />
          <Button className="rounded-full px-5" style={{ background: colors.gold, color: "#111" }}>
            Fale Conosco
          </Button>
        </div>
      </div>
    </header>
  );
};

const Hero = () => {
  return (
    <Section id="home" className="pt-8 md:pt-12">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-black/10 bg-white/60 backdrop-blur-2xl text-xs mb-6">
            <ShieldCheck size={14} className="text-green-800" />
            Certificados reconhecidos • Instrutores certificados • Laboratórios reais
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight" style={{ color: colors.green }}>
            Treinamentos técnicos que geram emprego, renda e resultado
          </h1>
          <p className="mt-4 text-base md:text-lg text-black/70">
            Sede equipada e estrutura móvel para cursos presenciais e in company. Conteúdos atualizados nas áreas de mecânica, elétrica, tecnologia e IA.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button
              className="rounded-full px-6 h-11"
              style={{ background: colors.gold, color: "#111" }}
            >
              Ver Catálogo
            </Button>
            <Button
              variant="outline"
              className="rounded-full px-6 h-11 border-2"
              style={{ borderColor: colors.green, color: colors.green }}
            >
              Solicitar Proposta
            </Button>
          </div>
          <div className="mt-8 grid grid-cols-3 gap-4 text-sm">
            <div className="p-4 rounded-2xl bg-white/60 backdrop-blur-2xl border border-black/5">
              <Hammer className="text-green-900" size={18} />
              <div className="font-semibold mt-2">Prática real</div>
              <div className="text-black/60">Equipamentos e scanners</div>
            </div>
            <div className="p-4 rounded-2xl bg-white/60 backdrop-blur-2xl border border-black/5">
              <Cpu className="text-green-900" size={18} />
              <div className="font-semibold mt-2">Tecnologia</div>
              <div className="text-black/60">IA e automação</div>
            </div>
            <div className="p-4 rounded-2xl bg-white/60 backdrop-blur-2xl border border-black/5">
              <LineChart className="text-green-900" size={18} />
              <div className="font-semibold mt-2">Resultados</div>
              <div className="text-black/60">Foco em empregabilidade</div>
            </div>
          </div>
        </div>
        <div className="relative h-[420px] md:h-[520px]">
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-emerald-50 to-amber-50 border border-black/5" />
          <div className="absolute inset-0 rounded-3xl" style={{ boxShadow: "inset 0 0 40px rgba(0,0,0,0.06)" }} />
          <div className="absolute -top-6 -left-6 w-40 h-40 rounded-3xl bg-amber-200/40 blur-2xl" />
          <div className="absolute -bottom-8 -right-8 w-56 h-56 rounded-full bg-emerald-200/40 blur-3xl" />
          <div className="absolute inset-6 rounded-2xl bg-white/50 backdrop-blur-2xl border border-black/5 p-6 flex flex-col justify-between">
            <LogoTB size={72} />
            <div>
              <div className="font-semibold" style={{ color: colors.green }}>
                Treinamentos Brasil
              </div>
              <div className="text-xs" style={{ color: colors.gold }}>
                O MELHOR PARA OS MELHORES
              </div>
            </div>
            <div className="text-sm text-black/70">
              Presencial e In Company • Certificados reconhecidos • Instrutores certificados
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

const Catalogo = () => {
  return (
    <Section id="catalogo" className="bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-extrabold" style={{ color: colors.green }}>Catálogo de Cursos</h2>
        <p className="text-black/70 mt-2">Cursos modulares com carga horária definida e foco 100% prático.</p>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <Accordion type="single" collapsible className="w-full">
            {catalog.slice(0, Math.ceil(catalog.length / 2)).map((c) => (
              <AccordionItem key={c.id} value={c.id} className="border-b">
                <AccordionTrigger className="text-left">
                  <div className="flex items-center justify-between w-full">
                    <span className="font-semibold">{c.title}</span>
                    <span className="text-sm text-black/60">{c.hours}h</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="grid grid-cols-1 gap-2">
                    {c.modules.map((m, i) => (
                      <li key={i} className="flex items-center justify-between p-3 rounded-lg bg-emerald-50/60">
                        <span>{m.title}</span>
                        <span className="text-xs text-black/60">{m.hours}h</span>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <Accordion type="single" collapsible className="w-full">
            {catalog.slice(Math.ceil(catalog.length / 2)).map((c) => (
              <AccordionItem key={c.id} value={c.id} className="border-b">
                <AccordionTrigger className="text-left">
                  <div className="flex items-center justify-between w-full">
                    <span className="font-semibold">{c.title}</span>
                    <span className="text-sm text-black/60">{c.hours}h</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="grid grid-cols-1 gap-2">
                    {c.modules.map((m, i) => (
                      <li key={i} className="flex items-center justify-between p-3 rounded-lg bg-amber-50/60">
                        <span>{m.title}</span>
                        <span className="text-xs text-black/60">{m.hours}h</span>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </Section>
  );
};

const Descricoes = () => {
  return (
    <Section id="descricoes" className="bg-gradient-to-b from-white to-emerald-50/40">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-extrabold" style={{ color: colors.green }}>Descrições dos Cursos</h2>
        <p className="text-black/70 mt-2">O que você aprende na prática e como transformar isso em renda.</p>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {catalog.map((c) => (
            <Card key={c.id} className="border-black/5">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={20} style={{ color: colors.gold }} />
                  <div>
                    <div className="font-semibold" style={{ color: colors.green }}>{c.title} • {c.hours}h</div>
                    <p className="text-black/70 mt-1">{c.summary}</p>
                  </div>
                </div>
                <div className="mt-4 text-sm text-black/70">
                  <span className="font-medium" style={{ color: colors.green }}>Como ganhar dinheiro: </span>
                  {c.income}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
};

const Parceiros = () => {
  const groups = Object.entries(partners);
  return (
    <Section id="parceiros" className="bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-extrabold" style={{ color: colors.green }}>Parceiros e Marcas</h2>
        <p className="text-black/70 mt-2">Marcas referência com as quais atuamos e sugerimos em nossos treinamentos.</p>
        <div className="mt-8 space-y-8">
          {groups.map(([group, items]) => (
            <div key={group}>
              <div className="text-sm font-semibold mb-3" style={{ color: colors.gold }}>{group}</div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {items.map((name) => (
                  <div
                    key={name}
                    className="px-3 py-3 rounded-xl border border-black/10 bg-white hover:shadow-sm transition-colors"
                  >
                    <div className="text-sm text-black/80">{name}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

const Contato = () => {
  const [form, setForm] = useState({ nome: "", email: "", telefone: "", interesse: "" });
  const canSubmit = useMemo(() => form.nome && form.email && form.interesse, [form]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const leads = JSON.parse(localStorage.getItem("tb_leads") || "[]");
    leads.push({ ...form, createdAt: new Date().toISOString() });
    localStorage.setItem("tb_leads", JSON.stringify(leads));
    toast.success("Recebemos seu contato. Em breve retornaremos!");
    setForm({ nome: "", email: "", telefone: "", interesse: "" });
  };
  return (
    <Section id="contato" className="bg-gradient-to-b from-emerald-50/40 to-amber-50/40">
      <div className="max-w-6xl mx-auto px-4">
        <div className="rounded-3xl border border-black/5 bg-white/60 backdrop-blur-2xl p-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl md:text-2xl font-extrabold" style={{ color: colors.green }}>Solicite uma proposta</h3>
              <p className="text-black/70 mt-2">Cursos presenciais e in company. Responderemos em até 1 dia útil.</p>
              <div className="mt-4 flex items-center gap-3 text-sm">
                <ArrowRight size={16} className="text-amber-700" />
                <span className="text-black/70">Ao enviar, seus dados ficam salvos apenas no seu navegador (mock).</span>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="grid gap-3">
              <Input placeholder="Nome" value={form.nome} onChange={(e) => setForm({ ...form, nome: e.target.value })} />
              <Input type="email" placeholder="E-mail" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
              <Input placeholder="Telefone" value={form.telefone} onChange={(e) => setForm({ ...form, telefone: e.target.value })} />
              <Textarea placeholder="Interesse (curso, turma, in company...)" value={form.interesse} onChange={(e) => setForm({ ...form, interesse: e.target.value })} />
              <div className="flex items-center gap-3">
                <Button type="submit" disabled={!canSubmit} className="rounded-full px-6" style={{ background: colors.gold, color: "#111" }}>
                  Enviar
                </Button>
                <a
                  className="text-sm underline"
                  href="https://wa.me/5500000000000"
                  target="_blank"
                  rel="noreferrer"
                >
                  Preferir WhatsApp?
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Toaster />
    </Section>
  );
};

const SiteFooter = () => {
  return (
    <footer className="border-t border-black/5 bg-white">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between text-sm">
        <div className="flex items-center gap-2">
          <LogoTB size={28} showText={false} />
          <span className="text-black/70">© {new Date().getFullYear()} Treinamentos Brasil</span>
        </div>
        <nav className="flex items-center gap-4">
          <a href="#catalogo" className="hover:opacity-80">Catálogo</a>
          <a href="#descricoes" className="hover:opacity-80">Descrições</a>
          <a href="#parceiros" className="hover:opacity-80">Parceiros</a>
          <a href="#contato" className="hover:opacity-80">Contato</a>
        </nav>
      </div>
    </footer>
  );
};

export default function Landing() {
  useEffect(() => {
    document.title = `Treinamentos Brasil — ${brand.slogan}`;
  }, []);
  return (
    <div className="min-h-screen bg-white text-black">
      <SiteHeader />
      <Hero />
      <Catalogo />
      <Descricoes />
      <Parceiros />
      <Contato />
      <SiteFooter />
    </div>
  );
}
