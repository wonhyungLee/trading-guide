import React, { useState, useEffect } from 'react';
import { 
  BookOpen, 
  CheckCircle2, 
  AlertCircle, 
  TrendingUp, 
  TrendingDown, 
  MousePointerClick, 
  Settings, 
  Zap,
  BarChart2,
  ArrowRight
} from 'lucide-react';

const StepCard = ({ step, title, description, imageSrc, isBuy }) => {
  const accentColor = isBuy ? 'text-emerald-400' : 'text-rose-400';
  const bgColor = isBuy ? 'bg-emerald-500/10' : 'bg-rose-500/10';
  const borderColor = isBuy ? 'border-emerald-500/20' : 'border-rose-500/20';
  const glowColor = isBuy ? 'group-hover:shadow-emerald-500/20' : 'group-hover:shadow-rose-500/20';
  const numberBg = isBuy ? 'bg-emerald-500' : 'bg-rose-500';

  return (
    <div className={`group relative bg-slate-900 rounded-2xl border ${borderColor} overflow-hidden hover:border-opacity-50 transition-all duration-500 hover:shadow-2xl ${glowColor} hover:-translate-y-1`}>
      {/* Decorative gradient blob */}
      <div className={`absolute top-0 right-0 w-64 h-64 ${bgColor} blur-[100px] rounded-full opacity-20 pointer-events-none`} />

      <div className="relative p-6 md:p-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Text Content */}
        <div className="space-y-6 order-2 lg:order-1">
          <div className="flex items-start space-x-4">
            <span className={`flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-xl font-bold text-white shadow-lg ${numberBg} bg-opacity-90 backdrop-blur-sm`}>
              {step}
            </span>
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-white tracking-tight">{title}</h3>
              <div className="h-1 w-12 rounded-full bg-slate-700 overflow-hidden">
                <div className={`h-full w-full ${numberBg} origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700`} />
              </div>
            </div>
          </div>
          
          <div className="prose prose-invert text-slate-400 leading-relaxed text-sm md:text-base pl-14">
            {description}
          </div>
          
          <div className="pl-14 pt-2">
            <div className={`inline-flex items-center space-x-2 px-4 py-2 rounded-lg ${bgColor} border ${borderColor}`}>
              <CheckCircle2 className={`w-4 h-4 ${accentColor}`} />
              <span className={`text-xs font-medium ${accentColor}`}>설정 포인트 확인</span>
            </div>
          </div>
        </div>

        {/* Image Container */}
        <div className="order-1 lg:order-2 relative group-hover:scale-[1.02] transition-transform duration-500">
          <div className={`absolute -inset-1 rounded-xl bg-gradient-to-r ${isBuy ? 'from-emerald-500 to-teal-500' : 'from-rose-500 to-orange-500'} opacity-20 blur-lg group-hover:opacity-40 transition-opacity duration-500`} />
          <div className="relative rounded-xl overflow-hidden bg-slate-950 border border-slate-800 shadow-2xl aspect-[4/3]">
            <img 
              src={imageSrc} 
              alt={title}
              className="w-full h-full object-contain p-2"
              onError={(e) => {
                e.target.onerror = null; 
                e.target.parentElement.innerHTML = `
                  <div class="flex flex-col items-center justify-center h-full text-slate-500 p-8 text-center space-y-3 bg-slate-900">
                    <div class="p-3 rounded-full bg-slate-800">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>
                    </div>
                    <div>
                      <span class="block text-sm font-semibold text-slate-300">이미지 없음</span>
                      <span class="text-xs font-mono mt-1 opacity-70">${imageSrc}</span>
                    </div>
                  </div>`;
              }}
            />
          </div>
          <div className="absolute bottom-4 right-4 px-3 py-1 bg-black/70 backdrop-blur-md rounded-md text-[10px] text-slate-400 font-mono border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            PREVIEW
          </div>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  const [activeTab, setActiveTab] = useState('buy'); // 'buy' or 'sell'
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const buySteps = [
    {
      title: "알림 조건 및 지표 선택",
      desc: (
        <div>
          <p className="mb-2">트레이딩 뷰의 알림 생성 패널에서 시작합니다.</p>
          <ul className="space-y-2">
            <li className="flex items-start"><span className="mr-2 text-emerald-500">•</span>조건 탭을 클릭하여 메뉴를 확장합니다.</li>
            <li className="flex items-start"><span className="mr-2 text-emerald-500">•</span>드롭다운에서 <strong className="text-white ml-1">고승률 기술적 분석 통합 인디케이터</strong>를 선택하세요.</li>
          </ul>
        </div>
      ),
      img: "매수1.png"
    },
    {
      title: "진입 신호(Signal) 설정",
      desc: (
        <div>
          <p className="mb-2">구체적인 매수 트리거를 설정하는 단계입니다.</p>
          <ul className="space-y-2">
            <li className="flex items-start"><span className="mr-2 text-emerald-500">•</span>두 번째 메뉴에서 <strong className="text-emerald-400 ml-1">Long Entry Signal</strong>을 선택합니다.</li>
            <li className="flex items-start"><span className="mr-2 text-emerald-500">•</span>이 설정은 매수 타점이 포착되었을 때만 알림을 보냅니다.</li>
          </ul>
        </div>
      ),
      img: "매수2.png"
    },
    {
      title: "1차 조건 확인",
      desc: (
        <div>
          <p className="mb-2">기본 신호 설정이 완료되었습니다.</p>
          <ul className="space-y-2">
            <li className="flex items-start"><span className="mr-2 text-emerald-500">•</span>현재 설정: <span className="bg-slate-800 px-2 py-0.5 rounded text-xs mx-1 border border-slate-700">인디케이터</span> → <span className="bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded text-xs border border-emerald-500/30">Long Entry</span></li>
            <li className="flex items-start"><span className="mr-2 text-emerald-500">•</span>다음 단계에서 가격 필터를 추가하여 정확도를 높입니다.</li>
          </ul>
        </div>
      ),
      img: "매수3.png"
    },
    {
      title: "가격 필터 추가 (조건 추가)",
      desc: (
        <div>
          <p className="mb-2">안전장치: 특정 가격대 아래일 때만 진입합니다.</p>
          <ul className="space-y-2">
            <li className="flex items-start"><span className="mr-2 text-emerald-500">•</span><strong className="text-blue-400 mx-1">+ 조건 추가</strong> 버튼을 클릭하세요.</li>
            <li className="flex items-start"><span className="mr-2 text-emerald-500">•</span>조건을 <strong className="text-white ml-1">보다 작은 (Less Than)</strong>으로 변경합니다.</li>
            <li className="flex items-start"><span className="mr-2 text-emerald-500">•</span>기준 가격(예: 87,811.28)을 입력하여 고점 매수를 방지합니다.</li>
          </ul>
        </div>
      ),
      img: "매수4.png"
    },
    {
      title: "매수 알림 최종 생성",
      desc: (
        <div>
          <p className="mb-2">모든 조건이 AND 논리로 결합되었습니다.</p>
          <div className="bg-slate-800/50 p-3 rounded border border-slate-700 my-3 text-sm">
            <div className="flex justify-between items-center mb-1"><span>1. 매수 신호 발생</span><CheckCircle2 size={14} className="text-emerald-500"/></div>
            <div className="flex justify-between items-center"><span>2. 가격 &lt; 설정가</span><CheckCircle2 size={14} className="text-emerald-500"/></div>
          </div>
          <p>설정이 완벽하다면 <strong className="text-white">생성</strong> 버튼을 눌러 완료합니다.</p>
        </div>
      ),
      img: "매수5.png"
    }
  ];

  const sellSteps = [
    {
      title: "알림 조건 및 지표 선택",
      desc: (
        <div>
          <p className="mb-2">매도 설정을 위해 알림 창을 엽니다.</p>
          <ul className="space-y-2">
            <li className="flex items-start"><span className="mr-2 text-rose-500">•</span><strong>조건</strong> 탭에서 동일하게 <strong className="text-white ml-1">고승률 통합 인디케이터</strong>를 선택합니다.</li>
          </ul>
        </div>
      ),
      img: "매도1.png"
    },
    {
      title: "청산 신호(Signal) 설정",
      desc: (
        <div>
          <p className="mb-2">이익 실현 또는 손절을 위한 신호입니다.</p>
          <ul className="space-y-2">
            <li className="flex items-start"><span className="mr-2 text-rose-500">•</span>하위 메뉴에서 <strong className="text-rose-400 ml-1">Long Exit Signal</strong>을 찾아 선택하세요.</li>
            <li className="flex items-start"><span className="mr-2 text-rose-500">•</span>롱 포지션을 종료해야 할 시점을 알려줍니다.</li>
          </ul>
        </div>
      ),
      img: "매도2.png"
    },
    {
      title: "1차 조건 확인",
      desc: (
        <div>
          <p className="mb-2">기본 청산 조건이 준비되었습니다.</p>
          <ul className="space-y-2">
            <li className="flex items-start"><span className="mr-2 text-rose-500">•</span>현재 설정: <span className="bg-slate-800 px-2 py-0.5 rounded text-xs mx-1 border border-slate-700">인디케이터</span> → <span className="bg-rose-500/20 text-rose-400 px-2 py-0.5 rounded text-xs border border-rose-500/30">Long Exit</span></li>
            <li className="flex items-start"><span className="mr-2 text-rose-500">•</span>가격 조건을 추가하여 이익 구간을 확보해 봅시다.</li>
          </ul>
        </div>
      ),
      img: "매도3.png"
    },
    {
      title: "가격 필터 추가 (조건 추가)",
      desc: (
        <div>
          <p className="mb-2">최소 이익 보장: 특정 가격 이상일 때만 청산합니다.</p>
          <ul className="space-y-2">
            <li className="flex items-start"><span className="mr-2 text-rose-500">•</span><strong className="text-blue-400 mx-1">+ 조건 추가</strong> 버튼 클릭.</li>
            <li className="flex items-start"><span className="mr-2 text-rose-500">•</span>조건을 <strong className="text-white ml-1">보다 큼 (Greater Than)</strong>으로 설정합니다.</li>
            <li className="flex items-start"><span className="mr-2 text-rose-500">•</span>목표 익절가(예: 87,811.28)를 입력하세요.</li>
          </ul>
        </div>
      ),
      img: "매도4.png"
    },
    {
      title: "매도 알림 최종 생성",
      desc: (
        <div>
          <p className="mb-2">최종 검토 단계입니다.</p>
          <div className="bg-slate-800/50 p-3 rounded border border-slate-700 my-3 text-sm">
            <div className="flex justify-between items-center mb-1"><span>1. 청산 신호 발생</span><CheckCircle2 size={14} className="text-rose-500"/></div>
            <div className="flex justify-between items-center"><span>2. 가격 &gt; 목표가</span><CheckCircle2 size={14} className="text-rose-500"/></div>
          </div>
          <p>두 조건이 모두 맞을 때만 알림이 울립니다. <strong className="text-white">생성</strong>하세요.</p>
        </div>
      ),
      img: "매도5.png"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 font-sans text-slate-200 selection:bg-indigo-500/30">
      {/* Navbar */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/80 backdrop-blur-md border-b border-slate-800 py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-to-tr from-indigo-500 to-purple-500 p-2 rounded-lg shadow-lg shadow-indigo-500/20">
              <BarChart2 className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
              AutoTrade<span className="font-light">Docs</span>
            </span>
          </div>
          <div className="text-xs font-mono text-slate-500 border border-slate-800 px-3 py-1 rounded-full">
            v1.0.0
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-500/20 blur-[120px] rounded-full pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm mb-6 animate-fade-in-up">
            <Zap size={14} />
            <span className="font-medium">High Probability Strategy Setup</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight animate-fade-in-up delay-100">
            Automated Trading <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
              Signal Configuration
            </span>
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up delay-200">
            고승률 기술적 분석 지표를 활용한 자동 매매 알림 설정 가이드입니다.<br className="hidden md:block"/> 
            매수(Long)와 매도(Short/Exit) 타점을 놓치지 않도록 정확하게 설정하세요.
          </p>
        </div>
      </div>

      <main className="max-w-5xl mx-auto px-4 pb-24">
        {/* Tab Navigation */}
        <div className="flex justify-center mb-16 sticky top-24 z-40">
          <div className="p-1.5 rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl flex relative overflow-hidden">
            <div 
              className={`absolute top-1.5 bottom-1.5 rounded-xl transition-all duration-500 ease-out bg-slate-800 border border-slate-700 shadow-inner ${
                activeTab === 'buy' ? 'left-1.5 w-[calc(50%-6px)]' : 'left-[calc(50%+6px)] w-[calc(50%-12px)]'
              }`}
            />
            <button
              onClick={() => setActiveTab('buy')}
              className={`relative z-10 flex items-center justify-center space-x-2 px-8 py-3 rounded-xl text-sm font-bold transition-colors duration-300 min-w-[160px] ${
                activeTab === 'buy' ? 'text-emerald-400' : 'text-slate-500 hover:text-slate-300'
              }`}
            >
              <TrendingUp size={18} />
              <span>Long Entry</span>
            </button>
            <button
              onClick={() => setActiveTab('sell')}
              className={`relative z-10 flex items-center justify-center space-x-2 px-8 py-3 rounded-xl text-sm font-bold transition-colors duration-300 min-w-[160px] ${
                activeTab === 'sell' ? 'text-rose-400' : 'text-slate-500 hover:text-slate-300'
              }`}
            >
              <TrendingDown size={18} />
              <span>Long Exit</span>
            </button>
          </div>
        </div>

        {/* Content Section */}
        <div className="space-y-8">
           <div className="flex items-center justify-between mb-8 px-2">
            <h2 className="text-2xl font-bold flex items-center text-white">
              {activeTab === 'buy' ? (
                <>
                  <div className="w-2 h-8 bg-emerald-500 rounded-full mr-3 shadow-[0_0_15px_rgba(16,185,129,0.5)]"></div>
                  매수 설정 가이드
                </>
              ) : (
                <>
                  <div className="w-2 h-8 bg-rose-500 rounded-full mr-3 shadow-[0_0_15px_rgba(244,63,94,0.5)]"></div>
                  매도 설정 가이드
                </>
              )}
            </h2>
            <div className="hidden md:flex items-center space-x-2 text-slate-500 text-sm">
              <MousePointerClick size={14} />
              <span>Step by Step</span>
            </div>
          </div>

          <div className="grid gap-10">
            {activeTab === 'buy' ? (
              buySteps.map((step, index) => (
                <StepCard
                  key={`buy-${index}`}
                  step={index + 1}
                  title={step.title}
                  description={step.desc}
                  imageSrc={step.img}
                  isBuy={true}
                />
              ))
            ) : (
              sellSteps.map((step, index) => (
                <StepCard
                  key={`sell-${index}`}
                  step={index + 1}
                  title={step.title}
                  description={step.desc}
                  imageSrc={step.img}
                  isBuy={false}
                />
              ))
            )}
          </div>
        </div>

        {/* Summary Footer */}
        <div className="mt-20 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-3xl blur opacity-20" />
          <div className="relative bg-slate-900 border border-slate-800 rounded-2xl p-8 md:p-10 shadow-2xl">
            <div className="flex flex-col md:flex-row items-center justify-between mb-8 border-b border-slate-800 pb-6">
              <div className="flex items-center mb-4 md:mb-0">
                <div className="p-3 bg-slate-800 rounded-xl mr-4 text-indigo-400">
                  <Settings size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">설정 요약 (Cheat Sheet)</h3>
                  <p className="text-slate-400 text-sm">한 눈에 보는 핵심 설정 값</p>
                </div>
              </div>
              <div className="text-xs font-mono bg-slate-950 px-4 py-2 rounded-lg border border-slate-800 text-slate-500">
                AUTO_TRADING_CONFIG
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-center justify-between text-sm font-semibold text-emerald-400 mb-2">
                  <span className="flex items-center"><TrendingUp size={16} className="mr-2"/> BUY (Long Entry)</span>
                </div>
                <div className="bg-slate-950 rounded-xl p-5 border border-slate-800 space-y-3">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-400">Signal</span>
                    <span className="text-white font-mono bg-slate-900 px-2 py-1 rounded border border-slate-800">Long Entry Signal</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-400">Operator</span>
                    <span className="text-emerald-400 font-bold">&lt; 보다 작음</span>
                  </div>
                  <div className="w-full bg-slate-800 h-px"></div>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    신호가 떴더라도 내가 정한 가격보다 쌀 때만 진입합니다. (고점 매수 방지)
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between text-sm font-semibold text-rose-400 mb-2">
                  <span className="flex items-center"><TrendingDown size={16} className="mr-2"/> SELL (Long Exit)</span>
                </div>
                <div className="bg-slate-950 rounded-xl p-5 border border-slate-800 space-y-3">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-400">Signal</span>
                    <span className="text-white font-mono bg-slate-900 px-2 py-1 rounded border border-slate-800">Long Exit Signal</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-400">Operator</span>
                    <span className="text-rose-400 font-bold">&gt; 보다 큼</span>
                  </div>
                  <div className="w-full bg-slate-800 h-px"></div>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    신호가 떴더라도 내가 정한 가격보다 비쌀 때만 팝니다. (최소 익절 보장)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="border-t border-slate-900 bg-slate-950 py-8 text-center text-slate-600 text-sm">
        <p>&copy; 2024 Automated Trading Setup Guide. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
