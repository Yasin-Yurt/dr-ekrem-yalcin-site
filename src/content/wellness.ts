import { PageContent } from './types';

export const wellnessContent: Record<string, PageContent> = {
  'kronik-hastalik-yonetimi': {
    title: 'Kronik Hastalık Yönetimi',
    definition: '<strong>Kronik hastalık yönetimi</strong>; uzun vadeli, ilerleyici ve sürekli takip gerektiren otoimmün, kardiyovasküler, nörodejeneratif ve metabolik rahatsızlıkların sadece semptomlarını baskılamak yerine, hastalığa yol açan fizyolojik ve çevresel kök nedenleri saptayarak kişiye özel, çok yönlü ve bütünsel tedavi yaklaşımlarıyla yönetilmesidir.',
    mechanism: 'Kronik hastalıkların temelinde genellikle hücresel düzeyde düşük dereceli kronik inflamasyon, mitokondriyal disfonksiyon, yüksek oksidatif stres, hormonal dengesizlikler ve bağırsak bariyeri hasarı (geçirgen bağırsak sendromu) yatar. Hücre içi sinyal yolaklarının bozulması ve epigenetik faktörler, genetik yatkınlıkların klinik hastalıklara dönüşmesine neden olur. Tedavi, bu hücresel mekanizmaların onarılmasına odaklanır.',
    clinicalProcess: 'Süreç; hastanın tıbbi geçmişinin, genetik yapısının, beslenme alışkanlıklarının, stres faktörlerinin ve toksin maruziyetinin kapsamlı analiziyle başlar. İleri laboratuvar analizleri ile hücresel fonksiyonlar değerlendirilir. Kişiselleştirilmiş tedavi protokolü; özel beslenme tedavileri, mikrobesin takviyeleri, yaşam tarzı değişiklikleri ve gerekli durumlarda konvansiyonel tıbbi tedavilerin entegrasyonu ile yürütülür ve düzenli aralıklarla optimize edilir.',
    symptoms: [
      '<strong>Kronik Yorgunluk:</strong> Dinlenmekle geçmeyen, sabahları bitkin uyanma ve gün boyu devam eden enerji düşüklüğü.',
      '<strong>Yaygın Ağrı:</strong> Vücut genelinde, kas ve eklemlerde sebebi tam olarak açıklanamayan kronik ağrılar ve sertlik.',
      '<strong>Beyin Sisi:</strong> Konsantrasyon güçlüğü, odaklanamama, unutkanlık ve zihinsel berraklığın kaybı.',
      '<strong>Sindirim Bozuklukları:</strong> Kronik şişkinlik, gaz, kabızlık veya ishal atakları, belirli gıdalara karşı hassasiyet gelişimi.'
    ],
    diagnosis: [
      '<strong>İleri Metabolik ve Hormonal Paneller:</strong> Ayrıntılı hormon analizleri, insülin direnci ve metabolizma belirteçleri.',
      '<strong>İnflamasyon ve Oksidatif Stres Göstergeleri:</strong> Vücuttaki hücresel hasar düzeyini ölçen hassas kan testleri.',
      '<strong>Geniş Kapsamlı Mikrobiyom Analizi:</strong> Bağırsak florasının yapısını ve patojen dengesini gösteren ileri dışkı testleri.'
    ],
    treatments: [
      '<strong>Kişiselleştirilmiş Mikrobesin Tedavisi:</strong> Eksik olan vitamin, mineral, aminoasit ve antioksidanların yerine konması.',
      '<strong>Eliminasyon ve Anti-inflamatuar Beslenme:</strong> İnflamasyonu tetikleyen gıdaların belirlenerek beslenmeden çıkarılması ve bağırsak onarımı.',
      '<strong>Mitokondriyal Destek Protokolleri:</strong> Hücre enerji santralleri olan mitokondrileri aktive edecek CoQ10, ALA, NAD+ gibi takviyeler.'
    ],
    whenToSeeDoctor: 'Geçmeyen halsizlik, yaygın vücut ağrıları, açıklanamayan kilo değişimleri veya sindirim problemleri gibi yaşam kalitenizi düşüren kronik şikayetleriniz varsa bütünsel bir değerlendirme için başvurmalısınız.',
    postTreatment: 'Tedavi sonrasında hastaların periyodik laboratuvar takipleri yapılır ve kazanılan sağlıklı yaşam alışkanlıklarının sürdürülebilirliği desteklenir.',
    lifestyle: 'Düzenli egzersiz, sirkadiyen ritme uygun uyku, toksin maruziyetinin azaltılması ve stres yönetimi tekniklerinin günlük hayata entegrasyonu gereklidir.',
    faq: [
      {
        question: 'Kronik hastalık yönetiminin standart tedavilerden farkı nedir?',
        answer: 'Standart tedaviler genellikle semptomları ilaçlarla kontrol altına almayı hedeflerken, kronik hastalık yönetimi hastalığın arkasındaki hücresel, hormonal ve biyokimyasal kök nedenleri bularak kalıcı iyileşme sağlamayı amaçlar.'
      }
    ]
  },
  'hucresel-saglik-ve-yaslanma-karsiti-protokoller': {
    title: 'Hücresel Sağlık ve Yaşlanma Karşıtı (Longevity) Protokoller',
    definition: '<strong>Hücresel sağlık ve longevity (uzun ömürlülük) protokolleri</strong>; yaşlanma sürecini hücresel, moleküler ve genetik düzeyde yavaşlatmayı, hücrelerin yenilenme kapasitesini artırmayı ve bireyin kronolojik yaşından bağımsız olarak biyolojik yaşını genç, dinamik ve sağlıklı tutmayı amaçlayan modern bilimsel programlardır.',
    mechanism: 'Yaşlanmanın temel mekanizmaları arasında telomer kısalması, DNA hasarı birikimi, hücresel senesans (yaşlı hücre birikimi), mitokondriyal enerji üretiminin azalması, epigenetik değişiklikler ve kök hücre tükenmesi yer alır. Bu süreçler vücudun rejenerasyon kapasitesini azaltarak sistemik yaşlanmaya yol açar. Longevity protokolleri, sirtuin genlerini aktive ederek ve hücresel temizliği (otofaji) uyararak bu mekanizmaları tersine çevirmeyi veya yavaşlatmayı hedefler.',
    clinicalProcess: 'Biyolojik yaşın tespiti için telomer uzunluğu ölçümü, epigenetik saat analizleri, hormonal düzeyler, damar yaşı ve fonksiyonel kapasite testleri yapılır. Çıkan sonuçlara göre kişiye özel hücresel gençleşme, mitokondriyal yenilenme, IV (damar yolu) destekleri ve hücresel detoksifikasyon protokolleri tasarlanarak uzman hekim gözetiminde uygulanır.',
    symptoms: [
      '<strong>Zihinsel ve Fiziksel Performans Düşüşü:</strong> Odaklanma süresinin kısalması, hafıza zayıflığı ve fiziksel dayanıklılık kaybı.',
      '<strong>Cilt ve Dokularda Elastikiyet Kaybı:</strong> Kolajen sentezinin azalmasıyla birlikte ciltte kırışıklıklar, sarkmalar ve yavaş iyileşen yaralar.',
      '<strong>Kas ve Kemik Yoğunluğunda Azalma:</strong> Yaşa bağlı gelişen sarkopeni (kas kaybı) ve kemik kalitesinde düşüş.',
      '<strong>Uyku Kalitesizliği:</strong> Derin uyku süresinin azalması, sabahları yorgun kalkma ve melatonin salgısının zayıflaması.'
    ],
    diagnosis: [
      '<strong>Epigenetik Yaş Analizi:</strong> DNA metilasyon profillerine bakılarak biyolojik yaşın kesin olarak ölçülmesi.',
      '<strong>Telomer Uzunluğu Testi:</strong> Hücresel yaşlanma hızının ve kromozomal yaşın belirlenmesi.',
      '<strong>İleri Antioksidan ve Mitokondriyal Paneller:</strong> Vücudun serbest radikallerle savaşma kapasitesi ve mitokondriyal fonksiyon ölçümü.'
    ],
    treatments: [
      '<strong>NAD+ ve IV Antioksidan Terapileri:</strong> Hücre yenilenmesini uyaracak ve hücresel enerjiyi artıracak damar yolu tedavileri.',
      '<strong>Senolitik ve Sirtuin Aktivatörleri:</strong> Yaşlı ve hasarlı hücrelerin vücuttan temizlenmesini tetikleyen özel ajanlar.',
      '<strong>Hormon ve Peptit Terapileri:</strong> Eksilen büyüme ve gençlik hormonlarının güvenli biyoeşdeğer yöntemlerle dengelenmesi.'
    ],
    whenToSeeDoctor: '30\'lu yaşlardan itibaren doğal yaşlanma sürecini yavaşlatmak, yaşlılık dönemi hastalıklarını önlemek ve hücresel enerjinizi en üst düzeyde tutmak istediğinizde longevity protokollerine başvurabilirsiniz.',
    postTreatment: 'Uygulamaların ardından periyodik biyolojik yaş takipleri yapılır ve hücresel rezervlerin dolu kalması için idame programları sürdürülür.',
    lifestyle: 'Kalori kısıtlaması (aralıklı oruç), soğuk/sıcak maruziyeti (sauna, buz banyosu), yüksek yoğunluklu interval antrenmanlar (HIIT) ve derin uyku yönetimi protokole eşlik etmelidir.',
    faq: [
      {
        question: 'Biyolojik yaş ile kronolojik yaş arasındaki fark nedir?',
        answer: 'Kronolojik yaş doğum tarihinizden itibaren geçen süreyi gösterirken, biyolojik yaş hücrelerinizin, organlarınızın ve dokularınızın gerçek yıpranma durumunu ve sağlık durumunu ifade eder.'
      }
    ]
  },
  'kisisellestirilmis-beslenme-ve-detoks-programlari': {
    title: 'Kişiselleştirilmiş Beslenme ve Detoks Programları',
    definition: '<strong>Kişiselleştirilmiş beslenme ve detoks programları</strong>; bireyin benzersiz genetik yapısına, gıda intoleranslarına, metabolizma hızına, bağırsak mikrobiyomuna ve toksik yüküne uygun olarak hazırlanan, vücudun doğal arınma mekanizmalarını destekleyip ideal metabolik dengeyi kurmayı hedefleyen bilimsel beslenme programlarıdır.',
    mechanism: 'Her bireyin biyokimyasal yapısı farklıdır; bu nedenle tek tip diyetler uzun vadede hücresel düzeyde beslenme yetersizliklerine veya inflamasyona yol açabilir. Detoksifikasyon ise karaciğerin Faz 1 ve Faz 2 enzim sistemleri aracılığıyla vücuda giren toksinleri, ağır metalleri ve metabolik atıkları zararsız hale getirip vücuttan atması sürecidir. Yanlış beslenme ve eksik mikrobesinler bu detoks yollarını tıkayarak kronik toksisiteye neden olur.',
    clinicalProcess: 'Program öncesinde ayrıntılı genetik analizler (nutrigenetik), besin duyarlılık testleri, idrarda organik asit analizi, ağır metal testleri ve bağırsak mikrobiyom haritalandırılması gerçekleştirilir. Bireyin karaciğer detoks kapasitesi ve böbrek fonksiyonları değerlendirilerek, vücudu yormadan toksinlerden arındıracak ve eksikleri hücresel düzeyde tamamlayacak beslenme ve tıbbi detoks protokolleri oluşturulur.',
    symptoms: [
      '<strong>Sürekli Şişkinlik ve Ödem:</strong> Vücutta aşırı sıvı birikimi, göz altlarında ve ellerde sabahları belirgin şişlikler.',
      '<strong>Cilt Problemleri:</strong> Sebebi bulunamayan akne, egzama, döküntüler ve mat, solgun bir cilt görünümü.',
      '<strong>Tatlı ve Karbonhidrat Krizleri:</strong> Kan şekeri düzensizlikleri ve bağırsaktaki patojen bakterilerin tetiklediği aşırı yeme arzusu.',
      '<strong>Kilo Verememe:</strong> Metabolizma hızının yavaşlaması ve kronik toksik yük nedeniyle kilo vermekte aşırı zorlanma.'
    ],
    diagnosis: [
      '<strong>Gıda İntolerans Testi (IgG):</strong> Bağışıklık sisteminin hangi besinlere karşı kronik inflamatuar yanıt verdiğinin ölçülmesi.',
      '<strong>Ağır Metal ve Toksin Analizi:</strong> Vücutta biriken cıva, kurşun gibi ağır metallerin ve çevresel toksinlerin tespiti.',
      '<strong>İdrar Organik Asit Analizi:</strong> Karaciğer detoks yolaklarının, mitokondriyal enerji üretiminin ve bağırsak sağlığının metabolitler üzerinden tespiti.'
    ],
    treatments: [
      '<strong>Klinik Eliminasyon Diyeti:</strong> Potansiyel alerjen ve inflamatuar besinlerin belirli bir süre diyetten çıkarılarak bağırsağın dinlendirilmesi.',
      '<strong>Metabolik Detoksifikasyon Protokolü:</strong> Karaciğer Faz 2 detoksunu desteklemek için Glutatyon, NAC, Devedikeni ve özel aminoasit takviyeleri.',
      '<strong>Mikrobiyom Odaklı Prebiyotik ve Probiyotik Tedavisi:</strong> Bağırsak florasındaki faydalı bakteri popülasyonunu artırarak bağırsak bariyerinin güçlendirilmesi.'
    ],
    whenToSeeDoctor: 'Sürekli sindirim sorunları, geçmeyen ödem şikayeti, kilo kontrolünde zorluk veya toksin birikimi belirtileri yaşıyorsanız kişiye özel bir arınma programı için başvurabilirsiniz.',
    postTreatment: 'Programın ardından hastaya sürdürülebilir bir sağlıklı beslenme modeli kazandırılır ve toksinlerden uzak durma rehberi sunulur.',
    lifestyle: 'Günlük su tüketiminin artırılması, plastik kullanımının sınırlandırılması, organik besin tercihleri ve sauna gibi terleme yoluyla detoksu destekleyen aktiviteler önerilir.',
    faq: [
      {
        question: 'Detoks programı bir zayıflama diyeti midir?',
        answer: 'Hayır, detoksun öncelikli amacı vücuttaki toksik yükü azaltmak, karaciğeri desteklemek ve hücreleri temizlemektir. Ancak metabolizmayı hızlandırdığı için sağlıklı kilo kaybı doğal bir sonuç olarak gerçekleşir.'
      }
    ]
  },
  'hormonal-denge-analizi': {
    title: 'Hormonal Denge Analizi',
    definition: '<strong>Hormonal denge analizi</strong>; vücudumuzun tüm metabolik, fiziksel ve zihinsel süreçlerini yöneten endokrin sistem organlarının (tiroid, böbrek üstü bezleri, hipofiz, yumurtalıklar/testisler) salgıladığı hormonların düzeylerini, birbiriyle olan hassas ilişkilerini ve hücresel düzeydeki etkinliklerini ölçerek kişiselleştirilmiş tedavi yöntemleriyle dengelemeyi amaçlayan analiz programıdır.',
    mechanism: 'Hormonlar vücudumuzun kimyasal habercileridir. Yaşlanma, stres, toksin maruziyeti, yetersiz beslenme ve sirkadiyen ritim bozuklukları hormonların üretimini, taşınmasını veya hücre reseptörlerine bağlanmasını engeller. Tiroid, kortizol, östrojen, progesteron ve testosteron gibi hormonlar arasındaki dengenin bozulması, hücresel enerji üretiminden ruh haline kadar tüm fizyolojiyi olumsuz etkiler.',
    clinicalProcess: 'Detaylı klinik öykü alınarak hormonal düzensizlik belirtileri sorgulanır. Hormon seviyeleri sadece kanda değil, biyoyararlanımı ve metabolitleri görmek adına tükürük ve idrar gibi ileri fonksiyonel testlerle de analiz edilir. Tedavi; biyoeşdeğer hormon replasmanları, bitkisel adaptojenler, beslenme destekleri ve stres azaltma protokolleriyle vücudun kendi hormonal ritmini geri kazanmasını hedefler.',
    symptoms: [
      '<strong>Metabolik Yavaşlama ve Kilo Alma:</strong> Spor ve diyete rağmen kilo verememe, özellikle karın bölgesinde yağlanma ve kronik üşüme.',
      '<strong>Duygudurum Dalgalanmaları:</strong> Sebepsiz kaygı (anksiyete), depresif ruh hali, aşırı sinirlilik hali ve tahammülsüzlük.',
      '<strong>Uyku Bozuklukları ve Gece Terlemeleri:</strong> Uykuya dalamama, gece yarısı uyanma, uyku sırasında aşırı terleme veya huzursuzluk.',
      '<strong>Enerji Çöküşleri:</strong> Öğleden sonraları aşırı yorgunluk hissi, sabahları kortizol yetersizliğine bağlı uyanmakta zorlanma.'
    ],
    diagnosis: [
      '<strong>Kapsamlı Hormon Paneli:</strong> Serbest tiroid hormonları (T3, T4), böbrek üstü bezi hormonları ve cinsiyet hormonlarının detaylı ölçümü.',
      '<strong>Tükürükte Kortizol Eğrisi Testi:</strong> Gün içindeki stres hormonunun (kortizol) ritmini ve böbrek üstü bezi yorgunluğunu ölçen test.',
      '<strong>İdrarda Hormon Metabolitleri Analizi (DUTCH Testi):</strong> Hormonların vücutta nasıl yıkıldığını ve güvenli yollarla atılıp atılmadığını gösteren altın standart test.'
    ],
    treatments: [
      '<strong>Biyoeşdeğer Hormon Tedavisi (BHRT):</strong> Sentetik olmayan, insan vücudunun ürettiği hormonlarla birebir aynı moleküler yapıdaki doğal hormonlarla eksiklerin tamamlanması.',
      '<strong>Böbrek Üstü Bezi (Adrenal) Destekleri:</strong> Aşırı stres altında yıpranan adrenal bezleri onarmak için adaptojenik bitkiler (Ashwagandha, Rhodiola) ve C, B5 vitaminleri.',
      '<strong>Karaciğer Hormon Metabolizması Desteği:</strong> Hormonların (özellikle östrojenin) karaciğerde güvenle işlenip atılmasını sağlayan DIM ve kalsiyum d-glukarat takviyeleri.'
    ],
    whenToSeeDoctor: 'Açıklanamayan kilo artışı, kronik stres, cinsel istekte azalma, aşırı yorgunluk ve adet düzensizliği gibi hormonal dengesizlik şüphelerinde kapsamlı bir hormonal analiz yaptırmalısınız.',
    postTreatment: 'Tedavi sürecinde hormon düzeyleri periyodik olarak kontrol edilerek dozlar vücudun ihtiyacına göre ince ayarlarla optimize edilir.',
    lifestyle: 'Sirkadiyen uyku ritmine dikkat edilmesi, kafein tüketiminin sınırlandırılması, akşamları mavi ışık maruziyetinin önlenmesi ve düzenli dinlenme zamanları planlanmalıdır.',
    faq: [
      {
        question: 'Sentetik hormonlar ile biyoeşdeğer hormonlar arasındaki fark nedir?',
        answer: 'Sentetik hormonların kimyasal yapıları insan vücudundakinden farklıdır ve yan etki riskleri daha yüksektir. Biyoeşdeğer hormonlar ise vücudun ürettiği hormonlarla tamamen aynı yapıda olduğundan hücreler tarafından doğal olarak tanınır ve yan etki riski minimumdur.'
      }
    ]
  },
  'ameliyatsiz-cilt-genclestirme-uygulamalari': {
    title: 'Ameliyatsız Cilt Gençleştirme Uygulamaları',
    definition: '<strong>Ameliyatsız cilt gençleştirme uygulamaları</strong>; cerrahi bir müdahale, anestezi veya iyileşme sürecine ihtiyaç duymadan, ileri teknolojik cihazlar ve enjeksiyon yöntemleriyle cildin kolajen ve elastin üretimini tetikleyerek sıkılaşmasını, kırışıklıkların giderilmesini ve daha genç bir görünüme kavuşmasını sağlayan estetik işlemlerdir.',
    mechanism: 'Yaşla birlikte cildin dermis tabakasındaki fibroblast hücreleri daha az kolajen ve elastin üretir, bu da sarkmalara ve kırışıklıklara yol açar. Ameliyatsız gençleştirme yöntemleri, ciltte kontrollü mikro-hasarlar oluşturarak veya hücresel reseptörleri uyararak vücudun doğal yara iyileşme mekanizmasını aktive eder. Bu süreç, yeni ve kaliteli kolajen liflerinin sentezlenmesini (neokolajenez) ve cildin yeniden yapılanmasını sağlar.',
    clinicalProcess: 'Cilt analizi yapılarak cildin sarkma derecesi, kırışıklık derinliği ve nem oranı belirlenir. Hastanın beklentilerine uygun olarak ultrason (HIFU), radyofrekans (Altın İğne), lazer veya akıllı dolgular gibi yöntemlerden biri veya kombine bir tedavi planı seçilir. Uygulamalar klinik ortamında, lokal anestezik kremler yardımıyla konforlu bir şekilde gerçekleştirilir ve sosyal hayata hemen dönülebilir.',
    symptoms: [
      '<strong>Ciltte Sarkma ve Gevşeklik:</strong> Çene hattının (jawline) netliğini kaybetmesi, boyun bölgesinde ve yanaklarda sarkmalar.',
      '<strong>İnce ve Derin Kırışıklıklar:</strong> Göz çevresinde kaz ayakları, alın çizgileri ve ağız kenarındaki nazolabial kıvrımların belirginleşmesi.',
      '<strong>Hacim Kaybı:</strong> Yaşla birlikte şakaklarda, yanaklarda ve göz altlarında yağ dokusunun erimesiyle oluşan çökük görünüm.',
      '<strong>Cilt Kalitesinde Düşüş:</strong> Cildin nemini kaybetmesi, gözeneklerin genişlemesi ve cansız, mat bir görünüm alması.'
    ],
    diagnosis: [
      '<strong>Dijital Cilt Analizi:</strong> Cildin alt katmanlarındaki kolajen durumunun, leke derinliğinin ve kırışıklık profilinin tespiti.',
      '<strong>Klinik Elastikiyet Değerlendirmesi:</strong> Cildin yerçekimine karşı direncini ve elastik geri dönüş hızını ölçen fiziksel muayene.'
    ],
    treatments: [
      '<strong>Ameliyatsız Yüz Germe (Fokuslu Ultrason / HIFU):</strong> Ses dalgalarıyla cildin en derin taşıyıcı tabakasına (SMAS) ulaşarak cerrahisiz sıkılaşma ve germe etkisi sağlama.',
      '<strong>Fraksiyonel Altın İğne Radyofrekans:</strong> Mikro iğnelerle cilt altına radyofrekans enerjisi verilerek kolajen tetikleme, gözenek sıkılaştırma ve iz tedavisi.',
      '<strong>Kolajen Aşıları ve Akıllı Dolgular:</strong> Cildin kendi kolajenini üretmesini sağlayan özel hyaluronik asit ve kalsiyum hidroksiapatit içerikli gençlik aşılarının enjeksiyonu.'
    ],
    whenToSeeDoctor: 'Yüzünüzde sarkmalar başladığında, cildinizin matlaştığını ve elastikiyetini kaybettiğini gözlemlediğinizde cerrahiye gerek kalmadan erken dönemde bu uygulamalardan faydalanabilirsiniz.',
    postTreatment: 'İşlemden sonra ilk birkaç gün cilt güneşten korunmalı, yoğun nemlendirici ve güneş koruyucu kremler kullanılmalıdır.',
    lifestyle: 'Günde en az 2 litre su tüketilmeli, sigara ve alkolden uzak durulmalı, kolajen üretimini destekleyen C vitamini yönünden zengin beslenilmelidir.',
    faq: [
      {
        question: 'İşlemlerin etkisi ne kadar süre devam eder?',
        answer: 'Seçilen yönteme göre değişmekle birlikte, fokuslu ultrason ve altın iğne gibi kolajen tetikleyici işlemlerin etkileri 12-18 ay boyunca kalıcılığını korur. Düzenli yıllık tekrarlar cildin yaşlanma hızını ciddi oranda düşürür.'
      }
    ]
  },
  'mezoterapi-ve-prp-tedavileri': {
    title: 'Mezoterapi ve PRP Tedavileri',
    definition: '<strong>Mezoterapi ve PRP (Platelet Rich Plasma - Trombositten Zengin Plazma) tedavileri</strong>; cildin ve saçlı derinin ihtiyaç duyduğu vitamin, mineral, aminoasit ve büyüme faktörlerinin doğrudan sorunlu bölgeye enjekte edilerek hücresel yenilenmeyi, dolaşımı ve doku onarımını maksimum seviyeye çıkaran biyolojik gençleştirme yöntemleridir.',
    mechanism: 'Mezoterapide, cildin nem dengesini, sıkılığını ve canlılığını sağlayan özel kokteyller doğrudan cildin orta tabakasına (mezoderm) iletilir. PRP tedavisinde ise hastanın kendi kanından ayrıştırılan, doku onarımını ve kolajen sentezini başlatan trombositler (büyüme faktörleri) hedef bölgeye yoğunlaştırılmış olarak geri enjekte edilir. Bu sayede vücudun kendi kendini iyileştirme potansiyeli aktive edilir.',
    clinicalProcess: 'Tedavi edilecek bölge (yüz, boyun, dekolte, eller veya saç) temizlenir ve lokal anestezik krem uygulanır. PRP için hastadan küçük bir miktar kan alınarak özel bir santrifüj işleminden geçirilir ve büyüme faktörlerinden zengin plazma elde edilir. Hazırlanan mezoterapi kokteyli veya PRP sıvısı, çok ince uçlu mikro iğnelerle cilde milimetrik dozajlarda enjekte edilir. Genellikle 2-3 hafta arayla 3-4 seanslık kürler halinde uygulanır.',
    symptoms: [
      '<strong>Saç Dökülmesi ve Zayıflama:</strong> Saç tellerinin incelmesi, matlaşması, dökülmenin artması ve saç yoğunluğunun azalması.',
      '<strong>Ciltte Kuruluk ve Canlılık Kaybı:</strong> Cildin nem tutma kapasitesinin azalması, solgun ve yorgun yüz ifadesi.',
      '<strong>İnce Çizgiler ve Hafif Sarkmalar:</strong> Kolajen eksikliğine bağlı olarak göz ve ağız çevresinde erken yaşlanma belirtileri.',
      '<strong>Göz Altı Morlukları:</strong> Göz çevresindeki dolaşım bozukluğu nedeniyle oluşan koyu halkalar ve torbalanmalar.'
    ],
    diagnosis: [
      '<strong>Saç ve Cilt Analizi:</strong> Saç köklerinin sağlığı, dökülme tipi ve cildin nem-elastikiyet durumunun klinik olarak incelenmesi.',
      '<strong>Kan Tahlili:</strong> Saç dökülmesi veya cilt solgunluğuna neden olabilecek vitamin-mineral eksikliklerinin tespiti.'
    ],
    treatments: [
      '<strong>Yüz Mezoterapisi (Mezolifting):</strong> Cilde yoğun nem, antioksidan koruma ve parlaklık veren hyaluronik asit, vitamin ve aminoasit enjeksiyonları.',
      '<strong>Saç Mezoterapisi ve Saç PRP:</strong> Saç köklerini besleyen, dökülmeyi durduran ve yeni saç çıkışını uyaran büyüme faktörleri ve keratin içerikli kokteyller.',
      '<strong>Cilt Onarıcı PRP Tedavisi:</strong> Akne izlerini, lekeleri ve yaşlanma belirtilerini hastanın kendi kanındaki şifalı hücrelerle tedavi eden plazma enjeksiyonu.'
    ],
    whenToSeeDoctor: 'Saçlarınızda yoğun dökülme fark ettiğinizde veya cildinizin matlaştığını, nemsiz kaldığını ve yaşlanma belirtilerinin hızlandığını hissettiğinizde bu doğal hücresel yenilenme seanslarına başvurabilirsiniz.',
    postTreatment: 'İşlemden sonraki ilk 24 saat işlem yapılan bölge yıkanmamalı, sıcak su, sauna ve yoğun spordan kaçınılmalıdır.',
    lifestyle: 'Bol su tüketimi, güneşten korunma, kaliteli uyku ve sigara gibi serbest radikalleri artıran alışkanlıklardan uzak durulması tedavinin başarısını artırır.',
    faq: [
      {
        question: 'PRP tedavisinde alerji riski var mıdır?',
        answer: 'Hayır. PRP tedavisinde tamamen hastanın kendi kanından elde edilen plazma kullanıldığı için hiçbir alerji, reaksiyon veya yan etki riski bulunmamaktadır.'
      }
    ]
  },
  'leke-ve-akne-skarlari-yonetimi': {
    title: 'Leke ve Akne Skarları Yönetimi',
    definition: '<strong>Leke ve akne skarları yönetimi</strong>; güneş, yaşlanma veya hormonal nedenlerle oluşan pigmentasyon bozukluklarının (melazma, güneş lekeleri) ve sivilce sonrası ciltte kalan çukur veya skar (yara izi) dokularının modern teknolojik cihazlar ve klinik peeling yöntemleriyle derinlemesine tedavi edilerek pürüzsüz bir cilt yapısının geri kazandırılması sürecidir.',
    mechanism: 'Lekeler, melanosit hücrelerinin aşırı miktarda melanin (renk pigmenti) üretmesiyle oluşur. Akne skarları ise şiddetli sivilce inflamasyonu sonrasında cildin derin katmanlarındaki kollajen yapısının bozulması ve doku kaybıyla meydana gelen atrofik (çökük) izlerdir. Tedavide amaç; lekeli üst deri tabakasını güvenle yenilemek, melanin üretimini baskılamak ve skar altındaki yapışık dokuları serbest bırakarak kolajen sentezini yeniden başlatmaktır.',
    clinicalProcess: 'Cilt altı görüntüleme cihazlarıyla lekelerin derinliği (epidermal veya dermal) ve akne skarlarının türü (icepick, boxcar, rolling) analiz edilir. Cildin yapısına göre kimyasal peeling, enzim peeling, altın iğne radyofrekans, dermapen veya subsinzyon gibi tedaviler tek başına veya kombine seanslar halinde uygulanır. Ev devam ürünleri ile klinik tedaviler desteklenir.',
    symptoms: [
      '<strong>Güneş ve Yaşlılık Lekeleri:</strong> Yüz, dekolte ve ellerde oluşan kahverengi pigmentasyon odakları.',
      '<strong>Akne Çukurları (Skarlar):</strong> Yanaklarda ve çenede sivilce izi olarak kalan pürüzlü, dalgalı ve çökük cilt yüzeyi.',
      '<strong>Post-İnflamatuar Hiperpigmentasyon:</strong> Sivilce veya yara iyileşmesi sonrasında ciltte kalan kırmızı ve koyu renkli izler.',
      '<strong>Geniş Gözenekler ve Pürüzlü Cilt:</strong> Sebum dengesizliğine bağlı olarak cildin düzgün dokusunu kaybetmesi.'
    ],
    diagnosis: [
      '<strong>Wood Işığı ve Cilt Görüntüleme:</strong> Lekenin cildin hangi katmanında yer aldığını ve tedaviye nasıl yanıt vereceğini belirleyen ışık analizi.',
      '<strong>Skar Tipolojisi Analizi:</strong> Akne izlerinin derinliğinin ve lif dokusu bağlarının klinik olarak incelenmesi.'
    ],
    treatments: [
      '<strong>Enzim Peeling (Cosmelan / Dermamelan):</strong> Leke oluşumunu tetikleyen enzimi baskılayarak derin lekeleri temizleyen maske tedavisi.',
      '<strong>Altın İğne ve Dermapen Mikro-iğneleme:</strong> Skar dokularını mikro hasarlarla yıkarak cildin yeni ve pürüzsüz doku üretmesini sağlayan tedaviler.',
      '<strong>Subsinzyon (Skar Altı Bağ Kesme):</strong> Çökük akne izlerini aşağıya doğru çeken sert fibrotik bağların özel iğnelerle kesilerek cildin serbest bırakılması ve yukarı kalkması işlemi.'
    ],
    whenToSeeDoctor: 'Yüzünüzdeki lekeler koyulaşıp kalıcı hale geldiğinde veya sivilce izleriniz cildinizde kalıcı pürüzler ve çukurlar oluşturduğunda uzman hekim desteği almalısınız.',
    postTreatment: 'Tedavi süresince ve sonrasında her mevsim en az SPF 50+ güneş koruyucu kullanılmalı ve cilt doğrudan güneş ışığından korunmalıdır.',
    lifestyle: 'Cildi soyan agresif ürünlerin evde bilinçsizce kullanılmaması, sivilcelerin sıkılmaması ve cildin sürekli bariyer onarıcı kremlerle nemli tutulması önerilir.',
    faq: [
      {
        question: 'Leke ve skar tedavileri hangi mevsimde yapılmalıdır?',
        answer: 'Leke ve derin skar soyma tedavileri genellikle cildin güneşe karşı hassaslaşacağı yaz ayları dışında, sonbahar ve kış mevsimlerinde yapılması tercih edilen uygulamalardır.'
      }
    ]
  },
  'bolgesel-inceltme-ve-sikilasma': {
    title: 'Bölgesel İnceltme ve Sıkılaşma',
    definition: '<strong>Bölgesel inceltme ve sıkılaşma uygulamaları</strong>; diyet ve egzersize dirençli olan inatçı lokal yağ depolarının (karın, basen, gıdı, kollar vb.) gelişmiş medikal cihaz teknolojileri ve lipolitik ajanlarla parçalanarak azaltılması, aynı zamanda gevşeyen cilt dokusunun kolajen artırımıyla gerginleştirilmesi işlemleridir.',
    mechanism: 'Vücuttaki bazı yağ depoları (özellikle alfa-2 reseptörlerinin yoğun olduğu bölgeler) genetik yapı gereği spor ve diyete karşı dirençlidir. Bölgesel inceltme teknolojileri, bu lokal yağ hücrelerini ultrason, radyofrekans veya mezoterapi yoluyla hedef alarak zarlarını parçalar. Parçalanan yağ asitleri lenfatik dolaşım sistemiyle karaciğere taşınarak vücuttan doğal olarak atılır. Radyofrekans dalgaları ise aynı zamanda kollajen liflerini kısaltarak ciltte sıkılaşma sağlar.',
    clinicalProcess: 'Vücut kitle indeksi, yağ oranı ve bölgesel yağlanma kalınlığı ölçülür. Hedeflenen bölgeye göre cihazlı tedaviler (Radyofrekans, Vakum Terapileri vb.) veya enjeksiyonlu tedaviler (bölgesel lipoliz) planlanır. Seanslar konforlu bir şekilde uygulanır ve işlem sonrasında hastalar günlük yaşamlarına kesintisiz devam edebilirler.',
    symptoms: [
      '<strong>İnatçı Lokal Yağlanma:</strong> Kilo verilmesine rağmen karın, simit bölgesi, basen ve gıdıdaki yağların erimemesi.',
      '<strong>Ciltte Gevşeklik ve Selülit:</strong> Uyluk ve kalça bölgesinde portakal kabuğu görünümü, bacak içlerinde ve kollarda gevşeme.',
      '<strong>Gıdı Sarkması:</strong> Çene altındaki yağ birikimi nedeniyle yüz ovalinin netliğini kaybetmesi ve yaşlı görünüm.',
      '<strong>Doğum veya Kilo Verme Sonrası Sarkmalar:</strong> Hızlı hacim kayıpları sonrası karın ve vücut genelinde oluşan elastikiyet kaybı.'
    ],
    diagnosis: [
      '<strong>Segmental Vücut Analizi:</strong> Vücudun hangi bölgesinde ne kadar yağ ve kas dokusu olduğunun biyoelektrik impedans yöntemiyle ölçülmesi.',
      '<strong>Doku Elastikiyet Testi:</strong> Bölgesel problemin sadece yağ birikimi mi yoksa kas/cilt gevşekliği mi olduğunun klinik tespiti.'
    ],
    treatments: [
      '<strong>Enjeksiyonlu Lipoliz:</strong> Yağ eriten doğal soya lesitini (fosfatidilkolin) içerikli kokteyllerin doğrudan lokal yağ dokusuna enjekte edilerek yağların eritilmesi.',
      '<strong>Radyofrekanslı Bölgesel Sıkılaşma:</strong> Cildin alt katmanlarını ısıtarak kolajen sentezini artıran, selülitleri gideren ve gevşek dokuları geren cihaz uygulamaları.',
      '<strong>Lenf Drenaj ve G5 Masajı:</strong> Parçalanan yağların vücuttan atılımını hızlandıran, lenf dolaşımını aktive eden mekanik masaj tedavileri.'
    ],
    whenToSeeDoctor: 'Diyet ve spor yapmanıza rağmen belirli bölgelerinizdeki yağlanmayı gideremiyorsanız veya kilo kaybı sonrası sıkılaşma ihtiyacı duyuyorsanız bölgesel tedavi protokollerine başvurabilirsiniz.',
    postTreatment: 'Tedaviden sonra yağların vücuttan hızlıca atılması için bol su tüketilmeli, hafif yürüyüşler yapılmalı ve karbonhidrat tüketimi sınırlandırılmalıdır.',
    lifestyle: 'Düzenli aktif yaşam, lenfatik sistemi destekleyen kuru fırçalama, aşırı tuz tüketiminden kaçınma ve protein ağırlıklı beslenme sıkılaşma etkisini kalıcı kılar.',
    faq: [
      {
        question: 'Bölgesel inceltme işlemleri kilo verme yöntemi midir?',
        answer: 'Hayır, bu işlemler genel bir obezite tedavisi veya kilo verme yöntemi değildir. Doğru kiloda olan ancak vücut hatlarında bölgesel dengesizlik ve yağ birikimi olan kişilerin vücudunu şekillendirme ve sıkılaştırma yöntemidir.'
      }
    ]
  },
  'akupunktur-tedavisi': {
    title: 'Akupunktur Tedavisi',
    definition: '<strong>Akupunktur tedavisi</strong>; vücudun belirli stratejik noktalarına çok ince, özel steril iğnelerin batırılmasıyla sinir sistemini, hormonal dengeleri ve bağışıklık sistemini uyararak vücudun kendi kendini iyileştirme mekanizmalarını harekete geçiren, binlerce yıllık geçmişe sahip bilimsel bir tamamlayıcı tıp yöntemidir.',
    mechanism: 'Akupunktur noktalarının uyarılması, lokal olarak sinir uçlarını aktive eder ve omurilik üzerinden beyne sinyaller gönderir. Beyin bu uyarıyla birlikte endorfin (doğal ağrı kesici), serotonin (mutluluk hormonu) ve melatonin salgılar. Aynı zamanda otonom sinir sistemini dengeleyerek sempatik (savaş veya kaç) aktiviteyi azaltır, parasempatik (dinlen ve sindir) sistemi uyarır, inflamasyonu baskılar ve mikrosirkülasyonu düzenler.',
    clinicalProcess: 'Hastanın şikayetleri dinlenir ve geleneksel nabız-dil muayenesi ile modern klinik muayene birleştirilir. Tedavi amacına göre (ağrı kontrolü, zayıflama, stres yönetimi, migren vb.) vücut veya kulak (auriküloterapi) akupunktur noktaları seçilir. Tek kullanımlık steril akupunktur iğneleri belirlenen noktalara yerleştirilir ve hasta 20-30 dakika boyunca sakin bir ortamda dinlendirilir. Haftada 1-2 seans olmak üzere genellikle 10-12 seanslık kürler uygulanır.',
    symptoms: [
      '<strong>Kronik Migren ve Baş Ağrıları:</strong> İlaçlara yanıt vermeyen, günlük hayatı kabusa çeviren tekrarlayıcı baş ağrıları.',
      '<strong>Kas ve Eklem Ağrıları:</strong> Bel, boyun fıtığı ağrıları, fibromiyalji ve geçmeyen eklem kireçlenmesi ağrıları.',
      '<strong>Yüksek Stres ve Anksiyete:</strong> Kronik kaygı hali, panik atak belirtileri, uykuya dalma güçlüğü ve içsel huzursuzluk.',
      '<strong>Metabolik Yavaşlama ve İştah Kontrolsüzlüğü:</strong> Kilo verme sürecinde yaşanan iştah patlamaları, diyet yaparken yaşanan halsizlik ve stres.'
    ],
    diagnosis: [
      '<strong>Geleneksel Meridyen ve Nokta Hassasiyeti Analizi:</strong> Vücuttaki enerji kanallarındaki (meridyenler) tıkanıklıkların ve tetik noktaların belirlenmesi.',
      '<strong>Klinik Ağrı ve Otonom Sistem Muayenesi:</strong> Ağrının karakteri ve otonom sinir sistemi dengesinin klinik değerlendirmesi.'
    ],
    treatments: [
      '<strong>Vücut Akupunkturu:</strong> Ağrıyı dindirmek, bağışıklığı güçlendirmek ve iç organ fonksiyonlarını düzenlemek için vücut noktalarına uygulanan klasik yöntem.',
      '<strong>Kulak Akupunkturu (Auriküloterapi):</strong> Kilo verme, sigara bırakma ve stres tedavilerinde kulaktaki özel refleks noktalarına uygulanan mikro enjeksiyon veya kalıcı iğne tedavisi.',
      '<strong>Elektro-Akupunktur:</strong> İğnelere çok düşük frekanslı elektrik akımı verilerek sinir uyarımının ve ağrı kesici etkinin maksimuma çıkarılması yöntemi.'
    ],
    whenToSeeDoctor: 'Kronik ağrılarınız varsa, stres ve uykusuzlukla baş etmekte zorlanıyorsanız, kimyasal ilaçların yan etkilerinden kaçınmak veya kilo verme sürecinizi desteklemek istiyorsanız akupunktur tedavisine başvurabilirsiniz.',
    postTreatment: 'Seans sonrasında hafif bir gevşeme ve uyku hali görülebilir, bu vücudun iyileşme sürecine girdiğinin doğal bir göstergesidir.',
    lifestyle: 'Tedavi sürecinde sağlıklı beslenmeye özen gösterilmeli, kafein ve şeker tüketimi azaltılmalı, seans günlerinde ağır fiziksel aktivitelerden kaçınılmalıdır.',
    faq: [
      {
        question: 'Akupunktur iğneleri acıtır mı?',
        answer: 'Akupunktur iğneleri enjeksiyon iğnelerinden çok daha incedir (saç teli kalınlığında). Bu nedenle batma anında neredeyse hiç acı hissedilmez, sadece noktanın aktifleşmesiyle hafif bir dolgunluk veya sıcaklık hissi oluşur.'
      }
    ]
  },
  'ozon-terapi-uygulamalari': {
    title: 'Ozon Terapi Uygulamaları',
    definition: '<strong>Ozon terapi</strong>; medikal ozon gazının (saf oksijen ve ozon karışımı) vücuda farklı yöntemlerle uygulanarak dokuların oksijenlenmesini artırmayı, bağışıklık sistemini düzenlemeyi, kronik inflamasyonu azaltmayı ve antioksidan mekanizmaları aktive etmeyi amaçlayan güçlü bir tamamlayıcı tıp tedavisidir.',
    mechanism: 'Ozon gazı (O3) vücuda girdiğinde kırmızı kan hücrelerinin (eritrositler) esnekliğini artırarak kılcal damarlardan geçişini kolaylaştırır ve dokulara bırakılan oksijen miktarını artırır. Beyaz kan hücrelerini uyararak bağışıklık yanıtını modüle eder (immünmodülasyon). Ayrıca vücudun en güçlü iç antioksidan sistemlerini (Glutatyon, SOD) tetikleyerek serbest radikalleri nötralize eder ve hücrelerin enerjisini (ATP) artırır.',
    clinicalProcess: 'Tedavi öncesi hastanın genel sağlık durumu, karaciğer ve böbrek fonksiyonları incelenir. En yaygın yöntem olan Majör Ozon Terapide; hastadan 50-100 ml kan alınır, özel bir şişede belirlenen dozda ozon gazıyla karıştırılarak vücuda geri verilir. Süreç tamamen kapalı ve steril bir sistemde gerçekleşir. Şikayete göre haftada 2 seans olmak üzere 10 seanslık kürler uygulanması önerilir.',
    symptoms: [
      '<strong>Kronik Yorgunluk ve Halsizlik:</strong> Sabahları yataktan kalkamama, gün içinde sürekli uyku hali ve zihinsel yavaşlık.',
      '<strong>Sık Hastalanma (Bağışıklık Zayıflığı):</strong> Yılda çok kez enfeksiyon geçirme, iyileşme sürelerinin uzaması.',
      '<strong>Yaygın Vücut ve Eklem Ağrıları:</strong> Fibromiyalji şikayetleri, romatizmal ağrılar ve dolaşım bozukluğuna bağlı kas ağrıları.',
      '<strong>Yavaş İyileşen Yaralar:</strong> Diyabet veya damar sertliğine bağlı olarak doku beslenmesinin bozulmasıyla oluşan kronik yaralar.'
    ],
    diagnosis: [
      '<strong>Klinik Oksidatif Stres ve Antioksidan Seviyesi Tespiti:</strong> Vücuttaki serbest radikal yükünün ve hücrelerin oksijeni kullanma kapasitesinin analizi.',
      '<strong>G6PD Enzimi Kontrolü:</strong> Ozon tedavisine engel oluşturabilecek genetik bir enzim eksikliğinin (Bakla Alerjisi - G6PD) tespiti için yapılan kan testi.'
    ],
    treatments: [
      '<strong>Majör Ozon Terapi:</strong> Kanın ozonlanarak damar yoluyla geri verilmesiyle tüm vücutta sistemik oksijenlenme ve gençleşme sağlayan temel yöntem.',
      '<strong>Minör Ozon Terapi:</strong> Hastadan alınan küçük bir miktar kanın ozonlanarak kas içine (kalçadan) enjekte edilmesiyle bağışıklık sistemini aktive eden aşı etkisi.',
      '<strong>Lokal ve Rektal Ozon Uygulamaları:</strong> Eklem içi ağrı tedavileri veya bağırsak hastalıklarında (ülseratif kolit, Crohn) uygulanan bölgesel ozon tedavileri.'
    ],
    whenToSeeDoctor: 'Bağışıklık sisteminizi güçlendirmek, kronik yorgunluktan kurtulmak, diyabet komplikasyonlarını önlemek veya anti-aging amacıyla ozon terapisine başvurabilirsiniz.',
    postTreatment: 'Ozon tedavisi seanslarından sonra hastalar genellikle kendilerini enerjik, zinde ve zihinsel olarak berrak hissederler.',
    lifestyle: 'Ozon terapisinin etkinliğini artırmak için antioksidan yönünden zengin bütünsel gıdalarla beslenilmeli, alkol ve sigaradan uzak durulmalıdır.',
    faq: [
      {
        question: 'Ozon terapisinin kimlere uygulanması sakıncalıdır?',
        answer: 'Glukoz-6-Fosfat Dehidrogenaz (G6PD) enzim eksikliği (favizm) olanlara, aşırı aktif tiroidi (zehirli guatr) olanlara ve ileri derecede kansızlığı (anemi) olan kişilere ozon terapi uygulanmamalıdır.'
      }
    ]
  },
  'kupa-terapisi-hacamat': {
    title: 'Kupa Terapisi (Hacamat)',
    definition: '<strong>Kupa terapisi ve hacamat</strong>; vücuttaki belirli akupunktur ve refleks noktalarında negatif basınç (vakum) oluşturularak mikro-dolaşımı artırmak, ardından steril koşullarda yapılan milimetrik mikro-kesilerle biriken toksik metabolitleri, ağır metalleri ve pıhtılaşma eğilimindeki durgun kanı vücuttan uzaklaştırmak amacıyla uygulanan geleneksel ve bilimsel bir arınma tedavisidir.',
    mechanism: 'Hacamat, bağ dokusunda biriken ve lenfatik sistem tarafından atılamayan hücresel atıkları temizler. Vakum etkisi, o bölgedeki kan akışını hızlandırarak taze oksijen ve besinlerin dokuya ulaşmasını sağlar. Mikro-kesiler ise bağışıklık sistemini uyararak vücutta lokal ve sistemik anti-inflamatuar kimyasalların (sitokinler, nitrik oksit) salınmasını tetikler. Bu durum ağrıyı azaltır ve bağışıklığı dengeler.',
    clinicalProcess: 'Uygulama öncesinde hastanın tansiyonu ve kan değerleri kontrol edilir. Hacamat yapılacak sırt veya omuz bölgeleri dezenfekte edilir. Noktalara kuru kupalar yerleştirilerek 3-5 dakika vakumlanır (bölgesel uyuşma sağlanır). Kupalar kaldırılıp steril bistüri ile epidermis tabakasını geçmeyen son derece ince, ağrısız mikro-kesiler atılır. Kupalar tekrar yerleştirilerek vakumlanır ve toksik kan kupalara çekilir. İşlem sonunda alan antiseptiklerle temizlenip kapatılır.',
    symptoms: [
      '<strong>Sırt ve Omuz Ağrıları:</strong> Masa başı çalışmaya veya strese bağlı olarak sırtta oluşan kronik kas tutulmaları (kulunç).',
      '<strong>Baş Ağrısı ve Tansiyon Düzensizlikleri:</strong> Toksik birikime bağlı olarak ensede hissedilen dolgunluk ve kronik baş ağrıları.',
      '<strong>Halsizlik ve Ağırlaşma Hissi:</strong> Vücutta toksin birikmesi nedeniyle sabahları uyanamama ve sürekli tembellik hissi.',
      '<strong>Zayıf Bağışıklık:</strong> Sık sık mevsimsel hastalıklara yakalanma ve vücutta genel toksik yük hissi.'
    ],
    diagnosis: [
      '<strong>Klinik Toksik Yük ve Dolaşım Değerlendirmesi:</strong> Hastanın nabız, tansiyon ve kan tablosu (hemogram) incelenerek hacamatta uygulanacak noktaların belirlenmesi.',
      '<strong>Kontrendikasyon Taraması:</strong> Kanama-pıhtılaşma bozuklukları veya aktif enfeksiyon durumlarının sorgulanması.'
    ],
    treatments: [
      '<strong>Islak Kupa Terapisi (Hacamat):</strong> Ciltte mikro kesiler yapılarak toksik kanın vücuttan tahliye edildiği ana tedavi yöntemi.',
      '<strong>Kuru Kupa Terapisi (Vakum):</strong> Herhangi bir kesi yapmadan, sadece vakum gücüyle kas spazmlarını çözen ve kan dolaşımını tetikleyen yöntem.',
      '<strong>Hareketli (Masaj) Kupa Terapisi:</strong> Cilde özel yağlar sürülerek kupaların hatlar üzerinde kaydırılmasıyla uygulanan derin doku gevşetme masajı.'
    ],
    whenToSeeDoctor: 'Sırt ve boyun ağrılarından kurtulmak, mevsim geçişlerinde vücudunuzu toksinlerden arındırmak ve daha enerjik hissetmek istediğinizde steril klinik şartlarında hacamat yaptırabilirsiniz.',
    postTreatment: 'Hacamat sonrasında ilk 24 saat banyo yapılmamalıdır. Kesi izleri milimetrik olduğu için genellikle 2-3 gün içinde iz bırakmadan tamamen iyileşir.',
    lifestyle: 'Uygulamadan önceki ve sonraki gün hayvansal gıda tüketilmeyerek (protein kısıtlaması) vücudun detoks kapasitesi desteklenmelidir. Bol su içilmelidir.',
    faq: [
      {
        question: 'Hacamat acıtır mı ve iz bırakır mı?',
        answer: 'Vakum etkisi doğal bir uyuşukluk sağladığı için atılan mikro-çizikler neredeyse hiç acıtmaz. Çizikler çok yüzeysel (epidermal) yapıldığı için 3-5 gün içinde deri kendini yeniler ve kesinlikle kalıcı iz kalmaz.'
      }
    ]
  },
  'fitoterapi-bitkisel-tedavi-danismanligi': {
    title: 'Fitoterapi (Bitkisel Tedavi) Danışmanlığı',
    definition: '<strong>Fitoterapi</strong>; hastalıkların önlenmesi, tedavisi veya vücudun desteklenmesi amacıyla, etkinliği ve güvenliği bilimsel araştırmalarla kanıtlanmış şifalı bitkilerin, bitki özlerinin (ekstraktlar) ve uçucu yağların tıp doktoru kontrolünde kişiye özel dozlarda kullanılması sürecidir.',
    mechanism: 'Bitkiler, içerdikleri sekonder metabolitler (alkaloitler, flavonoidler, terpenler) sayesinde vücutta ilaç benzeri fizyolojik etkiler gösterirler. Sentetik ilaçların aksine, bitkilerin içindeki bu bileşikler sinerjik olarak çalışır; yani birbirlerinin etkilerini güçlendirirken yan etki potansiyellerini dengelerler. Fitoterapi, bu bitkisel etken maddelerin hücresel reseptörlerle etkileşime girerek inflamasyonu azaltmasını, hormonları dengelemesini veya bağışıklığı uyarmasını sağlar.',
    clinicalProcess: 'Danışmanlık süreci; hastanın mevcut hastalıkları, kullandığı sentetik ilaçlar, alerjileri ve genel metabolik yapısının tıp doktoru tarafından incelenmesiyle başlar. Bitkilerin ilaçlarla etkileşime girme riski (ilaç geçimsizliği) titizlikle analiz edilir. Standardize edilmiş, tescilli ve analiz raporları olan tıbbi bitkisel ürünler (kapsül, tablet, tentür, çay) belirlenir ve kullanım şeması oluşturulur.',
    symptoms: [
      '<strong>Hafif ve Orta Dereceli Depresyon / Anksiyete:</strong> Kronik stres, kaygı bozukluğu ve hafif uykusuzluk şikayetleri.',
      '<strong>Sindirim ve Safra Sorunları:</strong> Hassas bağırsak sendromu (IBS), kronik kabızlık, gaz şikayetleri ve karaciğer yağlanması.',
      '<strong>Bağışıklık Yetersizliği:</strong> Kış aylarında sık hastalanma ve viral enfeksiyonlara karşı dayanıksızlık.',
      '<strong>Hafif Dereceli Tansiyon ve Şeker Düzensizlikleri:</strong> Sınırda seyreden kan şekeri veya hafif tansiyon yükseklikleri.'
    ],
    diagnosis: [
      '<strong>Biyokimyasal Kan Analizi:</strong> Bitkisel ürünlerin metabolize edileceği karaciğer (AST, ALT) ve böbrek (Kreatinin) fonksiyonlarının değerlendirilmesi.',
      '<strong>Kapsamlı İlaç-Bitki Etkileşimi Analizi:</strong> Hastanın her gün düzenli olarak kullandığı ilaçların (özellikle kan sulandırıcılar vb.) bitkilerle etkileşim riskinin taranması.'
    ],
    treatments: [
      '<strong>Standardize Bitki Ekstraktları Tedavisi:</strong> Etken maddesi ölçülebilir ve garantili olan klinik düzeydeki bitkisel kapsül ve tabletlerin kullanımı.',
      '<strong>Tıbbi Çay Protokolleri:</strong> Doğru sıcaklık ve sürelerde hazırlanan infüzyon veya dekoksiyon yöntemiyle bitkisel çay reçeteleri.',
      '<strong>Klinik Aromaterapi:</strong> Bitkilerden elde edilen saf uçucu yağların solunum (difüzör) veya cilt yoluyla (masaj) emilimiyle uygulanan stres ve ağrı tedavileri.'
    ],
    whenToSeeDoctor: 'Kronik rahatsızlıklarınızın tedavisinde bitkilerin gücünden güvenle faydalanmak istediğinizde, kulaktan dolma bilgiler yerine bir tıp doktorunun bilimsel fitoterapi danışmanlığına başvurmalısınız.',
    postTreatment: 'Bitkisel ürünlerin etkileri ve organ fonksiyonları düzenli hekim kontrolleri ile takip edilerek gerekirse ürün çeşitleri veya dozajları güncellenir.',
    lifestyle: 'Fitoterapi, sağlıklı bir beslenme düzeni, temiz su tüketimi ve toksinlerden uzak bir yaşam tarzıyla birleştirildiğinde maksimum iyileşme gücüne ulaşır.',
    faq: [
      {
        question: 'Bitkisel ürünler tamamen zararsız mıdır?',
        answer: 'Hayır, "doğal olan her şey zararsızdır" inanışı yanlıştır. Yanlış bitki türü, yanlış dozaj veya uygunsuz ilaç etkileşimleri böbrek ve karaciğer yetmezliğine kadar varabilen ciddi zararlar verebilir. Bu nedenle mutlaka bir tıp doktoru kontrolünde kullanılmalıdır.'
      }
    ]
  }
};
