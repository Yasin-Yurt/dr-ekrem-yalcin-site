import { PageContent } from './types';

export const surgeryContent: Record<string, PageContent> = {
  'boyun-servikal-fitigi-ve-kanal-daralmasi-ameliyatlari': {
    title: 'Boyun Servikal Fıtığı ve Kanal Daralması Ameliyatları',
    definition: '<strong>Boyun servikal fıtığı ve spinal kanal darlığı ameliyatları</strong>, boyun omurları arasındaki disklerin fıtıklaşması veya omurilik kanalının daralması neticesinde, omurilik ve sinir köklerine baskı yapan dokuların cerrahi yolla dekompresyonu (rahatlatılması) ve omurganın stabilize edilmesini amaçlayan mikrocerrahi ve enstrümantasyon işlemleridir. Servikal bölge, omuriliğin en hassas kısımlarından birini barındırır ve bu bölgedeki mekanik basılar ciddi nörolojik kayıplara sebep olabilir. Ameliyatlar, bası altında ezilen sinir dokularını kurtarmayı ve hastanın ağrısız, fonksiyonel bir hayata kavuşmasını hedefler.',
    mechanism: 'Servikal fıtıkta, omurlar arasındaki diskin sert dış tabakası (annulus fibrosus) yırtılır ve içindeki jelatinöz madde (nucleus pulposus) omurilik ve sinir köklerine doğru taşarak mekanik baskı ve kimyasal inflamasyon oluşturur. Servikal kanal darlığında ise, yaşlanan omurgada faset eklemlerin kireçlenerek büyümesi, ligamentum flavumun kalınlaşması ve disklerin çökmelerle arkaya doğru taşması sonucunda omurilik kanalı daralır. Bu durum, omuriliğin mikro-vasküler kan akışını bozarak kronik iskemiye (oksijensiz kalmaya) ve omurilik hücrelerinin hasar görmesine (servikal miyelopati) neden olur.',
    clinicalProcess: 'Tedavi süreci, hastanın klinik tablosunun titizlikle incelenmesi ile başlar. Kola yayılan şiddetli ağrı, ellerde uyuşma, ince becerilerde kayıp ve yürüme dengesizliği sorgulanır. 3 Tesla Servikal MRG ile fıtıkların seviyesi ve omuriliğin sıkışma derecesi belirlenir; BT ile kemik osteofitler değerlendirilir. EMG testi ile sinir iletim hasarı analiz edilir. İlerleyici kas gücü kaybı veya miyelopati bulguları mevcutsa mikrocerrahi yöntemlerle ameliyat planlanır. Ameliyat tekniği olarak önden (anterior) veya arkadan (posterior) yaklaşımlar hastanın anatomisine ve basının yerine göre seçilir.',
    symptoms: [
      '<strong>Radiküler Ağrı:</strong> Boyundan başlayıp omuza, kürek kemiğine ve kola yayılan şiddetli elektriklenme ve yanma tarzı ağrı.',
      '<strong>Duyu Kaybı ve Parestezi:</strong> Parmaklarda ve el genelinde sürekli uyuşma, keçeleşme ve iğnelenme hissi.',
      '<strong>Motor Güç Kaybı:</strong> Bardak tutmakta, yazı yazmakta zorlanma, el becerilerinde (düğme ilikleme vb.) belirgin yavaşlama.',
      '<strong>Miyelopati Bulguları:</strong> Bacaklarda sertlik, yürüme dengesizliği, sık sık takılma veya dengesiz adımlar atma.'
    ],
    diagnosis: [
      '<strong>Yüksek Çözünürlüklü Servikal MRG:</strong> Yumuşak dokuları, fıtık boyutunu ve omurilikteki sinyal değişikliklerini gösteren altın standart.',
      '<strong>Servikal BT:</strong> Kemik yapıları, kireçlenmeleri ve omurganın kemik kanal genişliğini değerlendiren radyolojik tarama.',
      '<strong>Servikal EMG:</strong> Hangi sinir kökünün ne derecede bası altında olduğunu ölçen nörofizyolojik inceleme.'
    ],
    treatments: [
      '<strong>Anterior Servikal Diskektomi ve Füzyon (ACDF):</strong> Boynun ön kısmından girilerek mikroskop altında fıtığın temizlenmesi ve yerine kafes (cage) veya protez yerleştirilmesi.',
      '<strong>Posterior Servikal Dekompresyon ve Füzyon:</strong> Arkadan yaklaşımla laminaların alınarak omuriliğin rahatlatılması ve vidalarla omurganın sabitlenmesi.',
      '<strong>Servikal Yapay Disk Protezi (Artroplasti):</strong> Uygun genç hastalarda boyun hareketlerini korumak amacıyla diskin protez ile değiştirilmesi.'
    ],
    whenToSeeDoctor: 'Kollarınızda veya ellerinizde ani gelişen bir güç kaybı hissediyorsanız, elinizden nesneleri düşürüyorsanız veya yürürken dengenizi sağlamakta zorlanıp yalpalıyorsanız, bu durum omuriliğin ciddi tehlikede olduğunu gösterir. Geri dönüşümsüz felç risklerini önlemek adına vakit kaybetmeden beyin ve sinir cerrahisi uzmanına başvurmanız hayati önem taşımaktadır.',
    postTreatment: 'Ameliyat sonrasında hastalar genellikle ertesi gün ayağa kaldırılır ve mobilize edilir. Önden yapılan ameliyatlarda birkaç hafta süreyle yumuşak boyunluk kullanımı önerilebilir. İlk 4 hafta boyunca ani boyun hareketlerinden, ağır kaldırmaktan ve uzun süre masa başında boynu eğerek çalışmaktan kaçınılmalıdır. Yara iyileşmesi bittikten sonra hafif boyun egzersizlerine başlanır.',
    lifestyle: 'Boyun sağlığı için çalışma masanızda monitörün göz hizasında olmasına dikkat edin. Telefonu başınızı çok fazla eğerek kullanmaktan kaçının. Düzenli boyun ve sırt kası güçlendirme egzersizleri yapın. Sigara kullanımı disklerin beslenmesini engelleyerek iyileşmeyi geciktirdiği için kesinlikle bırakılmalıdır.',
    faq: [
      { question: 'Boyun ameliyatından sonra boynumda kalıcı hareket kısıtlılığı olur mu?', answer: 'Genellikle tek seviyeli kafes (füzyon) ameliyatları boyun hareketlerini ciddi oranda kısıtlamaz. Çoklu seviyelerde veya posterior sabitleme ameliyatlarında hafif kısıtlılık olabilir ancak bu günlük yaşamı engellemez.' },
      { question: 'Kafes veya platin takılması şart mıdır?', answer: 'Fıtık tamamen temizlendikten sonra omurga mesafesinin çökmesini engellemek ve omurga dizilimini korumak için araya kafes koyulması cerrahi stabilitenin temel kuralıdır.' }
    ]
  },
  'boyun-servikal-omurga-ameliyatlari': {
    title: 'Boyun Servikal Omurga Ameliyatları',
    definition: '<strong>Boyun servikal omurga ameliyatları</strong>, boyun bölgesindeki omurga kemikleri, eklemleri, bağları ve disklerinde gelişen dejeneratif hastalıklar, eğrilikler, instabilite (gevşeklik) veya darlıklar nedeniyle uygulanan tüm cerrahi rekonstruksiyon süreçlerini kapsar. Bu ameliyatlar, sadece fıtık temizlemekle kalmayıp, omurga dizilimini (servikal lordoz) yeniden kurmayı ve omurganın yük taşıma kapasitesini güvenli bir şekilde restore etmeyi hedefler.',
    mechanism: 'Boyun omurgası, başın yükünü taşırken her yöne esneklik sağlayan biyomekanik bir mucizedir. Yaşlanma veya kronik yük binmesi ile bu sistemde aşınma başlar. Diskler su kaybedip çöktükçe faset eklemlere aşırı yük biner ve kireçlenme gelişir. Bu durum omurganın öne doğru bükülmesine (kifoz) veya dengesizleşmesine yol açar. Omurilik, bu mekanik deformasyon ve instabilite nedeniyle gerilir, ezilir ve nöral iletim sekteye uğrar.',
    clinicalProcess: 'Tanı aşamasında boyun hareket aralığı, hassasiyet noktaları ve sinir kökü refleksleri kapsamlı muayene edilir. Dinamik servikal grafiler ile omurganın hareket esnasındaki kaymaları incelenir. Kontrastlı MRG ve BT ile omurganın 3 boyutlu yapısı çıkarılır. Tedavi planlanırken hastanın yaşı, kemik kalitesi ve nörolojik durumu göz önüne alınarak tekli veya çoklu seviyeli cerrahi stratejiler belirlenir ve nöromonitörizasyon eşliğinde mikroskop altında operasyon gerçekleştirilir.',
    symptoms: [
      '<strong>Yaygın Boyun ve Sırt Ağrısı:</strong> Kürek kemiklerine ve ense köküne yayılan, hareketle artan kronik ve bıktırıcı ağrılar.',
      '<strong>Denge ve Yürüme Kaybı:</strong> Ayak tabanlarında uyuşma, pamuk üzerinde yürüyor gibi hissetme ve sık sık düşme eğilimi.',
      '<strong>Kolların Beceri Kaybı:</strong> Parmaklarda ince motor koordinasyon bozukluğu, yazı kalitesinin bozulması.'
    ],
    diagnosis: [
      '<strong>Dinamik Servikal Röntgen:</strong> Öne ve arkaya eğilerek çekilen grafiler ile stabilite kaybını saptama.',
      '<strong>Servikal MRG ve BT Entegrasyonu:</strong> Omuriliğin bası bölgelerini ve kemik osteofitleri eş zamanlı inceleme.'
    ],
    treatments: [
      '<strong>Anterior Servikal Korpektomi ve Füzyon:</strong> Omur kemiğinin bir kısmının tamamen çıkarılarak omuriliğin önündeki büyük basıların temizlenmesi ve araya titanyum kafes yerleştirilmesi.',
      '<strong>Servikal Laminoplasti:</strong> Arkadan yaklaşımla omurga kanalının kemik çatısını bir menteşe gibi açıp kanalı genişleterek omuriliği rahatlatma işlemi.',
      '<strong>Posterior Servikal Enstrümantasyon:</strong> Omurların arkasından vida ve çubuklarla sabitleme yapılarak stabilizasyonun sağlanması.'
    ],
    whenToSeeDoctor: 'Yürüme mesafenizde ani kısalma, idrar veya gaita kaçırma şikayeti veya ellerinizde hiçbir şeyi kavrayamayacak derecede his ve güç kaybı olması durumunda acilen bir beyin cerrahına başvurulmalıdır.',
    postTreatment: 'Hasta ameliyatın ertesi günü ayağa kalkarak yürür. Cerrahi yönteme göre 2-4 hafta boyunluk kullanımı istenir. İlaç tedavisiyle kas spazmları ve ağrılar kontrol altına alınır. Hastanın cerrahi bölgesindeki doku iyileşmesi radyolojik olarak kontrollerle doğrulanır.',
    lifestyle: 'Ergonomik boyun yastıkları tercih edin. Bilgisayar karşısında dik oturun ve her 45 dakikada bir boyun esnetme hareketleri yapın. Kemik kalitesini korumak için kalsiyum ve D vitamini düzeylerini optimal seviyede tutun.',
    faq: [
      { question: 'Boyun ameliyatlarında felç riski nedir?', answer: 'Gelişmiş intraoperatif nöromonitörizasyon (ameliyat sırasında sinir sinyallerini izleyen teknoloji) sayesinde felç riski günümüzde %1\'in altına inmiştir.' },
      { question: 'Ameliyattan sonra ne zaman araç kullanabilirim?', answer: 'Boyun hareketlerinizin ağrısız hale gelmesi ve reflekslerinizin düzelmesi sonrası, genellikle ameliyattan 3-4 hafta sonra araç kullanmaya izin verilir.' }
    ]
  },
  'boyun-servikal-omurga-kiriklari-ameliyatlari': {
    title: 'Boyun Servikal Omurga Kırıkları Ameliyatları',
    definition: '<strong>Boyun servikal omurga kırıkları ameliyatları</strong>, yüksek enerjili travmalar (trafik kazaları, yüksekten düşmeler, spor yaralanmaları vb.) sonucu boyun omurlarında meydana gelen kırılma, çıkma veya bağ yırtılmalarını tedavi etmek; omuriliğin daha fazla hasar görmesini engellemek ve omurganın stabilitesini acilen geri kazandırmak amacıyla yapılan kritik cerrahi işlemlerdir. Bu cerrahi girişimler, hastanın hayati fonksiyonlarını korumak ve kalıcı nörolojik felç durumlarını önlemek için zamanla yarışılan operasyonlardır.',
    mechanism: 'Travmanın etkisiyle boyun omur cisimleri ezilebilir (kompresyon kırığı), parçalanabilir (patlama kırığı) veya omurlar arasındaki faset eklemler yerinden çıkabilir (sublüksasyon/dislokasyon). Bu mekanik yıkım, omurga kanalının bütünlüğünü bozarak kemik parçalarının veya disk materyallerinin doğrudan omuriliğe saplanmasına veya onu ezmesine yol açar. Sonuç olarak omurilikte ödem, kanama, iskemi ve hatta tam kesi (transsection) gelişebilir. Stabil olmayan kırıklar, başın en ufak hareketinde omuriliğe ölümcül basılar yapabilir.',
    clinicalProcess: 'Travma geçiren hasta, olay yerinden itibaren boyunluk ile tam olarak sabitlenir. Acil servise ulaştığında nörolojik muayenesi yapılarak duyu ve motor seviyesi belirlenir. Acil Servikal BT ve kontrastlı MRG çekilerek kırıkların stabilitesi ve omuriliğin durumu milimetrik olarak değerlendirilir. Omurilik üzerinde aktif bası veya omurgada ileri derecede instabilite varsa hasta acilen ameliyata alınır. Operasyon sırasında mikroskop altında sinirler serbestleştirilir ve omurlar titanyum plak, vida ve çubuklarla birbirine sıkıca sabitlenir.',
    symptoms: [
      '<strong>Şiddetli ve Dayanılmaz Boyun Ağrısı:</strong> Travma sonrasında başı en ufak hareket ettirmede ortaya çıkan yırtıcı boyun ağrısı.',
      '<strong>Duyu ve Motor Kaybı:</strong> Kırığın seviyesine bağlı olarak kollarda, bacaklarda veya tüm vücutta ani gelişen hissizlik ve hareket ettirememe (felç) durumu.',
      '<strong>Solunum Sıkıntısı:</strong> Üst boyun seviyelerindeki kırıklarda diyaframı kontrol eden sinirlerin (phrenic nerve) etkilenmesiyle gelişen solunum durması veya zorluğu.',
      '<strong>Nörojenik Şok Bulguları:</strong> Tansiyon düşüklüğü, nabız yavaşlaması ve vücut ısısını ayarlayamama.'
    ],
    diagnosis: [
      '<strong>Acil 3 Boyutlu Servikal BT:</strong> Kırık hatlarını, kemik fragmanlarının yerini ve kanal daralmasını saniyeler içinde gösteren tetkik.',
      '<strong>Servikal Spinal MRG:</strong> Omurilikteki zedelenmeyi, ödemi, hematomu ve bağların bütünlüğünü gösteren en hassas görüntüleme yöntemi.'
    ],
    treatments: [
      '<strong>Anterior Enstrümantasyon (Vida ve Plak):</strong> Ön taraftan girilerek kırık omur cisminin çıkarılması (korpektomi), yerine kafes koyulması ve plak-vida ile sabitlenmesi.',
      '<strong>Posterior Servikal Stabilizasyon:</strong> Arkadan girilerek omurların faset eklemlerine veya pediküllerine vidalar yerleştirilip çubuklarla kırık hattının stabilize edilmesi.',
      '<strong>Kombine (360 Derece) Cerrahi:</strong> İleri derece parçalı kırık ve çıkıklarda hem önden hem arkadan aynı veya farklı seanslarda sabitleme yapılması.'
    ],
    whenToSeeDoctor: 'Yüksekten düşme, trafik kazası veya sığ suya dalma sonrasında boyunda ani ağrı, kollarda veya bacaklarda karıncalanma, keçeleşme veya güçsüzlük hissi olursa derhal 112 aranmalı ve boyun hareket ettirilmeden acil servise nakledilmelidir.',
    postTreatment: 'Ameliyat sonrasında hastanın nörolojik durumu yoğun bakım şartlarında yakından izlenir. Kemik kaynaması tamamlanana kadar (genellikle 2-3 ay) özel rijit boyunluklar (halo vest veya philadelphia boyunluk) kullanılması gerekebilir. Solunum desteği ve mesane rehabilitasyonu titizlikle takip edilir. Erken dönemde nöro-rehabilitasyon ve fizik tedaviye başlanarak sinirlerin iyileşmesi desteklenir.',
    lifestyle: 'Travma sonrası iyileşme döneminde protein, kalsiyum ve D vitamini yönünden zengin beslenmek kemik kaynamasını hızlandırır. Sigara, kemik kaynamasını (psödoartroz riski) ve sinir iyileşmesini ciddi oranda baltaladığı için kesinlikle içilmemelidir. Doktor onayından sonra hafif eklem hareket egzersizleri yapılmalıdır.',
    faq: [
      { question: 'Boyun kırığından sonra felç kalan bir hasta tamamen iyileşebilir mi?', answer: 'İyileşme şansı omurilikteki hasarın derecesine (tam kesi mi, kısmi hasar mı?) ve ameliyatın ne kadar erken yapıldığına bağlıdır. Kısmi hasarlarda erken ameliyat ve yoğun fizik tedaviyle çok başarılı sonuçlar alınabilir.' },
      { question: 'Ameliyatta takılan platinler kemik kaynadıktan sonra çıkarılır mı?', answer: 'Hayır, takılan titanyum plak ve vidalar vücutla uyumludur ve enfeksiyon ya da mekanik bir sorun yaratmadığı sürece ömür boyu kalıcı olarak bırakılır.' }
    ]
  },
  'bel-fitigi-ve-kanal-daralmasi-ameliyatlari': {
    title: 'Bel Fıtığı ve Kanal Daralması Ameliyatları',
    definition: '<strong>Bel fıtığı ve spinal kanal daralması ameliyatları</strong>, lomber (bel) omurga bölgesindeki disklerin fıtıklaşması veya omurilik kanalının daralması nedeniyle sıkışan sinirlerin üzerindeki baskıyı kaldırmak amacıyla uygulanan mikrocerrahi ve stabilizasyon operasyonlarıdır. Bel bölgesi vücudun tüm yükünü taşıdığı için bu ameliyatlar hastanın mekanik hareket kabiliyetini korumayı ve bacaklara yayılan şiddetli ağrı, uyuşukluk ve güç kayıplarını gidermeyi amaçlar.',
    mechanism: 'Bel fıtığında (lomber disk hernisi), L4-L5 veya L5-S1 disklerinin dış kılıfının yırtılmasıyla sızan materyal siyatik siniri oluşturan köklere baskı yapar. Bel dar kanalında (lomber spinal stenoz) ise süreç kroniktir. Omurga arkasındaki ligamentum flavum kalınlaşır, faset eklemler büyür ve kireçlenir, sonuçta sinirlerin geçtiği kanal daralarak vasküler beslenmeyi bozar ve yürüme esnasında sinirlerin kansız kalmasına (nörojenik klodikasyo) neden olur.',
    clinicalProcess: 'Hastanın bacak ağrısı, uyuşukluğu ve yürüme mesafesi sorgulanır. Fizik muayenede refleksler, dermatom duyuları ve ayak başparmağı güçleri incelenir. Düz bacak kaldırma testi yapılır. Lomber MRG ile fıtığın yönü, kanalın darlık derecesi milimetrik ölçülür. Eğer yürüme mesafesi 100 metrenin altına indiyse, ayak düşmesi geliştiyse veya konservatif tedavilere yanıt alınamayan şiddetli ağrı varsa cerrahi planlanır. Mikrodisektomi veya geniş dekompresyon (laminektomi) yapılır; eşlik eden kayma varsa vida yerleştirilir.',
    symptoms: [
      '<strong>Siyatalji (Bacak Ağrısı):</strong> Belden başlayıp kalça üzerinden uyluk arkasına ve ayağa kadar vuran, çekme ve yanma tarzındaki ağrı.',
      '<strong>Ayak Düşmesi (Motor Kayıp):</strong> Yürürken ayağın takılması, topuk üzerinde yürüyememe, ayak bileğinde kontrol kaybı.',
      '<strong>Nörojenik Klodikasyo:</strong> Belirli bir mesafe yürümekle bacaklarda uyuşma, kasılma ve kuvvetsizlik olması; ancak oturup öne eğilince rahatlama durumu.'
    ],
    diagnosis: [
      '<strong>Lomber Spinal MRG:</strong> Tekal sakın sıkışma derecesini, disk fıtıklaşmasını ve yumuşak doku patolojilerini en net gösteren tetkik.',
      '<strong>Lomber BT ve Dinamik Röntgen:</strong> Kemik kireçlenmelerini ve hareketle ortaya çıkan omurga kaymalarını tespit eden grafiler.'
    ],
    treatments: [
      '<strong>Lomber Mikrodisektomi:</strong> Yaklaşık 2 cm\'lik küçük bir kesiden girilerek, mikroskop altında sadece sinire baskı yapan fıtık parçasının çıkarılması işlemi.',
      '<strong>Lomber Laminektomi ve Dekompresyon:</strong> Dar kanallı hastalarda sinirleri arkadan sıkıştıran lamina kemiğinin ve kalınlaşmış bağların temizlenerek kanalın genişletilmesi.',
      '<strong>Posterior Lomber İnterbody Füzyon (PLIF/TLIF):</strong> Omurgasında kayma olan hastalarda vida ve kafes sistemleriyle omurganın sabitlenmesi.'
    ],
    whenToSeeDoctor: 'Ayak bileğinizde veya başparmağınızda ani güç kaybı (ayak düşmesi) fark ettiyseniz, bacaklarınızda ve apış arası bölgenizde uyuşukluk yerleştiyse, idrar veya gaita kontrolünüzü kaybettiyseniz bu bir "Cauda Equina" acil durumudur ve 24 saat içinde ameliyat edilmeniz gerekir.',
    postTreatment: 'Mikrocerrahi ameliyatlarından 4-6 saat sonra hasta ayağa kaldırılıp yürütülür. Ertesi gün taburcu edilir. İlk 4 hafta boyunca öne doğru eğilmek, ağır yük taşımak, ani dönme hareketleri yapmak ve alçak koltuklara oturmak yasaktır. 4. haftadan sonra kişiye özel bel ve karın kaslarını güçlendirici fizik tedavi programına başlanır.',
    lifestyle: 'Fazla kilolarınızı vererek bel omurgasına binen mekanik yükü azaltın. Ağır nesneleri kaldırırken dizlerinizi bükerek çömelin, asla belden eğilmeyin. Otururken mutlaka bel desteği kullanın ve günde en az 30-40 dakika düz zeminde yürüyüş yapın.',
    faq: [
      { question: 'Bel fıtığı ameliyatından sonra fıtık tekrarlar mı?', answer: 'Mikrocerrahi sonrası fıtığın aynı seviyede tekrarlama (nüks) oranı %5-7 civarındadır. Bu risk, kilo kontrolü ve core kaslarının güçlendirilmesi ile minimize edilebilir.' },
      { question: 'Ameliyattan sonra ne zaman işe dönebilirim?', answer: 'Masa başı işlerde çalışanlar 2-3 hafta içinde işe dönebilirken, ağır fiziksel güç gerektiren işlerde çalışanların 6-8 hafta istirahat etmesi ve kas rehabilitasyonunu tamamlaması önerilir.' }
    ]
  },
  'omurilik-tumorleri-ameliyatlari': {
    title: 'Omurilik Tümörleri Ameliyatları',
    definition: '<strong>Omurilik tümörleri ameliyatları</strong>, omurga kanalının içinde, omurilik zarının (dura mater) altında veya doğrudan omurilik parankiminin içinde gelişen iyi veya kötü huylu tümöral kitlelerin, yüksek hassasiyetli mikroskoplar ve intraoperatif nöromonitörizasyon cihazları eşliğinde, çevre sinir dokusuna zarar vermeden milimetrik olarak çıkarılmasını hedefleyen üst düzey nöroşirürjikal operasyonlardır.',
    mechanism: 'Omurilik tümörleri yerleşimlerine göre extradural, intradural-extramedullary (menenjiom, schwannom vb.) veya intramedullary (ependimom, astrositom vb.) olarak sınıflandırılır. Tümör büyüdükçe, kapalı bir kemik kutu olan spinal kanalda omuriliği doğrudan ezer, omuriliğe giden kan akışını engeller ve beyin omurilik sıvısının (BOS) dolaşımını bozarak yukarıda ve aşağıda kist (syringomyeli) oluşumuna yol açar. Bu durum nöronal iletim yollarını yıkarak hızlı ilerleyen felç durumlarına zemin hazırlar.',
    clinicalProcess: 'Teşhis, hastanın geceleri artan, ilaçla geçmeyen sırt/bel ağrıları ve bacaklardaki uyuşukluk şikayetleriyle başlar. Kontrastlı (ilaçlı) tüm omurga MRG çekilerek kitlenin milimetrik sınırları belirlenir. Ameliyat kararı alındığında, operasyon boyunca hastanın sinir sinyallerini saniye saniye takip eden Nöromonitörizasyon (IONM) kurulur. Ultrasonik aspiratörler ve mikro-makaslar kullanılarak kitle, normal omurilik dokusundan çok hassas bir şekilde diseke edilerek (ayrılarak) çıkarılır.',
    symptoms: [
      '<strong>Uykudan Uyandıran Sırt Ağrısı:</strong> Diğer fıtık ağrılarından farklı olarak, istirahat halindeyken veya gece yatarken artan, lokalize omurga ağrısı.',
      '<strong>Duyu Seviyesi Kaybı:</strong> Göğüs veya karın bölgesinde net bir hat çizerek altındaki tüm bölgelerde his kaybının başlaması.',
      '<strong>Hızlı İlerleyen Spastisite:</strong> Bacaklarda kasılma, adımları kaldıramama ve bacak güçsüzlüğü.'
    ],
    diagnosis: [
      '<strong>Kontrastlı Total Spinal MRG:</strong> Tüm omurga kanalının ilaçlı olarak taranması ve tümörün kontrast tutulum özelliklerinin belirlenmesi.',
      '<strong>Spinal BT ve Kemik Sintigrafisi:</strong> Metastatik veya kemik kökenli tümörlerin kemik yıkım derecesini değerlendirme.'
    ],
    treatments: [
      '<strong>Mikrocerrahi Tümör Eksizyonu:</strong> Yüksek büyütmeli mikroskop altında nöromonitör korumasında tümörün tamamen çıkarılması.',
      '<strong>Ultrasonik Aspiratör Kullanımı:</strong> Omuriliğe mekanik çekme kuvveti uygulamadan, tümörün ultrasonik dalgalarla eritilerek çekilmesi.',
      '<strong>Spinal Dekompresyon ve Rekonstrüksiyon:</strong> Tümöre ulaşmak için kemik dokunun alındığı durumlarda omurgayı plak ve vidalarla yeniden destekleme.'
    ],
    whenToSeeDoctor: 'Sırtınızda veya belinizde sürekli bir ağrı var ve buna ek olarak bacaklarınızda gün geçtikçe artan bir kuvvetsizlik, uyuşma veya idrar kaçırma şikayeti başladıysa vakit kaybetmeden kontrastlı MRG tetkiki yaptırmalı ve nöroşirürji uzmanına başvurmalısınız.',
    postTreatment: 'Ameliyat sonrası ilk günler hastanın nörolojik takibi çok sıkı yapılır. Patoloji sonucuna göre kitlenin iyi veya kötü huylu olduğu belirlenir. İyi huylu kitlelerde tam çıkarım sağlandıysa ek tedaviye gerek kalmaz. Kötü huylu kitlelerde onkolojik radyoterapi ve kemoterapi planlanır. Felç tablosu olan hastalara hemen yoğun fizik tedavi başlanır.',
    lifestyle: 'Nörolojik iyileşmeyi hızlandırmak için B kompleks vitaminleri ve sinir koruyucu antioksidan takviyeleri alınmalıdır. Kas kütlesini korumak için pasif ve aktif egzersizler her gün düzenli olarak sürdürülmelidir. Düzenli radyolojik takip MRG\'leri ihmal edilmemelidir.',
    faq: [
      { question: 'Omurilik tümörü ameliyatından sonra felç kalma riski yüksek midir?', answer: 'Tümörün omuriliğin neresinde yerleştiği çok önemlidir. İntramedüller (omuriliğin içindeki) tümörlerde risk daha yüksekken, extramedüller (omuriliğin dışındaki) tümörlerde nöromonitör kullanımı ile riskler oldukça düşüktür.' },
      { question: 'İyi huylu omurilik tümörleri tekrarlar mı?', answer: 'Tamamen çıkarılan menenjiom ve schwannom gibi iyi huylu tümörlerde tekrarlama (nüks) oranı son derece düşüktür; ancak hastalar yıllık kontrol MRG\'leri ile takip edilir.' }
    ]
  },
  'beyin-tumorleri-ameliyatlari': {
    title: 'Beyin Tümörleri Ameliyatları',
    definition: '<strong>Beyin tümörleri ameliyatları</strong>, kafatası içinde gelişen birincil (beynin kendi hücrelerinden köken alan) veya ikincil (metastatik) kitlelerin, gelişmiş nöronavigasyon, intraoperatif ultrasonografi, fMRI, traktografi ve mikrocerrahi yöntemleri kullanılarak maksimum oranda çıkarılmasını sağlayan yüksek teknolojili beyin cerrahisi operasyonlarıdır.',
    mechanism: 'Beyin tümörleri büyüdükçe kafa içi basıncının artmasına (KİBİS), beyin ödemine ve normal beyin dokusunun sıkışarak işlevini yitirmesine neden olur. Hücre içi sinyal yolaklarındaki mutasyonlar sonucu kontrolsüzce çoğalan bu dokular, kan-beyin bariyerini de bozarak etrafında sıvı toplanmasına (vazojenik ödem) sebebiyet verir. Bu durum nöronal yolları kesintiye uğratarak felçlere, görme/konuşma kayıplarına ve epileptik nöbetlere yol açar.',
    clinicalProcess: 'Klinik süreç, hastanın inatçı sabah baş ağrıları, kusma, nöbet geçirme veya kişilik değişiklikleri ile başvurmasıyla başlar. Tanıda 3 Tesla kontrastlı kontrastlı Beyin MRG çekilir, traktografi ile tümörün lif yollarıyla ilişkisi saptanır. Cerrahi kararı alındığında ameliyathane şartlarında nöronavigasyon sistemi kurulur. Bu sistem, cerrahın tümör sınırlarını milimetrik olarak ekranda görmesini sağlar. Mikroskop altında girilerek tümör normal beyin dokusundan sıyrılarak çıkarılır. Konuşma merkezine yakın kitlelerde ameliyat hasta uyanıkken (uyanık kraniyotomi) yapılabilir.',
    symptoms: [
      '<strong>İlerleyici Baş Ağrısı ve Kusma:</strong> Özellikle sabahları daha şiddetli olan, ağrı kesicilere yanıt vermeyen ve fışkırır tarzda kusmanın eşlik ettiği baş ağrıları.',
      '<strong>Epileptik Nöbetler:</strong> Erişkin yaşta ilk kez ortaya çıkan, vücutta kasılma veya bilinç kaybı ile seyreden sara nöbetleri.',
      '<strong>Fokal Nörolojik Bulgular:</strong> Vücudun bir tarafında güçsüzlük (felç), konuşmada bozulma, görme alanı kayıpları veya dengesizlik.'
    ],
    diagnosis: [
      '<strong>3 Tesla Beyin MRG (Kontrastlı, Spektroskopi, fMRI):</strong> Tümörün cinsini, metabolik içeriğini ve beynin fonksiyonel alanlarıyla olan ilişkisini gösteren en ileri tetkikler.',
      '<strong>Beyin BT ve PET-CT:</strong> Kalsifikasyonları ve tümörün vücuttaki başka bir kanserden metastaz yapıp yapmadığını belirleme amaçlı taramalar.'
    ],
    treatments: [
      '<strong>Nöronavigasyonlu Mikroşirürjikal Kraniyotomi:</strong> Bilgisayarlı haritalama eşliğinde kafatası açılarak mikroskop altında tümörün çıkarılması.',
      '<strong>Uyanık Kraniyotomi (Awake Craniotomy):</strong> Hastanın konuşma ve motor merkezlerine yakın tümörlerde, ameliyat sırasında hastayla konuşarak hasar riskini sıfırlayan yöntem.',
      '<strong>Nöroendoskopi:</strong> Ventrikül içindeki veya hipofiz bölgesindeki tümörlerin kameralı ince borularla temizlenmesi.'
    ],
    whenToSeeDoctor: 'Daha önce hiç yaşamadığınız şiddette, sabahları uykudan uyandıran baş ağrılarınız varsa, vücudunuzun bir tarafında his kaybı veya kuvvetsizlik geliştiyse ya da konuşurken kelimeleri seçmekte zorlanıyorsanız acilen kontrastlı MRG çekimi için nöroloji veya beyin cerrahisi uzmanına başvurmalısınız.',
    postTreatment: 'Ameliyattan sonra hastalar ilk gece yoğun bakımda takip edilir. Beyin ödemini azaltmak için steroid (kortizon) tedavisi ve nöbetleri önlemek için antiepileptik ilaçlar başlanır. Patoloji sonucuna göre (örneğin glioblastom veya iyi huylu menenjiom) onkolojik tedavi (radyoterapi, kemoterapi) planlanır veya sadece takibe alınır.',
    lifestyle: 'Anti-enflamatuar beslenme modeli (ketojenik veya Akdeniz diyeti) beyin tümörü hastalarında hücre sağlığını destekleyebilir. Cep telefonu, kimyasal toksinler ve yoğun stresten uzak durulmalıdır. Bilişsel ve fiziksel fonksiyonları geri kazanmak için rehabilitasyon programları aksatılmamalıdır.',
    faq: [
      { question: 'Ameliyat sonrası tümörün tekrarlama riski nedir?', answer: 'İyi huylu (Grade I) tümörlerde tamamen çıkarım sağlandıysa tekrarlama riski çok düşüktür. Kötü huylu (Grade III-IV) tümörlerde ise mikroskop düzeyinde hücreler kaldığı için ameliyat sonrası kemoradyoterapi yapılsa dahi tekrarlama eğilimi yüksektir.' },
      { question: 'Ameliyatta beynin zarar görmemesi nasıl sağlanır?', answer: 'Nöronavigasyon, fMRI, traktografi, ameliyat içi ultrason ve nöromonitörizasyon gibi ileri teknolojiler sayesinde sağlam beyin dokusu milimetrik olarak korunur.' }
    ]
  },
  'beyin-kanamalari-ameliyatlari': {
    title: 'Beyin Kanamaları Ameliyatları',
    definition: '<strong>Beyin kanamaları ameliyatları</strong>, yüksek tansiyon, travma, anevrizma (baloncuk) yırtılması, AVM (damar yumağı) rüptürü veya tümör kanamaları neticesinde kafa içinde biriken kan kitlesinin (hematom) acilen tahliye edilmesi, kafa içi basıncının düşürülmesi ve kanama odağının cerrahi yöntemlerle kapatılması işlemleridir. Bu ameliyatlar acil müdahale gerektiren, hayati öneme haiz operasyonlardır.',
    mechanism: 'Kafanın içi kapalı bir kutudur. Damar yırtıldığında sızan kan, kafa içi basıncı hızla yükseltir (KİBİS). Bu durum beyin dokusunu sıkıştırarak fıtıklaşmaya (herniasyon) ve beyin sapındaki solunum-dolaşım merkezlerinin ezilmesine yol açar. Ayrıca kanın içindeki toksik maddeler beyin hücrelerinde ikincil hasar (iskemi ve nekroz) başlatır. Anevrizma yırtılmalarında ise beyin omurilik sıvısı içine yayılan kan (subaraknoid kanama), damarların büzüşmesine (vazospasm) neden olarak beyin infarktlarına yol açar.',
    clinicalProcess: 'Hasta acil servise genellikle bilinç kaybı, koma hali veya ani gelişen felç tablosuyla getirilir. Saniyeler içinde çekilen kontrastsız Beyin BT ile kanamanın yeri, hacmi ve kitle etkisi belirlenir. Kanama hacmi kritik sınırı aşmışsa (genellikle lobar kanamalarda 30 cc üzeri) veya hastanın bilinci hızla kapanıyorsa hasta acilen ameliyata alınır. Ameliyatta kafatası kemiği kaldırılır (kraniyotomi), hematom tahliye edilir ve kanayan damar bipolar koagülatörlerle yakılır veya kliplenir.',
    symptoms: [
      '<strong>Yıldırım Çarpması Tarzı Baş Ağrısı:</strong> Subaraknoid kanamalarda görülen, hastanın ömründe hissettiği en şiddetli, ani başlayan baş ağrısı.',
      '<strong>Fışkırır Tarzda Kusma ve Ense Sertliği:</strong> Kafa içi basıncının artması ve beyin zarlarının kanla tahriş olması sonucu gelişen kusma ve boynun bükülememesi durumu.',
      '<strong>Ani Bilinç Kapanması:</strong> Dakikalar içinde hastanın sesli uyaranlara yanıt vermemesi, koma haline girmesi.'
    ],
    diagnosis: [
      '<strong>Acil Bilgisayarlı Tomografi (BT):</strong> Kanamanın varlığını, boyutunu ve yerini anında gösteren en hızlı tanı aracı.',
      '<strong>BT Angiografi ve DSA:</strong> Kanamaya yol açan anevrizma veya AVM (damar yumağı) gibi vasküler anomalileri tespit eden ileri tetkikler.'
    ],
    treatments: [
      '<strong>Hematom Evaküasyonu (Kraniyotomi):</strong> Kafatası kemiğinin açılarak beyin dokusuna zarar vermeden kan pıhtısının temizlenmesi.',
      '<strong>Dekompresif Kraniektomi:</strong> Beyindeki aşırı şişmeyi (ödemi) rahatlatmak için kafatası kemiğinin bir kısmının çıkarılıp karın cildine veya kemik bankasına konması ameliyatı.',
      '<strong>Anevrizma Kliplenmesi:</strong> Baloncuğun boynuna titanyum klips yerleştirilerek tekrar kanamasının engellenmesi ameliyatı.'
    ],
    whenToSeeDoctor: 'Yüksek tansiyon hastalarında ani başlayan çok şiddetli baş ağrısı, konuşma bozukluğu, kolda/bacakta güçsüzlük veya çift görme şikayeti başladığı anda 112 Acil servis aranmalı ve hasta en yakın donanımlı hastaneye ulaştırılmalıdır.',
    postTreatment: 'Ameliyattan sonra hasta mutlaka 3. düzey yoğun bakım ünitesinde takip edilir. Kan basıncı milimetrik olarak kontrol altında tutulur. Subaraknoid kanamalı hastalarda vasospazmı (damar büzüşmesini) önlemek için özel ilaç protokolleri uygulanır. Yoğun rehabilitasyon süreci (fizik tedavi, ergoterapi, konuşma terapisi) erken dönemde başlatılır.',
    lifestyle: 'Tansiyonunuzu her gün düzenli ölçün ve doktorunuzun verdiği tansiyon ilaçlarını asla aksatmayın. Sigara ve alkol damar duvarını zayıflatarak kanama riskini katladığı için kesinlikle bırakılmalıdır. Tuz tüketimini minimuma indirin ve stresten kaçının.',
    faq: [
      { question: 'Beyin kanamasından sonra felç tamamen geçer mi?', answer: 'Felç durumunun düzelmesi kanamanın büyüklüğüne, beynin hangi bölgesinde olduğuna ve hastanın yaşına bağlıdır. Hızlı yapılan ameliyatlar ve yoğun fizik tedaviyle hastaların büyük kısmı eski fonksiyonlarını geri kazanabilir.' },
      { question: 'Dekompresif kraniektomi ameliyatında çıkarılan kafatası kemiği ne zaman yerine takılır?', answer: 'Beyindeki ödem tamamen geriledikten sonra, genellikle ameliyattan 2-3 ay sonra kemik tekrar yerine yerleştirilir (kraniyoplasti ameliyatı).' }
    ]
  },
  'chiari-malformasyonu-ve-omurilik-kisti-ameliyatlari': {
    title: 'Chiari Malformasyonu (Beyincik Sarkması) ve Omurilik Kisti (Syringomyeli) Ameliyatları',
    definition: '<strong>Chiari Malformasyonu (beyincik sarkması) ve Syringomyeli (omurilik kisti) ameliyatları</strong>, beyincik bademciklerinin (tonsillerinin) kafatası tabanından omurilik kanalına doğru sarkması sonucu beyin omurilik sıvısının (BOS) akışını engellemesi ve omurilik içinde kist oluşmasına yol açan anatomik bozuklukları gidermek amacıyla uygulanan suboksipital dekompresyon ve duraplastı ameliyatlarıdır.',
    mechanism: 'Kafatasının arka çukuru (posterior fossa) dar veya küçük olduğunda, beyincik dokusu aşağıya doğru itilir. Foramen magnum hizasında sıkışan beyincik tonsilleri, adeta bir tıkaç gibi BOS dolaşımını engeller. BOS\'un daralan kanalda sıkışmasıyla omurilik merkez kanalı içinde sıvı birikmeye başlar ve bu sıvı omurilik içinde siringomiyeli adı verilen uzunlamasına kistler oluşturur. Bu kist büyüdükçe omuriliğin duyu ve motor liflerini içeriden dışarıya doğru sıkıştırarak kalıcı spinal hasar meydana getirir.',
    clinicalProcess: 'Teşhis, hastanın öksürmek, hapşırmak veya ıkınmakla ense ve baş arkasında oluşan şiddetli zonklayıcı baş ağrıları şikayetiyle başlar. Nörolojik muayenede kolların ve omuzların duyu kaybı (özellikle sıcak ve soğuğu ayırt edememe - pelerin tarzı duyu kaybı) saptanır. Beyin ve tüm omurga MRG çekilerek sarkmanın milimetrik boyutu (genellikle 5 mm üzeri) ve siringomiyeli kistinin uzunluğu değerlendirilir. Belirtileri olan ve kisti büyüyen hastalara posterior fossa dekompresyon ameliyatı planlanır.',
    symptoms: [
      '<strong>Valsalva Baş Ağrısı:</strong> Öksürme, hapşırma, gülme veya ıkınma ile tetiklenen, ense kökünden başlayıp öne yayılan şiddetli baş ağrısı.',
      '<strong>Sıcak-Soğuk Hissi Kaybı:</strong> Siringomiyeliye bağlı olarak omuzlarda ve kollarda yanıkların acısını hissetmeme, sıcak çay bardağını tutarken elinin yandığını fark edememe durumu.',
      '<strong>Yutma Güçlüğü ve Ses Kısıklığı:</strong> Beyin sapı basısına bağlı olarak gelişen yutkunma zorluğu, seste kısılma veya boğulma hissi.'
    ],
    diagnosis: [
      '<strong>Kranioservikal Entegrasyon MRG:</strong> Beyincik tonsillerinin sarkma miktarını ve foramen magnumdaki darlığı gösteren temel tetkik.',
      '<strong>Sine-MRG (BOS Akım Çalışması):</strong> Kranioservikal bileşkedeki beyin omurilik sıvısının akış dinamiklerini fonksiyonel olarak gösteren tetkik.'
    ],
    treatments: [
      '<strong>Suboksipital Dekompresyon (Posterior Fossa Dekompresyonu):</strong> Kafatasının arkasından küçük bir kemik pencere açılması ve C1 omurunun arkasının alınarak sıkışıklığın giderilmesi ameliyatı.',
      '<strong>Duraplastı:</strong> Beyin zarı (dura mater) açılarak yerine suni veya hastanın kendi dokusundan yama yapılarak BOS havuzunun genişletilmesi.',
      '<strong>Siringo-Subaraknoid Şant:</strong> Decompressyona rağmen küçülmeyen kistlerde, kist içine ince bir boru yerleştirilerek sıvının tahliye edilmesi ameliyatı.'
    ],
    whenToSeeDoctor: 'Özellikle hapşırdığınızda enselerinizde yırtılır gibi bir ağrı oluyorsa veya ellerinizde sıcak/soğuk hissini kaybettiğinizi fark ettiyseniz (örneğin sıcak suyla yıkanırken suyun sıcaklığını algılayamama), omuriliğinizde kist gelişmiş olabilir. Vakit kaybetmeden MRG çektirerek beyin cerrahına başvurmalısınız.',
    postTreatment: 'Ameliyattan sonra hastalar birkaç gün içinde taburcu edilir. Başın ani hareketlerinden kaçınılmalıdır. Ameliyat sonrası dönemde BOS kaçağı riski açısından yara yeri takibi çok önemlidir. Ameliyatın başarısı, beyin cerrahının yapacağı 3. ve 6. ay kontrol MRG\'leri ile beyincik çevresindeki BOS akışının düzelmesi ve siringomiyeli kistinin küçülmesiyle doğrulanır.',
    lifestyle: 'Ağır sporlardan, halter kaldırmaktan, boynu aşırı zorlayan hareketlerden ve ani ıkınmalardan kaçınılmalıdır. Kabız kalmamaya özen gösterilmeli, bol sıvı tüketilmelidir. Postürünüze dikkat ederek oturmalı ve ergonomik yastıklar kullanmalısınız.',
    faq: [
      { question: 'Beyincik sarkması ameliyatı tehlikeli midir?', answer: 'Modern mikroskobik cerrahi tekniklerle yapıldığında oldukça güvenli bir ameliyattır. Ameliyat edilmeyen ilerleyici vakalarda ise kalıcı felç riski çok daha yüksektir.' },
      { question: 'Ameliyattan sonra kist tamamen kaybolur mu?', answer: 'Ameliyatla beyincik rahatlatıldıktan sonra BOS akışı normale döner ve siringomiyeli kisti zaman içinde (aylar-yıllar içinde) kendiliğinden büzüşerek küçülür veya tamamen kaybolur.' }
    ]
  }
};
