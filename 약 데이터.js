// 약 데이터베이스 (약 데이터)
const drugDatabase = [
  { name: '타이레놀', description: '해열 진통제입니다.' },
  { name: '아스피린', description: '통증 및 염증을 완화하는 약입니다.' },
  { name: '비타민 C', description: '면역 체계를 강화해주는 비타민입니다.' },
  { name: '이부프로펜', description: '진통, 항염, 해열 효과를 가진 약입니다.' },
  { name: '나프록센', description: '통증 및 염증을 완화하는 비스테로이드성 항염증제입니다.' },
  { name: '디클로페낙', description: '항염증 및 진통 효과가 있습니다.' },
  { name: '덱시부프로펜', description: '이부프로펜의 활성 성분으로, 진통 및 항염 효과를 제공합니다.' },
  { name: '트라마돌', description: '중증 통증을 완화하는 약물입니다.' },
  { name: '모르핀', description: '강력한 마약성 진통제입니다.' },
  { name: '코데인', description: '중등도 통증 완화와 기침 억제 효과가 있습니다.' },
  { name: '메타돈', description: '중증 통증 완화와 마약 중독 치료에 사용됩니다.' },
  { name: '옥시코돈', description: '중증 통증을 완화하는 마약성 진통제입니다.' },
  { name: '플루옥세틴', description: '우울증 치료에 사용되는 SSRI 계열의 항우울제입니다.' },
  { name: '파록세틴', description: '우울증과 불안 장애 치료에 효과적인 SSRI 계열 약물입니다.' },
  { name: '설트랄린', description: '우울증 및 불안 장애를 치료하는 SSRI 계열의 항우울제입니다.' },
  { name: '에스시탈로프람', description: '우울증과 불안 장애를 치료하는 SSRI 항우울제입니다.' },
  { name: '미르타자핀', description: '우울증 치료와 수면 개선에 도움을 줍니다.' },
  { name: '아미트립틸린', description: '신경성 통증과 우울증 치료에 사용되는 삼환계 항우울제입니다.' },
  { name: '발프로산', description: '간질과 양극성 장애를 치료하는 항간질제입니다.' },
  { name: '카바마제핀', description: '간질과 삼차신경통 치료에 사용되는 항간질제입니다.' },
  { name: '라모트리진', description: '간질과 양극성 장애 치료에 효과적입니다.' },
  { name: '가바펜틴', description: '신경통과 간질을 치료하는 약물입니다.' },
  { name: '프레가발린', description: '신경통, 간질, 불안 치료에 사용됩니다.' },
  { name: '리보트릴', description: '간질 치료와 불안 장애 치료에 효과적인 항간질제입니다.' },
  { name: '디아제팜', description: '불안 완화와 근육 이완에 사용되는 벤조디아제핀 계열 약물입니다.' },
  { name: '로라제팜', description: '불안 완화와 수면 유도에 사용되는 약물입니다.' },
  { name: '알프라졸람', description: '불안 장애와 공황장애를 치료하는 약물입니다.' },
  { name: '프로프라놀롤', description: '고혈압 및 부정맥 치료에 사용되는 베타 차단제입니다.' },
  { name: '아테놀롤', description: '고혈압과 협심증 치료에 사용되는 베타 차단제입니다.' },
  { name: '비소프롤롤', description: '고혈압 및 심부전 치료에 사용되는 베타 차단제입니다.' },
  { name: '칸데사르탄', description: '고혈압과 심부전 치료에 효과적인 혈관 확장제입니다.' },
  { name: '로사르탄', description: '고혈압과 심부전을 치료하는 혈관 확장제입니다.' },
  { name: '에날라프릴', description: '고혈압과 심부전 치료에 사용되는 ACE 억제제입니다.' },
  { name: '라미프릴', description: '고혈압과 심부전 치료에 사용되는 ACE 억제제입니다.' },
  { name: '암로디핀', description: '고혈압과 협심증 치료에 사용되는 칼슘 채널 차단제입니다.' },
  { name: '니페디핀', description: '고혈압과 협심증 치료에 효과적인 칼슘 채널 차단제입니다.' },
  { name: '후로세미드', description: '체액 저류와 고혈압을 치료하는 이뇨제입니다.' },
  { name: '히드로클로로티아지드', description: '고혈압 치료에 사용되는 이뇨제입니다.' },
  { name: '스피로놀락톤', description: '고혈압과 심부전 치료에 사용되는 이뇨제입니다.' },
  { name: '메토프로롤', description: '고혈압과 협심증 치료에 사용되는 베타 차단제입니다.' },
  { name: '클로피도그렐', description: '혈전 예방에 사용되는 항혈소판제입니다.' },
  { name: '와파린', description: '혈전 예방에 사용되는 항응고제입니다.' },
  { name: '리바록사반', description: '혈전 예방을 위한 경구용 항응고제입니다.' },
  { name: '에독사반', description: '경구용 항응고제, 혈전 예방에 사용됩니다.' },
  { name: '다비가트란', description: '혈전 예방에 사용되는 항응고제입니다.' },
  { name: '피록시캄', description: '통증 및 염증 완화를 위한 비스테로이드성 항염증제입니다.' },
  { name: '메페남산', description: '주로 생리통 완화에 사용되는 진통제입니다.' },
  { name: '셀레콕시브', description: '관절염 통증 완화에 사용되는 비스테로이드성 항염증제입니다.' },
  { name: '옴프라졸', description: '위산 분비 억제제로 위염과 위궤양 치료에 사용됩니다.' },
  { name: '에스오메프라졸', description: '위식도 역류질환 치료에 사용되는 위산 분비 억제제입니다.' },
  { name: '판토프라졸', description: '위산 과다 분비로 인한 질환을 치료하는 약물입니다.' },
  { name: '라니티딘', description: '위산 분비를 억제하는 히스타민 H2 차단제입니다.' },
  { name: '시메티딘', description: '위산 분비 억제제로 사용됩니다.' },
  { name: '알마게이트', description: '위산을 중화시키는 제산제입니다.' },
  { name: '마그네슘 하이드록사이드', description: '제산제와 완하제로 사용됩니다.' },
  { name: '메트로니다졸', description: '기생충 및 세균 감염 치료에 사용되는 항생제입니다.' },
  { name: '시프로플록사신', description: '다양한 세균 감염 치료에 사용되는 광범위 항생제입니다.' },
  { name: '레보플록사신', description: '호흡기 및 감염 치료에 사용되는 항생제입니다.' },
  { name: '아목시실린', description: '광범위 항생제, 호흡기 감염 치료에 사용됩니다.' },
  { name: '클라불란산', description: '아목시실린과 함께 사용하여 항생제 효과를 증대시킵니다.' },
  { name: '세프트리악손', description: '광범위 항생제로 다양한 감염을 치료합니다.' },
  { name: '세팔렉신', description: '세팔로스포린계 항생제입니다.' },
  { name: '아지트로마이신', description: '호흡기 및 피부 감염 치료에 사용되는 항생제입니다.' },
  { name: '독시사이클린', description: '여드름 및 감염 치료에 사용되는 테트라사이클린계 항생제입니다.' },
  { name: '클린다마이신', description: '호흡기 및 피부 감염 치료에 효과적인 항생제입니다.' },
  { name: '린코마이신', description: '박테리아 감염을 치료하는 항생제입니다.' },
  { name: '플루코나졸', description: '곰팡이 감염 치료에 사용되는 항진균제입니다.' },
  { name: '케토코나졸', description: '피부 및 손발톱 곰팡이 감염 치료에 사용됩니다.' },
  { name: '이트라코나졸', description: '다양한 곰팡이 감염 치료에 사용됩니다.' },
  { name: '발라시클로버', description: '헤르페스 감염 치료에 사용되는 항바이러스제입니다.' },
  { name: '오셀타미비르', description: '독감 치료에 사용되는 항바이러스제입니다.' },
  { name: '페니토인', description: '간질 치료에 사용되는 항간질제입니다.' },
  { name: '톱피라메이트', description: '간질과 편두통 예방에 효과적인 약물입니다.' },
  { name: '리튬', description: '양극성 장애 치료에 사용되는 약물입니다.' },
  { name: '할로페리돌', description: '정신분열증 치료에 사용되는 항정신병제입니다.' },
  { name: '클로자핀', description: '정신분열증 치료에 효과적인 항정신병제입니다.' },
  { name: '리스페리돈', description: '정신분열증 및 양극성 장애 치료에 사용되는 항정신병제입니다.' },
  { name: '올란자핀', description: '정신분열증 치료에 사용됩니다.' },
  { name: '아리피프라졸', description: '정신분열증과 양극성 장애 치료에 사용됩니다.' },
  { name: '케토티펜', description: '천식 예방 및 알레르기 증상 완화에 사용됩니다.' },
  { name: '로라타딘', description: '알레르기 증상을 완화하는 항히스타민제입니다.' },
  { name: '세티리진', description: '알레르기 비염 및 두드러기 증상을 완화합니다.' },
  { name: '펙소페나딘', description: '알레르기 증상 치료에 효과적인 항히스타민제입니다.' },
  { name: '디펜히드라민', description: '알레르기 증상 완화 및 수면제 역할을 합니다.' },
  { name: '몬테루카스트', description: '천식 및 알레르기 치료에 사용됩니다.' },
  { name: '살메테롤', description: '천식 및 만성폐쇄성폐질환(COPD) 치료에 사용됩니다.' },
  { name: '부데소나이드', description: '흡입용 스테로이드로 천식 및 알레르기 비염을 치료합니다.' },
  { name: '플루티카손', description: '천식과 비염 치료에 사용되는 흡입용 스테로이드제입니다.' },
  { name: '테오필린', description: '천식 및 만성폐쇄성폐질환(COPD) 치료에 사용됩니다.' },
  { name: '레보티록신', description: '갑상선 기능 저하증 치료에 사용되는 약물입니다.' },
  { name: '인슐린', description: '당뇨병 치료에 필수적인 호르몬입니다.' },
  { name: '글리메피리드', description: '2형 당뇨병 치료에 사용되는 혈당 조절제입니다.' },
  { name: '메트포르민', description: '2형 당뇨병 치료에 널리 사용되는 약물입니다.' },
  { name: '글리피지드', description: '2형 당뇨병 치료에 사용됩니다.' },
  { name: '피오글리타존', description: '2형 당뇨병 치료에 효과적인 약물입니다.' }
];
