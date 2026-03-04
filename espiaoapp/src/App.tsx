import { ArrowRight, Smartphone, Zap, Shield } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="p-6 flex justify-between items-center max-w-7xl mx-auto w-full">
        <div className="text-2xl font-black text-red-600 tracking-tighter">VERMELHO<span className="text-slate-900">APP</span></div>
        <button className="bg-red-600 text-white px-6 py-2 rounded-full font-bold hover:bg-red-700 transition shadow-lg shadow-red-200">
          Entrar
        </button>
      </nav>

      {/* Hero Section */}
      <main className="flex-1 max-w-7xl mx-auto px-6 py-20 text-center">
        <div className="inline-block bg-red-100 text-red-600 px-4 py-1 rounded-full text-sm font-bold mb-6">
          NOVA VERSÃO DISPONÍVEL
        </div>
        <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tight text-slate-900">
          Sua gestão em <br /><span className="text-red-600">tempo real.</span>
        </h1>
        <p className="text-xl text-slate-500 mb-10 max-w-2xl mx-auto leading-relaxed">
          Acelere seus processos e tenha controle total sobre seus dados com a interface mais rápida do mercado.
        </p>
        
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <button className="bg-slate-900 text-white px-10 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-slate-800 transition transform hover:scale-105">
            Começar Gratuitamente <ArrowRight size={20} />
          </button>
          <button className="border-2 border-slate-200 px-10 py-4 rounded-xl font-bold hover:bg-white transition text-slate-600">
            Ver Demonstração
          </button>
        </div>

        {/* Features Preview */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 bg-white rounded-3xl shadow-sm border border-slate-100 text-left">
            <div className="w-12 h-12 bg-red-50 text-red-600 rounded-lg flex items-center justify-center mb-6"><Zap /></div>
            <h3 className="text-xl font-bold mb-2">Alta Performance</h3>
            <p className="text-slate-500">Carregamento instantâneo para não perder nenhum segundo do seu dia.</p>
          </div>
          <div className="p-8 bg-white rounded-3xl shadow-sm border border-slate-100 text-left">
            <div className="w-12 h-12 bg-red-50 text-red-600 rounded-lg flex items-center justify-center mb-6"><Smartphone /></div>
            <h3 className="text-xl font-bold mb-2">Mobile First</h3>
            <p className="text-slate-500">Acesse de qualquer lugar, com uma experiência otimizada para celular.</p>
          </div>
          <div className="p-8 bg-white rounded-3xl shadow-sm border border-slate-100 text-left">
            <div className="w-12 h-12 bg-red-50 text-red-600 rounded-lg flex items-center justify-center mb-6"><Shield /></div>
            <h3 className="text-xl font-bold mb-2">Segurança Total</h3>
            <p className="text-slate-500">Seus dados protegidos com criptografia de ponta a ponta.</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;