import React, { useState } from 'react';
import { BookOpen, CheckCircle, AlertCircle, ArrowRight, TrendingUp, TrendingDown, MousePointerClick, Settings, Plus, Eye } from 'lucide-react';

const StepCard = ({ step, title, description, imageSrc, isBuy }) => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300 mb-8">
    <div className={`px-6 py-4 border-b flex items-center justify-between ${isBuy ? 'bg-emerald-50 border-emerald-100' : 'bg-rose-50 border-rose-100'}`}>
      <div className="flex items-center space-x-3">
        <span className={`flex items-center justify-center w-8 h-8 rounded-full font-bold text-white ${isBuy ? 'bg-emerald-500' : 'bg-rose-500'}`}>
          {step}
        </span>
        <h3 className="text-lg font-bold text-gray-800">{title}</h3>
      </div>
      {isBuy ? <TrendingUp className="text-emerald-500 w-5 h-5" /> : <TrendingDown className="text-rose-500 w-5 h-5" />}
    </div>
    
    <div className="p-6 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
      <div className="space-y-4 order-2 lg:order-1">
        <div className="prose text-gray-600 leading-relaxed">
          {description}
        </div>
        
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 text-sm text-gray-500 mt-4">
          <div className="flex items-start space-x-2">
            <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
            <span>이미지와 같이 설정이 올바르게 되었는지 확인해주세요.</span>
          </div>
        </div>
      </div>

      <div className="order-1 lg:order-2 bg-gray-100 rounded-lg border border-gray-200 overflow-hidden shadow-inner group">
        <div className="relative aspect-[4/3] w-full bg-gray-200">
           {/* Image handling with fallback */}
           <img 
            src={imageSrc} 
            alt={title}
            className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-500"
            onError={(e) => {
              e.target.onerror = null; 
              e.target.parentElement.innerHTML = `<div class="flex flex-col items-center justify-center h-full text-gray-400 p-4 text-center"><span class="mb-2">⚠️ 이미지 로드 실패</span><span class="text-xs">파일명을 확인해주세요:<br/>${imageSrc}</span></div>`;
            }}
          />
        </div>
        <div className="px-3 py-2 bg-white border-t border-gray-200 text-xs text-center text-gray-400 font-mono">
          {imageSrc}
        </div>
      </div>
    </div>
  </div>
);

const App = () => {
  const [activeTab, setActiveTab] = useState('buy'); // 'buy' or 'sell'

  const buySteps = [
    {
      title: "알림 조건 및 지표 선택",
      desc: (
        <div>
          <p>트레이딩 뷰의 알림 생성 메뉴를 엽니다.</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li><strong>조건</strong> 탭을 클릭합니다.</li>
            <li>드롭다운 메뉴에서 <strong>고승률 기술적 분석 통합 인디케이터</strong>를 선택합니다.</li>
          </ul>
        </div>
      ),
      img: "매수1.png"
    },
    {
      title: "진입 신호(Signal) 설정",
      desc: (
        <div>
          <p>지표를 선택한 후 구체적인 트리거 조건을 설정합니다.</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>두 번째 드롭다운 메뉴에서 <strong>Long Entry Signal</strong>을 선택합니다.</li>
            <li>이는 매수 신호가 발생했을 때 알림을 받겠다는 의미입니다.</li>
          </ul>
        </div>
      ),
      img: "매수2.png"
    },
    {
      title: "1차 조건 확인",
      desc: (
        <div>
          <p>기본 설정이 완료된 상태입니다.</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>조건: <strong>고승률 인디케이터</strong> → <strong>Long Entry Signal</strong></li>
            <li>인터벌 등을 확인하고 다음 단계에서 추가 필터를 설정합니다.</li>
          </ul>
        </div>
      ),
      img: "매수3.png"
    },
    {
      title: "가격 필터 추가 (조건 추가)",
      desc: (
        <div>
          <p>특정 가격대 이하일 때만 진입하도록 조건을 추가합니다.</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li><strong>+ 조건 추가</strong> 버튼을 클릭합니다.</li>
            <li>조건을 <strong>보다 작은 (Less Than)</strong>으로 설정합니다.</li>
            <li>기준이 되는 <strong>가격(값)</strong>을 입력합니다. (예: 87,811.28)</li>
          </ul>
        </div>
      ),
      img: "매수4.png"
    },
    {
      title: "매수 알림 최종 생성",
      desc: (
        <div>
          <p>모든 조건이 결합된 최종 형태입니다.</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li><strong>조건 1:</strong> Long Entry Signal (매수 신호 발생)</li>
            <li><strong>그리고(AND):</strong> 현재가가 설정한 가격 <strong>보다 작음</strong></li>
            <li>설정이 맞다면 <strong>생성</strong> 버튼을 눌러 알림을 등록합니다.</li>
          </ul>
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
          <p>알림 생성 창에서 지표를 먼저 선택합니다.</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li><strong>조건</strong> 드롭다운에서 <strong>고승률 기술적 분석 통합 인디케이터</strong>를 선택합니다.</li>
          </ul>
        </div>
      ),
      img: "매도1.png"
    },
    {
      title: "청산 신호(Signal) 설정",
      desc: (
        <div>
          <p>매도(청산) 시점을 잡기 위한 신호를 선택합니다.</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>하위 메뉴에서 <strong>Long Exit Signal</strong>을 선택합니다.</li>
            <li>보유 중인 롱 포지션을 종료하거나 매도하는 신호입니다.</li>
          </ul>
        </div>
      ),
      img: "매도2.png"
    },
    {
      title: "1차 조건 확인",
      desc: (
        <div>
          <p>기본적인 신호 감지 조건이 설정되었습니다.</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>조건: <strong>고승률 인디케이터</strong> → <strong>Long Exit Signal</strong></li>
            <li>이 상태에서 가격 조건을 추가하기 위해 다음 단계로 넘어갑니다.</li>
          </ul>
        </div>
      ),
      img: "매도3.png"
    },
    {
      title: "가격 필터 추가 (조건 추가)",
      desc: (
        <div>
          <p>특정 가격대 이상일 때만 청산하도록 조건을 추가합니다.</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li><strong>+ 조건 추가</strong> 버튼을 누릅니다.</li>
            <li>조건을 <strong>보다 큼 (Greater Than)</strong>으로 설정합니다.</li>
            <li>목표로 하는 <strong>가격(값)</strong>을 입력합니다. (예: 87,811.28)</li>
          </ul>
        </div>
      ),
      img: "매도4.png"
    },
    {
      title: "매도 알림 최종 생성",
      desc: (
        <div>
          <p>최종적으로 두 가지 조건이 결합된 상태입니다.</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li><strong>조건 1:</strong> Long Exit Signal (청산/매도 신호)</li>
            <li><strong>그리고(AND):</strong> 현재가가 설정한 가격 <strong>보다 큼</strong></li>
            <li>두 조건이 모두 충족될 때 알림이 울립니다. <strong>생성</strong>을 클릭하세요.</li>
          </ul>
        </div>
      ),
      img: "매도5.png"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900 pb-20">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-blue-600 p-2 rounded-lg text-white">
              <BookOpen size={24} />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">자동매매 알림 설정 가이드</h1>
              <p className="text-sm text-gray-500">TradingView Alert Setup Tutorial</p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Intro Alert */}
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8 rounded-r-lg">
          <div className="flex">
            <div className="flex-shrink-0">
              <AlertCircle className="h-5 w-5 text-blue-500" />
            </div>
            <div className="ml-3">
              <p className="text-sm text-blue-700">
                이 가이드는 사용자가 업로드한 이미지 파일을 기반으로 작성되었습니다.<br/>
                이미지가 보이지 않는다면 <code>매수1.png</code> ~ <code>매수5.png</code>, <code>매도1.png</code> ~ <code>매도5.png</code> 파일이 같은 폴더에 있는지 확인해주세요.
              </p>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-10">
          <div className="bg-white p-1.5 rounded-xl shadow-sm border border-gray-200 inline-flex">
            <button
              onClick={() => setActiveTab('buy')}
              className={`flex items-center space-x-2 px-8 py-3 rounded-lg text-sm font-bold transition-all duration-200 ${
                activeTab === 'buy'
                  ? 'bg-emerald-500 text-white shadow-md'
                  : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
              }`}
            >
              <TrendingUp size={18} />
              <span>매수 (Long Entry) 설정</span>
            </button>
            <button
              onClick={() => setActiveTab('sell')}
              className={`flex items-center space-x-2 px-8 py-3 rounded-lg text-sm font-bold transition-all duration-200 ${
                activeTab === 'sell'
                  ? 'bg-rose-500 text-white shadow-md'
                  : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
              }`}
            >
              <TrendingDown size={18} />
              <span>매도 (Long Exit) 설정</span>
            </button>
          </div>
        </div>

        {/* Dynamic Content */}
        <div className="space-y-6 animate-fade-in">
          <div className="flex items-center justify-between mb-6">
            <h2 className={`text-2xl font-bold flex items-center ${activeTab === 'buy' ? 'text-emerald-700' : 'text-rose-700'}`}>
              {activeTab === 'buy' ? (
                <>
                  <MousePointerClick className="mr-2" /> 매수 알림 설정 프로세스
                </>
              ) : (
                <>
                  <MousePointerClick className="mr-2" /> 매도 알림 설정 프로세스
                </>
              )}
            </h2>
            <span className="text-sm text-gray-500 bg-white px-3 py-1 rounded-full border border-gray-200 shadow-sm">
              총 5단계
            </span>
          </div>

          {activeTab === 'buy' ? (
            <div>
              {buySteps.map((step, index) => (
                <StepCard
                  key={`buy-${index}`}
                  step={index + 1}
                  title={step.title}
                  description={step.desc}
                  imageSrc={step.img}
                  isBuy={true}
                />
              ))}
            </div>
          ) : (
            <div>
              {sellSteps.map((step, index) => (
                <StepCard
                  key={`sell-${index}`}
                  step={index + 1}
                  title={step.title}
                  description={step.desc}
                  imageSrc={step.img}
                  isBuy={false}
                />
              ))}
            </div>
          )}
        </div>

        {/* Conclusion / Summary Box */}
        <div className="mt-12 bg-gray-800 text-white rounded-xl p-8 shadow-xl">
          <h3 className="text-xl font-bold mb-4 flex items-center">
            <Settings className="mr-2" /> 요약
          </h3>
          <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-300">
            <div className="bg-gray-700/50 p-4 rounded-lg">
              <strong className="text-emerald-400 block mb-2 text-base">🟢 매수 (Long Entry) 핵심</strong>
              <ul className="list-disc pl-4 space-y-1">
                <li>Signal: <strong>Long Entry Signal</strong></li>
                <li>가격 조건: <strong>보다 작은 (Less Than)</strong></li>
                <li>목적: 신호 발생 시 + 가격이 유리할 때 진입</li>
              </ul>
            </div>
            <div className="bg-gray-700/50 p-4 rounded-lg">
              <strong className="text-rose-400 block mb-2 text-base">🔴 매도 (Long Exit) 핵심</strong>
              <ul className="list-disc pl-4 space-y-1">
                <li>Signal: <strong>Long Exit Signal</strong></li>
                <li>가격 조건: <strong>보다 큼 (Greater Than)</strong></li>
                <li>목적: 신호 발생 시 + 목표가 이상일 때 청산</li>
              </ul>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
};

export default App;
